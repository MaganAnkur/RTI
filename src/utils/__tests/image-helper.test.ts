import {formImageURL} from 'utils/helpers/image-helper';

describe('formImageURL function', () => {
  it('should form the correct image URL', () => {
    const imagePath = '/example-image.jpg';
    const result = formImageURL(imagePath);
    const expectedURL = 'https://image.tmdb.org/t/p/w185/example-image.jpg';
    expect(result).toEqual(expectedURL);
  });

  it('should handle empty path', () => {
    const emptyPath = '';
    const result = formImageURL(emptyPath);
    const expectedURL = 'https://image.tmdb.org/t/p/w185'; // Assuming an empty path results in the base URL
    expect(result).toEqual(expectedURL);
  });
});
