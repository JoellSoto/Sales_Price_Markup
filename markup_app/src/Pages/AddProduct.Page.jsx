import Styles from '../Styles/form.module.scss'
import IconButton from '@mui/material/IconButton';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import VariableCosts from '../Components/VariableCost.Component';
import Percentage from '../Components/Percentage.Component';
import Meta from '../Components/MetaData.Component';
import { useState } from 'react';


export default function Add({input,setProduts,produts,id,closeModal}){

  const METADATA={
    'metadata':input.metadata,
    'setMetada':input.setMetada
  }
 
  const VARIABLE={
    'setVariableCosts':input.svc,
    'VariableCost':input.vc,
    'totalVariableCost':input.tvc,
    'setTotalVariableCost':input.stvc
  }

  const PERCENTAGE={
    'percentages':input.pc,
    'setPercentages':input.sp,
    'setTotalPercentages':input.stp,
    'totalPercentages':input.tpc,
    'metaData':input.metadata,
    'FixedCost':input.fc,
    'totalFixedCost':input.tfc,
    'VariableCost':input.vc,
    'setTotalFixedCost':input.setTotalFixedCost,
    'setFixedCosts':input.setFixedCosts,
    'totalVariableCost':input.tvc,
    'setProduts':setProduts,
    'produts':produts,
    'id':id,
    'closeModal':closeModal
  }


  const [pageIndex,setPageIndex]=useState(0);
  const METADATAPAGE=<Meta Metadata={METADATA}/>
  const VARIABLEPAGE=<VariableCosts Variable={VARIABLE}/>;
  const PERCENTAGEPAGE=<Percentage Percentagem={PERCENTAGE}/>
  const pages=[METADATAPAGE,VARIABLEPAGE,PERCENTAGEPAGE];
    

  const handlePrevious = () => {
    setPageIndex(pageIndex===0? pageIndex:pageIndex- 1)
  };
    
  const handleNext = () => {
    setPageIndex(pageIndex===pages.length-1? pageIndex:pageIndex + 1)
  };

  return(
  <div className={Styles.inputContainer}>
      {pages[pageIndex]}
      <div className={Styles.prevNexbuttons}>    
        <IconButton onClick={handlePrevious}>
          <NavigateBefore /> <span className={Styles.textVisibleSize}>Anterior</span>
        </IconButton>
        <IconButton onClick={handleNext}>
          <span className={Styles.textVisibleSize}>Proximo</span><NavigateNext />
        </IconButton>
      </div>      
    </div>
    )
}