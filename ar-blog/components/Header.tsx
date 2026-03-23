import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0d3b25] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="bg-emerald-500 text-white w-9 h-9 rounded-lg flex items-center justify-center text-base">
            📖
          </span>
          <span>مدونتي العربية</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-300 transition-colors">
            الرئيسية
          </Link>
          <Link
            href="/blog/"
            className="hover:text-emerald-300 transition-colors"
          >
            المدونة
          </Link>
          <Link
            href="/about/"
            className="hover:text-emerald-300 transition-colors"
          >
            من نحن
          </Link>
        </nav>

        <Link
          href="/blog/"
          className="bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          اقرأ المدونة
        </Link>
      </div>
    </header>
  );
}
