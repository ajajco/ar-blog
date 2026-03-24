import { posts, categories } from "@/data/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = decodeURIComponent(params.slug);

  if (!categories.includes(category)) {
    return notFound();
  }

  const filteredPosts = posts.filter(
    (post) => post.category === category
  );

  return (
    <>
      <section className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            {category}
          </h1>
          <p className="text-emerald-200 text-base">
            جميع المقالات في تصنيف "{category}"
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-sm bg-gray-100"
          >
            الكل ({posts.length})
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${encodeURIComponent(cat)}`}
              className={`px-4 py-1.5 rounded-full text-sm ${
                cat === category
                  ? "bg-[#0d3b25] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}