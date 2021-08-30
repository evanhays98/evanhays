import {AiFillGithub, AiOutlineInstagram, FaLinkedinIn, HiOutlineMail, MdPhoneAndroid} from "react-icons/all";


const Footer = () => {

    return (
        <div className="foot">
            <div className='contactwrapper'>
                <div className='contact'>
                    <MdPhoneAndroid className='icons'/>
                    <p className='textcontact'>06 48 48 72 90</p>
                </div>
                <div className='contact'>
                    <HiOutlineMail className='icons'/>
                    <p className='textcontact'>evan.hays@epita.fr</p>
                </div>
                <div className='contact'>
                    <AiFillGithub className='icons'/>
                    <p className='textcontact'>evanhays98</p>
                </div>
                <div className='contact'>
                    <AiOutlineInstagram className='icons'/>
                    <p className='textcontact'>vanouh78</p>
                </div>
                <div className='contact'>
                    <FaLinkedinIn className='icons'/>
                    <p className='textcontact'>evanhays98</p>
                </div>
            </div>
            <div className='line'/>
            <p className='textcopy'>Copyright © evanhays</p>
        </div>
    );
};

export default Footer;