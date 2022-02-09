import logo from '../../Assets/Logo.png';

import './style.css';

export function NavBarComponent(): JSX.Element {
    return (
        <div className="grid w-full justify-between px-4 header-container">
            <div className="space-y-2 my-2 py-4 px-8 cursor-pointer">
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
            <div className="py-4">
                <img className='mx-auto' src={logo} alt="Logo" width="250" />
            </div>
            <div className="py-4 px-8 text-right">
                <button className="btn-header bg-greenCyan hover:bg-greenCyanHover text-white font-lato">
                    Ingresar
                </button>
            </div>
        </div>
    );
}