import React, { Component } from "react";
import {connect} from 'react-redux';
import * as types from '../redux/types/movieType';
import './Movie.css'
class ListSeatSelected extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="gheDuocChon mt-2"></button>  <span className="option">Ghế đã được chọn</span>
          <br></br>
          <button className="gheDangChon mt-2"></button> <span className="option">Ghế đang chọn</span> <br></br>
          <button
            style={{ marginLeft: "0%" }}
            className="ghe mt-2"
          ></button>{" "}
          <span className="option">Ghế chưa chọn</span>
          
        </div>
        <table className="table" border="2">
            <thead className="text-light">
                <tr>
                    <th>Số ghế</th>
                    <th>Giá</th>
                    <th>Huỷ</th>
                </tr>
            </thead>
            <tbody>
                {this.props.dsGhe.map((item, index)=>{
                  return <tr className="text-light" key={index}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia}</td>
                    <td><button className="btn btn-danger" onClick={()=>this.props.dispatch({
                      type: types.HUY_GHE,
                      payload: item.soGhe
                    })}>Del</button></td>
                  </tr>
                })}
                <tr className="text-warning">
                  <td>Tổng</td>
                  <td>{this.props.dsGhe.reduce((prevValue, currentItem)=>{
                    return prevValue+currentItem.gia
                  },0)}</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state=>{
  return {
    dsGhe: state.movieReducer.dsGheDangDat
  }
}
export default connect(mapStateToProps)(ListSeatSelected);
