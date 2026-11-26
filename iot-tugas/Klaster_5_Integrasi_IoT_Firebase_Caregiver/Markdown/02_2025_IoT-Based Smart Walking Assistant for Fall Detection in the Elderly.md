# IoT-Based Smart Walking Assistant for Fall Detection in the Elderly

> **Klaster Literatur:** Klaster 5: Integrasi IoT, Firebase, & Notifikasi Caregiver  
> **Penulis:** Vatinee Sanyod, Khanittha Saelim, Kongphope Chaarmat, Sanya Kuankid  
> **Tahun Publikasi:** 2025  
> **Publikasi / Jurnal:** International Journal of Online and Biomedical Engineering (iJOE)  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.3991/ijoe.v21i06.54443](https://doi.org/10.3991/ijoe.v21i06.54443)  

---

## 📌 Abstrak / Intisari Ilmiah
This study introduces the design, development, and evaluation of a smart walking assistant tailored to enhance the mobility, safety, and independence of elderly individuals. The system integrates an ESP32 microcontroller to interface with multiple sensors, including the MAX30102 for monitoring heart rate and blood oxygen saturation, the GY-906 infrared sensor for body temperature measurements, and the MPU6050 accelerometer and gyroscope for precise motion tracking and fall detection. A compact and modular control unit, seamlessly integrated into the walker, enables real-time data collection and wireless transmission using LoRa and Wi-Fi technologies. This connectivity facilitates the delivery of alerts to caregivers through a user-friendly mobile application. Rigorous testing, including simulated fall scenarios and physiological parameter measurements, validated the system’s accuracy, reliability, and responsiveness. The results demonstrated high precision in detecting obstacles, falls, and physiological anomalies, while the system’s integration with IoT-based communication platforms ensures timely intervention. The smart walking assistant offers a comprehensive and effective solution, promoting safety and quality of life for elderly users.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
19
iJOE  |  eISSN: 2626-8493  |  Vol. 21 No. 6 (2025)  | 
JOE
International Journal of 
Online and Biomedical Engineering
Sanyod, V., Saelim, K., Chaarmart, K., Kuankid, S. (2025). IoT-Based Smart Walking Assistant for Fall Detection in the Elderly. International Journal of 
Online and Biomedical Engineering (iJOE), 21(6), pp. 19–35. https://doi.org/10.3991/ijoe.v21i06.54443
Article submitted 2025-01-15. Revision uploaded 2025-03-06. Final acceptance 2025-03-06.
© 2025 by the authors of this article. Published under CC-BY.
Online-Journals.org
PAPER
IoT-Based Smart Walking Assistant for Fall Detection 
in the Elderly
ABSTRACT
This study introduces the design, development, and evaluation of a smart walking assistant 
tailored to enhance the mobility, safety, and independence of elderly individuals. The sys-
tem integrates an ESP32 microcontroller to interface with multiple sensors, including the 
MAX30102 for monitoring heart rate and blood oxygen saturation, the GY-906 infrared sen-
sor for body temperature measurements, and the MPU6050 accelerometer and gyroscope for 
precise motion tracking and fall detection. A compact and modular control unit, seamlessly 
integrated into the walker, enables real-time data collection and wireless transmission using 
LoRa and Wi-Fi technologies. This connectivity facilitates the delivery of alerts to caregivers 
through a user-friendly mobile application. Rigorous testing, including simulated fall scenar-
ios and physiological parameter measurements, validated the system’s accuracy, reliability, 
and responsiveness. The results demonstrated high precision in detecting obstacles, falls, and 
physiological anomalies, while the system’s integration with IoT-based communication plat-
forms ensures timely intervention. The smart walking assistant offers a comprehensive and 
effective solution, promoting safety and quality of life for elderly users.
KEYWORDS
smart walking assistant, elderly safety, internet of things, fall prevention, physiological sensors
1 
INTRODUCTION
The global elderly population is growing rapidly, with the number of individuals 
aged 60 and above projected to reach 2.1 billion by 2050 [1]. While increased 
longevity is a positive societal achievement, it also presents significant challenges, 
especially in the realm of healthcare. Among these challenges, falls represent one 
of the most severe risks for the elderly. Statistics show that one in ten falls leads to 
an injury that causes older adults to limit their activities for at least a day or seek 
medical attention [2]. 
Falls in older adults often lead to serious injuries, hospitalizations, reduced 
mobility, and, in severe cases, death. Beyond the physical impact, falls can have 
Vatinee Sanyod1, Khanittha 
Saelim2, Kongphope 
Chaarmart3, Sanya 
Kuankid2(*)
1Faculty of Nursing, Nakhon 
Pathom Rajabhat University, 
Nakhon Pathom, Thailand
2Faculty of Science and 
Technology, Nakhon Pathom 
Rajabhat University, Nakhon 
Pathom, Thailand
3Faculty of Industrial 
Technology, Sakon Nakhon 
Rajabhat University, Sakon 
Nakhon, Thailand
sanya@webmail.npru.ac.th
https://doi.org/10.3991/ijoe.v21i06.54443

---

### Halaman 2

20	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
lasting psychological effects, including fear of falling again, which may lead to 
decreased independence and social isolation. Moreover, falls place a substantial 
burden on healthcare systems globally, contributing to rising costs and increased 
demand for long-term care facilities [3].
In response to these challenges, researchers and engineers have been developing 
various technological solutions to aid fall prevention and detection. Traditional fall pre-
vention devices, such as walkers and canes, offer physical support but lack the ability 
to detect falls or alert caregivers in real time. Recent innovations, including wearable 
sensors and ambient detection systems, have provided some advancements; however, 
they come with limitations. Wearable sensors, while effective in monitoring physiolog-
ical signals and movement, may be uncomfortable or cumbersome for elderly individ-
uals to wear consistently. Ambient systems, on the other hand, rely on environmental 
sensors and cameras, which can raise privacy concerns and are often limited to indoor 
use. Furthermore, both approaches may fall short in detecting subtle balance issues or 
pre-fall conditions that could help prevent falls from occurring in the first place.
The integration of the Internet of Things (IoT) in healthcare has opened new 
pathways to address these limitations by enabling real-time monitoring and care-
giver notification systems [4], [5], [6]. An IoT-based smart walking assistant leverages 
sensors such as accelerometers, gyroscopes, and pressure sensors to continuously 
monitor the user’s movements and detect potential fall risks. This technology can 
transmit data to connected devices such as smartphones or tablets, providing care-
givers with timely alerts and valuable insights into the user’s mobility patterns. Real-
time monitoring and immediate notifications enable rapid intervention, which can 
be critical in reducing the consequences of falls. Moreover, IoT-based systems can 
collect and store data on user activity over time, allowing healthcare providers to 
analyze patterns and adjust care plans based on individual needs.
This paper presents an IoT-based smart walking assistant designed to prevent 
falls among the elderly. The system is intended to overcome the limitations of exist-
ing fall prevention methods by providing continuous, real-time monitoring and a 
responsive alert mechanism. Through this innovative approach, the smart walking 
assistant aims to improve the quality of life for elderly individuals, reduce healthcare 
burdens, and support aging populations in maintaining independence and safety.
2 
LITERATURE REVIEW
The rapid advancement of fall detection technologies has led to a wide array of 
methods aimed at enhancing elderly safety and reducing healthcare burdens. The 
literature generally categorizes fall detection methods into many types [7], [8], [9]. 
Each method offers unique benefits and faces specific challenges, as discussed below.
2.1 
Wearable sensor-based fall detection
Wearable sensors, particularly accelerometers and gyroscopes, are among the 
most widely used tools in fall detection due to their portability and ability to capture 
movement data in real time [10], [11], [12], [13], [14], [15]. Studies such as Wu et al. 
[13] demonstrated that wearable devices combining accelerometers with gyroscopes 
could effectively differentiate falls from normal activities by analyzing body move-
ments using quaternion algorithms, achieving high accuracy in identifying sudden 
drops in acceleration typical of falls. Additionally, Siregar et al. [16] implemented

---

### Halaman 3

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
21
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
a system using Arduino with accelerometers and gyroscopes, reporting an accuracy 
of 93.75% in fall detection and alerting caregivers immediately​. Another study by 
Ahn et al. [17] explored pre-impact fall detection using inertial sensors, finding that 
angular velocity and trunk inclination were critical indicators. The study reported 
100% sensitivity, underscoring the high potential of these algorithms for real-time 
fall prevention in elderly care.
The adoption of machine learning techniques has further enhanced the capa-
bilities of wearable sensors. Albert et al. [18] employed support vector machines 
and logistic regression to classify fall types with 98% accuracy, showing that 
wearable sensors can capture nuanced fall dynamics when paired with robust 
algorithms​. Kalman filters are also applied to preprocess sensor data, reducing noise 
and improving reliability, as noted by He et al. [19]. Rakhmani et al. [20] used accel-
erometer and gyroscope data with machine learning classifiers, achieving 93.3% 
accuracy in distinguishing falls from normal daily activities. Ensemble-based classi-
fiers and data fusion approaches have also shown promise, combining multiple sen-
sors to improve accuracy and reduce false positives, as illustrated by Saha et al. [12]. 
Despite these advancements, challenges remain in terms of user compliance, as con-
tinuous usage is required for reliable fall detection.
2.2 
Ambient sensor-based fall detection
Ambient systems employ environmental sensors such as pressure mats, micro-
phones, and proximity sensors to monitor fall events without requiring users to wear 
devices [17], [21]. Vallabh and Malekian [8] reviewed ambient sensor systems that use 
vibration and passive infrared sensors to distinguish falls from activities of daily living 
(ADLs) but noted the systems’ limitations in portability and cost due to required installa-
tion and maintenance. Mozaffari et al. [22] highlighted the use of such sensors in detect-
ing fall-related changes in the environment, such as vibrations or sound upon impact, 
which can trigger alerts to caregivers via IoT networks. These systems are particularly 
suitable for confined areas such as homes, but they are less effective outdoors or in 
environments where installation is limited. Despite these limitations, ambient systems 
offer certain advantages. Unlike wearable devices, they require no active engagement 
from the user. However, ambient systems are often prone to false positives due to inter-
ference from environmental factors, such as pets or moving objects, which may trig-
ger alerts erroneously. Moreover, ambient sensors often suffer from high false-positive 
rates, as they can misinterpret routine household activities as falls. Ambient intelligence 
(AAL) in IoT-based systems has been proposed to enhance the fall detection process 
by integrating environmental sensors within a smart home setup. Al-Khafaji et al. [23] 
emphasized that AAL allows for a continuous and non-intrusive monitoring system, 
supporting early intervention and reducing the need for constant manual monitoring​.
2.3 
Vision-based fall detection
Vision-based systems utilize cameras and computer vision algorithms to monitor 
human posture and detect falls [24]. Gutiérrez et al. [24] reviewed the progress in 
vision-based fall detection, noting that these systems often achieve high detection 
accuracy due to advancements in computer vision and artificial neural networks, 
which help mitigate issues related to poor lighting or occlusions. These systems, how-
ever, present privacy concerns as they continuously capture video data, which some

---

### Halaman 4

22	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
users may find intrusive. Mrozek et al. [25] conducted a study using edge and cloud 
computing for fall detection, finding that real-time video analysis can effectively 
identify falls while offloading data processing to cloud servers. Such systems ben-
efit from advanced machine learning algorithms, particularly convolutional neural 
networks (CNNs), which can accurately recognize human poses and detect abnor-
mal postures associated with falls. Nevertheless, datasets used to train these systems 
often lack real-world diversity, potentially limiting their robustness when deployed 
outside controlled environments.
While effective in controlled environments, vision-based systems raise privacy 
concerns and are susceptible to variations in lighting and occlusions. They are also 
limited by the need for stable camera setups, making them less adaptable to outdoor 
settings or highly dynamic environments. Nevertheless, vision-based systems have 
shown potential in hybrid setups, where camera data is augmented with wearable 
or environmental sensor data for improved accuracy and robustness.
2.4 
Machine learning and IoT integration in fall detection
Machine learning techniques, particularly in wearable and vision-based systems, 
have enhanced fall detection accuracy [19], [22], [25], [26], [27], [28]. Traditional 
threshold-based methods detect falls based on fixed parameters, but they are prone 
to high false-positive rates due to movement variations. In contrast, machine learn-
ing algorithms can learn complex patterns and improve classification accuracy by 
recognizing subtle differences between falls and ADLs. Rakhmani et al. [20] demon-
strated that combining machine learning with smartphone accelerometer and 
gyroscope data yielded reliable detection, especially when using classifiers such as 
decision trees and neural networks.
The integration of IoT and machine learning has been instrumental in advanc-
ing fall detection technology. Wu et al. [13] demonstrated an IoT-based architecture 
that combines wearable sensors with cloud analytics, enabling real-time monitoring 
and analysis of falls. IoT infrastructure, utilizing edge, fog, and cloud layers, has 
allowed for scalable systems capable of processing large datasets and supporting 
numerous devices. Edge computing, in particular, is beneficial in reducing latency 
and minimizing the volume of transmitted data, thereby enhancing the efficiency 
and responsiveness of fall detection systems [22].
3 
MATERIALS AND METHODS
This section details the development, hardware structure, and operational design 
of the smart walking assistant device, which aims to enhance fall prevention and 
support for elderly individuals. The device integrates a range of sensors to continu-
ously monitor physiological parameters, detect potential hazards, and transmit real-
time alerts to caregivers or family members. 
3.1 
System architecture
The smart walking assistant was developed as an IoT-based system to improve 
safety for elderly users by monitoring vital signs and environmental conditions. 
The device’s functionality is illustrated in Figure 1. The smart walking assistance 
device integrates multiple advanced functionalities to ensure user safety, support,

---

### Halaman 5

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
23
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
and independence. It measures the distance to surrounding obstacles using precise 
sensing technology, issuing an audible alert to the user when hazards are detected, 
thereby enabling safe navigation in various environments. The device monitors 
motion along the X, Y, and Z axes to capture comprehensive movement data, allowing 
the detection of abnormal patterns and ensuring accurate differentiation between 
routine activities and potential falls.
Under normal operation, the system collects and displays real-time data from 
heart rate, blood oxygen level, and body temperature sensors. Additionally, when 
obstacles are detected, the device issues an audible alert to the user. In cases where 
physiological parameters such as heart rate, blood oxygen saturation, or body tem-
perature deviate from normal levels, or if a fall occurs and the user is unable to 
respond, the system sends a notification to designated caregivers. This alert includes 
information on the time, location, and the user’s last recorded posture, facilitating 
timely assistance and reducing the risks associated with delayed intervention.
Fig. 1. The architecture of the smart walking assistant system
3.2 
System components
The system structure of the smart walking assistant is composed of two main 
modules: the data collection module and the data reception and transmission mod-
ule. Together, these modules enable continuous monitoring of the user’s health and 
environment, supporting real-time alerts and remote caregiver access.
Data collection module. The core of the collection module is the ESP32 micro-
controller, which manages a set of sensors to monitor essential physiological and 
environmental parameters. Data from these sensors is continuously displayed on 
the integrated TFT LCD screen for the user’s reference. In emergency scenarios, 
such as abnormal health readings or fall detection, the system generates an audible 
alert through a speaker. The ESP32 then transmits data via a LoRa transmitter to 
the receiver module, enabling real-time monitoring from a distance, as depicted 
in Figure 2.
• MAX30102 optical sensor measures heart rate and blood oxygen saturation (SpO₂) 
by analyzing reflected infrared and red light. Real-time readings are displayed on 
an LCD screen, enabling the user to monitor vital health metrics immediately.
• GY-906 infrared temperature sensor is designed for non-contact readings; this 
sensor captures the user’s body temperature by detecting emitted infrared radi-
ation. It enables continuous temperature monitoring and alerts caregivers if 
temperatures fall outside of safe ranges.

---

### Halaman 6

24	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
• VL53L0X distance sensor uses laser time-of-flight technology; this sensor detects 
the distance between the user and nearby obstacles. When hazards are within a 
certain proximity, the device emits an audible alert, enhancing user safety.
• MPU6050 accelerometer and gyroscope combines linear acceleration and angu-
lar velocity measurements to identify unusual motion patterns. By distinguishing 
between routine movements and sudden falls, it reliably triggers alerts to care-
givers when necessary.
• GY-NEO-6MV2 GPS module: This GPS module provides precise location data in 
emergency situations. If a fall is detected, location coordinates are included in the 
alert, enabling caregivers to locate the user quickly, especially in outdoor settings.
• LoRa SX1278 long-range wireless module supports long-range wireless commu-
nication between the collection module and data reception module. This mod-
ule utilizes LoRa technology to transmit data over extended distances with low 
power consumption.
• The PAM8403 audio amplifier module enhances audio output by amplifying 
alerts generated by the system. This module works with a speaker to ensure 
warning signals are loud and clear, effectively notifying users of potential haz-
ards or health alerts.
Fig. 2. Data collection module
Data reception and transmission module. The data reception and database 
transmission module, as illustrated in Figure 3, serves as a central component that 
receives, processes, and transmits user data to a cloud-based system. Built around an 
ESP32 microcontroller, it integrates a LoRa receiver and Wi-Fi connectivity to ensure 
reliable communication and data flow. The ESP32, equipped with Wi-Fi, processes 
the data and uploads it to the Firebase Cloud Database for real-time storage and 
synchronization. Through the Mobile Application Interface, caregivers can access 
data stored in Firebase, including vital signs, movement patterns, and emergency 
alerts such as fall detection. The app also provides real-time notifications and dis-
plays the user’s last known location during emergencies, enabling rapid caregiver 
response. This integrated system ensures seamless data monitoring and enhanced 
safety for the user.

---

### Halaman 7

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
25
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
Fig. 3. Data reception and database transmission module
The smart walking assistant utilizes a sophisticated three-tier architecture that 
seamlessly integrates hardware, software, and communication protocols to create 
an effective monitoring and alert system for elderly care. At the hardware level, the 
system employs dual ESP32 microcontrollers that form the processing foundation of 
both the collection module mounted on the walking aid and the stationary reception 
module. The collection module incorporates multiple specialized sensors, including 
the MAX30102 for heart rate and blood oxygen monitoring, GY-906 for non-contact 
temperature measurement, VL53L0X for precise obstacle detection, and MPU6050 
for motion tracking and fall detection. These sensors communicate with the ESP32 
through optimized I²C and SPI bus configurations to ensure efficient data transfer.
The software architecture implements a layered approach with FreeRTOS man-
aging task scheduling across the ESP32’s dual cores, allowing critical monitoring 
processes to operate concurrently with communication tasks. The collection mod-
ule’s firmware handles sensor data acquisition, implements threshold-based anom-
aly detection algorithms, and employs a decision tree classifier for identifying fall 
events from motion data. The reception module functions as the intermediary 
between the collection unit and cloud database, validating and decoding incoming 
LoRa transmissions before transforming them into standardized formats suitable 
for cloud storage. During normal operation, the software maintains continuous 
Firebase database connectivity via Wi-Fi, transmitting real-time data through the 
MQTT protocol.
Power management is a crucial consideration for this assistive technology. The 
system operates on a rechargeable 10,000 mAh lithium-polymer battery selected 
for its optimal balance of capacity, weight, and longevity. Under standard operating 
conditions, the system provides approximately 120 hours of continuous operation 
between charging cycles. The control interface displays a color-coded battery indica-
tor visible to both users and caregivers. When power levels decline to 30% capacity, 
the system activates low-battery notifications both on the device and through the 
caregiver’s mobile application, ensuring sufficient time for recharging before power 
depletion occurs.
Despite the integration of multiple technologies, the system’s modular design 
architecture significantly simplifies maintenance and troubleshooting for non- 
technical users. This approach enables isolated component testing and replace-
ment without affecting overall system functionality. For instance, a malfunction-
ing heart rate sensor can be replaced independently without impacting the fall

---

### Halaman 8

26	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
detection system. Visual status indicators provide clear information about power 
status, connectivity, and sensor operation, allowing users to identify basic issues 
without technical expertise.
The user interface follows universal design principles, featuring large displays 
and intuitive controls to accommodate elderly users who may find new technology 
challenging. The system is designed for single-time setup by caregivers or family 
members, requiring minimal technical understanding from elderly users during 
regular operation.
3.3 
Hardware design and implementation
An adaptor printed circuit board (PCB) is designed in ensuring reliable communi-
cation and integration across the smart walking assistant system’s various modules. 
The hardware system comprises two primary PCB. Figure 4. shows the hardware 
design and integration of the smart walking assistant system. Figure 4a and 4b shows 
the internal and external layout of the data collection module. The module is con-
tained within a compact control box measuring 12 × 17.5 × 5.25 cm. Figure 4c shows 
the designed box of data reception and transmission module. Figure 4d shows the 
integration with walking aid, this design allows for flexible installation on a wide 
range of walking aids, enhancing the device’s adaptability for diverse user needs. 
The control box’s streamlined design promotes ease of use and facilitates seamless 
integration with various walking devices, ensuring that elderly individuals can ben-
efit from enhanced support and safety.
The completed control box, as shown in Figure 5, incorporates all essential com-
ponents for the smart walking assistant system. Figure 5a highlights the data col-
lection control box, featuring a user-friendly interface that displays real-time data, 
including health parameters and alerts. Figure 5b showcases the data reception and 
transmission box, equipped with connectivity features such as power and Wi-Fi 
indicators. Figure 5c illustrates the final hardware assembly, demonstrating its 
seamless integration with a standard walking aid. 
Fig. 4. Hardware design and integration of the smart walking assistant system: (a, b) internal and external 
layout of the data collection module, (c) designed box of data reception and transmission module, and 
(d) Integration with walking aid

---

### Halaman 9

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
27
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
a)
b)
c)
Fig. 5. Completed control box: (a) Data collection control box, (b) Data reception and transmission box, and 
(c) Integration with a standard walking aid
3.4 
Data processing and analysis
The data processing and analysis framework of the smart walking assistant is 
designed to provide real-time monitoring of sensor outputs, ensuring timely and 
accurate detection of falls and health abnormalities. The ESP32 microcontroller 
serves as the core processing unit, employing advanced algorithms to analyze data 
from various sensors, including motion, heart rate, blood oxygen, and body tem-
perature sensors. 
Anomaly detection. The system monitors physiological parameters that are 
heart rate, blood oxygen saturation (SpO₂), and body temperature using predefined 
thresholds tailored to elderly individuals. These thresholds are designed to identify 
deviations indicative of potential health risks, allowing for early intervention. Each 
parameter is continuously evaluated against safe ranges, as defined in Table 1. Alerts 
are triggered whenever a parameter exceeds or falls below its respective thresh-
old, signaling a potential health anomaly. The system employs threshold-based algo-
rithms to identify health anomalies in real time. When an anomaly is detected, the 
system immediately classifies it as a critical event, prompting the next stage of pro-
cessing and notification.
Table 1. Specific threshold values for each physiological parameter
Measurement Type
Sensor Used
Threshold
Heart Rate
MAX30102
60–100 bpm
SpO₂
MAX30102
> 94%
Body Temperature
GY-906
36.1–37.5°C
Obstacle Detection
VL53L0X
< 900 mm

