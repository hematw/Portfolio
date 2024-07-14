export default function ColorfulBlurShapes() {
    return (
        <div className="w-full h-72 absolute top-1/2 left-1/2 -translate-x-1/2 blur-4xl -translate-y-1/2 -z-10">
            <div className="md:w-60 w-36 md:h-60 h-36 bg-yellow-200  rounded-full  absolute top-1/2 left-1/2 -translate-x-1/2"></div>
            <div className="md:w-60 w-36 md:h-60 h-36 bg-red-500  rounded-full  absolute top-0 left-0"></div>
            <div className="md:w-60 w-36 md:h-60 h-36 bg-blue-500  rounded-full  absolute top-0 right-0"></div>
        </div>
    )
}