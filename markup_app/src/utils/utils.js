export const fixedCostPerProduct=(fixedTotalCost,quantity)=>
    parseFloat((fixedTotalCost/quantity).toFixed(2));

export const unityCost=(fixedCostPerProduct,totalVariable)=>
    parseFloat((fixedCostPerProduct+totalVariable).toFixed(2));

export const recomendedPrice=(unityCost,one_totalPercentage)=>
    parseFloat((unityCost/one_totalPercentage).toFixed(2));

export const saveLocally=(json,itemName)=>localStorage.setItem(itemName,json);

export const getSavedLocally=itemName=> localStorage.getItem(itemName); 

export const resetInputs=input=>{
    input.svc([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    input.sp([0, 0, 0, 0, 0]);
    input.setMetada(['']);
}

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