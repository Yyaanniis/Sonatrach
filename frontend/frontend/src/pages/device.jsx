import React from 'react';
import Navbar from "../components/Nav"
import { useState } from 'react';
import '../styles/Device.css'

const Devices = () => {
  document.title="Devices"

   // Données factices des appareils
   const [devices, setDevices] = useState([
    { id: 1, date: '01/04/2024', nom: 'Appareil 1', description: 'Description de l\'appareil 1', option: false },
    { id: 2, date: '05/04/2024', nom: 'Appareil 2', description: 'Description de l\'appareil 2', option: false },
    { id: 3, date: '10/04/2024', nom: 'Appareil 3', description: 'Description de l\'appareil 3', option: false }
  ]);

  // Fonction pour mettre à jour l'option de l'appareil
  const handleOptionChange = (deviceId) => {
    setDevices(devices.map(device =>
      device.id === deviceId ? { ...device, option: !device.option } : device
    ));
  };

  return(
    <div>
      <Navbar/>
      <div>
      <div className="devices-container">
      <h1>Liste des Appareils</h1>
      <table className="devices-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Option</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id}>
              <td>{device.date}</td>
              <td>{device.nom}</td>
              <td>{device.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={device.option}
                  onChange={() => handleOptionChange(device.id)}
                />
              </td>
              <td>
                {/* Remplacez 'chemin_vers_votre_image.jpg' par le chemin de votre image */}
                <img src="chemin_vers_votre_image.jpg" alt={`Photo de ${device.nom}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )

}

export default Devices