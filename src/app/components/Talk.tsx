import Card from "@/app/components/Card";
import data from "../assets/cards.json";

type Talk = {
  id: number;
  title: string;
  speaker: string;
  description: string;
};

export default function Talk() {
  const talk_1 = data.talks.find((talk: Talk) => talk.id === 1);
  const talk_2 = data.talks.find((talk: Talk) => talk.id === 2);
  const talk_3 = data.talks.find((talk: Talk) => talk.id === 3);

  return (
    <section id="talk" className="bg-black text-white py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Palestras do dia 14/02</h1>
      </div>
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {talk_1 && (
            <Card
              title={talk_1.title}
              speaker={talk_1.speaker}
              desc={talk_1.description}
            />
          )}
          {talk_2 && (
            <Card
              title={talk_2.title}
              speaker={talk_2.speaker}
              desc={talk_2.description}
            />
          )}
          
        </div>
      </div>
    </section>
  );
}
