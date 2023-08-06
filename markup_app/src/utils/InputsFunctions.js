import {fixedCostPerProduct,unityCost,recomendedPrice} from './utils'

export const handlePercentageChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    value=Math.min(Math.max(parseFloat(value), 0), 100)
    updatedCosts[index] = value || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };

 export  const handleChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = parseFloat(value) || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  }
  export  const handleChangeString = (index, value,setCosts,costs) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = value|| '';
    setCosts(updatedCosts);
    
    
  }

  export  const  addProduct = async (FixedCost,
    totalFixedCost,VariableCost,totalVariableCost,percentages,totalPercentages,setProduts,produts,metaData)=>{
    
      //Meta data
    const nome=metaData[0];
    const quantidade=parseFloat(metaData[1]);
   
    //Fixed values 
    const agua=FixedCost[0];
    const luz=FixedCost[1];
    const taxas=FixedCost[2];
    const manuntacao=FixedCost[3];
    const totalFixed=totalFixedCost;
    
    //Variables values
    const  agua1= await VariableCost[0];
    const luz1=await VariableCost[1];
    const taxas1=await VariableCost[2];
    const manuntacao1=await VariableCost[3];
    const totalVariable=await totalVariableCost;

    //Percentages Values
    const lucro=percentages[0];
    const cartao=percentages[1];
    const iva=percentages[2];
    const reserva=percentages[3]; 
    const totalPercentage=totalPercentages; 

    //Recomended price calculation
    const FixedCostPerProduct=fixedCostPerProduct(totalFixed,quantidade);
    const UnityCost=unityCost(FixedCostPerProduct,totalVariable);
    const RecomendedPrice=recomendedPrice(UnityCost,(1-(totalPercentage/100)))
    
    //produto a ser adicionado
    const Produto={
        nome:nome,
        quantidade:quantidade,  

        agua:agua,
        luz:luz,
        taxas:taxas,
        manuntacao:manuntacao,
        totalFixedCost:totalFixed,

        agua1:agua1,
        luz1:luz1,
        taxas1:taxas1,
        manuntacao1:manuntacao1,
        totalVariableCost:totalVariable,

        lucro:lucro,
        cartao:cartao,
        iva:iva,
        reserva:reserva,
        totalPercentage:totalPercentage,

        fixedCostPerProduct:FixedCostPerProduct,
        unityCost:UnityCost,
        recomendedPrice:RecomendedPrice
    }  
   

     let ar=produts;
     ar.push(Produto);
     await setProduts(ar);
  }

