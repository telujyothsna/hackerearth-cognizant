'use strict';

import mongoose from 'mongoose';

var StatsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Stats', StatsSchema);
