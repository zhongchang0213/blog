import React, { Component } from 'react';
import { Layout } from 'antd';

import About from '../../components/About/About';
import ListCon from './components/ListCon/ListCon';

const { Content, Sider } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout className={'layout p-20'}>
        <Content>
          <ListCon />
        </Content>
        <Sider 
          width='310'
        >
          <About />
        </Sider>
      </Layout>
    )
  }
}
