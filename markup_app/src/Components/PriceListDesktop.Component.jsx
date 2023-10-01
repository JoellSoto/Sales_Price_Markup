import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Styles from '../Styles/pages.module.scss';
import { deleteItem } from '../utils/InputsFunctions';
import { useNavigate } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { style } from '@mui/system';


function createData(name, productionCost, price,FixedCostPerProduct,costs) {
  return {
    name,
    productionCost,
    price,
    FixedCostPerProduct,
    custos: costs
  };
}
let rows=[]
const makeRows=(produtos)=>{

  produtos.forEach((produto,index)=>{
    //console.log( createData(produto.nome,produto.unityCost,produto.recomendedPrice,produto.fixedCostPerProduct,produto.custos)  )
    rows[index]=createData(produto.nome,produto.unityCost,produto.recomendedPrice,produto.fixedCostPerProduct,produto.custos)  
  })
}

const handleDeleteClick = async(idx,produts,setProduts) => {
  await deleteItem(produts,setProduts,idx);  
  const data=localStorage.getItem("Products"); 
  setProduts(JSON.parse(data));   
};

const handleSelect=async(product,index,input,setPos,isModalOpen,setProduct)=>{
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

function Row(props) {
  const { row,produts,setProduts,index,input,setPos,isModalOpen,setProduct } = props;
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate()
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.FixedCostPerProduct} Mts</TableCell>
        <TableCell align="center">{row.productionCost} Mts</TableCell>
        <TableCell align="center">{row.price} Mts</TableCell>
        <TableCell  align="center"> 
          <EditIcon style={{cursor:'pointer'}}  onClick={()=>handleSelect(produts[index],index,input,setPos,isModalOpen,setProduct)}/>
          <DeleteIcon style={{cursor:'pointer'}} className={Styles.deleteButton} onClick={()=>{handleDeleteClick(index,produts,setProduts);window.location.reload()}}/>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Dados de Entrada
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={Styles.menuHeader}>
                    <TableCell sx={{color:'white'}} align="center">Agrafo</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Algodao</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Cartão</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Cola</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Esponja</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Linha</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Madeira</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Pano Cru</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Parafuso</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Tecido</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Transporte</TableCell>
                    <TableCell sx={{color:'white'}} align="center">IVA</TableCell>
                    <TableCell sx={{color:'white'}} align="center">Lucro</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.custos.map((custosRow) => (
                    <TableRow key={custosRow.agrafo}>
                      <TableCell align="center">
                        {custosRow.agrafo} Mts
                      </TableCell>
                      <TableCell align="center">
                        {custosRow.algodao} Mts
                      </TableCell>
                      <TableCell align="center">{custosRow.cartao} Mts</TableCell>
                      <TableCell align="center">{custosRow.cola} Mts</TableCell>
                      <TableCell align="center">{custosRow.esponja} Mts</TableCell>
                      <TableCell align="center">{custosRow.linha} Mts</TableCell>
                      <TableCell align="center">{custosRow.madeira} Mts</TableCell>
                      <TableCell align="center">{custosRow.pano_cru} Mts</TableCell>
                      <TableCell align="center">{custosRow.parafuso} Mts</TableCell>
                      <TableCell align="center">{custosRow.tecido} Mts</TableCell>
                      <TableCell align="center">{custosRow.transporte} Mts</TableCell>
                      <TableCell align="center">{custosRow.iva} %</TableCell>
                      <TableCell align="center">{custosRow.lucro} %</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
   
    custos: PropTypes.arrayOf(
      PropTypes.shape({
        cartao: PropTypes.number.isRequired,
        cola: PropTypes.number.isRequired,
        esponja: PropTypes.number.isRequired,
        iva: PropTypes.number.isRequired,
        linha: PropTypes.number.isRequired,
        lucro: PropTypes.number.isRequired,
        madeira: PropTypes.number.isRequired,
        pano_cru: PropTypes.number.isRequired,
        parafuso: PropTypes.number.isRequired,
        reserva: PropTypes.number.isRequired,
        tecido: PropTypes.number.isRequired,
        transporte: PropTypes.number.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    productionCost: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};




export default function CollapsibleTable({input,setProduts,produts,isModalOpen,setPos,setProduct}) {
  makeRows(produts);

  return (
    <div className={Styles.priceContainerDesktop}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={Styles.menuHeader}>
           <TableCell/>
            <TableCell sx={{color:'white'}}  align="center">Produto</TableCell>
            <TableCell sx={{color:'white'}} align="center">Custo Fixo por produto</TableCell>
            <TableCell sx={{color:'white'}} align="center">Custo de Produção</TableCell>
            <TableCell sx={{color:'white'}} align="center">Preço de Venda</TableCell>
            <TableCell sx={{color:'white'}} align="center">Acções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} setProduct={setProduct} setPos={setPos} input={input} isModalOpen={isModalOpen} index={index} produts={produts} setProduts={setProduts} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>  
  );
}
