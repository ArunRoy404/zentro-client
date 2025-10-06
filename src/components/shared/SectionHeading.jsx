const SectionHeading = ({ title, subtitle, Button }) => {
    return (
        <div className="flex items-end justify-between mb-10">
            <div>
                <h2 className="text-xl lg:text-3xl font-bold text-gray-900">{title}</h2>
                <p className="text-xs lg:text-sm max-w-[250px] md:max-w-[500px] mt-2 fond-semibold" >{subtitle}</p>
            </div>
            {Button && <Button />}
        </div>
    );
};

export default SectionHeading;