export const formImageURL = (path: string) => {
  const imageSize = 'w185';
  const baseURL = 'https://image.tmdb.org/t/p/';
  return `${baseURL}${imageSize}${path}`;
};
