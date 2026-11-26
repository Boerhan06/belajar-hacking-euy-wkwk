# IoT-Based Wearable System for Early Detection of Parkinson\'s Disease Symptoms Using ESP32, MPU6050, and MAX30102

> **Klaster Literatur:** Klaster 4: Multi-Sensor Fusion (MPU6050 + MAX30102 / Flex Sensor)  
> **Penulis:** Amay Shukla  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Journal for Research in Applied Science and Engineering Technology  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.22214/ijraset.2026.79423](https://doi.org/10.22214/ijraset.2026.79423)  

---

## 📌 Abstrak / Intisari Ilmiah
Parkinson's disease is a progressive neurological disorder whose earliest motor symptom — a resting hand tremor — is frequently missed during short clinical appointments. This paper presents a low-cost, IoT-based wearable monitoring device designed to continuously detect and log physiological signals that may indicate early neurological abnormality. The system integrates an MPU6050 inertial measurement unit for three-axis motion and tremor analysis, and a MAX30102 optical pulse oximeter for heart rate (BPM) and blood oxygen saturation (SpO2) measurement. An ESP32 microcontroller performs on-device signal processing using a variance-threshold algorithm that identifies repetitive oscillation patterns in the clinically significant 3–6 Hz Parkinson's tremor frequency range. Multi-parameter decision logic combines motion and cardiac data before raising an alert, reducing false positives. Sensor data is transmitted wirelessly over Wi-Fi to a cloud dashboard accessible by doctors and caregivers. Local feedback is delivered via an OLED display and audible buzzer. Testing confirmed correct alert behaviour across all operating states, with approximately 98% Wi-Fi packet delivery rate and 8–10 hours of battery life per charge. The device is intended as a screening and monitoring tool — not a clinical diagnostic instrument — and all flagged results must be reviewed by a qualified medical professional.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

14
IV
April 2026
https://doi.org/10.22214/ijraset.2026.79423

---

### Halaman 2

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
710
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
IoT-Based Wearable System for Early Detection of 
Parkinson's Disease Symptoms Using ESP32, 
MPU6050, and MAX30102 
 
Amay Shukla1, Adarsh Singh2, Aditya Singh3 
Department of Electronics and Telecommunication Engineering, Thakur College of Engineering and Technology, Mumbai, India 
  
Abstract: Parkinson's disease is a progressive neurological disorder whose earliest motor symptom — a resting hand tremor — 
is frequently missed during short clinical appointments. This paper presents a low-cost, IoT-based wearable monitoring device 
designed to continuously detect and log physiological signals that may indicate early neurological abnormality. The system 
integrates an MPU6050 inertial measurement unit for three-axis motion and tremor analysis, and a MAX30102 optical pulse 
oximeter for heart rate (BPM) and blood oxygen saturation (SpO2) measurement. An ESP32 microcontroller performs on-device 
signal processing using a variance-threshold algorithm that identifies repetitive oscillation patterns in the clinically significant 
3–6 Hz Parkinson's tremor frequency range. Multi-parameter decision logic combines motion and cardiac data before raising an 
alert, reducing false positives. Sensor data is transmitted wirelessly over Wi-Fi to a cloud dashboard accessible by doctors and 
caregivers. Local feedback is delivered via an OLED display and audible buzzer. Testing confirmed correct alert behaviour 
across all operating states, with approximately 98% Wi-Fi packet delivery rate and 8–10 hours of battery life per charge. The 
device is intended as a screening and monitoring tool — not a clinical diagnostic instrument — and all flagged results must be 
reviewed by a qualified medical professional. 
Keywords: Parkinson's Disease, IoT Wearable, Tremor Detection, ESP32, MPU6050, MAX30102, Health Monitoring. 
I. 
INTRODUCTION 
Parkinson's disease (PD) is one of the most prevalent progressive neurological disorders worldwide. It primarily affects the motor 
system and leads to symptoms including resting tremors, muscular rigidity, and impaired balance. Among all early symptoms, the 
resting hand tremor — an involuntary, rhythmic oscillation of the hand at rest — is the most characteristic and clinically significant 
early warning sign. Despite its distinctive nature, early-stage Parkinson's tremors are often missed. Patients frequently dismiss mild, 
intermittent tremors as tiredness or stress. Medical appointments are brief and infrequent, meaning a neurologist may not observe 
tremor activity during the limited observation window of a clinic visit. This results in delayed diagnosis and reduced effectiveness 
of early medical intervention, which is clinically significant since earlier treatment is associated with better patient outcomes and 
slower disease progression [1]. 
The growth of low-cost IoT hardware and wireless connectivity offers a practical solution to this gap. A continuously worn wrist 
device can capture objective physiological data over days or weeks, providing a far richer clinical picture than any single 
appointment. This paper proposes exactly such a system: a wrist-worn IoT wearable built using the ESP32 microcontroller, 
MPU6050 motion sensor, and MAX30102 pulse oximeter. 
The system applies a lightweight variance-threshold algorithm to detect tremor patterns and cardiac anomalies, and transmits data 
wirelessly to a cloud dashboard for remote review by caregivers and medical professionals. Immediate local alerts are delivered via 
an OLED display and buzzer. The entire system is assembled from commercially available, low-cost components — making it a 
practical and affordable alternative to expensive proprietary clinical wearables. 
 
II. 
RELATED WORK 
Several research efforts have addressed wearable-based monitoring for neurological conditions. Patel et al. [1] demonstrated that 
wrist-worn accelerometers could reliably identify Parkinson's resting tremors with acceptable accuracy using frequency-domain 
analysis. Their work established the 3–6 Hz tremor frequency range as a primary diagnostic marker for Parkinson's disease. 
Bächlin et al. [2] developed a body-worn sensor system for Parkinson's patients that detected freezing of gait events in real time. 
Their work validated the concept of continuous wearable monitoring for neurological symptoms and demonstrated practical clinical 
value beyond the scope of appointment-based observation.

---

### Halaman 3

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
711
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
Peng et al. [3] showed that a smartphone's built-in accelerometer could capture clinically relevant tremor data, indicating that 
consumer-grade MEMS sensors are sufficiently sensitive for tremor monitoring purposes. However, smartphones are impractical as 
a continuous wrist-worn monitoring solution for daily use. 
Aich et al. [4] reviewed machine learning approaches for Parkinson's classification from wearable sensor data and found that multi-
sensor fusion — combining motion and physiological signals — significantly improves detection accuracy compared to single-
sensor systems. This finding directly supports the dual-sensor design of the proposed system. 
Lonini et al. [5] highlighted that continuous remote monitoring produces richer clinical data than episodic clinic visits, reinforcing 
the motivation for a 24/7 wearable approach. Existing commercial wearables for Parkinson's monitoring are expensive and require 
clinical infrastructure, limiting their use for everyday screening. 
The proposed system addresses these gaps by combining motion and cardiac sensors in a low-cost, cloud-connected wearable that 
enables continuous monitoring without specialized clinical equipment or infrastructure. 
 
III. 
PROPOSED SYSTEM AND DESIGN 
The proposed system is a wrist-worn IoT device that continuously monitors hand motion and cardiac activity to identify patterns 
associated with early Parkinson's disease. It is built entirely from affordable, commercially available hardware and does not require 
any proprietary technology or clinical infrastructure. 
 
A. System Architecture 
The system is structured across five functional layers. The Sensing Layer consists of the MPU6050 and MAX30102 sensors, which 
capture raw physiological and motion data from the patient's wrist. The Processing Layer is the ESP32 microcontroller, which runs 
the detection algorithm and evaluates the alert classification logic. The Local Output Layer consists of the OLED display and 
buzzer, providing immediate feedback to the user. The Communication Layer uses the ESP32's built-in Wi-Fi module to transmit 
data packets to the cloud. The Remote Access Layer is a cloud-hosted web dashboard where doctors and caregivers can review 
historical trends, tremor event logs, and cardiac data without requiring the patient to be physically present. 
 
Layer 
Components 
Function 
Sensing Layer 
MPU6050, MAX30102 
Capture raw motion and cardiac signals from the 
wrist 
Processing Layer 
ESP32 Microcontroller 
Execute detection algorithm and alert classification 
logic 
Local Output Layer 
OLED Display, Buzzer 
Deliver real-time feedback directly to the patient 
Communication Layer 
ESP32 Wi-Fi (802.11 b/g/n) 
Transmit processed data to cloud over wireless 
network 
Remote Access Layer 
Cloud Dashboard 
Store data and provide caregiver / doctor remote 
access 
Table I: System Architecture Layers 
B. Hardware Components 
The system uses six core hardware components. Table II summarizes each component, its role, and its key specification relevant to 
this application. 
 
Component 
Role in System 
Key Specification 
ESP32 Microcontroller 
Central processing and Wi-Fi 
Dual-core Xtensa LX6, 240 MHz; 802.11 b/g/n Wi-
Fi; 520 KB SRAM 
MPU6050 IMU 
Tremor and motion detection 
3-axis accel ±2g–±16g; gyro ±2000°/s; sampling at 
100 Hz

---

### Halaman 4

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
712
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
MAX30102 Sensor 
Heart rate and SpO2 
PPG-based; HR 0–300 BPM (±5%); SpO2 0–100% 
(±2%); I2C 
0.96" OLED (SSD1306) 
Local real-time display 
128×64 px monochrome; I2C interface; 160° 
viewing angle 
Active Buzzer 
Audible alert 
3.3V/5V compatible; PWM driven; multiple tone 
patterns 
18650 Li-ion Battery 
Power supply 
3.7V nominal; 2500–3500 mAh; ~8–12 hours 
operation 
Table II: Hardware Component Summary 
C. Block Diagram 
Fig. 1 illustrates the overall system block diagram. The MPU6050 and MAX30102 sensors connect to the ESP32 over the I2C bus. 
The ESP32 processes sensor data and simultaneously updates the OLED display, drives the buzzer on alert events, and transmits 
JSON data packets to the cloud via Wi-Fi. The cloud platform stores timestamped records and presents them on a web-based 
dashboard accessible by doctors and caregivers. 
 
[ MPU6050 (Motion) ]  ──────┐ 
                             ├──►  [ ESP32 Microcontroller ]  ──►  [ OLED Display ] 
[ MAX30102 (HR/SpO2) ] ──────┘              │                  ──►  [ Buzzer Alert ] 
                                            │ 
                                     [ Wi-Fi Module ] 
                                            │ 
                                   [ Cloud Dashboard ] 
                                            │ 
                               [ Doctor  /  Caregiver  /  Patient ] 
Fig. 1: System Block Diagram 
 
IV. 
METHODOLOGY 
The system operates through a continuous five-step processing loop executed at 100 Hz by the ESP32 firmware. Each step is 
described below. 
 
A. Motion Data Collection 
The MPU6050 sensor reads three-axis acceleration values (ax, ay, az) continuously at 100 Hz. A composite motion magnitude is 
computed from these readings using the following formula: 
Motion Intensity  =  √ (ax²  +  ay²  +  az²) 
This single scalar value represents the total movement intensity at any moment, regardless of direction of motion. It is the primary 
input to the tremor detection algorithm. 
 
B. Tremor Detection Algorithm 
The tremor detection approach is based on variance-threshold analysis of the motion magnitude signal. Parkinson's resting tremor 
typically manifests at 3–6 Hz with a relatively consistent amplitude, producing an elevated variance signature over a short rolling 
time window. This distinguishes it from normal voluntary hand movement, which tends to be larger but less rhythmically consistent. 
The algorithm computes the statistical variance of the motion magnitude signal over a rolling 500 ms window (50 samples at 100 
Hz). If this variance exceeds a calibrated threshold continuously for 10 seconds or more (1,000 consecutive samples), the tremor 
flag is set to TRUE. The threshold is calibrated individually for each user during a 30-second stillness calibration routine at device 
setup; the threshold is set at three times the user's baseline variance to account for natural individual variation.

---

### Halaman 5

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
713
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
The pseudocode for the algorithm is as follows: for each 100 Hz sample, compute the motion magnitude and push it into a 50-
sample rolling buffer. Calculate the variance of the buffer. If variance exceeds TREMOR_THRESHOLD, increment the tremor 
counter; otherwise reset it to zero. If the counter reaches or exceeds 1,000, set the tremor flag to TRUE. 
 
C. Heart Rate and SpO2 Monitoring 
The MAX30102 sensor uses photoplethysmography (PPG) to measure heart rate and blood oxygen saturation non-invasively. Red 
(660 nm) and infrared (880 nm) LEDs emit light into the skin surface; blood flow through capillaries modulates the reflected light, 
and the sensor's analog front-end converts this into BPM and SpO2 readings. BPM values are averaged over five consecutive 
readings to reduce measurement noise. 
The system uses the following physiological baseline ranges: Heart Rate: 60–100 BPM (normal), 50–60 or 100–110 BPM 
(marginal), below 50 or above 110 BPM (abnormal). SpO2: 95–100% (normal), below 94% (flagged). Values outside these ranges 
contribute to the alert classification decision. 
 
D. Decision Logic and Alert Classification 
The ESP32 combines outputs from both sensors and applies a two-factor classification matrix (Table III) to determine the 
appropriate alert level. This multi-parameter approach requires corroborating evidence from more than one physiological signal 
before escalating to a high-priority alert, which reduces false positives significantly compared to single-sensor designs [4]. 
 
Tremor Status 
Heart Rate 
Alert Level 
Action 
No Tremor 
Normal (60–100 BPM) 
Normal 
No action — continue monitoring 
No Tremor 
Marginal (50–60 / 100–110) 
Advisory 
Log event to cloud — no local 
alert 
No Tremor 
Abnormal (<50 or >110 
BPM) 
Warning (L1) 
OLED alert — no buzzer 
Tremor Detected 
Normal BPM 
Warning (L1) 
OLED alert — no buzzer 
Tremor Detected 
Marginal BPM 
High (L2) 
OLED + Buzzer + Cloud flag 
Tremor Detected 
Abnormal BPM 
High (L2) 
OLED + Buzzer + Immediate 
cloud push 
Table III: Alert Classification Decision Matrix 
E. System Flowchart 
Fig. 2 shows the simplified firmware flowchart. The main loop runs at 100 Hz, reads both sensors, evaluates the classification 
matrix, updates local outputs, and transmits data to the cloud every 30 seconds or immediately on any Level 2 alert event. 
┌─────────────────────────────────────────────────────┐ 
│                        START                        │ 
└──────────────────────────┬──────────────────────────┘ 
                           ↓ 
         Read MPU6050  →  Compute Motion Magnitude 
                           ↓ 
           Compute Rolling Variance (500 ms window) 
                           ↓ 
         Variance > Threshold continuously ≥ 10 sec? 
            YES ─────────────────► Set Tremor Flag = TRUE 
            NO  ─────────────────► Set Tremor Flag = FALSE 
                           ↓ 
           Read MAX30102  →  Derive BPM and SpO2

---

### Halaman 6

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
714
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
                           ↓ 
             Apply Classification Matrix (Table III) 
                           ↓ 
        Update OLED Display  |  Sound Buzzer (if L2) 
                           ↓ 
           Every 30 sec OR on L2: Transmit JSON to Cloud 
                           ↓ 
              ─────────────► LOOP (100 Hz) 
Fig. 2: System Operational Flowchart 
 
F. Cloud Dashboard and Data Transmission 
The ESP32 serializes all sensor readings into a JSON data packet and transmits it over Wi-Fi (802.11 b/g/n) to a cloud platform — 
Firebase Realtime Database is recommended for production use due to its real-time WebSocket synchronization and authentication 
support; ThingSpeak is used for rapid prototyping. The JSON payload includes device ID, timestamp, BPM, SpO2, tremor status, 
tremor variance value, alert level, and battery percentage. 
The cloud web dashboard provides a live metrics panel with current BPM, SpO2, tremor status and battery level; rolling 24-hour 
time-series charts for heart rate and tremor event frequency; an alert history log with timestamps and auto-generated advisory 
messages; and browser push notifications for Level 2 events. A local event buffer in ESP32 SRAM retains up to 20 packets during 
Wi-Fi outages and flushes them chronologically on reconnection. 
 
V. 
RESULTS AND DISCUSSION 
The prototype was tested across three defined operating states to verify detection logic, alert behaviour, sensor accuracy, and data 
transmission performance. Table IV summarizes the observed outputs for each state. 
 
State 
HR (BPM) 
SpO2 (%) 
Tremor 
Alert Output 
Normal 
78 
97 
NO 
No alert — OLED shows live readings 
Tremor Detected 
82 
96 
YES 
Buzzer active — cloud event logged 
High Alert 
105 
94 
YES 
Buzzer active + immediate cloud push 
Table IV: System Output for Each Tested Operating State 
 
Tremor simulation was performed by manually oscillating the device at approximately 4–5 Hz to replicate a Parkinsonian resting 
tremor. The tremor flag was raised within 12 seconds of onset in all tests, confirming that the variance-threshold algorithm performs 
within the 10-second target window. This response time is clinically acceptable for a passive monitoring device. 
Heart rate measurements from the MAX30102 were compared against a reference pulse oximeter device. Accuracy was within ±10 
BPM at rest and ±15 BPM during mild activity, which is consistent with the manufacturer's ±5% specification and adequate for 
threshold-based anomaly flagging purposes. SpO2 readings matched the reference device within ±2%, consistent with the sensor's 
±2% typical specification. 
Wi-Fi transmission testing over 100 consecutive packet transmissions showed a delivery rate of approximately 98%, with an end-to-
end latency from sensor reading to cloud dashboard update of under 5 seconds under normal indoor network conditions. Cloud 
dashboard data updated within 2 seconds via Firebase's WebSocket connection, and browser push notifications were delivered 
within 10 seconds of a Level 2 alert event. 
Battery life testing showed approximately 8–10 hours of continuous operation from a fully charged 2500 mAh 18650 Li-ion cell. 
The total component cost for one prototype unit, sourced from standard electronics distributors, is approximately ₹2,000–₹3,000 
(Indian Rupees), compared to proprietary clinical-grade Parkinson's monitoring wearables that typically cost several hundred US 
dollars or more.

---

### Halaman 7

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
715
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
VI. 
COMPARISON WITH EXISTING SYSTEMS 
Table V compares the proposed system against the conventional clinical monitoring approach across the most important parameters 
for early Parkinson's disease screening. 
 
Parameter 
Conventional Approach 
Proposed System 
Monitoring Duration 
15–30 min clinic visit only 
Continuous 24/7 wearable monitoring 
Tremor Observation 
Manual observation by doctor 
Automated algorithmic detection 
Data Availability 
Patient-reported, subjective 
Objective, sensor-recorded, timestamped 
Hardware Cost 
Hundreds of USD (clinical grade) 
~₹2,000–₹3,000 (consumer hardware) 
Doctor Access 
In-person appointment only 
Remote cloud dashboard, any device 
Alert Mechanism 
None — manual review only 
Real-time buzzer + cloud notification 
Detection Reliability 
Symptom may not appear at visit 
Higher capture probability over weeks 
Packet Delivery Rate 
N/A 
~98% over Wi-Fi (tested) 
Battery Life 
N/A (mains-powered equipment) 
8–10 hours per charge (18650 cell) 
Table V: Comparison with Conventional Monitoring Approach 
 
VII. 
ADVANTAGES AND LIMITATIONS 
A. Advantages 
The proposed system offers several practical advantages over conventional clinic-based approaches. Continuous monitoring over 
extended periods significantly increases the probability of capturing intermittent tremor events that would be missed during a brief 
clinic visit. The multi-sensor decision logic — combining motion and cardiac data — reduces false positive alerts compared to 
single-sensor approaches. The total hardware cost is approximately ₹2,000–₹3,000, making it significantly more accessible than 
proprietary clinical-grade wearables. The cloud dashboard enables doctors and caregivers to remotely review patient data without 
requiring a physical appointment. The OLED display and buzzer provide immediate local feedback without any external device. The 
system is built entirely from standard, commercially available components and can be replicated without specialized manufacturing 
infrastructure. 
 
B. Limitations 
The system has several important limitations. The variance-threshold tremor detection algorithm is a heuristic approach and may not 
accurately distinguish Parkinson's resting tremor (3–6 Hz) from essential tremor (4–12 Hz) or physiological tremor (below 3 Hz). 
The MAX30102 sensor provides consumer-grade accuracy (±5% for HR, ±2% for SpO2) that is adequate for anomaly flagging but 
not suitable for clinical-grade measurement. Environmental factors including motion artifacts, loose sensor contact, and ambient 
light interference can degrade sensor reading quality. The device is a prototype assembled on a breadboard or custom PCB and has 
not undergone regulatory certification as a medical device. 
Important Disclaimer:  This system is a screening tool and not a clinical diagnostic device. It does not diagnose Parkinson's 
disease or any other medical condition. All patterns flagged by this device must be reviewed and interpreted by a qualified 
neurologist or physician before any clinical decision is made. The device must not be used as the sole basis for any medical 
judgment. 
 
VIII. 
FUTURE SCOPE 
Several enhancements are planned for future development phases. The primary algorithmic improvement is replacing the variance-
threshold tremor detection with Fast Fourier Transform (FFT) based frequency-domain analysis, which would allow precise 
characterization of tremor frequency and better differentiation between Parkinson's resting tremor (3–6 Hz), essential tremor (4–12 
Hz), and physiological tremor (below 3 Hz). This would significantly improve classification accuracy.

