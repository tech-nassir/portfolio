import React, { useState, useEffect } from 'react';
import pic2 from './assets/IMG-20250319-WA0001.jpg'
import pic3 from './assets/IMG-20250319-WA0002.jpg'
import pic4 from './assets/IMG-20250319-WA0000.jpg'
import pic5 from './assets/IMG-20250405-WA0023.jpg'
import pic6 from './assets/IMG-20250405-WA0024.jpg'
import pic7 from './assets/IMG-20250405-WA0028.jpg'
import pic8 from './assets/IMG-20250405-WA0029.jpg'
import pic9 from './assets/IMG-20240905-WA0020.jpg'



const slides = [
 {
 id: 1,
 text: '',
 bgColor: pic4, 
 },
 {
 id: 2,
 text: '',
 bgColor: pic2,
 },
 {
 id: 3,
 text: '',
 bgColor: pic8,
 },
 {
  id: 4,
  text: '',
  bgColor: pic9,
 },
  {
   id: 5,
   text: '',
   bgColor: pic5,
 }
];
function Carousel() {
 const [currentSlide, setCurrentSlide] = useState(0);
 // Automatically change slides every 3 seconds
 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentSlide((prevSlide) =>
 prevSlide === slides.length - 1 ? 0 : prevSlide + 1
 );
 }, 3000); // Change every 3 seconds
 return () => clearInterval(interval);
 }, []);
 return (
 <div className="relative w-full h-96 overflow-hidden">
 {slides.map((slide, index) => (
 <div
 key={slide.id}
 className={`${slide.bgColor} absolute flex justify-center bg-transparent inset-0 transition-opacity duration-700 ease-in-out
${index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
 <img src={slide.bgColor} className='w-3/5 absolute h-full'/>
 <div className="flex items-center justify-center pl-72 absolute h-full text-white text-2xl font-bold">
 {slide.text}
 </div>
 </div>
 ))}
 {/* Navigation Dots */}
 <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
 {slides.map((_, idx) => (
 <button
 key={idx}
 onClick={() => setCurrentSlide(idx)}
 className={`h-3 w-3 rounded-full ${currentSlide === idx ? 'bg-white' : 'bg-gray-400'}`}
 />
 ))}
 </div>
 </div>
 );
}
export default Carousel