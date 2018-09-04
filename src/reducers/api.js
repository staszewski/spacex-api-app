export const apiData = (state = [], action) => { 
    switch (action.type) { 
      case 'FETCH_API_SUCCESS':
        return [
          ...action.apiData
        ]
      default:
        return state
    }
  }