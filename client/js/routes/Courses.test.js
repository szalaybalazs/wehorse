import React from 'react';
import { shallow } from 'enzyme';
import Courses from './Courses';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({ courses: { courseList: [] }})
describe('ThemeProvider', () => {
  it('should render correctly', () => {
    const component = shallow(<Provider store={store}><Courses /></Provider>);
  
    expect(component).toMatchSnapshot();
  });
});