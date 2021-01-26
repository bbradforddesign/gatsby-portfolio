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
        <p className="text-xl">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <p className="text-6xl md:text-7xl font-bold">{children}</p>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={data.pageTitle} />
      <div className="grid grid-cols-1 mx-6 md:grid-cols-2">
        {/** Hero Img */}
        <div className="flex justify-center">
          {data && (
            <img
              src={data.pageImages[0].fluid.src}
              alt={data.pageImages[0].title}
              className="w-52 md:w-72 rounded-xl shadow-2xl"
            />
          )}
        </div>
        {/** Hero Text */}
        <div className="flex flex-col justify-center max-w-sm">
          {data &&
            documentToReactComponents(
              JSON.parse(data.pageContent.raw),
              options
            )}
          <CTA
            message="Nice to Meet You"
            to="/about"
            align="justify-center md:justify-end"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
