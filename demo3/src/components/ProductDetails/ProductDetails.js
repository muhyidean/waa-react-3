import axios from "axios";
import { useEffect, useState, Fragment, useCallback, useMemo, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import Review from "../Review/Review";
import './ProductDetails.css';

const ProductDetails = (props) => {

    const params = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});


    useEffect(
        () => {
            console.log(params.id)
            if (params.id) {
                axios.get('http://localhost:8080/api/v1/products/' + params.id + '/reviews')
                    .then(response => {
                        setProductDetail(response.data)
                    })
                    .catch(err => console.log(err.message))
            }
        }, [params.id])

    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/products/' + id)
            .then(response => {
                // fetchProducts();
                navigate('/')
            })
            .catch(err => {
                console.error(err);
            })
    }


    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let productDetailsDisplay = null;
    if (params.id) {

        productDetailsDisplay = (

            <div className="ProductDetail">
                <div>
                    Product Details
                </div>
                <h1> {productDetail.name}</h1>
                <div >
                    {productDetail.price}
                    <br />

                    <div style={{ textAlign: "left" }}>
                        {space} Reviews <br />
                        {productDetail.reviews != null ? productDetail.reviews.map(review => {
                            return <Review comment={review.comment} />
                        }) : null}
                    </div>
                </div>
                <input
                    type="button"
                    value="Delete"
                    onClick={()=> { deleteButtonClicked(params.id) }} />
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;