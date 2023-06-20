import React from "react";
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const Footer = () => {
    return ( 
        <MDBFooter className='text-center text-white' style={{ backgroundColor:"#F9F9F9"}}>
        <MDBContainer className='p-4'></MDBContainer>
  
        <div className='text-center p-3' style={{color: 'black' }}>
          © 2020 Copyright:
          <a className='text-black' href='https://mdbootstrap.com/' style={{color:"black"}}>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
     );
}
 
export default Footer;
