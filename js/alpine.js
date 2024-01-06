document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => {
  return {
   items: [
     {id: 1, name: 'Biji Kopi Gayo', price: 25000, img: '../image/product1.jpg'},
     {id: 2, name: 'Biji Kopi Sumatera', price: 40000, img: '../image/product1.jpg'},
     {id: 3, name: 'Biji Kopi Toraja', price: 30000, img: '../image/product1.jpg'},
     {id: 4, name: 'Biji Kopi Hitam', price: 44000, img: '../image/product1.jpg'},
   ]
  }
  });
 
  Alpine.store('cart', {
   items: [],
   total: 0,
   quantity: 0,
   add(item){
     let currentItem = this.items.find((i) => i.id == item.id);
     if(currentItem){
       this.items = this.items.map((i) => {
         if(i.id == currentItem.id){
           i.itemQty += 1;
           i.itemTotal = i.price * i.itemQty;
           this.total += i.price;
           this.quantity++;
           return i;
         } else {
           return i;
         }
       })
     } else {
       this.items.push({...item, itemQty: 1, itemTotal: item.price});
       this.total += item.price;
       this.quantity++;
     }
   },
   remove(item){
     if(item.itemQty == 1){
       this.items = this.items.filter((i) => i.id !== item.id);
       this.total -= item.price;
       this.quantity--;
     } else {
       this.items.map((i) => {
         if(i.id != item.id){
           return i;
         } else {
           i.itemQty -= 1;
           i.itemTotal = i.price * i.itemQty;
           this.total -= item.price;
           this.quantity--;
           return i;
         }
       })
     }
   }
  })
 })