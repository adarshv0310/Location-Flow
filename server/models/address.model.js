import mongoose, { Mongoose } from 'mongoose';


const AddressSchema = new mongoose.Schema({
    houseno: {
        type: String,
        required: [true, "House no is required"],

    },
    area: {
        type: String,
        required: [true, "address is required"],
    },
    category: {
        type: String,

    },
    coordinates: {
        lat: Number,
        lng: Number,
    },

});



const Address = mongoose.model('Address', AddressSchema);

export default Address;