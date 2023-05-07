import { Injectable } from '@nestjs/common';
import { RestaurantsDto } from './dto/restaurants.dto';
import { RestaurantDto } from './dto/restaurant.dto';

@Injectable()
export class RestaurantService {
    readonly restaurant_list = [
        { name: 'Gastronomic Delight', address: 'Chef Way 1' },
        { name: 'Exquisite Meals', address: 'Food Alley 3' },
        { name: 'Just Food', address: 'Plain Street 42' },
    ];

    getAllRestaurants(): RestaurantsDto {
        const restaurants: RestaurantDto[] = this.restaurant_list.map(
            (restaurant) => ({
                name: restaurant.name,
                address: restaurant.address,
            }),
        );

        const restaurantsDto: RestaurantsDto = { restaurants };
        return restaurantsDto;
    }

    pickWinner(): RestaurantDto {
        const randomInt = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;

        const randomRestaurant = this.restaurant_list[randomInt(0, this.restaurant_list.length - 1)];
        const restaurantDto: RestaurantDto = {
            name: randomRestaurant.name,
            address: randomRestaurant.address,
        };
        return restaurantDto;
    }
}
