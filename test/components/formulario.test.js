import React from 'react';
import { render } from '@testing-library/react';
import Formulario from '../../src/components/Formulario';

test('renders learn react link', () => {
  const { getByText } = render(<Formulario />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
