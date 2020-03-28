import React, { useState } from 'react';
import './ModalPhotosStyles.scss'
import int_1 from '../../images/house_inside/int_1.jpg';
import int_2 from '../../images/house_inside/int_2.jpg';
import int_3 from '../../images/house_inside/int_3.jpg';
function ModalPhotos({setModal}) {
    const images = [int_1, int_2, int_3];
    const [position, setPosition] = useState(0);
    const [leftClick, setLeftClick] = useState(0);
    const [rightClick, setRightClick] = useState(0);


    const goLeft = () => {
        if (leftClick === 0) {
            setPosition(100);
            setRightClick(-1)
            setLeftClick(1)
        }
        if (leftClick === -1) {
            setPosition(0)
            setRightClick(0)
            setLeftClick(0)
        }
    }
    const goRight = () => {
        if (rightClick === 0) {
            setPosition(-100);
            setRightClick((rightClick + 1));
            setLeftClick(-1)
        }
        if(rightClick === -1){
            setPosition(0)
            setRightClick((rightClick + 1));
            setLeftClick()
        }
        

    }
    return (
        <div className='modal-photos'>
            <div className="modal-back-btn-box" onClick={()=> setModal()}>
            <i className="fas fa-times"></i>
            </div>
            <div className="modal-view-photo-box">
                <div className="view-photos-box">
                    {images.map((i, p) => <div 
                    key={p}
                    className="photo-box"
                        style={{ transform: `translateX(${position}%)` }}>
                        <img src={i} alt='Interior-img' />
                    </div>)}
                </div>
                <div className="modal-btn-box">

                    <i className={`fas fa-chevron-left ${leftClick >= 1 && 'right-click'}`}
                        onClick={goLeft}>
                    </i>


                    <i className={`fas fa-chevron-right ${rightClick >= 1 && 'right-click'}`}
                        onClick={goRight}>
                    </i>

                </div>
            </div>
        </div>
    )
}

export default ModalPhotos;
