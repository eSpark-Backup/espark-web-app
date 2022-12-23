import React from 'react'
import ServiceStyleFive from '../../components/Sections/Service/serviceStyleFive'
import Title from '../../components/title/title'
import { shapes } from '../../helper/ImageUrl'
import { services } from '../../helper/services'
import style from './style.module.css'

const Services = ({ link }) => {
  return (
    <div className={style.textCenter}>
      <>
        <Title
          title={'WE HELP BRANDS AND MAKE NEW FANS'}
          data={shapes}
          paragraph={
            'We provide the exceptional service we’d want to experience ourselves <br/> <strong>Let’s make something awesome together.</strong>'
          }
        />
        <ServiceStyleFive
          data={link !== '/' ? services : services.slice(0, 6)}
          link={link}
        />{' '}
      </>
    </div>
  )
}

export default Services
