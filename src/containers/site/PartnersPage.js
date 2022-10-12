import React, {useEffect} from 'react';
import AddCard from "../../components/ui/AddCard";
import HeaderGoSport from "../../components/ui/HeaderGoSport";
import PartnersList from "../../components/PartnersList";

function PartnersPage(props) {
  useEffect(() => {
    document.title = "Partenaires"
  }, []);

  return (
    <main>
      <HeaderGoSport>Partenaires</HeaderGoSport>
      <AddCard>Ajouter un partenaire</AddCard>
      <PartnersList />
    </main>
  );
}

export default PartnersPage;
