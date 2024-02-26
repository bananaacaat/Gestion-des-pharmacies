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
## Base de données
![WhatsApp Image 2024-01-16 at 13 14 10_39158a49](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/6f104c91-e03b-4b2b-a220-c0c14042d76b)

## Interface User
- L'ajout d'une pharmacie par un User
![WhatsApp Image 2024-01-16 at 13 46 10_3d7505f1](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/14174dcd-1c6e-4184-bd66-03c1c090e63c)
![WhatsApp Image 2024-01-16 at 13 53 39_49a8ea53](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/fe215e39-de61-4807-80c1-789192c58c29)
![WhatsApp Image 2024-01-16 at 13 54 19_347f02e1](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/76188d88-d048-4c8d-be74-0dedba10c97d)
![WhatsApp Image 2024-01-16 at 13 55 23_dbe9e0ef](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/224b259a-ffc1-417a-a44a-caa2bf2bab91)

## Interface Admin
- Qui accepte les demandes des pharmacies et faire la gestion 
![WhatsApp Image 2024-01-16 at 13 57 27_3724e7a6](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/7fd1ebf0-8069-4ce6-acf8-4fd6d602f514)
![WhatsApp Image 2024-01-16 at 13 57 58_735c994e](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/f8c81b8a-b6ad-40ca-a32c-0e2316543e6d)

## Interface Client
- Interface sans authentification qui donne tous les pharmacies disponibles
![WhatsApp Image 2024-01-15 at 22 44 54_9cc0f5c4](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/68ff3233-1944-4e37-94b0-3a5d845de9e4)
![WhatsApp Image 2024-01-15 at 22 44 54_6bb319b8](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/f7cd1442-5799-4e93-b377-d98ad9424155)
![WhatsApp Image 2024-01-15 at 22 44 54_4888bbd4](https://github.com/bananaacaat/Gestion-des-pharmacies/assets/147453939/5f82f9fe-5491-4f69-a8c6-b21099614ad4)


# Interfaces Utilisateur Réactives
React se distingue par sa gestion efficace du rendu et son approche déclarative. Cette bibliothèque offre la possibilité de développer des interfaces utilisateur réactives en mettant à jour uniquement les parties de la page nécessaires, ce qui se traduit par une amélioration significative des performances de l'application. Les composants React se réactualisent automatiquement en réponse aux changements d'état, procurant ainsi une expérience utilisateur fluide.

# Composants Réutilisables
La philosophie de React repose sur la création de composants réutilisables. Nous avons appliqué cette approche en développant des composants React indépendants pour chaque entité telle que Ville, Photo, Restaurant, Serie, Specialite, User, et Zone. Cette approche favorise la maintenabilité du code, simplifie le débogage, et offre une structure modulaire pour la construction de l'interface utilisateur.

# Interaction avec le Backend
Pour interagir avec le backend, React utilise des requêtes HTTP, généralement avec l'API Fetch ou des bibliothèques tierces. Les données provenant du backend peuvent être facilement intégrées dans les composants React, permettant une communication fluide entre le frontend et le backend. Ces mécanismes facilitent l'affichage, la mise à jour et la suppression interactives des données.

# Spring Security
Spring Security joue un rôle essentiel dans notre application en garantissant la sécurité des données sensibles et en gérant l'accès approprié aux différentes fonctionnalités pour les utilisateurs ayant des rôles spécifiques. Les trois rôles distincts dans notre application sont utilisateur, admin et propriétaire.

# Contrôle d'Accès Granulaire
Spring Security permet la définition d'autorisations spécifiques pour chaque rôle, précisant ainsi les actions autorisées pour chaque type d'utilisateur. Par exemple, les utilisateurs peuvent avoir des autorisations pour rechercher un restaurant, consulter une liste de restaurants et visualiser leur emplacement, tandis que les administrateurs peuvent avoir des droits supplémentaires pour gérer les villes, les zones, les spécialités, les séries et valider un restaurant. Les propriétaires peuvent avoir des autorisations pour s'inscrire, créer un restaurant et ajouter des images.

# Protection des Points d'Accès Sensibles
En annotant les points d'accès avec des annotations de sécurité de Spring Security, nous nous assurons que certaines fonctionnalités ne sont accessibles que par des utilisateurs autorisés. Par exemple, un endpoint permettant de valider un restaurant ne serait accessible qu'aux utilisateurs ayant le rôle d'administrateur.

# Gestion des Sessions et des Utilisateurs
Spring Security facilite la gestion des sessions utilisateur, l'authentification et la déconnexion. Il offre une gestion transparente des utilisateurs et de leurs informations d'identification, simplifiant ainsi le processus d'authentification.

# Docker et SonarQube
La combinaison de Docker et SonarQube crée une synergie puissante qui renforce l'intégrité, la sécurité et la scalabilité de notre application de localisation de restaurants.

# Assurance Qualité Intégrée
Docker encapsule l'ensemble de l'application, tandis que SonarQube intervient directement dans le processus de développement. Cette combinaison garantit que chaque conteneur Docker déployé subit une analyse de qualité du code en amont. Ainsi, nous assurons une cohérence entre le code source, l'environnement de développement et les déploiements, réduisant les erreurs liées aux différences d'environnements.

# Détection Précoce des Problèmes
L'intégration continue de SonarQube avec le pipeline Docker permet de détecter les problèmes de qualité du code dès le début. Cette détection précoce permet aux développeurs de résoudre rapidement les problèmes, réduisant la dette technique et améliorant la robustesse globale de l'application.

# Facilitation du Déploiement
Les conteneurs Docker assurent la portabilité des applications entre les environnements. Associés à SonarQube, ils garantissent que chaque version déployée a fait l'objet d'une évaluation rigoureuse de la qualité. Cela offre une assurance supplémentaire lors du déploiement, minimisant les risques d'erreurs de code et de vulnérabilités.

# Gestion Cohérente des Dépendances
Docker gère les dépendances au niveau de l'environnement, tandis que SonarQube se concentre sur la qualité du code. Ensemble, ils garantissent une gestion cohérente des dépendances de l'application, évitant les conflits potentiels et assurant une expérience de déploiement sans accroc.

# Sécurité Renforcée
Docker et SonarQube contribuent conjointement à la sécurité de l'application. Docker assure l'isolation des conteneurs, tandis que SonarQube identifie les vulnérabilités potentielles dans le code. Ensemble, ils créent un environnement de développement et de déploiement plus sécurisé, limitant les risques liés à la configuration, aux dépendances et aux erreurs de code

# Démarrage
- Cloner le dépôt :
git clone https://github.com/bananaacaat/Gestion-des-pharmacies.git

- Configurer le backend :
Creer une base de donnée avec le nom pharmacie:
et telecharger les dependences:
` mvn install `
Lancer le projet Par : 
` mvn spring-boot:run `

- Configurer le frontend :
Installer les dépendances : `npm install`
Démarrer l'application React : `npm start`

# Remerciements
- Un grand merci aux M.Lachgar qui a donné la main à ce projet.
- Inspiré par la nécessité d'une gestion efficace des pharmacies et de services basés sur la localisation.

