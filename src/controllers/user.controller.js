const User=require('../models/user');
const passport=require('passport');
const userCtrl={}

//GET
userCtrl.renderLogin=(req,res)=>{
    res.render('users/signin')
}

userCtrl.renderReg=(req,res)=>{
    res.render('users/signup')
}

//POST
userCtrl.signUp= async (req, res) => {
  
  let errors = [];
  const { name, email, password, passconfirm } = req.body;
  if (password != passconfirm) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      passconfirm,
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The Email is already in use.");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({  name,email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered.");
      res.redirect("/users/signin");
    }
  }
};

userCtrl.signIn=passport.authenticate('local-signup', {
    successRedirect: "/notes/all-notes",
    failureRedirect: "/users/signin",
    failureFlash: true,
  });

userCtrl.logOut=(req,res)=>{
    req.logout();
    req.flash("logout", "You are logged out now.");
    res.redirect("/");

}



module.exports=userCtrl;

