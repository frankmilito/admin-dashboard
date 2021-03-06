import './product.css'
import {Link} from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import {product} from '../../dummydata'
import {Publish} from '@mui/icons-material'

const Product = () => {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to='/new-product'>
                <button className="productBtn">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={product} dataKey='Sales' title='Sales Performance' />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="product" className="productInfoImg" />
                    <span className="productName">Head Phone</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">5432</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormleft">
                    <label >Product Name</label>
                    <input type="text" placeholder='Apple head phone' />
                    <label htmlFor="">In stock</label>
                    <select name="" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label htmlFor="">Active</label>

                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                     <div className="productUpload">
                         <img src="https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productImgUpload" />
                         <label for="file"><Publish/> </label>
                         <input type="file" id='file' style={{display:'none'}}/>
                     </div>
                     <button className="productBtn">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product