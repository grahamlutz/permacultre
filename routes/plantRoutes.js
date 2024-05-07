const express = require('express');
const router = express.Router();
const axios = requires('axios');

router.get('/plants', (req, res) => {
  res.json('tada');
})