---

### Halaman 10

28	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
Fall detection. Fall detection is a critical capability of the smart walking assis-
tant, designed to address one of the primary causes of injury among elderly indi-
viduals. The system employs the MPU6050 accelerometer and gyroscope to monitor 
acceleration and angular velocity, enabling the capture of motion patterns indica-
tive of falls.
Key features are extracted from the accelerometer and gyroscope readings, 
including the magnitude of acceleration and angular displacement. These features 
are essential for distinguishing routine movements from fall events. Specific thresh-
old values, derived from experimental data, are applied to detect falls in various 
directions, including forward, backward, and lateral movements, ensuring compre-
hensive coverage of potential scenarios. To classify fall events, the system utilizes a 
decision tree classifier, which processes the extracted features to determine whether 
the detected motion qualifies as a fall. The classifier threshold values were deter-
mined through iterative testing under controlled laboratory conditions, achieving a 
balance between sensitivity and specificity in fall detection. Once an event is classi-
fied as a fall, the system immediately generates an alert containing critical informa-
tion, such as the user’s final recorded position. This alert is transmitted to caregivers, 
enabling prompt and informed responses to assist the user effectively.
Real-time data transmission and alert mechanism. Real-time communica-
tion is a key feature of the smart walking assistant, enabling caregivers to receive 
immediate alerts through Firebase for fall events or health anomalies, including 
critical details such as event type, timestamp, user location, and sensor readings. 
Additionally, the system stores data in a Firebase database, allowing caregivers 
to access both real-time and historical health information for trend analysis and 
informed medical decision-making.
3.5 
Experiment design
To assess the accuracy and performance of the sensors integrated into the smart 
walking assistant, an evaluation was conducted involving 10 students enrolled in 
the Electrical Engineering program at Nakorn Pathom Rajabhat University, Thailand. 
The participants, aged between 18 and 23 years, were selected based on the absence 
of any known health conditions. The experiment involved measuring each partici-
pant’s heart rate, blood oxygen saturation (SpO₂), body temperature, motion detec-
tion, obstacle detection, and fall detection under controlled conditions to ensure 
consistency and reliability in the data collected. The following sensors and mea-
surement criteria were employed to evaluate the functionality of the smart walking 
assistant under controlled conditions.
1.	 Heart rate and SpO₂ were conducted over a 15-second duration. Participants 
remained seated and were instructed to place a finger on the sensor to obtain 
accurate readings.
2.	 Body temperature was captured body temperature from a fixed measurement 
distance of 10 cm. Participants were required to remain stationary during the 
measurement to ensure reliability.
3.	 Fall detection was performed in forward, backward, and side directions to evalu-
ate the system’s ability to distinguish between routine movements and fall events.
4.	 Obstacle detection was placed at predetermined distances of 300 mm, 500 mm, 
700 mm, and 900 mm to test the sensor’s detection capability and alert triggering 
mechanism.

