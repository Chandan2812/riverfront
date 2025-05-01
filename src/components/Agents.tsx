import agents from "../data/agents.data.json";
import Footer from "./footer";
import Navbar from "./nav";
import agentBanner from "../assets/agent-desktop.webp";
import { useState, useMemo } from "react";

type EnrichedAgent = Omit<(typeof agents)[0], "languages"> & {
  languages: string[];
};
const AgentCard = ({ agent }: { agent: EnrichedAgent }) => (
  <div className="bg-black text-white rounded overflow-hidden shadow-md">
    <img
      src={agent.img}
      alt={agent.name}
      className="w-full h-80 object-cover"
    />
    <div className="p-4">
      <h2 className="font-semibold text-lg">{agent.name}</h2>
      <p className="text-sm text-gray-300">{agent.position}</p>
      <p className="text-sm text-gray-400">Experience: {agent.experience}</p>
      <p className="text-sm text-gray-400">Languages: {agent.languages}</p>
    </div>
  </div>
);

const AgentsSection = () => {
  const [specialization, setSpecialization] = useState("");
  const [language, setLanguage] = useState("");

  // 🔍 Extract unique specialization and languages
  const { enrichedAgents, specializations, languages } = useMemo(() => {
    const specializationSet = new Set<string>();
    const languageSet = new Set<string>();
    const enriched = agents.map((agent) => {
      const spec = agent.specialization || agent.position; // fallback
      const langs = agent.languages.split(",").map((lang) => lang.trim());
      specializationSet.add(spec);
      langs.forEach((lang) => languageSet.add(lang));
      return {
        ...agent,
        specialization: spec,
        languages: langs,
      };
    });
    return {
      enrichedAgents: enriched,
      specializations: Array.from(specializationSet).sort(),
      languages: Array.from(languageSet).sort(),
    };
  }, []);

  // ✅ Filter based on dropdowns
  const filteredAgents = useMemo(() => {
    return enrichedAgents.filter((agent) => {
      const matchesSpecialization = specialization
        ? agent.specialization === specialization
        : true;
      const matchesLanguage = language
        ? agent.languages.includes(language)
        : true;
      return matchesSpecialization && matchesLanguage;
    });
  }, [enrichedAgents, specialization, language]);

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <div className="mb-27 md:mb-20 pt-20 md:pt-10">
        <Navbar />
      </div>

      {/* Banner */}
      <div
        className="w-full h-[575px] bg-cover bg-center flex flex-col justify-center items-center text-center px-4 relative"
        style={{
          backgroundImage: `url(${agentBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <h1 className="text-4xl md:text-5xl font-semibold z-10">
          REAL ESTATE AGENTS IN DUBAI
        </h1>
        <p className="text-lg text-gray-300 mt-2 z-10">
          Team of real estate experts
        </p>
      </div>

      {/* Filters */}
      <section className="bg-[#121212] text-white py-8 px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-light">FIND YOUR PARTNER</h2>
          <div className="flex gap-4">
            {/* Specialization dropdown */}
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              <option value="">All Specializations</option>
              {specializations.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            {/* Language dropdown */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              <option value="">All Languages</option>
              {languages.map((lang, index) => (
                <option key={index} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAgents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AgentsSection;
