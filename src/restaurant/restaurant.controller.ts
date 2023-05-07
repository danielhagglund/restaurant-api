import { Controller, Get } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantsDto } from './dto/restaurants.dto';
import { RestaurantDto } from './dto/restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    @Get()
    getAllRestaurants(): RestaurantsDto {
        return this.restaurantService.getAllRestaurants();
    }

    @Get('winner')
    pickWinner(): RestaurantDto {
        return this.restaurantService.pickWinner();
    }
}