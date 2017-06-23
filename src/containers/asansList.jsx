import React from 'react';
import { connect } from 'react-redux';

import Asana from '../components/asana';
import Menu from '../components/menu';



const asansList = ({ asana }) => {
    const listAsans = asana[0].firstScreen.map((asana) => 
      <Asana key={asana.key} asana={asana} voice={tts}/>
    );
    return (
      <div>
        <Menu />
        {listAsans}
      </div>
      );
}

var tts = new ya.speechkit.Tts(
      // Настройки синтеза. Список доступных настроек см. в справочнике.
      {
        apikey: '36c03935-7ffe-43c1-9e9a-8fae02d46cd3',
        // API-ключ. Может быть задан глобально через объект ya.speechkit.settings.
        // Эмоциональная окраска: добрый голос.
        emotion: 'neutral',
        // Скорость речи.
        speed: 1,
        // Имя диктора.
        speaker: 'jane'  
      }
    );

const mapStateToProps = state => {
  return {
    asana : state
  }
}

export default connect(mapStateToProps)(asansList)
