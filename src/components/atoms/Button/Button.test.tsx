import {Button} from './index';
import {render, fireEvent} from '@testing-library/react-native';

describe('Button component', () => {
  it('should render correctly and trigger onPress', () => {
    // Arrange
    const onPressMock = jest.fn();
    const title = 'Click me';

    const {getByTestId, getByText} = render(
      <Button title={title} onPress={onPressMock} />,
    );

    const buttonContainer = getByTestId('touchable-button');
    const buttonText = getByText(title);

    expect(buttonContainer).toBeTruthy();
    expect(buttonText).toBeTruthy();

    fireEvent.press(buttonContainer);

    expect(onPressMock).toHaveBeenCalled();
  });
});
