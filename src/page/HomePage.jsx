import Categories from '@/section/Home/Categories';
import CTAHome from '@/section/Home/CTAHome';
import FeaturedAgents from '@/section/Home/FeaturedAgents';
import FeaturedProperties from '@/section/Home/FeaturedProperties';
import Hero from '@/section/Home/Hero';
import Testimonials from '@/section/Home/Testimonials';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProperties/>
            <Categories/>
            <FeaturedAgents/>
            <Testimonials/>
            <CTAHome/>
        </main>
    );
};

export default HomePage;