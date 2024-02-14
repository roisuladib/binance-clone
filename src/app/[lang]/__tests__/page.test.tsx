/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
   it('renders a heading', () => {
      render(<Home params={{ lang: 'en' }} />);

      const heading = screen.getByRole('heading', {
         name: /welcome to next\.js!/i,
      });

      expect(heading).toBeInTheDocument();
   });
});
