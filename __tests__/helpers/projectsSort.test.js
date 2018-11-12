import { fetchSortedProjects, getNewSortingOrder } from '../../src/helpers/projectsSort';

describe('projectsSort', () => {

  describe('fetchSortedProjects', () => {
    const projects = [
      {"project":1, "description":"test something that needs to be filtered"},
      {"project":12, "description":"test "},
      {"project":2, "description":"test SOMETHing that needs to be filtered"}
    ]

    test('sorts array ascending', async () => {
      const expectedProjects = [
        {"project":1, "description":"test something that needs to be filtered"},
        {"project":2, "description":"test SOMETHing that needs to be filtered"},
        {"project":12, "description":"test "}
      ]

      var ascProjects = fetchSortedProjects("asc", "project", projects)

      expect(ascProjects).toEqual(expectedProjects);
    });

    test('sorts array desceding', async () => {
      const expectedProjects = [
        {"project":12, "description":"test "},
        {"project":2, "description":"test SOMETHing that needs to be filtered"},
        {"project":1, "description":"test something that needs to be filtered"}
      ]

      var descProjects = fetchSortedProjects("desc", "project", projects)

      expect(descProjects).toEqual(expectedProjects);
    });

    test('sorts array with empty sortingOrder', async () => {
      var sortedProjects = fetchSortedProjects("", "project", projects)

      expect(sortedProjects).toEqual(projects);
    });

  });

  describe('getNewSortingOrder', () => {
    test('returns proper values', async () => {
      let sortingOrder = getNewSortingOrder("")
      expect(sortingOrder).toEqual("asc");

      sortingOrder = getNewSortingOrder("asc")
      expect(sortingOrder).toEqual("desc");

      sortingOrder = getNewSortingOrder("desc")
      expect(sortingOrder).toEqual("asc");
    });
  });

});
