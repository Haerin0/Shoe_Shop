import { configureStore, createSlice } from '@reduxjs/toolkit'

// state 만들기
let user = createSlice({
  name : 'user',
  initialState : { name: 'kim', age : 20},
  reducers : {
    changeName(state){
      // return { name: 'park', age : 20} 또는 아래 방법도 가능
      state.name = 'park'
    },
    changeAge(state){
      state.age += 1
    }
  }
})

// state 변경 함수 밖으로 빼서 export 하기

export let { changeName,changeAge } = user.actions

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
],
})


// state 등록
export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 