"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu.");
    } else {
      setError("");
      // Xử lý logic đăng nhập ở đây
      alert("Đăng nhập thành công!");
    }
  };

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
              <a href="/login" className="hover:text-gray-300">Đăng nhập</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center bg-white text-black">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
            <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Đăng nhập
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Chưa có tài khoản? <a href="/register" className="text-custom-blue hover:underline">Đăng ký ngay</a>
            </p>
          </div>
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
