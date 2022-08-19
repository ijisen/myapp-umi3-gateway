import { request } from 'umi';

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
