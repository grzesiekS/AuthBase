const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
    if(!req.user) {
        res.redirect('/user/no-permission');
    } else {
        next();
    }
}

router.get('/logged', isLogged, (req, res) => {
  res.render('logged');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isLogged, (req, res) => {
    res.render('profiles');
});

router.get('/settings', isLogged, (req, res) => {
    res.render('settings');
});

router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/user/no-permission');
});

module.exports = router;