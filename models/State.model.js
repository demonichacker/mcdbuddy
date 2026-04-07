const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  key: { type: String, default: 'global_state', unique: true }, // Ensure we only have one state document
  protectedUserIds: { type: [String], default: [] },
  vipUserIds: { type: [String], default: [] },
  fullControllerUserIds: { type: [String], default: [] },
  subscribers: { type: [String], default: [] },
  globalPrison: { type: Map, of: Object, default: {} },
  waitingForInviteUser: { type: String, default: null },
  autoTeleEnabled: { type: Boolean, default: false },
  lastGoodRoomId: { type: String, default: null },
  lastSourceConversationId: { type: String, default: null },
  vipPrice: { type: Number, default: 500 },
  vipDurationDays: { type: Number, default: 30 },
  walletTotal: { type: Number, default: 0 },
  vipSubscriptions: { type: Map, of: Number, default: {} },
  usernameCache: { type: Map, of: String, default: {} },
  logs: {
    bans: { type: [Object], default: [] },
    kicks: { type: [Object], default: [] },
    mutes: { type: [Object], default: [] },
    punches: { type: [Object], default: [] },
    cuts: { type: [Object], default: [] },
    voids: { type: [Object], default: [] },
    freezes: { type: [Object], default: [] },
    unbans: { type: [Object], default: [] },
    slaps: { type: [Object], default: [] }
  }
}, { timestamps: true });

module.exports = mongoose.model('State', stateSchema);
