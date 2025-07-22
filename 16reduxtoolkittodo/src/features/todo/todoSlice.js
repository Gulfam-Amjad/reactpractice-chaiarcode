import { createSlice, nenoid } from "@reduxjs/toolkit";

const intialState = {
    todos:[
        {id:1, text: "this id text"}
    ]
}

export const todoSlice= createSlice({
    name : "todo",
    intialState,
    reducers:{

       addTodo:(state,action)=>{
          const todo={
             id: nenoid(),
             text:action.payload        
          }
           state.todos.push(todo)
       }
    },
       removeTodo:(state, action)=>{
         state.todos=state.todos.fillter((todo)=>(
            todo.id !==action.payload
         ))
       }
    
})

export {addTodo,removeTodo}= todoSlice.actions

export const todoReducer= todoSlice.reducer