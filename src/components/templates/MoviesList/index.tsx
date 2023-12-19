import {FlashList} from '@shopify/flash-list';
import {useMovies} from 'api/hooks/useMovies';
import {Movie} from 'api/types/Movies';
import {MovieItem} from 'components/organisms/MovieItem';
import {useCallback} from 'react';

export const MoviesList = () => {
  const {movies} = useMovies();

  const renderItem = useCallback(({item}: {item: Movie}) => {
    return <MovieItem movie={item} />;
  }, []);

  return (
    <FlashList
      data={movies}
      renderItem={renderItem}
      estimatedItemSize={280}
      numColumns={2}
    />
  );
};
