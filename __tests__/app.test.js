const request = require("supertest");
const app = require("../app");

// Mock DB
jest.mock("mysql2", () => {
  return {
    createPool: () => ({
      query: (query, params, callback) => {
        // handle both cases
        if (typeof params === "function") {
          callback = params;
        }
        callback(null, []); // success response
      }
    })
  };
});


// ✅ 1. Root API
test("GET / should return API message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("API is working v6");
});


// ✅ 2. Get Users
test("GET /users should return users list", async () => {
  const res = await request(app).get("/users");
  expect(res.statusCode).toBe(200);
});


// ✅ 3. Add User
test("POST /add-user should create user", async () => {
  const res = await request(app)
    .post("/add-user")
    .send({ name: "John", email: "john@test.com" });

  expect(res.statusCode).toBe(200);
});


// ✅ 4. Delete User
test("DELETE /users/:id should delete user", async () => {
  const res = await request(app).delete("/users/1");
  expect(res.statusCode).toBe(200);
});