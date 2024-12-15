const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/api/users', (req, res) => {
  // Handle user creation logic here
  const { name, email } = req.body;
  // Save the user to the database or perform other operations
  res.status(201).json({ message: 'User created successfully', user: { name, email } });
});

// Export the Express app
module.exports = app;
