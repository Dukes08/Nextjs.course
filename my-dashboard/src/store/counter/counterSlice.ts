import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState{
    count: number;
    isSet: boolean;
}


const initialState: CounterState = {
    count: 5,
    isSet: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
//   acciones que cambian el valor del states
  reducers: {
    //to check if the value is already set to not lose the value passed from the page
    setCounterDefaultValue(state, action:PayloadAction<number>){
        if( state.isSet ) return;
        
        state.count = action.payload;
        // si ya se seteo el valor no vuelves a colocar al counter el valor que se paso como prop
        state.isSet = true;
    },

    addOne(state){
        state.count ++
    },

    substractOne(state){
        if(state.count === 0) return;
        state.count --
    },
    // with action we recieve parameters=
    resetCount(state, action: PayloadAction<number>){
        if(action.payload <0 ) action.payload = 0;
        state.count == action.payload
    }
  }
});

// aca se exportan las funciones que alteran el estado
export const {addOne, substractOne, resetCount, setCounterDefaultValue} = counterSlice.actions;

export default counterSlice.reducer;