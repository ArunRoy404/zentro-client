import { Hatch } from 'ldrs/react'
import 'ldrs/react/Hatch.css'

const LoadingPage = () => {
    return (
        <div className='h-[100dvh] w-full flex justify-center items-center'>
            <Hatch
                size="30"
                stroke="5"
                speed="3.5"
            />
        </div>
    );
};

export default LoadingPage;