

function rootReducer(prevstate, action) {

    if(action.type === "GETPOSTS") {
        return {
            ...prevstate,
            posts:action.payload
        }
    } else if(action.type === "ADDPOST") {
        return {
            ...prevstate,
            count:prevstate.count-1
        }
    } else if(action.type === "EDITPOST") {
        return {
            ...prevstate,
            posts:action.payload
        }
    } else if(action.type === "DELETEPOST") {
        return {
            ...prevstate,
            posts:action.payload
        }
    }
    return prevstate;
}

export default rootReducer;