import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"
import CTA from "../components/cta"

const AboutPage = () => {
  const response = useStaticQuery(
    graphql`
      query {
        contentfulSitePage(pageTitle: { eq: "Portfolio" }) {
          pageTitle
        }
        allContentfulProject {
          edges {
            node {
              id
              projectUrl
              projectTechnologies {
                technologyTitle
                technologyUrl
                technologyLogo {
                  file {
                    url
                  }
                }
              }
              projectSummary {
                projectSummary
              }
              projectThumbnail {
                fluid {
                  src
                }
              }
              projectDate(formatString: "MM/YYYY")
              projectTitle
              projectOverview {
                raw
              }
            }
          }
        }
      }
    `
  )

  const projects = response.allContentfulProject.edges

  const pageData = response.contentfulSitePage

  return (
    <Layout>
      <SEO title={pageData.pageTitle} />
      {/** Page Title */}
      <h2 className="text-4xl text-center lg:text-left">
        {pageData.pageTitle}
      </h2>
      {/** Hero Text */}
      {projects.map(project => {
        return <Project project={project.node} />
      })}
    </Layout>
  )
}

export default AboutPage
