# A Review on IoT-Based Smart Health Monitoring Band using ESP32 and MQTT

> **Klaster Literatur:** Klaster 4: Multi-Sensor Fusion (MPU6050 + MAX30102 / Flex Sensor)  
> **Penulis:**   
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Research Journal of Modernization in Engineering Technology and Science  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.56726/irjmets90325](https://doi.org/10.56726/irjmets90325)  

---

## 📌 Abstrak / Intisari Ilmiah
The rapid expansion of the Internet of Medical Things (IoMT) and an aging global population have necessitated a critical paradigm shift toward continuous, remote patient monitoring and proactive healthcare management.Conventional clinical monitoring systems and standalone wearable devices are inherently constrained by their exorbitant costs, spatial immobility, and reliance on episodic data acquisition, which frequently fail to detect transient physiological anomalies or critical safety events such as accidental falls in ambulatory settings.In response to these critical limitations, the technological landscape has evolved toward highly integrated, lowpower wearable architectures, leveraging advanced microcontrollers such as the ESP32 in synergy with precision biosensors (e.g., MAX30102 for photoplethysmography, DS18B20 for thermometry) and inertial measurement units (e.g., MPU6050).A comparative evaluation of contemporary literature reveals that while early iterations relied heavily on power-intensive HTTP networks or range-restricted Bluetooth Low Energy (BLE), modern state-of-the-art systems predominantly utilize the lightweight Message Queuing Telemetry Transport (MQTT) protocol, offering superior bandwidth efficiency, sub-second latency, and extended battery longevity for continuous data streaming to cloud-based diagnostic dashboards.Despite these advancements, significant research gaps persist within the current literature, particularly concerning the computational mitigation of severe motion artifacts during physical activity, the optimization of deep-sleep power topologies for prolonged Wi-Fi transmission, and the standardization of cryptographic frameworks to secure sensitive electronic health records against decentralized cyber threats.Addressing these unresolved challenges, future research trajectories must prioritize the integration of Edge Artificial Intelligence (TinyML) directly onto resource-constrained embedded systems, thereby transforming passive telemetry bands into autonomous, predictive diagnostic platforms capable of preemptive anomaly detection and localized decision-making without absolute reliance on continuous cloud connectivity.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2964] 
A REVIEW ON IOT-BASED SMART HEALTH MONITORING BAND USING 
ESP32 AND MQTT 
Pranjali Ramteke*1 
*1Priyadarshini Bhagwati College Of Engineering, India. 
DOI: https://www.doi.org/10.56726/IRJMETS90325 
ABSTRACT 
The rapid expansion of the Internet of Medical Things (IoMT) and an aging global population have necessitated 
a critical paradigm shift toward continuous, remote patient monitoring and proactive healthcare management. 
Conventional clinical monitoring systems and standalone wearable devices are inherently constrained by their 
exorbitant costs, spatial immobility, and reliance on episodic data acquisition, which frequently fail to detect 
transient physiological anomalies or critical safety events such as accidental falls in ambulatory settings. In 
response to these critical limitations, the technological landscape has evolved toward highly integrated, low-
power wearable architectures, leveraging advanced microcontrollers such as the ESP32 in synergy with 
precision biosensors (e.g., MAX30102 for photoplethysmography, DS18B20 for thermometry) and inertial 
measurement units (e.g., MPU6050). A comparative evaluation of contemporary literature reveals that while 
early iterations relied heavily on power-intensive HTTP networks or range-restricted Bluetooth Low Energy 
(BLE), modern state-of-the-art systems predominantly utilize the lightweight Message Queuing Telemetry 
Transport (MQTT) protocol, offering superior bandwidth efficiency, sub-second latency, and extended battery 
longevity for continuous data streaming to cloud-based diagnostic dashboards. Despite these advancements, 
significant research gaps persist within the current literature, particularly concerning the computational 
mitigation of severe motion artifacts during physical activity, the optimization of deep-sleep power topologies 
for prolonged Wi-Fi transmission, and the standardization of cryptographic frameworks to secure sensitive 
electronic health records against decentralized cyber threats. Addressing these unresolved challenges, future 
research trajectories must prioritize the integration of Edge Artificial Intelligence (TinyML) directly onto 
resource-constrained embedded systems, thereby transforming passive telemetry bands into autonomous, 
predictive diagnostic platforms capable of preemptive anomaly detection and localized decision-making 
without absolute reliance on continuous cloud connectivity. 
Keyword: Smart Wearables, Continuous Health Monitoring, ESP32 Microcontroller, MQTT Protocol, Fall 
Detection, Photoplethysmography, Biosensors, Embedded Systems, IoT, Remote Patient Monitoring, Edge 
Computing, Telemedicine. 
I. 
INTRODUCTION 
The advent of the Fourth Industrial Revolution, commonly referred to as Industry 4.0, has precipitated a 
monumental paradigm shift across diverse global sectors, most notably within the healthcare and biomedical 
engineering domains. This transformation, frequently characterized as Healthcare 4.0, is fundamentally driven 
by the convergence of cyber-physical systems, ubiquitous internet connectivity, and advanced sensor 
technologies. As the global demographic landscape shifts toward an aging population accompanied by a surge 
in chronic pathological conditions, traditional reactive medical models are becoming increasingly untenable. 
Consequently, there is an imperative global transition toward proactive, data-driven, and continuous health 
monitoring paradigms, leveraging the Internet of Medical Things (IoMT) to decentralize patient care from 
conventional clinical environments to the ambulatory microenvironment of the user. 
Within this transformative context, the automation of continuous physiological and kinetic monitoring assumes 
critical importance. The autonomic acquisition and analysis of vital parameters—such as heart rate, blood 
oxygen saturation (SpO2), and core body temperature—eliminate the inherent latencies and manual 
transcription errors associated with episodic human-administered measurements. Furthermore, the 
automation of physical safety monitoring, particularly high-precision fall detection algorithms utilizing inertial 
measurement units, provides an essential layer of security for geriatric patients and individuals with

