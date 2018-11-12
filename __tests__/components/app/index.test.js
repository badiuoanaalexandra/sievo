import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import App from '../../../src/components/app/index';

const mockStore = configureStore();

const initialState = {
  projectsReducer: [
      {"project":2, "description":"test", "start date": "2013-12-28T00:00:00+00:00", "savings amount":3722.41684, "currency":"NULL"},
      {"project":1, "description":"test 2", "start date": "2014-01-28T00:00:00+00:00", "savings amount":372.32, "currency":"EUR"}
  ],
  displayProjectsReducer:{changed:false, description:"", sortingOrder:"", changedProjects:null},
  uiReducer:1024
};

const store = mockStore(initialState);

describe('<App />', () => {
  test("renders", () => {
    const wrapper = shallow(<App store={store} />);
    const component = wrapper.dive();
    expect(toJson(component)).toMatchSnapshot();
  });
});
