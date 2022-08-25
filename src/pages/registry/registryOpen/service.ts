import { request } from 'umi';

/**
 * 参数否存在校验
 * @param[data.type]
 *    --- registry 注册局名称否存在校验
 *    --- username 登录帐号是否存在校验
 *    --- tld     注册局-授权TLD是否存在校验
 * @description： 校验参数是否已经存在
 * */
export async function apiOpenRegistryExistValidatorByType(
  data: {
    type: 'registry' | 'username' | 'tld';
    params: any;
  },
  options?: { [key: string]: any },
) {
  const { params, type } = data;
  return request(`/api/admin/openRegistry/validator/${type}`, {
    method: 'GET',
    params,
    ...(options || {}),
  });
}

/** 开通注册商  */
export async function apiOpenRegistryPost(
  data: any,
  options?: { [key: string]: any },
) {
  return request('/api/admin/openRegistry', {
    method: 'POST',
    data,
    ...(options || {}),
  });
}
