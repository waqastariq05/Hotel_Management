import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Hotels = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchHotels = async () => {
        const options = {
            method: 'GET',
            url: 'https://apidojo-booking-v1.p.rapidapi.com/properties/list-by-map',
            params: {
                arrival_date: '2023-12-17',
                departure_date: '2023-12-18',
                room_qty: '1',
                guest_qty: '1',
                bbox: '14.291283,14.948423,120.755688,121.136864',
            },
            headers: {
                'X-RapidAPI-Key': '18d85b9f58mshfeb2682461726ddp1b0d04jsn8f6178c49be8',
                'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
            }
        };

        try {
            const { data } = await axios.request(options);
            setData(data.result);
            console.log(data.result)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchHotels();
    }, [])

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5  pt-5 pb-24 mx-auto">
                    <h2 className='text-4xl font-bold uppercase text-black mb-10'>Hotels</h2>
                    <div className="flex flex-wrap -m-4">
                        {isLoading ? "Loading..." : data.map((hotel) => {
                            return (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={hotel.hotel_id}>
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="w-full h-full" src={hotel.main_photo_url} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs title-font mb-3 uppercase"><span className='font-bold text-black'>city</span>: {hotel.city}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{hotel.hotel_name}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hotels
