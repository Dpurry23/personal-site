import React from "react"
import styled from "styled-components"
import ContactButton from "./ContactButton"

const Header = ({ handleScroll }) => (
  <Container>
    <Info>
      <Title>neoDOTtech</Title>
      <Email>dpurry23@gmail.com</Email>
      <ContactButton handleScroll={handleScroll}>CONTACT</ContactButton>

      <Socials>
        <Social link="https://twitter.com/darianjss/" about=__blank/>
      </Socials>
    </Info>
  </Container>
)


export default Header
