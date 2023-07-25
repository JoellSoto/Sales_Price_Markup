
export const handlePercentageChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    value=Math.min(Math.max(parseFloat(value), 0), 100)
    updatedCosts[index] = value || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  };

 export  const handleChange = (index, value,setCosts,costs,setTotalCost) => {
    const updatedCosts = [...costs];
    updatedCosts[index] = parseFloat(value) || 0;
    setCosts(updatedCosts);
    setTotalCost(updatedCosts.reduce((acc, curr) => acc + curr, 0));
  }

