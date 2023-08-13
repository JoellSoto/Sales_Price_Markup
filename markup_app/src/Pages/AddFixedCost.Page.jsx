import Styles from '../Styles/form.module.scss';
import FixedCosts from '../Components/FixedCost.Component';



export default function Add({Fixed}){
  const FIXEDPAGE=<FixedCosts Fixed={Fixed}/>
  const pages=[FIXEDPAGE];

    
  return(
    <div className={Styles.inputContainer}>  
      {pages[0]}
      
    </div>
  )
}