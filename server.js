// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/create-survey', (req, res) => {
  const surveyData = req.body;

  // Here you would process the surveyData, save to a database, and perform other necessary actions
  // For simplicity, let's just log the received data for now
  console.log('Received Survey Data:', surveyData);

  // Respond with a success message
  res.json({ message: 'Survey created successfully!' });
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});