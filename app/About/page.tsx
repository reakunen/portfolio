// import "./styles.css";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Main } from "tsparticles-engine"

import ParticleBackground from "@/components/particle-background"

export default function Page() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">About Me 🤓</h1>
      <section className='mt-6'>
        <h1>Content</h1>
      </section>
    </div>
  )
}
