import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const Project = node => {
  const [expanded, setExpanded] = useState(false)

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-sm">{children}</p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-lg mb-3">{children}</h4>
      ),
    },
  }

  return (
    <article className="grid grid-cols-12 gap-4 mx-auto my-4 rounded-3xl shadow-lg">
      <div className="col-span-12 bg-black flex justify-between p-4 rounded-t-3xl">
        <h3 className="text-white mb-0 mt-2">{node.project.projectTitle}</h3>
        <div className="block lg:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 border rounded text-white border-white hover:text-black hover:bg-white"
          >
            Details
          </button>
        </div>
      </div>
      <section className="col-span-12 lg:col-span-6 px-4">
        <a href={`http://${node.project.projectUrl}`}>
          <img
            src={node.project.projectThumbnail.fluid.src}
            alt={node.project.pojectTitle}
            title={node.project.projectTitle}
          />
        </a>
        <div>
          <h5>Technology Used</h5>
          {node.project.projectTechnologies.map(tech => {
            return (
              <a href={`${tech.technologyUrl}`}>
                <img
                  className="inline w-16 tech-logo"
                  src={tech.technologyLogo.file.url}
                  title={tech.technologyTitle}
                  alt={tech.technologyTitle}
                />
              </a>
            )
          })}
        </div>
      </section>
      <div
        className={`${
          expanded ? `block` : `hidden`
        } col-span-12 max-w-prose lg:col-span-6 lg:block px-4 pb-4`}
      >
        {documentToReactComponents(
          JSON.parse(node.project.projectOverview.raw),
          options
        )}
        <div className="w-full flex justify-center lg:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 border rounded text-black border-black hover:text-white hover:bg-black"
          >
            Close
          </button>
        </div>
      </div>
    </article>
  )
}

export default Project
