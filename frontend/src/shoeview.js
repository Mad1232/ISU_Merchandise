import React, { useState, useEffect } from 'react';

export function ShoeView({ onCheckoutClick, updateCart}) {
    const [shoes, setShoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredShoes, setFilteredShoes] = useState([]);
    const [cart, setCart] = useState([]); // State variable to store the cart items
    

    useEffect(() => {
        fetchShoes();
    }, []);

    const fetchShoes = async () => {
        try {
            const response = await fetch('http://localhost:8081/shoes');
            const data = await response.json();
            setShoes(data);
            setFilteredShoes(data); // Initialize filteredShoes with all shoes
        } catch (error) {
            console.error('Error fetching shoes:', error);
        }
    };

    const handleSearch = () => {
        const filtered = [];
        for(let i = 0; i < shoes.length; i++){
            if(shoes[i].name.toLowerCase().startsWith(searchTerm.toLowerCase())){
                filtered.push(shoes[i]);
            }
        }
        setFilteredShoes(filtered);
    };

    const handleAddToCart = (shoeId) => {
        const selectedShoe = shoes.find(shoe => shoe.id === shoeId);
        if (selectedShoe) {
            setCart(prevCart => [...prevCart, selectedShoe]); // Update cart without nesting
            updateCart(selectedShoe); //Update cart in App.js
        }
    };
    
    const handleRemoveFromCart = (shoeId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== shoeId)); // Update cart without nesting
    };
    

    const handleCheckoutClick = () => {
        onCheckoutClick(); // Call the onCheckoutClick function passed from App.js
    };

    return (
        <div className="container">
            {/* Search by title */}
            <div className="mt-4">
                <h2>Search</h2>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="form-control"
                        placeholder="Enter shoe name"
                    />
                    <button onClick={handleSearch} className="btn btn-primary">Search</button>
                </div>
            </div>

            <div className="row">
                {filteredShoes.map(shoe => (
                    <div key={shoe.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={shoe.image} className="card-img-top" alt={shoe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{shoe.name}</h5>
                                <p className="card-text">Price: ${shoe.price}</p>
                                {/* Display the number of items selected for this shoe */}
                                <p className="card-text">Selected: {cart.filter(item => item.id === shoe.id).length}</p>
                                <p className="card-text">{shoe.description}</p>
                                {/* Buttons to add and remove the shoe from the cart */}
                                <button onClick={() => handleAddToCart(shoe.id)} className="btn btn-primary">+</button>
                                <button onClick={() => handleRemoveFromCart(shoe.id)} className="btn btn-danger">-</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="btn btn-light bg-warning container-fluid d-flex justify-content-center mt-2" onClick={handleCheckoutClick}>Checkout</button>
        </div>
    );
}
