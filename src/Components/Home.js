import React from 'react'
import Parallax from './Parallax'
import Content from './Content'

export default function Home() {
  return (
    <>
        <Parallax />
        <div className='container'>
            <Content/>
        </div>
    </>
  )
}
