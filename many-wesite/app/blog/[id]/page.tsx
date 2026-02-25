import Image from "next/image";
import { notFound } from "next/navigation";
import { blogListDetails } from "@/configs/Data";
import BreadcrumbSection from "@/components/BreadcrumbSection";

export default async function BlogDetails({
    params,
}: {
    params: Promise<{ id: string }>;
}) {

    const { id } = await params;

    const blog = blogListDetails.find(
        (item) => item.id === Number(id)
    );

    if (!blog) notFound();

    return (
        <>
            {/* HERO / BREADCRUMB */}
            <section className="relative h-[60vh] w-full overflow-hidden">

                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

                    <span className="bg-[#C59D5F] text-xs px-4 py-2 uppercase tracking-widest mb-6">
                        {blog.category}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-serif max-w-3xl leading-tight">
                        {blog.title}
                    </h1>

                    <p className="mt-6 text-gray-300 text-sm tracking-wider">
                        {blog.date}
                    </p>

                </div>
            </section>


            {/* ARTICLE CONTENT */}
            <section className="bg-white py-20">
                <div className="max-w-3xl mx-auto px-6">

                    {/* Intro Paragraph */}
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {blog.content}
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-[2px] bg-[#C59D5F] mb-10" />

                    {/* Extra Paragraphs */}
                    <div className="space-y-8 text-gray-600 leading-relaxed text-[17px]">

                        <p>
                            Traveling opens doors to new cultures, breathtaking landscapes,
                            and unforgettable memories. Every destination tells a unique story
                            waiting to be discovered.
                        </p>

                        <p>
                            From luxury accommodations to hidden natural wonders,
                            our blog is crafted to inspire your next journey and help you
                            explore the world in comfort and style.
                        </p>

                        <p>
                            Whether you're planning a relaxing getaway or an adventurous
                            escape, let us guide you through unforgettable experiences.
                        </p>

                    </div>

                </div>
            </section>
        </>
    );
}