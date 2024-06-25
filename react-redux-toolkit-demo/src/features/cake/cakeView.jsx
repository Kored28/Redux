import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import { useState } from 'react'

const CakeView = () => {
  const [value, setValue] = useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes )
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => {
        dispatch(ordered())
        window.alert('Your cake has been ordered')
      }}>
        Order cake
      </button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
      <button onClick={() => {
        dispatch(restocked(value))
        window.alert(`${value} cake has been added`)
      }}>
        Restock cake
      </button>
    </div>
  )
}

export default CakeView