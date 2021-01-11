import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

const introduction = `👋 Hi, my name is Alex Xia, a sophomore Computer Science major at UCLA. 
I'm passionate about creating things, learning new things, and teaching people.`;

const interests = `Aside from coding, I also do many other things in my free time. These include: anime, video games, piano, and badminton.`;


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {introduction}
        </p>
        <p>
        Aside from coding, I also do many other things in my free time. 
        These include: <a target="_blank" className={utilStyles.bodyLink} href="https://khxia.github.io/anime_list">anime</a>
        , piano 
        , <a target="_blank" className={utilStyles.bodyLink} href="https://na.op.gg/summoner/userName=RoyalCandy">video games</a>
        , badminton, and listening to <a target="_blank" className={utilStyles.bodyLink} href="https://open.spotify.com/user/meika-ixa">music</a>.
        I have a <a target="_blank" className={utilStyles.bodyLink} href="https://khxia.github.io">blog</a> too!
        </p>
        <p>
          I am also an officer at <a target="_blank" className={utilStyles.bodyLink} href="https://www.uclaacm.com/">UCLA ACM</a>
          , where I teach <a target="_blank" className={utilStyles.bodyLink} href="https://hack.uclaacm.com/archive">
            {' '}workshops</a> and organize some <a target="_blank" className={utilStyles.bodyLink} href="https://hoth.uclaacm.com/">hackathons</a>.
        </p>
        <p>
          
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}