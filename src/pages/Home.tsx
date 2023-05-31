import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ProfileCard from "../components/ProfileCard";
export default function Home() {
  const ref = useRef(null);
  useEffect(() => {
  }, []);
  return (
    <div>
      <Helmet>
        <title>Ramazan (Ramco) Eriş</title>
        <link rel="icon" href="https://cdn.ramco.mbps.tk/cdn/kci2whj64s.jpeg" type="image/png" sizes="16x16" />
        <meta
          property="og:description"
          content="Ramazan Eriş"
        />
        <meta name="theme-color" content="#525BD1" />
      </Helmet>
      <div className="h-screen w-screen">
        <div className="flex relative justify-center items-center h-full w-full">
          <div className="absolute">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
