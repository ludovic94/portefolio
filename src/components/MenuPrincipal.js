import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import SiteInfo from './SiteInfo'

const MenuPrincipalInterieur = styled.div`
max-width:960px;
margin: 0 auto;
display:flex;
width:960px
`


const StyleMenuPrincipal = styled.div`
display:flex;
background-color: rgb(3, 27, 77);
`
const MenuItem = styled(Link)`
  color: white;
  display:block;
  padding: 8px 16px;
`


const MenuPrincipal = () =>(

    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter:{
            name:{
              
              eq:"Menu Principal"
            }
          }) {
            edges {
              node {
                 name
                items {
                  title
                  object_slug
                }
               
              }
            }
          }
        }
    `} 
    
    render={props =>(

        <StyleMenuPrincipal>
          <MenuPrincipalInterieur>
          <SiteInfo/>
            {props. allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
                <MenuItem to={item.object_slug} key={item.title}>
                   {item.title}
                </MenuItem>
                )}
          </MenuPrincipalInterieur>
        </StyleMenuPrincipal>
      
    )} />

)

export default MenuPrincipal