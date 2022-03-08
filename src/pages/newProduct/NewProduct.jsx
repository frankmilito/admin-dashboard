import React from 'react'
import './newProduct.css'

const NewProduct = () => {
  return (
    <div className='newProduct'>
        <h1 className="addProductTitle">New Product</h1>
         <form className="productForm">
                <div className="addProductItem">
                    <label >Image</label>
                    <input type="file" />
                </div>
                <div className="addProductItem">
                    <label >Name</label>
                    <input type="text" placeholder="Apple Head phone" />
                </div>
                <div className="addProductItem">
                     <label htmlFor="inStock">In stock</label>
                    <select name="" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="addProductItem">
                     <label htmlFor="active">Active</label>
                    <select name="" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

               <button className="addProductbtn">Create</button>
            </form>
    </div>
  )
}

export default NewProduct