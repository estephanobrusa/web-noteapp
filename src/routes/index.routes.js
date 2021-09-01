const router=require('express').Router();
const ctrl=require('../controllers/index.controller')

//GET
router.get('/',ctrl.renderIndex);
router.get('/about',ctrl.renderAbout);

module.exports=router;