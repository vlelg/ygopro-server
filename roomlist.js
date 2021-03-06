// Generated by CoffeeScript 1.12.2
(function() {
  var WebSocketServer, _delete, broadcast, create, init, room_data, server, update;

  WebSocketServer = require('ws').Server;

  server = null;

  room_data = function(room) {
    var client;
    return {
      id: room.name,
      title: room.title,
      user: {
        username: room.username
      },
      users: (function() {
        var i, len, ref, results;
        ref = room.players;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          client = ref[i];
          results.push({
            username: client.name,
            position: client.pos
          });
        }
        return results;
      })(),
      options: room.hostinfo
    };
  };

  init = function(http_server, ROOM_all) {
    server = new WebSocketServer({
      server: http_server
    });
    return server.on('connection', function(connection) {
      var room;
      return connection.send(JSON.stringify({
        event: 'init',
        data: (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = ROOM_all.length; i < len; i++) {
            room = ROOM_all[i];
            if (room && room.established && !room["private"] && !room.started) {
              results.push(room_data(room));
            }
          }
          return results;
        })()
      }));
    });
  };

  create = function(room) {
    return broadcast('create', room_data(room));
  };

  update = function(room) {
    return broadcast('update', room_data(room));
  };

  _delete = function(room_id) {
    return broadcast('delete', room_id);
  };

  broadcast = function(event, data) {
    var connection, i, len, message, ref, results;
    if (!server) {
      return;
    }
    message = JSON.stringify({
      event: event,
      data: data
    });
    ref = server.clients;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      connection = ref[i];
      try {
        results.push(connection.send(message));
      } catch (error) {}
    }
    return results;
  };

  module.exports = {
    init: init,
    create: create,
    update: update,
    "delete": _delete
  };

}).call(this);
