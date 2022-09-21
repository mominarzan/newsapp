/* GET login page. */ 
router.get('/login', function(req, res, next) { 
    res.render('login', { title: 'Login Page', message:
     req.flash('loginMessage') }); 
 });

 /* GET Signup */ 
 router.get('/signup', function(req, res) { 
    res.render('signup', { title: 'Signup Page', 
       message:req.flash('signupMessage') }); 
}); 
/* GET Profile page. */ 
router.get('/profile',  function(req, res, next) {
    res.render('profile', { title: 'Profile Page', user : req.user,
    avatar: gravatar.url(req.user.email ,  {s: '100', r: 'x', d:
     'retro'}, true) });
})