import { Platform } from "react-native";

export const categories = [
  {
    id: 1,
    name: "Beef",
    photo_url:
      "https://www.thespruceeats.com/thmb/36JNkbU3O0GDp4THFQmcbpQ32ck=/4048x2696/filters:fill(auto,1)/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg",
  },
  {
    id: 2,
    name: "Chicken",
    photo_url:
      "https://www.simplyrecipes.com/wp-content/uploads/2019/03/HT-Make-Roast-Chicken-LEAD-5v2.jpg",
  },
  {
    id: 3,
    name: "Pork",
    photo_url:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418779-pork-chops-delish.jpg?resize=480:*",
  },
  {
    id: 4,
    name: "Seafood",
    photo_url:
      "https://www.simplyrecipes.com/wp-content/uploads/2018/07/Seafood-Paella-HORIZONTAL.jpg",
  },
  {
    id: 5,
    name: "Vegetables",
    photo_url:
      "https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg",
  },
];

export const recipes = [
  {
    recipeId: 1,
    categoryId: 1,
    title: "Beef and Baby Corn Stir Fry",
    photo_url: "https://i.ytimg.com/vi/sQ52HMArpU0/maxresdefault.jpg",
    photosArray: [
      "https://www.kawalingpinoy.com/wp-content/uploads/2016/01/beef-corn-stir-fry-5.jpg",
      "https://cdn.copymethat.com/media/orig_beef_and_baby_corn_stir_fry_20160605014910057277zap97j.jpg",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/16/3/FNM_010116-Beef-Stir-Fry-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1450481165291.jpeg",
    ],
    time: "40",
  },
];

export const ingredients = [
  {
    ingredientId: 0,
    name: "Oil",
    photo_url:
      "https://i1.wp.com/roguehealthandfitness.com/wp-content/uploads/2017/07/vegetable-oil.jpg?fit=600%2C402&ssl=1",
  },
  {
    ingredientId: 1,
    name: "Baby Corn",
    photo_url: "https://sc01.alicdn.com/kf/UTB8133sByDEXKJk43Oq763z3XXaf.png",
  },
  {
    ingredientId: 2,
    name: "Snap Pea",
    photo_url:
      "https://www.welcometothetable.coop/sites/default/files/wp-content/uploads/2015/03/Snap_Peas_0.jpg",
  },
  {
    ingredientId: 3,
    name: "Red Bell Pepper",
    photo_url:
      "https://vegisfruits.com/wp-content/uploads/2019/10/Fresh_Red_Bell_Pepper_580x.jpg",
  },
  {
    ingredientId: 4,
    name: "Light Soy Sauce",
    photo_url:
      "https://az836796.vo.msecnd.net/media/image/product/en/large/0004139000105.jpg",
  },
  {
    ingredientId: 5,
    name: "Oyster Sauce",
    photo_url: "https://cf.shopee.ph/file/4f7659d7e43f8e752e6666086eee3791",
  },
  {
    ingredientId: 6,
    name: "Cornstarch",
    photo_url:
      "https://thrivecuisine.com/wp-content/uploads/2019/01/Cornstarch.jpg",
  },
  {
    ingredientId: 7,
    name: "Black Pepper",
    photo_url:
      "https://www.sultanspice.co.nz/wp-content/uploads/2018/08/Black-pepper3.png",
  },
  {
    ingredientId: 8,
    name: "Shaoxing Cooking Wine",
    photo_url:
      "https://www.recipetineats.com/wp-content/uploads/2018/10/Chinese-Cooking-Wine-1.jpg",
  },
  {
    ingredientId: 9,
    name: "Beef Sirloin",
    photo_url:
      "https://embed.widencdn.net/img/beef/gzsh5uhxif/800x600px/Sirloin%20Tip%20Side%20Steak.psd?keep=c&u=7fueml",
  },
  {
    ingredientId: 10,
    name: "Beef Chuck",
    photo_url:
      "https://meatsandeats.com.mt/app/uploads/2020/03/shutterstock_552586033-scaled.jpg",
  },
  {
    ingredientId: 11,
    name: "Coconut Milk",
    photo_url:
      "https://elavegan.com/wp-content/uploads/2016/08/Homemade-coconut-milk-recipe.jpg",
  },
  {
    ingredientId: 12,
    name: "Shrimp Paste",
    photo_url:
      "https://pilipinasrecipes.com/wp-content/uploads/2017/06/Alamang-Recipe.jpg",
  },
  {
    ingredientId: 13,
    name: "Serrano Pepper",
    photo_url:
      "https://www.thespruceeats.com/thmb/vaN7uC_4fsoNBs7PIfXZ2gv067o=/1500x1000/filters:fill(auto,1)/GettyImages-930279012-e1d17f3f2e14473db877437ce57b8f5f.jpg",
  },
  {
    ingredientId: 14,
    name: "Garlic",
    photo_url: "https://i.ytimg.com/vi/Dc7w_PGSt9Y/maxresdefault.jpg",
  },
  {
    ingredientId: 15,
    name: "Ginger",
    photo_url:
      "https://files.nccih.nih.gov/files/ginger-ThinkstockPhotos-531052216-square.jpg",
  },
  {
    ingredientId: 16,
    name: "Yellow Onion",
    photo_url: "https://sc01.alicdn.com/kf/UT89pvNXAVXXXagOFbXG.jpg",
  },
  {
    ingredientId: 17,
    name: "Salt",
    photo_url: "https://miro.medium.com/max/1200/0*hdhMI49OG82DD09T",
  },
  {
    ingredientId: 18,
    name: "Beef Cube",
    photo_url:
      "https://embed.widencdn.net/img/beef/py6rxf4xny/800x600px/Cubed%20Steak.psd?keep=c&u=7fueml",
  },
  {
    ingredientId: 19,
    name: "Onion",
    photo_url:
      "https://images-na.ssl-images-amazon.com/images/I/81UeYuulNjL._SL1500_.jpg",
  },
  {
    ingredientId: 20,
    name: "Beef Broth",
    photo_url:
      "https://i1.wp.com/insaneinthebrine.com/wp-content/uploads/2019/01/beefbrothYAY.jpg?fit=2902%2C2965&ssl=1",
  },
  {
    ingredientId: 21,
    name: "Green Bell Pepper",
    photo_url: "https://ginido.com/wp-content/uploads/2020/03/green-ball.jpg",
  },
  {
    ingredientId: 22,
    name: "Tomato Sauce",
    photo_url:
      "https://upload.wikimedia.org/wikipedia/commons/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg",
  },
  {
    ingredientId: 23,
    name: "Liver Spread",
    photo_url:
      "https://www.homeshop.ph/image/cache/catalog/Products/Canned-Goods/Liver-Spread/reno-liver-spread-85g-500x500-product_popup.jpg",
  },
  {
    ingredientId: 24,
    name: "Chili Flakes",
    photo_url:
      "https://punampaul.com/wp-content/uploads/2019/04/red-chili-flakes-500x485.jpg",
  },
  {
    ingredientId: 25,
    name: "Dried Bay Leaves",
    photo_url: "https://sc01.alicdn.com/kf/UTB8RZ5zvlahduJk43Jaq6zM8FXa6.jpg",
  },
  {
    ingredientId: 26,
    name: "Potatoes",
    photo_url:
      "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/potatoes_commodity-page.png",
  },
  {
    ingredientId: 27,
    name: "Carrots",
    photo_url: "https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg",
  },
  {
    ingredientId: 28,
    name: "Green Olives",
    photo_url:
      "https://www.thespruceeats.com/thmb/7JCmh1Ec7JiRDbl9Jm55bjLJtkE=/1976x1111/smart/filters:no_upscale()/greenolives-5a85e5dfa18d9e0037a56ce5.jpg",
  },
  {
    ingredientId: 29,
    name: "Flank Steak",
    photo_url:
      "https://embed.widencdn.net/img/beef/gkehnb3pit/exact/Flank%20Steak_Trimmed.psd?keep=c&u=7fueml",
  },
];
