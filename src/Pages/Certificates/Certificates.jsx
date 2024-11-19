import React from "react";
import { Link } from "react-router-dom";
import { Award, Calendar, Users, Loader2 } from "lucide-react";
import { useEventStore } from "../../store/eventStore";

const EventCard = ({ event }) => (
  <div className="group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-purple-500/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={event.templateImage}
          alt={`${event.name} Certificate Template`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="h-20 w-20 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transform rotate-12 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-700" />
        </div>
      </div>
    </div>

    <div className="p-6 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 pointer-events-none" />
      <div className="relative">
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
          {event.name}
        </h3>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-sm text-gray-300">
            <Calendar className="mr-2 h-4 w-4 text-purple-400" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Users className="mr-2 h-4 w-4 text-purple-400" />
            <span>{Object.keys(event.registeredEmails).length} participants</span>
          </div>
        </div>

        <Link
          to={`/certificate/${event.id}`}
          className="mt-6 inline-flex w-full items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg
            hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black
            transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
            shadow-[0_4px_20px_rgba(168,85,247,0.3)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.5)]
            relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Generate Certificate</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-white/20 to-blue-600/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
        </Link>
      </div>
    </div>
  </div>
);

const LoadingCard = () => (
  <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
    <div className="animate-pulse">
      <div className="aspect-video w-full bg-white/5" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-white/5 rounded-md w-3/4" />
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-white/5 rounded-full mr-2" />
            <div className="h-4 bg-white/5 rounded-md w-1/3" />
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-white/5 rounded-full mr-2" />
            <div className="h-4 bg-white/5 rounded-md w-1/4" />
          </div>
        </div>
        <div className="h-10 bg-white/5 rounded-lg mt-6" />
      </div>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="col-span-full">
    <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-12 text-center">
      <Award className="mx-auto h-20 w-20 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
      <h3 className="mt-4 text-lg font-semibold text-white">No events found</h3>
      <p className="mt-2 text-gray-400">
        Check back later for upcoming community events
      </p>
    </div>
  </div>
);

const ErrorAlert = ({ message }) => (
  <div className="rounded-lg bg-red-900/50 border border-red-500/50 p-4 mt-8 backdrop-blur-xl">
    <div className="flex">
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-400">Error</h3>
        <div className="mt-2 text-sm text-red-300">{message}</div>
      </div>
    </div>
  </div>
);

const Certificates = () => {
  const { events, isLoading, error } = useEventStore();

  return (
    <div className="min-h-screen bg-[#0A0118] bg-gradient-to-b from-purple-900/20 to-blue-900/20 py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-purple-500/40 via-purple-500/0 to-purple-500/40 animate-spin-slow"
          style={{ borderRadius: "40%" }}
        />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-blue-500/40 via-blue-500/0 to-blue-500/40 animate-spin-slow"
          style={{ borderRadius: "40%" }}
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <h1 className="text-5xl md:h-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            Download your event certificates
          </h1>
          <div className="mt-4 flex justify-center gap-2">
            {/* <span className="inline-flex items-center rounded-full bg-purple-400/10 border border-purple-400/20 px-3 py-0.5 text-sm font-medium text-purple-300">
              Generate your certificates for participated events
            </span> */}
            <span className="inline-flex items-center rounded-full bg-blue-400/10 border border-blue-400/20 px-3 py-0.5 text-2xl font-medium text-blue-300">
              Generate your certificates for participated events
            </span>
          </div>
          <p className="mt-4 text-lg text-gray-300">
            Click on the event for which you want to generate a certificate, enter your email ID, and click on the "Generate Certificate" button. If your email ID is registered for the particular event, your certificate will be generated and downloaded automatically.
          </p>

          <p className="mt-4 text-gray-300">
            Each certificate is unique and contains your name which you registered with and a QR code that can be scanned to verify the authenticity of the certificate.
          </p>
          
        </div>

        {error && <ErrorAlert message={error} />}

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array(3)
              .fill(0)
              .map((_, index) => <LoadingCard key={index} />)
          ) : events.length > 0 ? (
            events.map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </div>

      {/* Dynamic glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[128px] animate-pulse-slow delay-700" />
    </div>
  );
};

// Add required animations to your tailwind.config.js:
// extend: {
//   animation: {
//     'spin-slow': 'spin 20s linear infinite',
//     'pulse-slow': 'pulse 4s ease-in-out infinite',
//   },
// }

export default Certificates;
