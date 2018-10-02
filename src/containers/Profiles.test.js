import React from 'react';
import ReactDOM from 'react-dom';
import Profiles from './Profiles';

import {shallow} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Profiles/>);
});

it('renders without crashing', () => {
  const wrapper = shallow(<Profiles />);
  const title = <h2 className="title">List Of Users</h2>;
  expect(wrapper.contains(title)).toEqual(true);
});

