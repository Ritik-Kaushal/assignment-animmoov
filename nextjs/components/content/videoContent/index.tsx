import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function VideoContent({ sliderValue }: { sliderValue: number }) {

    const [videoEnded, setVideoEnded] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnded = () => {
            setVideoEnded(true);
        };
        video?.addEventListener('ended', handleVideoEnded);

        return () => {
            video?.removeEventListener('ended', handleVideoEnded);
        };
    }, []);

    const videoContainerStyle = {
        display: sliderValue === 100 ? 'block' : 'none',
        position: 'relative' as 'relative',
        width: '100%',
        overflow: 'hidden',
    };

    const lastImageContainerStyle = {
        display: videoEnded === true ? 'flex' : 'none',
        zIndex: "9999"
    }

    return (
        <>
            <div style={videoContainerStyle}>
                <video autoPlay muted ref={videoRef}>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>
            <div style={lastImageContainerStyle}>
                <Image
                    src="/lastImage.jpg"
                    alt="last image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '91%' }} />
            </div>
        </>
    )
}
