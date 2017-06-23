import React from 'react';

const Menu = () => {

  const clickLink = (e) => {
    e.preventDefault();
    console.log('click');
  }

  return (
    <ul className="menu">
      <li><a href="#" onClick={clickLink}>Список</a></li>
      <li><a href="#">Добавить</a></li>
      <li><a href="#">Редактировать</a></li>
      <li><a href="#">Расписание</a></li>
    </ul>
  );

}

export default Menu;