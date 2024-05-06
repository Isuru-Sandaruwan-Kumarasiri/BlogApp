import React from 'react'
import Styles from "./cardList.module.css"
import Pagination from '../paginations/Pagination'

function CardList() {
  return (
    <div className={Styles.container}>CardList

      <Pagination/>

    </div>
  )
}

export default CardList