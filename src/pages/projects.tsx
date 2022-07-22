import * as React from "react";
import Layout from "../components/layout";

const ProjectPage = () => {
  return (
    <Layout pageTitle="Projects Page">
      <p className="text-3xl font-bold underline">These are stuff that I found out</p>
      <p>The navbarContent[] interface using Typescript did not work on the website but worked in VSC. I used Object.values() instead which solves the problem.</p>
    </Layout>
  )
}
export default ProjectPage