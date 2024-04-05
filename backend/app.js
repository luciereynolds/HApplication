const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserDAO = require('./models/UserDAO');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Allow requests from Vercel frontend
const corsOptions = {
    origin: 'https://h-application-luciereynolds-projects.vercel.app/',
  };
  
  app.use(cors(corsOptions));
// Initialize UserDAO
const userDAO = require('./models/UserDAO');

app.get('/', (req, res) => {
    res.send('Backend is running');
  });

// User login route allows user to log in and assigns a JSON Web Token to ensure they can access restricted pages
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Lookup user
        const user = await userDAO.lookup(username);
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// Start the server
module.exports = app;
