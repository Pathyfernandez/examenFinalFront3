export const reducer = (state, action) =>{
    switch(action.type){
        case 'getList':
            return{}
        case 'getDoctor':
            return{}
        case 'addFav':
            return{...state, favs:[...state.favs, action.payload]}
        case 'deleteFav':
            return{}
    }
}