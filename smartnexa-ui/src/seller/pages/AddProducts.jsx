import React from 'react';
import { useState } from "react";
import "./css/AddProducts.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BackArrowIcon from "./icons/backarrow.svg";
import AddImages from "../components/AddImages";
import CategoryBrandDropdown from '../components/CategoryBrandDropdown';

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    brand: '',
    category: '',
    short_description: '',
    description: '',
    slug: '',
    price: '',
    discount_price: '',
    connectivity: '',
    model_number: '',
    serial_number: ''
  });

  //for connectivity dropdown
  const [selectedConnectivity,setSelectedConnectivity]=useState();

  //connectivity options
  const connections = ['Select Connectivity','WiFi','Bluetooth']
  //handle change
  const handleConnectivityChange = (event)=> {
      setSelectedConnectivity(event.target.value);
  }

  const [image, setImage] = useState(null); // Separate state for image file

  // Handle form input changes
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Only select the first image
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a FormData object to send the data as multipart/form-data
    const formData = new FormData();
  
    // Append each form field to the FormData object
    for (let key in productData) {
      formData.append(key, productData[key]);
    }
  
    // Append the image file to the formData
    if (image) {
      formData.append('image', image);
    }
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/add_products', {
        method: 'POST',
        body: formData, // Send the formData object
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert('Product added successfully!');
        console.log('Response:', result);
      } else {
        alert(result.message || 'Failed to add product');
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the product.');
    }
  };
  
    return(
         <>
            <div className="container-fluid mt-3 p-4">
              <div className='header'>
                <div className="back-button">
                  <Link><img src={BackArrowIcon} alt="Back arrow icon" width={21} height={21} className='pb-1'/></Link>
                </div>
                <div className="text-box">
                  <p>back to product list</p>
                  <h5 className='heading'>Add Products</h5>
                </div>  
              </div>
                
              <div className="row first-row">
                  <div className="col-5 basic-info detail-box p-4 ">
                    <h6>Basic Information</h6>
                    <div className="input-box p-4">
                      <label htmlFor="p-name" className="form-label mb">Product Name</label>
                      <input type="text" name="" className='form-control mb-3' id="p-name" />
                      <label htmlFor="short-desc" className="form-label">Short Description</label>
                      <textarea name="" id="short-desc" className="form-control mb-3"></textarea>
                      <label htmlFor="desc" className="form-label">Description</label>
                      <textarea name="" id="desc" className="form-control mb-3" rows={4}></textarea>
                      <label htmlFor="slug" className="form-label">Slug</label>
                      <input type="text" name="" id="slug" className="form-control" />
                    </div>
                  </div>
                  <div className="col-5" >
                    <div className="row detail-box product-img-container p-3 mb-3">
                      <h6>Product Image</h6>
                      <AddImages/>
                    </div>
                    <div className="row detail-box p-4">
                      <h6>Category & Brand</h6>
                      <CategoryBrandDropdown/>
                    </div>
                  </div>
              </div>

              <div className="row second-row">
                <div className="col-5 additonal-info detail-box p-4 ">
                   <h6>Additional Information</h6>
                   <div className="input-box p-4">
                      <label htmlFor="connectivity" className="form-label mb">Connectivity</label>
                      <select
                          id="connectivity"
                          value={selectedConnectivity}
                          onChange={handleConnectivityChange}
                          className="dropdown-select mb-3">
                          {connections.map((connect) => (
                            <option key={connect} value={connect}>
                              {connect}
                            </option>
                          ))}
                      </select>
                      <label htmlFor="model-num" className="form-label">Model Number</label>
                      <input type="text" name="" id="model-num" className="form-control mb-3" />
                      <label htmlFor="serial-num" className="form-label">Serial Number</label>
                      <input type="text" name="" id="serial-num" className="form-control" />
                    </div>
                </div>

                <div className="col-5 price-info detail-box p-4 ">
                   <h6>Pricing</h6>
                   <div className="input-box p-4">
                      <label htmlFor="base-price" className="form-label mb">Base Price</label>
                      <input type="number" name="" className='form-control mb-3' id="base-price" />
                      <label htmlFor="disc-price" className="form-label">Discount Price</label>
                      <input type="number" name="" id="disc-price" className="form-control mb-3" />
                    </div>
                </div>
              </div>
              <div className="row btn-box">
                  <button className='discard-btn'>Discard</button>
                  <button type='submit' className='add-product-btn'>Add Product</button>
              </div>
            </div>
         </>
    );
};

export default AddProducts;