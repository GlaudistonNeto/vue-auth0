import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'dev-nmyj8jo8.auth0.com',
  clientID: '5GkhNMS5zcPVz3sYse0G9ROurxXfeieW',
  redirectUrl: 'http://localhost:8080/auth0callback',
  audience: 'https://dev-nmyj8jo8.auth0.com/userinfo',
  responseType: 'token id_token',
  scope: 'openid profile'
});

let tokens = {};
let userProfile = {};

const login = () => {
  webAuth.authorize();
}

const handleAuth = (cb) => {
  webAuth.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      tokens.accessToken = authResult.accessToken;
      tokens.idToken = authResult.idToken;
      tokens.expiry = (new Date()).getTime() + authResult.expiresIn * 1000;
      userProfile = authResult.idTokenPayload;
      cb();
    } else {
      console.log(err);
    }
  })
}

const isLoggedIn = () => {
  return (tokens.accessToken && (new Date()).getTime() < tokens.expiry);
}

const logout = () => {
  tokens = {};
}

const getProfile = () => {
  return userProfile
};

export {
  login,
  logout,
  handleAuth,
  isLoggedIn,
  getProfile
}