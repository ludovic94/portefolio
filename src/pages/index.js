import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql, StaticQuery} from 'gatsby'

const IndexPage = () => (
  <Layout>
     < StaticQuery 
      query={graphql`
      {
  
        allWordpressPage{
          edges{
            node{
              id
              title
              content
            }
          }
        }
      }
      `}
     render={props =>(

      <div>
{props.allWordpressPage.edges.map(page =>(

  <div key={page.node.id}>
    <h1>{page.node.title}</h1>
    <div dangerouslySetInnerHTML={{__html: page.node.content}}/>
  </div>
))}

      </div>
     )} />


    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
