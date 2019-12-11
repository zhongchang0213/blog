import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Upload, Icon, message } from 'antd';

import './UserInfo.less';

const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isLt1M = file.size / 1024 / 1024 < 1;
  if (!isLt1M) {
    message.error('Image must smaller than 2MB!');
  }
  return isLt1M;
}

class UserInfo extends Component {

  state = {
    loading: false,
    isEdit: false,
    imageUrl: require('../../assets/images/user.jpg')
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  operating = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }

  render() {
    const { imageUrl, isEdit } = this.state;
    const { userInfo } = this.props;
    return (
      <div>
        <Form 
          wrapperCol={{
            span: 18
          }} 
          labelCol={{
            span: 6
          }}
          labelAlign='left'
        >
          <Form.Item
            wrapperCol={{
              span: 24
            }}
          >
            <div className='user-info'>
              <div className='user'>
                <div className='user-name font-b'>{userInfo.userName}</div>
                <div className="user-create-time">
                  <Icon type="user-add" />
                  {userInfo.created}
                </div>
              </div>
              <div className="user-avatar">
                <Upload
                  accept='image/*'
                  name="avatar"
                  listType="picture"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="/blog/user/uploadAvatar"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  <img src={imageUrl} alt="avatar" width='100%' height='100%' /> 
                </Upload>
              </div>
            </div>
          </Form.Item>
          <Form.Item label="个性签名">
            {
              isEdit?(
                <TextArea rows={4} allowClear placeholder="input placeholder" />
              ):(
                <p>{userInfo.status}</p>
              )
            }
          </Form.Item>
          <Form.Item label="手机号">
            {
              isEdit?(
                <Input placeholder="input placeholder" />
              ):(
                <p>{userInfo.tel}</p>
              )
            }
          </Form.Item>
          {
            isEdit?(
              <Form.Item label="修改密码">
                <Input placeholder="初始密码" />
                <Input placeholder="新密码" />
                <Input placeholder="重复密码" />
              </Form.Item>
            ):null
          }
          <Form.Item wrapperCol={{
              span: 24
            }}>
            <div className='operating-box'>
              {
                isEdit?(
                  <Button type="primary">
                    取消
                  </Button>
                ):null
              }
              <Button type="primary" onClick={this.operating}>
                {isEdit?'保存':'编辑'}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect(
  (state) => state,
  {}
)(UserInfo);
