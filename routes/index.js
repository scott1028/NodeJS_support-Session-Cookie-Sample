
/*
 * GET home page.
 */

exports.index = function(req, res){
  req.session.a=1;  // set user request include a session!
  // req.session = null // clear session
  res.render('index', { title: 'Express' });
};