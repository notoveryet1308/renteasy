import React, {useState} from 'react';
import './MainImageStyles.scss';
import MiniDes from '../main-house/mini_des';
import ModalPhotos from './ModalPhotos'

function MainImage({ imgSrc, data }) {
    const linear_grad = `linear-gradient(315deg, #292b2cb4 0%, #22272eb7 74%)`;
    const [openPhotos, setPhotos] = useState(false);
    const handleModel = ()=>{
        setPhotos(!openPhotos)
    }
    return (
        <div className='main-image-box'>
            <div 
                className="main-image" 
                style={{ backgroundImage: `${linear_grad}, url(${imgSrc})` }}>
                {/* <img src={imgSrc} alt={imgSrc} /> */}
            </div>
            <div className="view-photos" onClick={handleModel}>
                <span className='view-photos-text'>View Photos</span>
            </div>
            <div className="image-info-box">
                <MiniDes {...data} mobileView={true}/>
            </div>
            {openPhotos && <ModalPhotos setModal= {handleModel}/>}
        </div>
    )
}

export default MainImage
