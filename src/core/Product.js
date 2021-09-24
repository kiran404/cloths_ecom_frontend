import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

import ProductSlider from './Slider';
import { getProducts } from './apiCore';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);
    const [productsBySell, setProductsBySell] = useState([]);


    const loadProductsBySell = () => {
        getProducts('sold')
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setProductsBySell(data);
                }
            });
    };

    const loadSingleProduct = productId => {
        read(productId)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setProduct(data);
                    // fetch related data
                    listRelated(data._id)
                        .then(data => {
                            if (data.error) {
                                setError(data.error);
                            } else {
                                setRelatedProduct(data);
                            }
                        })
                }
            })
    }

    useEffect(() => {
        const productId = props.match.params.productId;  // due to react router dom
        loadSingleProduct(productId);
        loadProductsBySell();
    }, [props])

    return (
        <Layout
            title={product && product.name}
            description={product && product.description && product.description.substring(0, 100)}
            className="container-fluid"
        >
            <h2 className="mb-3">{product.name}</h2>
            <div className="row">
                <div className="col">
                    {/* <div className="row"> */}
                    <span className="col" style={{ float: 'left' }}>

                        {product && product.description && <Card product={product} showViewProductButton={false} />}
                    </span>
                    <span className="col">
                        {product.description}
                    </span>
                </div>
                <div className="col">
                    <h4>People also Likes</h4>
                    {relatedProduct.map((p, i) => (
                        <div className="mb-3" key={i}>
                            <Card product={p} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Product;
