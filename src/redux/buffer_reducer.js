const initState = []

  export default function bufferReducer(prestate=initState, action) {
    const {type, data} = action
    switch(type) {
      case 'addBuffer':
        return [...prestate, data]
      
      default:
        return prestate
    }
  }