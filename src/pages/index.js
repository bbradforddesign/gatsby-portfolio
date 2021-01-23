import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulSitePage(pageTitle: { eq: "Welcome" }) {
          pageContent {
            raw
          }
          pageTitle
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title={data.contentfulSitePage.pageTitle} />
      {data.contentfulSitePage.pageContent.raw &&
        documentToReactComponents(
          JSON.parse(data.contentfulSitePage.pageContent.raw)
        )}
      <CTA message="Nice to Meet You!" to="/about" />
      <Link to="/portfolio/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
