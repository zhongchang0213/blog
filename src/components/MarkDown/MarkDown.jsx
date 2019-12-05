import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Input } from 'antd';

import CodeBlock from "./CodeBlock";

const { TextArea } = Input;

export default class MarkDown extends Component {
  
  state = {
    input: '# This is a header\n\nAnd this is a paragraph'
  }

  a = (e) => {
    console.log(e)
    this.setState({
      input: e.target.value
    })
  }

  render() {

    return (
      <div>
        <TextArea rows={4}  value={this.state.input} onChange={this.a} />
        <ReactMarkdown
          source={this.state.input}
          escapeHtml={false}
          renderers={{
            "code": CodeBlock
          }}
        />
      </div>
    )
  }
}
