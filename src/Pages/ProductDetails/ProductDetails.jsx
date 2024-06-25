import React, { useState, useEffect } from "react";
import axios from 'axios'
import './productstyle.css'
import PaginationControls from '../../Component/PaginationControls '

const ProductDetails = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage=5;
    // Logic to calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    // Function to fetch data using Axios
    const fetchData = async () => {
      
       await axios.get("https://fakestoreapi.com/products")
       .then(response => {
        setData(response.data);
        console.log(data);
      })
      .catch(error => {
      })
       
    };
    useEffect(() => {
        fetchData();
      }, []);  
  return (
    <div className="ProductContainer">
    <table>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>category</th>
                <th>View</th>
            </tr>
        </thead>
        <tbody>
            {currentItems.map((product)=>(
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.description}</td>
                    <td>{product.category}</td>
                    <td><button className="PrimaryBTN">View Details</button></td>
                </tr>
            ))}
        </tbody>
    </table>
    <PaginationControls
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default ProductDetails