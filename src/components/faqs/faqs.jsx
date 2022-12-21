import React from 'react'

function Faqs({data}) {
  return (
    <>
    <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>FAQ</h2>
                    </div>
                </div>
            </div>
            {data.map(item => <div class={item.className}><img src={item.imgUrl} alt="shape" /></div>
)}
        </div>
        <div class="faq-area">
            <div class="container">
                <div class="faq-accordion">
                    <div data-accordion-component="Accordion" class="accordion">
                        <div data-accordion-component="AccordionItem" class="accordion__item">
                            <div data-accordion-component="AccordionItemHeading" role="heading"
                                class="accordion__heading" aria-level="3">
                                <div class="accordion__button" id="accordion__heading-a" aria-disabled="false"
                                    aria-expanded="true" aria-controls="accordion__panel-a" role="button" tabindex="0"
                                    data-accordion-component="AccordionItemButton"><span>How do permissions work in
                                        Google Play Instant?</span></div>
                            </div>
                            <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region"
                                aria-labelledby="accordion__heading-a" id="accordion__panel-a">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna
                                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore
                                    magna aliqua.</p>
                            </div>
                        </div>
                        <div data-accordion-component="AccordionItem" class="accordion__item">
                            <div data-accordion-component="AccordionItemHeading" role="heading"
                                class="accordion__heading" aria-level="3">
                                <div class="accordion__button" id="accordion__heading-b" aria-disabled="false"
                                    aria-expanded="false" aria-controls="accordion__panel-b" role="button" tabindex="0"
                                    data-accordion-component="AccordionItemButton"><span>Is Smart Lock required for
                                        instant apps?</span></div>
                            </div>
                            <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region"
                                aria-labelledby="accordion__heading-b" id="accordion__panel-b" hidden="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna
                                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore
                                    magna aliqua.</p>
                            </div>
                        </div>
                        <div data-accordion-component="AccordionItem" class="accordion__item">
                            <div data-accordion-component="AccordionItemHeading" role="heading"
                                class="accordion__heading" aria-level="3">
                                <div class="accordion__button" id="accordion__heading-c" aria-disabled="false"
                                    aria-expanded="false" aria-controls="accordion__panel-c" role="button" tabindex="0"
                                    data-accordion-component="AccordionItemButton"><span>Can I have multiple activities
                                        in a single feature?</span></div>
                            </div>
                            <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region"
                                aria-labelledby="accordion__heading-c" id="accordion__panel-c" hidden="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna
                                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore
                                    magna aliqua.</p>
                            </div>
                        </div>
                        <div data-accordion-component="AccordionItem" class="accordion__item">
                            <div data-accordion-component="AccordionItemHeading" role="heading"
                                class="accordion__heading" aria-level="3">
                                <div class="accordion__button" id="accordion__heading-d" aria-disabled="false"
                                    aria-expanded="false" aria-controls="accordion__panel-d" role="button" tabindex="0"
                                    data-accordion-component="AccordionItemButton"><span>Can I share resources between
                                        features?</span></div>
                            </div>
                            <div data-accordion-component="AccordionItemPanel" class="accordion__panel" role="region"
                                aria-labelledby="accordion__heading-d" id="accordion__panel-d" hidden="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna
                                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore
                                    magna aliqua.</p>
                            </div>
                        </div>
                
                    </div>
                </div>
      
            </div>
        </div>
        
    </>
)
}

export default Faqs