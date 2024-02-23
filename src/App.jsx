import { useState, useCallback, useMemo } from "react";
import Title from './component/Title'
import ShowCount from './component/ShowCount'
import Button from './component/Button'
function App() {
  
  const [countOne, setCountOne] = useState(0)
  const [countFive, setCountFive] = useState(0)

  const IncrementByOne = useCallback(() =>{
    setCountOne((prevState) => prevState + 1 )
  },[])
  const IncrementByFive = useCallback(() =>{
    setCountFive((prevState) => prevState + 5 )
  },[])

  const isEvenOdd = useMemo(() =>{
    let i = 0
    while(i < 100000000) i+= 1 // use memo usae kore onk boro kono process running thakle onno jaygay effect korbe na
    return countOne % 2 === 0
  }, [countOne])


  return (
    <>
      <Title />
      <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
      <hr />
      <ShowCount count={countOne} title="Counter by 1" />
      <Button HandleClick={IncrementByOne}> Icrement By One </Button>
      <hr />
      <ShowCount count={countFive} title="Counter by 5" />
      <Button HandleClick={IncrementByFive}> Icrement By Five </Button>
    </>
  );
}

export default App;
