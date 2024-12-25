'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Correct hook for Next.js 13 App Router

// Type for Menu Item
type MenuItem = {
  label: string;
  iconPath: string;
  notification?: number;
  link?: string;
};

const menuItems: MenuItem[] = [
  { label: 'Dashboard', iconPath: '/icons/dashboard.svg', link: "/dashboard" },
  { label: 'Subjects', iconPath: '/icons/subjects.svg', link: "/subjects" },
  { label: 'Resources', iconPath: '/icons/resources.svg', link: "/resources" },
  { label: 'Timetable', iconPath: '/icons/timetable.svg', link: "/timetable" },
  { label: 'Attendance', iconPath: '/icons/attendance.svg', link: "/attendance" },
  { label: 'Results', iconPath: '/icons/results.svg', link: "/results" },
  { label: 'Messages', iconPath: '/icons/messages.svg', link: "/messages", notification: 5 },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname(); // usePathname is the correct hook for App Router
  
  return (
    <div className=" w-[266px] font-manrope px-4  pb-4 bg-[#FBFBFB] flex flex-col justify-between border-r">
      {/* Header */}
      <div>
        <div className="flex items-center ">
          <div className="text-white p-3 rounded-lg">
            <Image src="/icons/talim.svg" alt="School" width={44.29} height={43.23} />
          </div>
          <span className="ml-2 text-lg font-semibold text-[#030E18]">Talim</span>
        </div>
        <div className="mb-4 border-b border-2 border-solid border-[#F1F1F1] -mx-4"></div>

        {/* School Selector */}
        <div className="flex items-center px-2 py-3 border-2 border-solid border-[#F1F1F1] bg-[#FBFBFB] rounded-md mb-4">
          <Image src="/unity.png" alt="School" width={40} height={40} />
          <span className="ml-2 font-medium text-base text-gray-700">Unity Secondary S...</span>
        </div>

        {/* Menu Items */}
        <nav>
          <ul>
            {menuItems.map((item) => {
              const isActive = pathname === item.link; // Check if the current pathname matches the link

              return (
                <li key={item.label} className="mb-4">
                  <Link href={item.link || '#'}>
                    <div
                      className={`flex items-center px-3 py-2 rounded-md cursor-pointer ${
                        isActive
                          ? 'bg-[#003366] bg-opacity-25 text-[#003366]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Image src={item.iconPath} alt={item.label} width={20} height={20} />
                      <span className="font-manrope text-base ml-3 font-medium">{item.label}</span>
                      {item.notification && (
                        <span className="ml-auto bg-blue-900 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                          {item.notification}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Logout */}
      <div>
        <div className="mb-4 border-b border-2 border-solid border-[#F1F1F1] -mx-4"></div>

        <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
          <Image src="/icons/logout.svg" alt="Logout" width={18} height={20} />
          <span className="ml-3 font-medium">Logout Account</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
