import React from 'react';

/**
 * 菜单栏顶部UI重置
 *
 * */

export type MenuHeaderProps = {
  height: number;
};

const MenuHeader: React.FC<MenuHeaderProps> = ({ height }) => {
  return <div style={{ height: height }}>&nbsp;</div>;
};

export default MenuHeader;
