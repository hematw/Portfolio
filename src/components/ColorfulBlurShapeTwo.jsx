export default function ColorfulBlurShapesTwo() {
    return (
        <div className="w-full h-full absolute top-0 md:top-20 left-0 md:left-1/4 blur-4xl -z-10 animate-pulse">
            <div className="w-2/3 h-1/3 bg-orange-300  rounded-full  absolute top-0 -right-20"></div>
            <div className="w-2/3 h-1/2 bg-blue-500  rounded-full  absolute bottom-1/4 right-0"></div>
            <div className="h-1/2 w-1/2 bg-pink-600  rounded-full  absolute top-2/3 -left-10"></div>
        </div>
    )
}