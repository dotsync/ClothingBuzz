/* @jest-environment jsdom */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ReviewsList from './ReviewsList';

configure({ adapter: new Adapter() });

describe('ReviewsList component when there are 2 or less reviews', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewsList />);
  });

  test('should render all reviews', () => {
    // does 1 tile render per review?
  });

  test('should not have a button called more reviews', () => {
    // does 1 tile render per review?
  });
});

describe('ReviewsList component when there are more than 2 reviews', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewsList />);
  });

  test('if there are more than 2 reviews a button should appear called more reviews', () => {
    // does 1 tile render per review?
  });

  test('there should be a button called more reviews', () => {
    // does 1 tile render per review?
  });

  test('clicking more reviews button adds 2 more reviews to the list', () => {
    // does 1 tile render per review?
  });
});

// TODO: if no reviews have been submitted the list will collapse and a button to
// sumbit a new review will appear near the top
