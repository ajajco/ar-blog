import { posts } from "@/data/posts";
import PostCard from "@/components/PostCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filteredPosts =
    slug === "all"
      ? posts
      : posts.filter((post) => post.category === slug);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-6">
        {slug === "all" ? "جميع المقالات" : `تصنيف: ${slug}`}
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">لا توجد مقالات في هذا التصنيف</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}