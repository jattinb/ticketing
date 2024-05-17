import request from 'supertest';
import { app } from '../../app';
import { signin } from '../../test/signin';

it('should return the current user', async () => {
    const cookie = await signin()

    // const authResponse = await request(app)
    //     .post('/api/users/signup')
    //     .send({
    //         email: 'test@test.com',
    //         password: 'password'
    //     })
    //     .expect(201);

    // const cookie = authResponse.get('Set-Cookie');
    // expect(cookie).toBeDefined(); // Ensure the cookie is defined

    const response = await request(app)
        .get('/api/users/currentuser') // Change to GET as it is more appropriate for retrieving user info
        .set('Cookie', cookie!)
        .send()
        .expect(200);

    // Additional assertions can be added here to check the response body
    expect(response.body.currentUser).toBeDefined();
    expect(response.body.currentUser.email).toEqual('test@test.com');
});
