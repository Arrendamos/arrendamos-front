// import { useState } from "react";
import logo from "../../Assets/Logo.png";

import "./style.css";

// type modal = {
//   isOpen: any;
//   setIsOpen: any;
// };

export function NavBarComponent(): JSX.Element {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid w-full justify-between px-4 header-container">
      <div></div>
      {/* <MenuLeft isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="burger-menu space-y-2 my-2 py-4 px-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div> */}
      <div className="py-4 m-auto">
        <a href="/">
          <img className="main-logo mx-auto" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="login-button py-4 px-8 text-right">
        {/* <button className="btn-header bg-greenCyan hover:bg-greenCyanHover text-white font-lato">
          Ingresar
        </button> */}
      </div>
    </div>
  );
}

// function MenuLeft(props: modal): JSX.Element {
//   const { isOpen, setIsOpen } = props;

//   return (
//     <div
//       className={`left-modal ${
//         isOpen ? "" : "hidden"
//       } fixed top-0 right-0 left-0 z-50 font-lato`}
//       style={{ marginTop: 0 }}
//     >
//       <div className="relative w-4/5 max-w-md h-full md:h-auto ">
//         <div className="modal-content relative bg-white rounded-lg shadow">
//           <p
//             className="text-2xl px-12 py-4 font-bold cursor-pointer inline-block"
//             onClick={() => setIsOpen(false)}
//           >
//             x
//           </p>
//           <div className="px-16 py-4">
//             <h3>Menu</h3>
//             <div className="space-y-2 mx-4 w-4/5">
//               <a href="/" className="hover:text-gray-500">
//                 Publicar Inmuble
//               </a>
//               <a href="/property" className="hover:text-gray-500">
//                 Buscar Inmueble
//               </a>
//               <a href="/" className="hover:text-gray-500">
//                 Describe tu Inmueble Ideal
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
