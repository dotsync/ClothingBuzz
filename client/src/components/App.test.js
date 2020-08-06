/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

test('Should contain the title Hello, World', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('#title').text()).toBe('Hello, World');
});
