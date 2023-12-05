import style from "./style.module.css"
import Image from "next/image"

const Card = ({title, description, img}) => {
 
    let backImage = {        
        backgroundImage: 'url(' + img + ')'
    }
    // style={backImage}

    return(
        <div className={style.card} >
                <h2>{title}</h2>
            <div className={`${style.face} ${style.front}`} style={backImage}>
                <Image src={img} width='500' height='400' alt="image-show"/>
            </div>
            <div className={`${style.face} ${style.back}`}>
                {/* <h1>{title}</h1> */}
                <p className="text">{description}</p>
            </div>
        </div>
    )
   
}

export default Card;