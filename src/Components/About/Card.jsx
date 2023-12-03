import style from "./style.module.css"
import Image from "next/image"

const Card = ({title, description, img}) => {
 
    let backImage = {        
        backgroundImage: 'url(' + img + ')'
    }
    // style={backImage}

    return(
        <div className={style.card} >
            <div className={`${style.face} ${style.front}`} style={backImage}>
                <h1>{title}</h1>
                <Image src={img} width='500' height='500' alt="image-show"/>

            </div>
            <div className={`${style.face} ${style.back}`}>
                <h1>{title}</h1>
                <p className="text">{description}</p>
            </div>
        </div>
    )
   
}

export default Card;