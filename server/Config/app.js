module.exports.appConfig = {
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
    { key: 1, name: 'สเปคงาน', nextTask: 9 },
    { key: 2, name: 'แบบ', nextTask: 3 },
    { key: 3, name: 'ตัด', nextTask: 4 },
    { key: 4, name: 'พันท์', nextTask: 5 },
    { key: 5, name: 'พับ', nextTask: 6 },
    { key: 6, name: 'เชื่อมประกอบ', nextTask: 7 },
    { key: 7, name: 'พ่นสี', nextTask: 8 },
    { key: 8, name: 'ประกอบสำเร็จรูป', nextTask: '' },
    { key: 9, name: 'อุปกรณ์', nextTask: '' },
    { key: 10, name: 'วายริ่ง', nextTask: '' }
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
  ],
  userDepartment: [
    { key: 'admin', name: 'Admin (ผู้ดูแลระบบ)' },
    { key: 'qc', name: 'Qc (ผู้ตรวจสอบสินค้า)' }
  ],
  qcSection: [
    { key: 'cutting', name: 'ตัด', role: [8, 10]},
    { key: 'design', name: 'แบบ', role: [1, 2]},
    { key: 'manufacture', name: 'การผลิต', role: [3, 4, 5, 6, 7]},
    { key: 'wiring', name: 'วายริ่ง', role: [9, 10]}
  ]
}