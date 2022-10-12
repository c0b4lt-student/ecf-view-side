import React, {useState, useEffect} from 'react';
import axios from "axios";

function PermsPanel(props) {
  const url = 'https://ecf-decembre-2022.herokuapp.com/?page=front/' + props.type + '/' + props.id_item + '/perms';
  const [perms, setPerms] = useState(null)
  console.log(url)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPerms(response.data);
      })
  }, []);
  return (
      <div className="accordion-body bg-dark-secondary w-75 h-25 m-auto mb-3 rounded">
        {perms}
      </div>
  );
}

export default PermsPanel;
