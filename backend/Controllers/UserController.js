// const { generateOTP } = require("../helper");
const User = require("../models/User");
const Cryptr = require('cryptr');

const cryptr = new Cryptr('wscubetech@jaipur');

class UserController {

    signupAccount(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await User.findOne({ user: data.username });
                    if (user !== null) {
                        reject(
                            {
                                msg: "This user is Already exists",
                                status: 0
                            }
                        )
                    } else {
                        const userAccount = new User(
                            {
                                ...data,
                                password: cryptr.encrypt(data.password)
                            }
                        );
                        userAccount.save()
                            .then(
                                () => {
                                    resolve(
                                        {
                                            msg: "Account Created Successfully",
                                            status: 1,
                                            userAccount
                                        }
                                    )
                                }
                            ).catch(
                                (error) => {
                                    reject(
                                        {
                                            msg: "Unable to Created Account",
                                            status: 0,
                                            error
                                        }
                                    )
                                }
                            )
                    }
                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    loginAccount(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await User.findOne({ user: data.username });
                    if (user !== null) {
                        const dbPass = cryptr.decrypt(user.password)
                        if (dbPass === data.password) {
                            resolve(
                                {
                                    msg: "Login successfully",
                                    status: 1,
                                    user
                                }
                            )
                        } else {
                            reject(
                                {
                                    msg: "Invalid Password",
                                    status: 0
                                }
                            )
                        }
                    } else {
                        reject(
                            {
                                msg: "Invalid email",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    reject(
                        {
                            msg: "Internal Server Error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    updateProfile(data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    User.updateOne(
                        { _id: data._id },
                        {
                            name: data.name,
                            email: data.email,
                            contact: data.contact ?? null,
                            address: data.address ?? null
                        }
                    ).then(
                        (success) => {
                            resolve(
                                {
                                    msg: "User Profile Updated Successfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (success) => {
                            reject(
                                {
                                    msg: "Unable to Profile Updated",
                                    status: 0
                                }
                            )
                        }
                    )
                } catch (error) {
                    reject(
                        {
                            msg: 'Internal Server Error',
                            status: 0
                        }
                    )
                }
            }
        )
    }

    // sendOtp(email) {
    //     return new Promise(
    //         async (resolve, reject) => {
    //             try {
    //                 const user = await User.findOne({ email: email });
    //                 if (user !== null) {
    //                     const otp = generateOTP();
    //                     const transporter = nodemailer.createTransport(
    //                         {
    //                             host: 'smtp.ethereal.email',
    //                             port: 587,
    //                             auth: {
    //                                 user: 'joaquin.koss37@ethereal.email',
    //                                 pass: 'fHZu2gd1h3VbvZhJc8'
    //                             }
    //                         }
    //                     );
    //                     const option = {
    //                         from: 'joaquin.koss37@ethereal.email', // sender address
    //                         to: email, // list of receivers
    //                         subject: "Forgot Password OTP ✔", // Subject line
    //                         text: `Your OTP is ${otp}`, // plain text body
    //                     };
    //                     transporter.sendMail(
    //                         option,
    //                         (error, info) => {
    //                             if (error) {
    //                                 reject({
    //                                     msg: 'Invalid Email',
    //                                     status: 0
    //                                 })
    //                             } else {
    //                                 User.updateOne({ email: email }, { forgot_password_otp: otp })
    //                                     .then()
    //                                     .catch()
    //                                 resolve(
    //                                     {
    //                                         msg: 'OTP Send Successfully',
    //                                         status: 1,
    //                                         info
    //                                     }
    //                                 )
    //                             }
    //                         }
    //                     );
    //                     resolve(
    //                         {
    //                             msg: 'OTP Send Successfully',
    //                             status: 1
    //                         }
    //                     )
    //                 } else {
    //                     reject(
    //                         {
    //                             msg: 'Invalid Email',
    //                             status: 0
    //                         }
    //                     )
    //                 }
    //             } catch (error) {
    //                 reject(
    //                     {
    //                         msg: 'Internal Server Error',
    //                         status: 0
    //                     }
    //                 )
    //             }
    //         }
    //     )
    // }

    changePassword(data, user_email) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const user = await User.findOne({ email: user_email });
                    const oldPassword = data.old_password
                    const dbPass = cryptr.decrypt(user.password);
                    if (oldPassword === dbPass) {
                        User.updateOne(
                            { email: user_email },
                            {
                                password: cryptr.encrypt(data.new_password)
                            }
                        )
                            .then(
                                () => {
                                    resolve(
                                        {
                                            msg: "Password Changed",
                                            status: 1
                                        }
                                    )
                                }
                            ).catch(
                                (erroe) => {
                                    reject(
                                        {
                                            msg: "Unable to Password Changed",
                                            status: 0,
                                            erroe
                                        }
                                    )
                                }

                            )
                    } else {
                        reject({
                            msg: "old password is wrong",
                            status: 0
                        })
                    }

                } catch (error) {
                    reject(
                        {
                            msg: 'Internal Server Error',
                            status: 0,
                            error
                        }
                    )
                }
            }
        )
    }
}

module.exports = UserController;