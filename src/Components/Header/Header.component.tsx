import ImageExample from '../../Assets/Grey_full.png';
import { SimpleData } from '../../Interfaces';
import { FilterProperty } from '../../Common/';
import { HeaderInfo } from '../../Utils/Data/Header';
import './style.css'

export function HeaderComponent(): JSX.Element {

    let headerInfo: SimpleData = HeaderInfo;

    return (
        <div className="container-header grid grid-cols-2">
            <div className="flex self-center flex-col">
                <h1 className="text-pursianBlue font-lato font-bold w-4/5 block mx-auto">
                    {headerInfo.text}
                </h1>
            </div>
            <div className='img-header-container py-4'>
                <img id='img-header' src={ImageExample} alt="Header img" />
                <img id='logo-header-back' src={ImageExample} alt="Header img" />
            </div>
            <div className='relative top-0 left-0'>
                <div className='filter-container'>
                    <FilterProperty />
                </div>
            </div>

        </div>
    );
}