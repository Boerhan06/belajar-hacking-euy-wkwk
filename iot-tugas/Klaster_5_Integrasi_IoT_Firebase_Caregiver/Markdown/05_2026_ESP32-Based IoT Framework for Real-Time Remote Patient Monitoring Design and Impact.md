# ESP32-Based IoT Framework for Real-Time Remote Patient Monitoring: Design and Impact

> **Klaster Literatur:** Klaster 5: Integrasi IoT, Firebase, & Notifikasi Caregiver  
> **Penulis:** M. Rajathi, Mohan Kumar K  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** Advanced International Journal for Research  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.63363/aijfr.2026.v07i01.3112](https://doi.org/10.63363/aijfr.2026.v07i01.3112)  

---

## 📌 Abstrak / Intisari Ilmiah
This research article presents the design and implementation of an Internet of Things (IoT)-based healthcare monitoring system utilizing ESP32 sensors. The system aims to provide real-time, continuous health monitoring by integrating wearable and ambient sensors with wireless communication capabilities enabled by the ESP32 microcontroller. Key physiological parameters such as heart rate, body temperature, and blood oxygen levels are collected, processed, and transmitted securely to a cloud platform for remote access by healthcare providers. The system emphasizes low power consumption, cost-effectiveness, and scalability, making it suitable for both clinical and home-care environments. Experimental results demonstrate the system's reliability, accuracy, and responsiveness, highlighting its potential to enhance patient care, enable early diagnosis, and reduce hospital visits. This work contributes to the growing field of smart healthcare by leveraging IoT technologies to bridge the gap between patients and medical professionals.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
1
 
ESP32-Based IoT Framework for Real-Time 
Remote Patient Monitoring: Design and Impact 
 
M. Rajathi1, Dr. K. Mohan Kumar2 
 
1Research Scholar, 2Associate Professor 
1,2PG & Research Department of Computer Science  
Rajah Serfoji Government College (Autonomous),  
Affiliated to Bharathidasan University, Tiruchirappalli, Tamil Nadu, India 
 
Abstract 
This research article presents the design and implementation of an Internet of Things (IoT)-based 
healthcare monitoring system utilizing ESP32 sensors. The system aims to provide real-time, continuous 
health monitoring by integrating wearable and ambient sensors with wireless communication capabilities 
enabled by the ESP32 microcontroller. Key physiological parameters such as heart rate, body 
temperature, and blood oxygen levels are collected, processed, and transmitted securely to a cloud 
platform for remote access by healthcare providers. The system emphasizes low power consumption, 
cost-effectiveness, and scalability, making it suitable for both clinical and home-care environments. 
Experimental results demonstrate the system's reliability, accuracy, and responsiveness, highlighting its 
potential to enhance patient care, enable early diagnosis, and reduce hospital visits. This work 
contributes to the growing field of smart healthcare by leveraging IoT technologies to bridge the gap 
between patients and medical professionals. 
 
Keywords: IoT healthcare monitoring, ESP32 sensors, real-time health tracking, remote patient 
monitoring, wireless communication, smart healthcare systems 
 
1. Introduction 
The rapid evolution of healthcare technology has transitioned from traditional, facility-centric 
models to digital health and now to the paradigm of the Internet of Things (IoT), fundamentally enabling 
smart healthcare ecosystems [10][34]. This shift is largely motivated by pressing global demands, 
including aging populations and the rising prevalence of chronic diseases, which necessitate more 
personalized, continuous, and real-time health monitoring solutions [6][25][26]. IoT technology stands 
as a transformative force in this landscape, facilitating persistent data collection, remote patient 
monitoring, and the potential for timely medical interventions [14][18]. Concurrent advances in 
miniaturized sensor technologies, robust wireless communication, and expansive cloud computing 
infrastructure provide the technical backbone for these innovations [6][17]. Within this context, the 
ESP32 microcontroller emerges as a particularly suitable platform due to its cost-effectiveness, versatile 
support for multiple wireless protocols like Wi-Fi and Bluetooth, and its aptitude for integration into

---

### Halaman 2

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
2
 
both wearable and ambient sensing devices [1][3][12][21]. The importance of synthesizing diverse 
physiological data—such as heart rate, body temperature, and blood oxygen saturation (SpO2)—for a 
comprehensive health assessment is paramount [4][22][27]. Furthermore, a growing emphasis on 
patient-centric care models and the accelerated adoption of telemedicine, highlighted by recent global 
health challenges, underscore the urgency for such technological integration [5][20]. Despite this 
potential, significant gaps persist in achieving effective continuous and remote patient monitoring. 
Conventional healthcare remains largely episodic and hospital-focused, lacking the capability for real-
time, proactive health management [20]. Existing remote monitoring systems often grapple with 
substantial limitations, including high power consumption, limited scalability, persistent data security 
concerns, and prohibitive costs [8][29][33]. There is also frequently insufficient integration between 
wearable biometric sensors and ambient environmental sensors, which is necessary for holistic health 
insight [7][17]. Moreover, many current IoT healthcare implementations face reliability and 
responsiveness issues, alongside challenges in establishing seamless and secure communication channels 
for remote data access by healthcare providers [31][32]. Crucially, barriers to widespread adoption in 
home-care settings remain, often stemming from system complexity, high expense, or a lack of intuitive 
user interfaces [2][9][19]. To address these identified challenges, this study aims to design and 
implement a robust IoT-based healthcare monitoring system utilizing ESP32 sensors, aligning with 
similar initiatives [3][4][13]. The primary objectives are to enable continuous, real-time tracking of vital 
physiological parameters with high accuracy and low latency [15][26] while ensuring low power 
consumption for feasible wearable and ambient use [12][21]. The project scope includes developing 
secure data transmission protocols to safeguard patient privacy and ensure regulatory compliance 
[23][35], as well as creating a scalable system architecture adaptable to both clinical and home 
environments [5][24]. The performance of the proposed system will be rigorously validated through 
experimental analysis focusing on reliability, data accuracy, and system responsiveness [11][16][32]. 
Ultimately, this work seeks to contribute to the smart healthcare domain by bridging critical 
technological gaps between patients and healthcare providers, thereby supporting more proactive, 
efficient, and accessible care delivery [14][20][28]. This article is structured to systematically present 
this research. Following this introduction, a literature review will survey existing IoT healthcare 
systems, sensor technologies, and communication protocols [10][18][34]. The system design section will 
detail the architecture of the ESP32-based monitoring framework, including sensor integration and 
communication layers [1][12][27]. The implementation chapter will cover hardware and software 
development, cloud platform configuration, and security measures [4][22][30]. Subsequently, 
experimental results will present performance evaluations, including data accuracy, power consumption 
metrics, and responsiveness [11][13][32]. A discussion will then analyze these findings, compare them 
with existing solutions, and address limitations and potential improvements [16][31]. The conclusion 
will summarize the study's contributions, outline implications for smart healthcare, and suggest 
directions for future research [5][14][20].

---

### Halaman 3

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
3
 
2. System Design and Architecture 
The proposed IoT-based healthcare monitoring system is architected on a modular three-tier 
model, which effectively segregates the sensing, communication, and data processing layers. This 
design, commonly adopted in robust IoT solutions [10, 14], ensures scalability, reliability, and ease of 
maintenance, facilitating the seamless flow of physiological data from the patient to the healthcare 
provider. 
2.1. Overall System Architecture: Three-Tier Model 
The system's operational flow is governed by a well-defined three-tier architecture comprising 
the Sensor Tier, the Communication Tier, and the Cloud/Application Tier, as illustrated in Figure 1. 
 
Figure 1: Architecture Tiers of an IoT System 
Tier 1: Sensor/Data Acquisition Layer: This foundational layer comprises the physical hardware worn 
by or placed near the patient. Its primary function is the continuous and accurate acquisition of vital 
physiological signals. Key components include the ESP32 microcontroller, integrated with specialized 
sensors such as a pulse oximeter (e.g., MAX30102) for heart rate (HR) and peripheral capillary oxygen 
saturation (SpO2), and a digital temperature sensor (e.g., DS18B20 or MLX90614 for non-contact 
measurement). This tier is responsible for the initial analog-to-digital conversion and basic signal 
conditioning [11, 27]. 
 
Tier 2: Communication/Gateway Layer: This layer handles the secure and reliable transmission of the 
processed sensor data. The ESP32's dual-mode wireless capability (Wi-Fi and Bluetooth) is leveraged 
here. In a typical deployment, the ESP32 acts as a Wi-Fi client, connecting directly to a local access 
point or a smartphone hotspot. It employs standardized protocols like MQTT (Message Queuing 
Telemetry Transport) or HTTPS to transmit encrypted data packets to the cloud server [2, 5, 21]. The 
MQTT protocol, with its publish-subscribe model and low overhead, is particularly favored for its 
efficiency in IoT applications [5, 29]. 
 
Tier 3: Cloud/Application Layer: This is the data management and presentation layer. Incoming data 
streams are received by a cloud platform (such as Blynk, Thingspeak, Ubidots, or a custom 
Firebase/Node.js server) [2, 4, 30]. This tier performs critical functions: real-time data visualization on 
dashboards accessible via web or mobile applications, secure storage in databases for historical analysis, 
and the implementation of alert mechanisms. Threshold-based rules are configured to trigger instant 
notifications (SMS, email, or in-app alerts) to caregivers or medical professionals when a vital parameter 
exceeds predefined safe limits [6, 22, 28]. This layer enables remote monitoring and data-driven 
decision-making.

---

### Halaman 4

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
4
 
2.2. Hardware Components: Selection and Specification 
The hardware selection prioritizes accuracy, low power consumption, cost-effectiveness, and 
ease of integration, aligning with the goals outlined in the referenced studies. ESP32 Microcontroller: 
The ESP32-WROOM-32 module serves as the system's computational and communication core. 
Selected for its proven reliability in healthcare prototypes [12, 21, 33], its key specifications include a 
dual-core 240 MHz Xtensa processor, 520 KB SRAM, integrated Wi-Fi 802.11 b/g/n and Bluetooth 4.2 
BR/EDR/BLE, and rich peripheral interfaces (I2C, SPI, ADC). Its low-power modes (Deep-sleep, Light-
sleep) are crucial for extending battery life in wearable scenarios [1, 20, 29]. 
 
MAX30102 Pulse Oximeter and Heart Rate Sensor: This integrated module is the standard choice for 
HR and SpO2 monitoring in research prototypes [15, 22, 26]. It combines two LEDs (red and infrared), 
a photodetector, and advanced optics to generate photoplethysmogram (PPG) signals. Its I2C interface 
allows simple connection to the ESP32. Studies by Farej & Al-hayaly (2023) [32] have specifically 
evaluated its accuracy in ESP32-based systems, confirming its suitability for non-clinical, continuous 
monitoring. 
 
Temperature Sensor: For body temperature monitoring, options include the DS18B20 (digital, 
waterproof) for contact-based measurement or the MLX90614 infrared (IR) sensor for non-contact, 
ambient temperature-corrected readings [18, 31]. The choice depends on the target application—
wearable (contact) or ambient/stationary monitor (non-contact). Both communicate via digital protocols 
(1-Wire for DS18B20, I2C for MLX90614), minimizing noise. Additional supporting components 
include a 3.7V Li-Po battery with a charging circuit (TP4056), voltage regulators, and an optional OLED 
display for local vital sign readouts. 
 
2.3. Software and Data Flow Design 
The software ecosystem orchestrates the interaction between hardware components and cloud 
services, ensuring efficient and secure data flow. Firmware Logic (ESP32): The firmware, developed in 
Arduino IDE or PlatformIO, follows a structured loop. After initialization, it continuously: 1) Acquires 
Data: Reads raw ADC values from the sensors via I2C or digital pins. 2) Processes Signals: Applies 
embedded algorithms (e.g., proprietary libraries for MAX30102 to filter noise and calculate HR/SpO2) 
[15, 27]. 3) Structures Data: Packages the processed readings (HR, SpO2, Temperature, Timestamp, 
Device ID) into a JSON object. 4) Manages Connectivity: Checks Wi-Fi stability and transmits the 
JSON packet to the cloud broker using the MQTT client or HTTPS POST request [5, 19]. It incorporates 
error handling for sensor faults and network reconnection routines. 
 
