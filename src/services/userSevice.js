import bcrypt, { hash } from 'bcryptjs'
import db from "../models/index"


var salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password', 'firstName', 'lastName'],
                    where: { email: email },
                    raw: true,

                });
                if (user) {
                    //compare password: dùng cách 1 hay cách 2 đều chạy đúng cả =))
                    // Cách 1: dùng asynchronous (bất đồng bộ)
                    //let check = await bcrypt.compare(password, user.password);


                    // Cách 2: dùng synchronous  (đồng bộ)
                    let check = bcrypt.compareSync(password, user.password);

                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';

                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `Không tìm thấy người dùng`;
                }

            } else {
                //return error
                userData.errCode = 1;
                userData.errMessage = `Email của bạn không tồn tại trong hệ thống của chúng tôi, vui lòng thử email khác`
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }

        } catch (e) {
            reject(e)
        }
    })
}

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['passWord']
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    where: {
                        id: userId
                    },
                    attributes: {
                        exclude: ['passWord']
                    }

                })
            }
            resolve(users)
        } catch (error) {
            reject(error);
        }
    })
}

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'Email của bạn đã được sử dụng'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.passWord);
                await db.User.create({
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    passWord: hashPasswordFromBcrypt,
                    gender: data.gender,
                    phoneNumber: data.phoneNumber,
                    roleId: data.roleId,
                })

                resolve({
                    errCode: 0,
                    errMessage: 'OK'
                })
            }

        } catch (error) {
            reject(error)
        }
    })
}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }

    })
}
let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let user = await db.User.findOne({
            where: {
                id: userId
            }
        })
        if (!user) {
            resolve({
                errCode: 2,
                errMessage: `Người dùng không tồn tại`
            })
        }
        // if (user) {
        //     await user.destroy()
        // }


        await db.User.destroy({
            where: {
                id: userId
            }
        })
        resolve({
            errCode: 0,
            message: `Xóa thành công`
        })
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.gender) {
                resolve({
                    errCode: 2,
                    errMessage: 'Tham số bắt buộc'
                })
            }
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.phoneNumber = data.phoneNumber;
                user.gender = data.gender
                await user.save()

                resolve({
                    errCode: 0,
                    errMessage: 'Sửa thành công'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `Không tìm thấy người dùng`
                });
            }

        } catch (error) {
            reject(error)
        }
    })
}

let getAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Thiếu tham số bắt buộc'
                })
            } else {
                let res = {}
                let allcode = await db.Allcode.findAll({
                    where: { type: typeInput }
                });
                res.errCode = 0;
                res.data = allcode;
                resolve(res)
            }

        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeService: getAllCodeService
}