import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import SideBar from '../components/SideBar/SideBar'

import View from '../components/ViewPost/ViewPost'


function ViewPost(props) {
    return (
        <div>
            
            <Navigation />
            <SideBar />
            <View/>
            <Footer/>
            
        </div>
    )
}

export default ViewPost