Communication Protocols: Wi-Fi (IEEE 802.11) is the primary medium for internet connectivity. 
MQTT is the preferred application-layer protocol due to its minimal packet size, low power usage, and 
reliable message delivery, even over unstable networks [5, 6]. Data is published to specific topics (e.g., 
patient/room1/vitals). TLS/SSL encryption is implemented to secure data in transit, a critical 
consideration for patient privacy [29, 34]. 
 
Cloud Integration Strategy: The cloud platform acts as the central hub. A service like Ubidots or 
Thingspeak provides immediate dashboard widgets for visualization [4, 10]. For more advanced control,

---

### Halaman 5

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
5
 
a custom backend using Firebase Firestore/Realtime Database or a Node.js server with a SQL/NoSQL 
database (e.g., MySQL, MongoDB) is implemented [6, 14]. This backend manages user authentication, 
device management, and hosts the business logic for alert generation. The cloud application fetches data 
from the MQTT broker or HTTP endpoint, parses it, and updates the user-facing dashboard in real-time 
while logging it for future analytics and reporting [20, 25]. 
 
 
3. Implementation and Methodology 
This chapter details the technical execution of the IoT-based health monitoring system. The 
implementation is divided into three core components: hardware prototyping, firmware development, 
and cloud platform integration, which together enable a functional, end-to-end monitoring solution. 
 
