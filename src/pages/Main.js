import React from 'react';
import {Link} from 'react-router-dom'

const main = () => {
    return(
        <div>
            <h1 className="center">main</h1>
            <Link to="/dashboard"><button className="center">dashboard</button></Link>
        </div>
    )
}

export default main;