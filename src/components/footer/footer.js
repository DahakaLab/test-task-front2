import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer className="main_footer">

                <div className="footer_container">
                    <div className="footer_logo">
                        Тестовое задание сделано
                        <span>
                            <a href="https://vk.com/id439849777">DahakaLab</a>
                        </span>
                    </div>
                    <div className="footer_copy">
                        ~©~
                    </div>
                </div>

            </footer>
        )
    }
}