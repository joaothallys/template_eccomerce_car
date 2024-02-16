import React from 'react'
import fc1 from '../assets/fc1.png';
import fc2 from '../assets/fc2.png';
import fc3 from '../assets/fc3.png';
import fc4 from '../assets/fc4.png';
import fc5 from '../assets/fc5.png';
import fc7 from '../assets/fc7.png';
import fc8 from '../assets/fc8.png';
import './FeaturedCars.style.css';
import Box from '@mui/material/Box';


export const FeaturedCars = () => {
    const cars = [{ title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc1 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc2 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc3 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc4 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc5 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc7 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc7 },
    { title: "BMW 6-Series Gran Coupe", prize: "$89,395", year: "2017", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: fc8 }]
    const FeaturedCar = ({ car }) => {
        return (
            <Box >
                <div class="featured-car">
                    <div class="featured-car__box">
                        <div class="featured-car__img">
                            <img src={car.image} />
                        </div>
                        <div class="featured-car__info">
                            <p>
                                {car.year}
                                <span class="featured-car__mi-span"> 3100 mi</span>
                                <span class="featured-car__hp-span"> 240HP</span>
                                automatic
                            </p>
                        </div>
                    </div>
                    <div class="featured-car__txt">
                        <h2><a href="#">{car.model}</a></h2>
                        <h3>   {car.prize}</h3>
                        <p>
                            {car.pretitle}
                        </p>
                    </div>
                </div>
            </Box>

        )

    }
    return (
        <section id="featured-cars" class="featured-cars">
            <div class="featured-cars__container">
                <div class="featured-cars__header">
                    <h2>Checkout <span>the</span> featured cars</h2>
                    <p>featured cars</p>
                </div>
                <div class="featured-cars__content">
                    <Box sx={{ width: 1 }}>
                        <Box className="feature-car__grid" display="grid"  gap={2}>
                            {cars.map((car) => (
                                <FeaturedCar car={car} />
                            ))}
                        </Box>
                    </Box>
                </div>
            </div>

        </section>
    )
}

