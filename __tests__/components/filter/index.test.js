import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Filter from '../../../src/components/filter/index';

const mockStore = configureStore();

const initialState = {
  projectsReducer: [
      {"project":2, "description":"test", "start date": "2013-12-28T00:00:00+00:00", "savings amount":3722.41684, "currency":"NULL"},
      {"project":1, "description":"test 2", "start date": "2014-01-28T00:00:00+00:00", "savings amount":372.32, "currency":"EUR"}
  ],
  displayProjectsReducer:{changed:false, description:"", sortingOrder:"", changedProjects:null},
  uiReducer:1024
};

describe('<Filter />', () => {

  test("renders", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<Filter store={store} />);
    const component = wrapper.dive();
    expect(toJson(component)).toMatchSnapshot();
  });

  test("successfully triggers reset", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<Filter store={store}/>);
    const component = wrapper.dive();

    component.find("button.reset").simulate("click");
    const actions = store.getActions();
    expect(actions).toEqual([ { type: 'REQUEST_PROJECTS_RESET' } ]);
  });

  test("successfully triggers sort on mobile", () => {
    const store = mockStore(initialState);
    global.innerWidth = 500;
    const wrapper = shallow(<Filter store={store}/>);
    const component = wrapper.dive();

    component.find("button.sort").simulate("click");
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'REQUEST_PROJECTS_SORT',
      changedProjects: [
          {"project":2, "description":"test", "start date": "2013-12-28T00:00:00+00:00", "savings amount":3722.41684, "currency":"NULL"},
          {"project":1, "description":"test 2", "start date": "2014-01-28T00:00:00+00:00", "savings amount":372.32, "currency":"EUR"}
      ],
      description:"",
      sortField:"project",
      sortingOrder:""
    } ]);
  });

  test("successfully requests filtering", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<Filter store={store}/>);
    const component = wrapper.dive();

    component.find(".filter").find("input").simulate("change", {target: {value:"test 2"}});
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'REQUEST_PROJECTS_FILTER',
      filterProjects: [
          {"project":2, "description":"test", "start date": "2013-12-28T00:00:00+00:00", "savings amount":3722.41684, "currency":"NULL"},
          {"project":1, "description":"test 2", "start date": "2014-01-28T00:00:00+00:00", "savings amount":372.32, "currency":"EUR"}
      ],
      description:"test 2",
      descriptionField:"description",
      sortField:undefined,
      sortingOrder:""
    } ]);
  });

});
