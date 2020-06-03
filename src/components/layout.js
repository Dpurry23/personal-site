/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Particles from "react-particles-js"
import config from "../../particlesjs-config"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          fontFamily: "Orbitron",
        }}
      >
        <Particles
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            zIndex: -1,
          }}
          params={config}
          />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