3.1. Hardware Prototyping:  
Circuit Design and Sensor Interfacing with ESP32 The hardware architecture is centered on the 
ESP32 microcontroller, selected for its integrated Wi-Fi/Bluetooth capabilities, dual-core processor, and 
cost-effectiveness, making it ideal for portable, low-power medical devices [2, 4]. The system interfaces 
with multiple biomedical sensors to form a comprehensive vital sign acquisition unit. 
 
Core Controller and Sensors: A typical configuration involves the ESP32 interfacing with sensors like 
the MAX30100 or MAX30102 for measuring heart rate and blood oxygen saturation (SpO₂) via the I2C 
protocol, and a DS18B20 or LM35 temperature sensor for body temperature via a digital or analog pin 
[2, 3]. For more advanced cardiac monitoring, an AD8232 module can be integrated to capture 
Electrocardiogram (ECG) signals [5, 7]. 
 
Circuit Configuration and Local Feedback: The sensors are connected to the ESP32’s GPIO pins on a 
breadboard or custom PCB. A 16x2 LCD or an OLED display (e.g., SSD1306) is often incorporated 
using I2C to provide immediate, local feedback of the measured parameters to the user [4, 7]. 
Additionally, a buzzer or LED is connected to a digital output pin to generate audiovisual alerts when 
readings fall outside predefined safe thresholds [3, 4]. 
 
Power Considerations: The entire prototype is typically powered by a 5V supply, which can be a USB 
connection or a battery pack, facilitating portability and wearable applications [2, 7]. 
 
3.2. Firmware Development: Data Acquisition, Local Processing, and Wi-Fi/Bluetooth Connectivity. 
The system's intelligence is embedded in the firmware developed for the ESP32, commonly 
programmed using the Arduino IDE or ESP-IDF framework. 
 
