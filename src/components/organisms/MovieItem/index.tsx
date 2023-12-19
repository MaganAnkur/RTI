import {Movie} from 'api/types/Movies';
import {ImageCard} from 'components/molecules/ImageCard';
import {useAppNavigation} from 'hooks/useAppNavigation';
import {FC, useMemo} from 'react';
import {formImageURL} from 'utils/helpers/image-helper';

interface Props {
  movie: Movie;
}

export const MovieItem: FC<Props> = ({movie}) => {
  const {navigate} = useAppNavigation();
  const imageUrl = useMemo(
    () => formImageURL(movie.poster_path),
    [movie.poster_path],
  );

  return (
    <ImageCard
      imgSrc={imageUrl}
      onPress={() => {
        navigate('MovieDetailScreen', {movieId: movie.id});
      }}
    />
  );
};
