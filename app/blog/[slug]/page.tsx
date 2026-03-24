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

  // تحقق من وجود التصنيف
  if (!categories.includes(category)) {
    return notFound();
  }

  const filteredPosts = posts.filter(
    (post) => post.category === category
  );

  return (
    <>
      {/* Header */}
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

      {/* Categories navigation */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className="px-4 py-1.5 rounded-full text-sm bg-gray-100 hover:bg-gray-200"
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
                  : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              لا توجد مقالات في هذا التصنيف
            </p>
          )}
        </div>
      </section>
    </>
  );
}