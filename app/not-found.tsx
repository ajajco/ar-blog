import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-4xl font-black text-[#0d3b25] mb-3">
          الصفحة غير موجودة
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          يبدو أن الصفحة التي تبحث عنها قد نُقلت أو حُذفت أو لم تكن موجودة
          أصلاً.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#0d3b25] hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            الرئيسية
          </Link>
          <Link
            href="/blog/"
            className="border border-[#0d3b25] text-[#0d3b25] hover:bg-emerald-50 px-6 py-3 rounded-xl font-bold transition-colors"
          >
            المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
