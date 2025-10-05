import Categories from '@/section/Home/Categories';
import FeaturedAgents from '@/section/Home/FeaturedAgents';
import FeaturedProperties from '@/section/Home/FeaturedProperties';
import Hero from '@/section/Home/Hero';
import Testimonials from '@/section/Home/Testimonials';

const HomePage = () => {
    return (
        <main className='pt-16 md:pt-17'>
            <Hero />
            <FeaturedProperties/>
            <Categories/>
            <FeaturedAgents/>
            <Testimonials/>
        </main>
    );
};

export default HomePage;