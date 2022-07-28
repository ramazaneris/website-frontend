import React from 'react'
import { Helmet } from 'react-helmet'
import ProfileCard from '../components/ProfileCard'
export default function Home() {
  return (
    <div>
      <Helmet>
        <title>ramcho.xyz</title>
        <meta property="og:description" content="ramcho.xyz created for Ramazan Eriş"/>
        <meta name="theme-color" content="#525BD1"/>
      </Helmet>
      <div className="h-screen w-screen">
        <div className="flex relative justify-center items-center h-full w-full">
          <div className="absolute">
            <ProfileCard />
          </div>
        </div>
      </div>

    </div>
  )
}
