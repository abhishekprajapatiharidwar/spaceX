import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../assets/Nav/Nav';

test('Nav component renders without errors', () => {
  render(<Nav />);
});
