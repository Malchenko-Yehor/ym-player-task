import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from 'store/actions'

import 'swiper/swiper.scss';
import './SongsSlider.scss';

const SongsSlider = () => {
  const dispatch = useDispatch();
  const [swiperInstance, setSwiper] = useState(null);
  const currentSongIndex = useSelector(state => state.currentSongIndex);
  const songs = useSelector(state => state.songs);
  const slides = createSlides(songs);

  useEffect(() => {
    if (swiperInstance && swiperInstance.realIndex !== currentSongIndex) {
      swiperInstance.slideTo(currentSongIndex);
    }
  }, [currentSongIndex, swiperInstance])

  return (
    <div className="songs-slider">
      {songs.length &&
        <Swiper
          slidesPerView="auto"
          speed={500}
          centeredSlides={true}
          onSlideChange={swiper => dispatch(setCurrentSong(swiper.realIndex))}
          onSwiper={swiper => setSwiper(swiper)}
        >
          {slides}
        </Swiper>
      }
    </div>

  );
};

const createSlides = (songs) => {
  return songs.map((song, index) => (
    <SwiperSlide key={index}>
      <img className="songs-slider__cover" src={song.coverUrl} alt={`${song.name} cover`} />
    </SwiperSlide>
  ));
};

export default SongsSlider;