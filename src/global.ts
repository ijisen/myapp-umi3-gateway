import { mountElementId, headerElementId } from '../config/config.global.path';

/**
 * 设置 mountElement dom节点高度
 *
 * */
(function(mountEleId, headerEleId) {
  // 获取 header dom 节点
  const header_id = document.getElementById(headerEleId);

  if (!header_id) {
    return false
  }

  // 获取 header 的高度
  const header_height = header_id.offsetHeight || 60;

  // 获取项目 root dom 节点
  const mountElement = document.getElementById(mountEleId);

  console.log(header_height)
  // 设置 root dom 节点的高度
  if(mountElement) {
    const style = `height: calc(100% - ${header_height}px)`;
    mountElement.setAttribute('style', style);
  }
})(mountElementId, headerElementId);

