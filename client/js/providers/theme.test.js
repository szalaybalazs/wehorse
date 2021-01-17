import React from 'react';
import { shallow } from 'enzyme';
import Theme from './theme';

describe('ThemeProvider', () => {
  it('should render correctly', () => {
    const component = shallow(<Theme />);
  
    expect(component).toMatchSnapshot();
  });
});