import React, {useState, useEffect} from 'react';
import SearchBar from "./ui/SearchBar";
import GymCard from "./ui/GymCard";
import axios from "axios";

function GymsList(props) {
  const [gyms, setGyms] = useState(null);
  useEffect(() => {
    axios.get('https://ecf-decembre-2022.herokuapp.com/?page=front/gyms')
      .then(response => {
        setGyms(response.data);
      })
  }, []);

  return (
    <>
      <SearchBar key={0}/>
      <ul className="p-0 m-0">
        {
          gyms ? (gyms.map((gym) => {
            return (
              <GymCard key={gym.id_gym}>{gym}</GymCard>
            );
          })) : ''
        }
      </ul>
    </>
  );
}

export default GymsList;