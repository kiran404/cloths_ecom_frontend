import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import { getProducts } from '../core/apiCore';
import moment from "moment";
import Search from "../core/Search";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);
    const [collapse, setCollapse] = useState(null);
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);

    const { user, token } = isAuthenticated();

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

    const loadOrders = () => {
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        });
    };

    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        loadOrders();
        loadStatusValues();
        loadProductsBySell();
    }, []);

    const showOrdersLength = () => {
        if (orders.length > 0) {
            return (
                <h1 className="text-danger display-2">
                    Total orders: {orders.length}
                </h1>
            );
        } else {
            return <h1 className="text-danger">No orders</h1>;
        }
    };

    const showInput = (key, value) => (
        <span className="">
            <span className="">
                <span className="">{key}</span>
            </span>
            <input
                type="text"
                value={value}
                className=""
                readOnly
            />
        </span>
    );

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    loadOrders();
                }
            }
        );
    };

    const showStatus = o => (
        <div className="form-group">
            <h6 className="mark mb-4"> {o.status}</h6>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e, o._id)}
            >
                <option>Update Status</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );

    const TableShow = (props) => {
        return (
            <table className="orderTable" border="1">
                <tr className="tableHead">
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Ordered By</th>
                    <th>Phone</th>
                    <th>Ordered on</th>
                    <th>Delivery Address</th>
                    <th>Product </th>
                    <th>Delivery Status</th>

                </tr>
                {orders.filter(o => o.status == props.status).map((o, oIndex) => {
                    return (
                        <tr>
                            <td>  {o.transaction_id} </td>
                            <td> ${o.amount} </td>
                            <td> {o.user.name} </td>
                            <td> {o.phone} </td>
                            <td> {moment(o.createdAt).fromNow()} </td>
                            <td> {o.address} </td>
                            <td>
                                {o.products.map((p, pIndex) => (
                                    <span>
                                        <tr>
                                            <td> {showInput("Name", p.name)}</td>
                                            <td>{showInput("Price", p.price)}</td>
                                        </tr>
                                    </span>
                                ))}
                            </td>
                            <td>{showStatus(o)}</td>
                        </tr>
                    );
                })}
                {console.log(orders)}



            </table>
        )
    }

    return (
        <Layout className="container-fluid">

            <div className="orderButton">


                <button className="btn btn-primary order-buttons " type="button" data-toggle="collapse" data-target="#notProcessed" aria-expanded="false" aria-controls="collapseExample">
                    Not Processed
                </button>

                <button className="btn btn-primary order-buttons" type="button" data-toggle="collapse" data-target="#processing" aria-expanded="false" aria-controls="collapseExample">
                    Processing
                </button>

                <button className="btn btn-primary order-buttons" type="button" data-toggle="collapse" data-target="#delivered" aria-expanded="false" aria-controls="collapseExample">
                    Delivered
                </button>

                <button className="btn btn-primary order-buttons" type="button" data-toggle="collapse" data-target="#cancelled" aria-expanded="false" aria-controls="collapseExample">
                    Cancelled
                </button>

                <button className="btn btn-primary order-buttons" type="button" data-toggle="collapse" data-target="#bestSold" aria-expanded="false" aria-controls="collapseExample">
                    Best Sold
                </button>

            </div>


            <div className="collapse" id="notProcessed">
                <h1>Not Processed</h1>
                <TableShow status="Not processed" />
            </div>

            <div className="collapse" id="processing">
                <h1>Processing</h1>
                <TableShow status="Processing" />
            </div>

            <div className="collapse" id="delivered">
                <h1>Delivered</h1>
                <TableShow status="Delivered" />
            </div>

            <div className="collapse" id="cancelled">
                <h1>Cancelled</h1>
                <TableShow status="Cancelled" />
            </div>

            <div className="collapse" id="bestSold">
                <div className="row">
                    <div className="col">
                        <h2 className="mb-4 inline">Best Sellers</h2>
                        <button className="btn btn-primary order-buttons " type="button" data-toggle="collapse" data-target="#search" aria-expanded="false" aria-controls="collapseExample">
                            Search
                        </button>
                        <table border="1">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Sold</th>
                            </tr>

                            {productsBySell.map((product, i) => (
                                <tr>
                                    <td> {product.name}</td>
                                    <td> {product.price}</td>
                                    <td>{product.sold}</td>
                                </tr>
                            ))}

                        </table>
                    </div>
                    <div className="col">
                        <div className="collapse" id="search">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>


        </Layout >

    );
};

export default Orders;

