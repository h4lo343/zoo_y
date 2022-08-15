const initState = []

  export default function loginReducer(prestate=initState, action) {
    const {type, data} = action
    switch(type) {
      case 'addUser':
        return [...prestate, data]
      
      default:
        return prestate
    }
  }