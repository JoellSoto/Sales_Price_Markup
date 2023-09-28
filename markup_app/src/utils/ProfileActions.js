import{ getSavedLocally,saveLocally } from './utils'

export const addUser=user=>{
    let users=JSON.parse(getSavedLocally("users"))
    users.length>1?users=[...users,user]:users=[users,user];
    saveLocally(JSON.stringify(users),"users"); 
    localStorage.setItem("activeUser",users.length-1)
}

export const activeUser=()=>parseInt(getSavedLocally("activeUser"));

 

export const userExist=user=>{
    const users=JSON.parse(getSavedLocally("users"));
    for(let i=0;i<users.length;i++){
        if(users[i].contact===user.contact && users[i].password===user.password){
            localStorage.setItem("activeUser",i)
            return true;
        } 
    }
    return false;
    
}