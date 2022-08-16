import { ResponseError } from 'umi-request';
import { notification } from 'antd';
import zh_CN from '@/locales/zh-CN/codeMessage';
import en_US from '@/locales/en-US/codeMessage';
import { isLocaleEn } from '@/utils/commont_rely';
import {
  RequestInterceptor,
  ResponseInterceptor,
} from 'E:/dpp/domain-resolution/node_modules/umi-request';

/**
 * 异常处理程序
 */
/*const errorHandler = function(error) {
  const codeMap = {
    '021': 'An error has occurred',
    '022': 'It’s a big mistake,',
    // ....
  };
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    console.log(codeMap[error.data.status]);
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message);
  }

  throw error; // If throw. The error will continue to be thrown.

  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
};*/
export const errorHandler = (error: ResponseError) => {
  // console.log(2222222222);
  const { response } = error;

  const codeMessage: {
    [propName: string]: any;
  } = {
    ...(isLocaleEn() ? en_US : zh_CN),
  };
  console.log(error);
  console.log(response);
  if(response && response.status) {
    const { status, url } = response;
    const errorText: string = codeMessage[status] || response.statusText;
    notification.error({
      message: `${codeMessage['req.err']} ${status}: ${url}`,
      description: errorText,
    });
  } else if(!response) {
    notification.error({
      message: codeMessage['network.err'],
      description: codeMessage['params.err'],
    });
  }
  // return response;
  // If throw. The error will continue to be thrown.
  throw error;
};

/**
 * 中间件
 * */
export const middlewares = [];

/**
 * Request 拦截器
 * */
export const requestInterceptors: RequestInterceptor[] = [
  (url, config) => {
    // console.log(url);
    // console.log(config);
    // console.log(666666);
    // config.skipErrorHandler = true;
    return {
      url,
      config,
    };
  },
];

/**
 * Response 拦截器
 * */
export const responseInterceptors = [
  async (response: Response) => {
    // const resData = await response.clone().json();
    // console.log(response);
    // console.log(resData);
    // console.log('responseInterceptors');
    return response;
  },
];
