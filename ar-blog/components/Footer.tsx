import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d3b25] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold mb-3">
              <span className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                📖
              </span>
              <span>مدونتي العربية</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              مدونة عربية متخصصة في الأعمال والتقنية والتسويق الرقمي. محتوى
              عميق وعملي للمهنيين العرب.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-emerald-300">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  className="hover:text-white transition-colors"
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  href="/about/"
                  className="hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-emerald-300">التصنيفات</h3>
            <ul className="space-y-2 text-sm text-emerald-200">
              <li>تقنية الأعمال</li>
              <li>التسويق الرقمي</li>
              <li>التجارة الإلكترونية</li>
              <li>إدارة الأعمال</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-800 pt-6 text-center text-sm text-emerald-400">
          <p>© 2024 مدونتي العربية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
