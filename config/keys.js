const username = "TER"; // Ton utilisateur MongoDB
const password = encodeURIComponent("TERoauth"); // Encode pour éviter les erreurs
const dbName = "todolist"; // Assure-toi que c'est bien le nom de ta base de données

module.exports = {
  MongoURI: `mongodb+srv://${username}:${password}@cluster0.p3e6b.mongodb.net/${dbName}?retryWrites=true&w=majority`,

  google: {
    clientID: "685484338448-bg8a4fmm0dtvlalifosqtdqcg1hekkhk.apps.googleusercontent.com",
    clientSecret: "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"
  },

  session: {
    cookieKey: "test"
  }
};
