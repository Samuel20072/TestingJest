const fetch = require('node-fetch');

const BASE_URL = 'https://expert-space-happiness-9766rr4gxxwwhw75-10101.app.github.dev/usuario/register';

describe('Register API', () => {
  test('should register a new user', async () => {
    const newUser = {
        "name": "Juan torres",
        "username": "juan_perez2025",
        "email": "juan.perez2025@example.com",
        "password": "Segura123@",
        "phone": "3001234567"
    };

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data).toHaveProperty('status', 'register ok');
  });
});
