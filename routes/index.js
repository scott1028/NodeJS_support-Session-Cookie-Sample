
/*
 * GET home page.
 */

exports.index = function(req, res){
  //req.cookies.b; // read cookie
  res.cookie('b',11);   // set cookie
  req.session.a=1;  // set session, difference with cookie
  // req.session = null // clear session
  res.render('index', { title: 'Express' });
};

// math get.all('*') will be a top routes
exports.userAuth=function(req, res){
  // you can auth req then determine to next routes
  if( true ){
  exports.index(req,res);
  }
  else{
    res.send('you need login!');
  }
};