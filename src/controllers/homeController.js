import db from "../models/index"
import CrudUserService
    from "../services/CrudUserService";
let getHomePage = async (req, res) => {

    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    } catch (error) {
        console.log(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCrudUser = (req, res) => {
    return res.render('CrudUser.ejs')
}

let postCrudUser = async (req, res) => {
    let message = await CrudUserService.createNewUser(req.body)
    console.log(message);
    return res.send(" post crud feom sever")
}

let displaygetCrudUser = async (req, res) => {
    let data = await CrudUserService.getAllUsers()
    return res.render('displayCrudUser.ejs', {
        dataTable: data
    })
}

let getEditCrudUser = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CrudUserService.getUserInfoById(userId)
        //check user data not found



        return res.render('editCrudUser.ejs', {
            user: userData
        })
    }
    else {
        return res.send('user not found ')
    }
}

let putCrudUser = async (req, res) => {
    let data = req.body;
    let allUsers = await CrudUserService.updateUserData(data);
    return res.render('displayCrudUser.ejs', {
        dataTable: allUsers
    })

}

let deleteCrudUser = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CrudUserService.deleteUserById(id);
        return res.send('delete the user successfully')
    } else {
        return res.send('user not found')
    }

}


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCrudUser: getCrudUser,
    postCrudUser: postCrudUser,
    displaygetCrudUser: displaygetCrudUser,
    getEditCrudUser: getEditCrudUser,
    putCrudUser: putCrudUser,
    deleteCrudUser: deleteCrudUser,
}