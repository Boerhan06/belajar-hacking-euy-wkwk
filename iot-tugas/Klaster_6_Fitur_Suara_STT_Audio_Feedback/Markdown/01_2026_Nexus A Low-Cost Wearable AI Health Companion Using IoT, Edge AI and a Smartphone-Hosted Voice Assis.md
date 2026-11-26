# Nexus: A Low-Cost Wearable AI Health Companion Using IoT, Edge AI and a Smartphone-Hosted Voice Assistant

> **Klaster Literatur:** Klaster 6: (Opsional) Fitur Ekspansi Suara / STT & Audio Feedback  
> **Penulis:** Suyog Danole, Ayan Mulla, Sarvesh Teli, Arif Shirgave, Sairaj Salunkhe  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Journal for Research in Applied Science and Engineering Technology  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.22214/ijraset.2026.85437](https://doi.org/10.22214/ijraset.2026.85437)  

---

## 📌 Abstrak / Intisari Ilmiah
Elderly people and patients with long-term conditions benefit from continuous, low-effort monitoring, yet most commercial health wearables are costly, screen-dependent and passive. This paper presents Nexus (Neural-Enabled eXtended User Support), a low-cost wearable AI health companion built on a three-layer IoT architecture. A wrist-worn ESP32-S3 device senses heart rate, blood oxygen saturation, motion and skin temperature and runs lightweight edge AI. A smartphone acts as the AI gateway and hosts speech recognition, a conversational assistant and speech synthesis. A caregiver interface provides status, alerts, history and location. The device has no display; it uses two-way voice, haptic feedback and a single SOS/TALK button. A proactive, health-focused assistant with short-term memory explains alerts in simple language, and a graded alert scheme with an emergency verification step reduces false alarms before caregivers are notified. The paper describes the requirements, hardware, software and AI design, privacy considerations, development methodology and a planned evaluation. Nexus is a health-monitoring and assistance prototype and is not a medical diagnostic device.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

14
X
October 2026
https://doi.org/10.22214/ijraset.2026.85437

---

### Halaman 2

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1786 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
Nexus: A Low-Cost Wearable AI Health 
Companion Using IoT, Edge AI and a Smartphone-
Hosted Voice Assistant 
 
Suyog Danole1, Ayan Mulla2, Sarvesh Teli3, Arif Shirgave4, Sairaj Salunkhe5 
Department of Computer Science and Information Technology, sharad institute of technology, polytechnic, yadrav, Ichalkaranji, 
Maharashtra, India 
 
Abstract: Elderly people and patients with long-term conditions benefit from continuous, low-effort monitoring, yet most 
commercial health wearables are costly, screen-dependent and passive. This paper presents Nexus (Neural-Enabled eXtended 
User Support), a low-cost wearable AI health companion built on a three-layer IoT architecture. A wrist-worn ESP32-S3 device 
senses heart rate, blood oxygen saturation, motion and skin temperature and runs lightweight edge AI. A smartphone acts as the 
AI gateway and hosts speech recognition, a conversational assistant and speech synthesis. A caregiver interface provides status, 
alerts, history and location. The device has no display; it uses two-way voice, haptic feedback and a single SOS/TALK button. A 
proactive, health-focused assistant with short-term memory explains alerts in simple language, and a graded alert scheme with 
an emergency verification step reduces false alarms before caregivers are notified. The paper describes the requirements, 
hardware, software and AI design, privacy considerations, development methodology and a planned evaluation. Nexus is a 
health-monitoring and assistance prototype and is not a medical diagnostic device. 
Keywords: wearable computing, Internet of Things, edge AI, TinyML, healthcare monitoring, voice assistant, emergency 
detection, ESP32-S3. 
 
I. 
INTRODUCTION 
Healthcare is moving from occasional hospital visits towards continuous, home-based monitoring. The Internet of Things (IoT) 
makes this possible by connecting low-power sensors, mobile devices and cloud services into one system [1]. Wearable sensors in 
particular can track physical activity and basic physiological signals throughout the day without any effort from the user [2]. For 
elderly people living alone, and for people with long-term conditions, such monitoring can help family members and caregivers 
notice problems earlier and respond faster. 
Existing consumer wearables still leave several gaps. Many are expensive for the average family. Most rely on a small screen, which 
is difficult for older users or users with poor eyesight. They are largely passive: they record numbers but rarely speak to the user, 
explain what a reading means or ask whether the user is all right. Simple threshold alarms also tend to produce false alerts, which 
causes users to ignore or switch off the device. 
This paper presents Nexus, which stands for Neural-Enabled eXtended User Support. Nexus is a low-cost wearable AI companion 
that senses physiological and activity data, processes it locally with edge AI, talks to the user by voice and uses a smartphone as the 
AI gateway and caregiver interface.  
The main contributions are: (i) a three-layer architecture that keeps the wearable lightweight by moving heavy language processing 
to the phone; (ii) a display-free interaction model based on voice, vibration and one multi-function button; (iii) a proactive, health-
focused conversational assistant that can explain why an alert was raised; (iv) a graded alert scheme with an emergency verification 
flow that asks the user to confirm before caregivers are notified; and (v) a modular design that can be extended in later versions 
without redesigning the whole system. 
The rest of the paper is organised as follows. Section II states the problem and motivation. Section III reviews related work. Section 
IV lists the objectives, scope and requirements. Sections V to VIII describe the architecture, hardware, software and AI design, and 
the mobile application. Section IX discusses privacy, security and ethics. Sections X and XI present the development methodology 
and the planned evaluation. Sections XII to XV cover applications, advantages and limitations, future scope and the conclusion.

---

### Halaman 3

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1787 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
II. 
PROBLEM STATEMENT AND MOTIVATION 
A. Problem Statement 
People who are elderly, recovering from illness or living with a long-term condition may need help at any time, but caregivers 
cannot be present all day. A person may faint, fall, become unwell during sleep or simply feel unwell and not know whether a 
reading is serious. Devices that could help are often too costly, too complex to operate, or silent when the user most needs guidance. 
The problem addressed in this work is how to build an affordable wearable that monitors basic health signals continuously, interacts 
naturally by voice, decides on the device which events deserve attention, and informs caregivers reliably without flooding them with 
false alarms. 
 
B. Motivation 
Three observations motivated the design of Nexus. First, many older users find touch screens and small text hard to use, so a voice-
first device lowers the barrier to adoption. Second, a wearable that sends all raw data to a server wastes battery and bandwidth and 
exposes private information, so local filtering is preferable. Third, a monitoring device is only useful if it is worn, so it must be 
comfortable, simple and trusted; false alarms damage that trust. These observations lead directly to the design choices of a display-
free wearable, edge-level anomaly filtering and a confirmation step before an emergency alert. 
 
III. 
LITERATURE REVIEW 
A. Wearable Health Monitoring 
Photoplethysmography (PPG) estimates pulse and blood oxygen saturation by measuring changes in light absorption in the skin, and 
is the basis of most wrist and finger wearables [3]. PPG is convenient, but its signal is sensitive to motion, skin tone, sensor pressure 
and ambient light, so readings need filtering and should be interpreted together with activity context. Inertial sensors are widely used 
for human activity recognition, and surveys of wearable sensing show that accelerometer and gyroscope data can separate common 
activities and detect abrupt events such as falls [2]. Heart rate variability (HRV) is a well-established indicator of autonomic nervous 
system activity, and measurement standards were set out by a joint task force in 1996 [4]. Stress estimation from HRV is therefore a 
reasonable feature for a wellness companion, although values obtained from wrist PPG are only an approximation of clinical ECG-
based measurements. 
 
B. IoT Architectures for Healthcare 
IoT healthcare systems are commonly described in layers: a sensing layer on the body, a gateway layer that aggregates data and 
connects to the internet, and an application layer that serves clinicians or caregivers [1]. A smartphone is a natural gateway because 
most users already own one, and it provides a screen, a fast processor, GPS and mobile connectivity. Nexus adopts this pattern, so 
the wearable does not need its own cellular modem or GPS receiver in the first version. 
 
C. Edge AI and TinyML 
TinyML brings machine learning to microcontrollers with very little memory and power [5]. Frameworks such as TensorFlow Lite 
Micro [6] and development platforms such as Edge Impulse [7] let developers collect sensor data, train compact models and deploy 
them on devices like the ESP32 family. Running simple classification and anomaly detection on the device reduces the amount of 
data that must be sent over the radio, lowers latency and keeps raw sensor data closer to the user. 
 
D. Conversational AI for Health Support 
Large language models can hold natural conversations and answer a wide range of questions [8], which makes them attractive for 
companion devices. They are too large to run on a microcontroller, so a phone or server must host them. They can also produce 
incorrect statements, so safety-critical decisions should not depend on them alone. Nexus follows this principle: alerts come from 
deterministic and edge-AI detection logic, while the language model is used to explain, remind and converse. 
 
E. Comparison with Typical Existing Solutions 
Table I compares Nexus with two broad categories of existing products in qualitative terms. The comparison describes typical 
characteristics of each category, not specific brands.

---

### Halaman 4

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1788 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
TABLE I 
QUALITATIVE COMPARISON WITH TYPICAL SOLUTIONS 
Feature 
Smartwatch 
Emergency pendant 
Nexus 
Main interface 
Touch screen 
Single button 
Voice + button 
Continuous vitals 
Yes 
Usually no 
Yes 
Talks to user 
Limited 
Rarely 
Yes, proactive 
Explains alerts 
Rarely 
No 
Yes 
On-device filtering 
Varies 
No 
Yes 
Caregiver app 
Varies 
Service-based 
Yes, multi-user 
Cost class 
Medium–high 
Low–medium 
Low 
 
F. Research Gap 
Existing work tends to address one part of the problem: sensing, or activity recognition, or a voice assistant, or an alert app. Few 
low-cost designs combine a display-free wearable, on-device anomaly filtering, a proactive voice companion and a caregiver app in 
one coherent architecture. Nexus aims to fill this gap with components that are inexpensive and easy to obtain. 
 
IV. 
OBJECTIVES, SCOPE AND REQUIREMENTS 
A. Objectives 
The objectives of Nexus are to monitor heart rate, SpO₂, motion and skin temperature trends continuously; to detect unusual patterns 
and possible emergencies on the device; to let the user talk to the system in both directions by voice; to notify caregivers with the 
user’s location when help is needed; and to keep the total hardware cost low enough for real use. The long-term goal is a design that 
stays useful for ten to twelve years, with planned upgrades handled as separate versions. 
 
B. Scope 
The first version (V1) deliberately limits itself to six core features: heart rate and SpO₂ sensing, activity recognition, edge anomaly 
detection, voice interaction, emergency verification and an Android caregiver app. Nexus is positioned as a health-monitoring and 
assistance prototype. It does not diagnose disease, and its skin temperature readings are treated as a contact temperature trend, not as 
core body temperature. ECG, onboard GPS and cellular connectivity are left for later versions. 
 
C. Requirements 
The requirements were derived from the objectives and are summarised in Table II. The non-functional requirements are as 
important as the functional ones, because a device that is uncomfortable, noisy or unreliable will not be worn. 
 
TABLE II 
FUNCTIONAL AND NON-FUNCTIONAL REQUIREMENTS 
Type 
Requirement 
Functional 
Measure heart rate, SpO₂, motion and skin temperature trend 
Functional 
Classify activity and flag anomalies on the device 
Functional 
Two-way voice communication with wake word and button 
Functional 
SOS by long press; cancel by double press 
Functional 
Notify caregivers with location after failed verification 
Non-functional 
Low cost and easily available components 
Non-functional 
Light, comfortable wrist-worn form without a display 
Non-functional 
Useful battery life through duty-cycling 
Non-functional 
Local logging so data survive short outages 
Non-functional 
Privacy-aware: raw data filtered locally where possible

---

### Halaman 5

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1789 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
V. 
SYSTEM ARCHITECTURE 
Nexus uses the three-layer architecture shown in Fig. 1. The wearable collects data and performs light processing. The smartphone 
provides the heavier AI services and acts as the gateway to the internet. The caregiver interface presents the information to the 
people who need it. 
 
Fig. 1 Three-layer architecture of Nexus: wearable device, smartphone gateway and caregiver interface 
 
A. Wearable Layer 
The wearable contains the sensors, a microphone, a speaker, a vibration motor and a single physical button. It filters sensor data, 
runs small neural models for activity recognition and anomaly detection, and sends compact summaries to the phone over Bluetooth 
Low Energy (BLE) [14]. It has no display in V1; voice, vibration and the phone dashboard replace it. 
 
B. Smartphone Layer 
The phone hosts speech-to-text (STT), the conversational AI, text-to-speech (TTS), the local database, health graphs, GPS and 
caregiver notifications. Splitting the work in this way keeps the wearable small, cheap and power-efficient, and lets the assistant 
improve through software updates on the phone without changing the hardware. 
 
C. Caregiver Interface 
Caregivers see the current status, receive alerts, browse history and view the user’s location during an emergency. Several 
caregivers can be linked to one user, so that an alert does not depend on a single person being available. 
 
D. Communication Design 
The wearable and the phone communicate over BLE because of its low power consumption and universal support on phones. A 
custom BLE service is planned with separate characteristics for periodic sensor summaries, alert events, control commands from the 
phone (for example, to change the sampling rate or trigger a vibration) and the audio stream. Sensor summaries are sent as small 
binary packets at a low rate instead of continuous raw data, which keeps radio use low. 
Voice audio needs more bandwidth than sensor summaries. The design therefore uses compressed audio and short utterances, and 
treats BLE throughput as a risk to be measured during testing. If BLE alone proves insufficient, the ESP32-S3’s Wi-Fi radio can be 
used to transfer audio while BLE continues to carry control and sensor data.

---

### Halaman 6

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1790 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
VI. 
HARDWARE DESIGN 
The hardware is chosen for low cost, wide availability and good community support. Table III lists the main components and their 
roles. 
TABLE III 
MAIN HARDWARE COMPONENTS OF NEXUS 
Module 
Component 
Function 
Controller 
XIAO ESP32-S3 Sense 
Processing, BLE, edge AI, 
integrated microphone 
HR / SpO₂ 
MAX30102 
PPG-based pulse and oxygen 
saturation, worn on underside of 
wrist unit 
Motion 
BMI270 
Activity recognition, fall-like 
motion 
Temperature 
MAX30205 
Skin / contact temperature trend 
Audio out 
MAX98357A + 4 Ω 
speaker 
Class-D amplifier and voice 
playback 
Haptics 
3 V coin motor with NPN 
driver 
Vibration alerts; flyback diode 
protects the circuit 
Input 
Tactile SOS/TALK button 
Wake, SOS and cancel 
Power 
3.7 V LiPo with protection, 
slide switch 
Battery operation and power 
control 
Debug 
Optional 0.96″ OLED 
Development use only 
Mechanical 
3D-printed case, 
silicone/Velcro strap 
Wrist-worn enclosure 
 
A. Controller and Sensors 
The ESP32-S3 provides dual-core processing, Bluetooth 5 (LE) and vector instructions that help neural network inference [12]. The 
XIAO ESP32-S3 Sense board was selected because it includes a digital microphone on the same small board, which avoids extra 
wiring [15]. The MAX30102 integrates the LEDs, photodetector and signal conditioning needed for pulse oximetry [9], the BMI270 
is a low-power inertial measurement unit designed for wearables [10], and the MAX30205 is a contact temperature sensor [11]. The 
three sensors share an I²C bus with pull-up resistors, as shown in Fig. 2. 
 
Fig. 2 Hardware interconnection of the Nexus wearable

---

### Halaman 7

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1791 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
B. Audio and Haptics 
The speaker is driven through an I²S class-D amplifier [13], which gives clear voice output from a small 4 Ω speaker without a large 
analogue circuit. The vibration motor draws more current than a microcontroller pin should supply, so it is switched by an NPN 
transistor with a base resistor, and a flyback diode across the motor protects the transistor from voltage spikes when the motor 
switches off. 
 
C. Input and Interaction 
A single button carries three functions: a short press wakes the assistant, a long press starts an SOS, and a double press cancels an 
emergency. Using one button keeps the device simple for older users, who do not have to remember several controls. Vibration 
patterns of different lengths tell the user what the device is doing even when the environment is too noisy for speech. 
 
D. Power Management 
The device is powered by a 3.7 V lithium-polymer cell with a protection circuit and a slide power switch, and it can be charged and 
programmed through USB-C. Battery life is a key constraint for any wearable. Nexus addresses it through sensor duty-cycling, 
keeping the radio in low-power connection modes, sending summaries instead of raw data and waking the audio path only when 
needed. The actual runtime will be measured on the prototype. 
 
E. Enclosure and Placement 
The electronics are housed in a 3D-printed wrist enclosure held by a 20 mm silicone or Velcro strap. The MAX30102 is placed on 
the underside of the enclosure so that it touches the skin of the wrist, and the contact temperature sensor is located near it. The 
speaker and microphone openings are placed on the upper and side faces so that clothing does not block them. Using a printed case 
also allows the shape to be adjusted quickly during prototyping. No onboard GPS is included in V1; location is taken from the 
smartphone only when an emergency occurs, which saves cost and battery. 
 
VII. 
SOFTWARE AND AI DESIGN 
A. Wearable Firmware 
The firmware is first developed in the Arduino IDE for fast prototyping and can later move to ESP-IDF for finer control of power 
and real-time tasks. It samples the sensors, applies filtering, runs the edge models and exchanges data with the phone over BLE. 
Sensor duty-cycling is used to extend battery life: sensors are sampled at a lower rate when the user is at rest and more often when 
activity or an anomaly is detected. 
 
B. Data Processing Pipeline 
Sensor data pass through the pipeline shown in Fig. 3. Raw PPG, inertial and temperature samples are first filtered to remove noise 
and obviously invalid values, for example when the sensor loses contact with the skin. The filtered stream is cut into short windows, 
and features such as signal energy, peak intervals and variability are extracted. The features feed the edge models, and the results are 
combined by alert-level logic that decides what, if anything, should be reported to the phone. 
 
Fig. 3 On-device data processing pipeline from raw samples to compact BLE packet

---

### Halaman 8

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1792 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
C. Edge AI Models 
1) Activity Recognition: Windows of accelerometer and gyroscope data are converted into features and classified by a compact 
neural network, for example into resting, walking and abrupt-impact classes. The activity label gives context to the heart rate 
reading: a high pulse during walking is normal, while the same pulse at rest may not be. 
2) Anomaly Detection: Heart rate and SpO₂ are compared against the user’s own baseline and the current activity. Only unusual 
patterns are flagged, which reduces false alarms and the amount of data transmitted. Models can be built with TensorFlow Lite 
Micro or Edge Impulse [6], [7]. 
3) HRV-Based Stress Detection: Beat-to-beat intervals from the PPG signal are used to compute simple HRV features [4], which 
give an approximate stress indicator for wellness feedback. This is not presented as a clinical measurement. 
4) On-Device Wake Word: A small keyword-spotting model on the wearable listens for the wake word, so that audio is sent to the 
phone only after the user calls the assistant. This saves power and improves privacy. 
 