---

### Halaman 2

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2965] 
compromised mobility. Automated alerting mechanisms ensure that critical physiological deviations or sudden 
physical trauma trigger instantaneous emergency notifications to designated healthcare providers or 
guardians, thereby drastically reducing response times during acute medical crises. 
Despite the acknowledged necessity for continuous observation, traditional health monitoring systems remain 
fundamentally constrained by profound spatial, economic, and operational limitations. Conventional facility-
bound instrumentation is typically bulky, prohibitively expensive, and necessitates the physical tethering of 
patients to bedside monitors, thereby severely restricting patient autonomy and precluding continuous 
ambulatory assessment. Conversely, consumer-grade standalone diagnostic devices, while portable, often lack 
the integrated communication frameworks required for real-time remote telemetry. These legacy systems are 
structurally incapable of providing the longitudinal, high-velocity datasets requisite for proactive disease 
management, frequently resulting in undetected transient anomalies, such as silent hypoxia or paroxysmal 
arrhythmias, occurring outside the immediate clinical purview. 
To circumvent these inherent limitations, the strategic integration of sophisticated embedded systems, IoT 
communication protocols, and nascent Artificial Intelligence (AI) algorithms has emerged as the definitive 
technological solution. Modern microcontrollers, notably the highly integrated ESP32 System-on-Chip (SoC), 
provide robust dual-core processing capabilities and embedded wireless transceivers (Wi-Fi/Bluetooth) within 
an ultra-low-power, miniature footprint. When interfaced with high-fidelity biosensors (e.g., MAX30102, 
DS18B20) and advanced kinematic sensors (e.g., MPU6050), these embedded platforms facilitate the 
continuous, non-invasive extraction of critical health metrics. The subsequent application of IoT frameworks, 
particularly lightweight publish-subscribe protocols like MQTT (Message Queuing Telemetry Transport), 
ensures the low-latency, energy-efficient transmission of this critical telemetry to centralized cloud 
dashboards, while the integration of AI and Machine Learning at the edge promises to refine raw signal 
processing and enable predictive diagnostic capabilities. 
As the proliferation of IoMT devices scales exponentially, the exclusive reliance on centralized cloud 
infrastructures presents significant architectural vulnerabilities regarding network bandwidth saturation, 
transmission latency, and data privacy. Consequently, there is an urgent necessity for scalable, decentralized 
network architectures that incorporate Edge and Fog computing methodologies. By migrating computational 
workloads—such as initial sensor fusion, motion artifact filtration, and localized threshold-based anomaly 
detection—directly onto the wearable edge device, the system significantly attenuates the volume of raw data 
transmitted over the network. This decentralized architectural model not only conserves critical battery 
resources but also ensures immediate, autonomous localized emergency responses during intermittent 
network outages, whilst simultaneously enhancing patient privacy by minimizing the exposure of unencrypted 
biometric data on public networks. 
Given the rapid proliferation and disparate developmental trajectories of wearable IoMT technologies, a 
rigorous, review-based comparative analysis of existing literature is indispensable. The contemporary 
academic landscape features a multitude of prototype architectures utilizing highly varied sensor 
configurations, processing algorithms, and communication protocols, often yielding conflicting empirical 
results regarding power efficiency, diagnostic accuracy, and signal latency. A systematic synthesis of these 
divergent methodologies is critical to benchmark current technological capabilities, critically evaluate the 
trade-offs between competing communication frameworks (such as HTTP versus MQTT), and distill the optimal 
architectural paradigms required for the development of clinical-grade, scalable smart health and safety bands. 
The primary objective of this review paper is to provide a comprehensive, analytical evaluation of the 
architectures, communication frameworks, and performance metrics defining modern IoT-based smart health 
and safety monitoring bands, with a specific focus on ESP32-driven and MQTT-enabled systems. By 
systematically interrogating recent literature, this manuscript aims to elucidate the current technological 
frontiers in vital sign acquisition and kinetic fall detection. Furthermore, this review seeks to rigorously identify 
existing research gaps—particularly concerning power optimization, signal artifact mitigation, and data 
security—ultimately proposing targeted future research trajectories that will catalyze the transition of

---

