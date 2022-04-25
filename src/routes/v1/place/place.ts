import express from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import PlaceRepo from '../../../database/repository/PlaceRepo';

import asyncHandler from '../../../helpers/asyncHandler';
const router = express.Router();

router.get(
  '/suggestions',
  asyncHandler(async (req, res) => {
    const result: any[] = [];
    const filter: any[] = [];
    let places: any[] = [];
    const { q, latitude, longitude, radius, sort } = req.query;
    const sortingQuery = sort ? `{${sort} : -1}` : `{ name : -1}`;
    if (latitude && longitude && radius) {
      filter.push({
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(latitude as string), parseFloat(longitude as string)],
          },
          distanceField: 'distance',
          maxDistance: parseInt(radius as string, 10),
          pherical: true,
          distanceMultiplier: 1 / 1609.344,
        },
      });
    }
    if (q) {
      filter.push({ $match: { name: { $regex: q, $options: 'i' } } });
    }
    places = await PlaceRepo.searchPlace(filter, sortingQuery);
    places.forEach((element: any) => {
      result.push({
        name: `${element.name}, ${element.country}`,
        latitude: element.location.coordinates[0],
        longitude: element.location.coordinates[1],
        distance: element.distance,
      });
    });
    return new SuccessResponse('success', result).send(res);
  }),
);
export default router;
