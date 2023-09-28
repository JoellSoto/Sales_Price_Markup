import IconButton from '@mui/material/IconButton';
import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Styles from '../Styles/pages.module.scss';
import { Typography } from '@mui/material';
import {activeUser} from '../utils/ProfileActions';
import {deleteItem} from '../utils/InputsFunctions';
    const PriceList=({input,setProduts,produts})=>{
      
       const [iconColor, setIconColor] = useState('white');
       const handleDeleteClick = async(idx) => {
        setIconColor('grey'); 
        await deleteItem(produts,setProduts,idx);  
        const data=localStorage.getItem("Products"); 
        setProduts(JSON.parse(data));   
      };

       const handleSelect=async(product,index)=>{
        product.id=index;
       }
    return (
        <div className={Styles.totalPricesContainer}>
          yooooooo
          <span>
            {produts.map((item,idx)=>{
              
                <div className={Styles.priceContainerMobile} key={idx+Math.random()} onClick={()=>handleSelect(item,idx)}>
                <span className={Styles.pricesTools}>
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
              <IconButton onClick={()=>handleDeleteClick(idx)}>
                <DeleteIcon style={{ color: iconColor }} className={Styles.deleteButton}/>
              </IconButton>
             
             </span>  
            </div> 
             
             
    
             })}
             </span>
        </div>)
    
}

export default PriceList;