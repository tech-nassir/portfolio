import { useState } from 'react';
import { NavLink, Link } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    resume: null,
    marriage: "",
    higher: "",
    region: "",
    religion: "",
    course: "",
    terms: "",
    info: "",
    payment: ""
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    console.log("Form Submitted", formData);
  };
  return (
    <div className="flex w-full bg-slate-100">
      <div className='sm:w-2/3 w-full flex h-auto mx-8 justify-center  bg-blue-50'>
        <div className="w-full sm:w-2/3 my-4 px-6 py-10 space-y-8 bg-white rounded-xl font-poppins shadow-xl">
          <h2 className="text-xl font-poppins text-center text-slate-800">
            Please Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-10 ">
            <div>
              <label
                htmlFor="fullName"
                className="block   sm:text-xs font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {formData.password !== formData.confirmPassword ? <p className='text-xs font-semibold  text-red-500 '>passwords do not match</p> : (formData.password || formData.confirmPassword === "" ) ? <p></p> : <p className='text-green-700 text-xs font-bold font-poppins'>acceptable password</p> }
            </div>
            <div>
              <label
                htmlFor="birthDate"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Select gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="marriage"
                className="block sm:text-xs font-medium text-gray-700"
              >
                marital status
              </label>
              <select
                id="marriage"
                name="marriage"
                value={formData.marriage}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>marital status</option>
                <option value="single">single</option>
                <option value="married">married</option>
                <option value="divorced">divorced</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="region"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Select Region:
              </label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Religion</option>
                <option value="male">Islam</option>
                <option value="female">Christian</option>
                <option value="other">other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="region"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Select region:
              </label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Region</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="education"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Select Your higher Education Level:
              </label>
              <select
                id="higher"
                name="higher"
                value={formData.higher}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select Higher Education Level</option>
                <option value="certificate">Certificate</option>
                <option value="diploma">Diploma</option>
                <option value="degree">Bachelor Degree</option>
                <option value="masters">Masters</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Upload Resume
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label
                htmlFor="course"
                className="block sm:text-xs font-medium text-gray-700"
              >
                add your course here
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="info"
                className="block sm:text-xs font-medium text-gray-700"
              >
                Where did you get information aout us:
              </label>
              <select
                id="info"
                name="info"
                value={formData.info}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select where you heard us</option>
                <option value="certificate">Social media</option>
                <option value="diploma">Friends</option>
                <option value="degree">Billboards</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="course"
                className="block sm:text-xs font-medium text-gray-700"
              >
                
              </label>
              <input
                type="number"
                id="payment"
                name="payment"
                placeholder='enter payment number here'
                value={formData.payment}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 sm:text-xs border border-gray-300 rounded-md
 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>
            <div>
              <div className="flex mb-2 items-center mx-1">
                <input type='checkbox' value={formData.terms} onChange={handleChange} className="focus: border border-slate-900 " /><p className="sm:text-xs text-sm">I agree with <Link className='underline'> terms and regulations</Link></p>
              </div>
              <button
                type="submit"
                className="w-full px-4 mb-4 hover:font-semibold py-3 text-white sm:text-xs bg-red-600 rounded-lg hover:bg-red-800
 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              >
                make payment
              </button>
              <button
                type="submit"
                className="w-full px-4 hover:font-semibold mb-4 py-3 text-white sm:text-xs bg-slate-800 rounded-lg hover:bg-slate-900
 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              >
                Register
              </button>
              <button
                type="submit"
                className="w-full px-4 hover:font-semibold py-3 mb-4 text-white sm:text-xs bg-yellow-500 rounded-lg hover:bg-yellow-600
 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
              >
                Read more
              </button>
              <button
                type="submit"
                className="w-full px-4 hover:font-semibold py-3 text-white sm:text-xs bg-slate-800 rounded-lg hover:bg-slate-900
 focus:outline-none focus:ring-2 focus:ring-slate-400 mb-4 focus:ring-opacity-50"
              >
                Contact Us
              </button>
            </div>
          </form>
          <p className="sm:text-sm  text-center text-gray-400 ">
            Already have an account?{"  "}
            <Link to="/login" className="text-slate-800 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className='sm:w-1/3 h- bg-slate-900'></div>
    </div>

  );
};

export default Register