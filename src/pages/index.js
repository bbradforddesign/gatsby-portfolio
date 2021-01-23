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

  console.log(data.contentfulSitePage.pageImages)

  return (
    <Layout>
      <SEO title={data.contentfulSitePage.pageTitle} />
      <div className="grid grid-cols-2">
        {/** Hero Img */}
        <div className="flex justify-center">
          {data && (
            <img
              src={data.contentfulSitePage.pageImages[0].fluid.src}
              alt={data.contentfulSitePage.pageImages[0].title}
              className="w-60 rounded-3xl shadow-2xl"
            />
          )}
        </div>
        {/** Hero Text */}
        <div>
          {data &&
            documentToReactComponents(
              JSON.parse(data.contentfulSitePage.pageContent.raw)
            )}
          <CTA message="Nice to Meet You!" to="/about" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
