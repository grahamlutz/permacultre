const express = require('express');
const cors = require('cors');
const axios = requires('axios');

const router = express.Router();

router.get('/plants', cors(), (req, res) => {
  console.log('tada');
  res.json('tada');
})