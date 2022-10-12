import React from 'react';
import green_light from '../../assets/img/active_light.gif';
import red_light from "../../assets/img/unactive_light.gif";
import '../../css/led.css';

function GymCard(props) {
  const gym = props.children
  return (
    <li className="bg-secondary w-75 h-25 m-auto mt-3 mb-3 rounded d-flex flex-column" key={gym.id_gym}>
      <img src={gym.is_active_gym ? green_light : red_light} alt="Salle active" className="led-img m-0 p-0"/>
      <h3 className="m-0 mx-auto pt-1">Salle : {gym.name_gym}</h3>
      <p className="m-0 mx-auto">adresse : {gym.addr_gym}</p>
      <p className="m-0 p-0 mx-auto">Ville : {gym.city_gym}</p>
    </li>
  );
}

export default GymCard;
