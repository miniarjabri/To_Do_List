# 📌 Application To-Do-List

Une simple application de gestion de tâches utilisant la stack **MERN** avec **Google OAuth2.0**.  
Les utilisateurs peuvent se connecter avec leur compte Google. La liste de tâches est stockée dans **MongoDB**.  
Ils peuvent **ajouter, modifier et supprimer** leurs tâches.

## 🛠️ Technologies utilisées  
- **Node.js**
- **Express.js**
- **MongoDB / Mongoose**
- **Authentification : Passport.js / Google OAuth2**
- **Interface utilisateur : Bootstrap / CSS3**

---

## 📂 Installation et Exécution  
### 1️⃣ **Installation des dépendances**  
Exécutez la commande suivante dans le terminal :  
```sh
npm install
```

### 2️⃣ **Démarrer le serveur**  
Mode développement :  
```sh
npm run dev
```
Mode normal :  
```sh
npm run server
```

📌 **L'application est accessible sur :**  
🔗 **http://localhost:5000/auth/login**

---

## 🔑 **Authentification - Google OAuth**
- Ce projet utilise **Google OAuth 2.0** pour l'authentification.
- Les identifiants sont **déjà configurés** dans `config/keys.js`, aucune configuration supplémentaire n'est nécessaire.
- 📩 **Vous avez tous reçu une invitation pour accéder au projet sur Google Cloud Platform**.

![image](https://github.com/user-attachments/assets/5fa61976-9c33-45aa-9f87-352c816ec16e)

---

## 🛢️ **Base de données - MongoDB Atlas**
L'application est connectée à **MongoDB Atlas**, où toutes les données sont stockées.

### 📡 **Accéder à la base de données**  
Vous pouvez consulter la base de données et les collections via **MongoDB Atlas** :
- Rendez-vous sur **[MongoDB Atlas](https://cloud.mongodb.com/)**
- Connectez-vous et accédez au **Cluster0**
- Cliquez sur **Browse Collections** pour afficher les données.

📌 **Vous avez tous reçu une invitation pour accéder à la base de données.**  
La collection **"todolist"** est située dans **Cluster0 → Collection → todolist**.

- username: TER
- password: TERoauth 

![image](https://github.com/user-attachments/assets/d34ca129-6686-4891-b134-3a90c6d24c49)

---

## 🔐 **⚠️ Sécurité & Accès**
- **Ne partagez pas l'URI MongoDB en dehors de l'équipe.**
- Pour ajouter un membre à la base de données :
  - Rendez-vous sur **MongoDB Atlas → Database Access → Add New User**.
- Seuls les membres de l'équipe doivent avoir accès aux ressources.

---

---

## 🎥 **Vidéo Explicative**

Vous pouvez consulter la vidéo explicative ici :

[![Vidéo Explicative](https://github.com/user-attachments/assets/placeholder.jpg)](vid1.mp4)

---

