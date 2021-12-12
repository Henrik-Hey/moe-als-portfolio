import Head from "next/head";
import Image from "next/image";
import Section from "../components/Section/Section";
import GridSegment from "../components/Grid/GridSegment";

export default function Home() {
  return (
    <>
      <Section name="Intro"></Section>
      <Section name="SHIBA"></Section>
      <Section name="APOLLO"></Section>
      <Section name="sk8"></Section>
    </>
  );
}
