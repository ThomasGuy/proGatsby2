import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background-color: #524763;

  .container {
    max-width: 960px;
    padding: 1rem;
  }

  h1 {
    margin: 0;
  }

  Link {
    color: white;
    text-decoration: none;
  }

  img {
    width: 100px;
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="container">
      <h1>
        <Link to="/">
          <img src={logo} alt="gatsby logo" />
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
