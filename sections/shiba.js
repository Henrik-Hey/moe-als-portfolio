import Image from "next/image";
import React from "react";
import GridSegment from "../components/grid/GridSegment";
import ProjectBrief from "../components/ProjectBrief/ProjectBrief";

const Shiba = () => {
  return (
    <GridSegment
      content={
        <>
          <ProjectBrief
            brief={
              <>
                Create a mobile app for a new food delivery service, this
                service will provide access to Asian cuisine restaurants all
                around town, the target audience will be young adults who don’t
                have a lot of time to cook due to school or work
                responsibilities.
                <br />
                <br />
                “It can be hard deciding what to sometimes eat, we decided to
                narrow down the options and create a one-stop-shop for all your
                Asian cuisine needs! Save money, earn rewards, and much more
                with Shiba INU.”
              </>
            }
            timeline="4 weeks"
            roles="Ux researcher, Visual designer"
          />
        </>
      }
      image={
        <Image
          layout="fill"
          src={"/images/Shiba1.png"}
          alt="Image of shiba inu app"
        />
      }
    />
  );
};

export default Shiba;