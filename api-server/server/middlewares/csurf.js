import csurf from 'csurf';

export default function() {
  const protection = csurf({
    cookie: {
      domain: process.env.COOKIE_DOMAIN || 'localhost'
    }
  });
  return function csrf(req, res, next) {
    const path = req.path.split('/')[1];
    if (/^donate\/update-paypal$/.test(path)) {
      return next();
    }
    return protection(req, res, next);
  };
}
