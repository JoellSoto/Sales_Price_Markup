import Styles from '../Styles/form.module.scss'
import IconButton from '@mui/material/IconButton';
import NavigateNext from '@mui/icons-material/NavigateNext';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import FixedCosts from '../Components/FixedCost.Component';
import VariableCosts from '../Components/VariableCost.Component';
import Percentage from '../Components/Percentage.Component';
import { useState } from 'react';


export default function Add(){
    const [pageIndex,setPageIndex]=useState(0);
    const FIXEDPAGE=<FixedCosts/>;
    const VARIABLEPAGE=<VariableCosts/>;
    const PercentagePage=<Percentage/>
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