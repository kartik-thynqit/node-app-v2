const app = require("../app");

test("app loads", () => {
  expect(app).toBeDefined();
});
test("dummy test", () => {
  expect(true).toBe(true);
});