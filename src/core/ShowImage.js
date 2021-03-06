import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        {/* {console.log('Product_Photo >> ', item, url)} */}
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxWidth: "70%" , maxHeight:'70%' }}

        />
    </div>
);

export default ShowImage;