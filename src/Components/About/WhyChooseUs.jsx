import React from 'react'
import QuestionMarkImage from '../../assets/About/QuestionMark.jpg'

const WhyChooseUs = () => {
  const features = [
  { text: "Free Door Delivery", color: "bg-orange-500", x: "left-0", y: "top-0" },
  { text: "1-Year Guarantee + 2-Year Warranty", color: "bg-sky-500", x: "left-[10%]", y: "top-[25%]" },
  { text: "Pan-India Support", color: "bg-orange-500", x: "left-[25%]", y: "top-[55%]" },
  { text: "Premium 3D/AI/SD Massage Technology", color: "bg-orange-500", x: "right-[25%]", y: "top-[55%]" },
  { text: "Designed for Total Body Relief", color: "bg-sky-500", x: "right-[10%]", y: "top-[25%]" },
  { text: "Trusted by 10,000+ Customers", color: "bg-orange-500", x: "right-0", y: "top-0" },
];
  return (
    <section className="w-full bg-white py-12 px-4 md:px-20">
      {/* Title & Paragraph */}
      <div className="text-left mb-12 max-w-5xl">
        <h2 className="text-4xl md:text-4xl font-bold text-black mb-4">Why Choose Us</h2>
        <p className="text-gray-700 text-lg leading-loose">
          At O2 Fitness Healthcare, we combine advanced massage technology with reliable service to bring wellness into your daily routine. 
          From premium 3D and 4D massage chairs to compact leg massagers and fitness accessories, every product is designed with care, 
          comfort, and effectiveness in mind. We offer free doorstep delivery, dedicated customer support, and a strong warranty — 
          so you can experience relaxation without worry. With thousands of satisfied customers across India, we are proud to be a 
          trusted name in wellness and recovery.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center">
      {/* Center Title */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-4xl font-bold">Why<br />Choose<br />Us</h2>
      </div>

      {/* SVG Half-Circle Path with Dots */}
      <svg
  viewBox="0 0 500 250"
  className="absolute w-full h-full"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Arch Path (on top) */}
  <path
    d="M 50 50 Q 250 200 450 50"
    stroke="#f97316"
    strokeWidth="4"
    fill="transparent"
  />
  {/* Dots along the arch path */}
  {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t, i) => {
    const x = 50 * (1 - t) ** 2 + 2 * 250 * t * (1 - t) + 450 * t ** 2;
    const y = 50 * (1 - t) ** 2 + 2 * 200 * t * (1 - t) + 50 * t ** 2;
    return <circle key={i} cx={x} cy={y} r="6" fill="#f97316" />;
  })}
</svg>

      {/* Feature Cards */}
      {features.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.x} ${item.y} px-4 py-2 text-white text-sm rounded-md shadow-md ${item.color}`}
        >
          {item.text}
        </div>
      ))}
    </div>
    </section>
  )
}

export default WhyChooseUs