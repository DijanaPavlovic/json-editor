import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ItemEditor from './ItemEditor';

const arrayItemMock = {
  id: '4640a713-4b85-4c2a-9239-e8dcb326fac3',
  isActive: true,
  picture: 'http://placehold.it/32x32',
  age: 33,
  name: 'Adele Vincent',
  email: 'adelevincent@hometown.com',
  address: '132 Vandervoort Place, Wright, Texas, 7991',
  about: 'test',
  registered: '2019-02-07T12:37:40',
};

const props = { data: arrayItemMock, onChange: jest.fn() };

describe('ItemEditor:', () => {
  beforeEach(() => render(<ItemEditor {...props} />));

  it('should render correctly', () => {
    Object.keys(arrayItemMock)
      .filter((key) => key !== 'id')
      .forEach((key) => expect(screen.getByText(new RegExp(`${key}`, 'gi'))).toBeInTheDocument());

    Object.values(arrayItemMock)
      .filter((value) => typeof value in ['string', 'number'])
      .forEach((value) => expect(screen.getByText(value.toString())).toBeInTheDocument());
  });

  it('should call change handler when text input change occur', () => {
    const nameInput = screen.getByLabelText(/name/);

    userEvent.type(nameInput, 'Name');

    expect(props.onChange).toHaveBeenCalledTimes(4);
  });
});