D. Model Development Workflow 
Models are developed in four steps. Data are collected from the prototype while volunteers perform labelled activities such as 
resting, walking and simulated abrupt movements. The data are cleaned and split into training and test sets. A small network is 
trained and then quantised to reduce its size and make it fit the microcontroller’s memory. Finally, the model is deployed to the 
device and tested on data that were not used for training. Because a model trained on a few people may not generalise, the baseline 
for anomaly detection is made personal and adapts to each user over the first days of use. 
 
E. Graded Alert Scheme 
To avoid treating every unusual reading as an emergency, Nexus uses four alert levels (Table IV). Lower levels lead to quiet, 
friendly feedback, and only the highest level contacts caregivers. 
TABLE IV 
GRADED ALERT LEVELS 
Level 
Condition 
Response 
0 
Normal readings 
Log data only 
1 
Mild unusual trend 
Assistant mentions it gently and 
suggests rest or water 
2 
Persistent anomaly or 
fall-like motion 
Vibrate and ask the user by voice if 
they are all right 
3 
No reply, or SOS 
pressed 
Notify caregivers and share GPS 
location 
 
F. Voice Interaction 
Voice is the main interface of Nexus, and the pipeline is shown in Fig. 4. After the wake word or a button press, the wearable 
captures audio and streams it to the phone over BLE. The phone converts speech to text, passes the text and recent context to the 
language model, converts the reply to speech and sends the audio back to the wearable speaker. 
 
