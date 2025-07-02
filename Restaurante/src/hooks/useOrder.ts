import { useState } from "react"
import type { OrderItem } from "../types"


export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

const addItem=()=> {
    // Function to add an item to the order
    console.log("Item added to order");

}

    return {

            addItem
    }

}