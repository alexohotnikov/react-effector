import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });


describe('Counter App test:', () => {
  const appMounted = mount(<App />);
  const addButton = appMounted.find('.add_input');
  const removeButton = appMounted.find('.remove_input');
  const counter = appMounted.find('.counter_id');

  it('init is good', () => {
    expect(counter.text()).toBe('0');
  });
  it('add is good', () => {
    addButton.simulate('click');
    expect(counter.text()).toBe('1');
  });
  it('remove is good', () => {
    removeButton.simulate('click');
    expect(counter.text()).toBe('0');
  });
});
