import { teamData } from "@/constant/data";
import Button from "../small/Button";
import { ITeam } from "@/constant/types";
import TeamCard from "../medium/TeamCard";
function OurTeam() {
  return (
    <section className="relative overflow-hidden md:mt-10 xl:mt-20 py-16 lg:py-24 ">
      {/* Background Shape */}
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[1500px]">
        <div className="relative z-10">
          {/* Header */}
          <div
            className="
            flex
            flex-col
            gap-8
            mb-10

            md:flex-row
            md:items-center
            md:justify-between
          "
          >
            <div>
              <p className="hero-label text-primary mb-2">Our Programs</p>

              <h2 className="section-title-text max-w-[600px]">
                Inspiring and Helping for Better Lifestyle
              </h2>
            </div>

            <div
              className="
              flex
              items-center
              gap-6
              justify-end
            "
            >
              <Button
                handler="#"
                iconColor="text-primary"
                label="Join Us"
                primary={true}
              />
            </div>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-2 gap-5 lg:gap-10 xl:gap-16 md:grid-cols-4">
            {teamData.map((team: ITeam, key: number) => {
              return <TeamCard team={team} key={key} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
