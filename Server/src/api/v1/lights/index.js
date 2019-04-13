import Light from '../../../models/light';

function createLightRoutes(server){
  server.route([
  {
    method: "GET",
    path: "/api/v1/lights",
    handler: function(request, reply){
      return Light.find();
    }
  },
  {
    method: "POST",
    path: "/api/v1/lights",
    handler: function(request, reply){
      const { lightName, state, brightness } = request.payload;
      const light = new Light({
        lightName,
        state,
        brightness
      });

      return light.save();
    }
  },
])
}

export default createLightRoutes;