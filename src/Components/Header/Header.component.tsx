import ImageExample from '../../Assets/Grey_full.png';
import { SimpleData } from '../../Interfaces';
import { HeaderFilterProperty } from '../../Common/';
import { HeaderInfo } from '../../Utils/Data/Header';
import './style.css'

export function HeaderComponent(): JSX.Element {

    let headerInfo: SimpleData = HeaderInfo;

    return (
        <>
            <div className="container-header grid grid-cols-2">
                <div className="flex self-center flex-col">
                    <h1 className="text-pursianBlue font-lato block text-class">
                        {headerInfo.text}
                    </h1>
                </div>
                <div className='img-header-container self-center'>
                    <img id='img-header' src={ImageExample} alt="Header img" />
                    <img id='logo-header-back' src={ImageExample} alt="Header img" />
                </div>
            </div>

            <div className='relative top-0 left-0'>
                <div className='filter-container'>
                    <HeaderFilterProperty />
                </div>
            </div>
        </>
    );
}