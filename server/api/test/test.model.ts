import * as mongoose from 'mongoose';

var TestSchema = new mongoose.Schema({
    name: String,
    type: String,
    tel: Number
});

export default mongoose.model('testschema', TestSchema);