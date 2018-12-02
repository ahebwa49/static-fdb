import express from 'express';

const app = express();
const PORT = 8080;
// const DEV_ENV = 'dev'; // 'prod' development or production environments
// const ASSETS_DIR = DEV_ENV ? 'dev' : 'prod';
const ASSETS_DIR = 'assets';
const FRONTEND_DIR = `${ASSETS_DIR}/front-end`;
const BACKEND_DIR = `${ASSETS_DIR}/back-end`;


/**
 * USING STATIC FILES
 * (Any files contained with "public" folder will be served)
 * -------------------
 */
app.use(express.static(ASSETS_DIR));


/**
 * ROUTES
 * -------------------
 */
  // Home route
app.get('/', (req, res) => {

  // res.send(`Get request on port: ${PORT}`)

  res.sendFile(__dirname + `/${FRONTEND_DIR}/index.html`, (err) => {
    if (err){
      res.status(500).send(err);
    }
  });

});

// app.get('/test', (req, res) => {

//   res.sendFile(__dirname + `/${FRONTEND_DIR}/test.html`, (err) => {
//     if (err){
//       res.status(500).send(err);
//     }
//   });
// });

// app.get('/testnav', (req, res) => {

//   res.sendFile(__dirname + `/${FRONTEND_DIR}/testnav.html`, (err) => {
//     if (err){
//       res.status(500).send(err);
//     }
//   });
// });



/**
 * SERVER INITIALIZATION
 * -------------------
 */
app.listen(PORT, () =>
  console.log(`>>>> Server running on port: ${PORT}`)
);