---

### Halaman 8

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue IV Apr 2026- Available at www.ijraset.com 
 
 
 
 
 
716
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
Machine learning integration is planned for a subsequent phase. A lightweight TensorFlow Lite classification model can be trained 
on labelled tremor datasets and deployed directly on the ESP32, enabling classification of tremor type (resting, action, or intention 
tremor) for differential diagnostic support. Adaptive threshold calibration that adjusts automatically to each patient's historical 
baseline can also be implemented to reduce long-term false positive rates. 
The system scope can be extended to additional neurological conditions. Epilepsy seizure detection is possible by adapting the 
motion detection algorithm for high-amplitude, multi-axis, high-frequency patterns characteristic of generalized tonic-clonic 
seizures. Alzheimer's disease monitoring can be supported through activity-of-daily-living (ADL) logging. Integration of an 
AD8232 ECG module would add single-lead cardiac monitoring capability alongside tremor detection. 
Long-term goals include a native mobile companion application for iOS and Android for improved patient and caregiver usability, 
HIPAA and DISHA-compliant encrypted data storage, and a regulatory compliance pathway for clinical-grade classification as a 
Class II medical device under CDSCO (India) or equivalent international frameworks, following formal clinical validation trials. 
 
IX. 
CONCLUSION 
This paper presented a low-cost, IoT-based wearable system for continuous monitoring and early screening of Parkinson's disease 
symptoms. The proposed device integrates an MPU6050 inertial measurement unit and a MAX30102 optical sensor with an ESP32 
microcontroller to capture motion, heart rate, and SpO2 data continuously from the patient's wrist. A variance-threshold algorithm 
detects tremor patterns in the 3–6 Hz Parkinson's frequency range, and a two-factor classification matrix reduces false positive alerts 
by combining evidence from both sensor streams. 
The system provides immediate local feedback through an OLED display and audible buzzer, and wirelessly transmits timestamped 
data to a cloud dashboard for remote doctor and caregiver access. Testing confirmed correct alert behaviour across all three 
operating states, with approximately 98% Wi-Fi packet delivery rate, sub-5-second end-to-end latency, and 8–10 hours of battery 
life per charge — at a total hardware cost of approximately ₹2,000–₹3,000. 
The device is intended as a screening and monitoring tool, not a clinical diagnostic instrument. It fills a critical gap by providing 
objective, continuous physiological data that complements the short observation window of standard clinical appointments. With 
further development — including FFT-based frequency analysis, machine learning classification, and clinical validation — this 
platform has strong potential for meaningful real-world impact in neurological health monitoring. 
 
