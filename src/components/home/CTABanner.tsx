export function CTABanner() {
  return (
    <section className="py-10 pb-24 lg:py-16 lg:pb-16 px-4 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-[1400px] mx-auto text-center text-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">
          정비소 사장님이신가요?
        </h2>
        <p className="text-blue-100 mb-6">
          오토호스 정비 프로그램으로 고객 관리를 더 쉽게
        </p>
        <a
          href="https://autohos.imweb.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
        >
          오토호스 프로그램 알아보기
        </a>
      </div>
    </section>
  );
}
