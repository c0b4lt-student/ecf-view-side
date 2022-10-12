import React from 'react';
import green_light from '../../assets/img/active_light.gif';
import red_light from "../../assets/img/unactive_light.gif";
import '../../css/led.css';

function PartnerCard(props) {
  const partner = props.children
  return (
    <li className="bg-secondary w-75 m-auto mt-3 mb-3 p-0 rounded d-flex flex-column" key={partner.id_partner}>
      <img src={partner.is_active_partner ? green_light : red_light} alt="Utilisateur actif" className="led-img m-0 p-0"/>
      <h3 className="mx-auto pt-1">{partner.lastname_partner.toUpperCase()} {partner.firstname_partner}</h3>
      <p className="mx-auto">{partner.email_partner}</p>
    </li>
  );
}

export default PartnerCard;
