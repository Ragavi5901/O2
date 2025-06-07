import React from 'react'

const WhyChoose = () => {
  return (
    <div className="bg-white">
      {/* Title + Subtitle + Paragraph */}
      <div className="px-4 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Why Choose O2 Fitness Healthcare</h1>
          <h3 className="text-sm font-medium text-gray-800 mb-6 mt-5">
            Expertly engineered wellness solutions backed by trust, technology, and care.
          </h3>
          <p className="text-base text-gray-700 leading-loose mb-1">
            At O2 Fitness Healthcare, we go beyond just selling products — we deliver wellness
            experiences. Our massage chairs and fitness solutions are crafted using intelligent
            technology, quality materials, and decades of industry insight. With nationwide service,
            free delivery, and a customer-first approach, we’re committed to helping you feel better,
            move better, and live better — every single day.
          </p>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="px-4 pb-12 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Gradient Border Wrapper */}
          <div className="p-[2px] rounded-lg bg-gradient-to-r from-orange-400 to-blue-400">
            {/* Inner White Card Container */}
            <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row items-stretch justify-between relative">
              
              {/* Card 1 */}
              <div className="relative flex-1 px-6 py-6 text-left">
                <h4 className="text-lg font-bold mb-2">Advanced Technology</h4>
                <p className="text-sm text-gray-700">
                  Experience 3D, 4D, and 6D massage systems, Zero Gravity, heat therapy, and AI body scan features.
                </p>
              </div>

              {/* Divider 1 */}
              <div className="hidden md:flex items-center">
                <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 via-gray-400 to-blue-300"></div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 px-6 py-6 text-left">
                <h4 className="text-lg font-bold mb-2">Free Delivery & Service</h4>
                <p className="text-sm text-gray-700">
                  Enjoy doorstep delivery and after-sales service in major cities at no extra cost.
                </p>
              </div>

              {/* Divider 2 */}
              <div className="hidden md:flex items-center">
                <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 via-gray-400 to-blue-300"></div>
              </div>

              {/* Card 3 */}
              <div className="flex-1 px-6 py-6 text-left">
                <h4 className="text-lg font-bold mb-2">1-Year Guarantee + 2-Year Warranty</h4>
                <p className="text-sm text-gray-700">
                  Buy with confidence knowing your comfort is protected long after your purchase.
                </p>
              </div>

              {/* Divider 3 */}
              <div className="hidden md:flex items-center">
                <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 via-gray-400 to-blue-300"></div>
              </div>

              {/* Card 4 */}
              <div className="relative flex-1 px-6 py-6 text-left">
                <h4 className="text-lg font-bold mb-2">Free Door Delivery Across India</h4>
                <p className="text-sm text-gray-700">
                  Enjoy fast and reliable delivery at no extra cost.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose