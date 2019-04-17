import React, { Component } from 'react'
import { Link } from 'gatsby';
import sizeMe  from 'react-sizeme';
import { connect } from "react-redux";
import { updateHeaderHeight } from '../../actions/layout';
import Menu from '../Menu';
import logoCabal from "../../images/logo-cabal.png"

class Header extends Component {
  componentDidUpdate = () => {
    this.props.updateHeaderHeight(this.props.size.height)
  }

  render() {
    const { siteTitle } = this.props
    return(
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: '#099'
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '1rem 1.5rem'
          }}
        >
          <div>
            <Link to="/" >
            <img src={logoCabal} alt={siteTitle} style={{maxWidth: 200, marginBottom: 0}}/>
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateHeaderHeight
}

export default connect(()=>({}), mapDispatchToProps) (sizeMe({monitorHeight: true})(Header))
