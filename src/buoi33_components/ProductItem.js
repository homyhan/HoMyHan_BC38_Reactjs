import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {image, name, price} = this.props.item //bóc tách phần tử es6
        
        return (
            <div className='card p-3'>
                <img src={image} alt=''></img>
                <h4 style={{fontSize: '18px'}}>{name}</h4>
                <h5 style={{fontSize: '14px'}}>Price: {price}$</h5>
                <div className='d-flex'>
                    <button onClick={()=>this.props.selectedProduct(this.props.item)} className='btn btn-outline-success me-3 btn-chitiet'>Chi tiết</button>
                    <button onClick={()=>this.props.addToCart(this.props.item)} className='btn btn-success'>Thêm giỏ hàng</button>
                   {/* <button onClick={()=>this.props.selectedProduct(this.props.item)} type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#detailModal">
                        Detail2
                    </button> */}

                </div>
                
            </div>
        );
    }
}

export default ProductItem;