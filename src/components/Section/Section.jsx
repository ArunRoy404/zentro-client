import React from 'react';

const Section = ({ children, bg }) => {
    return (
        <section className={bg}>
            <div className="w-full container mx-auto px-6 transition-all duration-500" >
                {children}
            </div>
        </section>
    );
};

export default Section;