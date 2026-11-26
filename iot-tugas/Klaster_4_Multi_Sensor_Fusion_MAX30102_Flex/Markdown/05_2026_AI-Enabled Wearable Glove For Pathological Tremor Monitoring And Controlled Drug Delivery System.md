# AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System

> **Klaster Literatur:** Klaster 4: Multi-Sensor Fusion (MPU6050 + MAX30102 / Flex Sensor)  
> **Penulis:** Lakshmi Priya S, Akshaya Devi S G, Ooshnara Roshini M, Sivashree R, G. Saravanan  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Journal of Drug Delivery Technology  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.25258/ijddt.16.27s.103](https://doi.org/10.25258/ijddt.16.27s.103)  

---

## 📌 Abstrak / Intisari Ilmiah
The smart tremor glove represents a novel iot-based wearable device that can not only detect the shaking of hands but also support in reversing the tremor symptoms of patients with neurological disorders levels such as parkinsons disease and essential tremor. These involuntary, rhythmic movements, can make it difficult for people to do their daily activities such as writing, eating, or holding objects, thereby leading to the decline of their quality of life. This work employs esp32 microcontroller as its main processing unit. An mpu6050 sensor having both an accelerometer and a gyroscope functionalities for tracking hand movement and tremor patterns is supported by max30102 sensor that measures physiological signals such as heart rate and oxygen saturation (spo). The data from sensors are processed by the esp32 in order to detect the abnormal tremors. Once the tremors are detected, the esp32 controller issues a command to a relay module which then supplies power to a coin vibration motor. This vibration acts as a haptic signal to the user which may help in balancing the hand and reducing the tremor effects. The system is powered by a li-ion battery, so the device is portable and suitable for wearable applications

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

RESEARCH PAPER 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 885 
 
AI-Enabled Wearable Glove For Pathological Tremor Monitoring And 
Controlled Drug Delivery System 
 
Ms. Lakshmi Priya S1*, Akshaya Devi S G2, Ooshnara Roshini M3, Sivashree R4, G. 
Saravanan5 
1* Assistant Professor, Department Of Biomedical Engineering, V.S.B. Engineering College, Karur 639111, India. 
Email: layasaravanan22@gmail.com 
2,3,4 Ug Student, Department Of Biomedical Engineering, V.S.B. Engineering College, Karur, India. 
5 Professor, Department Of Electrical And Electronics Engineering, V.S.B. Engineering College, Karur 69111, India. 
Email: negasaran2009@gmail.com 
Corresponding Author: Ms. Lakshmi Priya S, Email: layasaravanan22@gmail.com 
 
Received: 20th Feb, 2026; Revised: 4th Mar, 2026; Accepted: 25th Mar, 2026; Available Online: 10th Apr, 2026 
 
Abstract 
The smart tremor glove represents a novel iot-based wearable device that can not only detect the shaking of hands but 
also support in reversing the tremor symptoms of patients with neurological disorders levels such as parkinsons disease 
and essential tremor. These involuntary, rhythmic movements, can make it difficult for people to do their daily activities 
such as writing, eating, or holding objects, thereby leading to the decline of their quality of life. This work employs esp32 
microcontroller as its main processing unit. An mpu6050 sensor having both an accelerometer and a gyroscope 
functionalities for tracking hand movement and tremor patterns is supported by max30102 sensor that measures 
physiological signals such as heart rate and oxygen saturation (spo). The data from sensors are processed by the esp32 in 
order to detect the abnormal tremors. Once the tremors are detected, the esp32 controller issues a command to a relay 
module which then supplies power to a coin vibration motor. This vibration acts as a haptic signal to the user which may 
help in balancing the hand and reducing the tremor effects. The system is powered by a li-ion battery, so the device is 
portable and suitable for wearable applications. 
Keywords: Pathological Tremor, Parkinson'S Disease, Smart Drug Delivery, Controlled Drug Release, Wearable 
Healthcare Devices, Artificial Intelligence (Ai), Internet Of Things (Iot), Personalized Medicine. 
How To Cite This Article: Lakshmi Priya S, Akshaya Devi Sg, Ooshnara Roshini M, Sivashree R, Saravanan G. Ai-
Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System. Int J Drug Deliv 
Technol. 2026;16(27s):885-892. Doi: 10.25258/ijddt.16.27s.103 
I. Introduction 
Neurological disorders like Parkinson's disease and 
Essential Tremor (ET) lead to shaking of the hands that 
are not controlled by the person. Such tremors can make 
functioning in daily life a challenge e.g. writing eating and 
holding objects. Tremors may impact patients' lives down 
to their very quality of life; also, tremors may escalate 
being influenced by stress or other physiological 
conditions. Wearable technologies as well as sensor-based 
monitoring systems assist not only in the early detection 
but also in the management of tremor disorders, according 
to numerous studies. 
Development of smart healthcare devices for continuous 
patient monitoring was made possible by recent advances 
in wearable sensors, Internet of Things (IoT), and 
biomedical 
signal 
processing. 
Body 
movements 
measurement and tremor detection are the common 
applications of accelerometers and gyroscopes. Besides 
monitoring body movement, physiological sensors are 
also capable of monitoring the health parameters such as 
heart 
rate 
and 
oxygen 
saturation 
[9][13]. 
Most 
importantly, 
such 
technologies 
enable 
real-time 
monitoring and substantially increase the accuracy of 
tremor assessment of patients with neurological disorders 
[14][24]. This project introduces a Smart Tremor Glove 
that could detect and control hand tremors through 
wearable sensor technology. It comprises an ESP32 
microcontroller, an MPU6050 motion sensor, and a 
MAX30102 physiological sensor for tracking hand 
movement and health signals. The data collected is then 
analyzed to detect abnormal tremor patterns. If tremors 
are identified, a coin vibration motor is switched on by a 
relay module to give haptic feedback and assist in hand 
stability. This gadget is battery-operated with a Li-battery, 
which makes it mobile and convenient for everyday use. 
Besides monitoring tremors, wearable systems like these 
offer non-invasive, inexpensive, and real-time solutions 
for management as well [15][23][25]. 
II. Literature Review

---

### Halaman 2

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 886 
 
Monitoring physiological parameters such as tremor 
activity, heart rate, and blood oxygen saturation is vitally 
important when it comes to assessing neurological and 
emotional conditions. Here, we delve into wearable health 
monitoring systems, tremor detection technologies, pulse 
oximetry, based devices, and IoT, enabled assistive 
healthcare solutions.  
2.1 Existing Tremor Detection Technologies  
The tremor detection systems can be a great help to 
medical practitioners in diagnosing Parkinsons disease 
and essential tremor among other neurological conditions.  
2.1.1 Accelerometer, Based Tremor Monitoring  
A lot of research work is done using MEMS, based 
accelerometers (e.g., MPU6050) for detecting the 
frequency and amplitude of the hand movement. The 
quantitative data obtained by these sensors allow for 
analyzing the severity of the tremor as well as motor 
instability. Unfortunately, the majority of such systems 
are confined to laboratory environments and do not 
consider integration with other physiological parameters 
[1].  
2.1.2 Gyroscope and Motion Sensor Integration  
More sophisticated systems enhance the accuracy of 
motion tracking by combining accelerometers with 
gyroscopes. These wearable devices can even classify 
tremors more accurately but, generally, they only focus on 
movement without considering cardiovascular indicators 
[2].  
2.2 Pulse and SpO Monitoring Systems  
Pulse oximetry is a non, invasive technique that is 
employed in both clinical and home healthcare 
environments.  
2.2.1 
Photoplethysmography 
(PPG), 
Based 
Measurement  
Pulse oximeter sensors MAX30100 and MAX30102, for 
instance, measure oxygen saturation and heart rate 
through the principle of light absorption. These sensors 
are very small and thus ideal for wearable devices. 
Nevertheless, pulse oximeters, when used alone, don't 
give information about possible motor dysfunctions or 
even emotional stress factors [3].  
2.2.2 Wearable Cardiovascular Monitoring Devices  
Smartwatches and wristbands can track a person's heart 
rate and are common tools for that purpose. Although they 
allow for continuous monitoring, they are mainly intended 
for fitness purposes and hence do not have clinical 
integration with the neurological assessment tools [4].  
2.3 Microcontroller, Based Wearable Health Systems  
The use of embedded systems has made it possible to 
process biomedical sensor data in real, time. 
2.3.1 Arduino and ESP-Based Monitoring Systems  
Low cost, low power consumption, and easy integration 
are some of the reasons why Arduino and ESP32 
microcontrollers are the most popular solutions for the 
development of wearable biomedicine applications. Some 
authors have even come up with IoT, based health 
monitoring systems that wirelessly transmit the state of 
the patient for a remote check, up [5]. 
2.3.2 Multi, Sensor Integration Challenges  
On the one hand, the use of an individual sensor for either 
tremor or pulse monitoring is quite straightforward. On 
the other hand, the combination of multiple sensors in one 
wearable device to perform different functions at the same 
time is difficult due to issues such as signal noise, 
synchronization problems, motion artifacts, and power 
management constraints [6].  
2.4 IoT, Enabled Assistive Healthcare Systems  
Internet of Things (IoT) applications can play an 
important role in the monitoring of patients remotely and 
have a significant impact on the early detection of 
abnormalities.  
2.4.1 Real, Time Remote Monitoring  
The biomedical data can be transmitted in real time 
through cloud platforms such as Blynk and ThingSpeak. 
Besides, these platforms also provide functionalities that 
bring a lot of convenience to the carers, such as remote 
access to the patients medical records and notification of 
the occurrence of an emergency [7]. 
2.4.2 Data Security and Reliability Concerns  
However, data privacy, wireless connectivity reliability, 
and secure data transmission issues still remain major 
challenges for healthcare applications of IoT technologies 
[8].  
2.5 Limitations of Existing Systems  
The following are some of the limitations identified from 
the existing literature: Most tremor detection systems do 
not record cardiovascular parameters.Standalone pulse 
oximeters are incapable to physiological stress with motor 
abnormalities.Many wearable devices are intended for 
fitness only.There is no integrated real, time analysis of 
conversational or emotional interactions.Avery limited 
focus 
on 
mentally 
handicapped 
victims 
and 
communication, related stress monitoring. 
2.6 Proposed Smart Glove-Based Monitoring System  
To address the above, mentioned constraints, the proposed 
smart glove system integrates an accelerometer, based 
tremor detection module with a pulse oximeter sensor for 
simultaneous SpO and heart rate monitoring. The system 
is operated by a microcontroller, allows real, time data 
analysis, and offers IoT connectivity as an option. When 
neurological and cardiovascular indicators are combined 
in the same wearable glove, the system can give a much 
more thorough communication physiological evaluation,

---

### Halaman 3

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 887 
 
thereby enabling the caregiver to effectively recognize 
stress, anxiety, source deficiency, or neurological 
etiology. 
III. CHALLENGES IN SMART GLOVE-BASED 
TREMOR, 
SpO 
AND 
PULSE 
MONITORING 
SYSTEM 
The idea of a multipurpose clever glove to control tremor, 
blood oxygen saturation (SpO), and pulse rate is a truly 
fascinating one. Still, there are many different challenges 
technical and practical as well that one will have to go 
through to make such a device work well, be reliable, 
accurate, and comfortable to use [1].  
3.1 Sensor accuracy and signal noise 
3.1.1 Motion artifacts in SpO2 measurement 
The glove can't really stay still when a person is talking, 
so the pulse oximeter might get 'confused' a bit because of 
the hand moving and give inaccurate readings [2]. Too 
much hand movement can cause the SpO2 and heart rate 
readings to be wrong.  
3.1.2 Tremor signal filtering 
Figuring out whether the hand was moving on purpose or 
if the person just has a tremor is a problem, in fact, it's 
quite a difficult problem. In order to prevent false tremor 
detection, filtering algorithms must be properly designed 
[3].  
3.2 Multi, sensor integration complexity 
3.2.1 Synchronization of sensor data 
The three sets of data: tremor, pulse rate, and SpO, need to 
be gathered and processed together in real time. Making 
these signals work together seamlessly is a very difficult 
task [4].  
3.2.2 Microcontroller processing limitations 
An inexpensive microcontroller, like Arduino, may have 
restrictions in terms of memory and processing power 
when handling continuous multi, parameter data [5].  
3.3 Power management and battery life 
3.3.1 Continuous monitoring power consumption 
Devices such as the MAX30102 and MPU6050 always 
draw power. The problem is to keep the device unplugged 
as long as possible without sacrificing the performance 
[6]. 
3.3.2 Heating and Safety Concerns 
 Wearable electronics that are used for a long time can 
cause the body to heat up slightly. It is important that this 
heat generation is kept to a minimum for the safety of the 
users [7]. 
3.4 Wearability and User Comfort 
3.4.1 Ergonomic Design 
For the glove to be usable by mentally disabled people, it 
is necessary that it is not only light but also flexible and 
comfortable. If there are any oversized components, then 
that will most likely lead to less usability [8].  
3.4.2 Sensor Placement Accuracy 
When determining SpO levels, one of the factors 
contributing to an inaccurate result is the wrong 
positioning of the sensor on the finger. In addition to 
being non, restrictive, the position has to be firm in order 
to achieve quality and consistency [2].  
3.5 Data Interpretation and Clinical Validation 
3.5.1 Differentiating Stress from Medical Conditions 
A high number of heartbeats per minute is just one of the 
effects of a panic state, however, other causes such as 
happiness and even sport could also result in the same 
effect. This information in itself is meaningless and the 
device should therefore be able to tell the difference 
between the two situations, one being normal emotional 
stress, and the other one medical abnormalities [9].  
3.5.2 Need for Clinical Testing 
The system should be properly tested, and results 
compared and calibrated with those of medical, grade 
equipment for the reliability to be guaranteed [10].  
3.6 IoT Connectivity and Data Security (If Wireless is 
Used) 
3.6.1 Network Reliability 
Communication which is based on wireless technology 
may not go through if the signal is weak in the area thus 
real, time monitoring may be compromised [11].  
 
3.6.2 Data Privacy and Security 
Health data is sensitive information and thus a high level 
of encryption as well as secure methods of data 
transmission must be ensured [12].  
3.7 Ethical and User Sensitivity Concerns 
Mentally disabled people cannot be treated like an 
ordinary user. On the one hand, their care should be 
conducted properly [13]. 
IV.    EXISTING SOLUTIONS AND THEIR 
LIMITATIONS 
4.1 Conventional Physiological Monitoring Systems  
It is a general fact that most existing health monitoring 
systems only record a single physiological parameter, 
such as heart rate, SpO, or motion, separately [1], [2]. 
Such systems can be found in hospitals and consumer 
wearable devices. However, these becomes a problem for 
mentally 
disabled 
individuals 
during 
real, 
time 
conversations when physiological and motion monitoring 
need to be carried out simultaneously [3].  
4.1.1 Standalone Pulse Oximeters  
Pulse oximeters are commonly used devices for heart rate 
and blood oxygen saturation (SpO) monitoring through 
photoplethysmography (PPG) [4]. Their cardiovascular 
readings are quite accurate and thus, they are mainly used 
for clinical assessment of a patient over a short period of 
time. And so, they dont possess the tremor monitoring

---

### Halaman 4

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 888 
 
function. Moreover, pulse oximeters have to be still very 
close to the body and at rest for the accurate reading, as 
the motion artifacts have a major impact on the quality of 
the signal [4], [5]. That is to say, the application of the 
pulse oximeters for the continuous monitoring during 
interactive communication is virtually impossible.  
4.1.2 Fitness, Based Wearable Devices 
A smartwatch or fitness band is able to track heart rate 
and to some extent, even SpO levels [6]. Nevertheless, 
these gadgets are mainly meant for the fitness purpose 
rather than medical, grade evaluation. Besides, they dont 
have the special tremor analysis features and they dont 
associate physiological signals with neurological disorders 
[2], [6]. Therefore, their potential to be diagnostic is 
somewhat 
limited 
in 
complex 
health 
monitoring 
situations.  
4.1.3 Tremor Detection Devices  
A few wearable and laboratory, grade systems harness 
accelerometers 
and 
gyroscopes 
to 
detect 
tremors 
[7]. These devices are capable of accurately measuring 
Parkinsonian 
tremors 
and 
other 
movement 
disorders. However, such devices mostly concentrate on 
motion analysis only and hence do not include 
cardiovascular monitoring [7], [8]. This limits their 
potential in delivering comprehensive health evaluation.  
4.2 Limitations of Existing Technologies 
 4.2.1 Single, Parameter Monitoring  
Most devices are capable of providing information 
regarding only one physiological parameter at a time, e.g., 
pulse rate or tremor level [1]. These types of systems do 
not provide integrated multi, parameter analysis.  
4.2.2 Lack of Real-Time Correlation  
It is generally the case that the systems available in the 
market do not relate the occurrence of tremors to changes 
in pulse rate and oxygen saturation that are taking place at 
the same time [2], [9]. Not having a synchronized multi, 
sensor analysis of the data results in difficulty in 
identifying the cause of the symptoms.  
4.2.3 Limited Focus on Mentally Disabled Individuals  
The majority of commercially available wearable devices 
are meant for use by the general population and hence 
they do not take into account the specific issues related to 
communication and behavior of mentally disabled 
individuals [10].  
4.2.4 Absence of Automated Analysis  
Many monitoring devices are only capable of showing the 
raw data without any intelligent interpreting, risk 
classification, or the feature of generating alerts for stress, 
anxiety, or neurological abnormalities [3], [6].  
4.2.5 Comfort and Usability Issues  
Most of the time, clinical monitoring equipment is big and 
uncomfortable, so it is not suitable for long, term wear 
[8]. This makes it less feasible to use regularly and 
interact with it continuously throughout the day. 
V. DESIGN AND ARCHITECTURE 
The proposed Tremor Glove Smart Monitoring System is 
a wearable and real-time device that merges tremor 
detection with physiologic monitoring. The system 
follows a three-tier architecture consisting of a sensing 
layer, processing layer, and output/communication layer, 
which helps in efficient data gathering, analysis, and 
response [8]. The MPU6050 accelerometer and gyroscope 
sensor is used at the sensing layer to detect hand 
movements and tremor patterns by measuring acceleration 
and angular velocity. 
Micro-electromechanical systems (MEMS)-based sensors 
have emerged as a highly effective solution because of 
their incredible sensitivity combined with a very small 
size that makes them extremely suitable for wearable 
devices [7][13]. Similarly, a MAX30102 PPG sensor is 
utilized in a surgical setup to accurately monitor 
heartbeats and oxygen saturation (SpO2) by means of 
light-based detection technique thus it becomes possible 
to have a non-invasive cardiovascular monitoring without 
interrupting the body [24]. These sensors are designed to 
continuously monitor and record the user's activities along 
with physiological changes. For the processing layer, 
ESP32 microcontroller is used to handle the sensor data 
acquisition. Signal conditioning and filtering by ESP32 
are performed to eliminate noise and unnecessary motion 
artifacts. Besides, if combined with proper algorithms, it 
can detect tremor frequency, extract heart rate, and 
estimate SpO levels. Only after obtaining and comparing 
with preset thresholds, the identification of abnormal 
tremors and/or body conditions that are unhealthy can be 
done [15][23]. Low power consumption and real-time 
processing support are the major reasons why ESP32 
microcontroller is one of the embedded devices popularly 
used in wearable devices [24]. As far as output and 
communication layer are concerned, a compact coin 
vibration motor that produces haptic feedback when 
abnormal tremors are detected has been chosen, thus the 
haptic feedback assists in hand stabilization as well.A 
relay module is used for managing the operating states of 
the motors. Besides, the system can establish a Bluetooth 
(BLE) communication link for transmitting user's health 
data to a mobile device or to a monitoring dashboard for 
remote monitoring. Furthermore, the system is powered 
by a Li-battery, a feature that contributes to the portability 
and continuous functioning of the solution [14]. 
The modular and scalable design of this system, not only 
enhancing the overall reliability. But also it makes the 
system capable of performing continuously monitoring for 
a long time. The Smart Tremor Glove is a comfortable,

---

### Halaman 5

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 889 
 
portable, and non-invasive device that assists in detecting 
tremors and at the same time monitors the physiological 
conditions live [25] 
5.1 Block Diagram : 
 
5.2 Key Features 
5.2.1 Non-Invasive Multi-Parameter Monitoring  
In order to monitor physiological parameters, Smart 
Tremor Glove uses only non-invasive sensing techniques, 
thus 
discomfort 
is 
not 
caused 
at 
all. 
The 
photoplethysmography (PPG) sensor MAX30102 is an 
optical-based device that without a doubt is the safe 
method of cardiovascular monitoring, the number of 
heartbeats and blood oxygen saturation level (SpO2) are 
both measured by this device [24]. 
Then the sensor MPU6050 is a combination of an 
accelerometer and a gyroscope that record the acceleration 
and the angular velocity, thus the hand movements and 
tremor 
patterns 
can 
be 
detected 
[7][13]. 
Also, 
compactness and lightness of these sensors are amongst 
their advantages that make them handy for continuous 
usage without limiting the natural movements of the hand 
[9].  
5.2.2 A dual analysis of tremor and cardiovascular 
performance 
Unlike standard, single parameter systems, this one is 
capable of performing concurrent analysis of tremor 
activity and cardiovascular parameters of heart rate, and 
SpO level. Concomitant co-occurrence of various 
physiological signals not only makes the diagnosis more 
accurate but also helps to reveal the association between 
neuronal tremors and cardiovascular changes [8][24]. 
Moreover, 
this 
integrated 
method 
provides 
a 
comprehensive examination of the patient's condition and 
therefore, it is a trustworthy way of health monitoring 
[25]. 
5.2.3 Real-Time Processing and Instant Feedback 
Operating on an ESP32 microcontroller, this system can 
constantly and immediately process sensor data without 
any break. The application of different signal processing 
methods has made the system capable of detecting 
abnormal conditions, e.g. very high tremor frequency or 
irregular heartbeat. To provide sensory, tactile feedback 
instantly, relay-operated few coin vibration motors are 
used in the system. Immediate actions and continuous 
monitoring are the two main dependences of real-time 
response of a wearable healthcare system [15][14]. 
 
5.2.4 Portable, Low-Cost, and Wearable Design 
The entire device is conceived with the idea of small size 
and cheap components, e.g. ESP32, MPU6050, and 
MAX30102 sensors. These parts have enabled the 
creation of a highly affordable system not only for home 
use but also for large-scale clinical use [23]. The design of 
the glove is meant to keep the wearer comfortable, allow 
him/her to move freely, and at the same time, person the 
wearer a simple tool for daily use. Being modular, it is 
also quite straightforward to add bigger number of the 
sensors to the system as per the requirements [24]. 
5.2.5 Assistive and Ethical Healthcare Application 
The Smart Tremor Glove can be a supportive aid for the 
patients with neurological disorders by monitoring their 
health condition. It can help in getting the abnormal 
conditions detected early to put patients on a path of 
timely medical attention. However, the device can never 
replace a professional medical diagnosis. Besides, the 
system puts great emphasis on data privacy, security, and 
ethical use of health information, which are crucial 
components of IoT-based healthcare systems [8]. 
VI. 
IMPLEMENTATION 
AND 
SYSTEM 
CONFIGURATION 
6. 1 Physiological and Motion Sensors Installation: 
The concept of a Smart Tremor Glove is to embed non-
invasive sensors inside a glove which acts as a wearable 
device for recording tremors and physiological data.To 
measure hand movement, angular velocity, and tremor 
frequency, the MPU6050 accelerometer, and gyroscope 
sensor are attached to the back of the glove.The 
MAX30102 pulse oximeter sensor which is based on PPG 
technology for measuring heart rate and SpO2 is placed at 
the fingertip. Moreover, sensor placement is very 
 
LI - BATTERY 
MPU6050 
( MOTION ) 
MAX30102 
( PULSE / SP02) 
ESP32 
DATA 
PROCESSING 
RELAY 
MODULE 
COIN VIBRATION 
MOTOR 
BLUETOOTH 
( BLE ) 
MOBILE / 
DASHBOARD

---

### Halaman 6

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 890 
 
important not only from the point of view of skin contact 
and comfort of the user but also in terms of effective 
acquisition of data in real-time under normal conditions 
[7][24]. 
6.2 Real-Time Data Collection and Monitoring: 
Sensor 
data 
are 
being 
continually 
stored, 
and 
communication is established through the ESP32 
microcontroller which employs the I2C communication 
protocol.MPU6050 
yields 
motion 
data, 
whereas 
MAX30102 offers heart rate and blood oxygen levels. 
Through real-time monitoring a person can be alerted of 
sudden changes such as an increase in tremor frequency, 
an irregular pulse rate, or a decrease in SpO2 level, which 
are possible indicators of stress or a neurological disorder 
[14][22]. 
6.3 Multi-Parameter Analysis and Processing 
Using built-in algorithms, the ESP32 decodes the 
collecting 
data. 
Tremor 
frequency 
is 
scrutinized, 
physiological 
parameters 
are 
contrasted 
with 
predetermined normal ones. Each parameter is followed 
up, and abnormal deviations lead to identification of 
unhealthy ones. Such multi-parameter analysis is an 
effective way of increasing the accuracy as it integrates 
motion and physiological signals rather than relying on 
just one parameter [15][23]. 
6.4 Detection and Response Mechanism 
Upon analyzing the data, the system decides whether the 
condition is normal or abnormal. Detecting abnormal 
tremors or physiological changes invokes the system to 
switch on a relay module to run a coin vibration motor, 
which is a haptic feedback in the form of a nudge to the 
hand that is being used for the tremor to help stabilizing it. 
This is a primary function of the system which allows it to 
assist the user at the right time and with the right help 
[15][24]. 
6.5 Output and Alert System 
The system communicates via a vibration motor and there 
is an option to include indicators like LEDs or buzzer 
alerts when a time for an abnormal condition. Besides 
this, health data can be sent through Bluetooth (BLE) to a 
mobile device or a monitoring station to be visually 
observed in real time. This is a step forward in enhancing 
awareness 
and 
providing 
support 
for 
continuous 
monitoring [14]. 
SYSTEM CONFIGURATION:  
The Smart Tremor Glove is an innovative wearable device 
that is small, consumes very little power, and yet helps in 
the real-time monitoring of tremor and physiological 
parameters. At its core lies an ESP32 microcontroller, the 
brain of the system, which performs sensor data 
acquisition, 
processing, 
and 
control 
operations 
continuously.  
Monitoring motion is established through MPU6050, 
whereas heart rate and SpO2 monitoring are ensured by 
MAX30102 utilizing the I2C protocol. The MPU6050 is a 
combination of a 3-axis gyroscope and a 3-axis 
accelerometer. It outputs rate of change of angular position 
and acceleration respectively. Unlike the gyroscope, the 
accelerometer can be used to sense a static orientation.  
Together, the data from these two sensors can be used to 
detect tremors.Moreover, the MAX30102, which is a pulse 
oximetry and heart rate monitor module, is used in the 
monitoring of the cardiovascular system by sensing the 
amount of light absorbed by the skin. Some of the main 
reasons why the choice of the sensor in the project was 
made have been discussed in the paper, which included the 
fact that the sensor was extremely small in size, consumed 
less power, and gave very accurate results [7][24].  
The glove is also equipped with a coin vibration motor 
relay, which is activated in the event that abnormal health 
conditions such as excessive tremors or irregular heart 
rates are sensed by the system. 
In addition to this, the system is able to send the data to a 
mobile device using Bluetooth connectivity, which could 
alert the patient as well as store the data for future use 
[14][25]. The programming instructions which control the 
system in the execution of the required operations are done 
using Embedded C programming, which is then compiled 
using Arduino IDE. In addition to the fact that the system 
is able to process the operations very effectively, it is also a 
gel pack which is battery-operated using a rechargeable Li-
batte 
 
 
VII. RESULTS AND DISCUSSIONS 
7.1 Performance Comparison

---

### Halaman 7

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 891 
 
 
VIII.CONCLUSIONS 
The Smart Tremor Glove is an Internet of Things (IoT) 
wearable device designed to identify and control tremors 
in the hands of people suffering from neurological 
conditions such as Parkinson's Disease and Essential 
Tremor. It integrates motion detection through the 
MPU6050 sensor and health tracking through the 
MAX30102 sensor. In addition, it uses the ESP32 
microcontroller for processing and analyzing data in real-
time. 
 
The system is capable of detecting abnormal tremor 
patterns and physiological changes accurately by 
analyzing multiple parameters at the same time. On 
detecting abnormalities, the system can alert the users 
immediately by activating a coin vibration motor, which 
can help the users to stabilize their hands and raise their 
awareness of the situation. The device is also equipped 
with Bluetooth capability, enabling it to send real-time 
data for remote monitoring and analysis. Its non-invasive 
configuration ensures comfort to the user whereas the use 
of inexpensive components makes it affordable and within 
reach. 
 
To summarize, the Smart Tremor Glove provides a 
portable, dependable, and inexpensive alternative for 
uninterrupted tremor monitoring and management. It 
facilitates early recognition of neurological disorders, 
raises patient safety levels, and offers continuous health 
care monitoring. Going forward, this system can be 
enhanced with features like cloud integration, mobile 
applications, and AI-based analysis to increase its 
precision and overall performance.  
REFERENCES 
[1] Schifino, G. P., et al., “Smartwatch Sensors for 
Tremor Assessment in Parkinson’s Disease,” Sensors, 
2025. 
[2] Ali, S. M., et al., “Wearable Accelerometer and 
Gyroscope Sensors for Estimating the Severity of 
Essential Tremor,” IEEE Journal of Translational 
Engineering in Health and Medicine, 2023. 
[3] Papadopoulos, A., et al., “Detecting Parkinsonian 
Tremor from IMU Data using Deep Learning,” arXiv, 
2020. 
[4] Bremm, R. P., et al., “TreCap: A Wearable Device to 
Measure Tremor Data of Hand Movements,” arXiv, 2021. 
[5] Aueawattthanaphisut, A., et al., “Neurotremor: A 
Wearable Device for Upper Limb Muscle Support,” 
arXiv, 2025. 
[6] Srichaisak, T., et al., “Clinic-Oriented Feasibility of a 
Sensor-Fused Wearable for Upper Limb Function,” arXiv, 
2025. 
[7] Delrobaei, M., et al., “Quantitative Evaluation of 
Parkinson’s Tremor Using Wearable Sensors,” IEEE 
Transactions on Biomedical Engineering, 2018. 
[8] Patel, S., et al., “A Review of Wearable Sensors and 
Systems for Monitoring Parkinson’s Disease,” IEEE 
Transactions on Information Technology in Biomedicine, 
2012. 
[9] Rovini, E., et al., “Wearable Sensors for Parkinson’s 
Disease Monitoring,” Sensors, 2017. 
[10] Zwartjes, D., et al., “Ambulatory Monitoring of 
Activities and Motor Symptoms in Parkinson’s Disease,” 
IEEE Transactions on Biomedical Engineering, 2010. 
[11] Salarian, A., et al., “Ambulatory Monitoring of 
Physical Activities in Parkinson’s Disease,” IEEE 
Transactions on Biomedical Engineering, 2007. 
[12] Bonato, P., “Wearable Sensors and Systems in 
Rehabilitation,” IEEE Engineering in Medicine and 
Biology Magazine, 2010. 
[13] Godfrey, A., et al., “Direct Measurement of Human 
Movement by Accelerometers,” Medical Engineering & 
Physics, 2008. 
[14] Lonini, L., et al., “Wearable Sensors for Parkinson’s 
Disease Monitoring at Home,” IEEE Journal of 
Biomedical and Health Informatics, 2018. 
[15] Jeon, H., et al., “Real-Time Tremor Detection using 
Accelerometer Signals,” Biomedical Signal Processing 
and Control, 2020. 
[16] Shull, P. B., et al., “Wearable Sensors for Monitoring 
Motor 
Disorders,” 
IEEE 
Reviews 
in 
Biomedical 
Engineering, 2014. 
[17] Patel, S., et al., “Monitoring Motor Fluctuations in 
Parkinson’s Disease using Wearable Sensors,” IEEE 
Transactions on Information Technology in Biomedicine, 
2009. 
[18] Kwon, Y., et al., “Analysis of Tremor Characteristics 
in Parkinson’s Disease using Wearable Sensors,” Journal 
of Neuroscience Methods, 2015. 
 
Parameter 
Existing Tremor Monitoring Systems 
Proposed Smart Tremor Glove System 
Detection Method 
Separate devices for tremor detection or pulse 
monitoring 
Integrated monitoring of tremor, heart rate, and 
SpO₂ in a single wearable glove 
Invasiveness 
Non-invasive but uses multiple separate 
devices 
 
Completely non-invasive and integrated into a 
single wearable device 
 
Response Time 
Real-time monitoring for single parameter 
only 
Real-time monitoring and analysis of multiple 
parameters simultaneously 
Automation 
Limited; mainly displays raw sensor values 
Automatic detection of abnormal tremors and 
physiological changes with feedback 
Continuous 
Monitoring 
Limited due to bulky devices and movement 
restrictions 
 
Continuous 
and 
comfortable 
monitoring 
through wearable glove design 
Alert System 
Mostly visual display only 
Vibration feedback (haptic alert) along with 
optional indicators 
Remote Monitoring 
Available only in advanced systems 
 
Supports Bluetooth-based real-time remote 
monitoring 
Cost 
Moderate to high due to multiple devices 
Low-cost solution using integrated components 
Scalability 
Limited and difficult to expand 
Easily expandable with additional sensors and 
IoT features

---

### Halaman 8

AI-Enabled Wearable Glove For Pathological Tremor Monitoring And Controlled Drug Delivery System 
 
 
IJDDT, Volume 16 Issue 27s, 2026 
Page 892 
 
[19] 
Heldman, 
D., 
et 
al., 
“Quantitative 
Tremor 
Assessment using Wearable Technology,” Movement 
Disorders Journal, 2011. 
[20] Tzallas, A. T., et al., “Automatic Detection of 
Parkinson’s Disease using Signal Processing Techniques,” 
IEEE Transactions on Information Technology in 
Biomedicine, 2012. 
[21] Giuffrida, J. P., et al., “Objective Measurement of 
Motor Symptoms in Parkinson’s Disease,” Movement 
Disorders, 2009. 
[22] Del Din, S., et al., “Free-Living Monitoring of 
Parkinson’s Disease using Wearable Sensors,” Journal of 
Neurology, 2016. 
[23] Yang, C. C., and Hsu, Y. L., “A Review of 
Accelerometry-Based 
Wearable 
Motion 
Detectors,” 
Sensors, 2010. 
[24] Majumder, S., et al., “Smart Wearable Sensors for 
Health Monitoring,” IEEE Reviews in Biomedical 
Engineering, 2017. 
[25] ELENA Project, “Wearable IoT Device for 
Quantitative Assessment of Hand Tremors in Parkinson’s 
Disease,” Sensors Journal, 2024.
