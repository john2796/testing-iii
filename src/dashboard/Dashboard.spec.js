// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';
// ### Dashboard
// - shows the controls and display

describe('<Dashboard />', () => {
  it('shows the controls and display', () => {
      const tree = renderer.create(<Dashboard />)
      expect(tree.toJSON()).toMatchSnapshot();
  })
})