### Halaman 3

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2966] 
wearable health monitors from passive telemetry nodes into secure, autonomous, and highly predictive 
diagnostic ecosystems. 
II. 
LITERATURE REVIEW 
A rigorous analytical review of the evolutionary trajectory of health and safety monitoring architectures is 
paramount to contextualizing the current state-of-the-art and identifying critical systemic vulnerabilities. The 
subsequent subsections critically evaluate the historical progression from centralized, facility-bound medical 
instrumentation to sophisticated, distributed IoT wearable ecosystems, scrutinizing the inherent trade-offs 
between computational performance, spatial autonomy, and data transmission efficiency. 
1. Conventional Approaches 
Historically, clinical physiological monitoring has been predicated on centralized, highly precise 
instrumentation strictly confined to the acute care environment, such as Intensive Care Units (ICUs) or 
specialized hospital wards. These conventional systems rely on high-fidelity, multi-parameter bedside monitors 
(e.g., continuous ECG, invasive arterial pressure, and core temperature probes) that necessitate the physical 
tethering of the patient via complex cable arrays. The primary technological strength of this architecture lies in 
its unparalleled diagnostic accuracy and the immediate, centralized availability of data to on-site medical 
personnel, ensuring rapid intervention during acute crises. However, the fundamental limitation of this 
approach is its absolute lack of spatial flexibility. The episodic nature of conventional monitoring fundamentally 
fails to capture transient physiological anomalies—such as silent hypoxia, paroxysmal arrhythmias, or sudden 
falls—that frequently precipitate acute health crises in the patient’s natural, ambulatory environment. 
Comparatively, while conventional systems establish the clinical gold standard for accuracy, their prohibitive 
costs, spatial confinement, and reliance on manual data transcription render them fundamentally unsuitable for 
the scalable, continuous, and long-term remote monitoring required by an aging global demographic. 
2. Wireless Control Systems 
To mitigate the spatial constraints of conventional monitoring, the subsequent architectural evolution focused 
on the development of rudimentary wireless telemetry systems, primarily aimed at untethering the patient 
within a localized clinical or domestic setting. Early iterations of these systems predominantly utilized short-
range Radio Frequency (RF) modules (e.g., 433 MHz/315 MHz ISM bands) or early Bluetooth (Classic) 
transceivers coupled with basic 8-bit microcontrollers (such as the Arduino Uno or PIC series). The primary 
advantage of these architectures was the initial realization of patient mobility, allowing continuous data 
acquisition without physical cables. Nevertheless, these early wireless systems suffered from profound 
limitations. The utilized RF protocols were highly susceptible to electromagnetic interference (EMI) and offered 
severely restricted transmission ranges, often failing beyond a single room. Furthermore, the lack of robust 
data encryption over these primitive wireless links exposed sensitive physiological data to significant security 
risks. Analytically, while these systems represented a crucial step toward ambulatory monitoring, their 
localized nature, high power consumption, and lack of integration with broader healthcare IT networks 
fundamentally restricted their utility to isolated, short-range telemetry applications. 
3. Embedded Processing Architectures 
As the demand for continuous, ambulatory monitoring escalated, the architectural focus shifted from simple 
wireless transmission toward enhancing the localized computational capabilities of the wearable node, 
marking the era of sophisticated embedded processing architectures. This transition was catalyzed by the 
integration of advanced 32-bit ARM Cortex-M microcontrollers (e.g., STM32) and highly integrated Systems-on-
Chip (SoCs). These platforms facilitated the complex, localized execution of Digital Signal Processing (DSP) 
algorithms directly on the device. For instance, raw data from optical photoplethysmography (PPG) sensors 
(e.g., MAX30102) and digital thermistors (e.g., DS18B20) could be algorithmically filtered on-chip to attenuate 
high-frequency noise and baseline wander prior to transmission. The significant strength of this approach is the 
substantial reduction in transmission payloads, as only processed clinical metrics (e.g., calculated BPM or SpO2 
percentages) rather than raw analog waveforms are transmitted, thereby conserving critical battery life. 
However, the limitation remains the significant computational overhead; executing complex algorithms—such

---

