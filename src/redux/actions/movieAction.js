import * as types from '../types/movieType';

export const datGheAction = (item) => {
  return {
    type: types.DAT_GHE,
    payload: item,
  };
};
