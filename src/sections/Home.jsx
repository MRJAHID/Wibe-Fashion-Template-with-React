import React, { Suspense } from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;
const Home = () => {
  return (
    <Section>
      <Suspense fallback={<></>}>
        <CoverVideo />
        <Logo />
      </Suspense>
    </Section>
  );
};

export default Home;