### Halaman 4

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2967] 
as compensating for severe motion artifacts using concurrent kinematic data from an IMU (e.g., MPU6050)—
often strains the processing capabilities and memory footprint of these embedded systems, highlighting a 
persistent trade-off between localized analytical depth and real-time responsiveness. 
4. IoT-Enabled Systems 
The contemporary paradigm of remote patient monitoring is defined by IoT-enabled systems, which seamlessly 
integrate embedded processing with ubiquitous internet connectivity, facilitating global data accessibility. The 
architectural cornerstone of this era is the ESP32 microcontroller, favored for its dual-core processing 
capabilities and integrated Wi-Fi/Bluetooth Low Energy (BLE) transceivers. These systems transcend localized 
telemetry by securely transmitting physiological and safety data directly to centralized cloud infrastructures 
(e.g., AWS, Firebase). A critical analytical distinction within IoT systems is the selection of the communication 
protocol. While early implementations relied on HTTP, its synchronous, request-response architecture 
generated excessive network overhead and rapidly depleted battery reserves. Consequently, the adoption of 
the Message Queuing Telemetry Transport (MQTT) protocol has become the industry standard. MQTT’s 
lightweight, asynchronous publish-subscribe model ensures sub-second latency and minimal bandwidth 
utilization, which is crucial for real-time emergency alerting (e.g., fall detection). Despite these profound 
advantages, IoT-enabled systems are entirely reliant on continuous network connectivity; transient Wi-Fi 
dropouts or cloud server latency can irrevocably interrupt the monitoring process, exposing a critical single 
point of failure within centralized cloud architectures. 
5. PLC / Industrial Grade Systems 
While predominantly utilized in manufacturing and process control, the architectural principles of 
Programmable Logic Controllers (PLCs) and industrial-grade Supervisory Control and Data Acquisition 
(SCADA) systems offer critical insights for high-reliability health monitoring environments, such as large-scale 
eldercare facilities or specialized quarantine wards. These systems prioritize absolute determinism, utilizing 
hardened, real-time operating systems (RTOS) and robust, wired industrial protocols (e.g., Modbus TCP, 
EtherNet/IP) to guarantee millisecond-level response times and fault tolerance. The paramount strength of 
industrial-grade architectures is their uncompromising reliability; they are engineered to operate continuously 
in environments with extreme electromagnetic interference and feature redundant power supplies to eliminate 
single points of failure. However, the direct application of PLC architectures to individual wearable devices is 
fundamentally precluded by their massive form factors, extreme power consumption, and prohibitive costs. 
Analytically, while PLC systems are unsuitable for ambulatory wearables, their underlying principles of 
deterministic execution, hardware redundancy, and rigorous fault-tolerant network topologies provide a 
crucial theoretical framework that must be adapted and integrated into the embedded firmware of future 
clinical-grade IoT health monitors to ensure life-critical reliability. 
6. Distributed Intelligent Architectures 
The vanguard of current research is focused on mitigating the latency, bandwidth, and privacy constraints of 
centralized IoT clouds through the implementation of Distributed Intelligent Architectures, specifically 
leveraging Edge and Fog computing paradigms. In this architecture, computational workloads and advanced 
analytical algorithms—such as lightweight Machine Learning (TinyML) models for predictive diagnostics—are 
migrated from the remote cloud server directly to the "edge" (the ESP32 wearable) or an intermediate "fog" 
node (e.g., a localized smart gateway or the patient’s smartphone). The strength of this approach is manifold: it 
drastically reduces the volume of data transmitted over the network, ensures immediate, localized emergency 
responses (e.g., triggering a local alarm upon detecting a fall via the MPU6050) completely independent of 
internet connectivity, and significantly enhances patient privacy by confining unencrypted raw biometric data 
to the local device. The primary limitation resides in the stringent energy constraints of the wearable node; 
executing continuous AI inference locally rapidly depletes battery life. Comparatively, distributed intelligent 
architectures represent the optimal balance between the localized determinism of industrial systems and the 
global accessibility of cloud networks, shifting wearables from passive data-loggers to autonomous, predictive 
diagnostic platforms, provided that the inherent power-performance trade-offs can be effectively managed.

---

### Halaman 5

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2968] 
III. 
METHODOLOGY 
The development of a clinical-grade IoT health and safety band requires a multidisciplinary methodology that 
synthesizes biomedical sensing, embedded digital signal processing, and lightweight wireless telemetry. This 
section delineates the systemic framework and computational strategies employed in modern wearable 
architectures. 
1. System Architecture Model 
The overarching architecture follows a decentralized, four-tier hierarchical model: 
1. Perception Layer: Comprising biosensors (MAX30102, DS18B20) and IMUs (MPU6050) for raw data 
acquisition. 
2. Edge Processing Layer: The ESP32 microcontroller, which executes signal filtering and localized anomaly 
detection. 
3. Network Layer: Utilizing Wi-Fi and the MQTT protocol for secure data routing. 
4. Application Layer: Cloud-based dashboards and persistent databases for longitudinal visualization 
2. Functional Modules 
The hardware is partitioned into four primary functional modules. The Computing Module (ESP32) acts as the 
central coordinator. The Biosensing Module (MAX30102) handles cardiovascular metrics, while the Safety 
Module(MPU6050) quantifies kinetic forces for fall detection. Finally, the Power Management Module 
(TP4056 and Boost Converter) ensures stable operation from a 3.7V Li-Ion source 
3. Data Flow Model 
Data flow initiates at the sensor level, where analog physiological signals are digitized. The ESP32 polls these 
sensors via the I2C Bus (for MAX30102/MPU6050) and OneWire Bus (for DS18B20). The processed metrics 
are serialized into a JSON (JavaScript Object Notation) payload. This payload is then "Published" to a specific 
topic on a centralized MQTT Broker, which subsequently "Pushes" the data to authorized Subscriber nodes 
(Doctors/Guardians) 
 
4. Processing Techniques 
Raw signals are subjected to rigorous digital signal processing (DSP) to mitigate motion artifacts and 
environmental noise. Infinite Impulse Response (IIR) bandpass filters are used to isolate the pulsatile AC 
component of the PPG signal. For fall detection, the system calculates the Sum Vector Magnitude (SVM) of the 
3-axis acceleration; a fall is mathematically verified only if a high-G impact is followed by a predefined window 
of kinetic inactivity 
5. Communication Framework 
The system strictly employs the MQTT (Message Queuing Telemetry Transport) protocol over a standard 
802.11 b/g/n Wi-Fi connection. Unlike HTTP, MQTT’s asynchronous publish-subscribe model minimizes 
network overhead and prevents battery depletion by maintaining a persistent but lightweight TCP connection, 
making it ideal for continuous streaming of small sensor packets.

---

