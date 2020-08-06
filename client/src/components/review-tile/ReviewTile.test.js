/* @jest-environment jsdom */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ReviewTile from './ReviewTile';

configure({ adapter: new Adapter() });
// testing against data at this endpoint:
// http://52.26.193.201:3000/reviews/1/list
// review_id: 1
describe('Each tile', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewTile />);
  });

  test('should have a rating', () => {
    expect(wrapper.find('#review-rating').number()).toBe(5);
  });

  test('should have a date', () => {
    expect(wrapper.find('#review-date').text()).toBe('2019-01-01');
  });

  test('should have a body', () => {
    expect(wrapper.find('#review-body').text()).toBe('I really did or did not like this product based on whether it was sustainably sourced.  Then I found out that its made from nothing at all.');
  });

  test('should have a summary', () => {
    expect(wrapper.find('#review-summary').text()).toBe('This product was great!');
  });
});

/* Template

  test('should have a ', () => {
    expect(wrapper.find('#').text()).toBe('');
  }); */
