import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutCon.less';
import Head from '../Head/Head';
import Home from '../../pages/Home/Home';

const { Header, Content, Footer } = Layout;

export default class LayoutCon extends Component {
  render() {
    return (
      <Fragment>
        <Layout className={'layout'}>
          <Header  className={'header'}>
            <Head />
          </Header>
          <Content>
            <Switch>
              <Redirect exact path='/' to='/home' />
              <Route path='/home' component={Home}></Route>
            </Switch>
            <Footer>Footer</Footer>
          </Content>
        </Layout>
      </Fragment>
    )
  }
}
