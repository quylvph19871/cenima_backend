import express from 'express';
import homeController from '../controllers/homeController';
import userControllers from '../controllers/userControllers';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/about', homeController.getAboutPage)
    router.get('/cruduser', homeController.getCrudUser)

    router.post('/post-crud-user', homeController.postCrudUser)
    router.get('/get-crud-user', homeController.displaygetCrudUser)
    router.get('/edit-crud-user', homeController.getEditCrudUser)

    router.post('/put-crud-user', homeController.putCrudUser)
    router.get('/delete-crud-user', homeController.deleteCrudUser)

    router.post('/api/login', userControllers.handleLogin)
    router.get('/api/get-all-users', userControllers.handleGetAllUsers)
    router.post('/api/create-new-user', userControllers.handleCreateNewUser)
    router.put('/api/edit-user', userControllers.handleEditUser)
    router.delete('/api/delete-user', userControllers.handleDeleteUser)

    router.get('/api/allcode', userControllers.getAllCode)

    return app.use("/", router)
}

module.exports = initWebRoutes