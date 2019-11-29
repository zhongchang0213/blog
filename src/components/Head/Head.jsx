import React, { Component } from 'react'
import { Menu, Icon, Dropdown, Button } from 'antd';

import './Head.less';

export default class Head extends Component {

  state = {
    current: '1',
    isLogin: false
  };

  // 导航
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  // 个人中心
  user = ({ key }) => {
    console.log(key)
  }

  render() {

    const menu = (
      <Menu onClick={this.user}>
        <Menu.Item key="1">
          <Icon type="mail" />
          <Button type='link'>个人中心</Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="mail" />
          <Button type='link'>退出</Button>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className='head'>
        <div className='head-left'>
          <div className="logo"></div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            className='head-nav'
            onClick={this.handleClick}
          >
            <Menu.Item key="1"><Icon type="mail" />nav 1</Menu.Item>
            <Menu.Item key="2"><Icon type="mail" />nav 2</Menu.Item>
            <Menu.Item key="3"><Icon type="mail" />nav 3</Menu.Item>
          </Menu>
        </div>
        <div className='head-right'>
          {
            this.isLogin?(
              <Dropdown overlay={menu}>
                <div>
                  <Icon type="mail" />
                  <span className='head-user'>用户xx</span>
                </div>
              </Dropdown>
            ):(
              <div>
                <Icon type="mail" />
                <span className='head-user'>登录</span>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
