import React from 'react';
import { Link } from 'react-router-dom';
import noCover from "../images/no-cover.jpeg";


const NotFound = () => (
  <div>
    <p className="not-found-title">
      Sorry, the books you are looking for are not available yet.
    </p>


    <div className="home-link">
      <Link to="/"><img src={noCover} alt="cover Not Found" />
      </Link>
    </div>

  </div>
);

export default NotFound;

