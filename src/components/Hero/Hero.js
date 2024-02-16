import React from 'react'
import './Hero.style.css';
import { SearchCar } from '../SearchCar/SearchCar';
import { Header } from '../Header/Header';

export const Hero = () => {
    return (
        <>
        <Header/>
        <section id="hero" class="hero">
            <div class="hero__container">
                <div class="hero__txt">
                    <h2>get your desired car in resonable price</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua.
                    </p>
                    <button class="hero__btn" onclick="window.location.href='#'">Contact us</button>
                </div>
            </div>
            <SearchCar/>
        </section>
        </>
    )
}
