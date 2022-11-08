const intialState=0;

const changeNumber=(state=intialState,action)=>{
    switch(action.type){
        case "INCREAMENT":return state+5;
        case "DECREAMENT":return state-1;
        default:return state;
    }
}

export default changeNumber;