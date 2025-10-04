import { Card, CardContent } from '../ui/card';
import Link from 'next/link';

const CategoriesCard = ({category}) => {
    return (
        <Link href={category.link}>
            <Card className="group cursor-pointer border hover:shadow-lg transition-all duration-300 rounded-xl h-full">
                <CardContent className="flex flex-col items-center justify-center text-center h-full">
                    <div className="bg-primary/10 p-3 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {category.label}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {category.description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CategoriesCard;