import * as types from '../types/movieType';
const initialState = {
  dsGheDangDat:[]
};

export const movieReducer = (state=initialState, {type, payload})=>{
  switch (type) {
    case types.DAT_GHE:{
      let dsGheDangDatUpdate=[...state.dsGheDangDat];
      
      let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === payload.soGhe);
      if(index!==-1){
        dsGheDangDatUpdate.splice(index, 1);
      }else{
        dsGheDangDatUpdate.push(payload);
        // console.log(payload);
      }
      state.dsGheDangDat=dsGheDangDatUpdate;
      return {...state}
    }
    case types.HUY_GHE:{
      let dsGheDangDatUpdate=[...state.dsGheDangDat];
      
      let index = dsGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === payload);
      if(index!==-1){
        dsGheDangDatUpdate.splice(index, 1);
      }
      state.dsGheDangDat = dsGheDangDatUpdate;
      return {...state};
    }
    case types.THANH_TOAN:{
      state.dsGheDangDat=[];
      return {...state};
    }
    default:
      return {...state}
  }
}