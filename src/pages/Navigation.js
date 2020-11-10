import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}


export default Navigation;