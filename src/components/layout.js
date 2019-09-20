
import React from "react"
import Header from "./header"
import MenuPrincipal from "./MenuPrincipal"
import styled, {createGlobalStyle} from 'styled-components'

const StylesGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

body{
    font-family: 'Open Sans',sans-serif;
    margin: 0;
    padding: 0;
}

`
const LayoutContainer = styled.div`
max-width:960px;
margin: 0 auto;

`

const Layout = ({ children }) => (


<div>
<StylesGlobal />
<MenuPrincipal />
<LayoutContainer>
  {children}
</LayoutContainer>
</div>
  ) 

export default Layout
