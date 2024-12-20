import { StepBack, StepForward } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { imagesProps } from '~/types'
import { Button } from './ui/moving-border'

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
                {/* Image Title and button */}
                <div className='absolute top-20 left-1/2 -translate-x-1/2 z-20 bg-white/50 text-black-100 w-[70vw]'>
                    <p className='text-7xl font-kanit font-bold p-4'>{images[imgIndex]?.title}</p>
                    <div className='text-3xl font-kanit p-4 bg-white/60'>
                        {images[imgIndex]?.desc}
                    </div>
                </div>

                <div className='absolute bottom-1/4 left-1/2 -translate-x-1/2 z-20'>
                    <Button
                        duration={3000}
                        borderRadius="1.75rem"
                        className="font-kanit font-bold text-3xl p-2 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        {`${images[imgIndex]?.buttonText}`}
                    </Button>
                </div>

                <div
                    className="relative flex transition-transform duration-500 ease-in-out"
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
            hover:bg-gradient-to-r hover:from-transparent hover:via-gray-100/70 hover:to-transparent ease-in-out transition-all duration-3000
            dark:hover:bg-gradient-to-r dark:hover:from-transparent dark:hover:via-black-200 dark:hover:to-transparent
            '
                onClick={showPrevImage}
            >
                <div className='group-hover:bg-gray-200/90 dark:group-hover:bg-black-100 rounded-full p-2'>
                    <StepBack size={80} />
                </div>
            </div>


            <div className='absolute right-0 h-full w-96 z-20 flex items-center justify-center cursor-pointer group
            hover:bg-gradient-to-r hover:from-transparent hover:via-gray-100/70 hover:to-transparent ease-in-out transition-all duration-3000
            dark:hover:bg-gradient-to-r dark:hover:from-transparent dark:hover:via-black-200 dark:hover:to-transparent
            '
                onClick={showNextImage}
            >
                <div className='group-hover:bg-gray-200/90 dark:group-hover:bg-black-100 rounded-full p-2'>
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