import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Headers extends Component {
    render() {
        return (
            <div className='headers'>
                <div className='header-title'>
                    <i className="icon-menu">~</i>
                    <p>
                        <NavLink to="/my" tag="span" activeClassName='active'>
                            我的
                        </NavLink>
                        <NavLink to="/musichall" activeClassName='active'>
                            音乐馆
                        </NavLink>
                        <NavLink to="/find" activeClassName='active'>
                            发现
                        </NavLink>
                    </p>
                    <i className="icon-menu">+</i>
                </div>
                <p className='header-search'>
                    <input type="text"/>
                </p>
            </div>
        );
    }
}

export default Headers;
