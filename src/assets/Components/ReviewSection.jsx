import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://i.ibb.co.com/3c0gnp2/download-12.jpg',
      review: 'Excellent product quality and fast delivery!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      img: 'https://i.ibb.co.com/3c0gnp2/download-12.jpg',
      review: 'Great customer service. Highly recommend!',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      img: 'https://i.ibb.co.com/3c0gnp2/download-12.jpg',
      review: 'The equipment was exactly as described. Perfect!',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      img: 'https://i.ibb.co.com/3c0gnp2/download-12.jpg',
      review: 'The equipment was exactly as described. Perfect!',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      img: 'https://i.ibb.co.com/3c0gnp2/download-12.jpg',
      review: 'The equipment was exactly as described. Perfect!',
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col items-center w-1/2 mx-auto text-white bg-slate-500 shadow-md p-5 rounded-lg">
              <img
                src={review.img}
                alt={review.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className=" mt-2 text-center">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
