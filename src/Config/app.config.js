
const api = {
  // 'apiEndPoint': 'http://localhost:3000/api',
  'apiEndPoint': `${window.location.protocol}//${window.location.hostname}:3000/api`, // for production
  'app': {
    'resource': '/app/resource'
  },
  'login': '/login',
  'job': {
    'index': '/job'
  },
  'product': {
    'index': '/product'
  },
  'user': {
    'index': '/user'
  }
}

const variable = {
  tokenStorage: 'ruamsahng_token',
  authStorage: 'ruamsahng_auth',
  productType: [
    {
      key: 1,
      name: 'ตู้เปล่า'
    },
    {
      key: 2,
      name: 'วายริ่ง'
    }
  ],
  productDepartment: [
    { key: 1, name: 'สเปคงาน', nextTask: null },
    { key: 2, name: 'แบบ', nextTask: 3 },
    { key: 3, name: 'ตัด', nextTask: 4 },
    { key: 4, name: 'พันท์', nextTask: 5 },
    { key: 5, name: 'พับ', nextTask: 6 },
    { key: 6, name: 'เชื่อมประกอบ', nextTask: 7 },
    { key: 7, name: 'พ่นสี', nextTask: 8 },
    { key: 8, name: 'ประกอบสำเร็จรูป', nextTask: null },
    { key: 9, name: 'อุปกรณ์', nextTask: null },
    { key: 10, name: 'วายริ่ง', nextTask: null }
  ],
  equipment: [
    { key: 1, name: 'เหล็ก' },
    { key: 2, name: 'สแตนเลส' },
    { key: 3, name: 'สังกะสี' }
  ],
  colorType: [
    { key: 1, name: 'ชุบ' },
    { key: 2, name: 'พ่น' }
  ],
  accessory: [
    { key: 1, name: 'ใส่กระจก' },
    { key: 2, name: 'ใส่ยาง' },
    { key: 3, name: 'อะคริลิค' }
  ]
}

export default {
  api,
  variable
}