Fig. 4 Two-way voice interaction pipeline between the wearable and the smartphone

---

### Halaman 9

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1793 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
G. Conversational Assistant 
The assistant is designed as a proactive companion instead of a simple question-and-answer tool. It speaks up about noteworthy 
readings without being asked, keeps short-term memory of the day (for example, that the user slept badly) so that later readings are 
interpreted with that context, and offers anticipatory suggestions, such as a stretching routine after a step goal is reached. It uses a 
warm and positive tone. It can answer general questions, but its main focus stays on health and fitness. An explain the alert feature 
tells the user in plain language why an alert was triggered, not only that it was. 
To keep the system safe, the language model does not decide whether an emergency exists. That decision comes from the edge 
detection logic and the user’s own confirmation. The assistant is also instructed to avoid diagnosis and to suggest contacting a 
doctor for medical concerns. 
 
H. Emergency Verification 
An emergency can start automatically, when the edge model detects a serious anomaly, or manually, with a long press of the SOS 
button. Nexus then asks the user by voice whether they are all right (Fig. 5). If the user answers, or double-presses the button, the 
alert is cancelled and the event is logged. If there is no response within the timeout, the phone notifies the caregivers and shares its 
GPS location. This confirmation step is intended to reduce false alarms while still reaching help quickly when the user cannot 
respond. 
 
