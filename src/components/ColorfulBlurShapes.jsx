export default function ColorfulBlurShapes() {
    return (
        <div className="w-48 md:w-72 h-72 absolute top-0 md:top-20 left-0 md:left-1/4 blur-3xl md:blur-4xl -z-10 animate-wiggle">
            <div className="md:w-60 w-36 md:h-60 h-36 bg-yellow-200  rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2"></div>
            <div className="md:w-60 w-36 md:h-60 h-36 bg-red-500  rounded-full  absolute top-0 -left-10"></div>
            <div className="md:w-60 w-36 md:h-60 h-36 bg-blue-500  rounded-full  absolute top-0 -right-10"></div>
        </div>
    )
}