import{ getSavedLocally,saveLocally } from './utils'

export const addUser=user=>{
    let users=JSON.parse(getSavedLocally("users"))
    users?users.push(user):users=new Array(user);
    saveLocally(JSON.stringify(users),"users"); 
    localStorage.setItem("activeUser",users.length-1);
    localStorage.setItem("logUser",JSON.stringify(user));
}

export const activeUser=()=>parseInt(getSavedLocally("activeUser"));

export const userExists=user=>{
    const users=JSON.parse(getSavedLocally("users"));
    if(users){
    for(let i=0;i<users.length;i++){
        if(users[i].contact===user.contact && users[i].password===user.password){
            localStorage.setItem("activeUser",i)
            localStorage.setItem("logUser",JSON.stringify(users[i]));
            return true;
        } 
    }}
    return false;
    
}