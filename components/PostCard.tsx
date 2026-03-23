import Link from "next/link";
import type { Post } from "@/data/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}/`} className="group block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group-hover:-translate-y-1">
        <div
          className={`h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}
        >
          <span className="text-6xl opacity-80">{post.emoji}</span>
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{post.author}</span>
            <div className="flex items-center gap-3">
              <span>{post.date}</span>
              <span>{post.readingTime} دقائق</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
