import mongoose from "mongoose";


//person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
      address: {
        type: String,
        required: true
    },
      salary: {
        type: Number,
        required: true
    },

});

//create person model
const Person = mongoose.model('Person',personSchema);
export default Person;