import React from 'react'
import { useState } from 'react'
import Title from '../../components/title/title'
import style from './style.module.css'

function Faqs({imgs, data}) {
  const [faqId,setFaqId] = useState(0)
  return (
    <>
     <Title title={"FAQS"} />
      <div class="faq-area pb-5">
            <div class="container">
                <div class="faq-accordion">
                    <div data-accordion-component="Accordion" class="accordion">
                        <div data-accordion-component="AccordionItem" class="accordion__item">
                            {data.map((item,index) =><> <div key={index}  data-accordion-component="AccordionItemHeading" role="heading"
                                    class="accordion__heading" aria-level="3">   
                                    <div class="accordion__button" id="accordion__heading-a" aria-disabled="false"
                                        aria-expanded="true" aria-controls="accordion__panel-a" role="button" tabindex="0"
                                        data-accordion-component="AccordionItemButton" onClick={()=>{setFaqId(item._id)}} ><span>{item.question}</span></div>
                                </div>
                             {item._id == faqId  && <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region"
                                    aria-labelledby="accordion__heading-a" id="accordion__panel-a">
                                    <p>{item.answer}</p>
                                </div>}</>)}  
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
)
}

export default Faqs