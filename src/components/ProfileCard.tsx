import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfileCard() {
  return (
    <div className="md:w-[500px] md:h-[500px] bg-[#00000050] shadow-2xl rounded-2xl">
      <div className="flex justify-center items-center h-full w-full">
        <div className="absolute">
          <div className="items-center mb-8"><img src="https://api.ramcho.xyz/u/r9m9x0ob8n.png" className="rounded-full w-60" alt="" /></div>
          <div className="text-center">
            <div>
              <h1 className="text-[32px]">Ramazan Eriş</h1>
            </div>
            <div>
              <p>Ramazan Eriş is a student in Turkey</p>
              <div>
                <Link className="text-blue-700 font-bold" to="https://twitter.com/RmznEris?utm_source=ramcho.xyz">twitter/RmznEris</Link>
              </div>
              <div>
                <Link className="text-blue-700 font-bold" to="https://instagram.com/ramazaneriss?utm_source=ramcho.xyz">instagram/@ramazaneriss</Link>
              </div>
              <div>
                <Link className="text-blue-700 font-bold" to="https://github.com/ramazaneris?utm_source=ramcho.xyz">github/ramazaneris</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
