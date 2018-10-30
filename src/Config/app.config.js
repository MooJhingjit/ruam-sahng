
const api = {
  // 'apiEndPoint': 'http://localhost:3000/api',
  'apiEndPoint': `${window.location.protocol}//${window.location.hostname}:3000/api`, // for production
  'app': {
    'resource': '/app/resource'
  },
  'login': '/login',
  'user': {
    'index': '/user'
  },
  'login': '/login'
}

const variable = {
  tokenStorage: 'ruamsahng_token',
  authStorage: 'ruamsahng_auth'
}

export default {
  api,
  variable
}

