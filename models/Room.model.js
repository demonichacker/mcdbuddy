const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  teleportPoints: { type: Map, of: Object, default: {} },
  spawnPos: { type: Object, default: null },
  vipSpawnPos: { type: Object, default: null },
  prison: { type: Map, of: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
