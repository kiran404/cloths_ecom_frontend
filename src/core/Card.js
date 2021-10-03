import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({
    product,
    main,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false,
    setRun = f => f,
    run = undefined
    // changeCartSize
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);
    const [size, setSize] = useState(product.count);

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1 ml-1">View Product</button>
                </Link>
            )
        );
    };
    const addToCart = () => {
        // console.log('added');
        addItem(product, setRedirect(true));
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCartBtn = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button onClick={addToCart}>
                    <i className="fa fa-cart-plus fa-2x" />
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock </span>
        ) : (
            <span className="badge badge-primary badge-pill">Out of Stock </span>
        );
    };

    // const handleChange = productId => event => {
    //     setRun(!run); // run useEffect in parent Cart
    //     setCount(event.target.value < 1 ? 1 : event.target.value);
    //     if (event.target.value >= 1) {
    //         updateItem(productId, event.target.value);
    //     }

    // };
    const handleChange = (productId, count, size) => {
        setRun(!run); // run useEffect in parent Cart
        setCount(count < 1 ? 1 : count);
        setSize(size);

        updateItem(productId, count, size);

    };

    // const showCartUpdateOptions = cartUpdate => {
    //     return (
    //         cartUpdate && (
    //             <div className="qty">
    //                 <div className="input-group mb-3">
    //                     <div className="input-group-prepend">
    //                         <span className="input-group-text">Qty.</span>
    //                     </div>
    //                     <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
    //                 </div>
    //             </div>
    //         )
    //     );
    // };



    const showCartUpdateOptions = cartUpdate => {
        // console.log(main)
        return (

            cartUpdate && (
                <>
                    {/* <div className="sizes">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Sizes</span>
                            </div> */}
                            {/* <input type="text" className="form-control" value={count} onChange={handleChange(product._id)} /> */}
                            {/* {product?.sizes?.length ?
                                <select>
                                    {product?.sizes?.map(size => {
                                        return <option onChange={(event) => handleChange(product._id, -1, event.target.value)}>{size}</option>
                                    })}

                                </select>
                                :
                                <select>
                                    <option onChange={(event) => handleChange(product._id, -1, event.target.value)}>M</option>
                                </select>
                            }
                        </div>
                    </div> */}


                    <div className="qty">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Qty.</span>
                            </div>
                            <input type="number" className="form-control" value={count} onChange={(event) => handleChange(product._id, event.target.value, "M")} />
                        </div>
                    </div>
                </>
            )
        );
    };
    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => {

                        removeItem(product._id);
                        setRun(!run); // run useEffect in parent Cart
                    }}
                >
                    <i className="fa fa-trash fa-2x" />
                </button>
            )
        );
    };
    return (
        <div className={main == 'True' ? 'card cardBig' : 'card cardSmall'}>
            <div className="card-header card-header-1"><span className="float-left">{product.name}</span><span className="float-right">Rs.{product.price}/-</span></div>
            <div className="card-body">
                <Link to={`/product/${product._id}`} className="mr-2">
                    {shouldRedirect(redirect)}
                    <ShowImage item={product} url="product" />
                </Link>
                <br />
                <div className="card-buttons">
                    {showAddToCartBtn(showAddToCartButton)}
                    {showRemoveButton(showRemoveProductButton)}

                </div>
                {showCartUpdateOptions(cartUpdate)}
            </div>
            
        </div>
    );
};

export default Card;





// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import ShowImage from './ShowImage';
// import { API } from "../config";
// import moment from "moment";
// import { addItem, updateItem, removeItem } from './cartHelpers';

// const Card = ({
//     product,
//     showViewProductButton = true,
//     showViewCartButton = true,
//     cartUpdate = false,
//     showRemoveProductButton = false,
//     setRun = f => f,
//     run = undefined
// }) => {
//     const [redirect, setRedirect] = useState(false);
//     const [count, setCount] = useState(product.count);

//     const showViewButton = (showViewProductButton) => {
//         return (
//             showViewProductButton && (
//                 <Link to={`/product/${product._id}`}>
//                     <button className="btn btn-outline-primary ml-1 mt-2 mb-2 mr-2">View Product</button>
//                 </Link>
//             )
//         )
//     }

//     const addToCart = () => {
//         addItem(product, () => {
//             setRedirect(true);
//         })

//     }

//     const shouldRedirect = (redirect) => {
//         if (redirect) {
//             return <Redirect to="/cart" />
//         }
//     }


//     const showAddToCartBtn = (showViewCartButton) => {
//         return (
//             showViewCartButton && (
//                 <Link to="/cart">
//                     <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 ml-3">Add To Cart</button>
//                 </Link>
//             )
//         )
//     }


//     const showStock = (quantity) => {
//         return quantity > 0 ? (
//             <span className="badge badge-primary badge-pill">In Stock</span>
//         ) : (
//                 <span className="badge badge-danger badge-pill">Out of Stock</span>
//             );
//     };

//     const handleChange = productId => event => {
//         // setRun(!run); // run useEffect in parent Cart
//         setCount(event.target.value < 1 ? 1 : event.target.value);
//         if (event.target.value >= 1) {
//             updateItem(productId, event.target.value);
//         }
//     };

//     const showCartUpdateOptions = (cartUpdate) => {
//         return (
//             cartUpdate && (
//                 <div>
//                     <div className="input-group mb-3">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">Adjust Quantity</span>
//                         </div>
//                         <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
//                     </div>
//                 </div>
//             )
//         );
//     };

//     const showRemoveButton = showRemoveProductButton => {
//         return (
//             showRemoveProductButton && (
//                 <button
//                     onClick={() => {
//                         removeItem(product._id);
//                         // setRun(!run); // run useEffect in parent Cart
//                     }}
//                     className="btn btn-outline-danger mt-2 mb-2"
//                 >
//                     Remove Product
//                 </button>
//             )
//         );
//     };

//     return (
//         <div className="card">
//             <div className="card-header card-header-1 name"><span className="float-left">{product.name}</span><span className="float-right">Rs.{product.price}/-</span></div>
//             <div className="card-body">
//                 {shouldRedirect(redirect)}
//                 <ShowImage item={product} url="product" />
//                 <p className="card-p  mt-2 black-10">{product.description.substring(0, 100)} </p>
//                 <p className="black-7">Category: {product.category && product.category.name}</p>
//                 <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>
//                 {showStock(product.quantity)}
//                 <br />
//                 {showViewButton(showViewProductButton)}

//                 {showAddToCartBtn(showViewCartButton)}

//                 {showRemoveButton(showRemoveProductButton)}

//                 {showCartUpdateOptions(cartUpdate)}
//             </div>
//         </div >
//     )
// }

// export default Card;

// // style = {{ backgroundImage: `url(${API}/product/photo/${product._id})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}