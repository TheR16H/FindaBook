require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./config/connection'); // This should use the connection from the first file
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The connection is already made in the first file, so you don't need to connect again here.
// Just ensure that the connection is established before starting the server.
db.once('open', () => {
  // if we're in production, serve client/build as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.use(routes);

  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});