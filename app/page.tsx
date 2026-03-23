import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "مدونتي العربية | الرئيسية",
  description:
    "مدونة عربية متخصصة في الأعمال، التقنية، التسويق الرقمي، وريادة الأعمال. اكتشف مقالات عميقة ومفيدة.",
};

export default function HomePage() {
  const featured = posts.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-[#0d3b25] via-[#1a5c3a] to-[#0d3b25] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-sm px-4 py-1.5 rounded-full mb-8">
            ✨ مدونة عربية للمحترفين
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            معرفة تبني{" "}
            <span className="text-[#f5c842]">مستقبلك المهني</span>
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            مقالات عميقة ومدروسة في الأعمال، التقنية، التسويق الرقمي، وريادة
            الأعمال — بالعربية وللعرب.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-bold text-base transition-colors inline-flex items-center gap-2 justify-center"
            >
              ← استكشف المقالات
            </Link>
            <Link
              href="/about/"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-xl font-bold text-base transition-colors inline-flex items-center justify-center"
            >
              تعرّف علينا
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 divide-x divide-x-reverse divide-gray-200 text-center">
            <div className="px-8">
              <div className="text-3xl font-black text-[#0d3b25]">٦</div>
              <div className="text-sm text-gray-500 mt-1">تصنيفات</div>
            </div>
            <div className="px-8">
              <div className="text-3xl font-black text-[#0d3b25]">+٥٠٠٠</div>
              <div className="text-sm text-gray-500 mt-1">قارئ شهرياً</div>
            </div>
            <div className="px-8">
              <div className="text-3xl font-black text-[#0d3b25]">+٦٠</div>
              <div className="text-sm text-gray-500 mt-1">مقالات تُشرت</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              أحدث المقالات
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              محتوى حديث ومفيد لمسيرتك المهنية
            </p>
          </div>
          <Link
            href="/blog/"
            className="text-emerald-700 hover:text-emerald-900 text-sm font-semibold border border-emerald-200 hover:border-emerald-400 px-4 py-2 rounded-lg transition-colors"
          >
            عرض الكل ←
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-3">
            اشترك في النشرة البريدية
          </h2>
          <p className="text-emerald-200 mb-8 text-sm">
            احصل على أفضل المقالات مباشرةً في بريدك الإلكتروني كل أسبوع.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