Fig. 5 Emergency verification flow from detection to caregiver notification 
 
I. 
Offline Resilience 
Data are logged locally and synchronised when connectivity returns, so that a short network outage does not lose information. If the 
wearable loses its connection to the phone, it keeps logging, and it can still give vibration feedback for a local alert. When the 
connection is restored, the stored events are uploaded in order. 
 
VIII. 
MOBILE APPLICATION AND CAREGIVER INTERFACE 
A. Application Design 
The Android application is developed in Android Studio using Kotlin. It manages the BLE connection, the voice services, the 
dashboard and graphs, and caregiver notifications [16]. Data are stored with SQLite on the device and, where cloud sync is needed, 
with Firebase [17]. The main screens are a home dashboard that shows the current status in simple colours, a history view with 
graphs of heart rate, SpO₂, activity and temperature trend, an alerts view, and a settings screen for caregivers, wake word and 
notification preferences.

---

### Halaman 10

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1794 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
B. Multi-User Caregiver Mode 
More than one caregiver can be linked to a user. When an emergency occurs, every linked caregiver receives the alert and the user’s 
location, and the first person to acknowledge it is shown to the others, so that the response is not duplicated or missed. Caregivers 
can see trends and past events but cannot listen to the user’s conversations with the assistant unless the user chooses to share them. 
 
