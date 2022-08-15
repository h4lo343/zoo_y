const initState = {
  logged : false,
  FirstName : '',
  LastName:'',
  Gender: 0,
  Location: null,
  Age:0
}

  export default function loginReducer(prestate=initState, action) {
    const {type, data} = action
    switch(type) {
      case 'userLogin':
        
        prestate.logged = true
        prestate.FirstName = data.firstName
        prestate.LastName = data.LastName
        prestate.Gender = data.Gender
        prestate.Location = data.Location
        prestate.Age = data.Age
        return prestate
      
      default:
        return prestate
    }
  }