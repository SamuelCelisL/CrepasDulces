export default function Video(){
    return (
    <div className="flex flex-col items-center bg-[#F4EDE6]">
        <h1 className="bg-[#E3CBAF] text-center font-bold text-2xl p-3 w-full">Video</h1>
        <iframe 
        className="w-full h-[500px] max-w-[700px]" 
        src="https://www.youtube.com/embed/MPkSITpHpfQ" 
        title="YouTube video player" 
        // frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
    </div>
    )
};
