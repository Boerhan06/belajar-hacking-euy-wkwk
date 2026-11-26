# Hand Gesture Recognition and Conversion to Speech for the Speech Impaired Using a Flex Sensor Glove and ESP32 Microcontroller: A Preliminary Evaluation

> **Klaster Literatur:** Klaster 2: Inti Divisi AI: TinyML & Random Forest di ESP32  
> **Penulis:** Mohamad Haniff Harun, Arman Hadi Azahar, Shamsul Fakhar Abd Gani, Md Ashadi Md Johari, Aminah Ahmad  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** International Journal of Research and Innovation in Social Science  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.47772/ijriss.2026.100900744](https://doi.org/10.47772/ijriss.2026.100900744)  

---

## 📌 Abstrak / Intisari Ilmiah
People who rely on sign language still find it hard to talk with the many hearing people who have never learned it. This paper describes a low-cost, glove-based translator that turns finger bending into spoken output. Five flex sensors, one on each finger, are read by an ESP32 microcontroller, which classifies the hand posture, plays a pre-recorded voice clip through a DF Mini Player and speaker, and logs the recognised gesture to Google Sheets over Wi-Fi. In the evaluated configuration, each finger stands for one vowel: thumb (A), index (E), middle (I), ring (O) and pinky (U). Three candidates each performed at least four bending cycles per vowel while the raw sensor output was captured on the Arduino serial plotter. All 15 candidate–letter combinations produced clear, repeatable square-like waveforms, with readings near 4,100–4,200 when the finger was straight and falling to between roughly 1,000 and 2,500 when it was bent. The lower plateau differed from one person to another, which points to the need for per-user calibration. Timing tests showed a mean delay of 20.4 s between the serial monitor and the cloud log, and a further 20.4 s before the vowel was heard, giving an end-to-end delay of about 40 s. Recognition was therefore dependable, while response time remains the main weakness to be addressed. The design is modular and inexpensive, and it supports the United Nations Sustainable Development Goals 3, 4 and 9.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

Page 10742 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Hand Gesture Recognition and Conversion to Speech for the Speech 
Impaired Using a Flex Sensor Glove and ESP32 Microcontroller: A 
Preliminary Evaluation 
Mohamad Haniff Harun¹*, Arman Hadi Azahar 2 , Shamsul Fakhar Abd Gani 3, Md Ashadi Md 
Johari 3 , Aminah Ahmad 3 
¹Sekolah Asasi Teknikal dan Pengajian Diploma, Universiti Teknikal Malaysia Melaka (UTeM), 
Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia 
2 Fakulti Teknologi dan Kejuruteraan Elektrik, Universiti Teknikal Malaysia Melaka (UTeM), 
Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia 
3 Fakulti Teknologi dan Kejuruteraan Elektronik dan Komputer, Universiti Teknikal Malaysia 
Melaka (UTeM), Hang Tuah Jaya, 76100 Durian Tunggal, Melaka, Malaysia 
DOI: https://doi.org/10.47772/IJRISS.2026.100900744 
Received: 30 September 2026; Accepted: 05 October 2026; Published: 22 October 2026 
ABSTRACT 
People who rely on sign language still find it hard to talk with the many hearing people who have never learned 
it. This paper describes a low-cost, glove-based translator that turns finger bending into spoken output and 
reports a preliminary bench evaluation of it. Five flex sensors are read by an ESP32 microcontroller, which 
classifies the hand posture, plays a pre-recorded voice clip through a DF Mini Player and logs the result to 
Google Sheets. Each finger stands for one vowel (A, E, I, O, U). Three volunteers performed four bending 
cycles per vowel, and the 60 recorded cycles were digitised and analysed. With the firmware's fixed reference 
values, 57 of 60 cycles (95.0%; 95% CI 86.3–98.3%) crossed the 50% detection threshold; all misses involved 
the middle finger, which had the smallest signal swing. A simulated user-specific calibration detected all 45 test 
cycles and narrowed the threshold margins from 43–218% to 78–103%. An exploratory check of ten logged 
gestures matched the intended vowel in three cases, with most errors attributable to middle–ring finger coupling 
and an over-sensitive thumb setting. The mean end-to-end delay was 40.5 s (SD 4.5 s), caused by tying audio 
output to cloud logging. The sensing chain is therefore sound, but calibration, coupling-tolerant recognition, a 
faster output path and validation with deaf and signing users are required before any claim about practical use 
can be made. 
Keywords: sign language translator, flex sensor glove, ESP32, DFPlayer Mini, speech impaired, assistive 
technology 
INTRODUCTION 
For most people who are deaf, hard of hearing or speech impaired, sign language is the main way of 
communicating. The difficulty is that very few hearing people can read it. According to the World Federation of 
the Deaf, around 70 million deaf people worldwide use more than 200 different sign languages, and outside 
these communities the languages are rarely learned. The result is a daily communication gap at the clinic 
counter, in the classroom and at work, where a signer has to depend on an interpreter, on writing, or on 
guesswork. 
A sign language translator tries to close that gap by converting signs into a form that a non-signer understands, 
ideally as they are produced. Such a device has a second use as a learning aid. When a learner signs and 
immediately hears or sees the meaning, the feedback helps them correct their hand shape, and this can 
encourage more hearing people to pick up the language in the first place.

---

### Halaman 2

Page 10743 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
The problem is not simply technical. Sign languages do not have the standardised grammar references and 
dictionaries that spoken languages enjoy, and translation is not a one-to-one prediction of words: recognised 
glosses must still be turned into spoken-language text. Vision-based work has also been held back by small and 
restricted public datasets, and most studies treat recognition and translation as separate problems rather than 
handling both together (Grif & Kondratenko, 2023; Kankariya et al., 2024). In Malaysia the situation is 
complicated further by the history of Malaysian Sign Language (MySL). Deaf users are spread thinly across the 
country, the language has been used mostly within deaf-centred organisations, and a formal language plan is 
still considered necessary to maintain and standardise it (Yee, 2018). 
Wearable gloves offer a practical alternative to cameras. They are not affected by lighting or background, they  
can be carried anywhere, and the raw signals are simple enough to be processed by a small microcontroller. 
Many glove prototypes, however, depend on several sensor types, a smartphone or a computer for processing, 
which raises cost and complexity. The present work set out to build a simpler device that still covers the full 
chain from gesture to sound. 
The objectives were (i) to develop a system that interprets a set of sign gestures, (ii) to build a glove-based 
translator prototype for speech- and hearing-impaired users, and (iii) to evaluate the flex sensors in terms of the 
degree of finger bending, the repeatability of each bending cycle, the margin between the measured bending and 
the detection threshold, and the time taken to log the gesture and to produce the speaker output. The prototype 
uses an ESP32 microcontroller, five flex sensors, a DF Mini Player with a speaker, and a cloud log in Google 
Sheets. The work also responds to three of the United Nations Sustainable Development Goals: SDG 3 (good 
health and well-being), since better communication supports access to health information and reduces isolation; 
SDG 4 (quality education), because the glove can be used in inclusive classrooms and for teaching signs; and 
SDG 9 (industry, innovation and infrastructure), as an example of affordable assistive technology. 
It is important to be clear about the scope of this paper. What is reported here is a preliminary bench evaluation 
of the hardware and signal chain with three participants, not a validation of the glove as a communication aid. 
To make the most of the data that were collected, the serial-plotter recordings were digitised and analysed cycle 
by cycle, a user-specific calibration was simulated on the same recordings, and the gesture log was checked 
against the intended letters where this was possible. These analyses show how the sensors respond, where the 
current detection logic fails and how long each stage of the system takes. They do not establish recognition 
accuracy for the intended user group, and the gestures used are not authentic Malaysian Sign Language (MySL) 
signs. A validation study that addresses these points is set out in the Discussion. 
LITERATURE REVIEW 
Malaysian Sign Language 
The history of MySL is usually traced to the opening of the Federation School for the Deaf in Penang in 1954, 
where an indigenous sign language grew out of gestural communication among the pupils, while Manually 
Coded Malay (Kod Tangan Bahasa Melayu, KTBM) became the language of instruction (Yee, 2018). The name 
MySL was formally adopted in 1997, when the Malaysian Federation of the Deaf was set up and began 
collecting Bahasa Isyarat Malaysia (BIM) signs from the community. Even so, its use is still concentrated in 
deaf-centred organisations. Interpreters are scarce, and their work becomes harder in remote settings. A study of 
MySL interpreters during COVID-19 media briefings found that they were working from a studio away from 
the press conference, could not ask for clarification of technical terms, and found the two-dimensional screen 
harder to work with than live interpreting (Chew & Cheung, 2022). On the technical side, the MyWSL2023 
dataset of common MySL word signs was released to support vision-based recognition research (Johari et al., 
2023), and a DataGlove study compared ten machine learning classifiers for static MySL gestures, with 
artificial neural networks, random forest and k-nearest neighbours giving the best results (Alrubayi et al., 2021). 
Vision-Based Recognition 
Camera-based systems have achieved very high accuracy on still images. A CNN using the Inception v3

---

### Halaman 3

Page 10744 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
architecture reached 98.94% on an American Sign Language (ASL) alphabet dataset (Kankariya et al., 2024), 
and a multi-headed CNN that combined full images with extracted hand landmarks reported a test accuracy of 
98.981% even with cluttered backgrounds (Pathan et al., 2023). For Russian Sign Language, MediaPipe 
features combined with an LSTM classifier worked well for static gestures, but dynamic signs needed more 
features and transformations (Grif & Kondratenko, 2023). These systems usually need a camera aimed at the 
signer, adequate lighting and considerable processing power, which makes them less suited to a portable, 
everyday device. 
Glove-Based Translators 
Glove systems capture hand shape directly. One early design combined flex, contact and accelerometer sensors 
to send ASL as text over Bluetooth, GSM and the Internet, and reached an average efficiency of 83% (88% at 
best) on its third test iteration (Bajpai et al., 2015). A later survey proposed TinyML on a Raspberry Pi Pico 
with flex sensors and an MPU-6050 for real-time recognition on the glove itself (Santosh Kumar et al., 2022). 
Using flex sensors, an accelerometer, Arduino and an Android application, Illahi et al. (2021) translated letters, 
numbers and simple phrases with more than 95% accuracy and an average recognition time under 3 s. For 
MySL, Abdullah et al. (2020) optimised the number and placement of inertial measurement units (IMUs) and 
found that sensors on the thumb and index fingers of both hands gave more than 98% accuracy with a recurrent 
neural network. Accelerometer gloves have also been paired with hidden Markov models (Galka et al., 2016), 
and an ADXL-335 glove with an Android middleware reached 92–99% accuracy when converting signs to 
voice messages (Mathupriya et al., 2023). 
Flex sensors are the most common building block. A flex-sensor glove that stored ASL templates in 
microcontroller EEPROM was used as an interactive teaching tool with an LCD and keypad (Kadam et al., 
2012). Kau et al. (2015) combined flex and inertial sensors in a wireless glove for Taiwanese Sign Language 
and reached up to 94% recognition, with speech produced on a smartphone, and later demonstrated the system 
live (Kau & Zhuo, 2016). The Talking Gloves system used flex sensors and an MPU6050 with an Arduino Pro 
Mini and recognised 93.4% of signed letters and numerals (Shaheen & Mehmood, 2018). Arduino-based gloves 
have also been built to speak ASL letters through an LCD and speaker (Amin et al., 2020), to produce Arabic 
text and voice (Abdulla et al., 2016), and to recognise 20 of the 26 ASL letters with 96% accuracy (Elmahgiubi 
et al., 2015). 
Other sensing options have been explored as well. Gloves for Japanese Sign Language combined flex sensors, 
an IMU and force-sensing resistors with SVM and dynamic time warping, achieving 96.9% for a single subject 
but about 82.5% across subjects (Chu et al., 2021); a related study reached 99.75% with random forest and k-
NN classifiers (Ji et al., 2022). A low-cost gyro-sensor glove for training palm-turning signs averaged just over 
50% across eight users without individual calibration (Mori & Toyonaga, 2018). Annapoorna et al. (2023) used 
flex sensors, a gyroscope and an ESP32 with Firebase and a mobile application to speak recognised gestures. 
For MySL, Shukor et al. (2015) used tilt sensors and an accelerometer and reported 95% for letters, 93.33% for 
numbers and 78.33% for motion-based gestures, while a later smart glove converted six basic signs to audio and 
text in about 0.6 s (Abougarair, 2022). MPU6050-based gloves have reached 95% on static and up to 88% on 
dynamic gestures for Arabic and American sign languages (“Sensor Glove-Based Sign Language Recognition,” 
2020), and a decision-tree glove has translated all ASL letter gestures to English speech (Bodda et al., 2020). 
Capacitive touch sensors (Abhishek et al., 2016) and combinations of touch, flex and accelerometer sensors 
driving a speaker (V et al., 2023) have also been reported. Table 1 compares four representative glove studies. 
Table 1: Comparison of Selected Glove-Based Translators 
Study 
Sensors 
Method 
Result 
Advantage / Limitation 
Mori and 
Toyonaga 
(2018) 
Flex sensor, 
accelerometer, gyro 
sensor 
Heuristic rules for palm-
turning gestures; sign 
database 
About 50% 
average 
accuracy 
Low cost and easy to use 
/ needs individual 
calibration 
Abhishek et 
al. (2016) 
Flex sensor, 
gyroscope, capacitive 
Touch-based gesture 
decoding 
Recognises 
0–9 and A–Z 
Good technology 
integration / technically

---

### Halaman 4

Page 10745 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
touch sensor 
complex 
Kau et al. 
(2015) 
Flex sensor, inertial 
sensor 
Flex and inertial fusion 
with a sign database 
94% 
accuracy 
Portable / limited gesture 
set 
Ji et al. 
(2022) 
Flex sensor, IMU 
SVM, DT, RF and KNN 
99.75% 
accuracy 
Not affected by 
environment / limited 
gesture set 
Research Gap 
Two points stand out from this literature. First, flex sensors appear in almost every glove design, because finger 
bending carries most of the information in a static hand shape. Second, the most accurate systems tend to rely 
on extra IMUs, machine learning models and a smartphone or computer, and many stop at text on a screen. 
Fewer studies report a self-contained device that produces speech directly, keeps a record of what was said, and 
measures how long each stage takes. The prototype described here focuses on that end-to-end chain using only 
flex sensors and an ESP32, and it reports timing alongside recognition behaviour so that the practical limits of 
such a low-cost design are visible. 
METHODOLOGY 
System Overview 
The translator has two physical parts: a fabric glove carrying five flex sensors, and a small enclosure (the 
junction box) holding the electronics. Fig. 1 shows the block diagram. Each flex sensor feeds an analogue input 
of the ESP32. After a gesture is recognised, the ESP32 sends two outputs: a play command to the DF Mini 
Player, which drives the speaker, and an HTTP request that writes the result to a Google Sheets log over Wi-Fi. 
A step-down (buck) module supplies the electronics from a mains adapter. 
 
Figure 1: Block diagram of the glove-based sign language translator 
Hardware 
The ESP32 was chosen because it combines a dual-core processor, 12-bit analogue-to-digital conversion and 
built-in Wi-Fi and Bluetooth on one low-cost board, so no separate network module was needed. The flex 
sensors are resistive strips whose resistance rises as they bend. Each sensor forms a voltage divider with a 2.2 
kΩ resistor, so bending appears as a change in the voltage seen by the ADC. With the arrangement used, a

---

### Halaman 5

Page 10746 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
straight finger reads close to the top of the 12-bit range (about 4,095) and the reading falls as the finger bends. 
Audio is handled by a DF Mini Player (DFPlayer Mini), a small MP3 module that reads clips from a microSD 
card and can drive a small speaker directly through its 3 W amplifier output. The ESP32 controls it over a serial 
link and simply requests a track number. Power comes from a 12 V, 2 A adapter through a female DC jack, and 
the step-down module lowers this to a level that is safe for the ESP32 and the audio module. The wiring is 
shown in Fig. 2. 
 
Figure 2: Circuit design of the prototype 
Gesture Recognition Logic 
The firmware was written in the Arduino IDE. Every second, the ESP32 reads all five sensors and converts each 
raw value into a bending percentage with the Arduino map() function, where 0% corresponds to a straight finger 
(raw value 4,095) and 100% to a fully bent finger. The fully bent reference differs for each finger to reflect its 
sensor and range of motion: 3,200 for the thumb, 2,700 for the index finger, 2,000 for the middle finger and 
2,500 for the ring and little fingers. The result is limited to 0–100%. 
A finger is treated as bent when its value reaches 50%. The decision rules follow the flowchart in Fig. 3. 
Bending only the thumb gives "A", only the index finger gives "E", only the middle finger gives "I", only the 
ring finger gives "O" and only the little finger gives "U". Four two-finger combinations are mapped to short 
words: thumb and index ("Hi"), thumb and little finger ("Bye"), ring and little fingers ("Thank you") and middle 
and ring fingers ("I love you"). A trigger flag stops the same clip from being repeated on every reading while a 
gesture is held. When a clip has been requested, the DF Mini Player is polled every 10 ms, and the recognised 
label is sent to a Google Apps Script web application, which appends the date, time and label to the spreadsheet.

---

### Halaman 6

Page 10747 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
 
Figure 3: Gesture recognition flowchart 
Prototype 
Fig. 4 shows the finished prototype. The five flex sensors are stitched along the back of the fingers of a knitted 
glove so that they bend with the finger joints. Their leads run to connectors on the side of a plastic junction box, 
which holds the ESP32, the DF Mini Player, the speaker, the step-down module and the resistor network. 
Keeping the electronics in one enclosure protects the wiring and makes faults easier to trace. Fig. 5 shows the 
Google Sheets log, in which every recognised gesture is stored with its date and time. 
 
Figure 4: (a) Full view of the prototype and (b) inside view of the junction box 
 
Figure 5: Excerpt of the Google Sheets log recorded during testing (date, time and recognised label)

---

### Halaman 7

Page 10748 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Experimental Procedure 
The tests concentrated on the five single-finger vowels listed in Table 2. Three candidates (A, B and C) wore 
the glove in turn. The candidates were volunteers who took part in bench testing of the prototype, and the group 
did not include deaf, speech-impaired or experienced sign-language users. For each vowel, the candidate bent 
and straightened the assigned finger at least four times while the other fingers stayed relaxed. The raw sensor 
values were streamed to the Arduino IDE serial plotter, which gave a live trace of each cycle. For every 
candidate and letter, the range of values reached during the test was noted, together with any noise or 
irregularity in the trace. The four two-finger words ("Hi", "Bye", "Thank you" and "I love you") are 
implemented in the firmware but were not part of this formal test. 
Table 2: Letters Assigned to Each Finger 
Finger 
Thumb 
Index 
Middle 
Ring 
Pinky 
Letter 
A 
E 
I 
O 
U 
For the timing test, each candidate produced each vowel once more, and the clock time at which the reading 
appeared on the serial monitor was compared with the timestamp written to Google Sheets. The time at which 
the speaker vocalised the vowel was also recorded. From these three readings, two delays were calculated: from 
the serial monitor to the cloud log, and from the cloud log to the audible output. No video or other independent 
record of the hand posture was kept, so the intended letter can be compared with the logged label only where 
the log itself is available. 
Three further analyses were carried out on the recorded data. First, the 15 serial-plotter recordings (Fig. 6) were 
digitised. Each screenshot was calibrated against its own y-axis labels, the trace was extracted column by 
column, and every bending cycle was located automatically. For each cycle, the median bent value, the least-
bent value (95th percentile of the held portion, excluding transitions), the short-term noise (standard deviation 
about a nine-point moving average) and the drift between the start and end of the hold were measured. The 
least-bent value was converted into a bending percentage with the firmware's own mapping, without the 0–
100% limit, and a cycle was counted as detected when this value reached 50%. As a check on the digitisation, 
the straight-finger plateau was recovered at 4,097–4,102 in all recordings, against an expected value close to the 
ADC maximum of 4,095, an error below 0.2% of full scale. 
Second, a user-specific calibration was simulated on the same recordings. For each participant and finger, the 
first bending cycle was treated as the calibration fist and the straight plateau as the open hand, and the 
remaining three cycles were scored against 50% of that personal range. Third, the timestamps of the Google 
Sheets entries shown in Fig. 5 coincide to the second with those listed in the timing tables for candidates A and 
B (Table 7). Pairing each of these ten entries with the vowel the candidate was asked to produce gives an 
exploratory, gesture-level check of recognition. Candidate C's entries fall outside the excerpt and could not be 
included. Proportions are reported with Wilson 95% confidence intervals. 
RESULTS AND DISCUSSION 
Flex Sensor Response 
Fig. 6 collects the serial-plotter traces for all five letters and all three candidates. Every trace has the same basic 
shape: a flat upper plateau when the finger is straight, a sharp drop when it bends, a lower plateau while it is 
held, and a sharp rise when it is released. All four or more cycles were clearly separated in every one of the 15 
traces. At the level of a single finger, then, a threshold placed between the two plateaus should be enough to tell 
bent from straight; whether the full hand posture is classified correctly is a separate question, addressed below.

---

### Halaman 8

Page 10749 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
 
Figure 6: Serial-plotter output of the flex sensors for each letter (rows) and candidate (columns) 
The straight-finger plateau was practically identical in every recording, at 4,097–4,102 counts. The bent level 
was much less uniform, as Table 3 shows. For the letter "A", candidate B's thumb never fell below about 2,550, 
whereas candidates A and C reached about 1,940 and 1,740. The middle finger ("I") gave the narrowest swing 
for all three candidates, with the lowest readings between about 2,360 and 2,660. The little finger ("U") reached 
about 1,010 for candidate B but only 1,590–1,880 for the others. These differences are expected. Hand size, 
how firmly the glove fits, and how far each person can flex a given joint all change how much the sensor strip 
bends, and the thumb and middle-finger strips also sit over joints with a different radius of curvature. 
Table 3: Measured Range of the Digitised Flex Sensor Readings (Lowest Bent Reading – Straight 
Reading) 
Letter (finger) 
Candidate A 
Candidate B 
Candidate C 
A (thumb) 
1,940 – 4,100 
2,550 – 4,100 
1,740 – 4,100 
E (index) 
2,040 – 4,100 
2,460 – 4,100 
1,690 – 4,100 
I (middle) 
2,410 – 4,100 
2,360 – 4,100 
2,660 – 4,100 
O (ring) 
2,370 – 4,100 
2,370 – 4,100 
2,030 – 4,100 
U (pinky) 
1,880 – 4,100 
1,010 – 4,100 
1,590 – 4,100 
The shape of the lower plateau also says something about the users. As summarised in Table 4, candidate A 
produced the cleanest traces, with smooth transitions and little noise. Candidate B's traces were the most 
irregular, especially near  the troughs, which  suggests that  the finger was not held still while bent. Candidate C 
tended to bend more gradually, giving smoother but slightly broader transitions. In several traces the lower 
plateau drifts upwards while the finger is held, which is typical of the slow relaxation of resistive flex sensors. 
None of these effects caused a cycle to be missed, but they do reduce the margin between the bent value and the 
50% threshold for some finger–user pairs. Candidate B's thumb is the clearest example: a reading of about 
2,500 lies well below the 3,200 reference used for the thumb, so it is still detected, but a user with even less 
thumb flexion could fall close to the threshold.

---

### Halaman 9

Page 10750 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Table 4: Qualitative Observations across Candidates 
Letter 
Candidate A 
Candidate B 
Candidate C 
A 
Consistent waveform; 
distinct peaks and troughs in 
all cycles; minimal noise 
Slightly higher range; 
variability near troughs; 
minor fluctuations 
Slightly lower range; 
smoother, more gradual 
bending 
E 
Smooth peaks and troughs; 
slight noise during bending 
Minor irregularities at 
troughs 
Slightly broader transitions 
I 
Smooth transitions; steady 
bending and reliable 
response 
Irregularities during 
transitions 
Minor fluctuations in 
transitions 
O 
Smooth transitions; slight 
noise at troughs 
Minor irregularities in 
waveform 
Slight noise 
U 
Smooth transitions; minor 
noise 
Irregularities near troughs 
Smooth transitions; minimal 
noise 
Taken together, the traces show that a single flex sensor per finger, read through a simple voltage divider, 
produces a clear and repeatable bending signal for all five fingers and all three users. Short-term noise was 
small, between 7 and 19 counts, which is under 2% of the bending swing in every recording. Drift was larger. In 
13 of the 15 recordings the bent reading crept upwards by 36–195 counts (1–9% of the swing) while the finger 
was held, which is typical of the slow relaxation of resistive flex sensors, and the bent level also varied from 
cycle to cycle. Both effects matter most where the swing is small, which is the case for the middle finger, as the 
next subsection shows. 
Cycle-Level Detection 
Table 5 and Fig. 7 summarise the cycle-by-cycle analysis of the digitised recordings. With the firmware's fixed 
reference values, 57 of the 60 bending cycles reached the 50% threshold, a finger-level detection rate of 95.0% 
(95% CI 86.3–98.3%). All three misses involved the middle finger ("I"): one cycle for candidate B and two for 
candidate C. The reason is visible in the swing column. The middle finger produced the smallest change 
between straight and bent readings (1,146–1,594 counts), and for candidates B and C it also varied most from 
cycle to cycle, with coefficients of variation of 15% and 13% in the bent level, compared with 0.6–9% for most 
other recordings. At the same time, the middle-finger reference value of 2,000 lies further from the straight 
reading than for any other finger, so the middle finger has to bend furthest to be detected. The thumb shows the 
opposite problem. Its readings reached 148–218% of the thumb reference, because the reference of 3,200 sits 
much closer to the straight value than the thumb actually bends. With this setting, the thumb is counted as bent 
once its reading falls by about 450 counts, roughly a fifth of its observed swing. A small, unintended thumb 
movement could therefore register as a bend. The same pattern appears in the ranges recorded during the timing 
runs, where the least-bent reading exceeded the threshold in all 15 trials, but with margins from only 5 
percentage points (middle finger, candidate A) to more than 150 (thumb). 
Table 5: Cycle-Level Analysis of the Digitised Flex Sensor Recordings 
Letter 
Cand. 
Swing 
(counts) 
Cycles 
detected 
(fixed) 
Lowest 
bend, 
fixed 
(%) 
Lowest bend, 
calibrated 
(%) 
Noise 
(counts) 
Drift (counts) 
A 
A 
1,994 
4/4 
190 
81 
9 
+65 
 
B 
1,400 
4/4 
148 
91 
8 
+84

---

### Halaman 10

Page 10751 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
 
C 
2,069 
4/4 
218 
91 
8 
+195 
E 
A 
1,852 
4/4 
121 
97 
16 
+130 
 
B 
1,453 
4/4 
96 
101 
7 
+136 
 
C 
2,167 
4/4 
146 
91 
11 
+100 
I 
A 
1,594 
4/4 
68 
99 
8 
+67 
 
B 
1,334 
3/4 
46 
78 
17 
-42 
 
C 
1,146 
2/4 
43 
103 
19 
-53 
O 
A 
1,434 
4/4 
82 
87 
13 
+113 
 
B 
1,468 
4/4 
83 
86 
10 
+85 
 
C 
1,730 
4/4 
97 
78 
14 
+82 
U 
A 
1,798 
4/4 
84 
92 
15 
+155 
 
B 
2,947 
4/4 
177 
92 
7 
+36 
 
C 
2,321 
4/4 
143 
98 
8 
+109 
All 
 
1,146 
– 
2,947 
57/60 
43 – 218 
78 – 103 
7 – 19 
–53 to +195 
Fixed: firmware reference values (thumb 3,200; index 2,700; middle 2,000; ring and pinky 2,500). Calibrated: 
personal range from cycle 1, applied to cycles 2–4 (45 cycles). Percentages above 100% indicate bending 
beyond the reference value. 
 
Figure 7: Least-bent reading of each bending cycle relative to the 50% detection threshold, with fixed 
and user-calibrated reference values 
When the simulated user-specific calibration was applied, all 45 test cycles were detected (100%; 95% CI 92.1–
100%), and the lowest reading rose to 78% of the personal range. Just as importantly, the spread of the margins 
narrowed from 43–218% with fixed values to 78–103% with calibration (Fig. 7), so every finger now sits in a

---

### Halaman 11

Page 10752 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
similar position relative to the threshold. The fist and the test cycles came from the same recording session, so 
this result is probably optimistic, but it shows that most of the variation between fingers and users comes from 
the fixed references rather than from the sensors. On this basis, the next version of the firmware will include a 
start-up calibration in which the user holds an open hand and then a fist for about 3 s each. To cope with the 
drift and the cycle-to-cycle variation measured above, readings will be smoothed with a five-sample moving 
average, hysteresis will be added (bent above 60%, released below 40% of the personal range), and a gesture 
will be accepted only after the posture has been stable for about 300 ms. 
Exploratory Gesture-Level Check 
Finger-level detection is necessary but not sufficient: a gesture is recognised correctly only if the intended 
finger is bent and the others are not. Table 6 shows the exploratory confusion matrix obtained by pairing the ten 
Google Sheets entries in Fig. 5 with the vowels the candidates were asked to produce. Only three of the ten 
entries matched the intended vowel, an accuracy of 30% (95% CI 10.8–60.3%). Recall was 0.50 for "A", "E" 
and "I" and zero for "O" and "U", and precision was 0.33 for "A" and "E" and 0.50 for "I". Two of the seven 
errors were not vowels at all but "I love you", which the firmware assigns to the middle and ring fingers bent 
together. 
Table 6: Exploratory Confusion Matrix from the Logged Gestures (Candidates A and B, n = 10) 
Intended \ 
Logged 
A 
E 
I 
O 
U 
I love you 
Recall 
A 
1 
1 
0 
0 
0 
0 
0.50 
E 
1 
1 
0 
0 
0 
0 
0.50 
I 
0 
0 
1 
0 
0 
1 
0.50 
O 
0 
0 
1 
0 
0 
1 
0.00 
U 
1 
1 
0 
0 
0 
0 
0.00 
Precision 
0.33 
0.33 
0.50 
– 
– 
– 
Accuracy 0.30 
Pairing based on identical timestamps in Fig. 5 and Table 7. Precision is undefined (–) for classes that were 
never logged. 
The errors are not random. Intended "I" and "O" were logged as "I love you" or as each other, which means the 
middle and ring fingers were detected together or swapped. This is consistent with the well-known mechanical 
and neural coupling between these two fingers: when one is flexed on its own, the other tends to move with it 
(Häger-Ross & Schieber, 2000). The remaining errors involved the thumb, index and little finger, in line with 
the over-sensitive thumb setting identified above. These ten trials are too few, and the pairing too indirect, to 
estimate accuracy with any confidence, and the figure should not be read as the accuracy of the device. What 
they do show is that cross-finger interference, rather than the detection of the intended finger, is the main 
problem to solve. Personal calibration addresses part of it; the rest calls for rules that tolerate the natural 
coupling of neighbouring fingers, or a classifier trained on each user's own hand postures, together with a 
properly labelled test set. 
Logging Delay 
Table 7 lists the timestamps from the serial monitor and from Google Sheets, together with the bending ranges 
recorded during the timing runs. The delay between the two was very consistent. Across the 15 trials it ranged 
from 13 s to 24 s, with a mean of 20.4 s (standard deviation 2.7 s), and it showed no clear pattern with letter or 
candidate. The bending ranges were in line with the earlier test, with each candidate's bent readings falling well 
below the straight-finger level.

---

### Halaman 12

Page 10753 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Table 7: Time Performance of the Flex Sensor and Data Logging 
Candidate Letter 
Flex sensor range 
value 
Serial 
monitor 
time 
Google 
Sheets 
time 
Delay (s) 
A 
A 
1890 – 2266 
4:34:49 
4:35:10 
21 
 
E 
1421 – 2298 
4:35:28 
4:35:48 
20 
 
I 
1501 – 2947 
4:35:00 
4:35:21 
21 
 
O 
1584 – 2693 
4:35:07 
4:35:28 
21 
 
U 
1921 – 2286 
4:35:15 
4:35:37 
22 
B 
A 
1360 – 2359 
4:40:22 
4:40:44 
22 
 
E 
1810 – 2494 
4:40:30 
4:40:52 
22 
 
I 
1056 – 2238 
4:40:34 
4:40:58 
24 
 
O 
2296 – 2738 
4:40:45 
4:41:04 
19 
 
U 
1077 – 2208 
4:40:53 
4:41:09 
16 
C 
A 
996 – 2556 
4:42:48 
4:43:11 
23 
 
E 
1599 – 2445 
4:42:58 
4:43:19 
21 
 
I 
984 – 2431 
4:43:02 
4:43:23 
21 
 
O 
1803 – 2093 
4:43:30 
4:43:50 
20 
 
U 
1311 – 2165 
4:43:56 
4:44:09 
13 
Since the delay hardly changes, it is almost certainly set by the system rather than by the gesture or the sensor. 
Several factors probably contribute. The sensors are sampled only once per second. Each log entry is a fresh 
HTTPS request to a Google Apps Script web application, which redirects before writing to the sheet, and the 
script itself takes time to run on Google's servers. Wi-Fi conditions add some variation on top of this. None of 
these steps affects whether a gesture is recognised correctly, but together they explain why the cloud record lags 
behind the local reading. 
Speaker Output Delay 
Table 8 adds the time at which the speaker produced each vowel. In 14 of the 15 trials, the vowel was heard 
between 13 s and 27 s after the Google Sheets entry, with a mean of 20.4 s (standard deviation 3.5 s). The 
remaining trial (candidate B, letter "I") has a speaker time earlier than its logging time, which is almost certainly 
a recording error, and it was left out of the averages. Measured from the serial monitor, the total delay before 
the user heard the vowel was 34–48 s, with a mean of 40.5 s. 
Table 8: Time Performance of the Speaker Output 
Candidate Letter 
Serial 
monitor 
Google 
Sheets 
Speaker 
output 
Sheets to 
speaker (s) 
A 
A 
4:34:49 
4:35:10 4:35:23 
13 
  
E 
4:35:28 
4:35:48 4:36:02 
14

---

### Halaman 13

Page 10754 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
  
I 
4:35:00 
4:35:21 4:35:48 
27 
  
O 
4:35:07 
4:35:28 4:35:51 
23 
  
U 
4:35:15 
4:35:37 4:35:56 
19 
B 
A 
4:40:22 
4:40:44 4:41:03 
19 
  
E 
4:40:30 
4:40:52 4:41:13 
21 
  
I 
4:40:34 
4:40:58 4:40:20* 
– 
  
O 
4:40:45 
4:41:04 4:41:25 
21 
  
U 
4:40:53 
4:41:09 4:41:29 
20 
C 
A 
4:42:48 
4:43:11 4:43:34 
23 
  
E 
4:42:58 
4:43:19 4:43:41 
22 
  
I 
4:43:02 
4:43:23 4:43:43 
20 
  
O 
4:43:30 
4:43:50 4:44:12 
22 
  
U 
4:43:56 
4:44:09 4:44:30 
21 
*Recorded speaker time precedes the logging time; treated as a recording error and excluded from the mean. 
Table 9 summarises the response-time measurements. This is the clearest limitation of the current prototype. A 
delay of around 40 s is far too long for natural conversation, and it compares poorly with glove systems that 
report recognition in under 3 s (Illahi et al., 2021) or about 0.6 s (Abougarair, 2022). The consistency of the 
delay is actually helpful, because it points to a structural cause rather than random behaviour. In the current 
firmware, audio playback and cloud logging share the same timed loop, so the spoken output is effectively tied 
to network activity. 
Table 9: Summary of Response-Time Measurements 
Stage 
Trials (n) 
Mean (s) 
SD (s) 
Min (s) 
Max (s) 
Serial monitor to Google Sheets 
15 
20.4 
2.7 
13 
24 
Google Sheets to speaker output 
14 
20.4 
3.5 
13 
27 
Serial monitor to speaker output 
(end-to-end) 
14 
40.5 
4.5 
34 
48 
One trial (candidate B, letter "I") was excluded from the speaker-related rows because of an inconsistent 
timestamp (see Table 8). 
In the next version of the firmware, the two outputs will be separated. Audio will be triggered locally, directly 
from the classification routine, so that the DF Mini Player starts as soon as a gesture is accepted. Cloud logging 
will be moved to a background task pinned to the second core of the ESP32: recognised labels will be placed in 
a queue, and the task will send them to Google Sheets over a persistent connection without blocking the main 
loop. If the network is unavailable, the labels will simply wait in the queue. The sampling rate will also be 
raised from 1 Hz to 20 Hz. With these changes, the time to audio should be governed mainly by the 300 ms 
stability window, the start-up time of the DF Mini Player and the length of the clip, rather than by the network. 
The target for the next prototype is an end-to-end delay below 1 s, measured from gesture onset to audio onset, 
and this will be tested in the validation study.

---

### Halaman 14

Page 10755 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Comparison with Reported Glove Systems 
Table 10 places these results beside glove systems reviewed earlier. The comparison is indicative only, because 
the studies used different sign sets, numbers of users and test protocols. Even so, it makes the position of the 
present prototype clear. Its finger-level sensing is comparable with that of other flex-sensor gloves, and with 
calibration it detected every test cycle. Its gesture-level performance and its response time, however, are well 
behind systems that report accuracies of 83–97% and response times of a few seconds or less. Closing that gap 
through calibration, coupling-tolerant rules and the revised firmware is the immediate priority. 
Table 10: Comparison with Reported Glove-Based Translators 
Study 
Sensors 
Signs tested 
Reported accuracy 
Reported response 
time 
Bajpai et al. 
(2015) 
Flex, contact, 
accelerometer 
ASL 
83% average (88% 
best) 
Not reported 
Shukor et al. 
(2015) 
Tilt sensors, 
accelerometer 
MySL letters, 
numbers, words 
89% average 
Not reported 
Shaheen and 
Mehmood (2018) 
Flex, MPU6050 
Letters and 
numerals 
93.40% 
Not reported 
Illahi et al. (2021) 
Flex, accelerometer, 
Android app 
Letters, numbers, 
phrases 
> 95% 
< 3 s 
Chu et al. (2021) 
Flex, IMU, FSR 
JSL 
96.9% single user; 
82.5% cross-user 
Not reported 
Abougarair 
(2022) 
Flex, accelerometer 
Six basic signs 
Not reported 
≈ 0.6 s 
This work 
Five flex sensors 
Five vowels 
Finger level: 95.0% 
fixed, 100% 
calibrated; gesture 
level (exploratory, n = 
10): 30% 
40.5 s (mean) 
LIMITATIONS 
The evaluation was small and should be read as a pilot. Only three candidates took part, and none of them were 
deaf, speech impaired or experienced signers, so the results describe sensor behaviour rather than real use by the 
target community. Only the five single-finger vowels were measured formally, even though the firmware also 
recognises four two-finger words. The cycle-level results rely on digitised screenshots rather than raw logged 
data, and the calibration was simulated on the same recordings rather than tested on new trials. The gesture-
level check covers only ten trials and depends on matching log entries to trials by their timestamps. The vowels 
were assigned to fingers for testing and do not follow the MySL handshapes for those letters. Many real signs 
also depend on wrist orientation, motion and the use of both hands, which a single five-sensor glove cannot 
capture. Comfort, usability and durability were not assessed, and the glove was not tried outside the laboratory. 
Timestamps were recorded to the nearest second, which is adequate for delays of this size but too coarse for an 
optimised system. For these reasons, the results should not be taken as evidence that the device is ready for 
practical deployment. 
Planned Validation Study 
To address these limitations, a follow-up study has been designed around the revised firmware. Its main 
elements are summarised in Table 11. Ethical approval will be obtained before recruitment, and participants 
will be recruited with the help of local deaf associations. A certified MySL interpreter will review the gesture

---

### Halaman 15

Page 10756 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
set so that, as far as a single-hand flex glove allows, the gestures correspond to authentic MySL signs. 
Table 11: Design of the Planned Validation Study 
Aspect 
Planned approach 
Participants 
At least 15 adults: deaf or speech-impaired MySL users, experienced signers (e.g., 
interpreters and teachers of the deaf) and non-signers, with a range of hand sizes 
Gesture set 
All nine programmed gestures (A, E, I, O, U, Hi, Bye, Thank you, I love you) plus 
a neutral "no gesture" class; gestures remapped to authentic MySL signs after 
review by a certified interpreter 
Protocol 
User-specific calibration, then 20 repetitions of each gesture in random order; every 
trial video-recorded and labelled independently as ground truth 
Recognition 
metrics 
Overall accuracy, per-class precision, recall and F1-score, and a 10 × 10 confusion 
matrix, reported with 95% confidence intervals, per participant and per participant 
group 
Response 
time 
Time from gesture onset (video and millisecond firmware timestamps) to audio 
onset and to cloud logging; target end-to-end delay below 1 s 
Comfort 
and 
usability 
System Usability Scale (SUS) questionnaire, comfort rating, time to put on the 
glove, and a continuous-wear session of at least 30 min 
Durability 
Repeated-bending bench test of each sensor, with drift in straight and bent readings 
recorded at fixed intervals 
Real-world 
performance 
Short scripted conversations in classroom-like and clinic-like settings, with 
background noise and normal hand movement 
Future 
hardware 
An IMU on the back of the hand and a second glove, to capture wrist orientation, 
dynamic movement and two-handed signs 
CONCLUSION AND RECOMMENDATIONS 
This study built a glove-based sign language translator that uses five flex sensors and an ESP32 to turn finger 
bending into speech, with every recognised gesture logged to Google Sheets, and evaluated it in a preliminary 
bench test with three participants. Analysis of 60 digitised bending cycles showed that each finger produced a 
clear and repeatable signal, with noise below 2% of the swing. With the firmware's fixed reference values, 
95.0% of cycles crossed the detection threshold, and all of the misses involved the middle finger, which has the 
smallest swing. A simulated user-specific calibration detected all 45 test cycles and brought the margins of all 
fingers into a narrow band. An exploratory check of ten logged gestures matched the intended vowel in only 
three cases, with most errors explained by the coupling between the middle and ring fingers and by an over-
sensitive thumb setting. The end-to-end delay averaged 40.5 s and is traced to the way audio output and cloud 
logging are scheduled rather than to sensing. 
The prototype shows that the sensing side of a low-cost translator can be built from inexpensive, widely 
available parts, and the data point clearly to what must change next. It does not yet show that the device works 
as a communication aid, and no claim about practical deployment is made. The next steps are: local audio 
triggering with background cloud logging to bring the delay below 1 s; start-up calibration, smoothing, 
hysteresis and rules that tolerate the natural coupling of neighbouring fingers; and a validation study with deaf, 
speech-impaired and experienced signing participants that reports accuracy, a confusion matrix, precision, recall 
and response time for the complete gesture vocabulary, together with comfort, usability, durability and real-
world performance. In the longer term, an IMU and a second glove will be added to capture wrist orientation, 
dynamic movement and two-handed signs, and the gesture set will be mapped to authentic MySL signs. A 
companion mobile application for text display and multi-language support, and a lighter glove, would help

---

### Halaman 16

Page 10757 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
move the design towards use in schools, clinics and workplaces. 
ACKNOWLEDGEMENT/FUNDING 
The authors thank the Technical Foundation and Diploma Studies School, Faculty of Electrical Technology and 
Engineering, Universiti Teknikal Malaysia Melaka (UTeM), for the facilities and support provided for this 
research, and the candidates who took part in the testing. 
Conflict of Interest Statement 
The authors declare that this research was conducted in the absence of any commercial or financial relationships 
that could be construed as a potential conflict of interest. 
REFERENCES 
1. 
Abdulla, D., Abdulla, S., Manaf, R., & Jarndal, A. H. (2016). Design and implementation of a sign-to-
speech/text system for deaf and dumb people. In 2016 5th International Conference on Electronic 
Devices, Systems and Applications (ICEDSA). IEEE. https://doi.org/10.1109/ICEDSA.2016.7818467 
2. 
Abdullah, A., Abdul-Kadir, N. A., & Che Harun, F. K. (2020). An optimization of IMU sensors-based 
approach for Malaysian Sign Language recognition. In 2020 6th International Conference on Computing, 
Engineering, and Design (ICCED). IEEE. https://doi.org/10.1109/ICCED51276.2020.9415838 
3. 
Abhishek, K. S., Qubeley, L. C. F., & Ho, D. (2016). Glove-based hand gesture recognition sign 
language translator using capacitive touch sensor. In 2016 IEEE International Conference on Electron 
Devices and Solid-State Circuits (EDSSC) (pp. 334–337). IEEE.  
https://doi.org/10.1109/EDSSC.2016.7785276 
4. 
Abougarair, A. J. (2022). Smart glove for sign language translation. International Robotics & Automation 
Journal, 8(3), 109–117. https://doi.org/10.15406/iratj.2022.08.00253 
5. 
Alrubayi, A. H., Ahmed, M. A., Zaidan, A. A., Albahri, A. S., Zaidan, B. B., Albahri, O. S., Alamoodi, 
A. H., & Alazab, M. (2021). A pattern recognition model for static gestures in Malaysian sign language 
based on machine learning techniques. Computers and Electrical Engineering, 95, Article 107383. 
https://doi.org/10.1016/j.compeleceng.2021.107383 
6. 
Amin, M. S., Amin, M. T., Latif, M. Y., Jathol, A. A., Ahmed, N., & Tarar, M. I. N. (2020). Alphabetical 
gesture recognition of American Sign Language using E-Voice smart glove. In 2020 IEEE 23rd 
International Multitopic Conference (INMIC). IEEE. https://doi.org/10.1109/INMIC50486.2020.9318185 
7. 
Annapoorna, E., Nikhil, B. J., Kashyap, B., Abhishek, J., & Vadlapatla, T. S. S. (2023). Hand gesture 
recognition and conversion to speech for speech impaired. E3S Web of Conferences, 391, Article 01148. 
https://doi.org/10.1051/e3sconf/202339101148 
8. 
Bajpai, D., Porov, U., Srivastav, G., & Sachan, N. (2015). Two way wireless data communication and 
American sign language translator glove for images text and speech display on mobile phone. In 2015 
Fifth International Conference on Communication Systems and Network Technologies (CSNT) (pp. 578–
585). IEEE. https://doi.org/10.1109/CSNT.2015.121 
9. 
Bodda, S. C., Gupta, P., Joshi, G., & Chaturvedi, A. (2020). A new architecture for hand-worn sign 
language to speech translator (arXiv:2009.03988). arXiv. http://arxiv.org/abs/2009.03988 
10. Chew, S. K. M., & Cheung, A. K. F. (2022). Media interpreting into Malaysian Sign Language. 
INContext: Studies in Translation and Interculturalism, 2(2). https://doi.org/10.54754/incontext.v2i2.23 
11. Chu, X., Liu, J., & Shimamoto, S. (2021). A sensor-based hand gesture recognition system for Japanese 
sign language. In 2021 IEEE 3rd Global Conference on Life Sciences and Technologies (LifeTech) (pp. 
311–312). IEEE. https://doi.org/10.1109/LifeTech52111.2021.9391981 
12. Elmahgiubi, M., Ennajar, M., Drawil, N., & Elbuni, M. S. (2015). Sign language translator and gesture 
recognition. In 2015 Global Summit on Computer & Information Technology (GSCIT). IEEE. 
13. Galka, J., Masior, M., Zaborski, M., & Barczewska, K. (2016). Inertial motion sensing glove for sign 
language gesture acquisition and recognition. IEEE Sensors Journal, 16(16), 6310–6316. 
https://doi.org/10.1109/JSEN.2016.2583542 
14. Grif, M. G., & Kondratenko, Y. K. (2023). Recognition of isolated gestures of the Russian Sign 
Language based on the component approach. In 2023 IEEE 16th International Scientific and Technical

---

### Halaman 17

Page 10758 
www.rsisinternational.org 
INTERNATIONAL JOURNAL OF RESEARCH AND INNOVATION IN SOCIAL SCIENCE (IJRISS)
ISSN No. 2454-6186 | DOI: 10.47772/IJRISS | Volume X Issue IX September 2026
 
 
 
Conference Actual Problems of Electronic Instrument Engineering (APEIE) (pp. 1510–1513). IEEE. 
https://doi.org/10.1109/APEIE59731.2023.10347694 
15. Häger-Ross, C., & Schieber, M. H. (2000). Quantifying the independence of human finger movements: 
Comparisons of digits, hands, and movement frequencies. The Journal of Neuroscience, 20(22), 8542–
8550. https://doi.org/10.1523/JNEUROSCI.20-22-08542.2000 
16. Illahi, A. A. C., Betito, M. F. M., Chen, C. C. F., Navarro, C. V. A., & Irene, I. V. (2021). Development 
of a sign language glove translator using microcontroller and Android technology for deaf-mute. In 2021 
IEEE 13th International Conference on Humanoid, Nanotechnology, Information Technology, 
Communication and Control, Environment, and Management (HNICEM). IEEE.  
https://doi.org/10.1109/HNICEM54116.2021.9731835 
17. Ji, L., Liu, J., & Shimamoto, S. (2022). Recognition of Japanese sign language by sensor-based data 
glove employing machine learning. In 2022 IEEE 4th Global Conference on Life Sciences and 
Technologies (LifeTech) (pp. 256–258). IEEE. https://doi.org/10.1109/LifeTech53646.2022.9754851 
18. Johari, R. T., Ramli, R., Zulkoffli, Z., & Saibani, N. (2023). MyWSL: Malaysian words sign language 
dataset. Data in Brief, 49, Article 109338. https://doi.org/10.1016/j.dib.2023.109338 
19. Kadam, K., Ganu, R., Bhosekar, A., & Joshi, S. D. (2012). American sign language interpreter. In 2012 
IEEE Fourth International Conference on Technology for Education (T4E) (pp. 157–159). IEEE.  
https://doi.org/10.1109/T4E.2012.45 
20. Kankariya, S., Thakre, K., Solanki, U., Mali, S., & Chunawale, A. (2024). Sign language gestures 
recognition using CNN and Inception v3. In 2024 International Conference on Emerging Smart 
Computing and Informatics (ESCI) (pp. 1–6). IEEE. https://doi.org/10.1109/ESCI59607.2024.10497401 
21. Kau, L.-J., & Zhuo, B.-X. (2016). Live demo: A real-time portable sign language translation system. In 
2016 IEEE Biomedical Circuits and Systems Conference (BioCAS). IEEE.  
https://doi.org/10.1109/BioCAS.2016.7833748 
22. Kau, L.-J., Su, W.-L., Yu, P.-J., & Wei, S.-J. (2015). A real-time portable sign language translation 
system. In 2015 IEEE 58th International Midwest Symposium on Circuits and Systems (MWSCAS). 
IEEE. https://doi.org/10.1109/MWSCAS.2015.7282137 
23. Mathupriya, S., Roopa, D., & Subashini, M. (2023). IoT translator for sign language based on glove. In 
2023 Intelligent Computing and Control for Engineering and Business Systems (ICCEBS). IEEE. 
https://doi.org/10.1109/ICCEBS58601.2023.10448829 
24. Mori, Y., & Toyonaga, M. (2018). Data-glove for Japanese sign language training system with gyro-
sensor. In 2018 Joint 10th International Conference on Soft Computing and Intelligent Systems and 19th 
International Symposium on Advanced Intelligent Systems (SCIS-ISIS). IEEE. 
25. Pathan, R. K., Biswas, M., Yasmin, S., Khandaker, M. U., Salman, M., & Youssef, A. A. F. (2023). Sign 
language recognition using the fusion of image and hand landmarks through multi-headed convolutional 
neural network. Scientific Reports, 13(1). https://doi.org/10.1038/s41598-023-43852-x 
26. Santosh Kumar, B., Rachna, P., Hiremath, R. B., Ramadurgam, V. S., & Shaw, D. K. (2022). Survey on 
implementation of TinyML for real-time sign language recognition using smart gloves. In 2022 Fourth 
International Conference on Emerging Research in Electronics, Computer Science and Technology 
(ICERECT). IEEE. https://doi.org/10.1109/ICERECT56837.2022.10060135 
27. Sensor glove-based sign language recognition for Arabic and American sign languages. (2020). In 2020 
2nd Novel Intelligent and Leading Emerging Sciences Conference (NILES). IEEE. 
28. Shaheen, H., & Mehmood, T. (2018). Talking Gloves: Low-cost gesture recognition system for sign 
language translation. IEEE. 
29. Shukor, A. Z., Miskon, M. F., Jamaluddin, M. H., Ali Ibrahim, F. B., Asyraf, M. F., & Bahar, M. B. B. 
(2015). A new data glove approach for Malaysian Sign Language detection. Procedia Computer Science, 
76, 60–67. https://doi.org/10.1016/j.procs.2015.12.276 
30. V, V., Shashank, S., Shetty, S., Kumar, S., & S, V. (2023). A review: Sign language converter using hand 
gloves. International Journal of Scientific Research in Engineering and Management, 7(3). 
https://doi.org/10.55041/ijsrem17898 
31. Yee, C. V. (2018). Development of Malaysian Sign Language in Malaysia.
