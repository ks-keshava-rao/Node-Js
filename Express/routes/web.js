import express from 'express'
const router = express.Router();

import controllerclass from '../controllers/controller.js'
router.get('/info',controllerclass.get_session_info);
router.get('/delete',controllerclass.delete_session);
router.get('/regnsession',controllerclass.regn_session);
router.get('/sesscount',controllerclass.session_counter);
router.get('/getdata',controllerclass.get_session_data);
export default router;