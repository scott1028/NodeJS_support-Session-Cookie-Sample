
/*
 * GET users listing.
 */

exports.list = function(req, res){
  console.log(req.session.a);
  res.send("respond with a resource"+"Your Session a is: "+(req.session.a ? req.session.a.toString() : 'no session'));
};