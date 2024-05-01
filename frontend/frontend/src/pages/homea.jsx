import React from 'react';
import Navbar from "../components/Nav"
import { useState } from 'react';
import '../styles/Home.css'


function Home() {
  document.title="Home"

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    };
 return (<div>
   <Navbar/>
 
   <div className='page'>
     
      

     <div className="container">


       <div className='partleft'>
         <div className="window">
          <button className="button" onClick={toggleForm}>
           <img src="chemin_vers_votre_image.jpg" alt="Votre photo" />
           Demande d'un materiel
          </button>

          {showForm && (
           <div className='form-container'>
            <form>
             {/* Ajoutez vos champs de formulaire ici */}
             <input type="text" placeholder="Nom" />
             <input type="email" placeholder="Email" />
             <button type="submit">Envoyer</button>
            </form>
           </div>
          )
          }
        </div>

        <div className="window">
          <button className="button">
           <h2>Besoin d'aide</h2>
           pour contacter l'admin
          </button>
        </div>

        <div className="window">
          <button className="button">
           pour les nouveaux admins(cette partie est affichée aux utilisateurs qui ont ...=reseau )
          </button>
        </div>
      </div>

      {/* deuxieme partie */}
    
     <div className="partright">
     <h2>Historique des actions</h2> {/* Titre ajouté */}
     <table className="history-table"> {/* Ajout de la classe history-table pour les styles */}
      <thead>
        <tr>
         <th>Date</th>
         <th>Action</th>
        </tr>
      </thead>
      <tbody>
       <tr>
         <td>27/04/2024</td>
         <td>Ajout de fonctionnalité</td>
       </tr>
      {/* Ajoute d'autres lignes d'historique ici */}
      </tbody>
     </table>
    </div>
    </div>

    

  </div>
   
  
  
  </div>);
}

export default Home
