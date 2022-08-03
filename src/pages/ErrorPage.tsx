import React from 'react'

export default function ErrorPage() {
  return (
    <div className="w-screen h-screen">
      <div className="flex relative justify-center items-center h-full w-full">
        <div className="absolute">
          <div className="md:w-[500px] md:h-[500px] bg-[#00000050] shadow-2xl rounded-2xl">
            <div className="flex justify-center items-center h-full w-full">
              <div className="absolute">
                <div className="items-center font-bold">PAGE NOT FOUND</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}