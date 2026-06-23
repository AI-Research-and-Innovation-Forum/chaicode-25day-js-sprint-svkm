//.reduce((acc,current)=>acc+current,initialValue)

const arr=[1,2,3,4,5]

const initialValue=0
const value=arr.reduce((acc,current)=>(acc+current),initialValue)
// console.log(value);

const shoppingCart=[
    {
        itemname:"JS course",
        price:2999
    },
    {
        itemname:"Py course",
        price:5999
    },
    {
        itemname:"HTML course",
        price:1999
    }
]
const totalPrice=shoppingCart.reduce((acc,current)=>(acc+current.price),0)
console.log(`Total price is: $${totalPrice.toLocaleString()}`);
