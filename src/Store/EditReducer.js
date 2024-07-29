export const EDIT_NOTE = 'note/edit'



//action creater
   export function noteedit(product) {
    return { type: EDIT_NOTE, payload: product }


}   
// Reducer
export default function editreducer(state = {}, action) {
    if (action.type===EDIT_NOTE) {
    return state = { ...action.payload }
              
    }else{
        return state
    }      
 }