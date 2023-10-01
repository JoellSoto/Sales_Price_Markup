import IconButton from '@mui/material/IconButton';
import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Styles from '../Styles/mobile.module.scss'
import { Typography } from '@mui/material';
import {activeUser} from '../utils/ProfileActions';
import {deleteItem} from '../utils/InputsFunctions';
import AddProduct from '../Pages/AddProduct.Page'
import View from './ViewModal.Component';
import Modal from './modal.Component';

    const PriceList=({input,setProduts,produts,isModalOpen,setPos,setProduct})=>{   
       const [iconColor, setIconColor] = useState('white');
       const handleDeleteClick = async(idx) => {
        setIconColor('grey'); 
        await deleteItem(produts,setProduts,idx);  
        const data=localStorage.getItem("Products"); 
        setProduts(JSON.parse(data));   
      };
       const handleSelect=async(product,index)=>{
        input.svc([parseFloat(product.custos[0].transporte),parseFloat(product.custos[0].tecido),parseFloat(product.custos[0].madeira),parseFloat(product.custos[0].esponja),
        parseFloat(product.custos[0].cola),parseFloat(product.custos[0].pano_cru),parseFloat(product.custos[0].algodao),parseFloat(product.custos[0].agrafo),parseFloat(product.custos[0].parafuso),parseFloat(product.custos[0].linha)]);
        input.setMetada([product.nome]);
        input.stvc(parseFloat(product.custos[0].totalVariableCost))
        input.sp([parseFloat(product.custos[0].lucro),parseFloat(product.custos[0].cartao),parseFloat(product.custos[0].iva),parseFloat(product.custos[0].reserva)])
        input.stp(parseFloat(product.custos[0].totalPercentage))
        setProduct(product);
        setPos(index);
        isModalOpen(true);
       }
    return (<div className={Styles.totalPricesContainer}>
    <span>
      {produts.map((item,idx)=>{
        if(parseInt(item.user) ===activeUser()){
          return(
            <div className={Styles.priceContainer} key={idx} onClick={()=>handleSelect(item,idx)}>
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
        
       )}})} 
       </span>
  </div>)
    
}

export default PriceList;