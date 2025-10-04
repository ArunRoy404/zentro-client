import Categories from '@/section/Home/Categories';
import FeaturedProperties from '@/section/Home/FeaturedProperties';
import Hero from '@/section/Home/Hero';

const HomePage = () => {
    return (
        <main className='pt-16 md:pt-17'>
            <Hero />
            <FeaturedProperties/>
            <Categories/>
        </main>
    );
};

export default HomePage;