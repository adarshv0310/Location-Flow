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
        required: [true, 'Category is required'],
        enum: ['house', 'friends & family ', 'office'],
        default: 'home',
    },
    coordinates: {
        lat: {
            type: Number,

        },
        lng: {
            type: Number,

        }
    },
}, { timestamps: true });

// Create the Address model from the schema
const Address = mongoose.model('Address', AddressSchema);

export default Address;