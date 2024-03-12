const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Kết nối database MongoDB
mongoose.connect('mongodb://localhost:27017/demo-auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema User
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'marketing', 'coordinator', 'student', 'guest']
  }
});

const User = mongoose.model('User', UserSchema);

// Passport Local Strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Incorrect email or password.' }); }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { message: 'Incorrect email or password.' }); }

      return done(null, user);
    });
  });
}));

// Middleware kiểm tra quyền truy cập
const auth = (roles) => {
  return (req, res, next) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/login');
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).send('Forbidden');
    }

    next();
  };
};

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/login'
}));

app.get('/profile', auth(['admin', 'marketing', 'coordinator', 'student']), (req, res) => {
  res.render('profile', { user: req.user });
});

app.get('/admin', auth(['admin']), (req, res) => {
  res.send('Đây là trang quản trị viên');
});

app.get('/marketing', auth(['marketing']), (req, res) => {
  res.send('Đây là trang dành cho giám đốc tiếp thị');
});

app.get('/coordinator', auth(['coordinator']), (req, res) => {
  res.send('Đây là trang dành cho điều phối viên');
});

app.get('/student', auth(['student']), (req, res) => {
  res.send('Đây là trang dành cho học sinh');
});

app.get('/guest', auth(['guest']), (req, res) => {
  res.send('Đây là trang dành cho khách');
});

app.listen(3000);
