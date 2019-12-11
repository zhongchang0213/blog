import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon, Dropdown, Button, Modal, message } from 'antd';
import { connect } from 'react-redux';
import cookie from 'js-cookie';

import { showLogin, userLoginOut, userLogin } from '../../redux/action';
import router from '../../router';
import { loginOut, userInfo } from '../../apis/user'

import './Head.less';

const { confirm } = Modal;

class Head extends Component {

  constructor(props) {
    super(props)
    if (cookie.get('X-TOKEN')) this.getUserInfo();
  }

  async getUserInfo() {
    let res = await userInfo();
    if (res.status === '1') {
      this.props.userLogin(res.data);
    } 
  }

  // 导航
  handleClick = ({ key }) => {
    this.props.history.push(key);
  };

  // 个人中心
  user = ({ key }) => {
    if (key === '1') {
      confirm({
        cancelText: '取消',
        okText: '确认',
        title: '确认退出登录?',
        onOk: async () => {
          console.log('OK');
          const res = await loginOut();
          const { status, message: msg } = res;
          if ( status === '1' ) {
            message.success(msg);
            cookie.remove('X-TOKEN');
            this.props.userLoginOut();
            console.log(this.props)
          } else {
            message.error(msg);
          }
          console.log(res)
        }
      });
    } else {

    };
  }

  // 显示登录
  login = () => {
    this.props.showLogin();
  }

  render() {
    const menu = (
      <Menu onClick={this.user}>
        <Menu.Item key="0">
          <Icon type="mail" />
          <Button type='link'>个人中心</Button>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="mail" />
          <Button type='link'>退出</Button>
        </Menu.Item>
      </Menu>
    );
    let { pathname } = this.props.location;
    let { userInfo } = this.props;
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
            userInfo.isLogin?(
              <Dropdown overlay={menu}>
                <div>
                  <Icon type="mail" />
                  <span className='head-user'>{userInfo.userName}</span>
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
    (state) => state,
    {
      showLogin,
      userLoginOut,
      userLogin
    }
  )(Head)
);
