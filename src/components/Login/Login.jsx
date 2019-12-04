import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import { connect } from 'react-redux';

import { hideLogin, loginAsync } from '../../redux/action'

import './Login.less';

import LoginForm from './LoginForm';

class Login extends Component {

  handleCancel = () => {
    this.props.hideLogin();
  };

  render() {
    const { visible } = this.props;
    return (
      <div>
        <Modal
          footer={null}
          closeIcon={
            <Icon type="close-circle" />
          }
          width='390px'
          maskClosable={false}
          visible={visible}
          onCancel={this.handleCancel}
        >
          <LoginForm 
            loginAsync={this.props.loginAsync}
          />
        </Modal>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  {
    hideLogin,
    loginAsync
  }
)(Login);
