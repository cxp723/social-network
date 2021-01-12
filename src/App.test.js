import React from 'react';
import { render } from '@testing-library/react';
import SocialNetwork from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<SocialNetwork />);
  const preloader = getByTestId('preloader');
  expect(preloader).toBeInTheDocument();
});
