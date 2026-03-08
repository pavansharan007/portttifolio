import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import { useTheme } from "../context/ThemeContext";

const BackgroundParticles = () => {
    const { theme } = useTheme();

    const particlesInit = useCallback(async (engine) => {
        // Load the slim version of tsparticles to keep bundle size small
        await loadSlim(engine);
    }, []);

    // Theme dependent colors
    const particleColor = theme === 'dark' ? "#00d4ff" : "#0284c7"; // Cyan variants
    const linkColor = theme === 'dark' ? "#f5a623" : "#d97706";     // Gold variants

    return (
        <Particles
            id="tsparticles"
            key={theme}
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab", // connects links to the cursor
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                opacity: 0.5,
                                color: linkColor
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColor,
                    },
                    links: {
                        color: linkColor,
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60, // Number of particles
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
                fullScreen: {
                    enable: true,
                    zIndex: 0 // Keep it behind everything else
                }
            }}
            className="absolute inset-0 pointer-events-none"
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
        />
    );
};

export default BackgroundParticles;
