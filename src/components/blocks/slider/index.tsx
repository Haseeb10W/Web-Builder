"use client";

import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import React, { memo } from 'react'
import { blockProps } from '@/types/blocksSchema';

interface SlideData {
  id: number;
  content: string;
}

const slides: SlideData[] = [
  { id: 1, content: 'Slide 1' },
  { id: 2, content: 'Slide 2' },
  { id: 3, content: 'Slide 3' },
];


function Slider({block, index, onDelete, onCopy}:blockProps) {

  

  return (
    
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {
      slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ padding: '20px', background: '#f0f0f0' }}>
            <h2>{slide.content}</h2>
            <p>This is dynamic content for slide #{slide.id}</p>
          </div>
        </SwiperSlide>
      ))
      }
    </Swiper>

  )
}

export default React.memo(Slider)