import React, { useEffect, useState } from 'react'
import foodWaste from '../assets/logo/food-waste.png'
import moreVertical from '../assets/icons/more-vertical.svg'
import favorite from '../assets/icons/favorite.svg'
import {foodItemsList} from '../utils/data'
import favoriteRed from '../assets/icons/favorite-red.svg'

const Card = ({foodItem}) => {
    const [favorited, setFavorited] = useState(false)
    const [showMore, setShowMore] = useState(false)

    const CardBack = () => {
        return (
            <>
                <div className='w-full flex justify-center'><h1 className='font-bold text-xl'>Seller Contact</h1></div>
                <div className='grow max-h-[300px] overflow-clip'>
                        <img alt='profile-pic' src={foodWaste} className='h-full w-full object-cover'/>
                </div>
                <div className='px-2 flex flex-col h-1/2 justify-between'>
                    <h2 className='font-bold'>Name: {foodItem.name}</h2>
                    <h2 className='font-bold'>Phone: {foodItem.phone}</h2>
                    <h2 className='font-semibold text-md'>Pickup Details</h2>
                    <p className='font-thin italic w-full text-justify'>{foodItem.pickupDetails}</p>
                </div>
                <div className='w-full flex justify-between px-2'>
                                <button onClick={() => setFavorited(!favorited)} className='w-[32px] h-[32px] outline-none hover:bg-gray-500 hover:bg-opacity-5 rounded-full' type='button'>
                                    <img alt='fav' src={favorited? favoriteRed : favorite} className='w-4/5 h-4/5'/>
                                </button>
                                <button onClick={() =>setShowMore(false)} className='w-[32px] h-[32px] outline-none hover:bg-gray-500 hover:bg-opacity-5 rounded-full' type='button'>
                                    <img alt='more' src={moreVertical} className='w-4/5 h-4/5'/>
                                </button>
                </div>
            </>
        )
    }

    return (
            <div className='mx-2 w-1/2 min-w-[300px] overflow-scroll max-h-[450px] lg:max-h-[600px] h-4/5 shadow-xl flex flex-col justify-between rounded-2xl py-2'>
            {
                showMore ? 
                    <CardBack /> 
                :
                    <>
                        <div className='flex justify-center w-full'>
                            <h1 className='font-bold text-xl'>{foodItem.title}</h1>
                        </div>
                        <div className='flex flex-col grow'>
                            <div className='grow max-h-[200px] lg:max-h-[250px] lg:mb-4 overflow-clip'>
                                <img alt='food-pic' src={foodItem.image} className='h-full w-full object-cover'/>
                            </div>
                            <div className='w-full pl-2'>
                                <h2 className='font-semibold text-lg'>Description</h2>
                            </div>
                            <p className='text-justify text-md font-thin italic px-2'>
                                    {foodItem.description}
                            </p>
                        </div>
                        <div className='w-full flex justify-between px-2'>
                            <button onClick={() => setFavorited(!favorited)} className='w-[32px] h-[32px] outline-none hover:bg-gray-500 hover:bg-opacity-5 rounded-full' type='button'>
                                <img alt='fav' src={favorited? favoriteRed : favorite} className='w-4/5 h-4/5'/>
                            </button>
                            <button onClick={() =>setShowMore(true)} className='w-[32px] h-[32px] outline-none hover:bg-gray-500 hover:bg-opacity-5 rounded-full' type='button'>
                                <img alt='more' src={moreVertical} className='w-4/5 h-4/5'/>
                            </button>
                        </div>
                    </>
            }
            </div>
    )
}

function Feed({userSignedIn, selectedCategory, selectedAccommodation}) {
    useEffect(() => {
        const showFeed = () => {
            document.getElementById('feed').classList.remove('translate-x-1/2')
            document.getElementById('feed').classList.remove('opacity-0')
        }
        setTimeout(showFeed, 200)
    },[userSignedIn])

    const filterFood = (foodItem) => {
        if (selectedCategory.length === 0 && selectedAccommodation.length === 0) return true
        const isInCategory = foodItem.category === selectedCategory;
        const isInAccommodation = foodItem.accommodation === selectedAccommodation;

        return isInAccommodation && isInCategory;
    }
    const filteredFoodItemList =  foodItemsList.filter(filterFood)
  return (
    <div id={'feed'} className='transition duration-500 opacity-0 translate-x-1/2 w-full h-full flex flex-row justify-start items-center overflow-x-scroll'>
      {
        filteredFoodItemList.length >  0 ?
            filteredFoodItemList.map((foodItem, i) => <Card key={i} foodItem={foodItem} />)
        :
        <div className='w-full flex justify-center italic'>No Results Found</div>
      }
    </div>
  )
}

export default Feed