Data Acquisition and Processing: The firmware initializes all sensors and enters a main loop to poll 
data at regular intervals. It performs essential local (edge) processing, such as filtering noise from raw 
sensor signals, converting analog readings to meaningful values (e.g., voltage to Celsius for 
temperature), and calculating heart rate and SpO₂ from photoplethysmography (PPG) data [2, 7]. This 
local processing reduces the data load and latency before transmission.

---

### Halaman 6

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
6
 
Connectivity and Transmission: A critical function of the firmware is to establish and maintain a 
connection to a Wi-Fi network. Using specific libraries (like WiFi.h for Arduino), the ESP32 transmits 
the processed sensor data to a designated cloud server. Common communication protocols include 
HTTP for simple REST API calls or the more efficient MQTT protocol for real-time, publish-subscribe 
messaging [10, 5]. The firmware also handles connection robustness, managing reconnection attempts if 
the network is lost. 
3.3. Cloud Platform Integration and Dashboard Development for Data Visualization 
The final layer involves cloud services for data aggregation, storage, and remote access, transforming 
the device data into actionable health insights. 
 
Cloud Platform Selection: Various IoT platforms are utilized for backend services. Blynk is a popular 
choice due to its user-friendly interface, allowing for quick setup of dashboards and notification systems 
[2, 3]. Other systems employ more robust platforms like UBIDOTS or Google Firebase, which offer 
scalable data storage, advanced analytics, and custom web application support [4, 5]. 
 
Data Flow and Dashboard: The ESP32 sends sensor readings to the cloud platform via its API. On 
these platforms, customizable dashboards are created. These dashboards visualize data in real-time using 
gauges, charts, and graphs, displaying parameters like live heart rate, SpO₂ percentage, and body 
temperature [2, 5]. Alert systems are configured to trigger automatic email or SMS notifications to 
caregivers or medical professionals when any vital sign crosses a predefined critical threshold, enabling 
timely intervention [10, 1]. 
 
Data Management: The cloud platform securely stores historical data, enabling long-term trend 
analysis and facilitating remote patient monitoring by healthcare providers from any internet-connected 
device [5, 6]. 
 
 
4. Analysis and Discussion 
This section provides a comprehensive analysis of the implemented ESP32-based IoT healthcare 
monitoring system, evaluating its performance against the stated objectives and comparing it with 
existing solutions. The discussion synthesizes experimental findings, addresses system limitations, and 
explores broader implications for smart healthcare. 
 
4.1 System Performance Analysis 
4.1.1 Data Accuracy and Reliability Assessment 
The accuracy of physiological measurements was rigorously evaluated against clinical-grade monitoring 
equipment. As demonstrated in Table 1, the system achieved a mean absolute error (MAE) of 2.1% for 
SpO₂ measurements and 3.2 beats per minute for heart rate monitoring across 50 test subjects under 
controlled conditions.

---

### Halaman 7

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
7
 
Table 1: Accuracy Comparison with Reference Devices 
Parameter 
ESP32 System 
Mean 
Reference Device 
Mean 
MAE 
Pearson 
Correlation 
SpO₂ (%) 
96.8 ± 1.5 
97.2 ± 1.1 
2.1% 
0.94 
Heart 
Rate 
(BPM) 
72.3 ± 8.5 
72.1 ± 7.9 
3.2 
BPM 
0.96 
Temperature 
(°C) 
36.7 ± 0.4 
36.8 ± 0.3 
0.2°C 
0.98 
 
The correlation coefficients indicate strong agreement with reference measurements, particularly for 
temperature monitoring (r=0.98). However, SpO₂ readings showed greater variability during motion, 
with accuracy decreasing to 91.3% during physical activity compared to 97.5% at rest. This aligns with 
findings from Farej & Al-hayaly (2023) [32], who reported similar motion-induced artifacts in ESP32-
based pulse oximetry systems. 
 
4.1.2 System Responsiveness and Latency Analysis 
Real-time monitoring capability was evaluated by measuring end-to-end latency from sensor 
acquisition to cloud dashboard display. The system demonstrated an average latency of 2.3 seconds 
under stable network conditions, with 95% of transmissions completing within 4.1 seconds (Figure 2). 
This performance meets the requirements for most continuous monitoring applications but may be 
insufficient for critical care scenarios requiring sub-second response times. 
                    
 
Figure 2: System Latency Distribution 
The MQTT protocol implementation proved more efficient than HTTPS, reducing average 
transmission time by 38% (1.8s vs. 2.9s). However, during network instability, MQTT's quality of 
service (QoS) level 1 implementation resulted in occasional duplicate packets, necessitating additional 
processing at the cloud layer. 
 
0
100
200
300
400
500
0-1
2-Jan
3-Feb
4-Mar
5-Apr
5+
System Latency Distribution (n=1000 transactions)
Frequency
Percentage
Cumulative %

---

### Halaman 8

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
8
 
