import React from 'react'
import { IArtical } from '../types'

interface IPropTypes{
  articales: IItems;
}

interface IItems{
  items: IArtical[]
}

const Articals = ({articales}: IPropTypes) => {
  return (
    <>
      {articales.items.map((item)=>{
        return(
          <h2 key={item.id}>{item.attributes.Body}</h2>
        )
      })}
    </>
  )
}

export default Articals