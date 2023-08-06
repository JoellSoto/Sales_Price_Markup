
import Styles from '../Styles/pages.module.scss';
import { Typography } from '@mui/material';

const PriceList=({Produts})=>{
     
    return (
        <div className={Styles.totalPricesContainer}>
            {Produts.map((item)=>
                <div className={Styles.priceContainer} >
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