C. Accessibility 
Because the intended users may be elderly, the interface uses large text, high contrast and simple language. The wearable itself 
needs no screen, and the assistant can repeat or rephrase an answer when asked. 
 
IX. 
PRIVACY, SECURITY AND ETHICAL CONSIDERATIONS 
A health companion handles sensitive personal data, so privacy and security are part of the design and not an afterthought. Raw 
sensor data are processed on the wearable whenever possible, and only summaries and events are sent to the phone. The wake-word 
model prevents continuous audio streaming. Communication between the wearable and the phone is paired and encrypted using the 
standard BLE security features [14], and cloud storage, when used, is protected by user authentication and access rules. 
Users and caregivers should give clear consent about what is shared, and the user should be able to review and delete stored data. 
Any real-world deployment in India would also need to follow applicable data-protection law, such as the Digital Personal Data 
Protection Act, 2023. Ethically, the system must not overstate its abilities: Nexus is a monitoring and assistance aid, it does not 
diagnose, and its advice is general wellness guidance. The assistant keeps a positive tone, but it must still report a worrying reading 
honestly and encourage the user to seek medical help when appropriate. 
 
X. 
DEVELOPMENT METHODOLOGY 
The project follows a 20-week build plan that proceeds from sensing to integration (Table V). Hardware modules are tested one at a 
time on a breadboard before they are combined, and software is developed in increments so that each stage produces a working 
demonstration. 
 
