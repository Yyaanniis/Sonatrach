import React from 'react';
import Navbara from "../components/Nava"
import { useState } from 'react';
import '../styles/admin.css'

 

const HomePage = () => {
  document.title="Admin"

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    };
    

  return ( 
    <div>

     <Navbara/>


     <div className="admin-main">

      <div className="lig">

        <div className="case">
           <a href="/dmemprunts" ><h2>Ouvrir les demandes d'emprunt</h2></a>
        </div>

        <div className="case">
          <a href="/users" ><h2>Gérer les utilisateurs</h2></a>
        </div>

        <div className="case">
         <a href="/stock" ><h2>Gérer le stock</h2></a>
        </div>

      </div>

      <div className="lig">

        <div className="case">
          <a href="/adminhis" ><h2>Historique</h2></a>
        </div>

        <div className="case">
          <a href="/emprunts" ><h2>Emprunts en cours</h2></a>
        </div>

        <div className="case">
          <a href="/nadm" ><h2>pour les nouveaux admins</h2></a>
        </div>

      </div>


    </div>




    </div>
    
  );
};

export default HomePage;



