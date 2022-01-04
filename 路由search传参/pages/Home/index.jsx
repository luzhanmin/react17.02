import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>这是Home页面内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                        <MyNavLink to="/home/message">message</MyNavLink>
                        </li>
                    </ul>
                </div>
               <Outlet/>
            </div>
        )
    }
}
