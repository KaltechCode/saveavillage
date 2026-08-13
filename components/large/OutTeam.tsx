"use client";
import { becomePartnerLink, teamData } from "@/constant/data";
import Button from "../small/Button";
import { ITeam } from "@/constant/types";
import TeamCard from "../medium/TeamCard";
import { motion } from "framer-motion";
function OurTeam() {
  return (
    <section className="relative overflow-hidden md:mt-10 xl:mt-20 py-16 lg:py-24 ">
      {/* Background Shape */}
      <div className="w-[90%] mx-auto lg:max-w-[1200px] xl:max-w-[80%]">
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
              <motion.p
                className="hero-label text-primary mb-2"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                Our Programs
              </motion.p>

              <motion.h2
                className="section-title-text max-w-[600px]"
                initial={{ scaleY: 0, opacity: 0.5 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                style={{ transformOrigin: "bottom" }}
              >
                Inspiring and Helping for Better Lifestyle
              </motion.h2>
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
                url={becomePartnerLink}
                iconColor="text-primary"
                label="Join Us"
                primary={true}
                link={true}
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