### Halaman 6

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2969] 
6. Embedded Control Strategy 
The control strategy utilizes Preemptive Multitasking via a Real-Time Operating System (FreeRTOS). This 
allows the ESP32 to simultaneously manage high-speed sensor polling on one core and maintain the MQTT 
network stack on the second core. Furthermore, Hardware Interrupts are utilized; the MPU6050 can wake the 
ESP32 from a low-power sleep state instantly upon detecting a free-fall, ensuring zero-latency emergency 
response 
7. General Operational Workflow 
The operational cycle commences with hardware initialization and MQTT broker authentication. The primary 
loop involves continuous sensor polling and Edge-based data filtering. The system then evaluates the data 
against pre-configured clinical safety thresholds. Under normal conditions, telemetry is published at periodic 
intervals (e.g., every 5 seconds). However, if an anomaly is detected (e.g., SpO2 < 90% or a fall), the system 
bypasses the standard loop to publish an Emergency SOS Payload immediately, ensuring instantaneous 
clinical awareness. 
IV. 
SYSTEM ARCHITECTURE AND DESIGN CONSIDERATIONS 
Designing a reliable wearable health monitoring system necessitates a comprehensive approach that balances 
mechanical ergonomics, computational throughput, and systemic fault tolerance. This section analyzes the 
high-level design considerations essential for transitioning a laboratory prototype into a clinical-grade 
wearable system. 
1. Architecture Models 
Modern IoT wearables predominantly adopt a Layered Edge-to-Cloud architecture. 
This modularity allows for the separation of concerns between raw signal acquisition and high-level data 
analytics. A key design consideration in these models is the "Control Loop" frequency. While physiological 
monitoring (Heart Rate/Temp) operates at low-frequency cycles (1–5 Hz), safety-critical features like fall 
detection require high-frequency sampling (50–100 Hz) at the edge to capture transient impact vectors 
 
Fig 1: Block Diagram of Proposed Architecture

---

### Halaman 7

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2970] 
2. Mechanical/Structural Modeling 
The mechanical design of a health band must prioritize Biocompatibility and Signal Integrity. 
Structural modeling involves optimizing the placement of the optical biosensor (MAX30102) to ensure it 
maintains consistent contact pressure against the epidermis without causing venous occlusion. Furthermore, 
the enclosure must be engineered using hypoallergenic materials (such as Medical Grade Silicone or TPU) to 
prevent contact dermatitis during 24/7 usage. CAD-based thermal modeling is also required to ensure that the 
heat dissipation from the ESP32's Wi-Fi radio does not skew the surface temperature readings of the DS18B20 
sensor. 
3. Actuation Strategy 
In the context of wearable bands, the "Actuation Strategy" refers to the multi-modal feedback system used to 
alert the user or remote guardians. This involves: 
1. Haptic Actuation: Utilizing a micro-vibration motor to provide immediate tactile alerts for medication 
reminders or threshold breaches. 
2. Visual Actuation: Integration of low-power OLED or e-Ink displays to show real-time vitals locally. 
3. Remote Actuation: The triggering of cloud-based webhooks or SMS gateways via the MQTT broker to 
initiate emergency protocols when a fall or physiological crisis is verified at the edge. 
4. Communication Model 
The communication model is governed by the Publish-Subscribe paradigm over MQTT [23]. Design 
considerations here focus on the "Packet Structure." To minimize transmission latency, telemetry is serialized 
into flat JSON objects. For instance, a safety packet might include a timestamp, status_code, and 
vector_magnitude. The model also incorporates a "Last Will and Testament" (LWT) feature; if the band loses 
connection, the MQTT broker automatically notifies the guardian that the device is "Offline," ensuring 
continuous safety oversight even during network failures. 
5. Processing Pipeline 
The system employs a Synchronous Processing Pipeline to handle multi-modal sensor streams. The pipeline 
stages include: 
● Acquisition Stage: High-speed sampling of the I2C bus. 
● Conditioning Stage: Digital rectification and noise cancellation. 
● Feature Extraction Stage: Calculating Heart Rate from PPG peaks and Sum Vector Magnitude from IMU 
data. 
● Evaluation Stage: Comparing extracted features against personalized clinical baselines. Only after these 
stages is a data packet pushed to the network layer, ensuring that only "information" (rather than raw "noise") 
consumes bandwidth. 
6. Reliability Engineering 
To ensure medical-grade reliability, the architecture incorporates several fault-tolerance mechanisms . 
Watchdog Timers (WDT) are implemented within the FreeRTOS environment to automatically reboot the 
system in the event of a firmware stall. Additionally, Voltage Stability Analysis is critical; the power rail must 
be isolated using decoupling capacitors to prevent the ESP32’s Wi-Fi current spikes (up to 200mA) from 
introducing electrical noise into the sensitive analog sensing circuits. Finally, a Local Data Persistence strategy 
(using internal flash) is employed to buffer data during Wi-Fi outages, which is synchronized once connectivity 
is restored. 
V. 
PERFORMANCE ANALYSIS AND DISCUSSION 
The evaluation of IoT-enabled health and safety bands is predicated on a multidimensional analysis of 
diagnostic accuracy, systemic latency, and energy efficiency. Rather than focusing on a single implementation,

---

