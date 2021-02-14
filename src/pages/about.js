import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CTA from "../components/cta"

const AboutPage = () => {
  const response = useStaticQuery(
    graphql`
      query {
        contentfulSitePage(pageTitle: { eq: "About Me" }) {
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
        <h2 className="text-3xl mb-3">{children}</h2>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={data.pageTitle} />
      {/** Hero Img */}
      <div className="col-span-4">
        {data && (
          <img
            src={data.pageImages[0].fluid.src}
            alt={data.pageImages[0].title}
            className="rounded-2xl"
          />
        )}
      </div>
      {/** Hero Text */}
      <div className="col-span-12 md:col-span-8">
        {data &&
          documentToReactComponents(JSON.parse(data.pageContent.raw), options)}
        <CTA message="Learn More" to="/about" align="justify-end" />
      </div>
    </Layout>
  )
}

export default AboutPage
