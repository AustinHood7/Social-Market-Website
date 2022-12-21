import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle2() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          preset: {
          },
          background: {
              color: {
                  value: "#000000",
              },
              opacity: {
                value: .1,
              },
          },
          backgroundMask: {
            composite: 'destination-out'
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "repulse",
                  },
                  onHover: {
                      enable: true,
                      mode: "bubble",
                  },
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                  resize: {
                    enable: true,
                    delay: .5,
                  }
              },
              modes: {
                  push: {
                      quantity: 4,
                      default: true,
                  },
                  attract: {
                    distance: 200,
                    duration: .4,
                    easing: 'ease-out-quad',
                    factor: 1,
                    maxSpeed: 30,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 400,
                    duration: .3,
                    opacity: 1,
                    size: 4,
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: .5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                },
                  repulse: {
                    distance	:	200,
                    duration	:	0.4,
                    factor	:	100,
                    speed	:	1,
                    maxSpeed	:	50,
                    easing	:	'ease-out-quad',
            
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                },
              },
          },
          particles: {
              color: {
                  value: "#6ee7b7",
              },
              collisions: {
                overlap: {
                    enable: true,
                    retries: 0,
                },
              },
              links: {
                  color: "#bae6fd",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              collisions: {
                  enable: true,
              },
              move: {
                  direction: "bottom",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  path: {
                    clamp: true,
                  },
                  random: true,
                  speed: 3,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                      factor: 1000,
                  },
                  value: 400,
                  limit:0,
              },
              opacity: {
                  value: {
                    min: .1,
                    max: .5,
                  },
                  random: {
                    enable: true,
                    minimumValue: .1,
                  }
              },
              shape: {
                  type: "circle",
              },
              size: {
                random: {
                    enable: true,
                    minimumValue: 1,
                },
                value: {
                    min: 1,
                    max: 10,
                }
              },
              destroy: {
                split: {
                    rate: {
                        sizeOffset: true,
                        value: {
                            min: 4,
                            max: 9,
                        },
                    },
                },
              },
          },
          detectRetina: true,
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
      }}
  />
    )
}

export default Particle2
