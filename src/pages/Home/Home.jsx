import React, { Component } from 'react';
import { Layout } from 'antd';

import About from '../../components/About/About'

const { Content, Sider } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout className={'layout'}>
        <Content>Content</Content>
        <Sider>
          <About />
        </Sider>
      </Layout>
    )
  }
}
