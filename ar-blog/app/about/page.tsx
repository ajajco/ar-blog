import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرّف على مدونتي العربية ورسالتها في تقديم محتوى عربي متخصص وعالي الجودة للمهنيين العرب.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-black mb-4">من نحن</h1>
          <p className="text-emerald-200 text-lg leading-relaxed">
            مدونتي العربية — منصة للمعرفة المتخصصة باللغة العربية
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="prose-arabic space-y-8">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-2xl font-black text-[#0d3b25] mb-4">
              رسالتنا
            </h2>
            <p className="text-gray-600 leading-loose">
              نؤمن بأن المحتوى العربي المتخصص يستحق أن يكون في متناول كل مهني
              عربي طموح. لذا أسّسنا مدونتي العربية لتكون منارةً للمعرفة
              العملية في الأعمال والتقنية والتسويق الرقمي وريادة الأعمال.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "✍️",
                title: "محتوى أصيل",
                desc: "نكتب بأسلوب واضح وعملي يتيح للقارئ تطبيق ما يتعلمه فوراً.",
              },
              {
                icon: "🎯",
                title: "محتوى متخصص",
                desc: "نغطي الأعمال والتقنية والتسويق الرقمي والتجارة الإلكترونية بعمق.",
              },
              {
                icon: "🌍",
                title: "للعرب من العرب",
                desc: "نكتب بالعربية لأن المعرفة يجب أن تكون متاحة بلغتنا الأم.",
              },
              {
                icon: "📈",
                title: "دائم التطور",
                desc: "نواكب أحدث التوجهات والتطورات في عالم الأعمال والتكنولوجيا.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0d3b25] to-[#1a5c3a] text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black mb-3">
              ابدأ رحلتك المعرفية معنا
            </h2>
            <p className="text-emerald-200 mb-6">
              انضم إلى آلاف القراء العرب الذين يثقون بمحتوانا.
            </p>
            <Link
              href="/blog/"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-bold transition-colors inline-block"
            >
              تصفح المقالات ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
