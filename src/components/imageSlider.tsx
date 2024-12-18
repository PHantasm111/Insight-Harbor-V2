import { StepBack, StepForward } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { imagesProps } from '~/types'

const ImageSlider = ({ images }: { images: imagesProps[] }) => {

    // current image index
    const [imgIndex, setImgIndex] = React.useState<number>(0)

    // function change image
    const showNextImage = () => {
        setImgIndex(index => {
            if (index === images.length - 1) {
                return 0;
            } else {
                return index + 1
            }
        });
    }

    const showPrevImage = () => {
        setImgIndex(index => {
            if (index === 0) {
                return images.length - 1;
            } else {
                return index - 1
            }
        });
    }

    return (
        <div className='relative w-full h-full flex items-center justify-center'>
            <div className="w-[70vw] h-full flex overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(${imgIndex * -100}%)`,
                    }}
                >
                    {images.map((image) => (
                        <Image
                            key={image.id}
                            src={image.imageUrl}
                            alt={image.alt}
                            width={1920}
                            height={1080}
                            className="object-cover w-[70vw] h-full"
                        />
                    ))}
                </div>
            </div>

            <div className='absolute left-0 h-full w-96 z-20 flex items-center justify-center cursor-pointer group
            hover:bg-gradient-to-r hover:from-transparent hover:via-gray-100/70 hover:to-transparent ease-in-out transition-all duration-3000'
                onClick={showPrevImage}
            >
                <div className='group-hover:bg-gray-200/90 rounded-full p-2'>
                    <StepBack size={80} />
                </div>
            </div>


            <div className='absolute right-0 h-full w-96 z-20 flex items-center justify-center cursor-pointer group
            hover:bg-gradient-to-r hover:from-transparent hover:via-gray-100/70 hover:to-transparent ease-in-out transition-all duration-3000'
                onClick={showNextImage}
            >
                <div className='group-hover:bg-gray-200/90 rounded-full p-2'>
                    <StepForward size={80} />
                </div>
            </div>

            <div className='absolute bottom-4 flex gap-2'>
                {images.map((_, index) => (
                    index === imgIndex ? (
                        <Image
                            key={index}
                            src="/assets/Dot.png"
                            alt="dot"
                            width={30}
                            height={30}
                            className=''
                        />

                    ) : (
                        <Image
                            key={index}
                            src="/assets/whiteDot.png"
                            alt="dot"
                            width={30}
                            height={30}
                            className=''
                        />

                    )
                ))}
            </div>


        </div>

    )
}

export default ImageSlider