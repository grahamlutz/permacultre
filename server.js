const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Import the routes from routes/index.js
const routes = require('./routes');

// Cors middleware
app.use(cors());

// Mount the individual route handlers on the Express app
app.use('/api/plants', cors(), routes.plantRoutes);

// Serve static files from the React App
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all request to React App
app.get('*', cors(), (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, cors(), () => {
  console.log(`Server is running on port ${port}`)
});