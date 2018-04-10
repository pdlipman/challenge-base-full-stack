import React, { Component } from 'react';
import OrderList from './OrderList';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="padding-20">
                    <h1>Home</h1>
                    <p>
                        Welcome to the home page, everyone can see this!
                    </p>
                    <OrderList/>
                </div>
            </div>
        );
    }
}

export default Home;