### Halaman 8

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2971] 
this section synthesizes performance trends reported across contemporary literature, highlighting the 
comparative advantages and operational bottlenecks of the ESP32-MQTT architectural paradigm. 
1. Accuracy Analysis 
Empirical studies on wearable biosensors consistently indicate a high degree of correlation between low-cost 
optical sensors and clinical-grade instrumentation under controlled conditions [26]. Literature regarding the 
MAX30102 sensor reports an average error margin of ±2% for SpO2 and ±3 BPM for heart rate when subjects 
are stationary. However, a significant performance trend observed across multiple studies is the "Motion 
Artifact Degradation" [27]. During ambulatory movement, the signal-to-noise ratio (SNR) of PPG waveforms 
drops precipitously due to the displacement of the sensor relative to the skin. To counter this, advanced 
implementations utilize the MPU6050 to execute "Kinetic Compensation," where accelerometer data is used to 
filter out motion-induced frequencies. For fall detection, literature suggests that threshold-based algorithms 
using Sum Vector Magnitude (SVM) achieve sensitivity rates of 85–92%, though false positives remain common 
during rapid transitions (e.g., sitting down quickly) 
2. Efficiency and Throughput 
The transition from single-core microcontrollers (like Arduino) to dual-core SoCs (like ESP32) has significantly 
enhanced systemic throughput. Research indicates that the ESP32’s ability to offload the network stack (Wi-
Fi/MQTT) to one core while maintaining deterministic sensor polling on the other prevents "Data Jitter" [29]. 
Analytical comparisons of data protocols show that MQTT achieves a throughput efficiency approximately 40% 
higher than HTTP for small, frequent packets (under 1KB). This is attributed to the minimal header overhead 
and the persistent TCP connection model, which allows for high-velocity telemetry without the repetitive 
overhead of the standard web handshake [30]. 
3. Communication Latency 
Latency is the most critical performance metric for safety-related features such as fall detection. Comparative 
reviews of IoT protocols highlight that MQTT consistently maintains sub-second end-to-end latency, typically 
ranging from 150ms to 450ms depending on network congestion [31]. In contrast, RESTful API 
implementations over HTTP often exhibit latencies exceeding 1.5 seconds due to the synchronous nature of the 
request-response cycle. Furthermore, the use of "Edge Anomaly Detection" (processing the fall trigger locally 
on the ESP32 before sending the alert) has been shown to reduce the critical response time by up to 60% 
compared to pure cloud-based processing models 
4. Power Consumption 
Despite its computational prowess, the ESP32’s Wi-Fi radio is a significant power sink. Literature reviews 
identify a clear trade-off between "Sampling Frequency" and "Battery Longevity" [33]. A system continuously 
transmitting data via Wi-Fi typically lasts 8–12 hours on a 500mAh battery. However, implementations that 
leverage MQTT Keep-Aliveand Deep-Sleep duty cycles (waking the CPU only for anomalous events or 
periodic heartbeats) report an extension in battery life of up to 48–72 hours [34]. Comparison with Bluetooth 
Low Energy (BLE) systems shows that while BLE is more power-efficient, it lacks the "Direct-to-Cloud" 
autonomy of the ESP32, requiring a localized smartphone gateway which introduces an additional point of 
failure. 
5. Deployment Feasibility 
The deployment feasibility of the ESP32-MQTT architecture is rated highly in literature, primarily due to the 
Cost-to-Performance ratio [35]. The total bill of materials (BOM) for an open-source health band is estimated 
to be 80% lower than clinical-grade remote patient monitoring (RPM) systems. This affordability makes it 
highly feasible for large-scale deployment in developing regions or for geriatric home-care. However, feasibility 
is often hindered by the requirement for ubiquitous Wi-Fi; researchers suggest that for rural deployments, a 
hybrid model incorporating LoRaWAN or NB-IoT might be more sustainable for long-range connectivity 
6. Identified Research Gaps 
Despite technological advancements, several critical research gaps persist in the current body of work:

---

### Halaman 9

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2972] 
● Motion Artifact Mitigation: There is a lack of computationally efficient, real-time algorithms that can 
operate on low-power microcontrollers to completely eliminate signal noise during high-intensity exercise 
● Data Security Standardization: While TLS/SSL encryption is possible on the ESP32, many prototypes 
bypass it to save power, leaving sensitive medical data vulnerable to interception. 
● Clinical Validation: Most literature focuses on technical prototyping rather than long-term clinical trials; 
there is a need for studies that validate the medical outcomes of using these bands over extended periods. 
● Energy Harvesting: Very few studies explore the integration of thermoelectric or solar energy harvesting 
to solve the persistent battery life bottleneck in wearable IoMT devices [38]. 
VI. 
EMBEDDED HARDWARE INTEGRATION AND POWER ARCHITECTURE 
The systemic reliability of an IoT-enabled health band is fundamentally dependent on the integrity of its 
hardware interfacing and the stability of its power distribution network. Unlike general-purpose IoT nodes, 
medical-grade wearables require stringent signal isolation and noise suppression to ensure that micro-volt 
level biosignals are not corrupted by the high-frequency switching noise of wireless transceivers. This section 
analyzes the technical design considerations and industrial standards governing the hardware layer of the 
proposed architecture. 
1. Power Distribution and Management Architecture 
The power architecture of a wearable band must balance the high current demands of Wi-Fi transmission with 
the high-sensitivity requirements of biosensors. Literature suggests a hierarchical power model 
 
Fig 2: Power and Control Distribution Model 
Typically, a 3.7V Lithium-Ion (Li-Ion) or Lithium-Polymer (Li-Po) battery serves as the primary energy source. 
To manage this, a TP4056-based Battery Management System (BMS) is implemented to handle constant-
current/constant-voltage (CC/CV) charging cycles while providing over-discharge and short-circuit protection 
Because the ESP32 and biosensors require a stable 3.3V or 5V rail, a DC-DC Boost Converter (MT3608) or a 
Low-Dropout Regulator (LDO) is utilized. Research indicates that while switching regulators (Boost) offer 
higher efficiency (up to 92%), they introduce high-frequency ripple voltage. Consequently, high-performance 
designs often use a "Two-Stage Regulation" approach: a boost converter for the digital logic and an LDO for the 
analog sensing front-end to ensure a "clean" power rail

