import React from 'react'

const timelineData = [
  {
    number: "01",
    color: "bg-orange-500",
    topText: ["Brand founded", "in Chennai"],
    bottomText: [],
  },
  {
    number: "02",
    color: "bg-sky-500",
    topText: [],
    bottomText: ["Expanded to", "Salem"],
  },
  {
    number: "03",
    color: "bg-orange-500",
    topText: ["Crossed 10,000+", "chairs sold"],
    bottomText: [],
  },
  {
    number: "04",
    color: "bg-sky-500",
    topText: [],
    bottomText: ["Launched smart", "fitness accessories"],
  },
];

const OurJourny = () => {
  return (
    <div className="w-full bg-white">
      {/* Our Journey Text Section */}
      <div className="text-center px-4 md:px-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Our Journey</h1>
        <p className="text-gray-600 mt-4 leading-loose py-5">
          O2 Fitness Healthcare began with a simple goal — to bring wellness closer to people’s lives.
          What started as a small initiative in Chennai has now grown into a trusted brand serving
          thousands across India. Over the years, we’ve introduced smart massage chairs, leg massagers,
          and fitness tools designed to relieve pain, reduce stress, and improve everyday comfort.
          With each milestone, we’ve stayed committed to innovation, customer care, and making wellness
          accessible to every home, clinic, and office. Our journey is still unfolding — and we’re
          proud to grow with the people we serve.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
        {/* Horizontal line for large screens */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-black z-0"></div>

        {/* Vertical line for mobile screens */}
        <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-black z-0"></div>

        <div className="flex md:flex-row flex-col md:justify-between items-center relative z-10 h-full">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:w-1/4 w-full mb-12 md:mb-0 items-center md:items-center text-center md:text-center relative`}
            >
              {/* Top Text for even index (1, 3) on mobile align left */}
              {item.topText.length > 0 && (
                <div className={`mb-4 text-sm text-black md:text-center text-left w-full md:w-auto ${index % 2 === 0 ? 'pr-1' : 'pl-1'} md:pl-0 md:pr-0`}>
                  {item.topText.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}

              {/* Number Box */}
              <div
                className={`text-white px-4 py-2 rounded-md font-bold ${item.color} z-10`}
                style={{ transform: "translateY(-50%)" }}
              >
                {item.number}
              </div>

              {/* Bottom Text for odd index (2, 4) on mobile align right */}
              {item.bottomText.length > 0 && (
                <div className={`mt-7 text-sm text-black md:text-center text-right w-full md:w-auto ${index % 2 === 0 ? 'pr-4' : 'pl-4'} md:pl-0 md:pr-0`}>
                  {item.bottomText.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurJourny