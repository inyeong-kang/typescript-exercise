type Category  = {
    category: string;
}
interface Restaurant {
    category: string,
    name: string,
    distance?: number,
    menu?: string;
}

interface Restaurants {
   list: Restaurant[],
   add(restaurant:Restaurant):void,
   filterByCategory(category: Restaurant['category']):Restaurant[]
}

// function add(restaurantList: RestaurantList, restaurant: Restaurant) {
//     restaurantList.list.push(restaurant)
// }

// function filterByCategory(restaurantList: RestaurantList, category: Category): RestaurantList {
    
// }

class Restaurants implements Restaurants {
  list = [] 

  add(restaurant: Restaurant): void {
      this.list.push(restaurant)
  }

  filterByCategory(category: string): Restaurant[] {
    return this.list.filter(restaurant => restaurant.category === category)
  }
}