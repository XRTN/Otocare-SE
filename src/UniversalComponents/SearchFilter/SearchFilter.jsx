import React from 'react'
import './SearchFilter.css'

function SearchFilter() {
  return (
    <>
    <div className="searchBar-container">
        <input
        className='searchBar'
        type='text'
        placeholder='Search...'
        
        ></input>
    </div>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    SERVICES
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">OILS & WHEELS</a></li>
    <li><a class="dropdown-item" href="#">WHEELS</a></li>
    <li><a class="dropdown-item" href="#">ELECTRICALS</a></li>
  </ul>
</div>
    </>
  )
}

export default SearchFilter