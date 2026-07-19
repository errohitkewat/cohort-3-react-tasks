
import HeroCard from '../components/HeroCard';
import StatusCard from '../components/StatusCard';
import CategoryCard from '../components/CategoryCard';
import TopRatedProductCard from '../components/TopRatedProductCard';
import PolicySection from '../components/PolicySection';

import { statusData } from '../data/statusData';
import { categories } from '../data/categories';

import { ArrowRight } from 'lucide-react';



const HomePage = () => {
  return (
    <div className="lg:px-32 px-5 py-10">
      {/* Home Page Main Card  */}
      <HeroCard />


      {/* Status Section  */}
      <section className="grid pt-10 gap-5 grid-cols-2 lg:grid-cols-4">
        {statusData.map((card) => (
          <StatusCard
            key={card.id}
            {...card}
          />
        ))}
      </section>


      {/* Category Section  */}
      <section className="pt-15">
        {/* Heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-clash text-2xl font-semibold text-white">
            Shop by Category
          </h2>
          <button className=" group flex items-center gap-2
            text-md text-lime-300
            transition-all duration-200 hover:text-lime-500"
            >
              View All
              <ArrowRight
              size={18}
            />
          </button>
        </div>

        {/* Categories Grid */}
        <div className=" grid gap-5 py-5  grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </section>


      {/* Top Rated and New Arrivals  */}
      <section className="min-h-50 grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        {/* Top Rated Products Container  */}
        <div className="w-full h-full bg-[#131313] rounded-3xl p-5">
          {/* Heading */}
          <div className="flex items-center justify-between ">
            <h2 className="font-clash font-semibold text-xl">⭐️ Top Rated </h2>
            <button className=" group flex items-center gap-2
              text-sm text-lime-300 cursor-pointer
              transition-all duration-200 hover:text-lime-500"
              >
                See All
                <ArrowRight
                  size={14}
                />
            </button>
          </div>

          {/* products container */}
          <div className="flex flex-col gap-4  py-5">
            {/* product card  */}
            <TopRatedProductCard />
            <TopRatedProductCard />
            <TopRatedProductCard />
          </div>
        </div>

        {/* New Arrivals Products Container  */}
        <div className="w-full h-full bg-[#131313] rounded-3xl p-5">
          {/* Heading */}
          <div className="flex items-center justify-between ">
            <h2 className="font-clash font-semibold text-xl">⚡️ New Arrivals  </h2>
            <button className=" group flex items-center gap-2
              text-sm text-lime-300 cursor-pointer
              transition-all duration-200 hover:text-lime-500"
              >
                See All
                <ArrowRight
                  size={14}
              />
            </button>
          </div>

          {/* products container */}
          <div className="flex flex-col gap-4  py-5">
            {/* product card  */}
            <TopRatedProductCard />
            <TopRatedProductCard />
            <TopRatedProductCard />
          </div>
        </div>

      </section>


      {/* Policy Section  */}
      <PolicySection />

    </div>
  )
}

export default HomePage


