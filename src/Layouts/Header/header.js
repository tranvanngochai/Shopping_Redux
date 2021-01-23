import React, { Component } from 'react'

class HeaderComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card hovercard mx-auto">
                        <div className="card-background"></div>
                        <div className="useravatar">
                            <img alt="cybersoft" src="images/cybersoft.png" />
                        </div>
                        <div className="card-info">
                            {" "}
                            <span className="card-title">
                                <h1>Shopping</h1>
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="style13" />
            </div>
        )
    }
}

export default HeaderComponent;
