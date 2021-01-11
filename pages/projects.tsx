import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ProjectsPage from '../components/ProjectsPage/ProjectsPage'

export default function Projects() {
    return(
        <Layout>
            <Head>
            <title>Projects | {siteTitle}</title>
            </Head>
            <ProjectsPage />
        </Layout>
    );
}