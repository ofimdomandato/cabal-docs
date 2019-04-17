import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

const Menu = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMenuItems {
            edges {
              node {
                name
                link
              }
            }
          }
        }
      `}
      render={data => {
        const menuItems = data.allMenuItems.edges.map(edge => edge.node).reverse()
        return (
          <div style={{ marginLeft: 'auto' }}>
            {menuItems.map(item => {
              return (
                    <Link
                      to={item.link}
                      key={menuItems.indexOf(item)}
                      style={{ color: 'white', textDecoration: 'none', marginLeft: "2em", fontSize: "1rem" }}
                    >
                      {item.name}
                    </Link>
              )
            })}
          </div>
        )
      }}
    />
  )
}

export default Menu
