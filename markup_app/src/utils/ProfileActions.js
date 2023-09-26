import{ getSavedLocally,saveLocally } from './utils'

export const addUser=user=>{
    let users=JSON.parse(getSavedLocally("users"))
    users.length>1?users=[...users,user]:users=[users,user];
    saveLocally(JSON.stringify(users),"users");
    saveLocally(users.length-1,"activeUser"); 
}

export const activeUser=()=>getSavedLocally("activeUser");

export const saveActiveUserId=id=>saveLocally(id,"activeUser"); 

export const userExist=user=>{
    const users=JSON.parse(getSavedLocally("users"));
    for(let i=0;i<users.length;i++){
        if(users[i].contact===user.contact && users[i].password===user.password){
            saveLocally(i,"activeUser"); 
            return true;
        } 
    }
    return false;
    
}