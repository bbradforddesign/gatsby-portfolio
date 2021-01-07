import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulPortfolioPage(pageTitle: { eq: "About Me" }) {
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
      <SEO title={data.contentfulPortfolioPage.pageTitle} />
      {data.contentfulPortfolioPage.pageContent.raw &&
        documentToReactComponents(
          JSON.parse(data.contentfulPortfolioPage.pageContent.raw)
        )}
      <Link to="/">Home</Link> <br />
      <Link to="/portfolio/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default AboutPage