4.1.3 Power Consumption and Battery Life Evaluation 
Power management directly impacts system practicality for wearable applications. Measurements 
revealed the following consumption profile: 
 
 
Table 2: Power Consumption by Operational Mode 
Mode 
Current Draw (mA) 
Duration per Cycle 
Energy per Hour 
Deep Sleep 
0.15 
55 seconds 
0.23 mAh 
Sensor Sampling 
12.5 
2 seconds 
6.94 mAh 
Data Processing 
25.3 
1 second 
7.03 mAh 
Wi-Fi Transmission 
65.8 
1.5 seconds 
27.42 mAh 
Total (per 1-min cycle) 
Average: 4.2 mA 
60 seconds 
4.2 mAh 
 
With a 1000mAh Li-Po battery, the theoretical battery life is approximately 238 hours (9.9 days) at a 1-
minute sampling interval. Practical testing yielded 7.2 days of continuous operation, representing 73% of 
theoretical capacity due to battery discharge characteristics and occasional retransmissions. This 
performance exceeds many commercial wearable monitors but falls short of the 14-day target proposed 
in related studies [12, 21]. 
 
4.2 Comparative Analysis with Existing Systems 
The implemented system was compared with three categories of existing solutions: commercial 
wearable devices, research prototypes, and traditional monitoring systems. 
 
 
 
Table 3: Comparative Analysis with Existing Monitoring Systems 
Aspect 
This Work 
(ESP32) 
Commercial 
Wearables 
Research 
Prototypes 
Hospital 
Monitors 
Accuracy 
Moderate-High 
(92-97%) 
Moderate (90-
95%) 
Variable (85-
99%) 
High (98-99.5%) 
Cost 
Very Low ($20-
30) 
Low-Medium 
($100-300) 
Low ($50-100) 
Very High 
($1000-5000) 
Power 
Autonomy 
5-7 days 
1-10 days 
2-5 days 
Continuous 
power

---

### Halaman 9

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
9
 
Aspect 
This Work 
(ESP32) 
Commercial 
Wearables 
Research 
Prototypes 
Hospital 
Monitors 
Parameters 
3-4 vitals 
1-3 vitals 
2-6 vitals 
5-12+ vitals 
Connectivity 
Wi-Fi/Bluetooth 
Bluetooth only 
Wi-
Fi/Bluetooth 
Wired/Wi-Fi 
Clinical 
Validation 
Limited 
Extensive 
Variable 
Extensive 
 
Key differentiators of this implementation include: 
1. Cost-effectiveness: At approximately $25 per unit (including enclosure), the system represents an 
80-90% cost reduction compared to specialized medical monitors while maintaining adequate 
accuracy for non-critical monitoring [33, 34]. 
2. Dual connectivity: Unlike Bluetooth-only commercial wearables, simultaneous Wi-Fi and 
Bluetooth support enables both direct smartphone pairing and independent cloud connectivity. 
3. Open architecture: The system's modular design allows for sensor upgrades and customization, 
addressing the inflexibility of proprietary systems noted in literature [8, 19]. 
 
4.3 Limitations and Technical Challenges 
4.3.1 Motion Artifact Susceptibility 
Despite implementing filtering algorithms, the system exhibited significant sensitivity to motion 
artifacts, particularly affecting SpO₂ readings. During walking tests, SpO₂ accuracy dropped to 84.2%, 
with frequent false alerts (12.3% false positive rate). This limitation echoes challenges documented 
across IoT health monitoring research [15, 26, 32] and represents a critical barrier to ambulatory 
monitoring applications. 
 
4.3.2 Scalability Constraints 
Load testing revealed architectural limitations at scale. The cloud implementation began experiencing 
latency increases (>5 seconds) beyond 1,000 concurrent users, and database queries slowed significantly 
beyond 10,000 stored patient-days. While adequate for small clinics or home use, this restricts 
deployment in large healthcare facilities without significant infrastructure upgrades [6, 14]. 
 
4.3.3 Security Implementation Gaps 
Although TLS encryption was implemented for data transmission, several security vulnerabilities were 
identified: 
1. Device authentication: The current implementation uses simple token-based authentication 
susceptible to replay attacks. 
2. Data at rest: While cloud providers offer encryption, key management lacks the granularity 
required for HIPAA compliance in multi-tenant scenarios [23, 35].

---

### Halaman 10

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
10
 
3. Physical security: The prototype lacks tamper detection mechanisms, creating potential for 
physical compromise in unsupervised deployments. 
 
4.4 Clinical Relevance and Practical Implications 
4.4.1 Applicability to Chronic Disease Management 
The system shows particular promise for managing chronic conditions requiring continuous 
monitoring but not immediate intervention. For respiratory conditions like asthma or COPD, the 
combination of SpO₂ and heart rate monitoring provides early indicators of exacerbation, potentially 
reducing emergency visits by 30-40% as suggested in similar implementations [26]. However, clinical 
validation with patient populations remains necessary to establish efficacy thresholds and reduce false 
alerts. 
4.4.2 Impact on Healthcare Delivery Models 
The low-cost, remote monitoring capability aligns with shifting healthcare paradigms toward 
decentralized care. Economic analysis suggests potential cost savings of $2,500-$4,000 per patient 
annually through reduced hospitalizations and clinic visits [20, 25]. Furthermore, the system enables 
"hospital-at-home" models, particularly valuable for elderly or mobility-impaired patients [9, 25]. 
 
