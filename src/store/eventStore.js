// eventStore.js
import { create } from 'zustand';

export const useEventStore = create((set, get) => ({
  events: [],
  isLoading: false,
  error: null,

  fetchEvents: async () => {
    set({ isLoading: true, error: null });
    try {
      // Log to verify API URL
      console.log('Fetching from:', process.env.REACT_APP_API_URL);
      
      const response = await fetch(`${process.env.REACT_APP_API_URL}/events`);
      console.log('API Response:', response); // Debug response

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const events = await response.json();
      console.log('Fetched events:', events); // Debug events data
      
      set({ events, isLoading: false });
    } catch (error) {
      console.error('Error fetching events:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  getNameByEmail: async (eventId, email) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/events/${eventId}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Verification failed');
      }
      
      const data = await response.json();
      return data.name;
    } catch (error) {
      throw new Error(error.message || 'Failed to verify email');
    }
  },
}));