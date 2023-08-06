
export const fixedCostPerProduct=(fixedTotalCost,quantity)=>{
        return parseFloat((fixedTotalCost/quantity).toFixed(2));
}
export const unityCost=(fixedCostPerProduct,totalVariable)=>{
    return parseFloat((fixedCostPerProduct+totalVariable).toFixed(2));
}

export const recomendedPrice=(unityCost,one_totalPercentage)=>{
    return parseFloat((unityCost/one_totalPercentage).toFixed(2));
}

export const saveLocally=(json,itemName)=>localStorage.setItem(itemName,json);

export const getSavedLocally=(itemName)=> localStorage.getItem(itemName); 