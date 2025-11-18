"use client";

import { useState } from "react";

export default function Register() {
  const [team, setTeam] = useState({ name: "", login_email: "" });
  const [leader, setLeader] = useState({ name: "", email: "", phone: "", student_id: "", university: "", major: "" });
  const [members, setMembers] = useState([{ name: "", email: "", phone: "", student_id: "", university: "", major: "" }, { name: "", email: "", phone: "", student_id: "", university: "", major: "" }]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: any }>({});

  const handleTeamChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleLeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeader({ ...leader, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [e.target.name]: e.target.value };
    setMembers(newMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Mật khẩu không khớp." });
      return;
    }

    const nonEmptyMembers = members.filter(member => Object.values(member).some(field => field !== ""));

    const payload = {
      team,
      leader,
      members: nonEmptyMembers,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Đăng ký thành công!");
      } else {
        const errorData = await response.json();
        alert(`Đăng ký thất bại: ${errorData.detail}`);
      }
    } catch (error) {
      alert("Đã xảy ra lỗi khi kết nối đến máy chủ.");
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

      <main className="flex-grow bg-white text-black">
        <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Đăng ký tham gia</h1>
        <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
          <div className="bg-light-red p-6 rounded-lg mb-6 text-black">
            <h2 className="text-2xl font-bold mb-4">Thông tin đội (Bắt buộc)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Tên đội</label>
                <input type="text" name="name" id="teamName" value={team.name} onChange={handleTeamChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email đăng nhập</label>
                <input type="email" name="login_email" id="loginEmail" value={team.login_email} onChange={handleTeamChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>

          <div className="bg-light-orange p-6 rounded-lg mb-6 text-black">
            <h2 className="text-2xl font-bold mb-4">Thông tin trưởng nhóm (Bắt buộc)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="leaderName" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="name" id="leaderName" value={leader.name} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="leaderEmail" value={leader.email} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderPhone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="tel" name="phone" id="leaderPhone" value={leader.phone} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderStudentId" className="block text-sm font-medium text-gray-700">Mã sinh viên</label>
                <input type="text" name="student_id" id="leaderStudentId" value={leader.student_id} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderUniversity" className="block text-sm font-medium text-gray-700">Trường</label>
                <input type="text" name="university" id="leaderUniversity" value={leader.university} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="leaderMajor" className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
                <input type="text" name="major" id="leaderMajor" value={leader.major} onChange={handleLeaderChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {[...Array(2)].map((_, index) => (
            <div className="bg-gray-100 p-6 rounded-lg mb-6" key={index}>
              <h2 className="text-2xl font-bold mb-4">Thông tin thành viên {index + 2} (Tùy chọn)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`memberName${index}`} className="block text-sm font-medium text-gray-700">Họ và tên</label>
                  <input type="text" name="name" id={`memberName${index}`} value={members[index].name} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor={`memberEmail${index}`} className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id={`memberEmail${index}`} value={members[index].email} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor={`memberPhone${index}`} className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                  <input type="tel" name="phone" id={`memberPhone${index}`} value={members[index].phone} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor={`memberStudentId${index}`} className="block text-sm font-medium text-gray-700">Mã sinh viên</label>
                  <input type="text" name="student_id" id={`memberStudentId${index}`} value={members[index].student_id} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor={`memberUniversity${index}`} className="block text-sm font-medium text-gray-700">Trường</label>
                  <input type="text" name="university" id={`memberUniversity${index}`} value={members[index].university} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor={`memberMajor${index}`} className="block text-sm font-medium text-gray-700">Chuyên ngành</label>
                  <input type="text" name="major" id={`memberMajor${index}`} value={members[index].major} onChange={(e) => handleMemberChange(index, e)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <a href="/login" className="text-sm text-custom-blue hover:underline">Quay về đăng nhập</a>
            <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 rounded">
              Đăng ký tham gia
            </button>
          </div>
        </form>
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
