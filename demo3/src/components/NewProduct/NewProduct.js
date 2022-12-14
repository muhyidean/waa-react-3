import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router";
import './NewProduct.css';

const NewProductHook = (props) => {

    const newProductForm = useRef();

    const navigate = useNavigate();

    const ProductHandler = (e) => {
        e.preventDefault();
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        };
        console.log(data);
        axios.post('http://localhost:8080/api/v1/products', data)
            .then(data => {
                navigate('/products');
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <div className="NewProduct">
            With Ref
            <form ref={newProductForm} onSubmit={ProductHandler}>
                <h1>Add a Product</h1>

                <label>Name</label>
                <input type="text"
                    label={'name'}
                    name={'name'}
                />

                <label>Price</label>
                <input type="text"
                    label={'price'}
                    name={'price'}
                />
                <button>Add Product </button>
            </form>

        </div>
    );

}

export default NewProductHook;