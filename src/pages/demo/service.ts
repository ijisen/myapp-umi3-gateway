import { request } from 'umi';
import type { CurrentUser, ListItemDataType } from './typings.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('/fake/detail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('/fake/list', {
    params,
  });
}
