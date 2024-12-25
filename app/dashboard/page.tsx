"use client"

import { Search, Bell } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MetricCard } from "@/components/metric-card"
import { ScheduleTimeline } from "@/components/schedule-timeline"
import Layout from '@/components/Layout'
import Image from 'next/image';
import { Header } from '@/components/header'
const schedule = [
  { subject: "Mathematics", startTime: "08:00", endTime: "10:00" },
  { subject: "Civic Education", startTime: "10:00", endTime: "11:00" },
  { subject: "C.R.S", startTime: "11:00", endTime: "12:00" },
  { subject: "BREAK - TIME", startTime: "12:00", endTime: "01:00" },
  { subject: "English language", startTime: "01:00", endTime: "02:00" },
]

const metrics = {
  subjects: 15,
  gradeScore: 85,
  attendancePercentage: 95,
}

export default function DashboardPage() {
  return (
    <Layout>
      <div className="relative w-full h-full bg-[#F8F8F8] px-4 overflow-hidden">
        <div className="  h-full mx-auto flex flex-col space-y-5 2xl:space-y-8">
          {/* Header */}
          <Header/>
          {/* Overview */}
          <div className="flex-grow ">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <MetricCard
                icon={<Image src="/icons/dashboard/subject.svg" width={52} height={52} alt="Subjects Icon" className="h-[52px] w-[52px]" />}
                value={metrics.subjects}
                label="Subjects Enrolled"
              />
              <MetricCard
                icon={<img src="/icons/dashboard/award.svg" alt="Award Icon" className="h-[52px] w-[52px]" />}
                value={`${metrics.gradeScore}%`}
                label="Grade Score"
              />
              <MetricCard
                icon={<img src="/icons/dashboard/calendar.svg" alt="Award Icon" className="h-[52px] w-[52px]" />}
                value={`${metrics.attendancePercentage}%`}
                label="Attendance Percentage"
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="flex-grow">
            <ScheduleTimeline schedule={schedule} currentTime="9:12" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
