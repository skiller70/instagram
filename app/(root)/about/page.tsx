"use client"
import Product from '@/components/shared/Product'
import React, { useState } from 'react'

interface stateType  {
  name:string,
  age:number
}





const about = () => {

const [num,setNum] = useState <stateType>({name:"ssss",age:22})


  return (

    <Product data="ttttt"/>
  )
}

export default about