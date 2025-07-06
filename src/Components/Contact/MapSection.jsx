import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* Google Map */}
      <iframe
        title="O2Fitness Location"
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3038316575093!2d77.1180873!3d11.1215099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba90fd1c34f0aaf%3A0x3f9e9deaf1b35b63!2sO2Fitness%20Health%20Care!5e0!3m2!1sen!2sin!4v1718012345678"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Overlay cards */}
      <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4 w-80 space-y-1">
        <div className="flex items-center space-x-2">
          <MapPin className="text-green-600" size={20} />
          <h3 className="font-bold">Head office</h3>
        </div>
        <p className="text-sm text-gray-700">O2FITNESS HEALTH CARE</p>
        <p className="text-sm text-gray-600">
          NO:202, Ganapathy colony, 7th cross street, Nanthapakkam 89<br />
          Chennai - 638009
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="text-green-600" size={16} />
          <span>6380097315, 9750059375</span>
        </div>
      </div>

      <div className="relative z-10 top-44 left-6 bg-white rounded-lg shadow-lg p-4 w-80 space-y-1 mt-7">
        <div className="flex items-center space-x-2">
          <MapPin className="text-orange-600" size={20} />
          <h3 className="font-bold">Branch office</h3>
        </div>
        <p className="text-sm text-gray-700">O2FITNESS HEALTH CARE</p>
        <p className="text-sm text-gray-600">
          N-48, Kadarshkhan street, Near Thirumal blood lab, junction (opp) Suramangalam<br />
          Salem - 636005
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="text-orange-600" size={16} />
          <span>6380097315, 9750059375</span>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
