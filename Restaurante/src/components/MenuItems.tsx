import type { MenuItems } from '../types';
type MenuItemsProps = {
    item: MenuItems;
}



export default function MenuItems({item}: MenuItemsProps) {
  return (
    <>
       <p>
       {item.name}

    </p>
    <p>
        {item.price}
    </p>
    </>
 
  )
}
