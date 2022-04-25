import { PlaceModel } from '../model/Places';
import placeList from './cities_canada-usa.json';
export default class PlaceRepo {
  public static async searchPlace(query: any, sortby: any) {
    await this.seedPlace();
    const addresses = await PlaceModel.aggregate(query).sort(sortby);
    return addresses;
  }
  public static async seedPlace() {
    const places = [];
    for (let index = 0; index < placeList.length; index++) {
      const element = placeList[index];
      places.push({
        name: element.name,
        ascii: element.ascii,
        location: {
          type: 'Point',
          coordinates: [element.long, element.lat],
        },
        country: element.country,
      });
    }
    await PlaceModel.deleteMany();
    await PlaceModel.insertMany(places);
  }
}
