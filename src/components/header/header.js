import React, { Component } from 'react';
import { IMAGE_HEADER } from "./../../style/imageConst.js";

export default class Header extends Component{
    render(){
        return(
            <header className="main_header" style={{backgroundImage: IMAGE_HEADER}}>
                <h1>Test task front 2</h1>
            </header>
        )
    }
}