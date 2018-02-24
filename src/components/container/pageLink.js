import React, { Component } from 'react';

export default class PageLink extends Component{
    render(){
        return(
            <div className="page_link_container">

                <button onClick={() => this.setState({page: [0,20]})}>1 страница</button>
                <button onClick={() => this.setState({page: [20,40]})}>2 страница</button>
                <button onClick={() => this.setState({page: [40,60]})}>3 страница</button>
                <button onClick={() => this.setState({page: [60,80]})}>4 страница</button>
                <button onClick={() => this.setState({page: [80,100]})}>5 страница</button>

            </div>
        )
    }
}