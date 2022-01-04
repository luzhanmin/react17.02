import React, { Component } from 'react'

export default class News extends Component {
   
    render() {
         console.log(this.props);
        return (
            <div>
                <h3>我是Home中的news</h3>
                这是新闻子页面
            </div>
        )
    }
}
