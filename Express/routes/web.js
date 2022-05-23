import express from 'express'
const router = express.Router();

import controllerclass from '../controllers/controller.js'
router.get('/info',controllerclass.get_session_info)

export default router;