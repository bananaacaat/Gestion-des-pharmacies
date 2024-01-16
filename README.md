# PharmacyLocator
PharmacyLocator est un système complet de gestion de pharmacies avec des services basés sur la localisation. Ce projet est construit en utilisant le framework Spring pour le backend et React.js pour le frontend, offrant une solution intégrée pour une gestion efficace des pharmacies et une navigation facile pour les utilisateurs.

# Fonctionalités
- Gestion de la Pharmacie :
Suivi des détails de la pharmacie, y compris le nom, l'adresse, les coordonnées et les heures d'ouverture.
Gestion des stocks avec des détails sur les médicaments disponibles, les quantités et les dates d'expiration.

- Services Basés sur la Localisation :
Utilisation de la géolocalisation pour permettre aux utilisateurs de trouver les pharmacies à proximité.
Fourniture d'indications en temps réel et d'informations sur la distance jusqu'à la pharmacie sélectionnée.

- Interface Conviviale :
Interface utilisateur intuitive pour une navigation facile.
Fonction de recherche pour trouver des pharmacies en fonction du nom, de l'emplacement ou des services disponibles.
Informations sur les Médicaments :

# Technologies Utilisées
- Backend :
Java Spring Boot pour le développement côté serveur
Spring Data JPA pour les interactions avec la base de données
MongoDB ou une autre base de données appropriée pour stocker les données de pharmacie et d'inventaire
Spring Security pour l'authentification et l'autorisation

- Frontend :
React.js pour la construction de l'interface utilisateur
Mapbox ou Google Maps API pour les services de localisation
Axios pour la gestion des requêtes HTTP

- Géolocalisation :
Intégration avec des services de géolocalisation pour un suivi en temps réel de la localisation

# Démonstartion 
- Base de données
![WhatsApp Image 2024-01-16 at 13 14 10_39158a49](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/6f104c91-e03b-4b2b-a220-c0c14042d76b)

- Interface User
## L'ajout d'une pharmacie par un User
![WhatsApp Image 2024-01-16 at 13 46 10_3d7505f1](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/14174dcd-1c6e-4184-bd66-03c1c090e63c)
![WhatsApp Image 2024-01-16 at 13 53 39_49a8ea53](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/fe215e39-de61-4807-80c1-789192c58c29)
![WhatsApp Image 2024-01-16 at 13 54 19_347f02e1](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/76188d88-d048-4c8d-be74-0dedba10c97d)
![WhatsApp Image 2024-01-16 at 13 55 23_dbe9e0ef](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/224b259a-ffc1-417a-a44a-caa2bf2bab91)

- Interface Admin
## Qui accepte les demandes des pharmacies et faire la gestion 
![WhatsApp Image 2024-01-16 at 13 57 27_3724e7a6](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/7fd1ebf0-8069-4ce6-acf8-4fd6d602f514)
![WhatsApp Image 2024-01-16 at 13 57 58_735c994e](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/f8c81b8a-b6ad-40ca-a32c-0e2316543e6d)

- Interface Client
## Interface sans authentification qui donne tous les pharmacies disponibles
![WhatsApp Image 2024-01-15 at 22 44 54_9cc0f5c4](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/68ff3233-1944-4e37-94b0-3a5d845de9e4)
![WhatsApp Image 2024-01-15 at 22 44 54_6bb319b8](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/f7cd1442-5799-4e93-b377-d98ad9424155)
![WhatsApp Image 2024-01-15 at 22 44 54_4888bbd4](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/5f82f9fe-5491-4f69-a8c6-b21099614ad4)

# Test SonarQube
![WhatsApp Image 2024-01-16 at 16 04 48_495cc5ba](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/d9e87121-2c33-4d6b-84c8-9ed0fb90c3e3)


# Démarrage
### Cloner le dépôt :
git clone https://github.com/bananaacaat/Gestion-des-pharmacies.git

### Configurer le backend :
Creer une base de donnée avec le nom pharmacie:
et telecharger les dependences:
` mvn install `
Lancer le projet Par : 
` mvn spring-boot:run `

### Configurer le frontend :
Installer les dépendances : `npm install`
Démarrer l'application React : `npm start`

# Remerciements
- Un grand merci aux M.Lachgar qui a donné la main à ce projet.
- Inspiré par la nécessité d'une gestion efficace des pharmacies et de services basés sur la localisation.

