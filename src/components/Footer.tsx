import {FC} from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.div`

  // Space & Position
  width: 100% - (2 * ${props => props.theme.padding.page.horizontal});

  padding: 0 ${props => props.theme.padding.page.horizontal};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  // Features


  // Colour
  
  color: white;
  
  // Children
  > #main {
    width: 100%;
    height: 20rem;
    
    padding: inherit;

    display: inherit;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    background-color: ${props =>  props.theme.colours.main.dark};

    > p {
      font-weight: 200;
      font-size: 0.9rem;
      margin-bottom: 25px;
    }
  }

  #columns {
    width: 60%;
    margin-top: 5rem;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  #column {
    padding: 0 10%;
    
    h4 {
      font-weight: 800;
      margin-bottom: 15px;
    }

    li {
      list-style: none;
      font-weight: 400;
      line-height: 1.8;
    }
  }
  
  > #sub {
    width: 100%;
    height: 3rem;
    
    padding: inherit;
    
    background-color: ${props =>  props.theme.colours.secondary.accent};
    
    display: inherit;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    p {
      color: ${props => props.theme.colours.main.light};
      font-weight: 400;
      font-size: 0.9rem;
      
      a {
        color: inherit;
        font-weight: 600;
        transition: all 0.2s ease;
        
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  
    
`

/**
 * Component that displays a footer for the website.
 */
const Footer : FC = () => {

    return (
        <FooterContainer>
            <div id="main">
                <div id={"columns"}>
                    <div id={"column"}>
                        <h4>MORE</h4>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Terms & Conditions</li>
                    </div>
                    <div id={"column"}>
                        <h4>CONTACT</h4>
                        <li>hello@nunc.live</li>
                        <li>+64 021 163 3862</li>
                    </div>
                    <div id={"column"}>
                        <h4>NETWORK</h4>
                        <li>FB</li>
                        <li>INSTA</li>
                        <li>VIMEO</li>
                    </div>
                </div>


                <p>&copy; NUNC Consulting Limited 2022. All rights reserved.</p>

            </div>
            <div id="sub">
                <p>Proudly created in-house by <Link href={"https://nunc.digital"}><a>NUNC Digital Limited</a></Link></p>
            </div>
        </FooterContainer>
    )

}

export default Footer