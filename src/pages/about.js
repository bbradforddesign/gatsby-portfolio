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
        <p className="text-xl mb-3">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <div className="mb-5">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">{children}</h2>
          <svg width="355" height="18" xmlns="http://www.w3.org/2000/svg">
            <line
              stroke="rgb(96, 165, 250)"
              strokeLinecap="round"
              strokeLinejoin="undefined"
              y2="5"
              x2="350"
              y1="5"
              x1="0"
              strokeWidth="10"
              fill="none"
            />
            <line
              stroke="rgb(147, 197, 253)"
              strokeLinecap="round"
              strokeLinejoin="undefined"
              y2="14"
              x2="250"
              y1="14"
              x1="0"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </div>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={data.pageTitle} />
      <div className="flex flex-col lg:flex-row mx-6 lg:grid-cols-2">
        {/** Hero Img */}
        <div className="flex justify-center lg:mr-8">
          {data && (
            <img
              src={data.pageImages[0].fluid.src}
              alt={data.pageImages[0].title}
              className="max-w-xs md:max-w-sm lg:max-w-md rounded-2xl"
            />
          )}
        </div>
        {/** Hero Text */}
        <div className="flex flex-col justify-center">
          {data &&
            documentToReactComponents(
              JSON.parse(data.pageContent.raw),
              options
            )}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
