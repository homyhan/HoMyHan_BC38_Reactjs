import React, { Component } from "react";
import "./Movie.css";
import {connect} from 'react-redux'
import { datGheAction } from "../redux/actions/movieAction";

class SeatStructure extends Component {
  renderSeat = () => {
    return this.props.item.danhSachGhe.map((item, index) => {
      let cssGheDaDat = "";
      let disable = false;
      if (item.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable=true;
      }
      //xét trạng thái ghế đang đặt
      let cssGheDangDat='';
      let indexGheDangDat = this.props.listSeat.findIndex(gheDangDat=>gheDangDat.soGhe===item.soGhe);
      if(indexGheDangDat!==-1){
        cssGheDangDat='gheDangChon';
      }
      return (
        <button onClick={()=>this.props.dispatch(datGheAction(item))} disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
          {item.soGhe}
        </button>
      );
    });
  };
  renderSoHang=()=>{
    return this.props.item.danhSachGhe.map((hang, index)=>{
        return <button key={index} className="rowNumber">{hang.soGhe}</button>
    })
  }
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
        return <div>
            {this.props.item.hang} {this.renderSoHang()}
        </div>;
    } else {
      return (
        <div>
            
          {this.props.item.hang} {this.renderSeat()}
        </div>
      );
    }
  };
  render() {
    return <div className="text-light text-start">
        {this.renderHangGhe()}
    </div>;
  }
}

const mapStateToProps = state =>{
    return {
        listSeat: state.movieReducer.dsGheDangDat
    }
}

export default connect(mapStateToProps)(SeatStructure);
