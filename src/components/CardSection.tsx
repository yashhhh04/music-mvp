'use client'
import React from 'react'
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from "./ui/background-gradient";
import { p } from 'framer-motion/client';
interface Course{
id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}
function CardSection() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured);
  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className="text-center">
            <h2 className='text-base font-semibold text-teal-600 tracking-wide uppercase'>FEATURED COURSES</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-light text-white sm:text-4xl'>Learn With the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
{featuredCourses.map((course:Course)=>(
    <div key={course.id} className="flex justify-center">
<BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
        <Link href={`/courses/${course.slug}`} >Learn More</Link>
        </div></BackgroundGradient>
    </div>
))}
        </div>
      </div>
      <div className='text-center mt-20'
      >
        <Link href="/courses" className='inline-block bg-teal-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-teal-700 transition'>
          View All Courses
        </Link>
      </div>
    </div>
  )
}

export default CardSection
