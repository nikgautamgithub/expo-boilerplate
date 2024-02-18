import { render, screen } from '@testing-library/react-native';

import Home from '@/app/home';

describe('Home component', () => {
  describe('Render method', () => {
    it('should render the default text', () => {
      render(<Home />);

      const text = screen.queryByText('Kartik');
      expect(text).toBeVisible();
    });
  });
});
