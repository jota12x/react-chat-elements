import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Avatar } from '../Avatar';

describe('Avatar component', () => {
  it('should render without issues', () => {
    const component = shallow(<Avatar src="test.io" />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});