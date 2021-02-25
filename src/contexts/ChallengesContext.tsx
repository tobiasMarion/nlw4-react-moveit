import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json'

interface challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface challengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: ()=> void;
  activeChallenge: challenge;
  resetChallenge: ()=> void;
  experienceToNextLevel: number;
}

interface challengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as challengesContextData );

export function ChallengeProvider({ children }: challengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(20);
  const [challengesCompleted, setchallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
