//import { addHeaders } from '../../../../auth/authentication/mock';
import { mockSearchPlace, addAuthHeaders } from './mock';
import app from '../../../../../src/app';
import supertest from 'supertest';
describe('Search places by URL route', () => {
  beforeEach(() => {
    mockSearchPlace.mockClear();
  });

  const request = supertest(app);
  const endpoint = '/suggestions';
  // it('Should send error when endpoint query is not matched', async () => {
  //   const response = await addAuthHeaders(request.get(`${endpoint}?q=invalid`));
  //   expect(response.status).toBe(200);
  //   expect(response.body.message).toMatch(/success/);
  //   expect(response.body.suggestions).toBeDefined();
  // });

  it('Should send data when blog exists for url', async () => {
    const response = await addAuthHeaders(
      request.get(
        `${endpoint}?q=Abbo&latitude=-122.252&longitude=49.05798&radius=8046&sort=distance`,
      ),
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toMatch(/success/);
    expect(response.body.suggestions).toBeDefined();
  });
});
