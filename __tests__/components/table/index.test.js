import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import ProjectTable from '../../../src/components/table/index';

const mockStore = configureStore();

const initialState = {
  projectsReducer: [
      {"project":2, "description":"test", "start date": "2013-12-28T00:00:00+00:00", "savings amount":3722.41684, "currency":"NULL"},
      {"project":1, "description":"test 2", "start date": "2014-01-28T00:00:00+00:00", "savings amount":372.32, "currency":"EUR"}
  ],
  displayProjectsReducer:{changed:false, description:"", sortingOrder:"", changedProjects:null},
  uiReducer:1024
};


describe('<ProjectTable />', () => {
  test("renders", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<ProjectTable store={store} />);
    const component = wrapper.dive();
    expect(toJson(component)).toMatchSnapshot();
  });

  test("triggers sort", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<ProjectTable store={store} />);
    const component = wrapper.dive();

    component.find("button.sort").simulate("click",
    {target:{getAttribute: function(attr){return "project"}}});
    
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

});
