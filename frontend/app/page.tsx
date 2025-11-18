import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-custom-blue text-white">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">HaUI OptivisionLab</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Trang chủ</a>
              <a href="#" className="hover:text-gray-300">Cuộc thi</a>
              <a href="#" className="hover:text-gray-300">Bảng xếp hạng</a>
              <a href="/register" className="hover:text-gray-300">Đăng ký</a>
              <a href="/login" className="hover:text-gray-300">Đăng nhập</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow bg-white text-black">
        <div className="container mx-auto px-6 py-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-3">Chào mừng đến với HaUI OptivisionLab</h1>
          <p className="text-base text-gray-600">
            Nơi quy tụ những tài năng trẻ đam mê Trí tuệ nhân tạo và Thị giác máy tính.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Các cuộc thi đang diễn ra</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="text-lg font-bold mb-2">Cuộc thi 1</h3>
              <p className="text-sm text-gray-600">Mô tả ngắn về cuộc thi 1. Thử thách, giải thưởng và thời gian diễn ra.</p>
              <a href="#" className="mt-4 inline-block bg-custom-blue hover:bg-custom-orange text-white font-bold py-2 px-4 rounded text-sm">
                Tham gia ngay
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="text-lg font-bold mb-2">Cuộc thi 2</h3>
              <p className="text-sm text-gray-600">Mô tả ngắn về cuộc thi 2. Thử thách, giải thưởng và thời gian diễn ra.</p>
              <a href="#" className="mt-4 inline-block bg-custom-blue hover:bg-custom-orange text-white font-bold py-2 px-4 rounded text-sm">
                Tham gia ngay
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-5">
              <h3 className="text-lg font-bold mb-2">Cuộc thi 3</h3>
              <p className="text-sm text-gray-600">Mô tả ngắn về cuộc thi 3. Thử thách, giải thưởng và thời gian diễn ra.</p>
              <a href="#" className="mt-4 inline-block bg-custom-blue hover:bg-custom-orange text-white font-bold py-2 px-4 rounded text-sm">
                Tham gia ngay
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-3 text-center text-gray-400 text-sm">
          &copy; 2025 HaUI OptivisionLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
