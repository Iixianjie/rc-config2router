import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
  console.log(props);
  return (
    <div>
      Home
      <Link to="/about">about</Link>
    </div>
  );
};

export default Home;