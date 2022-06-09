import {FC} from "react";
import styled from "styled-components";

const PricingContainer = styled.div`

  // Space & Position
  width: 100% - (2 * ${props => props.theme.padding.page.horizontal});

  padding: 75px ${props => props.theme.padding.page.horizontal};

  background-color: ${props => props.theme.colours.main.dark};

  color: ${props => props.theme.colours.main.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  hr {
    width: 80%;
    border: 1px solid white;
  }

  p {
    font-weight: 200;
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  > #title {
    margin: 0;
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    > h2 {
      padding: 50px;

      font-size: 4rem;
      width: 15%;
      margin: 0;
    }

    > p {
      padding: 50px;

    }
  }

  > #examples {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 50px 0;

    > div {
      width: 20%;
      margin: 0 50px;

      > h2 {
        margin-bottom: 20px;
      }

      > p {
        margin: 0;
      }
    }
  }



`

const Pricing: FC = () => {

    return (
        <PricingContainer>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <div id={"title"}>
                <h2>What's the cost?</h2>
                <p>
                    We know that price is always important when making decisions about your event, project or business.
                    We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                    nature of this work which can mean that projects can be costed to suit a wide range of budgets.
                    Some more text because this really isn't enough to justify this massive of a title. Maybe some other
                    things we do or don't need?
                    We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                    nature of this work which can mean that projects can be costed to suit a wide range of budgets.
                    <br/><br/>
                    Check out some of the kinda of projects we work on and how much they cost our clients.
                </p>
            </div>
            <hr/>
            <div id={"examples"}>
                <div>
                    <h2>Weddings - $800+</h2>
                    <p>Some text about the wedding here, and what it might entail and how we would manage it etc etc.
                        We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                        nature of this work which can mean that projects can be costed to suit a wide range of
                        budgets.</p>
                </div>

                <div>
                    <h2>Funerals - $800+</h2>
                    <p>Some text about the wedding here, and what it might entail and how we would manage it etc etc.
                        We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                        nature of this work which can mean that projects can be costed to suit a wide range of
                        budgets.</p>
                </div>

                <div>
                    <h2>Product Launch - $800+</h2>
                    <p>Some text about the wedding here, and what it might entail and how we would manage it etc etc.
                        We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                        nature of this work which can mean that projects can be costed to suit a wide range of
                        budgets.</p>
                </div>

                <div>
                    <h2>Events - $800+</h2>
                    <p>Some text about the wedding here, and what it might entail and how we would manage it etc etc.
                        We want to be as transparent as possible with our clients, whilst also acknowledging the unique
                        nature of this work which can mean that projects can be costed to suit a wide range of
                        budgets.</p>
                </div>
            </div>
        </PricingContainer>
    )

}

export default Pricing