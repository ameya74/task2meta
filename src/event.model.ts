/* eslint-disable prettier/prettier */
import { Schema, model} from 'mongoose';

export const EventSchema = new Schema({
  payload: Object,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Event = model('Event', EventSchema);
export default Event;