TABLE V 
TWENTY-WEEK DEVELOPMENT PLAN 
Phase 
Weeks 
Activities 
1 
1–8 
Sensor interfacing, signal 
preprocessing, data collection and 
model training 
2 
9–12 
BLE link, Android app, voice input 
and output 
3 
13–16 
AI assistant, emergency logic, 
caregiver notifications 
4 
17–20 
PCB and enclosure, system testing, 
report 
 
The team’s skills are balanced across hardware, programming and AI/ML, so each phase can be shared: hardware members handle 
the circuit, sensors and enclosure, programming members handle firmware and the Android application, and AI members handle 
data collection, model training and the assistant. Risks are managed by building the minimum working path first (sensor to phone to 
alert) and adding the assistant and extra features afterwards. 
 
XI. 
TESTING AND PROPOSED EVALUATION 
A. Planned Metrics 
Because the prototype is still under development, this paper does not report experimental results. The evaluation planned for the 
finished prototype is summarised in Table VI. Each measurement will be compared with a suitable reference device or with ground 
truth labelled during testing, and results will be reported in later work.

---

### Halaman 11

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1795 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
TABLE VI 
PLANNED EVALUATION PARAMETERS 
Parameter 
Method 
HR / SpO₂ accuracy 
Compare with a commercial pulse oximeter at rest and 
during light activity 
Activity recognition 
Accuracy and confusion matrix on labelled test 
sessions 
Anomaly detection 
Precision, recall and false-alarm rate on simulated 
events 
Voice latency 
Time from end of speech to start of spoken reply 
Alert delivery 
Time from SOS or timeout to caregiver notification 
BLE reliability 
Packet loss and reconnection behaviour at typical 
distances 
Battery life 
Runtime with and without sensor duty-cycling 
Usability 
Feedback from users and caregivers using a short 
questionnaire 
 
