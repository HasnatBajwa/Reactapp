import Headerimage from '../../assets/head.png';
import '../header/header.css';
 function Header(){
    return(
        <div>
        <img className = 'header' src={Headerimage} alt="headerimage"/>
        </div>
    );

}
export default Header;