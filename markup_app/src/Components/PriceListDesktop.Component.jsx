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



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        <TableCell align="center">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.FixedCostPerProduct} Mts</TableCell>
        <TableCell align="center">{row.productionCost} Mts</TableCell>
        <TableCell align="center">{row.price} Mts</TableCell>
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
                  <TableRow>
                    <TableCell align="center">Agrafo</TableCell>
                    <TableCell align="center">Algodao</TableCell>
                    <TableCell align="center">Cartão</TableCell>
                    <TableCell align="center">Cola</TableCell>
                    <TableCell align="center">Esponja</TableCell>
                    <TableCell align="center">Linha</TableCell>
                    <TableCell align="center">Madeira</TableCell>
                    <TableCell align="center">Pano Cru</TableCell>
                    <TableCell align="center">Parafuso</TableCell>
                    <TableCell align="center">Tecido</TableCell>
                    <TableCell align="center">Transporte</TableCell>
                    <TableCell align="center">IVA</TableCell>
                    <TableCell align="center">Lucro</TableCell>

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




export default function CollapsibleTable({produts}) {
  makeRows(produts)
  return (
    <div className={Styles.priceContainerDesktop}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
           <TableCell/>
           <TableCell align="center">Produto</TableCell>
            <TableCell align="center">Custo Fixo por produto</TableCell>
            <TableCell align="center">Custo de Produção</TableCell>
            <TableCell align="center">Preço de Venda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>  
  );
}
