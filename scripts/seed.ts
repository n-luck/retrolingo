import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../database/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Korean",
        imageSrc: "/sk.svg",
      },
      {
        id: 2,
        title: "Chinese",
        imageSrc: "/china.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/italy.svg",
      },
      {
        id: 4,
        title: "Spanish",
        imageSrc: "/spain.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of Korean",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Verbs",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Verbs",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Verbs",
        order: 5,
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "man"?',
      },
      {
        id: 2,
        lessonId: 1,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is "woman"?',
      },
      {
        id: 3,
        lessonId: 1,
        type: "ASSIST",
        order: 3,
        question: '"The man"?',
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "남자",
        audioSrc: "/sk_man.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.svg",
        correct: false,
        text: "여자",
        audioSrc: "/sk_woman.mp3",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.svg",
        correct: false,
        text: "로봇",
        audioSrc: "/sk_robot.mp3",
      },
      {
        challengeId: 2,
        imageSrc: "/man.svg",
        correct: false,
        text: "남자",
        audioSrc: "/sk_man.mp3",
      },
      {
        challengeId: 2,
        imageSrc: "/woman.svg",
        correct: true,
        text: "여자",
        audioSrc: "/sk_woman.mp3",
      },
      {
        challengeId: 2,
        imageSrc: "/robot.svg",
        correct: false,
        text: "로봇",
        audioSrc: "/sk_robot.mp3",
      },
      {
        challengeId: 3,
        correct: true,
        text: "남자",
        audioSrc: "/sk_man.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "여자",
        audioSrc: "/sk_woman.mp3",
      },
      {
        challengeId: 3,
        correct: false,
        text: "로봇",
        audioSrc: "/sk_robot.mp3",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: 'Which one of these is "man"?',
      },
      {
        id: 5,
        lessonId: 2,
        type: "SELECT",
        order: 2,
        question: 'Which one of these is "woman"?',
      },
      {
        id: 6,
        lessonId: 2,
        type: "ASSIST",
        order: 3,
        question: '"The man"?',
      },
    ]);

    console.log("Seeding finished.");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the database");
  }
};

main();
