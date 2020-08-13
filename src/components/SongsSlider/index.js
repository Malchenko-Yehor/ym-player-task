import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../../store/actions'

import 'swiper/swiper.scss';
import './SongsSlider.scss';

const SongsSlider = () => {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);
  const slides = createSlides(songs);

  return (
    <div className="songs-slider">
      {songs.length &&
        <Swiper
          slidesPerView="auto"
          speed={500}
          loop={true}
          centeredSlides={true}
          onSlideChange={swiper => dispatch(setCurrentSong(swiper.realIndex))}
          onSwiper={(swiper) => console.log(swiper)}
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