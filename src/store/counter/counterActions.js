
// types
const incementType = "INCREMENT";
const decrementType = "DECREMENT";

// actions
export const increment = ()=>{
    return {
        type: incementType,
    }
}
export const decrement = ()=>{
    return {
        type: decrementType,
    }
}
