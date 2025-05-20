import { test, expect } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET all Products List', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();;
    expect(responseBody).toBeTruthy();
  });
  
test ('POST To All Products List', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/productsList', {
        data: {
            title: 'Test Post',
            body: 'Test post',
            userId: 1,
        },
    });
    expect(response.status()).toBe(200);
});

test('PUT To All Products List', async ({ request }) => {
    const response = await request.put('https://automationexercise.com/api/productsList', {
        data: {
            title: 'Update Title',
            body: 'Update content',
            userId: 1,
        },
    });
    expect(response.status()).toBe(200);
});

test('GET All Brands List', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/brandsList');
    expect(response.status()).toBe(200);
  
    const responseBody = await response.json();;
    expect(responseBody).toBeTruthy();
  });

test('PUT To All Brands List', async ({ request }) => {
    const response = await request.put('https://automationexercise.com/api/brandsList', {
        data: {
            title: 'Update Title',
            body: 'Update content',
            userId: 1,
        },
    });
    expect(response.status()).toBe(200);
});

test ('POST to Search Products failure', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/searchProducts', {
        data: {
            search_product: ''
        },
    });
    expect(response.status()).toBe(404);
});

test('GET API Status', async ({ request }) => {
    const response = await request.get('https://simple-grocery-store-api.glitch.me/');
    expect(response.status()).toBe(200);
});

test('GET Returns items and stores the ID', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users`);
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
});

test('POST Creates a new user', async ({ request }) => {
        const newUser ={
            name: 'Test User',
            username: 'testuser',
            email: 'testuser@example.com'
        };
        const response = await request.post(`${BASE_URL}/users`,{
            data: newUser
        });

        expect(response.status()).toBe(201);
        const user = await response.json();
        console.log('User is:' + JSON.stringify(user));
        expect(user).toMatchObject(newUser);
});

test('PUT Updates a created user', async ({ request }) => {
    const updatedUser ={
        name: 'Test User2',
        username: 'testuser2',
        email: 'testuser2@example.com'
    };
    const response = await request.post(`${BASE_URL}/users`,{
        data: updatedUser
    });

    expect(response.status()).toBe(201);
    const user = await response.json();
    console.log('User is:' + JSON.stringify(user));
    expect(user).toMatchObject(updatedUser);
});

test ('DELETE Removes a created user', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/1`);
    expect(response.status()).toBe(200);
});