---

### Halaman 10

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2973] 
2. Multi-Protocol Hardware Interfacing 
The ESP32 acts as the central hub, interfacing with a heterogeneous array of sensors using diverse 
communication protocols. 
● I2C Bus Interfacing: The MAX30102 (PPG) and MPU6050 (IMU) are interfaced via the Inter-Integrated 
Circuit (I2C) protocol. To prevent bus contention and ensure signal integrity, pull-up resistors (typically 4.7kΩ) 
are mandatory. Analysis of existing prototypes shows that using the ESP32's hardware I2C pins (SDA/SCL) 
allows for clock speeds of up to 400kHz, which is sufficient for high-speed motion data acquisition 
● 1-Wire Protocol: The DS18B20 temperature sensor utilizes a single-wire digital interface. This is 
advantageous for wearables as it minimizes the GPIO footprint, though it requires precise timing libraries and a 
4.7kΩ pull-up resistor to function reliably over varying cable lengths 
3. Signal Isolation and Noise Suppression 
Biosensors like the MAX30102 are extremely sensitive to Electromagnetic Interference (EMI). The Wi-Fi 
radio of the ESP32, when active, generates significant RF noise that can couple into the analog sensing traces. 
● Hardware Isolation: Professional designs utilize "Ground Plane Separation," where the analog ground of 
the sensors is isolated from the digital ground of the ESP32, converging only at a single star-point to prevent 
ground loops 
● Decoupling and Filtering: The integration of ceramic decoupling capacitors (0.1µF and 10µF) adjacent to 
sensor VCC pins is a standard practice identified in literature to suppress high-frequency transients. 
Furthermore, the use of ferrite beads on the power lines acts as a low-pass filter to prevent RF noise from the 
ESP32 entering the sensor circuitry 
4. Safety Mechanisms and Industrial Compliance 
For a wearable device to transition from a prototype to a clinical-grade product, it must adhere to specific 
safety and compliance standards. 
● Thermal Safety: Continuous operation of the ESP32 in Wi-Fi mode can lead to localized heating. Studies 
emphasize the need for CAD-modeled enclosures that provide adequate thermal dissipation to prevent skin 
burns, ensuring compliance with IEC 60601-1 (Medical Electrical Equipment Safety) 
● Biocompatibility: The physical casing must utilize medical-grade silicone or hypoallergenic plastics to 
prevent contact dermatitis during 24/7 usage, adhering to ISO 10993 standards. 
● Firmware Reliability: Implementation of a Watchdog Timer (WDT) is a critical safety mechanism. If the 
firmware stalls due to a network hang or I2C bus lockup, the WDT automatically resets the system, ensuring 
that the patient is never left unmonitored 
5. Electromagnetic Compatibility (EMC) 
Industrial compliance regarding EMC (IEC 60601-1-2) requires the device to function without being affected 
by external RF sources and without interfering with other medical devices. This is achieved through the use of 
shielded cables for the biosensor probes and, in some cases, a thin metallic coating inside the plastic enclosure 
to act as a Faraday cage. Analysis shows that these measures are essential in hospital environments where 
multiple wireless devices operate in the 2.4GHz band simultaneously 
VII. 
CONCLUSION 
The synthesis of contemporary literature underscores a profound technological evolution in remote health 
monitoring, transitioning from centralized, facility-bound instrumentation to decentralized, intelligent, and 
autonomous wearable ecosystems. This review has critically evaluated the structural and functional paradigms 
of IoT-based smart health bands, specifically focusing on the integration of the ESP32 microcontroller and the 
MQTT communication protocol. Comparative analysis reveals that while early wireless systems effectively 
untethered patients, it is the modern synergy of low-power embedded processing and lightweight, 
asynchronous telemetry that has finally enabled the high-fidelity, real-time diagnostic capabilities required for 
ambulatory care.

---

