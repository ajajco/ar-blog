"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="بريدك الإلكتروني"
        className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm outline-none"
      />
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap"
      >
        اشترك الآن
      </button>
    </form>
  );
}
