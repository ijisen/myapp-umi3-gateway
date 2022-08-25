import React from 'react';
import { history, RequestConfig } from 'umi';
import type { BasicLayoutProps } from '@ant-design/pro-layout';
import { HomeOutlined } from '@ant-design/icons';
import { InitialModelState } from '@/types/basic.d';
import { queryCurrentUser } from '@/services/base';
/** 自定义函数 */
import {
  errorHandler,
  middlewares,
  requestInterceptors,
  responseInterceptors,
} from '@/utils/request';
import Exception403 from '@/pages/exception/403';

const { NODE_ENV } = process.env;

import { mountElementId, headerElementId } from '../config/config.global.path';
import MenuHeader from '@/components/MenuHeader';

let headerHeight = 0;
console.log(1111);

/**
 * 设置 mountElement dom节点高度
 *
 * */
(function (mountEleId, headerEleId) {
  // 获取 header dom 节点
  const header_id = document.getElementById(headerEleId);

  if (!header_id) {
    return false;
  }

  // 获取 header 的高度
  const header_height = header_id.offsetHeight || 60;

  // 获取项目 root dom 节点
  const mountElement = document.getElementById(mountEleId);

  console.log(header_height);
  // 设置 root dom 节点的高度
  if (mountElement) {
    // 将 header 的高度储存，供 src/components/MenuHeader 使用；
    headerHeight = header_height;
    const style = `height: calc(100% - ${header_height}px)`;
    mountElement.setAttribute('style', style);
  }
})(mountElementId, headerElementId);

console.log(2222);

/**
 * request 数据请求配置
 * */
export const request: RequestConfig = {
  timeout: 60000,
  prefix: NODE_ENV === 'development' ? '/mock' : '',
  // prefix: NODE_ENV === 'development' ? '/mock' : '',
  // 跳过 umi-request 错误处理中间件
  skipErrorHandler: true,
  errorHandler,
  middlewares,
  requestInterceptors,
  responseInterceptors,
};

/**
 * 项目初次加载时，配置信息
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<InitialModelState> {
  console.log('----getInitialState----');
  const loginPath = '/user/login';
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser();
      console.log(msg);
      console.log(1111811);
      return msg.data;
    } catch (error) {
      console.log(error);
      // history.push(loginPath);
      return undefined;
    }
  };
  // 如果不是登录页面，执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    console.log(currentUser);
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }
  return {
    fetchUserInfo,
    settings: {},
  };
}

/**
 * ProLayout 布局配置信息
 * ProLayout 支持的api https://procomponents.ant.design/components/layout
 * */
export const layout = ({
  initialState,
}: {
  initialState: InitialModelState;
}): BasicLayoutProps & {
  unAccessible?: JSX.Element;
} => {
  console.log('---- ProLayout ----');
  // 获取语言
  // console.log(locale);
  return {
    // 是否删除掉所有的自带界面
    // pure: true,
    title: false,
    siderWidth: 180,
    // layout 的加载态 boolean
    loading: false,
    /**
     * 导航菜单的主题
     * 'dark' | 'light' | 'realDark' | undefined;
     */
    navTheme: 'light',
    /**
     * 顶部导航的主题，mix 模式生效
     * 'dark' | 'light';
     */
    headerTheme: 'light',
    // 固定顶栏
    fixedHeader: true,
    // 固定菜单
    fixSiderbar: true,
    disableContentMargin: true,
    // 控制菜单的收起和展开
    collapsed: false,
    // 自定义 collapsed button 的方法
    collapsedButtonRender: false,
    // 禁止自动切换到移动页面 false
    disableMobile: true,
    // 不显示顶栏
    headerRender: false,
    className: 'z-global-layout',
    // 不显示菜单的 title 和 logo
    menuHeaderRender: () => {
      return <MenuHeader height={headerHeight} />;
    },
    // 面包屑
    breadcrumbRender: (routers = []) => {
      // console.log(routers);
      return [
        {
          path: '/',
          breadcrumbName: 'Home',
        },
        ...routers,
      ];
    },
    // 面包屑
    itemRender: (route, params, routes, paths) => {
      console.log(111111111);
      console.log(route);
      console.log(routes);
      console.log(routes.indexOf(route));
      console.log(paths);
      console.log(22222222);
      const first = routes.indexOf(route) === 0;
      return first ? (
        <HomeOutlined className="color-primary" />
      ) : (
        // <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        // <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        <span>{route.breadcrumbName}</span>
      );
    },

    onPageChange: () => {
      const { currentUser } = initialState || {};
      const { location } = history;
      console.log(currentUser);
      console.log('------ onPageChange ------ ');
      // 如果没有登录，重定向到 login
      /*if(!currentUser && location.pathname !== '/user/login') {
        if(NODE_ENV === 'production') {
          if(window.location.origin === '/') {
            window.location.href = window.location.origin;
          } else {
            history.push('/user/login');
          }
        } else {
          history.push('/user/login');
        }
      }*/
    },
    // 自定义 403 页面
    unAccessible: <Exception403 />,
    ...initialState?.settings,
  };
};
