import mongoose from 'mongoose';

const Schema = mongoose.Schema

const RoomSchema = new Schema({
    roomName: String
});

export default mongoose.model('Room', RoomSchema);
