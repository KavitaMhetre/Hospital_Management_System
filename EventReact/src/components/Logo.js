import './Logo.css';
/* import f from './images/bottom/f.png';
import t from './images//bottom/t.jpg';
import ii from './images/bottom/ii.png'; */

function Logo() {
    return (
        <div className="logo-container">
       <img src="/images/bottom/ii.png" alt="Logo 1" />
        <img src="/images/bottom/f.png" alt="Logo 2" />
        <img src="/images/bottom/t.jpg" alt="Logo 3" />
        </div>      
);
}

export default Logo;