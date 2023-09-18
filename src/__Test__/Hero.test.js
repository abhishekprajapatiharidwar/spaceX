import React from 'react';
import { render } from '@testing-library/react';
import Hero from '../assets/HeroPage/Hero';

test('Hero component renders without errors', () => {
  render(<Hero />);
});
