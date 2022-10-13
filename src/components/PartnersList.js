import React, {useState, useEffect} from 'react';
import SearchBar from "./ui/SearchBar";
import PartnerCard from "./ui/PartnerCard";
import axios from "axios";

function PartnersList(props) {
  const [partners, setPartners] = useState(null);

  useEffect(() => {
    axios.get('https://ecf-decembre-2022.herokuapp.com/?page=front/partners')
      .then(response => {
        setPartners(response.data);
      })
  }, []);

  return (
    <>
      <SearchBar key={0}/>
      <ul className="m-0 p-0 accordion" id="partners-list">
      {
        partners ? (partners.map((partner) => {
          return (
            <PartnerCard key={partner.id_partner}>{partner}</PartnerCard>
          );
        })) : ''
      }
      </ul>
    </>
  );
}

export default PartnersList;

