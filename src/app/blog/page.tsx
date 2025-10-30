import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Miller Design Dubai - Branding & Design Insights",
  description: "Expert insights on branding, design, and marketing from Dubai's leading creative agency. Learn how to build memorable brand identities in the UAE market.",
  keywords: "branding Dubai, brand identity Dubai, design agency UAE, creative agency Dubai, marketing insights",
  openGraph: {
    title: "Blog | Miller Design Dubai - Branding & Design Insights",
    description: "Expert insights on branding, design, and marketing from Dubai's leading creative agency.",
    type: "website",
  },
};

export default function BlogPage() {
  const articles = [
    {
      slug: "build-memorable-brand-identity-dubai",
      title: "How to Build a Memorable Brand Identity in Dubai's Competitive Market",
      excerpt: "In a city as fast-paced and visually driven as Dubai, your brand identity isn't just a logo, it's your reputation, your promise, and your first impression.",
      date: "2025-10-30",
      category: "Branding",
      readTime: "8 min read",
    },
  ];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#04b9d6] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#04b9d6] rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-section relative z-10">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Expert perspectives on branding, design, and creativity from Dubai&apos;s leading design agency.
            </p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#04b9d6] to-transparent"></div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#04b9d6]/20 hover:-translate-y-1"
              >
                {/* Card Header with colored bar */}
                <div className="h-2 bg-gradient-to-r from-[#04b9d6] to-[#0396b5]"></div>

                <div className="p-8">
                  {/* Meta information */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-[#04b9d6] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#04b9d6] transition-colors min-h-[4rem]">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-[#04b9d6] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                      Read Article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state message for future articles */}
          {articles.length === 1 && (
            <div className="text-center mt-16 max-w-2xl mx-auto">
              <p className="text-gray-500 text-lg">
                More insights coming soon. Stay tuned for expert tips on branding, design, and growing your business in Dubai.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
