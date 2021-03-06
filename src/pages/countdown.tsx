import Head from "next/head";
import { GetServerSideProps } from "next/";

import React from "react";
import styles from "../styles/pages/Countdown.module.css";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountdownComponent } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { NavBar } from "../components/NavBar";

interface CountdownProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Countdown(props: CountdownProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Contador | moveit</title>
        </Head>

        <NavBar page={0} />

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountdownComponent />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience),
    },
  };
};
