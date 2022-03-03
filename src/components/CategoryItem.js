import React from 'react';
import {Link} from "react-router-dom";

export const CategoryItem = (props) => {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props;

    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 mt-3">
            <div className="card">
                <img src={strCategoryThumb} alt={strCategory}/>
                <div className="card-body">
                    <h3>{strCategory}</h3>
                    <p>{strCategoryDescription.slice(0, 70)}...</p>
                    <Link to={`/category/${strCategory}`} className="btn btn-outline-success rounded-0">Watch Category</Link>
                </div>
            </div>
        </div>
    );
};