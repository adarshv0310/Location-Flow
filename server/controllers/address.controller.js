import Address from "../models/address.model.js";
import { errorhandler } from "../utils/error.js";


export const createaddress = async() => {

    const { houseno, area, category } = req.body;
    if (!houseno || !area || !category) {
        return next(errorhandler(404, 'All the fields are neccessary'));
    }
    try {

        const newaddress = new Address({ houseno, area, category });

        await newaddress.save();

        res.status(201).json({
            success: true,
            message: 'Address created successfully',
            newaddress,
        })
    } catch (error) {
        console.error('Error  creating address:', error);
        return next(errorhandler(500, 'Internal Server Error'));
    }
}