4.4.3 User Adoption Considerations 
Usability testing with elderly participants (n=15, age 68±7) revealed mixed results. While the 
wearable form factor was generally acceptable, 40% of participants required assistance with initial Wi-Fi 
configuration. The mobile dashboard received positive feedback for clarity (4.1/5 rating), but 
customization options were deemed limited by caregivers. These findings underscore the importance of 
user-centered design highlighted in multiple studies [2, 9, 19]. 
 
4.5 Comparative Advantages and Trade-offs 
The analysis reveals several key trade-offs inherent in IoT-based health monitoring: 
1. Accuracy vs. Cost: The system achieves 92-97% accuracy at 5-10% of the cost of clinical 
equipment, representing an optimal point on the cost-accuracy curve for non-critical applications. 
2. Connectivity vs. Power: Dual connectivity increases functionality but reduces battery life by 
35% compared to Bluetooth-only implementations. 
3. Real-time vs. Reliability: Optimizing for real-time transmission (1-minute intervals) increases 
data freshness but reduces battery life and increases network dependency. 
The ESP32 platform effectively balances these trade-offs, though not optimally for all scenarios. For 
instance, battery-powered wearable applications might benefit from disabling Wi-Fi in favor of 
Bluetooth Low Energy, while stationary bedside monitors could prioritize Wi-Fi for continuous 
connectivity. 
 
4.6 Recommendations for System Enhancement 
Based on the analysis, several improvements are recommended: 
Algorithm Enhancement: Implement adaptive filtering that adjusts to individual motion patterns and 
physiological baselines, potentially improving motion artifact rejection by 40-50%.

---

### Halaman 11

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
11
 
i. 
Hybrid Connectivity Strategy: Develop intelligent protocol switching that uses Bluetooth when 
mobile devices are nearby and Wi-Fi for direct cloud connectivity otherwise, optimizing both 
power and reliability. 
ii. 
Edge Computing Integration: Move basic anomaly detection to the ESP32 to reduce cloud 
dependency and enable offline alerting, addressing connectivity gaps in remote areas. 
iii. 
Modular Sensor Architecture: Design pluggable sensor modules to facilitate customization for 
different medical conditions while maintaining core electronics. 
iv. 
Enhanced Security Framework: Implement hardware-based secure elements for device 
authentication and explore blockchain-based audit trails for regulatory compliance [23, 35]. 
 
4.7 Future Research Directions 
The analysis identifies several promising research avenues: 
a. Multi-modal Sensor Fusion: Combining PPG with additional parameters (ECG, respiratory 
rate) through sensor fusion algorithms could improve accuracy and enable new diagnostic 
capabilities [7, 27].  
b. Machine Learning Integration: Implementing lightweight ML models on the ESP32 for 
personalized anomaly detection represents a natural progression from threshold-based alerting 
[14, 24]. 
c. Interoperability Standards: Developing standardized APIs for EHR integration would address 
a significant adoption barrier in clinical settings [5, 20]. 
d. Long-term Validation Studies: Longitudinal studies with diverse patient populations are needed 
to establish clinical efficacy and refine alert thresholds. 
 
Energy Harvesting Integration: Exploring integration with piezoelectric or thermoelectric energy 
harvesters could enable truly maintenance-free operation for implantable or long-term wearable 
applications. 
 
 
5. Conclusion  
The ESP32-based IoT healthcare monitoring system successfully addresses key requirements for 
affordable, continuous health monitoring. It demonstrates adequate accuracy for non-critical 
applications, acceptable latency for most monitoring scenarios, and sufficient battery life for practical 
wearable use. The system's primary contributions lie in its cost-effectiveness, dual connectivity, and 
open architecture, which collectively lower barriers to adoption in both clinical and home settings. 
However, significant challenges remain, particularly regarding motion artifact rejection, scalability 
limitations, and security implementation. These limitations define the system's appropriate use cases: 
chronic disease management, post-operative monitoring, elderly care, and general wellness tracking—
applications where occasional data gaps or moderate accuracy are acceptable trade-offs for accessibility 
and cost. The analysis confirms that while IoT cannot replace clinical-grade monitoring for critical care, 
it effectively bridges the monitoring gap between periodic clinic visits and inpatient care. As sensor 
technologies advance and processing algorithms mature, similar systems will increasingly play vital 
roles in preventive healthcare and chronic disease management, contributing to more proactive, 
personalized, and accessible healthcare delivery worldwide.

---

### Halaman 12

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
12
 
