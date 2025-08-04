import onionRings from "../assets/onionRings.png";
import toastTomato from "../assets/toastTomato.png";
import hamEgg from "../assets/hamEgg.png";
import chickenWrap from "../assets/chickenWrap.png";
import tunaSalad from "../assets/tunaSalad.png";
import pancake from "../assets/pancake.png";
// Explore Recipes
import Green_Godies from "../assets/Green_Godies.jpg";
import Salad from "../assets/Salad.jpg";
import Pizza from "../assets/Pizza.jpg";
import Bowl_Smothie from "../assets/Bowl_Smothie.jpg";
import smothie from "../assets/smothie.jpg";
import Snapper from "../assets/Snapper.jpg";
//Blogs
import clock from "../assets/clock.jpg";
import suger from "../assets/suger.jpg";

import cheesecake from '../assets/cheesecake.jpg'
import cheesecakeRecipe from '../assets/cheesecakeRecipe.jpg'
//NExt Page Recipes
export const brandColor = "#C46C5F";
export const recipes = [
  { id: 1, title: "Onion Rings", img: onionRings, rating: 4, calories: 322 },
  { id: 2, title: "Toast with Tomato", img: toastTomato, rating: 4, calories: 199 },
  { id: 3, title: "Spinach Roll-Ups", img: hamEgg, rating: 4, calories: 174 },
  { id: 4, title: "Chicken Ranch Wrap", img: chickenWrap, rating: 4, calories: 188 },
  { id: 5, title: "Tuna Mex Tuna Salad", img: tunaSalad, rating: 4, calories: 298 },
  { id: 6, title: "Strawberry and Cherry pancake", img: pancake, rating: 4, calories: 251 },
];

// ExploreRecipe Data
export const Exploreecipes = [
  { id: 1, title: "Green Goodies: Veggie-Packed Power Bowl", img: Green_Godies, rating: 4, calories: 322 },
  { id: 2, title: "Garden Fresh Salad with Herbs & Lemon Dressing", img: Salad, rating: 4, calories: 199 },
  { id: 3, title: "Classic Cheesy Pepperoni Pizza Slice", img: Pizza, rating: 4, calories: 174 },
  { id: 4, title: "Tropical Smoothie Bowl with Fruits & Chia", img: Bowl_Smothie, rating: 4, calories: 188 },
  { id: 5, title: "Berry Blast Smoothie with Yogurt & Oats", img: smothie, rating: 4, calories: 298 },
  { id: 6, title: "Grilled Snapper with Garlic Lemon Butter", img: Snapper, rating: 4, calories: 251 },
];

// Recipe category data
export const Popularcategories = [
    {
      id: 1,
      name: "Breakfast recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c30c2191-f4c3-40b5-bfbb-7824a0657e1a.png",
      alt: "Breakfast plate with eggs and toast",
    },
    {
      id: 2,
      name: "Lunch recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27ec318c-607a-4cdf-8fb1-0d19a57d29eb.png",
      alt: "Pasta lunch",
    },
    {
      id: 3,
      name: "Dinner recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63c4a45f-716c-4518-bdd6-d63c2aae04db.png",
      alt: "Seafood pasta dinner",
    },
    {
      id: 4,
      name: "Appetizer recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73e601fc-f953-4e17-b32f-4ef554b366f3.png",
      alt: "Bruschetta appetizer",
    },
    {
      id: 5,
      name: "Salad recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20819b53-5d83-4d78-89b3-8cf531c9ffe6.png",
      alt: "Garden salad",
    },
    {
      id: 6,
      name: "Pizza recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69e41ede-fb6b-4c8e-aea3-3bb931ec6025.png",
      alt: "Pepperoni pizza",
    },
    {
      id: 7,
      name: "Smoothie recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f912da0-86ce-4e0e-802e-cc95ba21dae0.png",
      alt: "Green smoothie",
    },
    {
      id: 8,
      name: "Pasta recipes",
      img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2d06cc7-ece5-4d47-ad0d-65eaef9f8aef.png",
      alt: "Spaghetti pasta",
    },
  ];

 export const Blogs= [
    {
      id: 1,
      title: 'Unlocking the Benefits of Intermittent Fasting for Weight Management',
      description:
        'Weight Management and Health Weight Management and Health Weight Management and Health Weight Management and Health.',
      image: clock,
    },
    {
      id: 2,
      title: 'The Impact of Sugar Consumption on Your Health',
      description:
        'Unveiling the Hidden Dangers Unveiling the Hidden Dangers Unveiling the Hidden Dangers.',
      image: suger,
    },
  ];

 export const RecipesPage = {
    title: "Mixed Greens with Sun-Dried Tomato Dressing",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6faaf6ba-745f-4087-a982-e594d19cf089.png",
    description: "This recipe takes a classic and refreshing green salad and combines it with a flavorful sun-dried tomato dressing for a vibrant, healthy meal.",
    ingredients: [
      "Few mixed greens (spinach, kale, romaine)",
      "1 tbsp flax seeds",
      "1 tbsp sunflower seeds",
      "1 tbsp pumpkin seeds",
      "1/4 cup sliced sun-dried tomatoes",
      "1/4 cup chopped walnuts",
      "1/4 cup thinly sliced red onion",
      "Salt & pepper to taste",
    ],
    instructions: [
      "Chop the mixed greens finely, and remove any tough stems.",
      "Slice the red onion, walnuts, and seeds and toss them with the mixed greens.",
      "Add the sun-dried tomatoes and walnuts, toss again to combine with the salad.",
      "Add salt and pepper to taste and serve chilled.",
    ],
  };
  
 export const RecipesImage = [
    {
      title: "Quinoa Salad with Lemon Dressing",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91ac8a78-c6e4-4610-acf3-83a98d52808d.png",
    },
    {
      title: "Roasted Veggie Buddha Bowl",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/88f842ee-bcd6-4ca4-a05c-d7c5129d47e3.png",
    },
    {
      title: "Avocado and Black Bean Tacos",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d2ba7f9f-b390-4e1b-a48f-6929a66833f9.png",
    },
  ];
  
 export const TrendingTags = ["Vegan", "Salads", "Gluten Free", "Healthy", "Quick Meals", "Dairy Free"];
  

 export const comments = [
   {
     id: 1,
     name: "Sara Johnson",
     time: "40min ago",
     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
     comment:
       "Wow, this Mixed Greens with Sun-Dried Tomato Dressing recipe is a flavor explosion in my mouth! very delicious.",
     likes: 26,
     replies: [
       {
         id: 11,
         name: "Jessica Martinez",
         time: "20min ago",
         avatar: "https://randomuser.me/api/portraits/women/65.jpg",
         comment: "I agree with you, very delicious.",
         likes: 10,
       },
     ],
   },
   {
     id: 2,
     name: "David Wilson",
     time: "1hr ago",
     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
     comment:
       "The combination of fresh greens and the zesty sun-dried tomato dressing is a total game-changer. It’s become a staple in my weekly menu. So easy to make and so incredibly delicious!",
     likes: 46,
     replies: [],
   },
 ];

 // data/blogData.js

