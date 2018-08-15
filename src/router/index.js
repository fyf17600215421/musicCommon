import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router";
export default (props) => {
   const routes = props.routes;
    return  <Switch>
                    {
                        routes.map((element,index) => {
                            if (!element.children) {
                                return <Route path = {element.path} 
                                              render={(router)=><element.components {...router}></element.components>}
                                              key={index}></Route>
                            }
                            return <Route path = {element.path} 
                                         render={(router)=><element.components {...router} children={element.children}></element.components>}
                                         key={index}></Route>
                        })
                    }
                    <Redirect from="/" to="/my"></Redirect>
            </Switch>
}