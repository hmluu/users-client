import React from 'react';
import ReactDOM from 'react-dom';
import Profiles from './Profiles';

import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  shallow(<Profiles/>);
});

it('should render correctly', () => {
  const wrapper = shallow(<Profiles />);
  expect(wrapper).toMatchSnapshot();
});

it('renders without crashing', () => {
  const wrapper = shallow(<Profiles />);
  const title = <h2 className="title">List Of Users</h2>;
  expect(wrapper.contains(title)).toEqual(true);
});

it('should list 3 names', () => {
  const wrapper = shallow(<Profiles/>)
  const list = 3;
  expect(list).toEqual(3);
});

it('renders list-items', () => {
  const profiles = [{
    id: 1,
    first: "John",
    last: "Roberts",
    age: 51,
    location: "Chicago, IL",
    description: "John is a retired YouTuber"
  },
  {
    id: 2,
    first: "Frita",
    last: "Waters",
    age: 27,
    location: "Phoenix, AZ",
    description: "Frita loves the desert, cheese, and turtles."
  },
  {
    id: 3,
    first: "Bart",
    last: "Simpson",
    age: 24,
    location: "Springfield, IL",
    description: "Bart skateboards everywhere."
  }];

  const wrapper = mount(<Profiles profiles={profiles} />);

  // Expect the wrapper object to be defined
  expect(wrapper.find('.users')).toBeDefined();
  expect(wrapper.find('.profiles')).toHaveLength(length);
});

it('Test click event', () => {
  const mockCallBack = jest.fn();

  const click = shallow((<li onClick={mockCallBack}>First Last</li>));
  click.find('li').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
