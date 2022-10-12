import React, {useState, useEffect} from 'react';
import axios from "axios";
import PartnerCard from "./PartnerCard";

function PermsPanel(props) {
  const url = 'https://ecf-decembre-2022.herokuapp.com/?page=front/' + props.type + '/' + props.id_item + '/perms';
  const [perms, setPerms] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPerms(response.data);
      })
  }, []);
  return (
      <div className="accordion-body bg-dark-secondary w-75 h-25 m-auto mb-3 rounded">
        <ul className="m-0 p-0" id="perms-list">
          {
            perms ? (perms.map((perm) => {
              return (
                <li key={perm.id_perm}>{perm.short_desc_perm}</li>
              );
            })) : ''
          }
        </ul>
      </div>
  );
}

export default PermsPanel;
