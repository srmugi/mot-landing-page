import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import particlesOption from "../../utils/_particlesOption";

function ParticlesDefault({ on }) {
  const init = async (event) => {
    await loadFull(event);
  };

  return (
    <Particles
      init={init}
      options={particlesOption}
      style={{
        display: on ? "none" : "block",
        transition: "all 0.2s ease-in",
      }}
    />
  );
}

export default ParticlesDefault;
