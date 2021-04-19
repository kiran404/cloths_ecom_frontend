import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import { itemTotal } from './cartHelpers';
import '../css/Menu.css';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#0f0f0f' };
    } else {
        return { color: '//#endregion' };
    }
}
const Menu = ({ history }) => (   // destruct
    <div className="navbar navbar-expand-md navbar-light">
        
            <Link className="navbar-brand" to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" height="70" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426L.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                </svg>
                {/* <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="mdb logo" /> */}
            </Link>
        
        <ol className="breadcrumb">
            <li className="breadcromb-item"><Link className="waves-effect mr-3" to='/'>Home </Link></li>
            <li className="breadcromb-item"><Link className="waves-effect mr-3" to='/'> Special Offer </Link></li>
            <li className="breadcromb-item active"><Link className="waves-effect" to='/'> E-commerce </Link></li>
        </ol>


        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link navbar-link-2 waves-effect">
                        {/* <span className="badge badge-pill red">1</span>
                        <i className="fas fa-shopping-cart pl-0"></i> */}
                        <Link className="nav-link" style={isActive(history, '/cart')} to='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                                Cart <sup><span className="super-cart">{itemTotal()}</span></sup>
                        </Link>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/shop' className="nav-link waves-effect" style={isActive(history, '/shop')}>
                        Shop
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link waves-effect" style={isActive(history, '/contact')}>
                        Contact
                        </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-items">
                        <Link className="nav-link" style={isActive(history, '/user/dashboard')} to='/user/dashboard'>Dashboard</Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-items">
                        <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to='/admin/dashboard'>Dashboard</Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <>
                        <li className="nav-items">
                            <Link className="nav-link" style={isActive(history, '/signin')} to='/signin'>Signin</Link>
                        </li>
                        <li className="nav-items">
                            <Link className="nav-link" style={isActive(history, '/signup')} to='/signup'>Signup</Link>
                        </li>
                    </>
                )}
                {isAuthenticated() && (
                    <li className="nav-items">
                        <span className="nav-link" style={{ cursor: 'pointer', color: '//#endregion' }} onClick={() => signout(() => {
                            history.push('/');
                        })}>
                            Signout
                            </span>
                    </li>
                )}
            </ul>
        </div>
    </div>
)
export default withRouter(Menu);

// const Menu = ({ history }) => (       // destruct
//     <div>
//         <ul className="nav nav-tabs bg-primary">
//             <li className="nav-items">
//                 <Link className="nav-link" style={isActive(history, '/')} to='/'>Home</Link>
//             </li>

//             <li className="nav-items">
//                 <Link className="nav-link" style={isActive(history, '/shop')} to='/shop'>Shop</Link>
//             </li>

//             <li className="nav-items">
//                 <Link className="nav-link" style={isActive(history, '/cart')} to='/cart'>
//                     Cart <sup><span className="super-cart">{itemTotal()}</span></sup>
//                 </Link>
//             </li>

//             {isAuthenticated() && isAuthenticated().user.role === 0 && (
//                 <li className="nav-items">
//                     <Link className="nav-link" style={isActive(history, '/user/dashboard')} to='/user/dashboard'>Dashboard</Link>
//                 </li>
//             )}

//             {isAuthenticated() && isAuthenticated().user.role === 1 && (
//                 <li className="nav-items">
//                     <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to='/admin/dashboard'>Dashboard</Link>
//                 </li>
//             )}

//             {!isAuthenticated() && (
//                 <>
//                     <li className="nav-items">
//                         <Link className="nav-link" style={isActive(history, '/signin')} to='/signin'>Signin</Link>
//                     </li>
//                     <li className="nav-items">
//                         <Link className="nav-link" style={isActive(history, '/signup')} to='/signup'>Signup</Link>
//                     </li>
//                 </>
//             )}
//             {isAuthenticated() && (
//                 <li className="nav-items">
//                     <span className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => signout(() => {
//                         history.push('/');
//                     })
//                     }>
//                         Signout
//                 </span>
//                 </li>
//             )}
//         </ul>
//     </div>
// )
// export default withRouter(Menu);