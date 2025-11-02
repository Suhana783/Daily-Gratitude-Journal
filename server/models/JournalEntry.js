import mongoose from 'mongoose';

const journalEntrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  mood: {
    type: String,
    enum: ['😊', '😐', '😔', '😡', '🥰'],
    default: '😊'
  }
}, {
  timestamps: true
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
export default JournalEntry;