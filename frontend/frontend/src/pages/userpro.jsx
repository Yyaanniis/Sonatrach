import React, { useState } from 'react';
import '../styles/userpro.css'; // Assurez-vous d'importer votre fichier CSS pour les styles
import Navbar from '../components/Nav';

const Profile = () => {
  // État local pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    nom: 'Doe',
    prenom: 'John',
    id: '123456',
    adresse: '123 rue de l\'exemple',
    email: 'john.doe@example.com',
    poste: 'Développeur',
    departement: 'Informatique'
  });

  // État local pour suivre quel champ est en mode édition
  const [editMode, setEditMode] = useState({
    nom: true,
    prenom: true,
    id: false,
    adresse: true,
    email: true,
    poste: true,
    departement: true
  });

  // Fonction pour activer le mode édition d'un champ
  const activateEditMode = (fieldName) => {
    setEditMode({ ...editMode, [fieldName]: true });
  };

  // Fonction pour mettre à jour les informations de l'utilisateur
  const handleUserInfoChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Fonction pour enregistrer les modifications et désactiver le mode édition
  const saveChanges = (fieldName) => {
    setEditMode({ ...editMode, [fieldName]: false });
  };

  return (
    <div>
      <Navbar/>

      <div className="profile-container">
        <h1>Profil Employé</h1>
        <div className="user-info">
          <label className="input-label">Nom:</label>
          <input className="inputmode" type="text" name="nom" value={userInfo.nom} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">Prénom:</label>
          <input className="inputmode" type="text" name="prenom" value={userInfo.prenom} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">ID:</label>
          <input className="inputmode" type="text" name="id" value={userInfo.id} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">Addresse:</label>
          <input className="inputmode" type="text" name="adresse" value={userInfo.adresse} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">Email:</label>
          <input className="inputmode" type="text" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">Poste:</label>
          <input className="inputmode" type="text" name="poste" value={userInfo.poste} onChange={handleUserInfoChange} />
        </div>
        <div className="user-info">
          <label className="input-label">Département:</label>
          <input className="inputmode" type="text" name="depatement" value={userInfo.departement} onChange={handleUserInfoChange} />
        </div>
        </div>
        <div className="btns">
          <button type="button" className="btn btn-success">Modifier</button>
          <button type="button" className="btn btn-danger">Annuler</button>
        </div>
        
      
    </div>
  );
};

export default Profile;