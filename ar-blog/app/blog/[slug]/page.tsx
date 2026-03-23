import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = post.sections.map((s) => s.heading);

  return (
    <>
      <section
        className={`bg-gradient-to-br ${post.gradient} text-white py-16 px-4`}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            العودة إلى المدونة →
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-5xl">{post.emoji}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/80 text-base mb-6 leading-relaxed max-w-2xl">
            {post.description}
          </p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <span>👤 {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readingTime} دقائق للقراءة</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-sm">
                في هذا المقال
              </h3>
              <nav className="space-y-2">
                {toc.map((heading) => (
                  <a
                    key={heading}
                    href={`#${heading}`}
                    className="block text-sm text-emerald-700 hover:text-emerald-900 hover:underline leading-snug py-0.5"
                  >
                    {heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-3 prose-arabic">
            {post.sections.map((section) => (
              <div key={section.heading} id={section.heading} className="mb-8">
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-emerald-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-gray-900 text-base">
                    أعجبك هذا المقال؟
                  </p>
                  <p className="text-gray-500 text-sm">
                    اكتشف المزيد من المقالات المفيدة في مدونتنا.
                  </p>
                </div>
                <Link
                  href="/blog/"
                  className="bg-[#0d3b25] hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-colors"
                >
                  ← تصفح المزيد
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
