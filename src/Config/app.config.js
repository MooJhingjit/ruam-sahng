
const api = {
  // 'apiEndPoint': 'http://localhost:3000/api',
  'apiEndPoint': `${window.location.protocol}//${window.location.hostname}:3000/api`, // for production
  'app': {
    'resource': '/app/resource'
  },
  'user': {
    'index': '/user'
  },
  'login': '/login'
}

const variable = {}

export default {
  api,
  variable
}

