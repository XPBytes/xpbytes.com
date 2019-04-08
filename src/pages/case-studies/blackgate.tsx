import React from 'react'

import { Layout } from "../../components/layout";
import SEO from "../../components/seo";

const BlackgatePage = (): JSX.Element => (
  <Layout>
    <SEO
      title="Case Study: Blackgate"
      description="Dutch software agency specializing in custom, tailored, software."
      keywords={['custom software', 'maatwerk software', 'software', 'typescript', 'react', 'rails', 'ruby', 'c#', 'dotnet', '.NET', 'UX', 'AWS']} />

    <article>
      <header style={{ paddingTop: '2rem' }}>
        <h2>Case Study: Blackgate</h2>
        <span>Coming soon...</span>
      </header>
    </article>
  </Layout>
)

// Legacy

export default BlackgatePage
