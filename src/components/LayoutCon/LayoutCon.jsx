import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import router from '../../router';
import './LayoutCon.less';
import Head from '../Head/Head';

const { Header, Content, Footer } = Layout;

export default class LayoutCon extends Component {
  render() {
    return (
      <Fragment>
        <Layout className={'pt-48 layout'}>
          <Header className={'header'}>
            <Head />
          </Header>
          <Content className='con'>
            <Switch>
              <Redirect exact path='/' to='/home' />
              {
                router.map(item => {
                  return (
                    <Route key={item.path} path={item.path} component={item.component}></Route>
                  );
                })
              }
            </Switch>
            <Footer>Footer</Footer>
          </Content>
        </Layout>
      </Fragment>
    )
  }
}