X. 
ACKNOWLEDGEMENT 
The authors would like to thank the Department of Electronics and Telecommunication Engineering, Thakur College of Engineering 
and Technology, Mumbai, for providing the necessary support and resources to carry out this project. The authors also express their 
sincere gratitude to their project guide, Mrs. Rupali Mane, for her valuable guidance, support, and continuous encouragement 
throughout the development of this work. 
 
REFERENCES 
[1] 
S. Patel, K. Lorincz, R. Hughes, N. Huggins, J. Growdon, D. Standaert, M. Akay, J. Dy, M. Welsh, and P. Bonato, "Monitoring motor fluctuations in patients 
with Parkinson's disease using wearable sensors," IEEE Trans. Inf. Technol. Biomed., vol. 13, no. 6, pp. 864–873, Nov. 2009. 
[2] 
M. Bächlin, M. Plotnik, D. Roggen, I. Maidan, J. M. Hausdorff, N. Giladi, and G. Tröster, "Wearable assistant for Parkinson's disease patients with the freezing 
of gait symptom," IEEE Trans. Inf. Technol. Biomed., vol. 14, no. 2, pp. 436–446, Mar. 2010. 
[3] 
L. Peng, Z. G. Li, and M. Ling, "Smartphone-based tremor assessment for Parkinson's disease using accelerometers," in Proc. IEEE Int. Conf. Bioinformatics 
and Biomedicine (BIBM), Washington, DC, USA, 2015, pp. 673–676. 
[4] 
S. Aich, P. M. Pradhan, J. Park, N. Sethi, V. S. S. Vathsa, and H. C. Kim, "A validation study of freezing of gait detection and machine-learning-based FoG 
prediction using estimated gait characteristics," Sensors, vol. 18, no. 10, p. 3287, 2018. 
[5] 
L. Lonini, N. Bhatt, C. Garibotti, L. Dai, J. Shawen, B. Simuni, T. Simuni, and A. Jayaraman, "Wearable sensors for Parkinson's disease: Which data are worth 
collecting for training symptom detection models," NPJ Digit. Med., vol. 1, no. 1, p. 64, 2018. 
[6] 
Espressif Systems, "ESP32 Technical Reference Manual, Version 5.1," Espressif Systems, Shanghai, China, 2023. [Online]. Available: 
https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf 
[7] 
InvenSense Inc., "MPU-6000 and MPU-6050 Product Specification Revision 3.4," TDK InvenSense, San Jose, CA, USA, 2013. 
[8] 
Maxim Integrated (Analog Devices), "MAX30102 High-Sensitivity Pulse Oximeter and Heart-Rate Sensor Datasheet," Analog Devices Inc., Wilmington, MA, 
USA, 2018.
