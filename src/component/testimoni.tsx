import React from "react";

const testimoni = [
  {
    name: "Irfan",
    role: "CEO of BMW",
    message: "This website is amazing! Great work and easy to use.",
    avatar: "/masakecil.jpeg",
  },
  {
    name: "Akbar",
    role: "Head-Manager of Mercedes-Benz",
    message: "Fantastic design and smooth user experience. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Adinata",
    role: "Freelancer",
    message: "Loved working with this team. Professional and talented.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimoni" className="py-12 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">My Review about me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {testimoni.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-primary-500"
            />
            <p className="text-gray-600 mb-4 italic">&quot;{t.message}&quot;</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <span className="text-sm text-gray-400">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
