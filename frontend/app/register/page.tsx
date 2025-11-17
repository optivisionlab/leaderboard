export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-custom-blue text-white">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">HaUI OptivisionLab</div>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-gray-300">Trang chủ</a>
              <a href="#" className="hover:text-gray-300">Cuộc thi</a>
              <a href="#" className="hover:text-gray-300">Bảng xếp hạng</a>
              <a href="/register" className="hover:text-gray-300">Đăng ký</a>
              <a href="#" className="hover:text-gray-300">Đăng nhập</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-10 bg-white text-black">
        <h1 className="text-4xl font-bold mb-6 text-center">Đăng ký tham gia</h1>
        <form className="max-w-4xl mx-auto">
          <div className="bg-highlight-blue p-6 rounded-lg mb-6 text-black">
            <h2 className="text-2xl font-bold mb-4">Thông tin đội</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Tên đội</label>
                <input type="text" name="teamName" id="teamName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email đăng nhập</label>
                <input type="email" name="loginEmail" id="loginEmail" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          <div className="bg-highlight-blue p-6 rounded-lg mb-6 text-black">
            <h2 className="text-2xl font-bold mb-4">Thông tin trưởng nhóm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="leaderName" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="leaderName" id="leaderName" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="leaderEmail" id="leaderEmail" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderPhone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="tel" name="leaderPhone" id="leaderPhone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderStudentId" className="block text-sm font-medium text-gray-700">Mã sinh viên</label>
                <input type="text" name="leaderStudentId" id="leaderStudentId" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderUniversity" className="block text-sm font-medium text-gray-700">Trường</label>
                <input type="text" name="leaderUniversity" id="leaderUniversity" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderMajor" className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
                <input type="text" name="leaderMajor" id="leaderMajor" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Thông tin thành viên 2</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="member2Name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="member2Name" id="member2Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member2Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="member2Email" id="member2Email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member2Phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="tel" name="member2Phone" id="member2Phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member2StudentId" className="block text-sm font-medium text-gray-700">Mã sinh viên</label>
                <input type="text" name="member2StudentId" id="member2StudentId" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member2University" className="block text-sm font-medium text-gray-700">Trường</label>
                <input type="text" name="member2University" id="member2University" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member2Major" className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
                <input type="text" name="member2Major" id="member2Major" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Thông tin thành viên 3</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="member3Name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="member3Name" id="member3Name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member3Email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="member3Email" id="member3Email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member3Phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="tel" name="member3Phone" id="member3Phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member3StudentId" className="block text-sm font-medium text-gray-700">Mã sinh viên</label>
                <input type="text" name="member3StudentId" id="member3StudentId" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member3University" className="block text-sm font-medium text-gray-700">Trường</label>
                <input type="text" name="member3University" id="member3University" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="member3Major" className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
                <input type="text" name="member3Major" id="member3Major" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-custom-blue hover:underline">Quay về đăng nhập</a>
            <button type="submit" className="bg-custom-blue hover:bg-custom-orange text-white font-bold py-2 px-6 rounded">
              Đăng ký tham gia
            </button>
          </div>
        </form>
      </main>

      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-3 text-center text-gray-400 text-sm">
          &copy; 2025 HaUI OptivisionLab. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
