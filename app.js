const server = require('express'),
      md5 = require('md5'),
      client = require('./models/client'),
      user = require('./models/usrs'),
      players = require('./models/player');

class Server {

  constructor(user, music, films, player) {
    this.user = user;
    this.music = music;
    this.player = player;
  }
  
  getUser() {
    return this.user;
  }
  
  getClient() {
      return this.client;
  }
      
  setClient(client) {
      this.client = client;
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

