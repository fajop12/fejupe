const server = require('express'),
      md5 = require('md5'),
      client = require('./models/client'),
      user = require('./models/usrs');

class Server {

  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.player = player;
  }
  
  getUser() {
    return this.user;
  }

  setUser(user) {
    this.user = user;
  }
  serialize() {
    return {
      user: user,
      music: music
    }; 
  }
}

module.exports = Server;

