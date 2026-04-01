const particlesOption = {
  fpsLimit: 60,
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 200,
    },
    color: {
      value: "random",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      random: {
        enable: true,
      },
      value: 0.5,
    },
    size: {
      random: {
        enable: true,
      },
      value: 3,
    },
    links: {
      enable: true,
      distance: 100,
      color: {
        value: "#C5C5C5",
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
};

export default particlesOption;
