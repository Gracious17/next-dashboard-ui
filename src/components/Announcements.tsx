import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold ">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* 1st Announcement */}
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1  ">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            architecto recusandae sapiente, iure iste magnam.
          </p>
        </div>
        {/* 2nd Announcement */}
        <div className="bg-lamaPurple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1  ">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quasi voluptas nam consectetur, veniam eaque soluta vero.
          </p>
        </div>
        {/* 3rd Announcement */}
        <div className="bg-kingsRed rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1  ">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero earum
            molestias rem obcaecati corrupti nam quasi qui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