export const blogPosts = [
  {
    id: 1,
    date: "September 14, 2023",
    title: "Classic New York-Style Cheesecake Recipe",
    excerpt: "Learn to bake a classic cheesecake with our step-by-step guide and tips. This smooth and creamy dessert is perfect for any occasion.",
    image: cheesecakeRecipe,
  },
  {
    id: 2,
    date: "September 13, 2023",
    title: "Classic New York-Style Cheesecake Recipe",
    excerpt: "Explore how sugar affects your energy, metabolism, and long-term wellness. Discover how to reduce sugar intake for a healthier life.",
    image: cheesecake,
  },
  {
    id: 3,
    date: "September 12, 2023",
    title: "The Impact of Sugar Consumption on Your Health",
    excerpt: "Discover why intermittent fasting is trending among nutritionists and fitness coaches. We cover how it works and who it’s best for.",
    image: suger,
  },
  {
    id: 4,
    date: "September 10, 2023",
    title: "Unlocking the Benefits of Intermittent Fasting",
    excerpt: "Master the art of building a healthy, sustainable meal plan with our complete guide, suitable for beginners and pros alike.",
    image: Salad,
  },
  {
    id: 5,
    date: "September 9, 2023",
    title: "How to Build a Balanced Diet Plan",
    excerpt: "Find out which superfoods boost immunity, energy, and overall well-being. Includes chia seeds, berries, and more.",
    image: clock,
  },
  {
    id: 6,
    date: "September 8, 2023",
    title: "Top 5 Superfoods You Should Add to Your Diet",
    excerpt: "Hydration impacts everything from brain function to metabolism. Learn how much water you really need daily.",
    image: smothie,
  },
  {
    id: 7,
    date: "September 8, 2023",
    title: "Why Hydration Is More Important Than You Think",
    excerpt: "Hydration impacts everything from brain function to metabolism. Learn how much water you really need daily.",
    image: tunaSalad,
  },
];
//AddRecipe
// src/data/index.jsx

export const initialTitle = "Black Bean & Corn Quesadillas";

export const initialImages = [
  {
    id: 1,
    url: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7b24b0d6-3994-4b20-b283-15effdd7ef87.png",
    isCover: true,
  },
];

export const initialDescription = "";

export const initialIngredients = [
  "1 ± 15 oz can black beans",
  "1 cup corn",
];

export const initialInstructions = [
  {
    id: 1,
    text: "In a medium bowl, mix together beans, corn, salsa, taco seasoning",
    img: null,
  },
  {
    id: 2,
    text:
      "Preheat a large skillet over medium low heat, sprayed with cooking spray. Place one tortilla in the skillet, and scoop 1/2 cup of the filling onto the tortilla in the pan. Sprinkle 1/4 cup cheese over the bean mixture, and place second tortilla on top of the cheese. Press down on top tortilla lightly with the back of your spatula, so you can meld the tortillas together as the cheese melts. When the bottom tortilla begins to brown, flip the quesadilla over until both tortillas are lightly browned and crispy and the cheesy filling has melted. Cut into wedges if desired and enjoy!",
    img:
      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b7e96910-01ec-4609-bba8-89957ed8dc15.png",
  },
];

export const initialServings = "";

export const initialCookingTime = { hours: "", minutes: "" };

export const initialPrepTime = { hours: "", minutes: "" };

export const initialCuisine = "italian";

export const initialCollection = "1 Collection selected";
