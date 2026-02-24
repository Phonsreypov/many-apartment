import React from 'react';

interface BreadcrumbSectionProps {
    imageUrl: string;
    opacity?: number; // Optional opacity (0 to 1 scale)
    title: string;
    paragraph: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
    imageUrl,
    opacity = 0.5,
    title,
    paragraph,
}) => {
    return (
        <div
            className="relative w-full lg:h-[500px] h-[300px] z-0 bg-cover bg-center flex justify-center items-center"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div
                className="absolute inset-0 z-10 "
                style={{ opacity }}
            />
            <div className="p-8 rounded-lg max-w-4xl text-center z-10">
                <h1 className="lg:text-6xl text-4xl font-bold lg:mb-4 text-white">{title}</h1>
                <p className="text-lg text-white uppercase">{paragraph}</p>
            </div>
        </div>
    );
};

export default BreadcrumbSection;
