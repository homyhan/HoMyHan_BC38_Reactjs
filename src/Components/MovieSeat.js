import React, { Component } from 'react';
import ListSeatSelected from './ListSeatSelected'
import './Movie.css';
import dsGhe from '../Data/listSeat.json';
import SeatStructure from './SeatStructure';
import * as types from '../redux/types/movieType';
import {connect} from 'react-redux';

class MovieSeat extends Component {
    renderHangGhe = ()=>{
        return dsGhe.map((item, index)=>{
            return <div key={index}>
                <SeatStructure item={item} soHangGhe={index}></SeatStructure>
            </div>
        })
    }
    render() {
        return (
            <div style={{position: 'fixed', width: '100%', height:'100%', backgroundImage: "url('./assets/bgmovie.jpg')", backgroundSize: 'cover'}}>
                <div style={{backgroundColor:'rgba(0,0,0,0.6)', position:'fixed', width: '100%', height:'100%'}}>
                    <div className='container'>
                        <div className='row content'>
                            <div className='col-lg-8 text-center'>
                                <div className='text-light' style={{fontSize:'50px'}}>ĐẶT VÉ XEM PHIM</div>
                                <div className='mt-4 text-light' style={{fontSize: '20px'}}>Màn hình</div>
                                <div className='mt-2' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                    
                                    <div className='screen'></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div style={{fontSize:'25px'}} className='col-lg-4 text-light mt-2'>
                                DANH SÁCH GHẾ CỦA BẠN
                                <ListSeatSelected></ListSeatSelected>
                                <div className='text-end'>
                                    <button className='btn btn-success' onClick={()=>this.props.dispatch({
                                        type: types.THANH_TOAN,
                                        
                                    })}>Thanh toán</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(MovieSeat);