import React from 'react'
import { GoBook } from 'react-icons/go';


import './todoHeader.css'
function todoHeader() {
    return (
        <div className="header">
            <h2>Todo-List <span className="book"><GoBook /></span></h2>
        </div>
    )
}

export default todoHeader
