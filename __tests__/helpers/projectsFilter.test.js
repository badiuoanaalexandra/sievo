import { fetchFilteredProjects } from '../../src/helpers/projectsFilter';

describe('projectsFilter', () => {

  describe('fetchFilteredProjects', () => {
    test('filters projects correctly', async () => {
        const projects = [
          {"project":1, "description":"test something that needs to be filtered"},
          {"project":2, "description":"test "},
          {"project":3, "description":"test SOMETHing that needs to be filtered"}
        ]

        const newProjects1 = await fetchFilteredProjects("est something", "description", projects);

        const projectsToExpect1 = [
          {"project":1, "description":"test something that needs to be filtered"},
          {"project":3, "description":"test SOMETHing that needs to be filtered"}
        ]

        expect(newProjects1).toEqual(projectsToExpect1);

        const newProjects2 = await fetchFilteredProjects("EST somethING", "description", projects);

        expect(newProjects2).toEqual(projectsToExpect1);
    });
  });

});
