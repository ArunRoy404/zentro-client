import FeaturedProperties from '@/section/Home/FeaturedProperties';
import Hero from '@/section/Home/Hero';

const HomePage = () => {
    return (
        <main className='pt-16 md:pt-17'>
            <Hero />
            <FeaturedProperties/>
        </main>
    );
};

export default HomePage;