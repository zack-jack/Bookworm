function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect("/profile");
  }
  return next();
}

function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error("Please log in to view this page.");
    err.status = 401;
    return next(err);
  }
}

module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
