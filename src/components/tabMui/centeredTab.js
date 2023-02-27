import React from 'react'
import tabs from '../../helper/tabs'
import styles from './style.module.css'

function CenteredTabs({cardHandler,tabSelect}) {

  return (
    <div className='d-flex justify-content-between'>
        {tabs.map(item => <div className= {tabSelect == item.select ? `${styles.selectedTab}` :`${styles.cursorType}`} onClick ={()=>{cardHandler(item.select,item.cardData)}} >
            <h3 className= {tabSelect == item.select ? `${styles.txtColorTab}` :`${styles.txtColorTabs}`} >{item.title}<br/>{item.select == 3 ? "Elementor Development":"Development"}</h3>
        </div>)}
    </div>
  )
}

export default CenteredTabs