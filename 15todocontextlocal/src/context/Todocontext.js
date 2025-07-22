import React, { createContext, useContext } from 'react'

export const Todocontext = createContext({
    Todos:[{
        id: 1,
        todo: "the todo msg",
        completed: false
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(Todocontext);
}

export const TodoProvider=Todocontext.Provider