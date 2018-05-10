var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/loginRePwd', function(req, res, next) {
  res.render('loginRePwd');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.post('/index', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/tenantQuery', function(req, res, next) {
  res.render('tenantQuery');
});

router.get('/tenantAdd', function(req, res, next) {
  res.render('tenantAdd');
});

router.get('/callIn', function(req, res, next) {
  res.render('callIn');
});

router.get('/callOut', function(req, res, next) {
  res.render('callOut');
});

router.get('/reportOut', function(req, res, next) {
  res.render('reportOut');
});

router.get('/reportIn', function(req, res, next) {
  res.render('reportIn');
});

router.get('/costInfo', function(req, res, next) {
  res.render('costInfo');
});

router.get('/costType', function(req, res, next) {
  res.render('costType');
});

router.get('/noticeQuery', function(req, res, next) {
  res.render('noticeQuery');
});

router.get('/noticeAdd', function(req, res, next) {
  res.render('noticeAdd');
});

router.get('/user', function(req, res, next) {//个人信息管理-账号管理
  res.render('user');
});

router.get('/userRePwd', function(req, res, next) {//个人信息管理-账号管理
  res.render('userRePwd');
});

router.get('/website', function(req, res, next) {//关于网站
  res.render('website');
});

router.get('/author', function(req, res, next) {//关于作者
  res.render('author');
});

router.get('/version', function(req, res, next) {//系统版本
  res.render('version');
});

module.exports = router;
