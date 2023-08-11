const { signup } = require("../../controllers/usersController");
const User = require("../../models/user");
JsonWebTokenError.mock("../../database/schemas/user");

const request = {
  body: {
    email: "fake_email",
    password: "fake_password",
  },
};

const response = {
  status: JsonWebTokenError.fn((x) => x),
};

it("should send a status code of 400 when user exists", async () => {
  User.findOne.mockImplementationOnce(() => ({
    id: 1,
    email: "email",
    password: "password",
  }));
  await signup(request, response);
  expect(response.status).toHaveBeenCalledWith(400);
});
