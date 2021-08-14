import React from 'react'
import Content from './Content/Content'
import './Home.css'
import Sidebar from './Sidebar/Sidebar'

const Home = () => {
    return (
        <div className="wrapper">
       
            <Sidebar />

            <Content />
            
        </div>
    )
}

export default Home
