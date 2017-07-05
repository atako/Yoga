import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  return (
    <ul className="menu">
      <li><Link to="/">Список</Link></li>
      <li><Link to="/new">Добавить</Link></li>
    </ul>
  );

}

export default Menu;