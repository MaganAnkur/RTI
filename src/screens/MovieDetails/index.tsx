import {RouteProp, useRoute} from '@react-navigation/native';
import {useMovieById} from 'api/hooks/useMovieById';
import {Button} from 'components/atoms/Button';
import {Spacer} from 'components/atoms/Spacer';
import {Text} from 'components/atoms/Text';
import {ImageCard} from 'components/molecules/ImageCard';
import {TrailerItem} from 'components/molecules/TrailerItem';
import {AppNavigatorParams} from 'navigation/app-navigator';
import {Fragment, useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {getYear} from 'utils/helpers/date-helper';
import {formImageURL} from 'utils/helpers/image-helper';

import {Tokens} from 'utils/theme';

export const MovieDetailsScreen = () => {
  const {params} =
    useRoute<RouteProp<AppNavigatorParams, 'MovieDetailScreen'>>();

  const {movie, isLoading} = useMovieById(params.movieId);

  const imageURL = useMemo(
    () => formImageURL(movie?.poster_path as string),
    [movie?.poster_path],
  );

  const movieYear = useMemo(
    () => getYear(movie?.release_date as string),
    [movie?.release_date],
  );

  const movieRating = useMemo(() => {
    const rating = movie && (movie?.vote_average as number).toFixed(1);
    return `${rating} / 10`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie?.vote_average]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.pageTitle}>
        <Text variant={'title3'} color={'white'}>
          {movie?.title}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.highlights}>
          <ImageCard variant="secondary" imgSrc={imageURL} onPress={() => {}} />
          <View style={styles.details}>
            <View>
              <Text variant={'title1'} color={'secondary'}>
                {movieYear}
              </Text>
              <Text
                variant={'body14-regular'}
                color={'secondary'}
                style={styles.duration}>
                {`${movie?.runtime} mins`}
              </Text>
            </View>
            <View>
              <Text variant={'body14-bold'} color={'secondary'}>
                {movieRating}
              </Text>
              <Button title={'Add to Favorite'} onPress={() => {}} />
            </View>
          </View>
        </View>
        <View>
          <Text variant={'body14-medium'} color={'body_text'}>
            {movie?.overview}
          </Text>
        </View>
        <View>
          <Text variant={'body14-medium'} color={'body_text'}>
            TRAILERS
          </Text>
          <View style={styles.divider} />
          {['Play Trailer 1', 'Play Trailer 2'].map(title => (
            <Fragment key={title}>
              <TrailerItem title={title} onPress={() => {}} />
              <Spacer space="sm" direction="vertical" />
            </Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Tokens.colors.white,
    rowGap: Tokens.space.xl,
  },
  pageTitle: {
    width: '100%',
    backgroundColor: Tokens.colors.primary,
    padding: Tokens.space.md,
    justifyContent: 'center',
  },
  innerContainer: {
    rowGap: Tokens.space.xl,
    paddingHorizontal: Tokens.space.md,
    columnGap: Tokens.space.md,
  },
  highlights: {
    flexDirection: 'row',
    columnGap: Tokens.space.md,
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  duration: {
    fontStyle: 'italic',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: Tokens.colors.tertiary,
    marginBottom: Tokens.space.md,
  },
});
