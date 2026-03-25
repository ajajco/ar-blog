import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filteredPosts =
    category && category !== "all"
      ? posts.filter((post) => post.category === category)
      : posts;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-6">
        {category ? `تصنيف: ${category}` : "جميع المقالات"}
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">لا توجد مقالات</p>
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