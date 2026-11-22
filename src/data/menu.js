// All menu items live here. Edit names, descriptions, prices (in ₹) and images.
// To use your own photo, replace `image` with a URL or a path like '/images/latte.jpg'
// (put files in the `public/images` folder).
const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=75`

export const categories = ['Coffee', 'Pizza', 'Burgers', 'Shakes']

export const menuItems = [
  // Coffee
  { id: 'c1', category: 'Coffee', name: 'Espresso', price: 90, description: 'A short, bold shot with a rich golden crema.', image: photo('1510707577719-ae7c14805e3a'), imageAlt: 'A small cup of espresso with crema' },
  { id: 'c2', category: 'Coffee', name: 'Cappuccino', price: 140, description: 'Espresso topped with velvety steamed milk foam.', image: photo('1572442388796-11668a67e53d'), imageAlt: 'A cappuccino with foam in a white cup' },
  { id: 'c3', category: 'Coffee', name: 'Café Latte', price: 150, description: 'Smooth espresso with plenty of silky steamed milk.', image: photo('1461023058943-07fcbe16d735'), imageAlt: 'A café latte with latte art' },
  { id: 'c4', category: 'Coffee', name: 'Americano', price: 110, description: 'Espresso stretched with hot water for a clean, long sip.', image: photo('1514432324607-a09d9b4aefdd'), imageAlt: 'A black Americano coffee in a cup' },
  { id: 'c5', category: 'Coffee', name: 'Mocha', price: 170, description: 'Espresso, chocolate and steamed milk, lightly sweet.', image: photo('1578314675249-a6910f80cc4e'), imageAlt: 'A chocolatey mocha topped with cream' },

  // Pizza
  { id: 'p1', category: 'Pizza', name: 'Margherita', price: 249, description: 'Tomato sauce, mozzarella and fresh basil.', image: photo('1574071318508-1cdbab80d002'), imageAlt: 'A Margherita pizza with basil leaves' },
  { id: 'p2', category: 'Pizza', name: 'Farmhouse', price: 329, description: 'Onion, capsicum, tomato and mushroom on a cheesy base.', image: photo('1513104890138-7c749659a591'), imageAlt: 'A vegetable pizza with toppings' },
  { id: 'p3', category: 'Pizza', name: 'Paneer Tikka', price: 349, description: 'Spiced paneer, onion and capsicum with mozzarella.', image: photo('1565299624946-b28f40a0ae38'), imageAlt: 'A loaded pizza with paneer and peppers' },
  { id: 'p4', category: 'Pizza', name: 'Pepperoni', price: 379, description: 'Classic pepperoni slices over melted mozzarella.', image: photo('1604382354936-07c5d9983bd3'), imageAlt: 'A pepperoni pizza fresh from the oven' },
  { id: 'p5', category: 'Pizza', name: 'BBQ Chicken', price: 389, description: 'Smoky barbecue sauce, chicken and onion.', image: photo('1593560708920-61dd98c46a4e'), imageAlt: 'A barbecue chicken pizza' },

  // Burgers
  { id: 'b1', category: 'Burgers', name: 'Classic Veg', price: 139, description: 'Crisp veggie patty, lettuce, tomato and house sauce.', image: photo('1550547660-d9450f859349'), imageAlt: 'A veg burger with lettuce and tomato' },
  { id: 'b2', category: 'Burgers', name: 'Aloo Tikki', price: 129, description: 'Spiced potato patty with mint mayo in a toasted bun.', image: photo('1571091718767-18b5b1457add'), imageAlt: 'A burger stacked high with fillings' },
  { id: 'b3', category: 'Burgers', name: 'Cheese Burger', price: 189, description: 'Juicy patty with melted cheese and pickles.', image: photo('1568901346375-23c9450c58cd'), imageAlt: 'A cheeseburger with melted cheese' },
  { id: 'b4', category: 'Burgers', name: 'Crispy Chicken', price: 199, description: 'Golden fried chicken, lettuce and creamy sauce.', image: photo('1594212699903-ec8a3eca50f5'), imageAlt: 'A crispy chicken burger' },
  { id: 'b5', category: 'Burgers', name: 'Paneer Zinger', price: 179, description: 'Crunchy paneer patty with spicy mayo.', image: photo('1553979459-d2229ba7433b'), imageAlt: 'A burger with a crunchy patty' },

  // Shakes
  { id: 's1', category: 'Shakes', name: 'Chocolate Shake', price: 169, description: 'Thick, chilled and chocolatey.', image: photo('1572490122747-3968b75cc699'), imageAlt: 'A tall chocolate milkshake' },
  { id: 's2', category: 'Shakes', name: 'Strawberry Shake', price: 169, description: 'Creamy shake blended with strawberry.', image: photo('1579954115545-a95591f28bfc'), imageAlt: 'A pink strawberry milkshake' },
  { id: 's3', category: 'Shakes', name: 'Vanilla Shake', price: 149, description: 'Smooth and simple, made with real vanilla flavour.', image: photo('1541658016709-82535e94bc69'), imageAlt: 'A vanilla milkshake in a glass' },
  { id: 's4', category: 'Shakes', name: 'Cold Coffee', price: 159, description: 'Iced coffee blended with milk and a little ice cream.', image: photo('1577805947697-89e18249d767'), imageAlt: 'A glass of iced cold coffee' },
  { id: 's5', category: 'Shakes', name: 'Oreo Shake', price: 189, description: 'Cookie crumbs blended into a creamy shake.', image: photo('1553787499-6f9133860278'), imageAlt: 'A cookies-and-cream milkshake' },
]
