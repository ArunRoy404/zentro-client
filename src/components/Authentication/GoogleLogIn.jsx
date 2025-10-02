import Image from "next/image";

const GoogleLogIn = () => {
    return (
        <button
            className="py-3 border border-[#637381] w-full rounded-lg
            flex items-center gap-4 justify-center
            cursor-pointer hover:bg-gray-100 transition-all duration-300
            text-gray-600 text-xs md:text-sm font-bold
            ">
            <div className="relative w-4 h-4 md:w-6 md:h-6">
                <Image
                    src={'/Icon/IconGoogle.svg'}
                    alt='Google'
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            Continue with Google
        </button>
    );
};

export default GoogleLogIn;