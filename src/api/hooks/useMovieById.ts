import {QueryFunctionContext, useQuery} from '@tanstack/react-query';
import {axios} from 'api/axios';
import {Movie} from 'api/types/Movies';

const fetchMovieById = async ({queryKey: [_, id]}: QueryFunctionContext) => {
  return axios.get<Movie>(`movie/${id}`, {});
};

export const useMovieById = (id?: number) => {
  const {data, ...rest} = useQuery({
    queryKey: [`movie/${id}`, id],
    queryFn: fetchMovieById,
    enabled: !!id,
  });

  const movie = data?.data;

  return {movie, ...rest};
};
