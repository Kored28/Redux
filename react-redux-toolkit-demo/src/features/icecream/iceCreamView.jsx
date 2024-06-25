import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
import { useState } from 'react'

const IceCreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecreams )
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams} </h2>
        <button onClick={() => {
        dispatch(ordered())
        window.alert('Your ice cream has been ordered')
        }}>
          Order ice cream
        </button>
        <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
        <button onClick={() => {
        dispatch(restocked(value))
        window.alert(`${value} ice cream has been added`)
        }}
        >
          Restock ice cream
        </button>
    </div>
  )
}

export default IceCreamView