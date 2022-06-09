import {FC} from "react";
import Image from "next/image";
import nuncLogo from "../images/nunc_logo_white.png"
import styled from "styled-components";
import Link from "next/link";


const NavigationContainer = styled.div`

  // Space & Position
  width: 100% - (2 * ${props => props.theme.page.paddingHorizontal});
  height: 6rem;

  padding: 0 ${props => props.theme.page.paddingHorizontal};

  display: flex;
  flex-direction: row;
  align-items: center;
  // Features


  // Colour
  background-color: black;

  // Children
  #logo-container {
    width: 4rem;

    cursor: pointer;

    transition: all 0.5s ease;

    &:hover {
      opacity: 0.85;
    }
  }

`


/**
 * Displays a navigation bar across the entire screen.
 */
const Navigation: FC = () => {
    return (
        <NavigationContainer>
            {/* Logo */}
            <div id={"logo-container"}>
                <Link href={"/"}>
                    <Image
                        src={nuncLogo}
                        alt="Picture of the author"
                        layout={"responsive"}
                    />
                </Link>
            </div>


            {/*/!* Menu *!/*/}
            {/*<div>*/}
            {/*    {NavigationItem("", "", "")}*/}
            {/*</div>*/}

            {/*/!* Call to action *!/*/}
            {/*<div>*/}
            {/*    <button></button>*/}
            {/*</div>*/}
        </NavigationContainer>
    )
}

export default Navigation