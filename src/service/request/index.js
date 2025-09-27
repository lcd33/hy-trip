import axios from "axios";
import useMainStore from "@/stores/moudule/mainStore";
import { BASE_URL, TIMEOUT } from "./config";

const mainStore = useMainStore()
class hyAxios {
  constructor(baseURL, timeout = 2000) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isloading = true
      return config
    }, err => {
      return err
    })
    this.instance.interceptors.response.use(res => {
      mainStore.isloading = false
      return res
    }, err => {
      mainStore.isloading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({
      ...config,
      method: 'get'
    })
  }

  post(config) {
    return this.request({
      ...config,
      method: 'post'
    })
  }
}

export default new hyAxios(BASE_URL, TIMEOUT)