
import Styles from '../Styles/pages.module.scss';
import { Typography } from '@mui/material';
const PriceList=({input,setProduts,produts})=>{

       const handleSelect=async(product,index)=>{
        product.id=index;
        console.log(product);
        //input.svc([product.agua,])

       }
    return (
        <div className={Styles.totalPricesContainer}>
            {produts.map((item,idx)=>
                <div className={Styles.priceContainer} key={idx} onClick={()=>handleSelect(item,idx)}>
                  <span className={Styles.prices}>
                <Typography
                
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:600,
                  fontSize:16
                }}
              >
               Produto
              </Typography>
              <Typography
               
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:600,
                  fontSize:16,
                  marginLeft:1
                }}
              >
               Custo
              </Typography>
           
              <Typography
              
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:600,
                  fontSize:16
                }}
              >
               Preço 
              </Typography>
              
              <Typography
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:500,
                  fontSize:13,
                  
                }}
              >
                {item.nome}
              </Typography>
              <Typography
                className={Styles.pricesElement}
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:500,
                  fontSize:13,
                  whiteSpace: 'nowrap'

                }}
              >
              {parseInt(item.unityCost)+" Mts"} 
              </Typography>
        
              <Typography
                className={Styles.pricesElementt}
                sx={{
                  fontFamily: 'Verdana, Geneva, sans-serif',
                  fontWeight:500,
                  fontSize:13,
                  whiteSpace: 'nowrap'
        
                }}
              >
               {parseInt(item.recomendedPrice)} Mts
              </Typography>
             
             </span> 
            </div> 
             
              
    
             )}
        </div>)
    
}

export default PriceList;