B. Test Scenarios 
Besides numerical metrics, the complete system will be tested with scenarios that reflect real use (Table VII). Simulated events will 
be used for emergencies; no test will put a person at risk. 
 
TABLE VII 
PLANNED SYSTEM TEST SCENARIOS 
Scenario 
Expected behaviour 
Normal day 
Data logged, assistant gives occasional 
friendly tips 
Poor sleep 
reported 
Later readings are interpreted with that 
context 
Simulated 
abrupt fall 
Vibration and voice check; alert if no reply
False alarm 
User replies or double-presses; alert 
cancelled 
SOS long press Caregivers notified with location 
Phone out of 
range 
Wearable logs locally and syncs on 
reconnection 
Sensor off wrist Invalid data rejected; no false alert 
 
XII. 
APPLICATIONS AND USE CASES 
The first target group is elderly people who live alone or spend much of the day without family nearby. The assistant can remind 
them to move, drink water or rest, and caregivers can check the trends from a phone. A second group is people recovering at home 
after illness or surgery, for whom a family member wants simple reassurance that readings look normal. A third is general wellness 
and fitness users who like a voice companion that encourages them to reach their daily goals. The same architecture can also be 
adapted for workers in demanding environments or for supervised group care, because the caregiver interface supports several users 
and several caregivers.

---

### Halaman 12

International Journal for Research in Applied Science & Engineering Technology (IJRASET) 
                                                                                           ISSN: 2321-9653; IC Value: 45.98; SJ Impact Factor: 7.538 
                                                                                                                Volume 14 Issue X Oct 2026- Available at www.ijraset.com 
 
 
 
 
 
 
1796 
©IJRASET: All Rights are Reserved | SJ Impact Factor 7.538 | ISRA Journal Impact Factor 7.894 |
XIII. 
ADVANTAGES AND LIMITATIONS 
A. Advantages 
Nexus uses inexpensive, easily available parts. Its voice-first, display-free design suits older users. Edge filtering lowers radio traffic 
and reduces false alarms. Putting the language model on the phone keeps the wearable simple and allows the assistant to be 
improved without new hardware. The modular structure makes later upgrades straightforward. 
 
