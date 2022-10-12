import React, {useEffect} from 'react';
import HeaderGoSport from "../../components/ui/HeaderGoSport";

function PermsPage(props) {
  useEffect(() => {
    document.title = "Permissions";
  }, []);

  return (
    <main>
      <HeaderGoSport>Permissions</HeaderGoSport>
      Liste des permissions
    </main>
  );
}

export default PermsPage;