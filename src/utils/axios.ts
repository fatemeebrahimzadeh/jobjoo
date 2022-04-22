import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface IRequestError {
  status: number,
  messages: { message: string }[]
}

const basicConfigs: AxiosRequestConfig = {
  baseURL: "https://api.developerszaris.ir"
}

type IResponsSuccessHandler = (response: AxiosResponse) => AxiosResponse
type IResponsErrorHandler = (err: AxiosError<IRequestError>) => AxiosError<IRequestError>
type IRequestErrorHandler = (err: AxiosError) => AxiosError | any
type IRequestSuccessHandler = (config: AxiosRequestConfig) => AxiosRequestConfig

export class AxiosClass {
  static instance: AxiosInstance

  static getInstance(configs: AxiosRequestConfig = basicConfigs) {

    if (!this.instance) {
      this.instance = axios.create(configs)
    }

    return this.instance
  }

  static setResponseInterceptor(responseHandler: IResponsSuccessHandler, reponseErrorHandler: IResponsErrorHandler) {
    this.instance.interceptors.response.use(responseHandler, reponseErrorHandler)
  }

  static setRequestInterceptor(requestHandler: IRequestSuccessHandler, requestErrorHandler: IRequestErrorHandler) {
    this.instance.interceptors.request.use(requestHandler, requestErrorHandler)
  }
}

export const Axios = AxiosClass.getInstance()


AxiosClass.setRequestInterceptor((config) => {

  // const token = localStorage.getItem('token')
  // config.headers = {
  //   ...config.headers,
  //   'Authorization': token || ''
  // }

  return config

}, (error) => {
})

// initilizing interceptors any where you want 
// not necessary

AxiosClass.setResponseInterceptor(
  (response) => {

    return response
  },
  (err) => {
    throw err
  }
)