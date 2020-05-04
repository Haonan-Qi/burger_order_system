
import * as actionTypes from "./actionTypes";

export const loadingStart = () => {
    return {type: actionTypes.LOADINGSTART,loading:true}
};

export const loadingEnd = () => {
  return {type: actionTypes.LOADINGEND,loading:false} 
};