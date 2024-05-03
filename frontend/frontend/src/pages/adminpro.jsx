import React from 'react';
import Navbara from "../components/Nava"
import { useState } from 'react';
import '../styles/adminpro.css'

 
 
const Apro = () => {
  document.title="Admin"
 

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

     <Navbara/>

     <div className="a-profile">
        <h1>Profil Employé</h1>
        <div className="admin-info">
          <label className="a-p-label">Nom:</label>
          <input className="a-p-input" type="text" name="nom" value={userInfo.nom} onChange={handleUserInfoChange} />
        </div>
        <div className="admin-info">
          <label className="a-p-label">Prénom:</label>
          <input className="a-p-input" type="text" name="prenom" value={userInfo.prenom} onChange={handleUserInfoChange} />
        </div>
        <div className="admin-info">
          <label className="a-p-label">ID:</label>
          <div className="a-id">123</div>
        </div>
        <div className="admin-info">
          <label className="a-p-label">Addresse:</label>
          <input className="a-p-input" type="text" name="adresse" value={userInfo.adresse} onChange={handleUserInfoChange} />
        </div>
        <div className="admin-info">
          <label className="a-p-label">Email:</label>
          <input className="a-p-input" type="text" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
        </div>
        <div className="admin-info">
          <label className="a-p-label">Poste:</label>
          <input className="a-p-input" type="text" name="poste" value={userInfo.poste} onChange={handleUserInfoChange} />
        </div>
        <div className="admin-info">
          <label className="a-p-label">Département:</label>
          <input className="a-p-input" type="text" name="depatement" value={userInfo.departement} onChange={handleUserInfoChange} />
        </div>
        </div>
        <div className="a-btns">
          <button type="button" className="btn btn-success">Modifier</button>
          <button type="button" className="btn btn-danger">Annuler</button>
        </div>
        
     

      </div>

  );
};

export default Apro;
