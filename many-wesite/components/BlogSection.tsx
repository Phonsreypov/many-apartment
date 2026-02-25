import Image from "next/image";
import Link from "next/link";
import { blogList } from "@/configs/Data";

export default function BlogPage() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Latest News</h2>
          <p className="text-gray-500">
            Stay updated with our latest news, tips, and insights on travel and
            hospitality. Explore our blog for inspiring stories and expert
            advice to make your next trip unforgettable.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="relative h-[420px] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <span className="inline-block bg-[#C59D5F] text-xs px-3 py-1 uppercase tracking-widest mb-4">
                  {blog.category}
                </span>

                <h4 className="text-xl font-serif mb-3 group-hover:text-[#C59D5F] transition">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h4>

                <div className="text-sm text-gray-300">{blog.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Link
            href="/blog/1"
            className="inline-block px-10 py-3 border border-[#C59D5F] text-[#C59D5F] uppercase tracking-widest text-sm hover:bg-[#C59D5F] hover:text-white transition"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
}