---

### Halaman 11

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
29
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
The procedure for the experiment involved preparing and calibrating the sensors 
to ensure accurate functionality. Measurements for each parameter were conducted 
with all 10 participants, with each test repeated three times to account for variability 
and enhance data reliability. The data collected were systematically recorded for 
subsequent analysis and interpretation.
4 
RESULTS
4.1 
Monitoring of physiological parameters and obstacle detection
The smart walking assistant was evaluated for its accuracy in measuring key 
physiological parameters, including heart rate, blood oxygen saturation (SpO₂), and 
body temperature, as well as its ability to detect obstacles effectively, as shown in 
Figure 6. Data were collected under controlled laboratory conditions with a sample 
of 10 young, healthy participants. The average results of these measurements, along 
with the threshold ranges and observations, are summarized in Table 2.
Fig. 6. Results capturing physiological parameters and obstacle detection performance
Table 2. Average results of physiological parameters and obstacle detection measured in 10 participants
Parameter
Average Value
Threshold Range
Observation
Heart Rate (bpm)
78.3
60–100 bpm
Within normal range
Blood Oxygen Saturation
97.3%
>94%
Within normal range
Body Temperature (°C)
36.6
36.1–37.5°C
Within normal range
Obstacle Detection (mm)
300–900
<900 mm
All obstacles detected.
4.2 
Fall detection and emergency alerts
To evaluate the fall detection capabilities of the smart walking assistant, con-
trolled falls were simulated in multiple directions, including forward, backward, 
and lateral movements, as shown in Figure 7. These tests assessed the system’s clas-
sification algorithm, which utilizes data from the MPU6050 accelerometer and gyro-
scope to detect sudden changes in acceleration and angular velocity indicative of a 
fall. Calibration and threshold adjustments were iteratively performed to enhance 
accuracy and minimize false positives and false negatives. The system successfully

