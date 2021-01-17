import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Course from './Course';

const mockStore = configureStore([]);
const store = mockStore({ courses: { courseList: [] }})

describe('Course', () => {
  it('should render correctly', () => {
    const component = shallow(<Provider store={store}><Course /></Provider>);
    expect(component).toMatchSnapshot();
  });
});