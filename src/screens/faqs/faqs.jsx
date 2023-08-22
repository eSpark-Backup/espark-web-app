import React from "react";
import { useState } from "react";
import Title from "../../components/title/title";
import style from "./style.module.css";

function Faqs({ imgs, data }) {
  const [faqId, setFaqId] = useState(0);
  const [faq, setFaq] = useState(false);
  return (
    <>
      <Title
        title={"FAQs"}
        paragraph="<p> We’ve amassed a large number of frequently asked questions (FAQs) by our clients.
        We hope this will be helpful for you to comprehend the most critical aspects of our effective project.</p>"
      />
      <div className="faq-area pb-5">
        <div className="container">
          <div className="faq-accordion">
            <div data-accordion-component="Accordion" className="accordion">
              <div
                data-accordion-component="AccordionItem"
                className="accordion__item"
              >
                {data.map((item, index) => (
                  <>
                    {" "}
                    <div
                      key={index}
                      data-accordion-component="AccordionItemHeading"
                      role="heading"
                      className="accordion__heading"
                      aria-level="3"
                    >
                      <div
                        className="accordion__button"
                        id="accordion__heading-a"
                        aria-disabled="false"
                        aria-expanded="true"
                        aria-controls="accordion__panel-a"
                        role="button"
                        tabindex="0"
                        data-accordion-component="AccordionItemButton"
                        onClick={() => {
                          setFaq(!faq);
                          setFaqId(item._id)
                        }}
                      >
                        <span>{item.question}</span>
                      </div>
                    </div>
                    {item._id == faqId && faq && (
                      <div
                        data-accordion-component="AccordionItemPanel"
                        className="accordion__panel"
                        role="region"
                        aria-labelledby="accordion__heading-a"
                        id="accordion__panel-a"
                      >
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
