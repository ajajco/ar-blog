import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black mb-4">{post.title}</h1>

      <div className="text-gray-500 text-sm mb-6">
        {post.date} • {post.readingTime} دقائق
      </div>

      <div className="prose-arabic">
        {post.content}
      </div>
    </article>
  );
}