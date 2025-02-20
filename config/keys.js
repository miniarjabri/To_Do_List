const username = "TER"; 
const password = encodeURIComponent("TERoauth");
const dbName = "todolist"; 

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
