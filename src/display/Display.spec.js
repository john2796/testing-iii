import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-testing-library';
// ### Display Component
import Display from './Display';

afterEach(cleanup)

describe('<Display />', () => {
it(`displays if gate is open/closed and if it is locked/unlocked`, () => {
const {getByTestId} = render(<Display />) 

    const locked = getByTestId("locked").textContent
    const closed = getByTestId("closed").textContent

    expect(locked).toBeTruthy();
    expect(locked).toEqual('Unlocked');

  
    expect(closed).toBeTruthy()
    expect(closed).toEqual('Open');

  })


})