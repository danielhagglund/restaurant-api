import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelp(): string {
    return 'Restaurant API Usage: \nGet all restaurants: curl http://baseUrl/restaurant \nPick winner: curl http://baseUrl/restaurant/winner';
  }
}
