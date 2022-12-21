import React from 'react'
import { partner } from '../../helper/ImageUrl'
import Partners from '../partners/partners'
import ReadyToTalk from '../ready-to-talk/readyToTalk'

export default function PartnerAbout() {
  return (
    <div style={{marginTop:"25px"}}>
     <ReadyToTalk
        h3="Ready to talk?"
        p1="Our team is here to answer your question about StartP"
        btn="Contact Us"
        href="index"
        getStated="Or, get started now with a free trial"
      />
      <Partners
        h5="More that 1.5 million businesses and organizations use StartP"
        data={partner}
      />
    </div>
  )
}