---

### Halaman 12

30	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
detected all simulated falls and triggered the alert mechanism. Upon detecting a fall, 
the system transmitted critical information, including the user’s last recorded pos-
ture, time of the event, and precise location, to a dedicated mobile application.
a)
b)
c)
d)
e)
Fig. 7. Simulated fall detection scenarios with corresponding sensor readings: (a) Normal upright position, (b) Forward fall,  
(c) Backward fall, and (d, e) Lateral falls
The smart walking assistant’s mobile application, developed using Kodular for 
the Android operating system, serves as a crucial interface for caregivers by provid-
ing real-time alerts and updates on the user’s status. The application is designed with 
two primary operational modes to ensure comprehensive monitoring and timely 
intervention. The normal status (Figure 8a) is displayed when no abnormal events 
are detected. This status provides real-time information on the user’s current heart 
rate, blood oxygen saturation (SpO₂), and body temperature, allowing caregivers to 
monitor the user’s physiological parameters continuously. The fall detection status 
(Figure 8b) is activated when the system detects a fall event. In this mode, the appli-
cation displays a warning alongside critical health metrics such as heart rate, SpO₂, 
and body temperature. Additionally, it includes actionable information, such as the 
user’s precise location and last recorded movement, enabling caregivers to respond 
immediately and effectively to the situation.
b)
a)
Fig. 8. Mobile application interface: (a) Normal status, (b) Fall detection status
5 
DISCUSSIONS
The IoT-based smart walking assistant developed in this study demonstrates 
significant advancements compared to existing systems in the areas of fall detec-
tion, physiological monitoring, and caregiver communication. The system’s use of 
the MPU6050 accelerometer and gyroscope achieved high accuracy in detecting

