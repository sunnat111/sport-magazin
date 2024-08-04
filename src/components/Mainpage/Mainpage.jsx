import React from 'react'
import s from '../Mainpage/Mainpage.module.scss'
import Slider from '../Slider/Slider'
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10} from '../../utils/imgExport'

const Mainpage = () => {
  return (
    <div className={s.main}>
        <div className="container">
            <Slider/>
            <div className={s.main__sponsor}>
                <img className={s.main__sponsor_image} src={image1} alt="" />
                <img className={s.main__sponsor_image} src={image2} alt="" />
                <img className={s.main__sponsor_image} src={image3} alt="" />
                <img className={s.main__sponsor_image} src={image4} alt="" />
                <img className={s.main__sponsor_image} src={image5} alt="" />
                <img className={s.main__sponsor_image} src={image6} alt="" />
                <img className={s.main__sponsor_image} src={image7} alt="" />
                <img className={s.main__sponsor_image} src={image8} alt="" />
                <img className={s.main__sponsor_image} src={image9} alt="" />
                <img className={s.main__sponsor_image} src={image10} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mainpage