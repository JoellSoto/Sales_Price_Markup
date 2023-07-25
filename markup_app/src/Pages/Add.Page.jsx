import Styles from '../Styles/form.module.scss'
import IconButton from '@mui/material/IconButton';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import FixedCosts from '../Components/FixedCost.Component';
import VariableCosts from '../Components/VariableCost.Component';
import Percentage from '../Components/Percentage.Component';
import { useState } from 'react';


export default function Add({input,setProduts,produts}){
  const FIXED={
    'FixedCost':input.fc,
    'setFixedCosts':input.sfc,
    'totalFixedCost':input.tfc,
    'setTotalFixedCost':input.stfc      
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

    'FixedCost':input.fc,
    'totalFixedCost':input.tfc,
    'VariableCost':input.vc,
    'totalVariableCost':input.tvc,
    'setProduts':setProduts,
    'produts':produts
  }


  const [pageIndex,setPageIndex]=useState(0);
  const FIXEDPAGE=<FixedCosts Fixed={FIXED}/>;
  const VARIABLEPAGE=<VariableCosts Variable={VARIABLE}/>;
  const PercentagePage=<Percentage Percentagem={PERCENTAGE}/>

    const pages=[FIXEDPAGE,VARIABLEPAGE,PercentagePage];
    

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