---

### Halaman 13

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
31
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
simulated falls in various directions, including forward, backward, and lateral 
movements. These findings align with earlier studies, such as Rakhman et al. [20], 
but the proposed system incorporates additional calibration and threshold adjust-
ments, reducing false positives and negatives while providing real-time location 
transmission, a feature lacking in many prior designs. 
The integration of the MAX30102 sensor for heart rate and SpO₂ monitoring and 
the GY-906 infrared temperature sensor ensures accurate tracking of physiological 
parameters, consistent with findings from Wu et al. [13]. However, unlike previous 
systems focusing solely on physiological data, the smart walking assistant integrates 
additional features such as fall detection and obstacle detection, providing a more 
comprehensive solution for user safety. The use of Firebase for real-time data stor-
age and notifications significantly enhances caregiver communication compared 
to SMS-based systems, such as Al-khafajiy et al. [23]. The proposed system ensures 
immediate transmission of critical information, including the user’s location, event 
details, and vital metrics, enabling timely caregiver responses.
Additionally, the obstacle detection capability using the VL53L0X sensor offers 
reliable identification of obstacles within predefined ranges, improving user nav-
igation safety. Unlike earlier systems such as Mozaffari et al. [22], which primarily 
focused on motion monitoring, the inclusion of obstacle detection adds an essen-
tial layer of environmental awareness, enhancing user safety during movement. 
Despite these advancements, the system’s reliance on pre-defined thresholds for 
anomaly detection limits its adaptability to individual variations, as noted in stud-
ies such as Albert et al. [18]. Incorporating machine learning algorithms in future 
iterations could refine detection sensitivity and improve personalization for diverse 
users. Real-world validation in dynamic environments, such as crowded outdoor 
spaces, as emphasized by Karar et al. [26], would further enhance the system’s reli-
ability and applicability in broader scenarios.
Regarding mobile applications, several challenges exist with app-dependent alert 
systems in elderly care contexts. Many caregivers lack sufficient technological pro-
ficiency with smartphones, creating monitoring barriers. Continuous smartphone 
access is impractical, potentially causing notification gaps during sleeping or driv-
ing. The abundance of notifications on modern devices may produce “alert fatigue,” 
where critical alerts are overlooked. To address these limitations, future develop-
ment will implement alternative notification channels including SMS messaging, 
email alerts, and automated voice calls to landlines. Integration with smart home 
systems and wearable devices will further enhance alert delivery reliability regard-
less of caregiver technological preferences.
When evaluating the cost considerations of this innovation, affordability rep-
resents a critical factor for any assistive technology seeking widespread adoption. 
The smart walking assistant prototype was engineered with cost efficiency as a 
primary design consideration, carefully balancing advanced functionality with 
financial accessibility to ensure availability to users across various economic cir-
cumstances. From a healthcare economics perspective, this system offers potential 
cost advantages beyond its direct purchase price. The device’s ability to prevent 
fall-related injuries could generate significant offset savings through reduced health-
care expenditures. Fall-related hospitalizations among elderly populations consti-
tute substantial financial burdens for both individuals and healthcare systems. By 
effectively reducing fall incidence or severity and enabling more rapid emergency 
response, the smart walking assistant demonstrates potential cost-effectiveness that 
extends beyond its initial investment cost.

