// Action Types
 const ADD_NOTE = 'note/add'
const REMOVE_NOTE = 'note/remove'



// Action Creators
export function addnote(productData) {
  return { type: ADD_NOTE, payload: productData }
}

export function removenote(id) {
  return { type: REMOVE_NOTE, payload:{id}  }
}



// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      const existingnote = state.find(
        (note) => note.id === action.payload.id
      )
      if (existingnote) {
        return state.map((note) => {
          if (note.id === existingnote.id) {
            return { ...note, Title:action.payload.Title,Description:action.payload.Description,type:action.payload.type }
          }
          return note
          
        })
      }
      return [...state, { ...action.payload }]










    case REMOVE_NOTE:
      return state.filter(
        (note) => note.id !== action.payload.id
      )
     

   default:
      
      return state

  }
 
    }
    

