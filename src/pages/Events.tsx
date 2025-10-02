import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { getClubById } from "@/data/clubsData";
import Card from "@/components/Card";

export default function Events() {
  const { clubId } = useParams<{ clubId: string }>();
  const club = clubId ? getClubById(clubId) : null;

  if (!club) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600">Club not found</h1>
        </div>
      </Layout>
    );
  }

  if (!club.events || club.events.length === 0) {
    return (
      <Layout clubId={club.id}>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">
            No events listed for {club.name} yet.
          </h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout clubId={club.id}>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Upcoming Events – {club.name}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {club.events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={`${event.date} — ${event.description}`}
              initial={event.title.charAt(0)}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