---

### Halaman 14

32	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
Regarding privacy considerations, our prototype implements basic security mea-
sures, but we recognize that medical data protection requires vigilant monitoring 
of evolving threats and regulations. Future iterations will enhance security through 
comprehensive encryption for all data, advanced authentication mechanisms, and 
granular access controls. Additionally, we will establish systematic security mainte-
nance protocols, including regular updates and vulnerability assessments.
The smart walking assistant prototype shows potential for addressing elderly 
safety through its integration of monitoring and communication capabilities. While 
initial testing with young participants demonstrates technical feasibility, significant 
additional validation with elderly users in real-world environments is necessary 
before claims of robustness or advancement in assistive technology can be substan-
tiated. This work represents a preliminary step that requires comprehensive evalu-
ation with the target population.
6 
CONCLUSION
This study presents the development and initial testing of an IoT-based smart 
walking assistant prototype intended to address mobility and safety challenges for 
elderly individuals. The system’s integration of real-time monitoring, fall detection, 
and caregiver notifications addresses critical challenges in elderly care. Key fea-
tures, including accurate physiological monitoring, reliable fall detection, and seam-
less data transmission via a mobile application, highlight the system’s potential to 
improve the quality of life for elderly users.
The findings demonstrate the system’s accuracy in measuring vital signs and 
detecting falls, ensuring prompt alerts to caregivers. These capabilities can reduce 
the risks associated with delayed intervention and enhance overall user safety. 
Future work could focus on incorporating adaptive machine learning algorithms to 
improve detection sensitivity and testing the system in diverse real-world settings. 
The IoT-based smart walking assistant holds significant promise as an assistive tech-
nology for the aging population, contributing to improved safety, independence, and 
healthcare outcomes.
7 
ACKNOWLEDGEMENT
This study was made possible by the kind support of the Research and 
Development Institute of Nakhon Pathom Rajabhat University, and the Creating 
Innovation for Sustainable Development Research Center, Nakhon Pathom Rajabhat 
University, Nakhon Pathom, Thailand
8 
REFERENCES
	 [1]	 World Health Organization, “Ageing and health,” 2024. [Online]. Available: https://www.
