
// types
const addTodo = "ADD_TODO";
const deleteItem = "DELETE_ITEM";

// actions
export const addAction = (item)=>{
    return {
        type: addTodo,
        payload : item
    }
}
export const deleteAction = (id)=>{
    return {
        type: deleteItem,
        payload : id
    }
}

