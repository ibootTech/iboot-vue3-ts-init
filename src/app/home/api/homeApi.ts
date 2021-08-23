import Api from '@/lib/request/request'
import { DefaultResponse } from '@/lib/request/result'
const HomeApi = {
  github: (): Promise<DefaultResponse> => {
    return Api.get('https://api.github.com/repos/ibootTech/iboot-vue3-ts-init')
  }
}
export default HomeApi
