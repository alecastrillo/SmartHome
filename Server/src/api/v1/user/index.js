import User from '../../../models/user';

function createUserRoutes(server){
  server.route([
  {
    method: "GET",
    path: "/api/v1/users",
    handler: function(request, reply){
      return User.find();
    }
  },
  {
    method: "POST",
    path: "/api/v1/users",
    handler: function(request, reply){
      const { username, password } = request.payload;
      const user = new User({
        username, password
      });

      return user.save();
    }
  }
])
}

export default createUserRoutes;