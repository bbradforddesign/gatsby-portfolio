import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
        <p className="text-sm">{children}</p>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl mb-3">{children}</h3>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={data.pageTitle} />
      {/** Page Title */}
      <h2 className="text-4xl text-center lg:text-left">{data.pageTitle}</h2>
      <article className="grid grid-cols-12 gap-4 mx-auto p-4">
        {/** Hero Img */}
        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
          {data && (
            <img
              className="mx-auto lg:mx-0 rounded-xl w-1/2 object-cover profile-image max-w-xs lg:w-3/4"
              src={data.pageImages[0].fluid.src}
              alt={data.pageImages[0].title}
            />
          )}
        </div>
        {/** Hero Text */}
        <div className="col-span-12 max-w-prose lg:col-span-6 xl:col-span-8">
          {data &&
            documentToReactComponents(
              JSON.parse(data.pageContent.raw),
              options
            )}
          <CTA message="Explore my Work" to="/portfolio" align="justify-end" />
        </div>
      </article>
    </Layout>
  )
}

export default AboutPage
