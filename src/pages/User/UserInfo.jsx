import React, { Component } from 'react'
import { Form, Input, Button, Upload, Icon, message } from 'antd';

import './UserInfo.less';

const { TextArea } = Input;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt1M = file.size / 1024 / 1024 < 1;
  if (!isLt1M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt1M;
}

export default class UserInfo extends Component {

  state = {
    loading: false,
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

  render() {
    const { imageUrl } = this.state;
    console.log(imageUrl)
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
                <div className='user-name font-b'>序幕</div>
                <div className="user-create-time">
                  <Icon type="user-add" />
                  2019-12-12
                </div>
              </div>
              <div className="user-avatar">
                <Upload
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
            <TextArea rows={4} allowClear placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="手机号">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="修改密码">
            <Input placeholder="初始密码" />
            <Input placeholder="新密码" />
            <Input placeholder="重复密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">
              编辑
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
