import {axios} from 'api/axios';
import {last} from 'lodash';
import {Movie} from 'api/types/Movies';
import {QueryFunctionContext, useInfiniteQuery} from '@tanstack/react-query';

type Response = {
  results: Movie[];
  total_results: number;
  total_pages: number;
};

const fetchMovies = async ({
  queryKey: [_],
  pageParam = 1,
}: QueryFunctionContext) => {
  return axios.get<Response>('movie/popular', {
    params: {
      page: pageParam,
    },
  });
};

export const useMovies = () => {
  const {data, ...rest} = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.total_results > pages.length * 20) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  const movies = data?.pages.flatMap(page => page.data.results);

  let totalMovies: number | undefined;
  const lastPage = last(data?.pages || []);
  if (lastPage) {
    totalMovies = lastPage.data.total_results;
  }

  return {movies, totalMovies, ...rest};
};
