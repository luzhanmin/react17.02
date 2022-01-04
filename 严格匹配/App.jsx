import React, { Component } from 'react'
import {Route,Routes} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
           <Header/>
          </div>
        </div>
        {/* 路由器 只能有一个  把App包起来 */}
        {/* <BrowserRouter> */}
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生Html中靠<a>跳转不同的页面 */}
                {/* <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a> */}

                {/* React中靠路由链接切换组件 */}
                 <MyNavLink to='/attest/about'>About</MyNavLink>
                 <MyNavLink to='/attest/home'>Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Routes>
                    {/* exact={true}开启精准匹配 */}
                    <Route exact path="/attest/about" element={<About/>}/>
                    <Route path="/attest/home" element={<Home/>}/>
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
