import asyncHandler from 'express-async-handler';
import JournalEntry from '../models/JournalEntry.js';

// Create a new journal entry
export const createEntry = asyncHandler(async (req, res) => {
  const { content, mood } = req.body;

  const entry = await JournalEntry.create({
    user: req.user._id,
    content,
    mood
  });

  res.status(201).json(entry);
});

// Get all entries for a user
export const getEntries = asyncHandler(async (req, res) => {
  const entries = await JournalEntry.find({ user: req.user._id })
    .sort({ date: -1 });
  res.json(entries);
});

// Get single entry
export const getEntry = asyncHandler(async (req, res) => {
  const entry = await JournalEntry.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!entry) {
    res.status(404);
    throw new Error('Entry not found');
  }

  res.json(entry);
});

// Update entry
export const updateEntry = asyncHandler(async (req, res) => {
  const entry = await JournalEntry.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { $set: req.body },
    { new: true }
  );

  if (!entry) {
    res.status(404);
    throw new Error('Entry not found');
  }

  res.json(entry);
});

// Delete entry
export const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await JournalEntry.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id
  });

  if (!entry) {
    res.status(404);
    throw new Error('Entry not found');
  }

  res.json({ message: 'Entry deleted' });
});