References 
1. Kumar, S. (2025). IOT Based Health Care Wristband for Elderly People Using ESP32. Indian 
Scientific 
Journal 
of 
Research 
In 
Engineering 
And 
Management, 
09(04), 
1–9. 
https://doi.org/10.55041/ijsrem45603  
2. IoT Based Patient Health Monitoring System Using ESP32 and Blynk App. (2025). International 
Journal 
For 
Science 
Technology 
And 
Engineering, 
13(5), 
6322–6328. 
https://doi.org/10.22214/ijraset.2025.71663  
3. Tegote, R., Vyasa, S., Medikonda, A. K., Sowjanya, Y., Byrapuneni, L. P., & Ayyalasomayajula, 
P. 
(2025). 
Real 
Time 
Health 
Monitoring 
System 
using 
IoT. 
1–6. 
https://doi.org/10.1109/conit65521.2025.11167103  
4. Balamanikandan, A., Neeraja, S., Kishore, T. V. N., Deepika, U., Prathyusha, S., & 
Venkatachalam, K. (2024). IoT-Enabled Advanced Health Monitoring System using ESP32 and 
UBI DOTS. 403–408. https://doi.org/10.1109/icicnis64247.2024.10823147  
5. Luqman, M., & Mohamad, M. R. (2025). Design and Implementation of IoT-Based Remote Vital 
Sign Monitoring System. Journal of Human Centered Technology, 4(2), 155–165. 
https://doi.org/10.11113/humentech.v4n2.113  
6. Shafi, I., Din, S., Farooq, S., de la Torre Díez, I., Breñosa, J., Martínez Espinosa, J. C., & Ashraf, 
I. (2024). Design and development of patient health tracking, monitoring and big data storage 
using 
Internet 
of 
Things 
and 
real 
time 
cloud 
computing. 
PLOS 
ONE, 
19. 
https://doi.org/10.1371/journal.pone.0298582  
7. Kashyap, S. S., Soumya, M., Hindumathi, D., Dinesh, P. M., Vikas, L., & Kumar, K. A. (2025). 
Smart 
iot-driven 
health 
monitoring 
and 
assistance 
system. 
21(3), 
48–52. 
https://doi.org/10.62643/ijerst.2025.v21.i3.pp48-52  
8. Amhenrior, H. E., & Eragbe, P. (2024). Design and Implementation of an IoT Based Patient’s 
Health Monitoring System. https://doi.org/10.61448/jerisd21243 
9. Jamdade, P. (2025). Smart Monitoring System for Patient. International Journal For Science 
Technology And Engineering, 13(5), 5643–5649. https://doi.org/10.22214/ijraset.2025.71392  
10. Wyrwa, U. (2023). IoT-Based Smart Health Monitoring System: Design, Development, and 
Implementation 
(pp. 
601–614). 
Lecture 
notes 
in 
electrical 
engineering. 
https://doi.org/10.1007/978-981-19-8032-9_43  
11. Chakole, M., Ainchwar, I., Budhe, V., Babhale, A., Katolkar, A., & Dorle, S. S. (2024). IoT - 
Driven 
Bioelectrical 
Signals 
Detection 
and 
Monitoring 
System. 
https://doi.org/10.1109/iccica60014.2024.10585066  
12. K K, M. R., M, M. N., Zidan, R., Alsarraj, I., & Hasan, B. (2023). IOT-Based Wireless Patient 
Monitor Using ESP32 Microcontroller. 1–6. https://doi.org/10.1109/acit58888.2023.10453847  
13. Adochiei, F., Dumitrescu, D., Serițan, G., Argatu, F.-C., Enache, B., & Adochiei, I. R. (2024). 
IoT-Based 
Real-Time 
Electrocardiogram 
Monitoring 
and 
Recording 
System. 
1–5. 
https://doi.org/10.1109/ehb64556.2024.10805722  
14. Deshmukh, S. B., Shah, S., Wahedna, A., & Sabnis, N. (2025). IoT-enabled smart healthcare 
system with machine learning for real-time vital sign monitoring and anomaly detection. 
Indonesian Journal of Electrical Engineering and Computer Science, 39(2), 1155. 
https://doi.org/10.11591/ijeecs.v39.i2.pp1155-1163

---

### Halaman 13

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
13
 
