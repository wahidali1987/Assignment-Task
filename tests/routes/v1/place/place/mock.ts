import responsePayload from './response.json';
export const mockSearchPlace = jest.fn(async (query: any, sortby: any) => {
  return responsePayload.places;
});

jest.mock('../../../../../src/database/repository/PlaceRepo', () => ({
  get searchPlace() {
    return mockSearchPlace;
  },
}));
export const addAuthHeaders = (request: any) =>
  request.set('Content-Type', 'application/json').timeout(2000);
