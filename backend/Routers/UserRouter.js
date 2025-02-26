const express = require("express");
const UserController = require("../Controllers/UserController");

const UserRouter = express.Router();

UserRouter.post(
    "/create-account",
    (request, response) => {
        const result = new UserController().signupAccount(request.body);
        result.then(
            (success) => {
                response.send(success);
            }
        ).catch(
            (error) => {
                response.send(error);
            }
        )
    }
)

UserRouter.post(
    "/login-account",
    (request, response) => {
        const result = new UserController().loginAccount(request.body);
        result.then(
            (success) => {
                response.send(success);
            }
        ).catch(
            (error) => {
                response.send(error);
            }
        )
    }
)

UserRouter.patch(
    "/update-profile",
    (request, response) => {
        const result = new UserController().updateProfile(request.body);
        result.then(
            (success) => {
                response.send(success);
            }
        ).catch(
            (error) => {
                response.send(error);
            }
        )
    }
)

UserRouter.get(
    "/send-otp/:email",
    (request, response) => {
        const result = new UserController().sendOtp(request.params.email);
        result.then(
            (success) => {
                response.send(success);
            }
        ).catch(
            (error) => {
                response.send(error);
            }
        )
    }
)

UserRouter.patch(
    "/change-password/:user_email",
    (request, response) => {
        const result = new UserController().changePassword(request.body, request.params.user_email);
        result.then(
            (success) => {
                response.send(success);
            }
        ).catch(
            (error) => {
                response.send(error);
            }
        )
    }
)

module.exports = UserRouter;