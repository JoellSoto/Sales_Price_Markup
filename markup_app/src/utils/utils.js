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

