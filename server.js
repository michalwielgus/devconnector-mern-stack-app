const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();
const PORT = process.env.PORT || 5000;

// Database config
const db = require('./config/keys').mongoURI;

// Load routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// Body praser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect database
mongoose
  .connect(db)
  .then(() => console.log('DB connected'))
  .catch(err => console.err(err));

//Passport middleware
app.use(passport.initialize());

// Pasport config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
