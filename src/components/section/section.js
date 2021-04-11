import sectionimage1 from '../../assets/rolls.jpg';
import sectionimage2 from '../../assets/color.jpg'
import '../section/section.css'
function section() {
    return (
        <div>
            <h2 id="profile">Ara Profile</h2>
            <p>profile sheet 0.40mm to 1.00mm 28 guage upto 20 guage and worth 100mm(39") X 1220mm 1500mm (50") and send where you want. GI sheet and Roll, Coated Sheet and Roll, M/S sheet and Roll, H.R.C sheet and Roll and stainless steel can also profile by us.</p>
           
            <tr>
                <td></td>
                <td><img src={sectionimage1} alt="1stImage" id="leftimage"/></td>
                <td><h3 id="midimageheading">Cable Tray</h3><br/><p>We have so many different kind and size of Cable tray in M/S, Galvanized and Coated sheet. You can Purchase S.S Cable tray from us too. Cable trays of any industries you can buy from us.
We have so many different kind and size of Cable tray in M/S, Galvanized and Coated sheet. You can Purchase S.S Cable tray from us too. Cable trays of any industries you can buy from us.
We have so many different kind and size of Cable tray in M/S, Galvanized and Coated sheet. You can Purchase S.S Cable tray from us too. Cable trays of any industries you can buy from us.</p></td>
                <td><img src={sectionimage2} alt="2nd Image" id="rightimage"/></td>
            </tr>

            
        </div>
    );
}
export default section;
