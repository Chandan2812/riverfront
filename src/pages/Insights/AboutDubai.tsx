

const AboutDubai = () => {
  return (
    <section className="px-4 py-10 md:px-20 bg-white text-[#1e1e1e]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Dubai</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D12AQE2-KMNbGjAKA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688730365592?e=2147483647&v=beta&t=NwKoIskjRDWXlr0i8NSmNPKTqzCYX8zAikX_UO77U8E" // update with your actual image path
            alt="Dubai Skyline"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-justify text-sm md:text-base leading-relaxed space-y-4">
          <p>
            Recently, the UAE became one of the most visited and lived-in countries worldwide. People come here for many reasons like investing, launching a new business, reuniting with their families, or finding a high-quality lifestyle. In the last period, the UAE became one of the most visited and lived-in countries worldwide. People come here for many reasons like investing, launching a new business, gathering with their families, or finding a high-quality lifestyle.
          </p>
          <p>
            For all these reasons and more, buying a home in the UAE is a good decision on all levels. The UAE includes different emirates at which you will enjoy an ideal residential experience; however, Dubai, Abu Dhabi, and Sharjah are the most chosen and recommended cities where you will find a variety of options to suit your preferences.
          </p>
          <p>
            If you’re willing to get a new house in the UAE, then the first thing to decide is which emirate suits your needs, plan, and budget. In addition, if you choose to live in Dubai and are thinking of investing your money in real estate, you’re on the right track. There are many properties for sale in the UAE so you’re not limited to a few choices in such a big step.
          </p>
          <p>
            On the other hand, in case you want to buy a property in the UAE in a quieter and family-friendly atmosphere, then Abu Dhabi suits you the most. It’s not just the capital of the country but also among the high-in-demand living areas for expats and citizens. Abu Dhabi offers you all the services and facilities you might need whether you’re living on your own or with your family. It features numerous reputable communities where you can easily get a nice permanent home.
          </p>
          <p>
            In addition, if you have a business in the capital, then the optimum solution is owning a home in the same city too. Furthermore, Sharjah is a good city for those who want to buy a unit yet with affordable prices and also seek a budget friendly lifestyle.
          </p>
          <p>
            Its residents relish many perks; firstly, it has a prime location neighboring Dubai which allows you to easily commute between them. So, if you’re looking for an apartment or villa for sale in Sharjah, you’d be making a wise choice.
          </p>
          <p>
            Secondly, Sharjah is a hub for universities so if you have kids who are about to join college, Sharjah offers them various reputable options. Finally, the emirate features different leisure options so you can disconnect from the routine whenever you want.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDubai;
