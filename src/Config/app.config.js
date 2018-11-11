
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
    { key: 1, name: 'สเปคงาน' },
    { key: 2, name: 'แบบ' },
    { key: 3, name: 'ตัด' },
    { key: 4, name: 'พันท์' },
    { key: 5, name: 'พับ' },
    { key: 6, name: 'เชื่อมประกอบ' },
    { key: 7, name: 'พ่นสี' },
    { key: 8, name: 'ประกอบสำเร็จรูป' },
    { key: 9, name: 'อุปกรณ์' },
    { key: 10, name: 'วายริ่ง' }
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
