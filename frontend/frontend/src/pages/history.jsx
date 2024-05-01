import React from 'react';
import Navbar from "../components/Nav"
import { useState } from 'react';
import '../styles/history.css'

const History = () => {
  document.title="History"

  const historyData = [
    { date: '01/04/2024', action: 'Ajout de fonctionnalité' },
    { date: '05/04/2024', action: 'Modification de paramètres' },
    { date: '10/04/2024', action: 'Suppression de contenu' }
    // Ajoutez d'autres entrées d'historique si nécessaire
  ];

  return(
  <div>
    <Navbar/>
    <div>
    <div className="history-container">
      <h1>Historique des Actions</h1>
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  </div>
    
  )

}

export default History