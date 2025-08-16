export default function Card({ title, img = "/logo.png" }) {
    return (
        <div className="bg-white border-2 border-black p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 
        w-48 h-64 relative flex-shrink-0">
            <img
                className="w-full h-3/4 object-cover border-2 border-black"
                src={img}
                alt={title}
            />
            <div className="absolute bottom-3 left-3 bg-white border-2 border-black px-2 py-1">
                <p className="text-xs font-medium text-black">{title}</p>
            </div>
        </div>
    );
}