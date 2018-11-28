import express from 'express';

const app = express();
const PORT = 8080;


/**
 * USING STATIC FILES
 * (Any files contained with "public" folder will be served)
 * -------------------
 */
app.use(express.static('public'));


/**
 * ROUTES
 * -------------------
 */
  // Home route
app.get('/', (req, res) => {

  res.send(`Get request on port: ${PORT}`)

});


/**
 * SERVER INITIALIZATION
 * -------------------
 */
app.listen(PORT, () =>
  console.log(`>>>> Server running on port: ${PORT}`)
);