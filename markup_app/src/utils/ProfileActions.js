import{getSavedLocally,saveLocally} from './utils'

export const addUser=user=>{
    let users=JSON.parse(getSavedLocally("users"))
    users=[...users,user];
    saveLocally(JSON.stringify(users),"users");
}

export const userExists=user=>{
    const users=JSON.parse(getSavedLocally("users"))
    users.forEach(u => {
        if(u.contact===user.contact && u.password===user.password)
            return u;
    });
    return false;
}