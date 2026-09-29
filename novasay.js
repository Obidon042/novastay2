console.log("Hello");

let productContainer = document.querySelector(".product-container");


let foodData = [
  {
    foodImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    foodCat: "Main Course",
    foodTitle: "Classic Beef Burger",
    foodDesc: "Juicy beef burger with cheese, vegetables and crispy fries.",
    foodPrice: "₦9,500",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    foodCat: "Main Course",
    foodTitle: "Italian Pizza",
    foodDesc: "Fresh pizza topped with cheese, vegetables and tomato sauce.",
    foodPrice: "₦12,000",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    foodCat: "Main Course",
    foodTitle: "Grilled Stea",
    foodDesc: "Tender grilled steak served with vegetables and special sauce.",
    foodPrice: "₦18,500",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    foodCat: "Breakfast",
    foodTitle: "Sweet Pancakes",
    foodDesc: "Soft pancakes served with fruits, butter and sweet syrup.",
    foodPrice: "₦6,500",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1547592180-85f173990554",
    foodCat: "Main Course",
    foodTitle: "Special Rice",
    foodDesc: "Delicious rice served with chicken and fresh vegetables.",
    foodPrice: "₦8,000",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    foodCat: "Dessert",
    foodTitle: "Sweet Dessert",
    foodDesc:
      "A delicious sweet dessert made for the perfect ending to your meal.",
    foodPrice: "₦5,500",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    foodCat: "Drinks",
    foodTitle: "Fruit Cocktail",
    foodDesc: "Refreshing fresh fruit drink prepared and served chilled.",
    foodPrice: "₦4,500",
    btn: "Order Now",
  },

  {
    foodImage: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    foodCat: "Main Course",
    foodTitle: "Fresh Salad",
    foodDesc: "Fresh vegetables combined into a healthy and delicious meal.",
    foodPrice: "₦7,000",
    btn: "Order Now",
  },
];

foodData.forEach((food) => {
  console.log(food);
  productContainer.innerHTML += `   <div class="product-card">

                            <img src="${food.foodImage}" alt="">

                            <h2> ${food.foodCat} </h2>

                            <h1> ${food.foodTitle} </h1>

                            <p> ${food.foodDesc} </p>
                             <hr>
                            <div>
                                <h1> ${food.foodPrice} </h1>
                                <button> ${food.btn} </button>
                            </div>
                    </div>`;
});





let hotelRooms = document.querySelector(".hotel-rooms");

let hotelData = [
    {
        hotelImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        hotelCat: "Standard",
        hotelTitle: "Standard Room",
        hotelDesc: "Comfortable room perfect for individuals and couples.",
        icon: "1 Bed",
        icon2: "2 Guests",
        hotelPrice: "₦45,000",
        hotelBut: "Book Now",
    },

    {
        hotelImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        hotelCat: "Deluxe",
        hotelTitle: "Deluxe Room",
        hotelDesc: "Spacious room with modern design and premium comfort.",
        icon: "King Bed",
        icon2: "2 Guests",
        hotelPrice: "₦75,000",
        hotelBut: "Book Now",
    },

    {
        hotelImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        hotelCat: "Suite",
        hotelTitle: "Executive Suite",
        hotelDesc: "Luxury suite designed for guests who want extra comfort and space.",
        icon: "King Bed",
        icon2: "2 Guests",
        hotelPrice: "₦120,000",
        hotelBut: "Book Now",
    },

    {
        hotelImage: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        hotelCat: "Standard",
        hotelTitle: "Twin Room",
        hotelDesc: "Comfortable twin room suitable for friends and business travellers.",
        icon: "King Bed",
        icon2: "2 Guests",
        hotelPrice: "₦55,000",
        hotelBut: "Book Now", 
    },

    {
        hotelImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
        hotelCat: "Deluxe",
        hotelTitle: "Premium Deluxe",
        hotelDesc: "Beautiful room with premium furniture and modern facilities.",
        icon: "King Bed",
        icon2: "2 Guests",
        hotelPrice: "₦85,000",
        hotelBut: "Book Now",
    },

    {
        hotelImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        hotelCat: "Suite",
        hotelTitle: "Luxury Suite",
        hotelDesc: "Our premium suite for guests looking for a luxury experience.",
        icon: "King Bed",
        icon2: "2 Guests",
        hotelPrice: "₦150,000",
        hotelBut: "Book Now",
    },
]


hotelData.forEach((rooms) => {

   hotelRooms.innerHTML += `          <div class="rooms-card">
          <img
            src="${rooms.hotelImage}"
            alt=""
          />

          <h2> ${rooms.hotelCat} </h2>

          <h1> ${rooms.hotelTitle} </h1>

          <p> ${rooms.hotelDesc} </p>

          <div class="yes">
            <i><i class="fa-solid fa-bed"></i></i> ${rooms.icon}  

            <i><i class="fa-solid fa-person"></i></i> ${rooms.icon2}
          </div>
          <hr />
          <div class="go">
            <div>
            
              <h1> ${rooms.hotelPrice} </h1>
              / night
            </div>

            <button> ${rooms.hotelBut} </button>
          </div>
        </div>`;
});


//function
//eventlistiner
//click event
//filter methood


const filterBut = document.querySelector(".filter-but")

filterBut.addEventListener("click", event => {
  event.target.style.backgroundColor = "blue";
  event.target.textContent = "yes";
});

filterBut.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Do it";
});

filterBut.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "black";
  event.target.textContent = "Home Call";
});


