/**
 * 样式拼接
 *
 * */
export const getPrefixCls = (
  suffixCls: string,
  customizePrefixCls?: string,
) => {
  const dnePrefix = customizePrefixCls || 'dne';

  // dne-layout
  return suffixCls ? `${dnePrefix}-${suffixCls}` : dnePrefix;
};
