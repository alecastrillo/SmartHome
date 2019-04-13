import mongoose from 'mongoose';

const Schema = mongoose.Schema

const LightSchema = new Schema({
    lightName: String,
    state: String,
    brightness: String

});

export default mongoose.model('Light', LightSchema);
