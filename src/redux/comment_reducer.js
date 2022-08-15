const initState = []

  export default function commentReducer(prestate=initState, action) {
    const {type, data} = action
    switch(type) {
      case 'addComment':
        return [...prestate, data]

      case 'deletaComment':
        return prestate.filter((data)=> {
          return data.approved === true
        })
       
      default:
        return prestate
    }
  }