import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    houseno: {
        type: String,
        required: [true, "House no is required"],
    },
    area: {
        type: String,
        required: [true, "Address is required"],
    },
    category: {
        type: String,
    },
    coordinates: {
        lat: {
            type: Number,
            required: [true, "Latitude is required"],
        },
        lng: {
            type: Number,
            required: [true, "Longitude is required"],
        }
    },
});

// Create the Address model from the schema
const Address = mongoose.model('Address', AddressSchema);

export default Address;