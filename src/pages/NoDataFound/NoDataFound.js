import React from 'react'
import { Link } from 'react-router-dom'

function NoDataFound() {
  return (
    <section className='error-page section'>
        <div className='error-container'>
            <h1>Oopss!! The page not Found!!!</h1>
            <Link to='/' className='btn-primary' >Back to Home</Link>
        </div>
    </section>
  )
}

export default NoDataFound
