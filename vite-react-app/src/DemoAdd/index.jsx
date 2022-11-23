
import React from 'react'
import { increment, decrement } from '../store/counterSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd'

const DemoAdd = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Button onClick={() => dispatch(increment())} >+</Button>
      {count}
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </>
  )
}

export default DemoAdd