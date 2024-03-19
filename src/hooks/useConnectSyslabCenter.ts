import { post } from '../request/connectBase'

// syslab读取临时文件路径
let appFilePath = ''
export const useConnectSyslabCenter = () => {
  
  // 初始化临时文件路径
  const initFilePath = async () => {
    let message = await post({
      key: 'filePath',
      command: 'getFilePath'
    }) as any
    appFilePath = message.data?.value ?? ''
    console.log('appFilePath', appFilePath)
    return message.data ?? ''
  }

  return {
    initFilePath,
  }
}