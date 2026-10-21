export default function ColorfulBlurShapesTwo() {
    return (
        <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full blur-4xl animate-pulse md:top-20 md:left-1/4">
            <div className="w-2/3 h-1/3 bg-orange-300  rounded-full  absolute top-0 -right-20"></div>
            <div className="w-2/3 h-1/2 bg-blue-500  rounded-full  absolute bottom-1/4 right-0"></div>
            <div className="h-1/2 w-1/2 bg-pink-600  rounded-full  absolute top-2/3 -left-10"></div>
        </div>
    )
}