import React from 'react'
import { Wishlist } from '../common/WishList'
import { AccountIcon } from '../common/AcountIcon'
import { CartIcon } from '../common/CartIcon'

function Navigation() {
  return (
    <>
    <nav className="flex items-center py-6 px-16 justify-center gap-40">
        <div className=' flex items-center gap-6'>
            {/* logo */}
            <a className="text-3xl text-orange-700 gap-6" href="/">ShoppyGo</a>
        </div>
        <div className='flex flex-wrap items-center gap-10 flex-1 '>
            {/* nav items  */}
            <ul className='flex gap-14'>
                <li className=' text-gray-600 hover:text-black'><a href="">Mens</a></li>
                <li className=' text-gray-600 hover:text-black'><a href="">Shop</a></li>
                <li className=' text-gray-600 hover:text-black'><a href="">Womens</a></li>
                <li className=' text-gray-600 hover:text-black'><a href="">Kids</a></li>
            </ul>
        </div>

        <div className=" flex justify-center">
            {/* search bar */}
            <div className="border rounded flex overflow-hidden">
                <div className='flex items-center px-4 border-1'>
                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                <input type="text" className='px-3 py-2 outline-none' placeholder='Search'/>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
           {/* Action Items - icons */}
            <ul className='flex  items-center gap-8'>
                <li><button><Wishlist/></button></li>
                <li><button><AccountIcon/></button></li>
                <li><button><CartIcon/></button></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navigation