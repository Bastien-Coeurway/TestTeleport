import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Videoask = (props) => {
  return (
    <>
      <div className="videoask-container">
        <Head>
          <title>Videoask - Stormy Humble Echidna</title>
          <meta
            property="og:title"
            content="Videoask - Stormy Humble Echidna"
          />
        </Head>
        <div>
          <DangerousHTML
            html={`<iframe src="https://www.videoask.com/f2xguquxg"
allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
width="100%"
height="600px"
style="border: none; border-radius: 24px"
>
</iframe>
`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .videoask-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Videoask
