import Link from 'next/link'
import React from "react"

const Header = ( {siteTitle}: {siteTitle: string}) => {
    return(
      <div style={{
        marginBottom: `25px`,
        display: `flex`,
        flexDirection: `row`,
        alignItems: `baseline`,
        justifyContent: `space-between`,
        flexWrap: `wrap`
      }}>
        <h1 style={{ margin: 0, fontSize: `45px`, float: `left`  }}>
        <i><Link href="/">
            {siteTitle}
          </Link></i>
        </h1>
        <div style={{ float: `right` }}>
          <Link href="/" >
            about
          </Link>{' '}
          &bull;{' '}
          <Link href="/projects" >
            projects
          </Link>{' '}
          &bull;{' '}
          <a target="_blank" href="https://drive.google.com/file/d/1Bof0LfKpZwbwtzHj9Uji3P1efs6Fs0Zy/view?usp=sharing" >
            resume
          </a>{' '}
        </div>
      </div>
    );
}

export default Header;
