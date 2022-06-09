import {FC} from "react";
import styled from "styled-components";

const SplashContainer = styled.div`

  width: 100% - (2 * ${props => props.theme.padding.page.horizontal});
  height: 50vh;

  padding: 0 ${props => props.theme.padding.page.horizontal};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div {
    
    h1 {
      font-size: 5rem;
      font-weight: 800;
      text-align: center;

      > span {
        color: ${props => props.theme.colours.secondary.accent}
      }

    }
    
    #first {
      position: relative;
      left: -50px;
    }

    #second {
      margin-top: -70px;
      position: relative;
      left: 50px;
    }
  }
  


`

const Splash: FC = () => {

    return (
        <SplashContainer>

            <div>
                <h1 id={"first"}><span>Live video</span></h1>
                <h1 id={"second"}>made easy.</h1>
            </div>

        </SplashContainer>
    )

}

export default Splash