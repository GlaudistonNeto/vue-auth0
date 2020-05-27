const app = require('express')();
const expressJwt = require('express-jwt');
const jwks = require('jwks-rsa');

const jwtCheck = expressJwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    reteLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-nmyj8jo8.auth0.com/.well-known/jwks.json'
  }),
  audience: "udemy-api",
  issuer: 'https://dev-nmyj8jo8.auth0.com/',
  algorithms: ['RS256']
});

app.get('/public', (req, res) => {
  res.status(200).send('Hello public!');
});

app.get('/private', jwtCheck, (req, res) => {
  res.status(200).send('Hello private!');
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(8888, () => {
  console.log('API started on port 8888');
});