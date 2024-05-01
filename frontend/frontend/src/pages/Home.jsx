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

  return (
    <div className='fullpage'>
      <Navbar/>
      <div className='page'>
        <div className="container">
          <div className='partleft'>
            <div className="window">
              <button className="button" onClick={toggleForm}>
                <img src="chemin_vers_votre_image.jpg" alt="Votre photo" />
                Demande d'un matériel
              </button>
              {showForm && (
                <div className='form-container'>
                  <div className="close-btn" onClick={toggleForm}>X</div>
                  <form>
                    <div className="form-group">
                      <label>Type d'appareil:</label>
                      <select>
                        <option value="pc">PC portable</option>
                        <option value="phone">Téléphone</option>
                      </select>
                    </div> 
                    <div className="form-group">
                    <label>Modele:</label>
                      <select>
                        <option value="samsung">samsung</option>
                        <option value="apple">iphone</option>
                      </select>

                      
                    </div>
                    <button type="submit">Envoyer</button>
                  </form>
                </div>
              )}
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
          <div className="partright">
            <h2>Historique des actions</h2>
            <table className="history-table">
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
                {/* Ajoutez d'autres lignes d'historique ici */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;