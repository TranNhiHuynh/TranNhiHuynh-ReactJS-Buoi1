import React from 'react'
import Banner from './Banner'
import Item from './Item'

const Body = () => {
  return (
    <div>
        <Banner/>
        <div className='row mt-5'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

        </div>
    </div>
  )
}

export default Body