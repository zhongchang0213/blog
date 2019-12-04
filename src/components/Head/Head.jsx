import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button } from 'antd';
import { connect } from 'react-redux';

import { showLogin } from '../../redux/action';
import router from '../../router';

import './Head.less';

class Head extends Component {

  state = {
    isLogin: false
  };

  // 导航
  handleClick = ({ key }) => {
    this.props.history.push(key);
  };

  // 个人中心
  user = ({ key }) => {
    console.log(key)
  }

  // 显示登录
  login = () => {
    this.props.showLogin();
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
    let { pathname } = this.props.location;
    return (
      <div className='head'>
        <div className='head-left'>
          <NavLink to='/'><div className="logo"></div></NavLink>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            className='head-nav'
            onClick={this.handleClick}
          >
            {
              router.map(item => {
                return (
                  <Menu.Item key={item.path}>
                    <Icon type="mail" />{item.name}
                  </Menu.Item>
                );
              })
            }
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
              <div onClick={this.login}>
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

export default withRouter(
  connect(
    null,
    {
      showLogin
    }
  )(Head)
);
