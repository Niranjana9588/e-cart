const{ createSlice }= require ("@reduxjs/toolkit");


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],//since this state have to hold more than one item
    reducers:{
        //actions
        //function to add an item to wishlist array state
        addToWishlist:(state ,action)=>{
            state.push(action.payload)
        },
        //function to remove items from wishlistArray state
        removeFromWishlist :(state ,action)=>{
            //filter returns a new array with item satisfying the condition
          return  state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer