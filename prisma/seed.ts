import "dotenv/config";

import { PrismaClient, ProductBadge } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  // --------------------------------------------------
  // 1. Очистка базы
  // --------------------------------------------------

  await prisma.product.deleteMany();
  await prisma.seller.deleteMany();
  await prisma.category.deleteMany();

  // --------------------------------------------------
  // 2. Categories
  // --------------------------------------------------

  const categories = [
    {
      id: "cars",
      name: "Cars",
      image: "/img/car.jpg",

    },
    {
      id: "homes",
      name: "Homes",
      image: "/img/home.jpg",

    },
    {
      id: "beach",
      name: "Beach",
      image: "/img/beach.jpg",

    },
    {
      id: "food",
      name: "Food",
      image: "/img/food.jpg",

    },
    {
      id: "electronics",
      name: "Electronics",
      image: "",

    },
    {
      id: "fashion",
      name: "Fashion",
      image: "",

    },
  ];

  await prisma.category.createMany({
    data: categories,
  });

  // --------------------------------------------------
  // 3. Sellers
  // --------------------------------------------------

  const sellers = [
    {
      id: "seller-bmw",
      name: "BMW Official",
      avatar: "/img/seller-bmw.jpg",
    },
    {
      id: "seller-audi",
      name: "Audi Center",
      avatar: "/img/seller-audi.jpg",
    },
    {
      id: "seller-mercedes",
      name: "Mercedes Store",
      avatar: "/img/seller-mercedes.jpg",
    },
    {
      id: "seller-home",
      name: "Dream Homes",
      avatar: "/img/seller-home.jpg",
    },
    {
      id: "seller-ocean",
      name: "Ocean Properties",
      avatar: "/img/seller-ocean.jpg",
    },
    {
      id: "seller-tech",
      name: "Tech World",
      avatar: "/img/seller-tech.jpg",
    },
    {
      id: "seller-fashion",
      name: "Fashion House",
      avatar: "/img/seller-fashion.jpg",
    },
    {
      id: "seller-food",
      name: "Food Market",
      avatar: "/img/seller-food.jpg",
    },
  ];

  await prisma.seller.createMany({
    data: sellers,
  });

  // --------------------------------------------------
  // 4. Products
  // --------------------------------------------------

  const products = [
    // CARS
    {
      id: "product-01",
      title: "BMW M4",
      description: "Sport coupe with premium interior and powerful engine.",
      price: 50000,
      rating: 5,
      reviews: 120,
      location: "Germany",
      categoryId: "cars",
      sellerId: "seller-bmw",
      images: ["/img/car.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-02",
      title: "BMW M3",
      description: "High-performance sports sedan.",
      price: 68000,
      rating: 4.9,
      reviews: 94,
      location: "Munich",
      categoryId: "cars",
      sellerId: "seller-bmw",
      images: ["/img/car.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-03",
      title: "BMW X5",
      description: "Luxury SUV suitable for family trips.",
      price: 75000,
      rating: 4.8,
      reviews: 83,
      location: "Berlin",
      categoryId: "cars",
      sellerId: "seller-bmw",
      images: ["/img/car.jpg"],
    },

    {
      id: "product-04",
      title: "Audi RS6",
      description: "Powerful premium performance wagon.",
      price: 105000,
      rating: 4.9,
      reviews: 76,
      location: "Germany",
      categoryId: "cars",
      sellerId: "seller-audi",
      images: ["/img/car.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-05",
      title: "Audi A6",
      description: "Comfortable executive sedan.",
      price: 62000,
      rating: 4.7,
      reviews: 61,
      location: "Berlin",
      categoryId: "cars",
      sellerId: "seller-audi",
      images: ["/img/car.jpg"],
    },

    {
      id: "product-06",
      title: "Audi Q8",
      description: "Premium SUV with modern technology.",
      price: 88000,
      rating: 4.8,
      reviews: 71,
      location: "Hamburg",
      categoryId: "cars",
      sellerId: "seller-audi",
      images: ["/img/car.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-07",
      title: "Mercedes C-Class",
      description: "Elegant sedan with premium comfort.",
      price: 54000,
      rating: 4.8,
      reviews: 88,
      location: "Stuttgart",
      categoryId: "cars",
      sellerId: "seller-mercedes",
      images: ["/img/car.jpg"],
    },

    {
      id: "product-08",
      title: "Mercedes GLE",
      description: "Luxury SUV with spacious interior.",
      price: 92000,
      rating: 4.9,
      reviews: 103,
      location: "Stuttgart",
      categoryId: "cars",
      sellerId: "seller-mercedes",
      images: ["/img/car.jpg"],
      badge: ProductBadge.popular,
    },

    // HOMES
    {
      id: "product-09",
      title: "Modern House",
      description: "Beautiful family house with a large garden.",
      price: 330000,
      rating: 4.9,
      reviews: 124,
      location: "Berlin",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home2.jpg", "/img/home3.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-10",
      title: "Mountain Cabin",
      description: "Cozy cabin surrounded by nature.",
      price: 210000,
      rating: 4.6,
      reviews: 39,
      location: "Alps",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home2.jpg"],
    },

    {
      id: "product-11",
      title: "Luxury Apartment",
      description: "Modern apartment in the city center.",
      price: 290000,
      rating: 4.8,
      reviews: 82,
      location: "Munich",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home2.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-12",
      title: "Family Villa",
      description: "Large villa with swimming pool.",
      price: 670000,
      rating: 4.9,
      reviews: 146,
      location: "Frankfurt",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home2.jpg", "/img/home3.jpg"],
    },

    {
      id: "product-13",
      title: "Minimalist House",
      description: "Minimalist modern architecture.",
      price: 450000,
      rating: 4.7,
      reviews: 54,
      location: "Hamburg",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg"],
    },

    {
      id: "product-14",
      title: "Forest House",
      description: "Quiet house surrounded by forest.",
      price: 390000,
      rating: 4.8,
      reviews: 67,
      location: "Bavaria",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home3.jpg"],
    },

    // BEACH
    {
      id: "product-15",
      title: "Beach Villa",
      description: "Luxury villa near the sea.",
      price: 580000,
      rating: 4.8,
      reviews: 82,
      location: "Spain",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-16",
      title: "Ocean Apartment",
      description: "Apartment with an ocean view.",
      price: 290000,
      rating: 4.8,
      reviews: 67,
      location: "Portugal",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
    },

    {
      id: "product-17",
      title: "Sea House",
      description: "Beautiful house directly on the coast.",
      price: 720000,
      rating: 4.9,
      reviews: 91,
      location: "Italy",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-18",
      title: "Summer Villa",
      description: "Perfect villa for summer holidays.",
      price: 490000,
      rating: 4.7,
      reviews: 58,
      location: "Greece",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
    },

    {
      id: "product-19",
      title: "Private Beach House",
      description: "Private property with direct beach access.",
      price: 830000,
      rating: 5,
      reviews: 112,
      location: "France",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
      badge: ProductBadge.popular,
    },

    // FOOD
    {
      id: "product-20",
      title: "Italian Pizza",
      description: "Traditional pizza with mozzarella.",
      price: 18,
      rating: 4.7,
      reviews: 260,
      location: "Rome",
      categoryId: "food",
      sellerId: "seller-food",
      images: ["/img/food.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-21",
      title: "Margherita Pizza",
      description: "Classic Italian pizza.",
      price: 15,
      rating: 4.8,
      reviews: 310,
      location: "Naples",
      categoryId: "food",
      sellerId: "seller-food",
      images: ["/img/food.jpg"],
    },

    {
      id: "product-22",
      title: "Pasta Carbonara",
      description: "Traditional Roman pasta.",
      price: 16,
      rating: 4.9,
      reviews: 188,
      location: "Rome",
      categoryId: "food",
      sellerId: "seller-food",
      images: ["/img/food.jpg"],
    },

    {
      id: "product-23",
      title: "Truffle Pasta",
      description: "Premium pasta with fresh truffle.",
      price: 29,
      rating: 4.9,
      reviews: 94,
      location: "Milan",
      categoryId: "food",
      sellerId: "seller-food",
      images: ["/img/food.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-24",
      title: "Cheese Burger",
      description: "Classic burger with cheddar cheese.",
      price: 14,
      rating: 4.6,
      reviews: 240,
      location: "Berlin",
      categoryId: "food",
      sellerId: "seller-food",
      images: ["/img/food.jpg"],
    },

    // ELECTRONICS
    {
      id: "product-25",
      title: "MacBook Pro",
      description: "Professional laptop for developers.",
      price: 2499,
      rating: 4.9,
      reviews: 340,
      location: "Berlin",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-26",
      title: "iPhone Pro",
      description: "Premium smartphone with advanced camera.",
      price: 1199,
      rating: 4.8,
      reviews: 520,
      location: "Munich",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-27",
      title: "iPad Pro",
      description: "Powerful tablet for work and creativity.",
      price: 999,
      rating: 4.8,
      reviews: 274,
      location: "Hamburg",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
    },

    {
      id: "product-28",
      title: "Sony Camera",
      description: "Professional mirrorless camera.",
      price: 1899,
      rating: 4.9,
      reviews: 188,
      location: "Berlin",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
    },

    {
      id: "product-29",
      title: "Gaming Laptop",
      description: "High-performance laptop for gaming.",
      price: 1799,
      rating: 4.7,
      reviews: 143,
      location: "Frankfurt",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-30",
      title: "Wireless Headphones",
      description: "Premium noise cancelling headphones.",
      price: 349,
      rating: 4.6,
      reviews: 412,
      location: "Berlin",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
    },

    // FASHION
    {
      id: "product-31",
      title: "Classic Jacket",
      description: "Premium leather jacket.",
      price: 320,
      rating: 4.7,
      reviews: 78,
      location: "Milan",
      categoryId: "fashion",
      sellerId: "seller-fashion",
      images: ["/img/home.jpg"],
    },

    {
      id: "product-32",
      title: "Designer Sneakers",
      description: "Modern premium sneakers.",
      price: 220,
      rating: 4.8,
      reviews: 154,
      location: "Paris",
      categoryId: "fashion",
      sellerId: "seller-fashion",
      images: ["/img/home.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-33",
      title: "Summer Dress",
      description: "Elegant lightweight summer dress.",
      price: 140,
      rating: 4.6,
      reviews: 91,
      location: "Paris",
      categoryId: "fashion",
      sellerId: "seller-fashion",
      images: ["/img/home.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-34",
      title: "Classic Watch",
      description: "Elegant mechanical wrist watch.",
      price: 890,
      rating: 4.9,
      reviews: 116,
      location: "Geneva",
      categoryId: "fashion",
      sellerId: "seller-fashion",
      images: ["/img/home.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-35",
      title: "Winter Coat",
      description: "Warm premium winter coat.",
      price: 450,
      rating: 4.7,
      reviews: 64,
      location: "Berlin",
      categoryId: "fashion",
      sellerId: "seller-fashion",
      images: ["/img/home.jpg"],
    },

    // EXTRA PRODUCTS
    {
      id: "product-36",
      title: "Tesla Model 3",
      description: "Electric sedan with modern technology.",
      price: 48000,
      rating: 4.8,
      reviews: 132,
      location: "Berlin",
      categoryId: "cars",
      sellerId: "seller-bmw",
      images: ["/img/car.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-37",
      title: "Tesla Model Y",
      description: "Electric SUV with excellent range.",
      price: 56000,
      rating: 4.8,
      reviews: 142,
      location: "Munich",
      categoryId: "cars",
      sellerId: "seller-bmw",
      images: ["/img/car.jpg"],
    },

    {
      id: "product-38",
      title: "Penthouse Apartment",
      description: "Luxury penthouse with panoramic city views.",
      price: 920000,
      rating: 5,
      reviews: 74,
      location: "Munich",
      categoryId: "homes",
      sellerId: "seller-home",
      images: ["/img/home.jpg", "/img/home2.jpg"],
      badge: ProductBadge.popular,
    },

    {
      id: "product-39",
      title: "Ocean Resort",
      description: "Luxury resort property near the sea.",
      price: 1200000,
      rating: 4.9,
      reviews: 89,
      location: "Spain",
      categoryId: "beach",
      sellerId: "seller-ocean",
      images: ["/img/beach.jpg"],
      badge: ProductBadge.new,
    },

    {
      id: "product-40",
      title: "Smart Watch",
      description: "Modern smartwatch with health and fitness features.",
      price: 399,
      rating: 4.7,
      reviews: 321,
      location: "Berlin",
      categoryId: "electronics",
      sellerId: "seller-tech",
      images: ["/img/home.jpg"],
    },
  ];

  // --------------------------------------------------
  // 5. Insert products
  // --------------------------------------------------

  await prisma.product.createMany({
    data: products,
  });

  console.log("Database seeded successfully!");
  console.log(`Categories: ${categories.length}`);
  console.log(`Sellers: ${sellers.length}`);
  console.log(`Products: ${products.length}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });