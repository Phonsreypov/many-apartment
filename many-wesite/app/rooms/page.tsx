import BreadcrumbSection from "@/components/BreadcrumbSection";
import { roomList } from "@/configs/roomList";
import RoomItem from "@/components/RoomItem";
import RoomSlide from "@/components/RoomSlide";

export default function Page() {
  return (
    <>
      <BreadcrumbSection
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80"
        title="Our Rooms"
        paragraph="Explore Our Beautiful Accommodations"
      />

      <section className="py-28 bg-[#F3F4F4]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">

            {/* Subtitle */}
            <p className="uppercase tracking-[4px] text-sm text-[#C59D5F] font-semibold mb-3">
              Luxury Accommodation
            </p>

            {/* Title */}
            <h2 className="text-4xl font-serif text-gray-800 mb-4">
              Discover Our Exclusive Rooms
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Experience comfort and elegance with our beautifully designed
              rooms. Each space combines modern amenities with timeless
              luxury to ensure a relaxing and memorable stay.
            </p>

          </div>

          {/* Room Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {roomList.map((room) => (
              <RoomItem key={room.id} room={room} />
            ))}
          </div>

        </div>
        <div className="mt-20" />
        <RoomSlide />

      </section>


    </>
  );
}