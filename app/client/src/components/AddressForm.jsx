// src/components/AddressForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ location }) => {
    const [formData, setFormData] = useState({ area: '', category: '' });
    const [favorite, setFavorite] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = { ...formData, ...location, favorite };
        await axios.post('http://localhost:5000/api/address/create', addressData);
        alert('Address saved!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Area"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                required
            />
            <select onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Friends & Family">Friends & Family</option>
            </select>
            <input
                type="checkbox"
                checked={favorite}
                onChange={() => setFavorite(!favorite)}
            /> Save as Favorite
            <button type="submit">Save Address</button>
        </form>
    );
};

export default AddressForm;
