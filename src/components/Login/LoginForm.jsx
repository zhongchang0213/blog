import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';

class LoginForm extends Component {

  state = {
    status: false,  // 假登录 真注册
    loading: false,
  }

  // 切换登录注册
  loginOrRegister = () => {
    this.props.form.resetFields();
    this.setState((state) => {
      return {
        status: !state.status
      }
    });
  }

  // 提交登录或注册
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      let { username, password, repassword } = values;
      let { status } = this.state;
      if ( status ) {
        if ( password === repassword ) {
          console.log('注册', values)
        } else {
          message.warning('两次输入密码不一致！');
        }
      } else {
        this.props.loginAsync();
        console.log('登录', values)
      };
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { status } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
        <h2>{status?'注册':'登录'}</h2>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, max: 11, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item className={status?'':'no-margin'}>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码!' },
              { max: 11, message: '密码不得超过11位!' }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
        </Form.Item>
        {
          status && (
            <Form.Item className='no-margin'>
              {getFieldDecorator('repassword', {
                rules: [
                  { required: true, message: '请输入密码!' }, 
                  { max: 11, message: '密码不得超过11位!' }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="请确认密码"
                />,
              )}
            </Form.Item>
          )
        }
        <div className='login-register'>
          <Button onClick={this.loginOrRegister} type="link" icon='right-circle'>
            {status?'去登录':'去注册'}
          </Button>
        </div>
        <Form.Item className='no-margin'>
          <Button block type="primary" htmlType="submit" loading={this.loading} >
          {status?'注册':'登录'}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
