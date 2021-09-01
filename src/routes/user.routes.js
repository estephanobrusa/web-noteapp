const router=require('express').Router();
const ctrl=require('../controllers/user.controller')

//get
router.get('/users/signup',ctrl.renderReg);

router.get('/users/signin',ctrl.renderLogin);

router.get('/users/logout',ctrl.logOut)


//POST
router.post('/signin',ctrl.signIn)
router.post('/signup',ctrl.signUp)



module.exports=router;
