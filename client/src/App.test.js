import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Players from './compoents/Players'
// import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

test('Navbar title', async () => {
  const wrapper = rtl.render(<App/>)
  const women = wrapper.getByText(`Women's World Cup players`)
  expect(women).toBeVisible()
})

test('Player', async () => {
  const wrapper = rtl.render(<Players/>);
  const players = wrapper.getByText(/players/i);
  expect(players).toBeVisible()
})


