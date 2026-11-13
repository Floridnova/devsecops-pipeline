const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/items', (req, res) =>
  res.json([{ id: 1, name: 'notebook' }, { id: 2, name: 'pen' }])
);

module.exports = app;