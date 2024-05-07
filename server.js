const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Import the routes from routes/index.js
const routes = require('./routes');

// Mount the individual route handlers on the Express app
app.use('/api/plants', routes.plantRoutes);

// Serve static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all request to React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});