import PostCard from "@/components/PostCard";
import { posts, categories } from "@/data/posts";
import Link from "next/link";

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category || "الكل";

  const filteredPosts =
    activeCategory === "الكل"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            مكتبة المحتوى العربي
          </h1>
          <p className="text-emerald-200 text-base">
            تصفّح المقالات حسب التصنيف — تجربة احترافية وسريعة
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <span className="text-gray-500 text-sm ml-2">
            تصفية حسب التصنيف:
          </span>

          {categories.map((cat) => {
            const count =
              cat === "الكل"
                ? posts.length
                : posts.filter((p) => p.category === cat).length;

            return (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0d3b25] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                {cat} ({count})
              </Link>
            );
          })}
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              لا توجد مقالات في هذا التصنيف حالياً
            </p>
          )}
        </div>
      </section>
    </>
  );
}