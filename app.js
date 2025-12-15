// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Route de test
app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.get('/status', (req, res) => {
  res.send({ status: 'API is running' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
module.exports = app;