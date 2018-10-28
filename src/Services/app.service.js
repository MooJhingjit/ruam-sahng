import axios from 'axios'
import commonHelper from '@Libraries/common.helpers'
const createHeader = () => {
  let token = commonHelper.GET_STORAGEITEM('app_token')
  let headers = {'Content-Type': 'application/json'}
  if (token) {
    // headers.Authorization = `${token.substring(1, token.length - 1)}`
    headers.Authorization = token
  }
  let instance = axios.create({
    headers
  })
  return instance
}
const instance = createHeader()
const getResource = (obj, callback) => {
  return new Promise((resolve, reject) => {
    instance.get(commonHelper.GET_FULLAPI(obj.resourceName, obj.queryString))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const postResource = (obj, callback) => {
  return new Promise((resolve, reject) => {
    instance.post(commonHelper.GET_FULLAPI(obj.resourceName), {
      data: obj.data
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const putResource = (obj, callback) => {
  return new Promise((resolve, reject) => {
    instance.put(commonHelper.GET_FULLAPI(obj.resourceName), {
      data: obj.data
    })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const deleteResource = (obj, callback) => {
  return new Promise((resolve, reject) => {
    instance.delete(commonHelper.GET_FULLAPI(obj.resourceName, obj.queryString))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default {
  getResource,
  postResource,
  putResource,
  deleteResource
}
