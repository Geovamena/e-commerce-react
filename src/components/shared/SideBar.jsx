import React from 'react'
import '../../styles/SideBar.css'
import Filter from '../SideBar/Filter'
const SideBar = ({sideBarHidden, setSearch, filter, setFilter}) => {

  return (
    <section className={`side__bar ${sideBarHidden ? 'hidden__sidebar' : '' }`} >
      <Filter setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}/>
    </section>
  )
}

export default SideBar