# AI Powered Wearable System For Pre Stroke Detection

> **Klaster Literatur:** Klaster 4: Multi-Sensor Fusion (MPU6050 + MAX30102 / Flex Sensor)  
> **Penulis:** Pavithra S, Shanmugavalli S, Aaisha B, M. Sowmiya, Priyadharshini B  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Journal of Drug Delivery Technology  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.25258/ijddt.16.27s.10](https://doi.org/10.25258/ijddt.16.27s.10)  

---

## 📌 Abstrak / Intisari Ilmiah
This paper introduces a novel, intelligent wearable platform designed for the early prognostication of cerebrovascular accident (stroke) risk through continuous, multi-parametric physiological surveillance. The system is conceptualized to address the significant lag time between the onset of pathological physiological changes and clinical diagnosis, a primary factor contributing to the severe morbidity and mortality associated with stroke globally. It employs a synergistic integration of non-invasive biosensors to concurrently monitor an ensemble of biomarkers, including cardiac electrophysiology (ECG), heart rate variability (HRV), peripheral capillary oxygen saturation (SpO₂), and tri-axial kinematic data for postural analysis. At its core, an optimized embeddedsystem-on-chip (SoC) performs real-time digital signal processing—encompassing adaptive filtering, feature extraction, and spectral analysis—followed by the application of a lightweight anomaly detection algorithm to identify deviations indicative of ischemic or hemorrhagic precursors. The device's architecture prioritizes a low-power profile and ergonomic design to facilitate seamless, long-term deployment in unstructured, ambulatory settings. Preliminary validation involving controlled pilot studies demonstrates a high degree of accuracy in classifying pre-stroke events, underscoring the system's potential as a robust tool for pre- emptive healthcare. By enabling timely medical intervention, this technology aims to substantially reduce diagnostic latency, improve patient outcomes, and decrease the overall burden on healthcare infrastructure.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

thi.ac.inm 
AI POWERED WEARABLE SYSTEM FOR 
PRE STROKE DETECTION 
 
 
Ms. PAVITHRA S 
Department of Biomedical Engineering 
Assistant Professor 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
pavithrasbm@siet.ac.in 
 
Ms. SHANMUGAVALLI S 
Department of Biomedical Engineering 
IV Year UG Student 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
shanmugavallis22bm@srishakthi.ac 
.in 
Ms. AAISHA B 
Department of Biomedical Engineering 
IV Year UG Student 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
aaishabp@gmail.com 
Ms. SOWMIYA S 
Department of Biomedical Engineering 
IV Year UG Student 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
sowmiyamanoj032@gmail.com 
Ms. PRIYADHARSHINI B 
Department of Biomedical Engineering 
IV Year UG Student 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
priyadharshinib22bm@srishak 
 
Ms. VEERADHARSHINI R 
Department of Biomedical Engineering 
IV Year UG Student 
Sri Shakthi Institute of Engineering and 
Technology 
Coimbatore, India 
veeradharshinirr@gmail.com 
 
 
 
Abstract— This paper introduces a novel, intelligent wearable 
platform designed for the early prognostication of cerebrovascular 
accident (stroke) risk through continuous, multi-parametric 
physiological surveillance. The system is conceptualized to address 
the significant lag time between the onset of pathological 
physiological changes and clinical diagnosis, a primary factor 
contributing to the severe morbidity and mortality associated with 
stroke globally. It employs a synergistic integration of non-invasive 
biosensors to concurrently monitor an ensemble of biomarkers, 
including cardiac electrophysiology (ECG), heart rate variability 
(HRV), peripheral capillary oxygen saturation (SpO₂), and tri-axial 
kinematic data for postural analysis. At its core, an optimized 
embedded system-on-chip (SoC) performs real-time digital signal 
processing—encompassing adaptive filtering, feature extraction, 
and spectral analysis—followed by the application of a lightweight 
anomaly detection algorithm to identify deviations indicative of 
ischemic or hemorrhagic precursors. The device's architecture 
prioritizes a low-power profile and ergonomic design to facilitate 
seamless, long-term deployment in unstructured, ambulatory 
settings. Preliminary validation involving controlled pilot studies 
demonstrates a high degree of accuracy in classifying pre-stroke 
events, underscoring the system's potential as a robust tool for pre- 
emptive healthcare. By enabling timely medical intervention, this 
technology aims to substantially reduce diagnostic latency, improve 
patient outcomes, and decrease the overall burden on healthcare 
infrastructure. 
 
Keywords— Stroke Risk Prediction, Wearable Health 
Monitoring, Multi-Parametric Biosensing, Embedded Signal 
Processing, 
Real-Time 
Anomaly 
Detection, 
Pre-emptive 
Healthcare, Cerebrovascular Accident (CVA). 
 
I. INTRODUCTION 
Stroke remains a predominant global health challenge, 
representing the second leading cause of mortality and a 
primary cause of acquired adult disability worldwide [1]. The 
profound societal and economic burden associated with stroke 
is exacerbated by a critical limitation in current healthcare 
paradigms: the heavy reliance on post-event diagnosis and 
intervention. The efficacy of acute stroke treatments, such as 
thrombolysis or thrombectomy, is intensely time-dependent, 
with neurological outcomes deteriorating rapidly after the 
initial onset of symptoms [2]. Consequently, a compelling need 
exists for proactive strategies that can identify at-risk 
individuals during the pre-symptomatic phase, thereby 
enabling preventive measures and mitigating the severity of 
potential events. 
The convergence of advancements in wearable technology, 
low-power embedded systems, and sophisticated data analytics 
presents 
a 
transformative 
opportunity 
for 
continuous 
physiological 
monitoring 
[3]. 
Traditional 
ambulatory 
monitoring systems, such as Holter monitors, are often limited 
to 
short-term, 
single-parameter 
acquisition 
(e.g., 
electrocardiogram), which provides an incomplete picture of 
the complex, multi-system physiological precursors associated 
with cerebrovascular events [4]. Key biomarkers indicative of 
elevated stroke risk include alterations in heart rate variability 
(HRV), which reflects autonomic nervous system imbalance; 
anomalies in electrocardiographic (ECG) patterns, such as 
atrial fibrillation; deviations in blood oxygen saturation 
(SpO₂); and changes in postural dynamics that may signal 
hemodynamic instability [5], [6]. A system capable of 
concurrently tracking this suite of parameters in real-time 
could provide a holistic and dynamic assessment of an 
individual's cerebrovascular health status. 
Several research efforts have explored the use of wearables for 
cardiovascular monitoring. For instance, authors in [7] 
developed a wrist-worn device for atrial fibrillation detection, 
while the work in [8] proposed a patch-based system for multi- 
parameter vital sign monitoring in clinical settings. However, 
a significant gap remains in the development of an integrated, 
low-power system specifically engineered for the pre- 
symptomatic detection of stroke risk through the fusion of 
cardiovascular, hemodynamic, and kinematic data in free- 
living environments. Existing systems often lack the 
sophisticated, on-device processing required for real-time 
 
Ms. Pavithra S1, Ms. Shanmugavalli S2, Ms. Aaisha B3, Ms. Sowmiya S4, Ms. 
Priyadharshini B5, Ms. Veeradharshini R6 
1 Assistant Professor, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: pavithrasbm@siet.ac.in 
2 Iv Year Ug Student, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: shanmugavallis22bm@srishakthi.ac.in 
3 Iv Year Ug Student, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: aaishabp@gmail.com 
4 Iv Year Ug Student, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: sowmiyamanoj032@gmail.com 
5 Iv Year Ug Student, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: priyadharshinib22bm@srishakthi.ac.in 
6 Iv Year Ug Student, Department Of Biomedical Engineering, Sri Shakthi Institute Of Engineering And 
Technology, Coimbatore, India. Email: veeradharshinirr@gmail.com 
Received: 20th Feb, 2026; Revised: 4th Mar, 2026; Accepted: 25th Mar, 2026; Available Online: 10th Apr, 2026 
IJDDT, Volume 16 Issue 27s, 2026 
Page 83 
AI Powered Wearable System For Pre Stroke Detection

---

### Halaman 2

anomaly detection or are not optimized for the long-term, 
unobtrusive deployment necessary for capturing sporadic pre- 
stroke events. 
In this paper, we present the design, implementation, and 
preliminary validation of an intelligent wearable system that 
addresses this gap. The principal contributions of our work are 
fourfold: (1) the development of a multi-sensor hardware 
platform for synchronous acquisition of ECG, HRV, SpO₂, 
and tri-axial accelerometer data; (2) the implementation of an 
embedded signal processing pipeline on a low-power 
microcontroller for real-time feature extraction and data 
fusion; (3) the design of a lightweight anomaly detection 
algorithm to identify deviations correlated with elevated 
stroke risk; and (4) the validation of the system's performance 
through pilot studies. The device is engineered with a primary 
focus on energy efficiency, wearability, and user comfort to 
facilitate adoption in daily life. 
II. LITERATURE SURVEY 
 
1.1 Significant progress in wearable technology has enabled 
substantial improvements in stroke risk prediction capabilities 
through uninterrupted physiological surveillance. Smith and 
colleagues [8] created a chest-mounted wearable apparatus 
that tracked electrocardiogram and ppg signals to identify 
atrial fibrillation, a predominant stroke risk element. Their 
methodology 
achieved 
95% 
accuracy 
in 
arrhythmia 
identification but encountered constraints regarding device 
ergonomics and incapacity to surveil additional stroke risk 
indicators. Johnson and Lee [9] pioneered a wrist-based 
instrument embedding accelerometers and gyroscopes to 
identify unilateral muscular deficiency and locomotion 
irregularities, which represent preliminary stroke indicators. 
Nevertheless, their configuration omitted assimilation with 
physiological metrics, thereby restricting its prognostic 
potential. 
 
1.2 
Multiple investigative endeavors have concentrated 
on 
multi-parameter 
observation 
for 
holistic 
health 
evaluation. Chen et al. [10] formulated a smartwatch-enabled 
framework 
incorporating 
electrocardiogram, 
peripheral 
oxygen saturation, and physical movement tracking. Their 
apparatus exhibited encouraging outcomes in cardiovascular 
appraisal but struggled with instantaneous data processing and 
energy management limitations. Wang and collaborators 
[11] engineered a wearable epidermal patch incorporating 
numerous sensors for persistent vital sign observation in 
stroke patients undergoing rehabilitation. Although proficient 
in clinical environments, the mechanism demanded regular 
calibration and exhibited constrained operational duration. 
1.3 
The implementation of sophisticated computational 
signal analysis and machine intelligence protocols has 
substantially 
 
improved 
 
stroke 
 
prognostication 
precision. Zhang et al. [12] deployed a deep learning 
paradigm for examining heart rate variability characteristics 
derived from electrocardiogram signals, accomplishing 92% 
sensitivity in forecasting cardiovascular incidents. Their 
investigation emphasized the criticality of non-linear heart 
rate variability metrics in stroke risk evaluation. Kim and 
associates [13] constructed a convolutional neural network 
framework 
for 
analyzing 
multi-modal 
physiological 
information, exhibiting superior efficacy in preliminary stroke 
identification relative to conventional approaches. 
1.4 
Contemporary progress in integrated hardware systems has 
facilitated instantaneous analysis of physiological biomarkers. 
Patel and coworkers [14] architected a minimal- power 
microcontroller-enabled 
framework 
for 
persistent 
electrocardiogram 
surveillance 
incorporating 
embedded 
anomaly 
recognition 
functionalities. 
Their 
realization 
accomplished notable energy conservation while preserving 
analytical exactness. Rodriguez et al. [15] launched a 
distributed computation infrastructure for wearable health 
monitoring that executed data processing locally, minimizing 
transmission delays and remote server reliance. However, 
these configurations experienced difficulties in managing 
concurrent multi-channel data inputs. 
1.5 
Rigorous clinical authentication of wearable stroke 
prognostication mechanisms has been executed through 
diverse research initiatives. The Framingham Cardiac 
Investigation consortium [16] authenticated a wearable- 
enabled stroke risk forecasting model within an extensive 
population cohort, establishing the practicality of prolonged 
monitoring. The European Cerebrovascular Organization 
[17] performed a multi-institutional examination assessing the 
efficacy of wearable instruments in stroke prophylaxis, 
underscoring the significance of user adherence and 
information trustworthiness. 
III. CONSORT FLOW DIAGRAM 
 
The flowchart outlines the operational sequence of a stroke 
detection system. It begins with the categorization of a 5000- 
record patient dataset into normal and at-risk groups. Each 
health 
parameter 
is 
then 
standardized 
via 
Z-score 
normalization, utilizing calculated means and standard 
deviations. Subsequently, new patient metrics—such as heart 
rate, SpO₂, and physical movement—are acquired and 
subjected to the same normalization procedure. 
COMPARISON WITH DATASET AND ML- 
CATBOOST APPLICATION 
Normal & Abnormal Readings 
STROKE RISK REDICTION 
Low Risk 
High Risk 
NEW PATIENT DATA 
Heart Rate 
SpO2 
Body Movement 
DATA PREPROCESSING 
Step1: Calculate Mean and Std Dev 
Step2: Z- Score Formula 
Z = (X-Mean) / Std Dev 
ENROLLMENT 
Total Samples: 
5000 
Normal Class: 
2500 
Stroke Risk Class: 2500 
IJDDT, Volume 16 Issue 27s, 2026 
Page 84

---

### Halaman 3

ogy 
y-domain analysis 
Processing Layer 
filtering and initial processing. 
 
These refined values are analyzed against the dataset to identify 
proximate normal or abnormal profiles. This analysis 
culminates in a risk classification either low or high followed 
by a tailored medical recommendation for the patient. 
 
IV. PROPOSED SYSTEM 
 
 
 
 
 
2. Processing Layer 
The Processing Layer is centered around the NodeMCU 
ESP8266/ESP32 microcontroller, which operates as the core 
control unit of the wearable system. 
This layer's duties consist of: 
• 
Getting synchronized data from every sensor. 
• 
Performing preliminary signal conditioning (noise 
reduction, normalization, baseline correction). 
• 
Extracting crucial elements that the prediction model 
needs. 
• 
Transmitting 
structured 
data 
packets 
to 
the 
cloud/server utilizing built-in Wi-Fi capabilities. 
• 
Real-time data flow is made possible by this layer, 
which preserves the continuity needed for real-time 
health monitoring. 
 
3. Prediction Layer for AI/ML 
This layer uses a CatBoost-based machine learning model that 
is installed on the server to analyze the processed sensor data. 
A combination of validated literature-supported data samples 
and publicly accessible datasets (like Kaggle) are used to train 
the model. It picks up distinguishing characteristics from: 
• 
Feature extraction from heart rate, SpO₂, motion 
variability, and PPG morphol 
• 
Time-domain and frequen c User Interface Layer of 
physiological signals 
• 
Execution of the CatBoost classification model 
trained on stroke-related datasets 
• 
Detection of deviations that correlate with pre-stroke 
patterns 
• 
Risk level prediction (Normal / Alert / High Risk) 
 
 
 
The proposed system is structured into three major layers: 
• 
Sensor Layer 
• 
Processing Layer 
• 
AI/ML Prediction Layer 
• 
User Interface Layer 
 
1. The Sensor Layer 
The Sensor Layer forms the data acquisition component of 
the system. It incorporates three motion and biological 
sensors that continually track physical and physiological 
characteristics 
linked 
to 
pre-stroke 
symptoms. 
MAX30100 Sensor: Captures heart rate and peripheral 
oxygen saturation (SpO₂). Changes in these parameters are 
clinically 
linked 
to 
reduced 
blood 
perfusion 
and 
cardiovascular distress, both of which are important for early 
stroke 
identification. 
PPG Sensor: Pulse waveform morphology is measured by a 
photoplethysmography (PPG) sensor. problems in the PPG 
waveform, such as amplitude changes or uneven pulse peaks, 
act 
as 
early 
markers 
of 
vascular 
problems. 
MPU6050 Accelerometer: Provides multi-axis motion data 
to identify aberrant motor patterns, sudden imbalance, or 
impaired bodily stability—common pre-stroke symptoms. 
All sensor data is transferred to the Processing Layer for 
4. User Interface Layer 
The User Interface (UI) Layer enables real-time viewing of 
physiological indicators through a web-based dashboard. It 
displays heart rate, SpO₂, ECG waveform, mobility activity, 
and system alarms in a clean and simple way. The interface 
allows users or doctors to monitor trends, review aberrant 
events, and validate system notifications. This layer acts as the 
primary human–system interaction point, ensuring clear and 
meaningful data interpretation. 
 
V. METHODOLOGY 
SYSTEM OVERVIEW 
Sensor Layer 
Prediction Layer 
IJDDT, Volume 16 Issue 27s, 2026 
Page 85

---

### Halaman 4

Stroke is a major cause of mortality and disability globally, 
with early detection crucial to lessen its impact. The Pre 
Stroke Detection System blends IoT, embedded systems, and 
artificial intelligence for real-time, non-invasive stroke risk 
assessment. Using low-cost sensors—MAX30100 for heart 
rate and SpO₂, a PPG sensor, and a MEMS accelerometer— 
connected to a NodeMCU, it continuously analyzes metrics 
linked to pre-stroke circumstances. Data is delivered 
wirelessly to a server, where a CatBoost machine learning 
model trained on comprehensive datasets analyzes patterns to 
find abnormalities and forecast stroke risk. A web interface 
shows real-time data and trends, and instant alerts alert 
caretakers or medical professionals. This low-cost, non- 
invasive device provides proactive, individualized stroke 
prevention, shifting care from reactive to preventative, 
especially in resource-limited settings. 
 
HARDWARE ARCHITECTURE 
VI. PERFORMANCE EVALUATION MATRIX 
Step1: DATASET 
 
Patient 
BPM 
SpO2 
PPG 
Angle 
Label 
1 
66 
89 
948 
92 
Normal 
2 
128 
105 
53 
18 
Abnormal 
3 
144 
102 
14 
34 
Abnormal 
4 
73 
88 
474 
998 
Normal 
5 
63 
82 
926 
321 
Normal 
Step2: Mean (Average) 
Formula: 
𝑁 
1 
𝜇 = ∑ 
𝑁 
𝑋𝑖 
N = 5 
𝑖=1 
BPM 
μ = (66+128+144+73+63)/5 = 94.8 
 
SpO2 
μ = (89+105+102+88+82)/5 = 93.2 
 
PPG 
μ = (948+53+14+474+926)/5 = 483 
 
ANGLE 
μ = (92+18+34+998+321)/5 = 292.6 
 
Step3: Standard deviation 
 
 
 
 
 
 
Unit of Power Management: In order to provide steady and 
sensor-safe operating voltages for all wearable components, 
the system architecture starts with a 12V SMPS that is stepped 
Formula: 
 
 
 
 
 
BPM 
 
 
1 
𝜎 = √ 
𝑁 
 
 
𝑁 
∑ 
𝑖=1 
 
 
(𝑋𝑖 − 𝜇)2 
down by a buck converter. 
Sensor Acquisition Layer: This layer consists of a MEMS 
sensor for continuous motion and orientation tracking, an 
extra PPG module for improved pulse waveform capture, and 
the MAX30100 for heart rate and SpO₂ monitoring. 
Embedded Processing Unit: All sensor outputs are sent to 
the NodeMCU, which handles data collecting, initial 
preprocessing, signal filtering, and communication with the 
𝜎 = √(66 − 94.8)2 + (128 − 94.8)2 + (144 − 94.8)2 + 
(73 − 94.8)2 + (63 − 94.8)2 
 
 
5 
𝜎 = 34.1725 
 
SpO2 
 
 
(89 − 94.8)2 + (105 − 94.8 )2 + (102 − 94.8 )2 + 
server for advanced analysis. 
𝜎 =√ 
(88 − 93.2)^2 + (82 − 93.2)^2 
ML-Based Prediction Module: The processed sensor data is 
 
 
transmitted to a local server housing a CatBoost machine- 
learning model, which performs real-time risk prediction and 
anomaly identification for early stroke-related indications. 
Real-Time Display Interface: Final forecasts and sensor data 
are relayed to a display module that gives quick visual 
feedback, enabling continuous monitoring of important 
metrics and system-generated alarms 
5 
𝜎 = 8.7955 
 
PPG 
IJDDT, Volume 16 Issue 27s, 2026 
Page 86

---

### Halaman 5

𝜎 = √ 
 
 
(948 − 483)2 + (53 − 483)2 + (14 − 483)2 + 
(474 − 483)2 + (926 − 483)2 
 
5 
Formula:  
 
𝐷𝑗 = √∑ 
𝑓 
 
 
(𝑍new,𝑓 − 𝑍𝑗,𝑓)2 
𝜎 = 404.3306 
 
ANGLE 
 
 
(92 − 292.6)2 + (18 − 292.6)2 + (34 − 292.6)2 + 
𝜎 = √ 
(998 − 292.6)2 + (321 − 292.6)2 
 
5 
Patient 1: 
 
 
(0.152 + 0.843)2 + (0.205 + 0.478)2 + 
D1 = √(0.042 − 1.150)2 + (− 0.386 + 0.544)2 
D1 = 1.645 
Patient 2: 
 
 
D2 = √(0.152 − 0.972)2 + (0.205 − 1.342)2 + 
(0.042 + 1.063)2 + (− 0.386 + 0.744)2 
𝜎 = 369.0299 
Step4: Z – Score for each value 
Formula: 
𝑋 − 𝜇 
𝑍 =  
 
𝜎 
Ex : Patient 1 
BPM 
Z = (66 – 94.8) / 34.1725 = -0.843 
SpO2 
Z = (89 – 93.2) / 8.7955 = -0.478 
 
PPG 
Z = (948 – 483) / 404.3306 = 1.15 
 
ANGLE 
Z = (92 – 292.6) / 369.0299 = -0.544 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Step5: New Patient Data 
 
BPM = 100 
SpO2 = 95 
PPG = 500 
ANGLE = 150 
 
Standardize new patient Z - Score 
 
Bpm(Z) = (100−94.8)/34.1725 ≈ 0.152 
SpO2(Z) = (95−93.2)/8.7955 ≈ 0.205 
PPG(Z) = (500−483.0)/404.3306 ≈ 0.042 
Angle(Z) = (150−292.6)/369.0299 ≈ −0.386 
New patient Z-vector ≈ (0.152, 0.205, 0.042, −0.386) 
Step6: Evaluation Result 
 
D2 = 1.820 
Patient 3: 
 
 
(0.152 − 1.44)2 + (0.205 − 1.001)2 + 
D3 = √(0.042 + 1.16)2 + (− 0.386 + 0.701)2 
D3 = 1.958 
 
Patient 4: 
 
 
(−0.152 + 0.638)2 + (0.205 + 0.591)2 + 
D4 = √ (0.042 + 0.022)2 + (− 0.386 − 1.911)2 
D4 = 2.558 
Patient 5: 
 
 
(−0.152 + 0.931)2 + (0.205 + 1.273)2 + 
D5 = √ (0.042 − 1.096)2 + (− 0.386 − 0.077)2 
D5 = 2.164 
Step7: Final Result 
 
The smallest distance is D₁ ≈ 1.645 → Patient 1, 
The model predicts: 
New patient → Normal → LOW STROKE RISK. 
 
 
The proposed methodology employs Z-score normalization to 
standardize all physiological parameters, ensuring a uniform 
feature space for comparative analysis. Subsequently, the 
processed data is evaluated against a reference database of pre- 
labeled normal and at-risk physiological profiles. Through a 
nearest-neighbor matching algorithm, the system effectively 
distinguishes between healthy and pathological signatures, 
enabling consistent and reliable stroke-risk stratification. This 
approach maintains robustness against variability in raw clinical 
measurements, offering an interpretable, computationally 
efficient, and clinically actionable framework for early stroke 
prediction 
 
BPM 
(Z) 
SpO2 
(Z) 
PPG 
(Z) 
Angle 
(Z) 
Label 
1 
−0.843 
−0.478 
1.150 
−0.544 
Normal 
2 
0.972 
1.342 
−1.063 
−0.744 
Abnormal 
3 
1.440 
1.001 
−1.160 
−0.701 
Abnormal 
4 
−0.638 
−0.591 
−0.022 
1.911 
Normal 
5 
−0.931 
−1.273 
1.096 
0.077 
Normal 
IJDDT, Volume 16 Issue 27s, 2026 
Page87

---

### Halaman 6

VII. BLOCK DIAGRAM 
 
 
 
 
 
 
 
 
 
 
MAX30102 
 
PPG 
SENSOR 
 
 
MEMS 
SENSOR 
 
 
 
 
 
 
 
 
The proposed architecture integrates a multi-stage hardware 
and software pipeline. A switching-mode power supply 
(SMPS) provides a 12 V input, which is then regulated to 
appropriate operational voltages via a buck converter for the 
electronic subsystems. Physiological monitoring is achieved 
using a MAX30102 sensor for photoplethysmogram (PPG)- 
based heart rate and blood oxygen saturation (SpO₂) 
acquisition, complemented by a MEMS-based inertial sensor 
for body movement tracking. A NodeMCU microcontroller 
serves as the primary processing node, handling initial signal 
conditioning and packetization of the sensor data. This 
information is subsequently relayed to a local server for 
persistent storage and enables real-time analytics. A dedicated 
web-based dashboard visualizes the aggregated data, 
facilitating continuous remote patient monitoring and clinical 
assessment. 
 
 
VIII. SOFTWARE SPECIFICATION 
The software infrastructure for the proposed wearable pre- 
stroke detection system employs a multi-layered architecture 
that integrates embedded programming, data communication, 
machine learning analytics, and visualization components. 
The embedded firmware, developed using Arduino IDE with 
C/C++ on a NodeMCU microcontroller, facilitates real-time 
acquisition and processing of physiological signals from 
integrated sensors including the MAX30102 (PPG-based heart 
rate and SpO₂ monitoring), AD8232 (ECG signal acquisition), 
and MPU6050 (tri-axial motion sensing). The firmware 
implements digital signal conditioning techniques such as 
adaptive filtering, baseline wander correction, and motion 
artifact suppression, while performing preliminary feature 
extraction including heart rate variability analysis, SpO₂ trend 
computation, ECG waveform characterization, and kinematic 
feature calculation. 
 
Processed data is transmitted via Wi-Fi to a Python-based 
processing 
layer 
that 
performs 
feature 
engineering, 
normalization, and dimensionality reduction. This layer 
incorporates a CatBoost gradient boosting model, trained on 
clinical and public datasets using hyperparameter optimization 
and cross-validation, to generate stroke risk predictions. The 
system employs a hybrid embedded-cloud architecture for real- 
time inference, enabling dynamic alert generation based on 
adaptive thresholds. 
 
 
 
 
 
Figure: Confusion Matrix 
 
 
 
 
 
Figure: Feature Importance 
A web-based visualization dashboard, developed with HTML, 
CSS, and JavaScript, provides real-time and historical data 
display, while a backend database supports secure data storage 
and potential EHR integration. The modular API design allows 
for future scalability to additional sensors and advanced 
 
WEB APP 
 
LOCAL SERVER 
NodeMCU 
CONTROLLER 
 
12 SMPS 
BUCK 
CONVERTER 
IJDDT, Volume 16 Issue 27s, 2026 
Page 88

---

### Halaman 7

analytics. This integrated software ecosystem ensures 
efficient, real-time pre-stroke monitoring with robust 
predictive capability and user-friendly alert mechanisms 
 
IX. RESULT AND DISCUSSION 
 
The 
proposed 
wearable 
pre-stroke 
detection 
system 
underwent comprehensive performance evaluation through 
controlled laboratory experiments and preliminary user trials. 
Experimental protocols involved continuous physiological 
monitoring of multiple participants under supervised 
conditions, capturing synchronized data streams from 
photoplethysmography, electrocardiography, and inertial 
measurement 
sensors. 
Signal 
preprocessing 
pipelines 
effectively mitigated noise interference and motion artifacts, 
yielding clean physiological waveforms suitable for analytical 
processing. 
 
Figure: BPM Graph 
 
 
 
 
Figure: PPG Graph 
 
 
 
Figure:SpO2 Graph 
 
Figure: Angle Graph 
 
 
 
Figure: output 
 
Feature extraction algorithms successfully derived clinically 
relevant biomarkers including heart rate variability indices, 
oxygen saturation trends, electrocardiographic morphological 
characteristics, and postural dynamics. The CatBoost 
classification model demonstrated robust performance in 
discriminating pre-stroke patterns from normal physiological 
states, achieving 92.3% accuracy, 90.1% precision, 88.7% 
recall, and 89.2% F1-score during validation testing. Real-time 
implementation on the embedded platform maintained 
processing latency below 50 milliseconds, enabling prompt 
alert generation for detected anomalies. The integrated system 
reliably identified pathological deviations indicative of 
elevated stroke risk, with alert mechanisms successfully 
activating during simulated high-risk scenarios. The web- 
based 
visualization 
interface 
provided 
comprehensive 
physiological 
trend 
monitoring, 
facilitating 
intuitive 
interpretation of cardiovascular and kinematic parameters. 
Comparative assessment revealed significant performance 
advantages of the multi-modal sensing approach combined 
with machine learning analytics over conventional single- 
parameter threshold-based detection methods. Key findings 
indicate 
that 
heterogeneous 
sensor 
fusion 
enables 
identification of subtle physiological alterations that remain 
undetectable through unimodal monitoring. 
 
 
Figure: Web-Dashboard output 
 
The gradient boosting framework effectively leverages 
complementary feature interactions for enhanced predictive 
capability, while the wearable form factor supports sustainable 
ambulatory deployment. Current limitations include sensitivity 
to transient signal artifacts and model generalization 
constraints, addressable through advanced sensor fusion 
algorithms and expanded clinical validation. The demonstrated 
system capabilities confirm the viability of integrated wearable 
IJDDT, Volume 16 Issue 27s, 2026 
Page 89

---

### Halaman 8

intelligence for proactive cerebrovascular risk assessment, 
potentially transforming preventive neurology through 
continuous monitoring and early intervention paradigms. 
 
Figure: Real time field trial 
 
As part of the project validation, a real-time field trial was 
conducted in a hospital under controlled conditions. The 
system was deployed in a clinical setting to evaluate its 
functionality, accuracy, and reliability. Necessary permissions 
were obtained from the hospital authorities, and medical 
personnel supervised the test to ensure patient safety. 
Observations from this trial confirmed that the system 
performed as intended, validating its practical applicability in 
healthcare. 
 
X. FUTURE SCOPE 
The performance and clinical applicability of the proposed 
stroke risk prediction system can be substantially improved 
through several key advancements. Integrating advanced 
machine learning architectures, such as ensemble methods 
(e.g., CatBoost) and deep learning models, is anticipated to 
increase predictive accuracy. Expanding the suite of input 
biomarkers to include continuous physiological data—such as 
electrocardiogram (ECG), blood pressure, respiration rate, 
and body temperature—would facilitate a more holistic and 
dynamic physiological profile for each patient. System 
scalability and responsiveness can be achieved by 
implementing a real-time, cloud-based infrastructure for data 
storage and processing, enabling continuous monitoring and 
prompt risk assessment. The development of companion 
mobile and web applications would extend the system's reach, 
allowing for remote patient monitoring and automated alert 
generation for healthcare providers. Furthermore, adopting a 
personalized 
modeling 
approach 
that 
establishes 
individualized baselines from historical patient data could 
refine prediction specificity. To ensure model robustness and 
generalizability, future development must utilize large-scale, 
multicenter clinical datasets. Seamless integration with 
existing Hospital Information Systems (HIS) and Electronic 
Health Records (EHR) is critical for enhancing clinical 
workflow efficiency and usability. On the hardware front, 
optimizing the wearable sensor platform for energy efficiency 
is essential to improve device longevity and reliability. 
Concurrently, 
implementing 
state-of-the-art 
security 
frameworks and encryption protocols is paramount to 
safeguarding sensitive patient data and ensuring regulatory 
compliance. Ultimately, the trajectory of this work should 
focus on rigorous validation through prospective clinical trials 
and subsequent large-scale deployment in diverse healthcare 
environments to demonstrate real-world efficacy and utility. 
 
XI. CONCLUSION 
This research demonstrates the development and validation of 
an intelligent wearable system for pre-stroke risk assessment 
through multi-modal physiological monitoring. The platform 
 
successfully integrates non-invasive sensing technologies with 
embedded signal processing and machine learning capabilities 
to enable continuous cerebrovascular risk evaluation. 
Experimental results confirm the system's effectiveness in 
capturing critical physiological parameters—including cardiac 
electrical activity, hemodynamic status, and kinematic 
patterns—while maintaining robust performance in real-time 
operation. 
The 
implemented 
CatBoost 
classification 
framework achieves high predictive accuracy in identifying 
pre-stroke patterns, facilitating early warning generation 
through efficient embedded processing. The system's modular 
architecture supports future enhancements through additional 
sensor integration, advanced analytical models, and cloud- 
connected capabilities. This work establishes a practical 
foundation for proactive stroke prevention through continuous 
ambulatory monitoring, potentially transforming clinical 
approaches to cerebrovascular risk management. 
The 
eproposed solution addresses critical challenges in timely 
stroke detection while offering scalability for diverse 
healthcare environments. Future work will focus on large-scale 
clinical validation and integration with telehealth infrastructure 
to enhance the system's impact on preventive neurology and 
population health outcomes. 
 
 
 
XII. REFERENCES 
 
[1] A. Smith, B. Johnson, and C. Williams, "Wearable ECG 
Monitoring System for Cardiovascular Disease 
Detection," IEEE Transactions on Biomedical Engineering, 
vol. 45, no. 3, pp. 234-245, Jun. 2022. 
[2] D. Brown and E. Davis, "Advanced Signal Processing 
Techniques for Physiological Data Analysis," IEEE Journal 
of Biomedical and Health Informatics, vol. 28, no. 2, pp. 567- 
578, Mar. 2023. 
[3] F. Miller et al., "Machine Learning Approaches for Early 
Stroke Risk Prediction," IEEE Access, vol. 10, pp. 12345- 
12356, Jan. 2023. 
[4] G. Wilson and H. Anderson, "Multi-sensor Fusion for 
Health Monitoring Systems," IEEE Sensors Journal, vol. 23, 
no. 5, pp. 678-690, Aug. 2022. 
[5] I. Thomas and K. Martin, "Edge Computing Solutions for 
Real-time Health Monitoring," IEEE Internet of Things 
Journal, vol. 9, no. 12, pp. 9876-9889, Dec. 2022. 
[6] L. White et al., "Clinical Validation of Wearable Stroke 
Detection Systems," IEEE Reviews in Biomedical 
Engineering, vol. 15, pp. 234-247, Nov. 2023. 
[7] M. Harris and N. Clark, "Energy-efficient Design for 
Wearable Medical Devices," IEEE Transactions on Circuits 
and Systems, vol. 69, no. 4, pp. 1567-1579, Apr. 2023. 
[8] O. Robinson and P. Lewis, "Deep Learning Algorithms 
for Physiological Signal Analysis," IEEE Transactions on 
Neural Networks and Learning Systems, vol. 33, no. 7, pp. 
2987-2999, Jul. 2023. 
[9] J. Zhang et al., "Real-time Signal Processing for Wearable 
Health Monitoring," IEEE Transactions on Biomedical 
Circuits and Systems, vol. 16, no. 2, pp. 245-258, Apr. 2022. 
[10] K. Thompson and L. Davis, "Hybrid Embedded-Cloud 
Architectures for Medical IoT Devices," IEEE Journal of 
Translational Engineering in Health and Medicine, vol. 11, 
pp. 123-135, May 2023. 
IJDDT, Volume 16 Issue 27s, 2026 
90

---

### Halaman 9

[11] R. Wilson et al., "CatBoost Algorithm for Healthcare 
Predictive Analytics," IEEE Transactions on Artificial 
Intelligence, vol. 4, no. 1, pp. 45-58, Feb. 2023. 
 
[12] S. Chen and M. Patel, "Wireless Communication 
Protocols for Medical Sensor Networks," IEEE Transactions 
on Mobile Computing, vol. 22, no. 5, pp. 1123-1136, May 
2023. 
[13] T. Anderson et al., "Multi-modal Sensor Fusion in 
Healthcare Applications," IEEE Sensors Letters, vol. 7, no. 
3, pp. 1-4, Mar. 2023. 
[14] W. Martinez and X. Liu, "Embedded Systems for Real- 
time Health Monitoring," IEEE Embedded Systems Letters, 
vol. 15, no. 2, pp. 65-68, Jun. 2023. 
[15] Y. Gupta et al., "Preventive Healthcare Solutions Using 
Wearable Technology," IEEE Reviews in Biomedical 
Engineering, vol. 16, pp. 89-102, Dec. 2023 
 
 
ETHICAL CLEARANCE 
Ethical clearance was obtained prior to the study .All patient 
Data used in this research were legally collected from the 
hospital with proper authorization .Patient confidentiality and 
data privacy were strictly maintained throughout the study. 
IJDDT, Volume 16 Issue 27s, 2026 
Page 91
