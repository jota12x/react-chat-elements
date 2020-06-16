import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import FileMessage from '../FileMessage';

describe('FileMessage component', () => {
  it('should render without issues', () => {
    const component = shallow(<FileMessage data={{}} />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});