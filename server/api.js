// server/api.js

// Dependencies ========================

module.exports = function(app, config) {

// API Routes ==========================

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

};