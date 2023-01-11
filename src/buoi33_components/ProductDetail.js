import React, { Component } from "react";
import styles from "./ProductDetail.module.css";

class ProductDetail extends Component {

  // handleCloseModal =()=>{
  //   // var modal = document.getElementById('modalDetail');
  //   // modal.classList.add('closeModal');
  //   // this.props.selectedProd=null
  //   console.log("click");
  // }
  
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProd;
    return (
      <div id="modalDetail" className={styles.productDetail}>
        <div className="closeModal text-end me-2">
          <button id="btnClose" onClick={()=>this.props.closeModal()} className={styles.btnClose}>X</button>
        </div>
        
        
        <div className="">
          <div className="row border py-2 align-items-center" >
            <div className="col-5 text-center">
              <img style={{width: '300px'}} className="" src={image} alt=""></img>
            </div>
            <div className="col-7">
              <h2>Tên: {name}</h2>
              <p>Giá: {price} $</p>
              <p>Mô tả: {description}</p>
              <p>Số lượng: {quantity}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;

