"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { posts, categories } from "@/data/posts";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "جميع المقالات | مدونتي العربية",
  description:
    "تصفّح أفضل المقالات العربية في الأعمال، التقنية، التسويق الرقمي وريادة الأعمال.",
  keywords: [
    "مدونة عربية",
    "التسويق الرقمي",
    "ريادة الأعمال",
    "تقنية",
    "CRM",
  ],
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  // فلترة حسب التصنيف
  const filteredPosts =
    activeCategory === "الكل"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  // فلترة حسب البحث
  const finalPosts = filteredPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-300 text-sm mb-3">
            <span>📖</span>
            <span>جميع المقالات</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black mb-3">
            مكتبة المحتوى العربي
          </h1>

          <p className="text-emerald-200 text-base">
            مقالات شاملة ومعمّقة تتناول أهم المواضيع في عالم الأعمال والتقنية الحديثة.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        
        {/* 🔍 البحث */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="ابحث عن مقال..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* 🏷️ التصنيفات */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <span className="text-gray-500 text-sm ml-2">
            تصفية حسب التصنيف:
          </span>

          {categories.map((cat) => {
            const count =
              cat === "الكل"
                ? posts.length
                : posts.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#0d3b25] text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-800"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* 📄 المقالات */}
        {finalPosts.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            لا توجد نتائج مطابقة 😅
          </p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {finalPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </>
  );
}