who.int/news-room/fact-sheets/detail/ageing-and-health [Accessed: Oct. 3, 2024].
	 [2]	 Centers for Disease Control and Prevention, “Facts about falls,” 2024. [Online]. Available: 
https://www.cdc.gov/falls/data-research/facts-stats [Accessed: Oct. 1, 2024].
	 [3]	 A. F. Ambrose, G. Paul, and J. M. Hausdorff, “Risk factors for falls among older adults: a 
review of the literature,” Maturitas, vol. 75, no. 1, pp. 51–61, 2013. https://doi.org/10.1016/ 
j.maturitas.2013.02.009

---

### Halaman 15

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
33
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
	 [4]	 B. G. Mohammed and D. S. Hasan, “Smart healthcare monitoring system using IoT,” Int. 
J. Interact. Mob. Technol., vol. 17, no. 1, pp. 141–152, 2023. https://doi.org/10.3991/ijim.
v17i01.34675
	 [5]	 A. Adam, A. Abubakar, and M. Mahmud, “Sensor enhanced health information systems: 
Issues and challenges,” Int. J. Interact. Mob. Technol., vol. 13, no. 1, pp. 99–114, 2019. 
https://doi.org/10.3991/ijim.v13i01.7037
	 [6]	 H. Boudlal, M. Serrhini, and A. Tahiri, “A monitoring system for elderly people using 
WiFi Sensing with channel state information,” Int. J. Interact. Mob. Technol., vol. 17, 
no. 12, pp. 112–131, 2023. https://doi.org/10.3991/ijim.v17i12.36613
	 [7]	 S. Nooruddin, M. M. Islam, F. A. Sharna, H. Alhetari, and M. N. Kabir, “Sensor-based fall 
detection systems: A review,” Journal of Ambient Intelligence and Humanized Computing, 
vol. 13, no. 5, pp. 2735–2751, 2022. https://doi.org/10.1007/s12652-021-03248-z
	 [8]	 P. Vallabh and R. Malekian, “Fall detection monitoring systems: A comprehensive 
review,” J. Ambient. Intell. Human. Comput., vol. 9, no. 6, pp. 1809–1833, 2018. https://doi.
org/10.1007/s12652-017-0592-3
	 [9]	 M. Cornacchia, K. Ozcan, Y. Zheng, and S. Velipasalar, “A survey on activity detection and 
classification using wearable sensors,” IEEE Sensors Journal, vol. 17, no. 2, pp. 386–403, 
2017. https://doi.org/10.1109/JSEN.2016.2628346
	[10]	 E. Casilari, M. Álvarez-Marco, and F. García-Lagos, “A study of the use of gyroscope mea-
surements in wearable fall detection systems,” Symmetry, vol. 12, no. 4, p. 649, 2020. 
https://doi.org/10.3390/sym12040649
	[11]	 M. I. Nari, S. S. Suprapto, I. H. Kusumah, and W. Adiprawita, “A simple design of wear-
able device for fall detection with accelerometer and gyroscope,” in 2016 International 
Symposium on Electronics and Smart Devices (ISESD), Bandung, Indonesia, 2016, 
pp. 88–91. https://doi.org/10.1109/ISESD.2016.7886698
	[12]	 J. Saha, C. Chowdhury, I. Roy Chowdhury, S. Biswas, and N. Aslam, “An ensemble of 
condition based classifiers for device independent detailed human activity recogni-
tion using smartphones,” Information, vol. 9, no. 4, p. 94, 2018. https://doi.org/10.3390/
info9040094
	[13]	 F. Wu, H. Zhao, Y. Zhao, and H. Zhong, “Development of a wearable-sensor-based fall 
detection system,” International Journal of Telemedicine and Applications, vol. 2015, 
pp. 1–11, 2015. https://doi.org/10.1155/2015/576364
	[14]	 X. Fu et al., “Remote monitoring system for livestock environmental information based 
on LoRa wireless ad hoc network technology,” International Journal of Agricultural 
and Biological Engineering, vol. 15, no. 4, pp. 79–89, 2022. https://doi.org/10.25165/ 
j.ijabe.20221504.6708
	[15]	 R. Rucco et al., “Type and location of wearable sensors for monitoring falls during static 
and dynamic tasks in healthy elderly: A review,” Sensors, vol. 18, no. 5, p. 1613, 2018. 
https://doi.org/10.3390/s18051613
	[16]	 B. Siregar, U. Andayani, R. P. Bahri, Seniman, and F. Fahmi, “Real-time monitoring sys-
tem for elderly people in detecting falling movement using accelerometer and gyro-
scope,” J. Phys. Conf. Ser., vol. 978, p. 012110, 2018. https://doi.org/10.1088/1742-6596/ 
978/1/012110
	[17]	 S. Ahn, J. Kim, B. Koo, and Y. Kim, “Evaluation of inertial sensor-based pre-impact fall 
detection algorithms using public dataset,” Sensors, vol. 19, no. 4, p. 774, 2019. https://doi.
org/10.3390/s19040774
	[18]	 M. V. Albert, K. Kording, M. Herrmann, and A. Jayaraman, “Fall classification by machine 
