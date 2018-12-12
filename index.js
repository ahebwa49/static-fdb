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

app.get('/test', (req, res) => {

  res.sendFile(__dirname + '/public/test.html', (err) => {
    if (err){
      res.status(500).send(err);
    }
  });
});

app.get('/testnavbar', (req, res) => {

  res.sendFile(__dirname + '/public/testnavbar.html', (err) => {
    if (err){
      res.status(500).send(err);
    }
  });
});


/**
 * SERVER INITIALIZATION
 * -------------------
 */
app.listen(PORT, () =>
  console.log(`>>>> Server running on port: ${PORT}`)
);