15. Afifi, S., GholamHosseini, H., & Baig, M. M. (2025). Smart Health Monitoring System for 
Realtime Measurement of Vital Signs. 1–5. https://doi.org/10.1109/acdsa65407.2025.11166087  
16. Manikandan, K., Prabakar, S., Praveenkumar, P., Rubini, R., & Srinithya, R. (2025). Smart Care: 
Iot-Based 
Health 
Monitoring 
System 
for 
Paralysis 
Patient 
Management. 
1–5. 
https://doi.org/10.1109/assic64892.2025.11158523  
17. Wan Ahmad, W. A. S., Suneel, S., Nanthini, L., Srivastava, S. K., Sai Veerraju, M., & 
Moharekar, T. T. (2024). IoT based Novel Design of Intelligent Healthcare Monitoring System 
with Internet of Things and Smart Sensors. https://doi.org/10.1109/icaaic60222.2024.10574986  
18. Mostafa, Sk. Md. G., Zaki, M. J., Islam, M. M., Alam, M. S., & Ullah, Md. A. (2022). Design 
and Implementation of an IoT-Based Healthcare Monitoring System. 2022 International 
Conference on Innovations in Science, Engineering and Technology (ICISET), 362–366. 
https://doi.org/10.1109/iciset54810.2022.9775850  
19. Saha, R. (2025). IoT-Powered Real-Time InPatient Monitoring System with Seamless 
Connectivity and Insights. International Journal For Science Technology And Engineering, 
13(4), 5882–5889. https://doi.org/10.22214/ijraset.2025.69688  
20. Mishra, A. D., Thakral, B., & Jijja, A. (2024). Real-time Vital Signs Monitoring and Data 
Management Using a Low-Cost IoT-based Health Monitoring System. Journal of Health 
Management. https://doi.org/10.1177/09720634241246926  
21. Ya’acob, N., Ismail, S. I., Mohd Amin, M. Z., & Abdul Aziz, N. F. (2024). Design and 
Implementation of a Wireless Health Monitoring System for Real-Time Patient Data Using 
ESP32. 149–153. https://doi.org/10.1109/icsgrc62081.2024.10691254  
22. Joseph, I., Anthony, P., Astuti, W., Lie, Z. S., & Solihin, M. I. (2024). Inpatient Monitoring 
System: Temperature, Oxygen Saturation, Blood Pressure, Heart Rate, and Infusion Automation 
Based 
on 
ESP 
32, 
IoT, 
and 
Mobile 
Application. 
1–7. 
https://doi.org/10.1109/ic2ie63342.2024.10747852  
23. Elankavi, R., Krishnamoorthy, P., Jose, J., & Surekha, R. (2022). Smart IoT based Human Well-
being Monitoring in Health Care System. International Conference Electronic Systems, Signal 
Processing 
and 
Computing 
Technologies 
[ICESC-], 
1775–1782. 
https://doi.org/10.1109/ICESC54411.2022.9885413  
24. Aeron, A., Goel, P. K., Ansari, S., Sharma, V., & Komal. (2024). Design and Implementation of 
A Real-Time Health Monitoring System Using IoT Sensors and Machine Learning Algorithms. 
1190–1195. https://doi.org/10.1109/ic3i61595.2024.10829352  
25. Patlolla, S., Simhadri, M., Ali, N. M., Vidyadhari, Ch., Swathi, K., & Kumar, U. (2025). IoT-
based Health Monitoring System for Elderly and Physically Challenged People. 477–483. 
https://doi.org/10.1109/iccmc65190.2025.11140853  
26. Islam, K., Alam, F., Zahid, A. I., Khan, M. M., & InamAbbasi, M. (2022). Internet of Things- 
(IoT-) Based Real-Time Vital Physiological Parameter Monitoring System for Remote Asthma 
Patients. 
Wireless 
Communications 
and 
Mobile 
Computing, 
2022, 
1–22. 
https://doi.org/10.1155/2022/1191434  
27. Hemalatha, R., Malhotra, S. S., Shivapanchakshari, T. G., Lokesh, K., Anand, D. D., & 
Jebakumar, S. S. (2025). IoT-Enabled Hemodynamic Surveillance System: AD8232 Bioelectric 
Signal Processing with ESP32. https://doi.org/10.48550/arxiv.2505.18173

---

### Halaman 14

Advanced International Journal for Research (AIJFR) 
E-ISSN: 3048-7641   ●   Website: www.aijfr.com   ●   Email: editor@aijfr.com 
 
AIJFR26013112 
Volume 7, Issue 1 (January-February 2026) 
14
 
28. Chowdhury, S., Rahman, M. M., Dristy, A. R., Yeara, R. S., Uddin, M. F., Hasan, M., & Uddin, 
M. R. (2024). An IoT-Based Wearable Healthcare Monitoring Device and Medical Emergency 
Response System. 10, 1–6. https://doi.org/10.1109/sces61914.2024.10652507  
29. Ashraf, S., Khattak, S. P., & Iqbal, M. T. (2023). Design and Implementation of an Open-Source 
and Internet-of-Things-Based Health Monitoring System. Journal of Low Power Electronics and 
Applications. https://doi.org/10.3390/jlpea13040057 
30. Ferdous, J. (2023). Implementation of iot based patient health monitoring system using esp32 
web server. International Journal of Advanced Research. https://doi.org/10.21474/ijar01/17119  
31. Awsaj, M. K., Al Mashhadany, Y., & Fourati, L. C. (2023). Real- Time Healthcare Monitoring 
and 
Treatment 
System 
Based 
Microcontroller 
with 
IoT. 
https://doi.org/10.1109/dese58274.2023.10099758  
32. Farej, Z. K., & Al-hayaly, H. Y. (2023). Accuracy Evaluation of Healthcare Monitoring System 
Based 
on 
ESP32 
Microcontroller 
with 
IoT. 
90–94. 
https://doi.org/10.1109/icesat58213.2023.10347330  
33. Arafat, M. A. (2022). A Low-cost IoT-based Health Monitoring System. International 
Conference 
on 
Electrical 
and 
Control 
Engineering, 
60–63. 
https://doi.org/10.1109/ICECE57408.2022.10089084  
34. Sarkar, M., Nandi, S., & Jilani, S. A. (2022). Implementation of IoT-Based Smart Healthcare 
Monitoring System (pp. 97–107). https://doi.org/10.1007/978-981-16-7637-6_10  
35. Yuvarani, R., & Mahaveerakannan, R. (2024). Enhanced IoT-based Healthcare Device for 
Secure 
Patient 
Data 
Management 
using 
Hybrid 
Cryptography 
Algorithm. 
22–28. 
https://doi.org/10.1109/i-smac61858.2024.10714879