learning using mobile phones,” PLoS ONE, vol. 7, no. 5, p. e36556, 2012. https://doi.
org/10.1371/journal.pone.0036556
	[19]	 J. He, S. Bai, and X. Wang, “An unobtrusive fall detection and alerting system based on 
kalman filter and bayes network classifier,” Sensors, vol. 17, no. 6, p. 1393, 2017. https://
doi.org/10.3390/s17061393

---

### Halaman 16

34	
International Journal of Online and Biomedical Engineering (iJOE)	
iJOE | Vol. 21 No. 6 (2025)
Sanyod et al.
	[20]	 A. Z. Rakhman, L. E. Nugroho, Widyawan, and Kurnianingsih, “Fall detection system 
using accelerometer and gyroscope based on smartphone,” in 2014 The 1st International 
Conference on Information Technology, Computer, and Electrical Engineering, Semarang, 
Indonesia, 2014, pp. 99–104. https://doi.org/10.1109/ICITACEE.2014.7065722
	[21]	 K. Chaccour, J. Eid, R. Darazi, A. Hajjam el Hassani, and E. Andres, “Multisensor guided 
walker for visually impaired elderly people,” in 2015 International Conference on 
Advances in Biomedical Engineering (ICABME), Beirut, Lebanon: IEEE, 2015, pp. 158–161. 
https://doi.org/10.1109/ICABME.2015.7323276
	[22]	 N. Mozaffari, J. Rezazadeh, R. Farahbakhsh, S. Yazdani, and K. Sandrasegaran, “Practical 
fall detection based on IoT technologies: A survey,” Internet of Things, vol. 8, p. 100124, 
2019. https://doi.org/10.1016/j.iot.2019.100124
	[23]	 M. Al-khafajiy et al., “Remote health monitoring of elderly through wearable sensors,” 
Multimed. Tools. Appl., vol. 78, no. 17, pp. 24681–24706, 2019. https://doi.org/10.1007/
s11042-018-7134-7
	[24]	 J. Gutiérrez, V. Rodríguez, and S. Martin, “Comprehensive review of vision-based 
fall detection systems,” Sensors, vol. 21, no. 3, p. 947, 2021. https://doi.org/10.3390/ 
s21030947
	[25]	 D. Mrozek, A. Koczur, and B. Małysiak-Mrozek, “Fall detection in older adults with 
mobile IoT devices and machine learning in the cloud and on the edge,” Information 
Sciences, vol. 537, pp. 132–147, 2020. https://doi.org/10.1016/j.ins.2020.05.070
	[26]	 M. E. Karar, H. I. Shehata, and O. Reyad, “A survey of IoT-based fall detection for aiding 
elderly care: Sensors, methods, challenges and future trends,” Applied Sciences, vol. 12, 
no. 7, p. 3276, 2022. https://doi.org/10.3390/app12073276
	[27]	 E. S. Kumar, P. Sachin, B. P. Vignesh, and M. R. Ahmed, “Architecture for IoT based geri-
atric care fall detection and prevention,” in 2017 International Conference on Intelligent 
Computing and Control Systems (ICICCS), Madurai, 2017, pp. 1099–1104. https://doi.
org/10.1109/ICCONS.2017.8250636
	[28]	 P. Bhattacharjee and S. Biswas, “Smart walking assistant (SWA) for elderly care using an 
intelligent realtime hybrid model,” Evolving Systems, vol. 13, pp. 265–279, 2022. https://
doi.org/10.1007/s12530-021-09382-5
9 
AUTHORS
Vatinee Sanyod received B. Nursing. degree in Nursing from Kuakarun College 
of Nursing (2000), M. Nursing. degree in Pediatric Nursing from Mahidol University 
(2007), and D.N.S. degree in Nursing from Chiang Mai University (2020), Thailand. 
She is currently an Assistant Professor of Nursing at Nakhon Pathom Rajabhat 
University, Thailand. Her main topic of research is closely related with elder person 
nursing, child and adolescent nursing (E-mail: vatinee@webmail.npru.ac.th). 
Khanittha Saelim received B.Sc. degree in Industrial Technology (Industrial 
Computer) from Nakhon Pathom Rajabhat University in 2005 and M.Sc. degree in 
Information Technology from Silpakorn University in 2011, Thailand. She is cur-
rently an Assistant Professor in Industrial Computer at Nakhon Pathom Rajabhat 
University, Thailand. Her research interests include database systems, system analy-
sis and design, and IoT applications (E-mail: kanit@webmail.npru.ac.th).
Kongphope Chaarmart received B.Eng. degree in Electronic Engineering 
from North Eastern University (2001), M.S. Ind.Ed degree in Electrical Engineering 
from King Mongkut’s University of Technology Thonbuti (2007), and Ph.D. degree 
in Electrical and Computer Engineering from Mahasarakham University (2023), 
Thailand. He is currently an Assistant Professor of Electronics Engineering at Sakon

---

### Halaman 17

iJOE | Vol. 21 No. 6 (2025)	
International Journal of Online and Biomedical Engineering (iJOE)	
35
IoT-Based Smart Walking Assistant for Fall Detection in the Elderly
Nakhon Rajabhat University, Thailand. His research interests include sensor sys-
tem and renewable energy applied in agricultural systems (E-mail: kongphope@
snru.ac.th).
Sanya Kuankid received B.Eng. degree in Electronics Engineering from King 
Mongkut Institute of Technology Ladkrabang (1999), M.Eng. degree in Electrical 
Engineering from King Mongkut’s University of Technology Thonburi (2004), and 
Ph.D. degree in Electrical and Computer Engineering from Mahasarakham University 
(2015), Thailand. He is currently an Associate Professor of Electronics Engineering at 
Nakhon Pathom Rajabhat University, Thailand. His main topic of research is closely 
related with a background of embedded microprocessor system, IoTs applications 
and renewable energy applied in agricultural systems (E-mail: sanya@webmail.
npru.ac.th).