B. Limitations 
Wrist PPG readings are affected by motion and fit, and the skin temperature is only a trend, not core body temperature. The 
conversational assistant needs the phone and, for the language model, usually an internet connection. V1 has no onboard GPS and 
depends on the phone for location. Battery life is limited by the small cell and by audio streaming. Language models can make 
mistakes, which is why they are not used for emergency decisions. Finally, Nexus is not clinically validated and must not be used to 
diagnose or treat any condition. 
 
XIV. 
FUTURE SCOPE 
A second version (V2) could add ECG, onboard GNSS, a better PPG sensor, cellular connectivity, more advanced TinyML models, 
multilingual offline speech recognition, a larger battery and a custom flexible PCB. These upgrades would make the device 
independent of the phone for location and basic voice commands. A third version (V3) could aim at medical-grade validation, 
collaboration with clinicians and certified hardware, which is the necessary step before any clinical use. 
 
XV. 
CONCLUSION 
This paper presented Nexus, a low-cost wearable AI health companion based on a three-layer IoT architecture. By combining a 
display-free wrist device, on-device anomaly filtering, a smartphone-hosted proactive voice assistant and a caregiver app, Nexus 
addresses the cost, accessibility and passivity problems of many existing wearables. The design keeps safety-critical decisions in 
deterministic and edge-AI logic, uses a graded alert scheme and adds a confirmation step before alerting caregivers. The next stage 
of the work is to complete the prototype, carry out the planned evaluation and report measured results. 
 
XVI. 
ACKNOWLEDGMENT 
The authors thank [Guide Name] and the Department of Information Technology, [College Name], for their guidance and support 
during this project. 
 
REFERENCES 
[1] 
J. Gubbi, R. Buyya, S. Marusic, and M. Palaniswami, “Internet of Things (IoT): A vision, architectural elements, and future directions,” Future Gener. Comput. 
Syst., vol. 29, no. 7, pp. 1645–1660, Sep. 2013. 
[2] 
S. C. Mukhopadhyay, “Wearable sensors for human activity monitoring: A review,” IEEE Sensors J., vol. 15, no. 3, pp. 1321–1330, Mar. 2015. 
[3] 
J. Allen, “Photoplethysmography and its application in clinical physiological measurement,” Physiol. Meas., vol. 28, no. 3, pp. R1–R39, Mar. 2007. 
[4] 
Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology, “Heart rate variability: Standards of 
measurement, physiological interpretation, and clinical use,” Circulation, vol. 93, no. 5, pp. 1043–1065, Mar. 1996. 
[5] 
P. Warden and D. Situnayake, TinyML: Machine Learning with TensorFlow Lite on Arduino and Ultra-Low-Power Microcontrollers. Sebastopol, CA, USA: 
O’Reilly Media, 2019. 
[6] 
R. David et al., “TensorFlow Lite Micro: Embedded machine learning for TinyML systems,” in Proc. Mach. Learn. Syst. (MLSys), vol. 3, 2021. 
[7] 
S. Hymel et al., “Edge Impulse: An MLOps platform for tiny machine learning,” in Proc. Mach. Learn. Syst. (MLSys), 2023. 
[8] 
T. B. Brown et al., “Language models are few-shot learners,” in Adv. Neural Inf. Process. Syst. (NeurIPS), vol. 33, 2020, pp. 1877–1901. 
[9] 
MAX30102: High-Sensitivity Pulse Oximeter and Heart-Rate Sensor for Wearable Health, datasheet, Maxim Integrated. 
[10] BMI270: Small, Low-Power Inertial Measurement Unit, datasheet, Bosch Sensortec. 
[11] MAX30205: Human Body Temperature Sensor, datasheet, Maxim Integrated. 
[12] ESP32-S3 Series Datasheet, Espressif Systems. 
[13] MAX98357A/MAX98357B: Tiny, Low-Cost, PCM Class D Amplifier, datasheet, Maxim Integrated. 
[14] Bluetooth Core Specification, Bluetooth Special Interest Group. 
[15] Getting Started with Seeed Studio XIAO ESP32S3 Sense, Seeed Studio documentation. 
[16] Bluetooth Low Energy Overview, Android Developers documentation, Google. 
[17] Firebase Documentation, Google.
