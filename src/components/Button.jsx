import React from 'react'

const Button = ({title , id, rightIcon, leftIcon, containerClass}) => {
    return (
        <button className={` group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClass} `} id={id}>
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div className="">
                    { title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}
export default Button
