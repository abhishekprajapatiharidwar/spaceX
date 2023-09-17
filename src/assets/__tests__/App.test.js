import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders the App component', () => {
    const { getByText } = render(<App/>);
    const element = getByText('Hello, World!'); // Replace with your own assertion
    expect(element).toBeInTheDocument();
  });
  
