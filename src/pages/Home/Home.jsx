import React, { Component } from 'react';
import { Layout } from 'antd';

import About from '../../components/About/About'

const { Content, Sider } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout className={'layout p-20'}>
        <Content>Content</Content>
        <Sider 
          width='310'
        >
          <About />
        </Sider>
      </Layout>
    )
  }
}
