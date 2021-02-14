import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

const IndexPage = () => {
  const response = useStaticQuery(
    graphql`
      query {
        contentfulSitePage(pageTitle: { eq: "Welcome" }) {
          pageContent {
            raw
          }
          pageTitle
          pageImages {
            fluid {
              src
            }
            title
          }
        }
      }
    `
  )

  const data = response.contentfulSitePage

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-m">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <p className="text-4xl font-bold">{children}</p>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={data.pageTitle} />
      {/** Hero Img */}
      <div className="hidden md:inline-block col-span-12 md:col-span-6" />

      {/** Hero Text */}
      <div className="col-span-12 md:col-span-6">
        {data &&
          documentToReactComponents(JSON.parse(data.pageContent.raw), options)}
        <CTA message="Learn More" to="/about" align="justify-end" />
      </div>
    </Layout>
  )
}

export default IndexPage