### Halaman 11

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2974] 
Despite the significant advantages in cost-efficiency and data accessibility offered by current IoMT prototypes, 
several systemic limitations remain. The challenge of motion artifact mitigation in optical biosensors and the 
inherent trade-offs between continuous Wi-Fi connectivity and battery longevity continue to be primary 
bottlenecks in achieving clinical-grade reliability. Furthermore, the reliance on centralized cloud 
infrastructures introduces critical vulnerabilities regarding network latency and data privacy. 
The observed technological shift is increasingly moving toward "intelligence at the edge," where localized 
processing minimizes data transmission and ensures immediate response times. Future research directions 
must focus on the deployment of sophisticated Deep Learning models and Multi-Agent Systems (MAS) directly 
onto resource-constrained embedded platforms. The integration of "TinyML" and distributed edge computing 
will facilitate the transition of wearable bands from passive monitoring nodes into proactive, predictive health 
agents. Ultimately, the development of secure, scalable, and clinically validated autonomous diagnostic 
ecosystems will redefine the future of personalized healthcare, shifting the global focus from reactive 
intervention to continuous, preventative wellness management. 
VIII. 
REFERENCES 
[1] 
S. M. R. Islam, D. Kwak, M. H. Kabir, M. Hossain, and K. S. Kwak, “The Internet of Things for Health Care: 
A Comprehensive Survey,” IEEE Access, vol. 3, 2015, pp. 678–708. 
[2] 
F. S. Wu, C. Y. Lin, and H. Y. Chang, “Fall Detection System for Elderly People using IoT and MPU6050,” 
IEEE International Conference on Consumer Electronics (ICCE), 2019, pp. 1-2. 
[3] 
R. Kumar and M. P. Singh, “Portable Health Monitoring System using MQTT Protocol,” International 
Conference on Computing, Communication, and Intelligent Systems (ICCCIS), 2019, pp. 320-324. 
[4] 
M. M. Islam, A. Rahaman, and M. R. Islam, “Development of Smart Healthcare Monitoring System in IoT 
Environment,” IEEE International Conference on Robotics, Electrical and Signal Processing Techniques 
(ICREST), 2020, pp. 562-566. 
[5] 
Y. Yokotani and Y. Sasaki, “Comparison with HTTP and MQTT on Mobile Network,” International 
Conference on Information and Communication Technology Convergence (ICTC), 2016, pp. 915-918. 
[6] 
A. Sharma, S. Jain, and P. Gupta, “IoT Based Patient Health Monitoring System,” IRJMETS, vol. 4, no. 5, 
2022, pp. 1245-1250. 
[7] 
P. Patil, V. Deshmukh, and S. Pawar, “Smart Health Monitoring Band using ESP32,” IRJET, vol. 9, no. 3, 
2022, pp. 450-455. 
[8] 
Espressif Systems, “ESP32 Series Datasheet: 2.4 GHz Wi-Fi and Bluetooth Combo Chip,” Version 3.4, 
2021. 
[9] 
Maxim Integrated, “MAX30102: High-Sensitivity Pulse Oximeter and Heart-Rate Sensor for Wearable 
Health,” Datasheet, 2018. 
[10] 
InvenSense Inc., “MPU-6000 and MPU-6050 Product Specification,” Revision 3.4, 2013. 
[11] 
V. Vippalapalli and S. Ananthula, “Internet of things (IoT) based smart health care system,” IEEE 
International Conference on Signal Processing, Informatics, Communication and Energy Systems 
(SPICES), 2016, pp. 1-4. 
[12] 
M. Gupta, R. Verma, and K. Singh, “Real-time health monitoring using IoT and ESP32,” IRJMETS, vol. 3, 
no. 4, 2021, pp. 1800-1805. 
[13] 
S. Kumar and P. J. Jayapandian, “IoT-Based Heart Rate and Temperature Monitoring System,” 
International Journal of Engineering Research & Technology (IJERT), vol. 9, no. 5, 2020. 
[14] 
OASIS Standard, “MQTT Version 3.1.1 Specification,” 2014. 
[15] 
G. Yang et al., “IoT-Based Remote Pain Monitoring System: From Device to Cloud Platform,” IEEE 
Journal of Biomedical and Health Informatics, vol. 22, no. 6, 2018, pp. 1711-1719. 
[16] 
B. Chen, P. C. Wang, and Y. Lin, “A review of wearable sensor systems for health monitoring,” Robotics, 
vol. 6, no. 4, 2017, p. 22. 
[17] 
H. C. Luan, Y. F. Tseng, and S. Y. Cheng, “A Wearable Health Monitoring System based on IoT,” IEEE 
International Conference on Consumer Electronics-Taiwan (ICCE-TW), 2018, pp. 1-2.

---

### Halaman 12

e-ISSN: 2582-5208 
International  Research  Journal of  Modernization in Engineering  Technology and  Science 
( Peer-Reviewed, Open Access, Fully Refereed International Journal ) 
Volume:08/Issue:02/February-2026                        Impact Factor- 8.187                      www.irjmets.com 
www.irjmets.com                              @International Research Journal of Modernization in Engineering, Technology and Science 
[2975] 
[18] 
J. S. Lee, Y. W. Su, and C. C. Shen, “A Comparison of Wireless Protocols for Smart Sensor Networks in 
Home Automation,” IEEE International Conference on Industrial Informatics, 2007, pp. 1-6. 
[19] 
S. Hiremath, G. Yang, and K. Mankodiya, “Wearable sensors for rehabilitation,” IEEE Journal of 
Biomedical and Health Informatics, vol. 18, no. 5, 2014, pp. 1530-1537. 
[20] 
C. P. Low, S. T. Goh, and M. L. Wong, “Performance of MQTT in Wireless Sensor Networks,” IEEE 
International Conference on Communication Systems (ICCS), 2014, pp. 1-5. 
[21] 
R. S. H. Istepanian, S. Hu, N. Y. Philip, and K. S. Sung, “The evolution of real-time m-health monitoring 
systems,” IEEE Transactions on Information Technology in Biomedicine, vol. 15, no. 1, 2011, pp. 1-4. 
[22] 
K. K. Patel and S. M. Patel, “Internet of Things-IOT: Definition, Characteristics, Architecture, Enabling 
Technologies, Application & Future Challenges,” International Journal on Engineering Techniques and 
Technologies, vol. 3, 2016, pp. 61-67. 
[23] 
STMicroelectronics, “STM32L4 Series Hardware Development Guide,” 2020. 
[24] 
N. Wickramasinghe, “The role of IoT in healthcare,” International Journal of Networking and Virtual 
Organisations, vol. 19, 2018, pp. 1-5.
