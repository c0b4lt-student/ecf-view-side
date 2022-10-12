import React, {useEffect} from 'react';
import HeaderGoSport from "../../components/ui/HeaderGoSport";
import AddCard from "../../components/ui/AddCard";
import GymsList from "../../components/GymsList";

function GymsPage(props) {
  useEffect(() => {
    document.title = "Salles";
  }, []);
  return (
    <main>
      <HeaderGoSport>Salles</HeaderGoSport>
      <AddCard>Ajouter une salle</AddCard>
      <GymsList />
    </main>
  );
}

export default GymsPage;
