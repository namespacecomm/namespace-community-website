import { create } from 'zustand';

export const useEventStore = create((set, get) => ({
  events: [
    {
      id: 'abcd69',
      name: 'dummy-event',
      date: '2023-04-14',
      templateImage: 'https://res.cloudinary.com/df5hitkbj/image/upload/v1730116889/Techxcelrate_participation_certificate_1_c8hfph.png',
      namePosition: {
        x: 400,
        y: 310,
        fontSize: 30,
        fontColor: '#2c3e50'
      },
      qrPosition: {
        x: 700,  // Bottom right corner positioning
        y: 500,
        size: 50  // Size of QR code in pixels
      },
      registeredEmails: {
        'john@example.com': 'John Doe',
        'jane@example.com': 'Jane Smith',
        'chutiyabanayatumko@gmail.com': 'Apna naam toh batao',
      }
    },
  ],
  
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  
  getNameByEmail: (eventId, email) => {
    const event = get().events.find((e) => e.id === eventId);
    return event && event.registeredEmails[email] ? event.registeredEmails[email] : false;
  },
}));