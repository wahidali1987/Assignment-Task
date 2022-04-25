import { model, Schema, Document } from 'mongoose';
export const DOCUMENT_NAME = 'Places';
export const COLLECTION_NAME = 'places';
export default interface Place extends Document {
  name: string;
  location: {
    type: { type: string };
    coordinates: Array<number>;
  };
  country: string;
  ascii: string;
}

const schema = new Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String,
      required: true,
      default: 'Point',
    },
    coordinates: [Number],
  },
  country: { type: String },
  ascii: { type: String },
});

schema.index({ location: '2dsphere' });
export const PlaceModel = model<Place>(DOCUMENT_NAME, schema, COLLECTION_NAME);
