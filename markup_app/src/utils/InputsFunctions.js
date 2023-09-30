import {fixedCostPerProduct,unityCost,recomendedPrice} from './utils'
import {activeUser} from './ProfileActions'

export const handlePercentageChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    value=Math.min(Math.max(parseFloat(value), 0), 100)
    updatedCosts[index] = value || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };

 export  const handleChangeFixed = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = parseFloat(value) ||0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.slice(0, -2).reduce((acc, curr) => acc + curr, 0));
  }

  export  const handleChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = Number(value) ||0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  }
  export  const handleChangeString = (index, value,setCosts,costs) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = value|| '';
    setCosts(updatedCosts);
    
    
  }

  export  const  handleProduct = async (id,FixedCost,
    totalFixedCost,VariableCost,totalVariableCost,percentages,totalPercentages,setProduts,produts,metaData)=>{
    
      //Meta data
    const nome=metaData[0];
    
   
    //Fixed values 
    const agua_luz=FixedCost[0];
    const salarios=FixedCost[1];
    const aluguer=FixedCost[2];
    const quantidade=FixedCost[3];
    const totalFixed=totalFixedCost;
    
    /*Variables values
    const  transporte=  VariableCost[0];
    const tecido= VariableCost[1];
    const madeira= VariableCost[2];
    const esponja= VariableCost[3];
    const cola = VariableCost[4];
    const pano_cru = VariableCost[5];
    const algodao = VariableCost[6];
    const agrafo = VariableCost[7];
    const prego = VariableCost[8];
    const parafuso = VariableCost[9];
    const linha = VariableCost[10];*/
    const totalVariable= totalVariableCost;

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
    
    //Product to be added
    const Produto={
        nome:nome,
        quantidade:quantidade,  
        agua_luz:agua_luz,
        salarios:salarios,
        aluguer:aluguer,
        totalFixedCost:totalFixed,


        custos:[{transporte: VariableCost[0],
        tecido:VariableCost[1],
        madeira: VariableCost[2],
        esponja: VariableCost[3],
        cola: VariableCost[4],
        pano_cru:VariableCost[5],
        algodao: VariableCost[6],
        agrafo: VariableCost[7],
        parafuso: VariableCost[8],
        linha: VariableCost[9],
        totalVariableCost:totalVariable,

        lucro:lucro,
        cartao:cartao,
        iva:iva,
        reserva:reserva,
        totalPercentage:totalPercentage}],

        fixedCostPerProduct:FixedCostPerProduct,
        unityCost:UnityCost,
        recomendedPrice:RecomendedPrice,
        user:activeUser()
    }  
   

     let ar=produts;
     console.log(ar)
     id!==-1?ar[id]=Produto:ar.push(Produto);
     await setProduts(ar);
     await localStorage.setItem("Products",JSON.stringify(ar));
  }
 export  const deleteItem= async(products,setProduts,id)=>{
    let aux=products;
    setProduts(aux.splice(id,1));
    await localStorage.setItem("Products",JSON.stringify(aux));
 }
  

  

