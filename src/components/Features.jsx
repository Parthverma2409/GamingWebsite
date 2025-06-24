import {TiLocationArrow} from "react-icons/ti";
import {useRef, useState} from "react";
const BentoTilt = ({children, className=""}) => {

    const [transformStyle, setTransformStyle] = useState();
    const itemRef = useRef('');

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;
        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;
        setTransformStyle(newTransform);
    };


    const handleMouseLeave = (e) => {
        setTransformStyle('');
    }


    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}
const BentoCard = ({src, title, description}) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex flex-col justify-between p-5 text-blue-50 size-full">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                    <p className="mt-3 max-w-64 textxs md:text-base ">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className=" bg-black pb-52">
            <div className=" container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web  text-lg text-blue-50">
                        Into the world of gaming
                    </p>
                    <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title = {
                        <>radia<b>n</b>t</>
                        }
                        description = "A title etched in brilliance, earned only by the most elite warriors in the arena. In the realm of gaming, “Radiant” isn’t just a rank — it’s a symbol of unmatched skill, mental fortitude, and relentless precision. When a player is Radiant, every click echoes dominance, every move inspires fear, and every match is a showcase of mastery. It’s where legends reside, and mortals aspire."
                    />
                </BentoTilt>


                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
                        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title = {<>zig<b>m</b>a</>}
                            description={"Gaming isn't just a hobby — it's a battlefield of reflexes, strategy, and heart. Every match is a story, every loss a lesson, and every win a legacy."}
                        />
                    </BentoTilt>

                        <BentoTilt className ="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title = {<>n<b>e</b>xus</>}
                            description={"The Nexus is the hub of the Arena, where players can find and connect with other players to form a community of their own. The Nexus is where players can find and connect with other players to form a community of their own."}
                        />
                        </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title = {<>a<b>z</b>ule</>}
                            description={"azule is a game that is not just a game, it's a way of life that makes you feel alive. It's a way of life that makes you feel alive."}
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">more coming soon!</h1>
                            <TiLocationArrow className="text-black m-5 scale-[5] self-end"/>
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <video
                            src="videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className=" size-full object-cover object-center"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}
export default Features
