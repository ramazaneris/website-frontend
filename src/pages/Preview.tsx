import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
export default function Preview() {
    const { id } = useParams()
    const [imgData, setImgData] = useState<any>(null)
    const [loaded, setLoaded] = useState(false)


    function timeout(ms: number) {
        return new Promise((resolve: any) => setTimeout(resolve, ms));
    }

    const getImage = async () => {
        const image = await axios.get("http://localhost:5000/i/" + id, { withCredentials: true })
        if (!image.data.error) {
            setImgData(image.data)
        }
    }

    useEffect(() => {
        getImage()
    }, [])

    useEffect(() => {
        timeout(100)
        setLoaded(true)
    }, [imgData])

    return (
        <div>
            {loaded ? (
                <>
                    <Helmet>
                        <title>ramcho.xyz</title>
                        <meta property="og:title" content={imgData?.filename + '.' + imgData?.type.split("/")[1]} />
                        <meta property="og:"/>
                    </Helmet>
                    <div className="h-screen w-screen">
                        <div className="flex relative justify-center items-center h-full w-full">
                            <div className="absolute">
                                <div className="md:w-[500px] md:h-[500px] bg-[#00000050] rounded-lg">
                                    <div className="flex justify-center items-center h-full w-full">
                                        <div className="absolute bg-black py-2 rounded-xl px-2">
                                            {imgData ? (
                                                <>
                                                    <div className="p-2 text-white">{imgData?.filename + '.' + imgData?.type.split("/")[1]}</div>
                                                    <div className="items-center mb-8">
                                                        <img src={imgData?.url} className="max-w-[400px] w-[400px] max-h-[400px]" alt="" />
                                                    </div>
                                                </>

                                            ) : (<>Image not found</>)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            ) : (<>wait</>)}
        </div>
    )
}
