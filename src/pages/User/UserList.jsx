import React, { Component } from 'react';
import MarkDown from '../../components/MarkDown/MarkDown'

import './UserList.less';

export default class UserList extends Component {
  render() {
    return (
      <div className='user-list'>
        <h3>我的动态</h3>
        <MarkDown />
      </div>
    )
  }
}
