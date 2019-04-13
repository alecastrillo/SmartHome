import Room from '../../../models/room';

function createRoomRoutes(server){
  server.route([
  {
    method: "GET",
    path: "/api/v1/rooms",
    handler: function(request, reply){
      return Room.find();
    }
  },
  {
    method: "POST",
    path: "/api/v1/rooms",
    handler: function(request, reply){
      const { roomName } = request.payload;
      const room = new Room({
        roomName
      });

      return room.save();
    }
  }
])
}

export default createRoomRoutes;