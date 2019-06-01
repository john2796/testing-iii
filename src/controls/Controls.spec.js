import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';import renderer from 'react-testing-library';
import Controls from './Controls';// Test away!


afterEach(cleanup);
// ### Gate
// -[x] defaults to `unlocked` and `open`
// -[x] cannot be closed or opened if it is locked

describe('<Control />', () => {
  it('defaults to `unlocked` and `open`', () => {
    const {getByTestId} = render(<Controls />)
    
    const closed = getByTestId("closegate")
    const locked = getByTestId("locked")

    expect(closed.disabled).toBeTruthy();
    expect(locked.disabled).toBeFalsy()
  });
});
