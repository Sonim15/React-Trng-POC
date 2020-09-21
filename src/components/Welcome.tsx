import React, { Component } from 'react';
import HeaderPage from './Header';
import Body from './Body';

function Welcome () {
    
        return (
            <div>
                <div className='login-header-postion'>
                    <HeaderPage></HeaderPage>
                </div>
                <div>
                    <Body></Body>
                </div>
            </div>
        );
}
export default Welcome;