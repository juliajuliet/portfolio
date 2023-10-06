// routes/index.js

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('home', {title: "Home"})
});

router.get('/about', function(req, res) {
  res.render('about', {title: "About me"})
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio', {title: "Portfolio"})
});

router.get('/services', function(req, res) {
  res.render('services', {title: "What I Can Do For You"})
});

router.get('/contact', function(req, res) {
  res.render('contact', {title: "Contact me"})
});

module.exports = router;
