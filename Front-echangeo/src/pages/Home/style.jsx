import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const Container = styled.div`
  width: 100%:
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    width: 65%;
  }

`;

export const Title = styled.h1`
  margin-bottom: 3rem;
  font-size: 1.2rem;
  font-weight: 700;

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }

  @media ${devices.laptop} {
    font-size: 2rem;
  }
`;

export const InformationContainer = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  padding: 0.2rem !important;
  /*   padding: 0 15px;


  @media ${devices.tablet} {
   
  }

  @media ${devices.laptop} {
   
  }

  @media ${devices.laptopL} {
   
  } */
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;

  margin: 1.5rem auto;
  @media ${devices.tablet} {
    font-size: 1.1rem;
  }

  @media ${devices.laptop} {
    font-size: 1.4rem;
  }
`;
