import express from 'express';

const app = express();
const PORT = 8080;
const ENV = 'dev'; // 'prod' development or production environments
// Directory of front-end files built from webpack
const DIR_FRONT_END_BUILD = 'build';
// Front-end directory served to the server: 'dev' or 'prod'
const DIR_FRONTEND_ASSETS = `${DIR_FRONT_END_BUILD}-${ENV}/front-end`;
// const DIR_FRONTEND = `${ASSETS_DIR}-${ENV}`;
// const BACKEND_DIR = `${ASSETS_DIR}/back-end`;


/**
 * USING STATIC FILES
 * (Any files contained with "public" folder will be served)
 * -------------------
 */
app.use(express.static(DIR_FRONTEND_ASSETS));


/**
 * ROUTES
 * -------------------
 */
  // Home route
app.get('/', (req, res) => {

  // res.send(`Get request on port: ${PORT}`)

  res.sendFile(__dirname + `/${DIR_FRONTEND_ASSETS}/index.html`, (err) => {
    if (err){
      res.status(500).send(err);
    }
  });

});

app.get('/index2', (req, res) => {

  res.sendFile(__dirname + '/public/index2.html', (err) => {
    if (err){
      res.status(500).send(err);
    }
  });
});

app.get('/login', (req, res) => {

  res.sendFile(__dirname + '/public/login.html', (err) => {
    if (err){
      res.status(500).send(err);
    }
  });
});

app.get('/create_post', (req, res) => {

  res.sendFile(__dirname + '/public/create_post.html', (err) => {
    if (err){
      res.status(500).send(err);
    }
  });
});

app.get('/post', (req, res) => {

  res.sendFile(__dirname + '/public/post.html', (err) => {
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
