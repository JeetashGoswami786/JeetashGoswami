/**
 * Jeetash Goswami Portfolio Data Store
 * Comprehensive dataset of Projects, Research Papers, Patents, Certificates & Experience
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Jeetash Goswami",
    title: "Electrical & Embedded Systems Engineer",
    subtitles: [
      "Power Electronics & Motor Drive Specialist",
      "Embedded Systems & Custom PCB Designer",
      "Applied AI & Computer Vision Researcher",
      "Founder of VisuAle | Digital Media Creator"
    ],
    institution: "National University of Sciences & Technology (NUST-PNEC)",
    department: "Department of Electronics and Power Engineering",
    location: "Karachi, Pakistan",
    email: "jeetashgoswami1@gmail.com",
    github: "https://github.com/jeetash",
    linkedin: "https://linkedin.com/in/jeetash-goswami",
    status: "Available for Hardware R&D & Power Systems Roles",
    bioParagraph1: "I am an electrical engineer, embedded systems developer, and digital creator driven by the challenge of building intelligent hardware systems and compelling technical narratives. Currently studying at NUST-PNEC, my technical foundation spans power electronics, electric motor drives (PMSM, BLDC), embedded architectures (ESP32, STM32, Jetson Nano, ATmega), and custom multi-layer PCB design.",
    bioParagraph2: "My R&D extends from engineering high-voltage 1.5kW sensorless BLDC solar motor controllers and biomedical RF ablation units to publishing peer-reviewed research in AI-driven intrusion detection, magnetic field machinery diagnostics, and autonomous UAV fire suppression systems.",
    bioParagraph3: "Beyond the lab, I founded VisuAle to direct and produce dynamic visual content for commercial clients, merging high-tech engineering depth with cinematic storytelling. I also served as Senior Marketing Executive & Electrical Engineer for Formula Electric Racing NUST, driving corporate sponsorships and digital campaigns for Formula Student UK 2025 (34th Global Rank, NUST High Achiever Award 2025)."
  },

  stats: [
    { label: "High-Voltage Solar Drive", value: "1.5 kW+", unit: "Power Rated", icon: "zap" },
    { label: "Formula Student UK 2025", value: "34th", unit: "Global Rank", icon: "award" },
    { label: "Research & Patents", value: "15+", unit: "Publications", icon: "book-open" },
    { label: "Verified Credentials", value: "11", unit: "Certifications", icon: "check-circle" },
    { label: "Custom PCBs Fabricated", value: "4+", unit: "Tape-Outs", icon: "cpu" }
  ],

  projects: [
    {
      id: "bldc-controller",
      title: "1.5kW High-Voltage Sensorless BLDC Solar Pump Controller",
      category: "power",
      categoryLabel: "Power & Motor Drives",
      badge: "Custom Hardware",
      subtitle: "High-Voltage Discrete Inverter & Sensorless Zero-Crossing Detection",
      summary: "Industrial-grade motor controller for a 1HP (up to 1.5kW) submersible solar water pump operating directly from 60V–200V DC solar arrays, driving a 72V 13.5A sensorless BLDC motor.",
      fullDescription: `This project tackled the challenge of driving high-power submersible water pumps directly from high-voltage photovoltaic arrays without requiring costly and bulky battery banks. The system features a 2-layer high-voltage PCB layout engineered for high trace currents and optimal thermal dissipation.
      
      The power stage consists of a discrete 3-phase MOSFET bridge controlled via a custom-tuned 6-step trapezoidal commutation algorithm. A specialized resistor divider and comparator network extracts the motor's back-electromotive force (BEMF) zero-crossing points, enabling reliable sensorless starting under varying submersible fluid head pressures.
      
      Extensive hardware testing demonstrated high power efficiency, rapid closed-loop response to solar irradiance fluctuations, and comprehensive fault protections including instantaneous overcurrent, bus overvoltage, and thermal shutdown.`,
      specs: [
        { label: "PV Input Voltage Range", value: "60V – 200V DC" },
        { label: "Motor Output Rating", value: "72V DC, 13.5A (1.5 kW Peak)" },
        { label: "Commutation Method", value: "Sensorless Back-EMF Zero-Crossing" },
        { label: "Power Stage", value: "Discrete 3-Phase N-Channel MOSFET Inverter" },
        { label: "PCB Layout", value: "2-Layer Heavy Copper (2oz) with Heat Plane" },
        { label: "Protections", value: "Hardware OCP, OVP, UVP, Over-Temp Cutoff" }
      ],
      tags: ["Power Electronics", "BLDC Motor Drive", "Sensorless Control", "High-Voltage PCB", "Solar Inverter"],
      images: [
        { src: "assets/images/projects/bldc-controller-1.webp", alt: "BLDC Solar Pump Controller Assembled Board" },
        { src: "assets/images/projects/bldc-controller-2.webp", alt: "Power Stage & Gate Driver Layout" },
        { src: "assets/images/projects/bldc-controller-3.webp", alt: "Bench Testing with 72V Submersible BLDC" },
        { src: "assets/images/projects/bldc-controller-4.webp", alt: "Back-EMF Zero Crossing Conditioning Network" },
        { src: "assets/images/projects/bldc-controller-5.webp", alt: "Schematic Architecture & Topology" },
        { src: "assets/images/projects/bldc-controller-6.webp", alt: "Oscilloscope Waveform Capture" }
      ]
    },

    {
      id: "optera-medical",
      title: "OPTERA RF Ablation Medical Controller & Interface",
      category: "embedded",
      categoryLabel: "Embedded & Hardware",
      badge: "Medical Embedded",
      subtitle: "Millisecond-Level Physiological Impedance Tracking & Safety Interlocks",
      summary: "Central intelligence unit for a radiofrequency (RF) tissue ablation and bipolar electrosurgical generator, featuring low-latency physiological feedback and medical-grade safety interlocks.",
      fullDescription: `OPTERA was engineered as the central control and supervisory unit of an advanced electrosurgical RF generator. In electrosurgery and radiofrequency tissue ablation, real-time control over delivered RF energy is paramount to prevent collateral thermal injury to healthy adjacent tissues.
      
      The system captures millisecond-level physiological tissue impedance feedback, automatically modulating the RF generator output stage to maintain desired coagulation or ablation depth. It features a fail-safe safety interlock architecture that constantly monitors neutral return plate integrity, high-frequency leakage currents, and patient contact resistance.
      
      The hardware incorporates galvanic isolation between high-voltage surgical RF circuitry and low-voltage digital processing, linked to a responsive surgeon-facing touch interface for immediate telemetry readout.`,
      specs: [
        { label: "Target Application", value: "Bipolar Electrosurgery & RF Tissue Ablation" },
        { label: "Feedback Response", value: "<10 ms Real-Time Impedance Tracking" },
        { label: "Safety System", value: "Fail-Safe Neutral Electrode & Leakage Interlock" },
        { label: "Architecture", value: "Galvanically Isolated Mixed-Signal Embedded System" },
        { label: "User Interface", value: "Low-Latency Surgeon Touch Screen Telemetry" }
      ],
      tags: ["Medical Devices", "RF Ablation", "Safety Interlocks", "Mixed-Signal", "Galvanic Isolation"],
      images: [
        { src: "assets/images/projects/optera-medical-1.webp", alt: "OPTERA Medical Device Main Controller Board" },
        { src: "assets/images/projects/optera-medical-2.webp", alt: "Isolated High-Frequency Sensing Front-End" },
        { src: "assets/images/projects/optera-medical-3.webp", alt: "Medical Bench Test Setup & Load Emulation" },
        { src: "assets/images/projects/optera-medical-4.webp", alt: "Real-Time Telemetry and Display Module" }
      ]
    },

    {
      id: "dawlance-helmet",
      title: "Dawlance Smart Motorcycle Safety System (IoT Ignition Interlock)",
      category: "embedded",
      categoryLabel: "Embedded & Hardware",
      badge: "IoT & Automotive",
      subtitle: "Dual-Node CDI Circuit Interception & Wireless Rider Authentication",
      summary: "Dual-node IoT safety system that physically intercepts a motorcycle's Capacitor Discharge Ignition (CDI) circuit, immobilizing the engine until a paired smart helmet confirms rider presence.",
      fullDescription: `Motorcycle accidents account for a substantial percentage of urban road fatalities, primarily driven by non-compliance with helmet safety standards. The Dawlance Smart Motorcycle Safety System was engineered as an automated preventative barrier.
      
      Operating on a dual-node architecture, the motorcycle-side receiver module physically intercepts the CDI ignition primary circuit via an automotive-grade relay. The engine remains disabled until the helmet-side transmitter node authenticates that the rider has securely fastened the helmet and is actively seated on the motorcycle.
      
      Communication is conducted over a robust dual-band encrypted RF channel resilient against industrial interference. The design incorporates ultra-low power sleep states to prevent motorcycle battery drainage and integrates fail-safe fallback modes for roadside emergency situations.`,
      specs: [
        { label: "Interlock Mechanism", value: "Physical CDI Circuit Interception Relay" },
        { label: "Authentication Link", value: "Dual-Band Encrypted RF Wireless Handshake" },
        { label: "Detection Nodes", value: "Capacitive Head Proximity & Buckle Contact" },
        { label: "Quiescent Current", value: "< 5 mA Standby Drain" },
        { label: "Reliability Standard", value: "Automotive Vibration & Weather Sealed Housing" }
      ],
      tags: ["Automotive IoT", "CDI Intercept", "Embedded Hardware", "Hardware Security", "RF Comm"],
      images: [
        { src: "assets/images/projects/dawlance-helmet-1.webp", alt: "Dawlance Smart Helmet Embedded Node" },
        { src: "assets/images/projects/dawlance-helmet-2.webp", alt: "CDI Ignition Intercept Receiver Unit" },
        { src: "assets/images/projects/dawlance-helmet-3.webp", alt: "Bench Testing of Interlock Switching" },
        { src: "assets/images/projects/dawlance-helmet-4.webp", alt: "Helmet Sensor Assembly and Wiring" }
      ]
    },

    {
      id: "ansys-pmsm",
      title: "PMSM Electric Aircraft Propulsion Motor — ANSYS FEA & Thermal Analysis",
      category: "simulation",
      categoryLabel: "CAD & Simulation",
      badge: "Aerospace FEA",
      subtitle: "Multi-Physics Electromagnetic & Thermal Co-Simulation in ANSYS Maxwell & Icepak",
      summary: "Finite element analysis (FEA) verification of a Permanent Magnet Synchronous Motor (PMSM) for electric aircraft propulsion across preflight, climb, cruise, and descent mission profiles.",
      fullDescription: `Electric aviation demands uncompromising power-to-weight density while maintaining strict thermal operating envelopes to prevent irreversible magnet demagnetization. This project involved extensive 2D and 3D FEA verification of a PMSM propulsion motor based on the KLA-100X aerospace benchmark.
      
      Using ANSYS Electronics Desktop (Maxwell 2D, RMxprt, and Icepak), the motor's transient electromagnetic behaviors—such as stator core iron losses, copper I²R dissipation, cogging torque, and back-EMF harmonics—were evaluated and coupled into ANSYS Icepak for conjugate heat transfer simulation.
      
      Critical flight profiles were investigated: Preflight taxi, Full Throttle Climb (peak thermal stress), High-Altitude Cruise, and Descent. The study validated cooling duct geometries and ensured rotor magnet temperatures remained comfortably below the NdFeB Curie threshold under emergency continuous climb.`,
      specs: [
        { label: "Software Toolchain", value: "ANSYS Electronics Desktop (Maxwell 2D, RMxprt, Icepak)" },
        { label: "Motor Topology", value: "Permanent Magnet Synchronous Motor (PMSM)" },
        { label: "Simulated Profiles", value: "Preflight Idle, Full-Throttle Climb, Cruise, Descent" },
        { label: "Thermal Analysis", value: "Coupled Electromagnetic-Conjugate Heat Transfer" },
        { label: "Key Validation", value: "Demagnetization Margin > 25% at 140°C Hot-Spot" }
      ],
      tags: ["ANSYS Maxwell", "ANSYS Icepak", "Electric Aircraft", "Thermal FEA", "Electromagnetics"],
      images: [
        { src: "assets/images/projects/ansys-pmsm-1.webp", alt: "Climb Phase Thermal Gradient Distribution (Peak Stress)" },
        { src: "assets/images/projects/ansys-pmsm-2.webp", alt: "Descent Phase Motor Thermal Cooling Contour" },
        { src: "assets/images/projects/ansys-pmsm-3.webp", alt: "Preflight Ground Idle Steady-State Heat Map" }
      ]
    },

    {
      id: "ipm-motor",
      title: "High Energy Density IPM Traction Motor for Electric Vehicles",
      category: "power",
      categoryLabel: "Power & Motor Drives",
      badge: "EV Powertrain",
      subtitle: "dq-Axis Flux Optimization, FEA Sensitivity Analysis & Physical Prototyping",
      summary: "Complete electromagnetic design, dq-axis flux linkage optimization, and hardware fabrication of an Interior Permanent Magnet (IPM) synchronous traction motor for electric vehicle applications.",
      fullDescription: `Interior Permanent Magnet (IPM) machines are the premier choice for automotive electric traction due to their high torque density and wide constant-power speed range (CPSR) driven by reluctance torque.
      
      This project encompassed the end-to-end design cycle: analytical magnetic circuit dimensioning, finite element parametric optimization in ANSYS Maxwell, and physical prototype fabrication. Rotor flux barriers were arranged in a V-topology to optimize d-axis and q-axis inductances (Ld, Lq), maximizing torque output while suppressing cogging torque.
      
      Following simulation validation, physical silicon-steel laminations were stacked, stator slots were precision wound with multi-strand copper magnet wire, and the rotor assembly was balanced for dyno characterization.`,
      specs: [
        { label: "Topology", value: "V-Shape Interior Permanent Magnet (IPM) Rotor" },
        { label: "Target Application", value: "Electric Vehicle (EV) High-Torque Traction" },
        { label: "Key Analysis", value: "dq-Axis Flux Linkage, Armature Reaction, Cogging Torque" },
        { label: "Fabrication", value: "Laser-cut 0.35mm Silicon Steel Laminations & NdFeB Magnets" },
        { label: "Efficiency Target", value: "> 94% across EV urban drive cycle" }
      ],
      tags: ["IPM Motor", "EV Traction", "ANSYS Maxwell", "Motor Prototyping", "Power Electronics"],
      images: [
        { src: "assets/images/projects/ipm-motor-1.webp", alt: "ANSYS 2D FEA Magnetic Flux Density Contour" },
        { src: "assets/images/projects/ipm-motor-2.webp", alt: "Complete Torque vs Rotor Angle Map" },
        { src: "assets/images/projects/ipm-motor-3.webp", alt: "SolidWorks Rotor 3D CAD Assembly" },
        { src: "assets/images/projects/ipm-motor-4.webp", alt: "Assembled Prototype Stator Core & Copper Windings" },
        { src: "assets/images/projects/ipm-motor-5.webp", alt: "Rotor Lamination Stack & Shaft Press Fit" }
      ]
    },

    {
      id: "oil-dispenser",
      title: "Smart Cooking Oil Dispenser — High-Current & Mixed-Signal Controller PCB",
      category: "embedded",
      categoryLabel: "Embedded & Hardware",
      badge: "Industrial Mixed-Signal",
      subtitle: "ESP32 Mixed-Signal Hardware Platform with 24V Valve Drivers & 24-Bit ADC",
      summary: "Industrial-grade hardware prototype for automated commercial oil dispensing. Integrates an ESP32 MCU, 24V solenoid drivers, Nextion HMI bus, and microvolt-level 24-bit ADC load cell instrumentation.",
      fullDescription: `Designed and fabricated as a commercial automated dispensing appliance, this custom controller board solves the tricky engineering challenge of co-locating heavy-duty 24V inductive solenoid switching alongside sensitive microvolt-level analog weight measurements on a compact PCB.
      
      The central controller is an ESP32 dual-core MCU managing dispensing state machines and an isolated UART interface to a Nextion touchscreen. An onboard 24-bit differential ADC (HX711) interfaces with a high-precision strain-gauge load cell to provide accurate gravimetric volume dispensing down to ±1 gram.
      
      The power stage features logic-level N-channel MOSFETs with integrated transient freewheeling diodes and split analog/digital ground planes to eliminate switching noise corruption during high-current valve actuation.`,
      specs: [
        { label: "Processing Core", value: "ESP32 Dual-Core Xtensa @ 240 MHz" },
        { label: "Precision Analog Front-End", value: "24-Bit Differential Sigma-Delta ADC" },
        { label: "Actuator Drive Capacity", value: "4x 24V DC / 3A Solenoid MOSFET Drivers" },
        { label: "HMI Interface", value: "Isolated High-Speed UART Touchscreen Bus" },
        { label: "Layout Strategy", value: "Star-Ground Mixed Signal with Noise Isolation" }
      ],
      tags: ["Custom PCB", "ESP32", "Mixed-Signal Design", "Precision ADC", "Altium Designer"],
      images: [
        { src: "assets/images/projects/oil-dispenser-1.webp", alt: "Fabricated Mixed-Signal Oil Dispenser PCB Top" },
        { src: "assets/images/projects/oil-dispenser-2.webp", alt: "Power Stage & 24V Solenoid Drivers" },
        { src: "assets/images/projects/oil-dispenser-3.webp", alt: "Complete Dispensing Prototype Bench Setup" }
      ]
    },

    {
      id: "atmega-pcb",
      title: "Custom ATmega2560 Industrial Integration Board",
      category: "embedded",
      categoryLabel: "Embedded & Hardware",
      badge: "PCB Integration",
      subtitle: "Onboard 18650 Li-Ion BMS, Boost Regulation & Industrial Header Layout",
      summary: "Consolidated a sprawling wire-harness Arduino Mega prototype into a single, cohesive, manufacturable PCB with integrated 18650 Li-ion battery charging and 5V boost power supply.",
      fullDescription: `Prototype systems built using standard development boards and breadboards frequently suffer from reliability bottlenecks caused by loose jumper wires and unmanaged battery power. This project replaced an unwieldy wire-harness system with an integrated commercial-grade printed circuit board.
      
      The board integrates the ATmega2560 microcontroller alongside an onboard lithium-ion battery management subsystem. It incorporates a TP4056-based charging controller, synchronous DC-DC boost converter stepping the single-cell 3.7V Li-ion voltage up to a clean 5V rail, and dedicated TVS diodes for ESD transient suppression.
      
      All I/O pins are broken out into keyed, latching industrial headers with decoupled power lines, facilitating foolproof field deployment and rapid assembly.`,
      specs: [
        { label: "Microcontroller", value: "Microchip ATmega2560 8-bit AVR @ 16 MHz" },
        { label: "Power Subsystem", value: "Onboard 18650 Li-Ion Charger + 5V Synchronous Boost" },
        { label: "Board Dimensions", value: "Custom Compact 2-Layer FR4 Form Factor" },
        { label: "Connectors", value: "Keyed Molex/JST Latching Industrial Headers" },
        { label: "Protection", value: "Overcharge, Under-Voltage Lockout & ESD Suppression" }
      ],
      tags: ["PCB Design", "ATmega2560", "Power Management", "BMS", "KiCad"],
      images: [
        { src: "assets/images/projects/atmega-pcb-1.webp", alt: "Custom ATmega2560 Integrated PCB Board" }
      ]
    },

    {
      id: "tripack-scada",
      title: "Tri-Pack Films Cloud SCADA Energy Management Dashboard",
      category: "iot",
      categoryLabel: "IoT & SCADA",
      badge: "Industrial IoT",
      subtitle: "Shop-Floor OT-to-IT Bridge & Real-Time Power Telemetry Analytics",
      summary: "Enterprise industrial IoT data pipeline bridging shop-floor PLC/SCADA power instrumentation with a cloud energy dashboard at Tri-Pack Films Limited, monitoring power factor and harmonic distortion.",
      fullDescription: `Developed during an electrical engineering internship at Tri-Pack Films Limited (leading BOPP film manufacturer), this project modernized plant-wide electrical energy oversight by bridging Operations Technology (OT) with Information Technology (IT).
      
      Using industrial Modbus RTU/TCP protocols, the system pools real-time power metrics—including 3-phase line voltages, active and reactive power, power factor, and total harmonic distortion (THD)—from distributed multi-function power meters across plant distribution panels.
      
      The data streams to an interactive cloud dashboard featuring automated peak demand profiling, low power-factor penalty warnings, and historical energy consumption heatmaps, enabling plant engineers to optimize transformer loadings and slash utility penalties.`,
      specs: [
        { label: "Industrial Protocol", value: "Modbus RTU / Modbus TCP over Industrial RS-485" },
        { label: "Telemetric Variables", value: "3-Phase Voltage/Current, kW, kVA, Power Factor, THD" },
        { label: "Dashboard Platform", value: "Interactive Cloud SCADA with Real-Time WebSockets" },
        { label: "Alert System", value: "Automated Threshold Alerts for Power Factor & Overload" },
        { label: "Certification", value: "Official Internship Project Recognition (Tri-Pack Films)" }
      ],
      tags: ["SCADA", "Industrial IoT", "Modbus", "Energy Telemetry", "Power Quality"],
      images: [
        { src: "assets/images/projects/tripack-scada-1.webp", alt: "Tri-Pack Films Cloud SCADA Power Factor Dashboard" },
        { src: "assets/images/projects/tripack-scada-2.webp", alt: "Real-Time 3-Phase Energy Consumption Metrics" }
      ]
    },

    {
      id: "swarm-drones",
      title: "Autonomous Swarm Drone Coordination System (Skybrush & ArduCopter)",
      category: "ai",
      categoryLabel: "AI & Robotics",
      badge: "Autonomous Systems",
      subtitle: "Multi-UAV Formation Planning, Autotuned PID Loops & Emergency Mission Routing",
      summary: "Autonomous swarm drone coordination architecture using ArduCopter firmware on Pixhawk flight controllers integrated with Skybrush Studio and Live for multi-UAV tactical mission execution.",
      fullDescription: `Autonomous drone swarms represent the forefront of rapid emergency response and aerial industrial inspection. This initiative implemented an end-to-end swarm coordination pipeline capable of deploying multiple quadrotors simultaneously without inter-vehicle collisions.
      
      The hardware utilizes Pixhawk FMUv3 flight controllers running custom-compiled ArduCopter firmware. Individual UAV dynamics were autotuned for aggressive wind rejection and rapid trajectory following. Mission choreography and real-time swarm command were orchestrated using Skybrush Studio and Skybrush Live ground station software.
      
      The system was applied in simulations of autonomous industrial fire suppression and sensor payload delivery, validating dynamic waypoint re-routing if any member drone experienced sensor or battery degradation.`,
      specs: [
        { label: "Autopilot Hardware", value: "Pixhawk FMUv3 with High-Precision GPS/RTK" },
        { label: "Firmware Stack", value: "ArduCopter Custom Compiled with Swarm Telemetry Hooks" },
        { label: "Choreography Tool", value: "Skybrush Studio (Blender 3D Trajectory Engine)" },
        { label: "Ground Control", value: "Skybrush Live Swarm Telemetry & Heartbeat Server" },
        { label: "Applications", value: "Coordinated Fire Auditing, Industrial Inspection & Formation" }
      ],
      tags: ["Drone Swarm", "ArduCopter", "Pixhawk", "Skybrush", "Autonomous Robotics"],
      images: [
        { src: "assets/images/projects/swarm-drones-1.webp", alt: "Skybrush Multi-Drone Mission Architecture & UAV V1" },
        { src: "assets/images/projects/swarm-drones-2.webp", alt: "ArduCopter In-Flight Autotuning & PID Telemetry" }
      ]
    },

    {
      id: "mtc-bench",
      title: "Advanced 72V 8kW PMSM Powertrain Dynamometer & Testbench",
      category: "power",
      categoryLabel: "Power & Motor Drives",
      badge: "Motor Test Bench",
      subtitle: "DWZ40 Eddy Current Dynamometer, Dynamic Torque Telemetry & Powertrain Characterization",
      summary: "Engineering architecture and instrumentation proposal for testing high-power 72V 8000W PMSM electric vehicle powertrains using a DWZ40 dynamometer and dual-range dynamic torque transducers.",
      fullDescription: `High-performance electric vehicles demand meticulous motor characterization under simulated road load conditions. This project established the design and proposal for an advanced motor testing bench developed for MTC and Formula Electric Racing NUST.
      
      The testbed couples a 72V 8000W Permanent Magnet Synchronous Motor (PMSM) with a heavy-duty DWZ40 eddy-current dynamometer brake. Dual-channel dynamic torque transducers (5–100 N·m and 200–500 N·m) capture instantaneous torque pulsations, shaft speed, and mechanical power output.
      
      The setup facilitates comprehensive efficiency mapping across the entire torque-speed envelope, thermal rise profiling under continuous peak power, and validation of Field-Oriented Control (FOC) field-weakening algorithms.`,
      specs: [
        { label: "Motor Under Test", value: "72V 8000W PMSM Traction Motor" },
        { label: "Dynamometer Brake", value: "DWZ40 Water-Cooled Eddy Current Dyno" },
        { label: "Torque Measurement", value: "ZHKY2050 Dual-Range High-Precision Dynamic Torque Sensors" },
        { label: "Telemetry & DAQ", value: "Real-Time Mechanical & Electrical Power Logger" },
        { label: "Mechanical Mount", value: "SolidWorks Precision Vibration-Damped Bedplate" }
      ],
      tags: ["Dynamometer", "PMSM Powertrain", "Torque Sensors", "FOC Bench", "Mechanical CAD"],
      images: [
        { src: "assets/images/projects/ipm-motor-3.webp", alt: "3D CAD Model of Motor Testbench Stand" }
      ]
    }
  ],

  researchPapers: [
    {
      id: "paper-ids",
      title: "Real-Time Network Intrusion Detection: A Comparative Study of Random Forest and Decision Tree",
      authors: "Jeetash Goswami, Deve Raj, Anjali Goswami, Prianka Rathore",
      venue: "ICIT — International Conference on Information Technology",
      year: "2025",
      type: "Conference Paper",
      category: "cyber",
      status: "Published / Presented",
      abstract: "The rapid expansion of distributed computer networks and industrial IoT systems has escalated vulnerabilities to zero-day cyber threats and denial-of-service incursions. This paper presents a real-time Network Intrusion Detection System (NIDS) evaluating machine learning ensemble architectures against conventional decision trees. Leveraging real-time packet inspection tools (Scapy and custom Python packet sniffer/defender pipelines), the study analyzes traffic flows, feature extraction latencies, and classification accuracy. Experimental evaluations show that Random Forest ensemble models achieve superior classification accuracy (>98.2%) with minimal false-alarm rates compared to single decision trees, while maintaining sub-millisecond per-packet inference latencies suitable for inline edge deployment.",
      keywords: ["Network Intrusion Detection", "Random Forest", "Decision Tree", "Ensemble Learning", "Real-Time Packet Inspection"],
      pdfUrl: "assets/docs/papers/ids-ensemble-learning.pdf",
      figures: [
        { src: "assets/images/research/ids-confusion.webp", caption: "Confusion Matrix: Random Forest vs Decision Tree" },
        { src: "assets/images/research/ids-traffic.webp", caption: "Real-Time Network Packet Flow Telemetry" },
        { src: "assets/images/research/ids-attacker.webp", caption: "Simulated Attack Vectors & Defense Tracing" }
      ],
      bibtex: `@inproceedings{goswami2025nids,
  title={Real-Time Network Intrusion Detection: A Comparative Study of Random Forest and Decision Tree},
  author={Goswami, Jeetash and Raj, Deve and Goswami, Anjali and Rathore, Prianka},
  booktitle={Proceedings of the International Conference on Information Technology (ICIT)},
  year={2025}
}`
    },

    {
      id: "paper-fault-diag",
      title: "Non-Intrusive Fault Diagnosis of Electrical Machinery via 2D Magnetic Field Visualization",
      authors: "Syed Sajjad Haidar Zaidi, Mohammad Ammar Akbar, Jeetash Goswami, Fatima Zehra",
      venue: "ICIT — International Conference on Information Technology",
      year: "2025",
      type: "Conference Paper",
      category: "power",
      status: "Published / Presented",
      abstract: "Traditional condition monitoring of electrical motors relies on intrusive vibration probes or invasive current sensor retrofits. This paper introduces an external, non-intrusive fault detection methodology utilizing a 2D Hall-effect magnetic sensor matrix arranged outside the motor casing. By capturing spatial stray magnetic flux distributions and transforming them into 2D dynamic magnetic flux contours, the framework identifies subtle rotor bar breakages, stator winding inter-turn short circuits, and mechanical eccentricities before catastrophic failure occurs, presenting a cost-effective, zero-downtime diagnostic technique.",
      keywords: ["Machinery Fault Diagnosis", "Stray Magnetic Flux", "2D Magnetic Field Visualization", "Predictive Maintenance", "Condition Monitoring"],
      pdfUrl: "assets/docs/papers/non-intrusive-fault-diagnosis.pdf",
      bibtex: `@inproceedings{zaidi2025fault,
  title={Non-Intrusive Fault Diagnosis of Electrical Machinery via 2D Magnetic Field Visualization},
  author={Zaidi, Syed Sajjad Haidar and Akbar, Mohammad Ammar and Goswami, Jeetash and Zehra, Fatima},
  booktitle={Proceedings of the International Conference on Information Technology (ICIT)},
  year={2025}
}`
    },

    {
      id: "paper-drone-fire",
      title: "Autonomous Safety Audit and Response Drone for Industrial Fire Suppression using Solid CO₂",
      authors: "Jeetash Goswami, Team Engineering Research",
      venue: "ICoDT2 — International Conference on Digital Transformation & Technologies",
      year: "2025",
      type: "Conference Paper",
      category: "cyber",
      status: "Published / Presented",
      abstract: "Industrial hazardous environments (e.g. chemical warehouses, battery test facilities) present extreme hazards for human first responders during early fire initiation. This paper details the design and deployment of an autonomous Unmanned Aerial Vehicle (UAV) system engineered for rapid industrial safety auditing and localized fire containment. The drone integrates onboard thermal imaging with a specialized solid carbon dioxide (CO₂ dry ice) pellet dispersal mechanism. Solid CO₂ delivers superior cooling through sublimation without water-conductive electrical short hazards, effectively choking electrical fires while leaving zero liquid residue.",
      keywords: ["Autonomous UAV", "Fire Suppression", "Solid CO2", "Thermal Imaging", "Industrial Safety"],
      pdfUrl: "assets/docs/papers/autonomous-fire-suppression-drone.pdf",
      bibtex: `@inproceedings{goswami2025dronefire,
  title={Autonomous Safety Audit and Response Drone for Industrial Fire Suppression using Solid CO2},
  author={Goswami, Jeetash and Collaborators},
  booktitle={International Conference on Digital Transformation and Technologies (ICoDT2)},
  year={2025}
}`
    },

    {
      id: "paper-fabric-defect",
      title: "Real-Time Fabric Defect Detection Using Jetson Nano and Deep Learning",
      authors: "Jeetash Goswami, Engineering Research Team",
      venue: "IEEC 2026 — International Electrical Engineering Conference",
      year: "2026",
      type: "Conference Paper",
      category: "cyber",
      status: "Accepted / In Press",
      abstract: "Textile manufacturing suffers significant quality loss from manual visual defect inspection. This study presents a compact edge AI inspection system deployed on an NVIDIA Jetson Nano. Employing an optimized lightweight convolutional neural network (CNN) trained on textile defect datasets (holes, stains, thread misalignments), the edge device executes real-time 30 FPS inference on moving loom fabric with over 96.4% recall, triggering automated loom stop signals to prevent massive waste.",
      keywords: ["Edge AI", "Jetson Nano", "Fabric Defect Detection", "Computer Vision", "Deep Learning"],
      pdfUrl: "assets/docs/papers/fabric-defect-detection-jetson.pdf",
      bibtex: `@inproceedings{goswami2026fabric,
  title={Real-Time Fabric Defect Detection Using Jetson Nano and Deep Learning},
  author={Goswami, Jeetash and Co-authors},
  booktitle={Proceedings of the International Electrical Engineering Conference (IEEC)},
  year={2026}
}`
    },

    {
      id: "paper-scooty-charger",
      title: "Design and Implementation of a Rapid Electric Scooty Charger",
      authors: "Jeetash Goswami, Electrical Engineering Research Group",
      venue: "IEEC 2026 — International Electrical Engineering Conference",
      year: "2026",
      type: "Conference Paper",
      category: "power",
      status: "Accepted / In Press",
      abstract: "The proliferation of light electric two-wheelers demands robust, rapid charging topologies tailored for harsh grid conditions. This paper presents the architecture and hardware prototype of a high-efficiency rapid electric scooty charger. Incorporating a two-stage power conversion scheme with Active Power Factor Correction (APFC) and an isolated resonant DC-DC converter, the charger provides adaptive Constant-Current / Constant-Voltage (CC/CV) profiles while mitigating grid harmonics and battery thermal degradation.",
      keywords: ["EV Fast Charger", "Resonant Converter", "Power Factor Correction", "Battery Health", "Power Electronics"],
      pdfUrl: "assets/docs/papers/rapid-electric-scooty-charger.pdf",
      bibtex: `@inproceedings{goswami2026charger,
  title={Design and Implementation of a Rapid Electric Scooty Charger},
  author={Goswami, Jeetash and Co-authors},
  booktitle={Proceedings of the International Electrical Engineering Conference (IEEC)},
  year={2026}
}`
    },

    {
      id: "paper-ac-servo",
      title: "Development of AC Servo Motor Drive: Design, Implementation & Challenges",
      authors: "Jeetash Goswami, Motion Control Research Lab",
      venue: "IEEC 2026 — International Electrical Engineering Conference",
      year: "2026",
      type: "Conference Paper",
      category: "power",
      status: "Accepted / In Press",
      abstract: "High-precision automated machinery requires high-bandwidth AC servo drives capable of sub-millisecond dynamic position and torque trajectory following. This paper details the hardware and firmware implementation of a Field-Oriented Controlled (FOC) AC servo drive. The paper addresses critical engineering hurdles including current transducer offset drift, dead-time compensation in high-frequency PWM inverters, and high-resolution optical encoder noise immunity in industrial environments.",
      keywords: ["AC Servo Drive", "Field-Oriented Control", "Dead-Time Compensation", "Motion Control", "Inverter Design"],
      pdfUrl: "assets/docs/papers/ac-servo-motor-drive.pdf",
      bibtex: `@inproceedings{goswami2026servo,
  title={Development of AC Servo Motor Drive: Design, Implementation and Challenges},
  author={Goswami, Jeetash and Co-authors},
  booktitle={Proceedings of the International Electrical Engineering Conference (IEEC)},
  year={2026}
}`
    },

    {
      id: "paper-cable-defect",
      title: "Defect Detection System for Underground Medium Voltage Cables Using Magnetic Field Techniques",
      authors: "Jeetash Goswami, Power Systems Research Group",
      venue: "IEEC 2026 — International Electrical Engineering Conference",
      year: "2026",
      type: "Conference Paper",
      category: "power",
      status: "Accepted / In Press",
      abstract: "Underground Medium Voltage (MV) cable faults often go undetected until catastrophic insulation flashovers disrupt power distribution grids. This research introduces a non-destructive electromagnetic inspection probe that measures surface magnetic field distortions caused by localized shield corrosion and water treeing in buried XLPE power cables, drastically reducing fault excavation downtime.",
      keywords: ["Underground Cables", "Medium Voltage", "Magnetic Field Sensors", "Insulation Diagnostics", "Power Distribution"],
      pdfUrl: "assets/docs/papers/underground-cable-defect-detection.pdf",
      bibtex: `@inproceedings{goswami2026cable,
  title={Defect Detection System for Underground Medium Voltage Cables Using Magnetic Field Techniques},
  author={Goswami, Jeetash and Co-authors},
  booktitle={Proceedings of the International Electrical Engineering Conference (IEEC)},
  year={2026}
}`
    },

    {
      id: "paper-blockchain-meter",
      title: "Blockchain-Based Smart Metering for Decentralized Microgrids",
      authors: "Jeetash Goswami, Smart Grid Research Lab",
      venue: "IEEC 2026 — International Electrical Engineering Conference",
      year: "2026",
      type: "Conference Paper",
      category: "cyber",
      status: "Accepted / In Press",
      abstract: "Decentralized renewable energy microgrids require tamper-proof, autonomous billing and peer-to-peer (P2P) trading frameworks. This paper presents an embedded smart meter node utilizing cryptographic hardware elements to commit cryptographically signed energy generation and consumption telemetry directly to an Ethereum/Polygon-compatible smart contract, preventing meter tampering and facilitating peer energy auctions.",
      keywords: ["Blockchain", "Smart Metering", "Microgrid", "P2P Energy Trading", "Cryptographic Security"],
      pdfUrl: "assets/docs/papers/blockchain-smart-metering.pdf",
      bibtex: `@inproceedings{goswami2026smartmeter,
  title={Blockchain-Based Smart Metering for Decentralized Microgrids},
  author={Goswami, Jeetash and Co-authors},
  booktitle={Proceedings of the International Electrical Engineering Conference (IEEC)},
  year={2026}
}`
    },

    {
      id: "paper-solar-albedo",
      title: "Spatio-Temporal Mapping of Large-Scale Solar Farm Expansion and Its Impact on Local Albedo and Land Surface Temperature",
      authors: "Jeetash Goswami, Geospatial & Energy Research Group",
      venue: "MUET Research / Remote Sensing Conference",
      year: "2025",
      type: "Conference Paper",
      category: "climate",
      status: "Published / Presented",
      abstract: "Gigawatt-scale photovoltaic installations alter regional surface energy balances by changing ground albedo and emissivity. Using multi-decadal Landsat-8 and Sentinel-2 satellite imagery, this paper analyzes the microclimatic heat-island effects surrounding massive solar parks (e.g. Quaid-e-Azam Solar Park and Gonghe Solar Complex), correlating thermal band LST changes with localized vegetation indices and energy yield efficiencies.",
      keywords: ["Solar Farm Expansion", "Land Surface Temperature", "Albedo", "Remote Sensing", "Satellite Analytics"],
      pdfUrl: "assets/docs/papers/solar-farm-expansion-albedo.pdf",
      figures: [
        { src: "assets/images/research/solar-park-albedo.webp", caption: "Albedo vs Land Surface Temperature Shift Map" },
        { src: "assets/images/research/solar-park-accuracy.webp", caption: "Temporal Expansion Classification Accuracy" }
      ],
      bibtex: `@article{goswami2025solaralbedo,
  title={Spatio-Temporal Mapping of Large-Scale Solar Farm Expansion and Its Impact on Local Albedo and Land Surface Temperature},
  author={Goswami, Jeetash and Co-authors},
  journal={MUET Research Repository},
  year={2025}
}`
    },

    {
      id: "paper-shoreline",
      title: "Precision Shoreline Extraction and Erosion Monitoring Using U-Net Based Semantic Segmentation of Multi-Decadal Satellite Imagery",
      authors: "Jeetash Goswami, Earth Observation Team",
      venue: "MUET Geospatial Proceedings",
      year: "2025",
      type: "Conference Paper",
      category: "climate",
      status: "Published / Presented",
      abstract: "Coastal erosion threatens vital deltaic communities and critical infrastructure. This research develops a deep learning U-Net semantic segmentation model trained on high-resolution multispectral imagery to automate continuous shoreline delineation across decadal epochs. The methodology achieves sub-pixel boundary accuracy and quantifies annual land loss rates along dynamic coastal fronts.",
      keywords: ["U-Net Segmentation", "Shoreline Extraction", "Coastal Erosion", "Satellite Remote Sensing", "Deep Learning"],
      pdfUrl: "assets/docs/papers/shoreline-extraction-unet.pdf",
      bibtex: `@article{goswami2025shoreline,
  title={Precision Shoreline Extraction and Erosion Monitoring Using U-Net Based Semantic Segmentation of Multi-Decadal Satellite Imagery},
  author={Goswami, Jeetash and Co-authors},
  journal={MUET Geospatial Proceedings},
  year={2025}
}`
    },

    {
      id: "paper-crop-damage",
      title: "Rapid Post-Flood Crop Damage Assessment Using Sentinel-1 SAR Time-Series and Change Detection Algorithms",
      authors: "Jeetash Goswami, Remote Sensing Lab",
      venue: "MUET Disaster Management Series",
      year: "2025",
      type: "Conference Paper",
      category: "climate",
      status: "Published / Presented",
      abstract: "Monsoon floods cause catastrophic agricultural damage requiring rapid, cloud-penetrating assessment. This paper presents an automated damage assessment pipeline utilizing Synthetic Aperture Radar (SAR) backscatter time-series from Sentinel-1 satellites. Through dual-polarization (VV/VH) ratio thresholding and Otsu change detection, inundated agricultural parcels are identified within 24 hours of satellite overpass.",
      keywords: ["SAR Sentinel-1", "Crop Damage Assessment", "Flood Mapping", "Change Detection", "Disaster Analytics"],
      pdfUrl: "assets/docs/papers/post-flood-crop-damage-sentinel1.pdf",
      bibtex: `@article{goswami2025floodcrop,
  title={Rapid Post-Flood Crop Damage Assessment Using Sentinel-1 SAR Time-Series and Change Detection Algorithms},
  author={Goswami, Jeetash and Co-authors},
  journal={MUET Disaster Series},
  year={2025}
}`
    },

    {
      id: "patent-portfolio",
      title: "Intellectual Property & Patent Applications Portfolio (6 Inventions)",
      authors: "Jeetash Goswami & Co-Inventors",
      venue: "Intellectual Property Organization (IPO) / Patent Office",
      year: "2025 – 2026",
      type: "Patents",
      category: "patents",
      status: "Filed / Under Examination",
      abstract: "A portfolio of 6 formal patent applications covering innovations in power electronics, sensorless machine diagnostics, industrial safety, and edge AI inspection: (1) Defect Detection Technique for Underground Power Cables; (2) High-Performance AC Servo Motor Drive Architecture; (3) Real-Time Deep Learning Fabric Defect Detection Apparatus; (4) Rapid Electric Scooty High-Current Charging Architecture; (5) Tamper-Proof Blockchain Smart Meter Node; (6) HVDC Power Transmission via Offshore Wind Turbines.",
      keywords: ["Patents", "Intellectual Property", "Power Cables", "AC Servo Drive", "Smart Meter", "Edge AI"],
      bibtex: `@misc{goswami2026patents,
  title={Intellectual Property Portfolio: Innovations in Power Drives, IoT, and AI Diagnostics},
  author={Goswami, Jeetash and Co-inventors},
  year={2026},
  note={Official Patent Office Filings}
}`
    }
  ],

  certificates: [
    {
      id: "cert-stanford-ml",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford University",
      platform: "Coursera",
      date: "January 2025",
      instructor: "Andrew Ng",
      category: "ai",
      skills: ["Linear Regression", "Logistic Regression", "Gradient Descent", "Regularization", "Scikit-Learn"],
      pdfUrl: "assets/docs/certificates/supervised-machine-learning.pdf",
      icon: "brain"
    },
    {
      id: "cert-ibm-keras",
      title: "Introduction to Deep Learning & Neural Networks with Keras",
      issuer: "IBM",
      platform: "Coursera",
      date: "February 2025",
      category: "ai",
      skills: ["Deep Neural Networks", "Keras/TensorFlow", "Backpropagation", "Hyperparameter Tuning", "Computer Vision"],
      pdfUrl: "assets/docs/certificates/introduction-to-deep-learning-and-neural-networks-with-keras.pdf",
      icon: "cpu"
    },
    {
      id: "cert-ibm-pytorch",
      title: "Introduction to Neural Networks and PyTorch",
      issuer: "IBM",
      platform: "Coursera",
      date: "March 2025",
      category: "ai",
      skills: ["PyTorch Tensors", "CNNs", "Autograd", "Model Evaluation", "Transfer Learning"],
      pdfUrl: "assets/docs/certificates/introduction-to-neural-network-and-pytorch.pdf",
      icon: "activity"
    },
    {
      id: "cert-ibm-ml-python",
      title: "Machine Learning with Python",
      issuer: "IBM",
      platform: "Coursera",
      date: "January 2025",
      category: "ai",
      skills: ["Supervised & Unsupervised Learning", "Classification", "Regression", "Clustering", "Pandas & NumPy"],
      pdfUrl: "assets/docs/certificates/machine-learning-with-python-ibm.pdf",
      icon: "terminal"
    },
    {
      id: "cert-asu-mosfet",
      title: "Electrical Characterization: MOSFETs",
      issuer: "Arizona State University",
      platform: "Coursera",
      date: "July 2025",
      category: "hardware",
      skills: ["Semiconductor Physics", "MOSFET I-V/C-V Curves", "Threshold Voltage", "Subthreshold Swing", "Device Modeling"],
      pdfUrl: "assets/docs/certificates/electrical-characterization-mosfets.pdf",
      icon: "zap"
    },
    {
      id: "cert-mcp-claude",
      title: "Introduction to Model Context Protocol (MCP)",
      issuer: "Anthropic / Skilljar",
      platform: "Skilljar Verified",
      date: "August 2025",
      credentialId: "pc8k6fzu82i9",
      category: "software",
      skills: ["Model Context Protocol", "Agentic Tooling", "Claude API", "Context Engineering", "AI Integrations"],
      pdfUrl: "assets/docs/certificates/introduction-to-mcp-claude.pdf",
      icon: "layers"
    },
    {
      id: "cert-ge-aerospace",
      title: "Explore Electrical Engineering Job Simulation",
      issuer: "GE Aerospace",
      platform: "Forage Verified",
      date: "March 2025",
      category: "hardware",
      skills: ["Aerospace Electrical Systems", "Avionics Power Distribution", "Circuit Analysis", "System Engineering"],
      pdfUrl: "assets/docs/certificates/ge-aerospace.pdf",
      icon: "navigation"
    },
    {
      id: "cert-duke-prog",
      title: "Programming Fundamentals",
      issuer: "Duke University",
      platform: "Coursera",
      date: "July 2025",
      category: "software",
      skills: ["Algorithms", "Data Structures", "C/C++ Fundamentals", "Computational Thinking"],
      pdfUrl: "assets/docs/certificates/programming-fundamentals.pdf",
      icon: "code"
    },
    {
      id: "cert-umich-python",
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan",
      platform: "Coursera",
      date: "January 2025",
      category: "software",
      skills: ["Python Core Syntax", "Data Structures", "Scripting & Automation"],
      pdfUrl: "assets/docs/certificates/python-for-everbody.pdf",
      icon: "file-text"
    },
    {
      id: "cert-marktechpost-ai",
      title: "Mastering Conversation Modeling with LLMs",
      issuer: "Marktechpost AI",
      platform: "Hands-on Workshop",
      date: "April 2025",
      category: "ai",
      skills: ["LLM Fine-Tuning", "Prompt Architecture", "Conversation Pipelines", "Transformer Modeling"],
      pdfUrl: "assets/docs/certificates/marktechpsot-ai.pdf",
      icon: "message-square"
    },
    {
      id: "cert-ibm-creative",
      title: "Solving Problems with Creative and Critical Thinking",
      issuer: "IBM",
      platform: "Coursera",
      date: "January 2025",
      category: "software",
      skills: ["Root Cause Analysis", "Engineering Decision Frameworks", "Systems Thinking"],
      pdfUrl: "assets/docs/certificates/solving-problem-with-creative-and-critical-thinking-coursera.pdf",
      icon: "target"
    }
  ],

  experience: [
    {
      role: "Senior Marketing Executive & Electrical Engineer",
      organization: "Formula Electric Racing NUST (FERN)",
      location: "Karachi, Pakistan",
      period: "2024 – Present",
      badge: "Formula Student UK 2025",
      description: "Spearheaded corporate outreach, strategic partnerships, and technical digital marketing for Pakistan's premier Formula Student electric racing team. Served as the key technical translation bridge between electric powertrain/electronics subteams and corporate sponsors.",
      achievements: [
        "Led campaigns contributing to 34th place global rank at Formula Student UK 2025 at Silverstone Circuit.",
        "Recipient of the prestigious NUST High Achiever Award 2025 for exceptional contributions to international competition.",
        "Negotiated high-value corporate sponsorships translating EV battery, motor controller, and telemetry milestones into investment proposals.",
        "Directed team visual storytelling and brand presence across engineering and academic platforms."
      ]
    },
    {
      role: "Founder & Creative Director",
      organization: "VisuAle",
      location: "Karachi, Pakistan",
      period: "2023 – Present",
      badge: "Media & Tech Storytelling",
      description: "Directing and producing high-impact cinematic visual content and digital branding for commercial clients. Merges rigorous technical engineering understanding with modern cinematography, motion graphics, and narrative editing.",
      achievements: [
        "Directed commercial video campaigns, promotional documentaries, and technology explainers.",
        "Specializes in translating high-complexity engineering prototypes into compelling visual stories.",
        "Expertise across RED/Sony cine pipelines, DaVinci Resolve color grading, and Premiere Pro editing."
      ]
    },
    {
      role: "Electrical Engineering Intern",
      organization: "Tri-Pack Films Limited",
      location: "Karachi, Pakistan",
      period: "June 2026 – August 2026",
      badge: "Industrial SCADA & IoT",
      description: "Completed comprehensive engineering internship in the Electrical & Automation Department, focusing on shop-floor power quality, sub-station maintenance, and industrial IoT data infrastructure.",
      achievements: [
        "Engineered the Cloud SCADA Energy Management Dashboard, connecting Modbus power meters to real-time cloud analytics.",
        "Monitored and diagnosed plant-wide power factor deficiencies, preventing heavy utility low-PF penalties.",
        "Worked on high-voltage switchgear, motor control centers (MCC), and variable frequency drives (VFDs)."
      ],
      certificateUrl: "assets/docs/papers/tripack-internship-certificate.pdf"
    },
    {
      role: "Bachelor of Electrical Engineering",
      organization: "National University of Sciences & Technology (NUST-PNEC)",
      location: "Karachi, Pakistan",
      period: "2022 – 2026 (Expected)",
      badge: "Undergraduate Degree",
      description: "Department of Electronics and Power Engineering. Rigorous coursework covering Power Electronics, Embedded Systems, Machine Learning, Digital Signal Processing, Control Engineering, and Electric Machine Design.",
      achievements: [
        "Active researcher with 15+ conference papers and patent applications.",
        "NUST High Achiever Award 2025."
      ]
    }
  ],

  skillsMatrix: {
    hardware: [
      { name: "Custom PCB Design (Altium / KiCad)", level: 95 },
      { name: "Power Electronics & Inverters (MOSFET/IGBT)", level: 90 },
      { name: "BLDC & PMSM Motor Drives (FOC / Sensorless)", level: 92 },
      { name: "Embedded Firmware (ESP32, STM32, AVR)", level: 94 },
      { name: "Edge AI Platforms (NVIDIA Jetson Nano)", level: 88 },
      { name: "Mixed-Signal Conditioning & Instrumentation", level: 86 }
    ],
    simulation: [
      { name: "ANSYS Maxwell 2D / RMxprt (FEA Electromagnetics)", level: 92 },
      { name: "ANSYS Icepak (Thermal Conjugate Heat Transfer)", level: 88 },
      { name: "MATLAB & Simulink (Control Systems / FOC)", level: 90 },
      { name: "SolidWorks (CAD & Mechanical Enclosures)", level: 85 },
      { name: "LTspice & Proteus (Analog Simulation)", level: 88 }
    ],
    softwareAi: [
      { name: "Python (NumPy, SciPy, Pandas, Scikit-Learn)", level: 92 },
      { name: "Deep Learning (PyTorch, TensorFlow, Keras)", level: 88 },
      { name: "Computer Vision (OpenCV, YOLO, U-Net)", level: 87 },
      { name: "C / C++ (Embedded Systems & Microcontrollers)", level: 90 },
      { name: "Industrial IoT (Modbus RTU/TCP, MQTT, SCADA)", level: 86 },
      { name: "Git & Version Control / Linux / Docker", level: 88 }
    ],
    creativeStrategy: [
      { name: "Cinematic Video Production & Direction", level: 95 },
      { name: "DaVinci Resolve / Adobe Premiere / After Effects", level: 92 },
      { name: "Corporate Sponsorship & Pitch Presentations", level: 90 },
      { name: "Technical Narrative & EV Brand Strategy", level: 94 }
    ]
  }
};
