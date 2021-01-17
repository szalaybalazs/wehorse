import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Search from './Search';

const mockStore = configureStore([]);
const store = mockStore({ courses: { courseList: [] }})

describe('Search', () => {
  it('should render correctly', () => {
    const component = shallow(<Provider store={store}><Search /></Provider>);
    expect(component).toMatchSnapshot();
  });
});