import React, { Component } from 'react';
import { Layout } from 'antd';

import UserInfo from './UserInfo';
import UserList from './UserList';

const { Content, Sider } = Layout;

export default class User extends Component {
  render() {
    return (
      <Layout className={'p-20'}>
        <Sider 
          width='400px'
        >
          <UserInfo/>
        </Sider>
        <Content>
          <UserList />
        </Content>
      </Layout>
    )
  }
}
