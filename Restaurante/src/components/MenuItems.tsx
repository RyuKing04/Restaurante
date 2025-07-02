import type { MenuItems } from '../types';


type MenuItemsProps = {
    item: MenuItems,
    addItem:() => void;
}

export default function MenuItems({item,addItem}: MenuItemsProps) {
  return (
    <button
    className='bg-white shadow-md rounded-lg p-5 mb-5 hover:bg-teal-400 hover:text-white transition-colors duration-300 w-full'
   onClick={()=> addItem()}
   >
       <p>
       {item.name}

    </p>
    <p>
        {item.price}
    </p>
    </button>
 
  )
}
