import * as types from './../constants/actionType'

 
var initialState =  {
    id: '',
    name:'',
    status: false
};  
 

var myReducer = (state = initialState, action )=>{
    switch(action.type){
        case types.UPDATE:
                
                return  action.task;
        default :return state;
    }
}
export default myReducer;