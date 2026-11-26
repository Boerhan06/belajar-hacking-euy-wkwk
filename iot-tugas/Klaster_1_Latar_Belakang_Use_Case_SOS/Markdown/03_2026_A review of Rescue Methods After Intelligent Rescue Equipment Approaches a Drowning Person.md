# A review of Rescue Methods After Intelligent Rescue Equipment Approaches a Drowning Person

> **Klaster Literatur:** Klaster 1: Latar Belakang & Use-Case (Gelang SOS untuk Lansia & Disabilitas)  
> **Penulis:** Dewei Pan, Q. Zhang, Zhijie Liu, Wei Zhang, Runqiang Li  
> **Tahun Publikasi:** 2026  
> **Publikasi / Jurnal:** Pomorstvo  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.31217/p.40.1.5](https://doi.org/10.31217/p.40.1.5)  

---

## 📌 Abstrak / Intisari Ilmiah
Drowning is still the main cause of accidental death worldwide, and intelligent rescue technology is needed for rapid and effective intervention. This study investigated the rescue methods used by intelligent devices - autonomous rescue devices, auxiliary self-rescue devices, and wearable intelligent rescue devices - when reaching a person who has fallen into the water. Using IEEE Xplore, Scopus, Web of Science and other digital databases, this paper systematically reviews the research on hardware design, sensor integration, control algorithm and human-computer interaction from 2009 to 2025. The results show that multi-sensor fusion, adaptive stability and safe human computer interaction are crucial for reliable performance in complex aquatic environments. Future advancements are proposed, include enhancing robust perception, adaptive stabilization, and human-computer interaction security to critically address system-level challenges of cross-domain coordination, standardized interoperability, and reliable algorithmic decision-making in complex aquatic environments. These insights provide a basis for advancing intelligent drowning rescue systems, linking technological innovation with practical safety applications.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

78
Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99 © Faculty of Maritime Studies Rijeka, 2026
https://doi.org/10.31217/p.40.1.5
 
A review of Rescue Methods After Intelligent Rescue Equipment 
Approaches a Drowning Person
Dewei Pan1, Qiang Zhang1*, Zhijie Liu2, Wei Zhang3,4, Runqiang Li1, Binglin Wen1 
1	 School of Navigation and Shipping, Shandong Jiaotong University, No. 1508, Hexing Road, Shuangdaowan Science and Technology City, Weihai 
264200, Shandong Province, China
2 	Naval Architecture and Ocean Engineering College of Dalian Maritime University, Dalian Maritime University, No. 1 Linghai Road, Ganjingzi 
District, Dalian 116026, Liaoning Province, China
3 	China Yantai Salvage, No. 100 Zhifudao East Road, Zhifu District, Yantai 264099, Shandong Province, China
4 	College of Shipbuilding Engineering, Harbin Engineering University, No. 145, Nantong Street, Nangang District, Harbin City, 150001, 
Heilongjiang Province, China
*	Corresponding author
ARTICLE INFO
Review article
Received 3 July 2025
Accepted 6 October 2025 
Key words:
Intelligent drowning rescue device 
Autonomous rescue device 
Auxiliary self-rescue device 
Wearable intelligent rescue device
ABSTRACT
Drowning is still the main cause of accidental death worldwide, and intelligent rescue technology 
is needed for rapid and effective intervention. This study investigated the rescue methods used 
by intelligent devices - autonomous rescue devices, auxiliary self-rescue devices, and wearable 
intelligent rescue devices - when reaching a person who has fallen into the water. Using IEEE Xplore, 
Scopus, Web of Science and other digital databases, this paper systematically reviews the research 
on hardware design, sensor integration, control algorithm and human-computer interaction 
from 2009 to 2025. The results show that multi-sensor fusion, adaptive stability and safe human-
computer interaction are crucial for reliable performance in complex aquatic environments. Future 
advancements are proposed, include enhancing robust perception, adaptive stabilization, and 
human-computer interaction security to critically address system-level challenges of cross-domain 
coordination, standardized interoperability, and reliable algorithmic decision-making in complex 
aquatic environments. These insights provide a basis for advancing intelligent drowning rescue 
systems, linking technological innovation with practical safety applications.
1	 Introduction
Water activities play an important role in global lei-
sure and commercial operations. However, frequent 
drowning accidents pose serious threats to human safe-
ty, as shown in Fig. 1. Statistical data indicate that the 
mortality rate of drowning accidents is extremely high 
[1-3]. During the rescue process, rescue time, tools, and 
methods critically influence the survival outcomes of 
drowning persons [4]. 
1.1	 Traditional rescue tools and their limitations
Many devices such as lifebuoys, life jackets, rescue 
nets, rescue baskets, rescue stretchers, rope throwers, 
lifeguards, and other rescue tools have been developed 
[5]. In general, these rescue tools should be operated by 
professional rescuers only after reaching the drowning 
person to ensure safety [6]. However, in harsh environ-
ments, rescue team members may not be able to work 
properly and their safety is threatened [7]. 
Most drowning incidents (63%) were witnessed and 
the majority of witnesses (74%) were present at the 
time of drowning. One-fifth of rescue attempts are con-
ducted by non-professionals, and these non-profession-
al rescue operations inevitably have potential risks [8]. 
Therefore, reducing the difficulty of rescue tools and 
eliminating direct contact between rescuers and drown-
ing persons can play a significant role in improving res-
cue efficiency and eliminating danger to rescuers. 
Consequently, improving or innovatively redesigning 
rescue devices to enable safe and efficient rescue proto-

---

### Halaman 2

79
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
cols after reaching drowning persons has emerged as an 
urgent challenge that requires prioritized resolution.
1.2 	The role of intelligent technologies in drowning 
rescue
Advancements in intelligent technologies can signifi-
cantly reduce the challenges in drowning rescue opera-
tions. From autonomously navigated Unmanned Surface 
Vehicles to UAVs equipped with advanced sensing sys-
tems, and intelligent life-saving devices featuring auto-
matic triggering mechanisms, these smart technologies 
demonstrate substantial application potential in water 
rescue scenarios, such as rapid response, accurate posi-
tioning of drowning persons, and timely intervention 
thereby potentially enhancing operational rescue effi-
ciency by enabling faster drowning person access and 
reducing the physical burden on rescue personnel 
[9-12].
With the rapid advancement of artificial intelligence 
(AI) technologies, the research on intelligent devices for 
drowning rescue has increased. To facilitate systematic 
analysis, this study categorizes all intelligent rescue de-
vices into three categories based on their operational 
methodologies after reaching drowning persons (See 
Appendix A: Table 1 Cross-technology comparison 
table): (1) autonomous rescue of drowning persons by 
remotely activated intelligent devices, (2) assisted self-
rescue enabled by remotely deployed intelligent sys-
tems, and (3) self-rescue through wearable intelligent 
rescue devices.
1.3 	Overview of the three rescue device categories
1.3.1 Autonomous rescue device
Autonomous rescue operations via remotely activat-
ed intelligent rescue systems have demonstrated signifi-
cant potential for fully autonomous drowning person 
retrieval [13]. Through remote operation interfaces or 
embedded machine-learning algorithms, intelligent de-
vices can actively rescue a drowning person to ensure 
that the head of the drowning person is exposed to the 
surface of the water, and even the body is completely ex-
posed to the surface of the water, as shown in Fig. 2. All 
systems achieve fully autonomous rescue without 
drowning person cooperation. Detailed mechanisms are 
described in Section 3.
During the rescue process, the requirement for the 
self-rescue ability of the drowning person is not high, 
and even the drowning person does not need to have 
self-rescue ability. The next-generation intelligent res-
cue devices will be able to identify the drowning person 
more accurately and complete the rescue task inde-
pendently, according to the attitude of the drowning 
person.
Fig. 1 Number and rate of drowning deaths by WHO region [1]

---

### Halaman 3

80
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
 
(a) Unmanned AGaPaS rescue vessel [14] 
(b) Attitude adaptive rescue robot [15]
(c) Rescue underwater device [13] 
 (d) Wave-adapted rescue device [16]
(e) Mechanical arm [17]
  (f) Human Lifting and Navigation System [18]
(g) Deformable Water-Mobile Robot [19]
Fig. 2 Autonomous rescue devices
Drag rope
Rescue net
Balancing weight
a
c
b
d

---

### Halaman 4

81
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
1.3.2 	Auxiliary self-rescue device
After the remote start of an intelligent device, it is 
necessary to use intelligent devices such as intelligent 
lifeboats and UAVs to assist drowning person in self-res-
cue, as shown in Fig. 3. Through remote control or au-
tonomous navigation, it can quickly reach the position 
of a drowning person, release a rescue tool[20]. Both 
platforms rapidly provide flotation devices without res-
cuer entry. Operational details are given in Section 4. 
These devices are designed to reduce the risk to rescu-
ers by allowing operations in complex or dangerous wa-
ter environments that would be too hazardous for 
human responders.
1.3.3 	Wearable intelligent rescue devices
The intelligent device worn by a drowning person re-
lies on the intelligence of self-rescue tools, such as intelli-
gent life jackets and intelligent rescue bracelets, to 
provide a more reliable means of self-rescue for the 
drowning person [22]. These devices can be activated im-
mediately after a person falls into the water, providing the 
necessary buoyancy support, physiological parameter 
measurement and information transmission functions, 
avoiding excessive energy consumption by the drowning 
persons and is inferred to significantly increased the sur-
vival opportunity, as shown in Fig. 4. Upon water entry, 
the integrated sensors trigger inflation and simultane-
ously transmit location and vital-sign data to the rescue 
centre, markedly improving survival probability.
(a) Unmanned aerial vehicles (UAV) [20]
(b) Remotely operated marine rescue vehicle [21]
Fig. 3 Assisted self-rescue enabled by remotely deployed 
intelligent systems
(a) Diagram of the internal block distribution within the life 
jacket [23]
(b) Kingii Wristband [24]
Fig. 4 Wearable intelligent rescue devices

---

### Halaman 5

82
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
1.4 	Current challenges of intelligent rescue device
However, intelligent rescue device still faces many 
challenges in practical applications, including environ-
mental adaptability, device performance in special res-
cue scenarios, operation threshold of rescue device, 
autonomous decision-making ability, interaction safety 
with drowning person, and rescue efficiency.
This paper provides a systematic review of the techni-
cal approaches and practical challenges associated with 
intelligent drowning rescue systems, establishing a com-
prehensive research framework for this field. Through 
comparative analysis of three primary technological cat-
egories—autonomous rescue devices, auxiliary self-res-
cue device, and intelligent wearable devices—the 
research identifies critical limitations in current intelli-
gent rescue device, particularly regarding precise target 
localization, operational stability, and safe human-device 
interaction in complex aquatic environments, while spe-
cifically highlighting that advancements in multi-sensor 
data fusion and intelligent decision-making algorithms 
represent pivotal technological breakthroughs for en-
hancing rescue success rates. 
Empirical evidence from numerous case studies (in-
cluding UAV-delivered life buoy systems and underwa-
ter robotic rescue operations) suggest that that smart 
rescue devices have the potential to reduce response 
times during the critical golden rescue window while 
potentially minimizing risks to emergency personnel, 
with findings that have significant implications for im-
proving global drowning rescue outcomes. By eliminat-
ing the need for direct human entry into dangerous 
waters, the use of robotic rescue devices logically infers 
a substantial reduction in the risk of secondary drown-
ing incidents where rescuers become drowning persons 
themselves. The research contributions extend beyond 
technological applications as they not only accelerate 
the implementation of rescue robotics but also provide 
an evidence-based foundation for developing more ef-
fective drowning prevention and emergency response 
strategies, offering valuable guidance for both techno-
logical development and public safety policy formula-
tion in aquatic rescue operations.
2	 Methods 
Based on the analysis of multiple digital databases, 
this paper summarizes the search terms, study period, 
inclusion / exclusion criteria are shown in Table 2. A 
flow diagram is provided (Fig. 5).
Table 2 Search strategy
Search terms (AND, OR, NOT) 
and truncation 
(wildcard characters like *)
(Drown* or drowning person) AND (smart rescue device OR unmanned rescue system OR 
autonomous rescue device OR intelligent drowning rescue device OR unmanned rescue vehicle 
OR unmanned surface vehicle OR UAV OR smart life jackets OR wearable intelligent rescue device 
OR wearable intelligent rescue device) NOT (animal)
(Drowning rescue OR water rescue OR aquatic rescue OR water emergencies) AND 
(autonomous rescue OR intelligent rescue devices (robots, UAVs, wearables) OR intelligent 
drowning rescue device OR autonomous rescue device OR auxiliary self-rescue device OR 
wearable intelligent rescue device) NOT (industrial robot)
Databases searched
WHO IRIS, Taylor & Francis, CORE, DOAJ, Biblioteka Nauki, ACM Digital Library, MDPI, Scopus, 
ACS Publications, Science Direct, Springer, IEEE Xplore, Web of Science (WoS), CyberLeninka, 
Civilica, Cnki, Wanfang
Years of search
2009 ~ 2025
Inclusion criteria (why did 
you include it?)
Intelligent rescue device approaches a drowning person
Rescue method of intelligent device
Hardware structure of intelligent devices
New technical methods or algorithm design or device improvement
Includes empirical data or case analysis or practical application effect evaluation
Exclusion criteria (why did 
you rule it out?)
Traditional drowning rescue tools 
Robot without rescue function
Robots for land and air rescue
No new technical methods or device improvements were demonstrated
Studies on non-drowning water emergencies (e.g., shipwrecks, flood evacuation).
No empirical data or case analysis or practical application effect evaluation

---

### Halaman 6

83
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
3	 Autonomous rescue of drowning persons by 
remotely activated intelligent devices
In water rescue work, it is very important and rela-
tively rare for intelligent devices to quickly, autonomous-
ly, and effectively rescue drowning persons. Achieving 
this goal remains challenging because of various factors 
such as complex aquatic environments, unpredictable 
weather conditions, and limitations in rescue device and 
technologies. Researchers have explored diverse ap-
proaches to realize autonomous drowning person rescue 
under these constraints. 
3.1	 Intelligent devices employing rescue nets 
or lifting baskets for autonomous rescue of 
drowning persons
Rescue nets or lifting baskets are commonly used to 
recover drowning person in traditional maritime rescue 
work. However, large hulls are often constrained by fac-
tors such as the water depth, underwater obstacles, 
channel width, and maneuverability during operation. 
To address these challenges, researchers have designed 
small, agile, and slightly intelligent rescue device to im-
prove the rescue effects.
Records screened 
(n = 1192) 
Records excluded** 
(n = 46) 
Reports sough t for retrieval 
(n = 1146) 
Reports not retrieved 
(n = 89) 
Reports assessed for eligibility 
(n = 1057) 
Reports excluded: 
Reason 1 (n = 139) 
Reason 2 (n = 151) 
Reason 3 (n = 277) 
Reason 4 (n = 373) 
Studies included in review 
(n = 117) 
Reports of included studies (n = 0) 
Records identiϐied from*: 
Databases (n = 1285) 
Registers (n = 0) 
Records removed before screening:  
Duplicate records removed  
(n = 93) 
Records marked as ineligible 
by automation tools (n = 0) 
Identiϐication of studies via databases and registers 
Identiϐication 
Screening 
Included 
Fig. 5 Flow diagram

---

### Halaman 7

84
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
Günther F. Clauss et al. realized the rapid deploy-
ment of the rescue basket by optimizing the hull dimen-
sions of the unmanned AGaPaS rescue ship, enabling 
quickly approach and safely rescue of the drowning per-
son [14]. Shuchao Ma designed a compact ice-surface 
rescue robot, which can carry a rescue stretcher instead 
of firefighters to complete the rescue missions [25]. The 
stretcher’s linear and rotational movements eliminated 
posture constraints during drowning person rescue. 
The AUV invented by Taylor Davis et al. rescued the 
drowning person by releasing a mesh-based floating de-
vice from underwater according to the position of the 
drowning person, and dragged the device and the 
drowning person back to shore [26]. Zhang Yichi stud-
ied the method of combining two intelligent lifebuoys 
and rescue nets to rescue unconscious drowning per-
son, which provides valuable insights for collaborative 
rescue robots to enhance operational efficiency [27].
3.2 	Optimization for environmental adaptability 
and stability
Reducing the impact of environmental forces and ac-
curately controlling the rescue process are conducive to 
improving rescue efficiency. Fully dynamic diving strat-
egies and precise positioning perception systems can 
ensure the flexibility and accuracy of rescue baskets 
when approaching the position of a drowning person 
[13].
The adoption of suspension systems can mitigate the 
effects of wind and waves on the stability of rescue bas-
kets or lifting baskets salvaging the drowning person 
and providing a more stable operational environment 
for rescue operations [16, 28-29]. Shipeng Wang et al. 
proposed an optimization scheme for attitude adjust-
ment of rescue robots based on dynamic programming 
algorithm, which eliminates the change of robot stabili-
ty during the rescue process by adjusting the amount 
and position of ballast water in real time [15].
3.3 	Intelligent devices employing robotic 
manipulators or mechanical arms for 
autonomous rescue of drowning person
When a drowning person is unconscious or physi-
cally unable to save themselves, it is feasible to return to 
a safe area by clamping the drowning person with a ma-
nipulator [30]. Canjun Yang et al. designed a manipula-
tor that can rescue a drowning person. By precisely 
controlling and adjusting the stiffness, the manipulator 
can accurately perform rescue tasks and protect the res-
cue from secondary injuries [31]. 
The manipulator exhibits advantages of accurate po-
sition control, high mobility, rapid response, and opera-
tional stability. The vision-based drowning event 
automatic detection system calculates the position of 
the drowning person using image processing algo-
rithms and starts the robotic arm to pull the drowning 
person out of the water [32]. The gantry robot arm 
moves in a three-dimensional space based on the 
drowning person’s centroid coordinates, provides buoy-
ancy to the drowning person via the lifebuoy, and pulls 
the drowning person back to the safe zones [33-36]. 
The robotic arm designed by Weihao Yuan et al. can 
constantly adjust its posture to adapt to dynamic body 
changes of a drowning person, ensuring that it can al-
ways grasp the person and remain stable [17]. Further-
more, Hao Deng et al. designed a soft robotic arm to 
approach a drowning person from multiple angles, ap-
plying a mild and secure contact force on the drowning 
person to prevent secondary injuries to the drowning 
person [37]. 
3.4 	Intelligent device with airbag system for 
autonomous rescue of drowning person
The integration of airbag systems with power device 
enables precise control of lifter speed and ensures op-
erational safety. Junjie Huang et al. developed a new 
type of underwater search and rescue vehicle(USRV) 
with a low hydrodynamic resistance profile, capable of 
submerging beneath the drowning person and releasing 
the airbag. This advanced prototype regulates inflation 
rates to achieve controlled buoyant ascent, with real-
time buoyancy adjustment mechanisms maintaining 
USRV stability during surfacing operations [38,39]. Sub-
sea prepositioned rescue systems demonstrate compa-
rable efficacy, as seabed-mounted lifting devices can be 
rapidly inflated to vertically lift drowning person. The 
weight-balancing technologies incorporated in these 
systems maintain an optimal body orientation through-
out the ascent trajectory [18].
3.5 	Structural advantage-based intelligent device 
for autonomous rescue of drowning person
During the rescue process, an intelligent rescue tool 
assists the drowning person in maintaining an appro-
priate posture, which can reduce secondary injuries and 
help the rescue tool maintain sufficient stability. 
Changlong Ye et al. invented an adaptive aquatic rescue 
apparatus with reconfigurable structural morphologies, 
capable of transitioning between linear, triangular, U-
shaped and curved configurations in response to envi-
ronmental constraints and mission requirements. This 
polymorphic design can clamp the drowning person 
and bring the drowning person back to the shore [19]. 
Concurrently, Jiahou Zhao et al. designed a catama-
ran-style rescue platform based on ergonomic princi-
ples that has elbow support and chest support to 
stabilize the normal posture of the drowning person 
and prevent the drowning person from slipping off the

---

### Halaman 8

85
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
rescue device. When the drowning person reaches the 
position specified by the robot, the airbag at the back of 
the rescue device is inflated and drained, which can en-
hance buoyancy, adjust the center of gravity, and ensure 
the safety of the drowning person and rescue device 
[40].
Currently, many intelligent devices are used to res-
cue drowning person. Most rely on drowning person to 
seize rescue tools themselves, and few intelligent devic-
es can independently rescue drowning person. The 
above device can independently lift the drowning per-
son out of the water. It also considers the influence of 
the position and posture of the drowning person on the 
performance of the intelligent device and drags the 
drowning person back to the safe zone, which is of great 
significance for rescuing those who are psychologically 
and physically affected. 
4	 Assistive intelligent devices for drowning 
person self-rescue
4.1 	Unmanned aerial vehicle(UAV)
4.1.1 Payload and deployment mechanisms
UAVs can be used to quickly deliver lifebuoys or life 
rafts to drowning person. After determining the loca-
tion of the drowning person, the UAV applies life-saving 
device to the drowning person through a simple deliv-
ery mechanism [41-45]. In 2017, Celia Seguin et al. 
proved through 28 simulation experiments, that UAVs 
have been shown to be faster than traditional life-saving 
operations in delivering life-saving device. The efficien-
cy of UAVs is more significant, particularly under medi-
um and severe sea conditions. UAVs can also protect 
lifeguards from high sea-state risks [20].
4.1.2 Positioning and navigation accuracy
Whether a drowning person can catch life-saving de-
vice depends on the deployment accuracy of life-saving 
device [46-49]. The DJI Phantom 4 UAV is equipped 
with a 60 Newton automatic inflatable lifebuoy, which is 
operated by a remote control and flies within the visual 
line of sight. It achieves precise delivery by hovering 
above drowning persons to deploy a life buoy [50]. 
Nikolay A.Mostakov et al. studied that UAVs can hover 
above the drowning person in a storm environment to 
ensure that the drowning person accurately grasps the 
life-saving tools, and successfully assisted in a rescue 
operation on the Anapa city beach in Russia [51]. 
A.Michael Shekari investigated the use of a commu-
nication device to guide a drowning person to seize life-
saving tools [52]. Liu Jie designed a UAV system that 
deploys compressed inflatable life buoys to drowning 
person from approximately 2 meters above the water 
surface, then performs fixed-point circling around the 
drowning person while providing real-time Global Posi-
tioning System (GPS) positioning updates to support 
subsequent rescue operations [53]. Ropes can also as-
sist UAVs to rescue multiple drowning person, such as 
UAVs that can deploy buoys with tow ropes [54].
Accurate position control technology is beneficial for 
the accurate delivery of life-saving device. The buoy car-
ried by the UAV designed by Hoang Mai Tran is control-
led by a servo motor, which can rotate between three 
different positions through a remote control signal to 
ensure that the drowning person can easily touch the 
buoy [55]. ROLFER uses the differential Global Position-
ing System (DGPS) algorithm to improve positioning ac-
curacy and ensure that the UAV can accurately release 
the life buoy or other life-saving device automatically 
above the drowning person [56-58].
Unmanned Aerial Vehicles (UAVs) equipped with 
multiple rescue tools can simultaneously rescue several 
drowning persons in a single mission [59]. Li Min et al. 
designed a UAV ejection mechanism that deploys multi-
ple compressed life rings, which rapidly inflate into 
standard ring-shaped lifebuoys within 15 seconds [60]. 
The Geofencing technology proposed by Anthony C Ijeh 
and Ahmed Naufal AL Masri effectively prevents poten-
tial collisions that may occur when UAVs continuously 
deliver rescue device to drowning person across multi-
ple zones [61].
4.2 	Autonomous Underwater Vehicle (AUV)
From 2014 to 2020, China recorded an annual aver-
age of 1923 water accidents, endangering approximate-
ly 14,000 people at risk. In general, few researchers 
have specifically designed AUVs for underwater search 
and rescue [62]. Eike Krieg et al. designed and experi-
mentally validated a submersible robot for rescuing 
drowning person. The rescue device on top of the robot 
can fix the person and tow the drowning person from 
the water to the surface [63]. HaoDong Qi and Ying Tang 
designed a rescue robot capable of sinking below the 
drowning person by adjusting the amount of water in 
the tank, activating buoyancy-enhancement devices to 
encapsulate targets with an extended airbag and lifting 
it to the water surface [64]. To investigate the rescue 
performance in complex underwater environments, the 
multi-functional robotic arm designed by Bing Sun et al. 
carried out rescue dummy tests in the sea area near the 
Jigujiao reef in the Yangtze River estuary, and the results 
were good [65]. 
4.3 	Unmanned Surface Vehicle (USV)
During a drowning rescue operation, an USV can 
quickly approach a drowning person and release life-
saving tools automatically or remotely to provide buoy-

---

### Halaman 9

86
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
ancy support [66-68]. In recent years, there are not 
many related intelligent products on the market, mainly 
including intelligent lifebuoys such as U-safe, EMILY, 
Hover Ark H3 and Dolphin 1, where U-safe and EMILY 
have attracted predominant research attention. 
4.3.1 U-shaped intelligent lifebuoy
4.3.1.1 Structural design
Compared with traditional lifebuoy, intelligent life-
buoy demonstrate the advantages of remote control 
and accurate deployment, which are expected to im-
prove the success rate of rescuing drowning person 
while reducing the technical requirements and opera-
tional risks of rescuers, as they eliminate the need for 
rescuers to enter hazardous waters directly [69]. The 
U-Safe lifebuoy developed by Portugal’s Noras Per-
formance Company incorporates navigational capabili-
ties by redesigning the conventional circular structure 
of a traditional lifebuoy into a U-shaped configuration 
(Fig. 6), equipped with dual electric propeller thrust-
ers at its stern [70, 71]. When the U-shaped intelligent 
lifebuoy reaches a drowning person, it slows down ac-
cording to the actual situation and attempts to stop 
next to the drowning person. Once the drowning per-
son grips the lifebuoy, he can stay in the U-shaped area 
of the lifebuoy. The intelligent lifebuoy activates its 
navigation system and power device to quickly bring 
the drowning person back to the shore or rescue ship 
[11, 72].
Fig. 6 U-shaped intelligent lifebuoy [11]
4.3.1.2 Interaction safety
To ensure that the drowning person can securely 
grasp and maintain the protection range of the lifebuoy, 
Shuaijun Wang et al. and YM Kalyan et al. integrated in-
flatable airbags in the inner ring of the U-shaped rescue 
device to expand and closely fit the waist of the human 
body. 
The human body relies on the buoyancy generated 
by the main body of the rescue device to float on the wa-
ter surface and provide sufficient stability and buoyancy 
[73, 74]. Chu Jing et al. conducted quantitative research 
on the aspects of manufacturing difficulty, structural 
strength, portability, motion efficiency, innovation, and 
comfort. The designed triangular rescue device demon-
strated the characteristics of light weight, strong mobil-
ity, and high safety [75]. Auxiliary rescue devices are 
arranged inside a lifeguard designed by Gao Guangzhen, 
which can partially achieve the goal of rescuing uncon-
scious people to a certain extent [76].
4.3.1.3 Speed
To enhance the speed of U-shaped lifebuoys, Cao 
Jiaxiu integrated the multihull vessel concept with a 
conventional lifebuoy to design a trimaran fork-type 
rescue device that significantly improved the operation-
al speed [77].
4.3.1.4	Limited innovation and product homogeneity  
	
of the intelligent lifebuoy 
The intelligent lifebuoy industry has experienced 
rapid development, particularly in China, where the 
combination of a large population and extensive water 
areas has driven accelerated growth in this sector. Nev-
ertheless, current products show negligible competitive 
differentiation and exhibit relatively homogeneous con-
figurations and functionalities. These products lack 
groundbreaking designs that are capable of effective 
breakthrough design in complex rescue scenarios to 
further enhance the rapidity design and ergonomics de-
sign [76, 116, 117]. 
4.3.2 Emergency Integrated Lifesaving Lanyard(EMILY)
EMILY (Emergency Integrated Lifesaving Lanyard) is 
a remote rescue robot invented by Tony Mulligan, as 
shown in Fig. 7. 
Fig. 7 EMILY [89]

---

### Halaman 10

87
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
EMILY can quickly rescue drowning person when 
rescuers find it difficult to reach quickly and can sup-
port multiple persons [87]. EMILY also supports the use 
of sonar technology for search and rescue missions. 
With its initial 10-day deployment in Greek territorial 
waters, EMILY assisted the Greek Red Cross in the safe 
transfer of more than 240 refugees to shore [88].
To improve the intelligence level of EMILY, Dr. Robin 
R. Murphy applied the artificial potential field theory to 
generate the vector field pointing to the target point, to 
realize the gradual decrease of the speed as EMILY ap-
proached the target position, to move quickly away from 
the target and decelerate when approaching the target, to 
avoid further damage to the drowning person [90].
4.3.3 Other USVs
There are many challenges in the popularization and 
application of commercial water rescue products. Low-
cost and easy-to-deploy remotely operated USVs provide 
an effective solution to these problems. Particularly in 
low- and middle-income countries, such robots are ex-
pected to play an important role in these areas because of 
their unique advantages and are expected to solve the 
problem of frequent drowning accidents [21, 89].
Researchers have pursued technological innovations 
to develop intelligent rescue systems with advanced 
functionalities to enhance the efficiency of USVs in deliv-
ering rescue tools. Jianhua Wang et al. designed a catama-
ran unmanned vessel with a payload capacity exceeding 
100 kilograms, capable of transporting individuals back 
to secure locations [66]. Shashank M Gowda et al. devel-
oped rescue device that can quickly and accurately res-
cue drowning person under low-visibility and harsh sea 
conditions. This device is designed to automatically track 
the positioning device worn by a drowning person, 
known as the lifesaving band [91]. T. Gopu et al. proposed 
a gesture-controlled rescue robot where personnel on 
shore can control the robot’s high-torque motors via in-
tuitive hand signals [92]. Haiming Fu et al. engineered an 
amphibious rescue vessel equipped with infrared sens-
ing, voice communication capabilities, remote control, 
and adaptive obstacle avoidance functions [93]. The de-
sign by Shuai Zhao et al. features a vertically separable 
structure that offers high stability and adaptability, en-
suring the precise deployment of life-saving device via a 
pneumatic ejection mechanism [94].
Many drowning incidents involve multiple drowning 
persons. Aníbal Matos et al. studied the structure and 
control systems of small Unmanned Capsules (UCAPs), 
which are capable of autonomously navigating to desig-
nated “drowning person” locations. A single vessel can 
release multiple capsules, making it suitable for large-
scale maritime search and rescue operations [95]. 
UCAPs designed by Bruno M. Ferreira et al. can accom-
modate an inflatable life raft designed for four people, 
making them suitable for simultaneously rescuing mul-
tiple drowning persons [67]. In the process of designing 
a trimaran unmanned surface vessel equipped with 
throwable lifebuoys, Zhang Di considered factors such 
as speed, maneuverability, seakeeping ability, and self-
righting characteristics, with the capability to adjust the 
number of lifebuoys released each time [96]. J Zhang 
and Junfeng Xiong have researched unmanned surface 
vessel equipped with rope to rescue drowning persons 
and bring them back to safety [97,98].
5	 Intelligent shore-based intelligent devices 
for life-saving device deployment
Intelligent shore-based throwing rescue devices 
demonstrate advantages in improving rescue accuracy 
and speed. Feng Dewei integrated motion detection 
with the PSPNet deep learning model to identify drown-
ing persons’ positions, triggering an alarm promptly 
and projecting a rescue rope toward the target location 
within 2 seconds, as shown in Fig. 8 [99]. 
     
	
(a) External view 	
(b) Internal view 
1. surveillance camera, 2. red alarm light, 3. green indicator light, 4. support pillar, 5. device frame, 6. launch tube, 7. control module, 
8. rescue rope, 9. fixed nail, 10. frame door, 11. magnet, 12. launch head
Fig. 8 Shore based throwing rescue device [99]
1
2
3
4
5
Lake
5
6
12
11
10
7
8
9

---

### Halaman 11

88
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
The frame houses a camera, launch tube, control 
module and magnet-fixed rescue rope, enabling auto-
matic projectile deployment once the drowning per-
son’s position is confirmed. Xiong Linlin et al. have 
invented a new type of throwing bomb for water rescue, 
which employs manual/motorized throwing methods to 
rescue drowning person in close proximity to the shore 
or at a distance [100]. After the rescue bomb enters the 
water, it can be remotely controlled in the vicinity of the 
drowning person, allowing for the decision to activate 
an airbag based on the actual situation. The rescue rope 
carried by the rescue device ensured that the drowning 
person could be pulled back to the shore.
6	 Wearable intelligent life-saving robot
Common wearable intelligent rescue robots include 
smart life jackets and wristbands. 
6.1	 Intelligent Life Jacket 
The intelligent life jacket can achieve automatic acti-
vation, real-time monitoring [105], and signal transmis-
sion [106] through the use of sensing activation devices 
[101], information technology and grid management 
[102], real-time monitoring device (such as heart rate 
and blood oxygen saturation monitors [103]), and sens-
ing and intelligent devices (such as GPS tracking [104] 
and sound alarms). This enhance is anticipated to res-
cue efficiency and response speed, while also improving 
the intelligence level and management efficiency of life 
jackets through system integration and management 
[107].
6.1.1 Intelligent life jacket with water level monitoring
The intelligent rescue functionality of the life jacket is 
reliably activated based on precise water-level measure-
ments around the device. The intelligent life jacket sys-
tem based on the OneNET cloud service platform can 
analyze signals from a water level sensor to ascertain 
whether someone has fallen into the water, automatically 
locate the position of the drowning person, and activate 
the sound and light alarm to issue an “SOS” signal [22].
6.1.2 	Intelligent life jackets with physiological 
parameter monitoring
An intelligent life jacket can accurately determine 
whether an individual faces drowning risk by real-time 
monitoring of physiological parameters and comparing 
them with a preset safety threshold. Nuhu Bello Kon-
tagora et al. developed an intelligent drowning alarm 
system that utilizes a pulse sensor to monitor the heart 
rate of swimmers. When the heart rate exceeds 45–150 
bpm, the inflatable life jacket swiftly elevates the 
drowning person to the surface of the water [108]. Si-
mon Winkler designed a mobile device to prevent acci-
dental child drowning, integrating a respiratory sensor 
with a hybrid framework: rule-based algorithms analyz-
ing signal slopes and a convolutional neural network 
(CNN) classify signals to distinguish normal breathing 
from respiratory distress [109]. Duong Bao Nguyen em-
bedded heart rate sensors, water immersion detectors, 
and GPS locators into life jackets. The system automati-
cally activates alarms when detecting sudden heart rate 
spikes or immersion in water [23].
6.1.3 	Intelligent life jacket activated by human posture 
or motion patterns
The life jacket can monitor the wearer’s posture or 
movement in real time through built-in sensors, and it 
automatically activates if any abnormal parameters are 
detected. Smart personal flotation device (SmartPFD) is 
a novel design of an intelligent inflatable life jacket that 
incorporates an Inertial Measurement Unit (IMU) to 
monitor the wearer’s posture and acceleration [110]. 
The Smart Powered Life Jacket System (SPLJ) utilizes 
high-sensitivity triboelectric fiber sensors to monitor 
the movement status of a person who has fallen into the 
water. It integrates wireless sensor network and deep 
learning algorithm to analyze collected data, enabling 
comprehensive condition assessment and intelligent 
guidance for rescue operation [111].
6.2 	Other wearable intelligent rescue robots
The innovative integration of multisensor technolo-
gies into critical body areas (e.g., wrists, chest, and 
joints) has emerged as a pivotal strategy for enhancing 
drowning rescue response efficiency. 
6.2.1 	Smart rescue wristbands
An intelligent life-saving wristband typically com-
bines functionalities, including physiological monitor-
ing, emergency alerts, and GPS positioning [112]. When 
an accelerometer sensor detects abnormal motion pat-
terns indicative of a drowning incident, it activates an 
inflation system to deploy an airbag on the wrist, pro-
viding buoyancy to keep the drowning person afloat 
while awaiting rescue [113]. Quan Qiu uses UCD theory 
to design a wristband integrated with a humidity sen-
sor, heart rate sensor, temperature sensor and accelera-
tion sensor, which can effectively reduce misjudgment 
and improve the accuracy and reliability of drowning 
detection [114]. Mostafa A. Ibrahim et al. designed a 
chest-worn belt for drowning detection, which triggers 
rescue mechanisms upon detecting anomalies in respi-
ratory rate and cumulative displacement [115]. 
6.2.2 	Chest-worn devices
Furthermore, a bracelet designed by Lluís Peris Mi-
ralles continuously monitors the wearer’s heart rate

---

### Halaman 12

89
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
and blood oxygen saturation, ensuring automatic activa-
tion of buoyancy devices in genuine emergency [103].
7	 Discussion
In this paper, the different methods of intelligent de-
vice to rescue drowning person are discussed, and the 
three types of rescue methods adopted by intelligent 
device after approaching a drowning person are sum-
marized. This study introduces intelligent rescue device 
using rescue nets or lifting baskets, robotic arms or ma-
nipulators, airbags, structural integrations, UAV, AUVs, 
USVs, shore-based throwing rescue devices, wearable 
intelligent life-saving robots, and other methods to res-
cue drowning person. The subsequent discussion evalu-
ates the current advancements and limitations of 
intelligent rescue technologies, providing a structured 
overview of potential research trajectories to address 
existing gaps.
7.1 	 Advancements and limitations in environmental 
force mitigation
The application of suspension systems, a fully dy-
namic diving strategy, a precise positioning perception 
system, and an attitude adjustment optimization 
scheme based on a dynamic programming algorithm 
can effectively reduce the impact of environmental forc-
es. However, even with advanced localization and per-
ception capabilities, current intelligent devices exhibit 
limitations in assessing drowning person status (e.g., in-
jury severity and unconsciousness) and adaptively ad-
justing 
rescue 
strategies 
based 
on 
real-time 
physiological or situational changes. To address these 
challenges, future advancements should focus on multi-
sensor fusion technologies to enhance robotic visual 
perception and contextual comprehension coupled with 
AI-driven decision-making frameworks optimized for 
complex aquatic environments. This is strengthened to 
achieve more efficient and intelligent rescue operations.
7.2 	Challenges in robotic attitude stability and 
positioning accuracy
Under the conditions of significant surface wave dis-
turbances, the attitude stability of devices can be signif-
icantly 
compromised. 
This 
instability 
directly 
propagates to the base of robotic manipulators or grip-
pers, inducing pronounced oscillations and positional 
deviations that critically impair their performance in lo-
calization and grasping tasks. A variety of positioning 
methods, such as laser positioning, inertial navigation 
positioning and satellite positioning, are integrated to 
improve the accuracy and stability of positioning 
through data fusion algorithms. Concurrently, the devel-
opment of platform stabilization systems specifically 
optimized for robotic arm operations is essential. Such 
systems should incorporate active balancing technolo-
gies and adaptive stabilization mechanisms to maintain 
the platform’s attitude dynamically within tolerable 
thresholds, even in dynamic environments.
7.3 	Limitations of airbag-based autonomous rescue 
in deep-water environments
In deep-water environments, the efficiency and reli-
ability of intelligent devices that use airbags to autono-
mously rescue a drowning person may be reduced 
owing to the increased environmental complexity and 
resistance. Improve sensor technology and optimize 
mechanical design to increase mobility and operating 
range. Advanced algorithms are introduced to improve 
the autonomous decision-making ability of USRV, in-
cluding three-dimensional path planning and three-di-
mensional obstacle avoidance, so that the device is 
more intelligent and efficient. To improve the safety and 
comfort of the drowning person during the lifting proc-
ess, an intelligent control system is needed to adjust the 
lifting speed and posture, as well as the application of 
flexible materials to ensure the protection of the drown-
ing person throughout the rescue process.
7.4 	Adaptability challenges to diverse drowning 
person characteristics
There are significant differences in the physical 
characteristics, body shape, health status, and posture 
of different drowning person. Flexible materials and 
adaptive structures can make the actuator closely fit the 
body shape of a drowning person, prevent the drowning 
person from slipping, and provide a buffer to a certain 
extent. Furthermore, according to the dynamic adjust-
ment mechanism of different individual special needs 
and psychological states, an adaptive ergonomic adjust-
ment mechanism is introduced to make the rescue de-
vice better adapt to the body shape and posture of the 
drowning person and reduce the risk of discomfort and 
secondary injury.
7.5 	Shortcomings of UAV-based rescue in complex 
environments
Complex environmental factors, such as wind, 
waves, light, obstacles, and ice, are changeable, which 
weakens the accuracy of the UAV to throw the rescue 
tool. The development of underwater or surface intelli-
gent rescue device with power that can be thrown from 
UAVs can independently search for and approach 
drowning person, which can effectively reduce the 
shortcomings of throwing device and related algo-
rithms. Such intelligent rescue device should integrate 
lightweight design and anti-environmental impact ma-

---

### Halaman 13

90
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
terials to ensure that it is easy to carry by UAVs and 
adapt to harsh natural conditions. At the same time, the 
UAV needs to be equipped with a self-stabilizing system 
to achieve post-throwing attitude adjustment, and re-
lies on the propulsion system and navigation and posi-
tioning technology to ensure path planning and target 
positioning accuracy during autonomous operation.
7.6 	 Gaps in autonomous underwater rescue systems
The deployment of autonomous underwater intelli-
gent devices for drowning person rescue can compen-
sate for the shortcomings of surface search and rescue 
boats and expand the application scope of intelligent 
device to rescue drowning person. During the rescue 
process, it is crucial to ensure the safe fixation and sta-
ble improvement of a drowning person. The develop-
ment of multi-functional rescue tools that can adapt to 
different body shapes and states of the drowning per-
son, real-time monitoring of the fixed state of the 
drowning person, attitude change during the lifting 
process, and real-time adjustment of the robot’s atti-
tude and floating device through the dynamic balance 
system. This angle can compensate for the impact of wa-
ter flow and the movement of the AUV. Multifunctional 
rescue devices that integrate initial medical support, 
monitor the vital signs of drowning person in real time, 
automatically implement necessary medical interven-
tions, and maintain communication with the water sur-
face support team have the potential to significantly 
improve the survival opportunities of drowning person.
7.7 	Optimization directions for USV buoyancy 
support
This is a mature intelligent rescue method for USVs 
that provides buoyancy support for a drowning person. 
To further improve the rescue effect, a buoyancy sup-
port device can be designed with a modular structure. 
For example, the buoyancy module can be flexibly com-
bined or split as required to meet the needs of different 
body types. Simultaneously, an adjustable mechanism is 
introduced. For example, an inflatable buoyancy device 
can adjust the buoyancy by accurately controlling the 
amount of inflation, and the buoyancy components of 
the mechanical structure can change the buoyancy dis-
tribution by stretching and rotating to adjust the posi-
tion and size of the buoyancy support in real time.
7.8 	Improvements for shore-based throwing rescue 
systems
The intelligent device throws life-saving tools from 
the shore to assist the drowning person not only reduc-
es the dependence on manpower and reduces the tech-
nical threshold of the intelligent device to assist in the 
rescue of the drowning person, but also can respond 
quickly in the early stage of the key rescue operation, 
which greatly shortens the rescue time window. If an in-
telligent device can walk autonomously on the shore, 
automatically plan the path according to the position of 
the drowning person, fix it in an ideal position, and 
throw the rescue tool at a suitable angle, it will make 
the rescue tool closer to the drowning person and re-
duce the number of robots. Additionally, it is necessary 
to strengthen the interconnection between robot sys-
tems and build an intelligent collaborative rescue net-
work to improve the overall emergency response 
capacity and resource utilization efficiency.
7.9 	Misjudgment issues of wearable device 
algorithms
An intelligent life jacket integrates a variety of cut-
ting-edge technologies, such as sensor technology, In-
ternet of Things (IoT) technology, data processing, and 
analysis technology. The integration of these technolo-
gies provides powerful monitoring, early warning, and 
rescue capabilities for intelligent life jacket. However, 
whether it is an algorithm based on physiological pa-
rameters to determine the risk of drowning or an algo-
rithm to identify dangerous situations based on human 
posture, there is a certain misjudgment rate. Using a va-
riety of sensor fusion technologies, comprehensive wa-
ter levels, physiological parameters, human posture, 
environmental factors (such as water temperature and 
water flow velocity), and other multi-source data 
through advanced signal processing and data analysis 
algorithms is inferred to improve the accuracy of 
drowning judgment. For instance, deep learning algo-
rithms can be deployed for multi-modal data analysis, 
significantly improving drowning risk identification ac-
curacy. Furthermore, the design algorithm should be 
able to automatically adjust the judgment threshold and 
model parameters according to the user’s individual 
characteristics and real-time environmental conditions. 
To ensure that the life jacket can play an accurate role at 
a critical moment, it is necessary to conduct long-term 
follow-up research, analyze the stability and reliability 
of the algorithm in different seasons, different water 
types, and different groups of people, and constantly 
optimize the algorithm to improve its judgment accura-
cy in various complex situations.
8	 Conclusion
Through an in-depth investigation of the rescue meth-
od after the intelligent device is close to the drowning 
person, the research shows that in different rescue envi-
ronments, these three methods(autonomous rescue de-
vice, assisted self-rescue device and wearable intelligent 
rescue device) have their own adaptability. In order to

---

### Halaman 14

91
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
translate these research insights into practical engineer-
ing progress and guide future development, we propose 
the following actionable engineering recommendations 
and the corresponding list of key research indicators.
8.1 	Engineering recommendations
8.1.1 	Enhance multi-sensor fusion for robust sensing
Integrate heterogeneous sensors (e.g., multispectral 
camera, lidar, millimeter-wave radar, IMU) and develop 
advanced data fusion algorithms (e.g., Kalman filter, fu-
sion network based on deep learning) to ensure reliable 
target detection, recognition and condition monitoring 
in complex and adverse aquatic environments (e.g., 
strong light, waves, weak light). 
8.1.2 	Develop adaptive stabilization and control 
systems
Design active stabilization mechanisms for rescue 
platforms (e.g., dynamic ballast systems, gyroscope sta-
bilizers or control moment gyroscopes) to counteract 
wave-induced oscillations. This is essential to provide a 
stable foundation for precise robot operations and the 
safe rescue of drowning persons in rough waters. 
8.1.3 	Achieve safe and compliant human-computer 
interaction
Soft robot principles, flexible materials and force/
torque sensing are used in grippers and lifting mecha-
nisms. A control algorithm is developed to ensure that the 
physical interaction force is kept within the biomechani-
cal safety threshold to prevent secondary damage to the 
drowning person during grasping and transportation. 
8.1.4 	Optimize cross-domain mobility and deployment
Design lightweight, amphibious or hybrid (air-wa-
ter) robot systems that can be quickly deployed from 
shore, air, or onboard. Emphasis is placed on overcom-
ing the challenge of switching between different media 
and operating effectively in restricted or obstacle-rich 
waterways. 
8.1.5 	Establish standardized communication and 
interoperability protocols
Promote the use of general communication proto-
cols (such as MQTT, DDS on LTE / 5G / satellite links) 
and data standards to achieve seamless coordination 
between heterogeneous rescue assets (UAVs, usv, auv, 
wearable devices) and command centers, and achieve 
efficient multi-robot collaborative rescue tasks. 
8.1.6 	Improve the drowning detection algorithm in 
wearable devices
Beyond single-parameter triggers. We use multi-mo-
dal sensor data (e.g., exercise, heart rate, water immer-
sion, hydrostatic pressure, skin temperature) and train 
AI models on a wide range of real-world datasets to sig-
nificantly reduce false positives and false negatives in 
automated activation systems.
8.2 	Checklist of research indicators
In order to quantitatively evaluate and benchmark 
the performance of the intelligent drowning rescue sys-
tem, the following key performance indicators need to 
be evaluated during development and field testing 
(Table 4).
Table 4 Checklist of research indicators
Category
Key performance indicator 
Target/Consideration
Deployment & 
response
Response time (alarm to on-site)
≤ 90 seconds for near-shore operations
Operational range & endurance
Scenario-defined (e.g., > 10 km range, > 45 min endurance)
Target 
acquisition
Detection accuracy / false alarm rate
> 99% accuracy, < 1% false alarm rate in tested conditions
Positioning error at point of action
< 0.5 meters
Rescue 
operation
Successful grasping/deployment rate
> 95% success rate
Drowning person secure time
Minimize (e.g., < 30 seconds from arrival)
Return speed (with drowning person)
Maximize safely (e.g., > 1.5 m/s)
Human-robot 
interaction
Maximum allowable interaction force
Defined safe threshold (e.g., < 200 N for grasping)
Platform stability (pitch/roll)
< ±10° in specified wave heights (e.g., 0.5 m significant wave height)
Robustness & 
reliability
Operational environmental limits
Significant wave height > 2.0 m, wind speed > 15 knots
Mean time between failures
> 500 hours
Communication link reliability
> 99.9% within operational range
Wearable 
devices
Drowning detection accuracy
> 99.5% (minimizing both false positives and negatives)
Inflation activation time
< 15 seconds from trigger event
Battery life (standby/operation)
> 24 hours standby, > 2 hours active operation

---

### Halaman 15

92
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
8.3 	Limitations of the study​
Although this study systematically searched major 
scientific databases and English publications such as 
Web of Science, IEEE Xplore, Scopus and cnki, there are 
still some limitations. First of all, since the search scope 
is limited to the above platforms and English literature, 
non-English published or unincluded studies (such as 
some conference reports and technical literature) may 
be omitted. Secondly, as a systematic review, the conclu-
sions of this paper depend on the quality and scope of 
the included studies. However, due to the differences in 
methods, performance indicators and experimental 
conditions, it is difficult to conduct direct quantitative 
comparison and meta-analysis. Thirdly, the field of in-
telligent rescue robots is developing rapidly, and the lat-
est research progress and commercial products after 
the search deadline may not be included. Finally, this 
paper mainly provides qualitative technical analysis. 
Due to the lack of standardized test data and protocols 
in existing research, quantitative performance compari-
son cannot be achieved.
8.4 	Research gaps and future trends
8.4.1 	Research gaps
8.4.1.1 	Limited environmental adaptability
Most autonomous rescue devices (such as underwa-
ter rescue robots and wave adaptive rescue robots) lack 
stable operation capabilities in extreme scenarios such 
as high waves (effective wave height > 2.0 meters), low 
visibility (turbid waters), and ice coverage.
8.4.1.2	Weak ability of independent decision-making 
	
and situational understanding
Most of the existing systems rely on remote control or 
preset path to perform tasks, and lack the ability of au-
tonomous judgment and real-time response based on the 
dynamic changes of the environment and the state of the 
drowning person (such as struggling, coma), so it is diffi-
cult to achieve ‘autonomous rescue’ in the true sense.
8.4.1.3	Inadequate human-computer interaction  
	
security
The mechanical arm used for autonomous rescue 
mostly uses rigid materials, and its force control algo-
rithm is difficult to fully adapt to the dynamic body 
shape change of the drowning person (such as the body 
posture deviation in the unconscious state), and the 
safety threshold of the interaction force between the de-
vice and the person lacks a unified standard. 
8.4.1.4 	Limited intelligence of wearable devices
Intelligent life jackets, wristbands and other devices 
are still in the preliminary research stage in the detec-
tion technology of multi-modal data such as water tem-
perature, water flow velocity and human motion mode, 
and lack of long-term verification in different popula-
tions (children, middle-aged and elderly people) and 
water environment.
8.4.1.5 	Lack of verification in real complex  
	
environment
The vast majority of the research remains in labora-
tory simulation or calm water test, lack of robustness 
verification in real marine environment such as wind 
and wave disturbance, ocean current change, communi-
cation delay, and lack of long-term operation stability 
and reliability data of the system.
8.4.2 	Future trends
8.4.2.1 	Environmental adaptability technology  
	
integration
Multi-sensor fusion systems such as fusion lidar, mil-
limeter-wave radar, underwater sonar, and thermal im-
aging sensors are developed to improve the accuracy of 
target detection in extreme environments.
8.4.2.2 	Intelligent Algorithms and Context  
	
Awareness Systems
An intelligent algorithm integrating computer vision, 
behavior recognition and environment modeling is de-
veloped to realize real-time assessment of drowning se-
verity, water flow state and obstacle distribution, and 
support autonomous decision-making and dynamic 
path planning. 
8.4.2.3 	Security human-computer interaction  
	
innovation
The mechanical arm is made of bionic materials to re-
duce contact damage; a biomechanical safety model of 
drowning person of different ages and body types was 
established, and a force control algorithm with real-time 
adjustment ability was developed to control the interac-
tion force within the range of human safety threshold. 
8.4.2.4 	Intelligent upgrade of wearable devices 
A multimodal drowning detection model based on 
deep learning was constructed, integrating physiologi-
cal parameters (heart rate, blood oxygen), environmen-
tal data (water temperature, flow rate), and human 
movement characteristics (struggle frequency), reduc-
ing the false alarm rate to less than 0.5%. Develop ultra-
low power consumption sensors to extend the standby 
time of wearable devices to over 72 hours.
8.4.2.5 	Digital Twin and Simulation Training Platform
A high-fidelity hydrodynamic simulation model and 
a digital twin system are established for algorithm

---

### Halaman 16

93
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
training, system testing and emergency drills to reduce 
the cost and risk of field tests and accelerate technical 
iteration.
Funding: This research was funded by [Dalian Science 
and Technology Innovation Fund Project] grant number 
[2020JJ25CY016], [Shandong Province Transportation 
Science and Technology Plan Project] grant number 
[2023B97-02], [National Natural Science Foundation of 
China] grant number [51879026], [2025 National Col-
lege Students Innovation and Entrepreneurship Train-
ing Program Project] grant number [202511510031], 
and [2024 Shandong College Students Innovation and 
Entrepreneurship Training Program Project] grant 
number [S202411510025].
Acknowledgments: The authors thank the anonymous 
reviewers for their valuable remarks and comments.
Author Contributions: Conceptualization: Dewei Pan, 
Qiang Zhang, Zhijie Liu and Wei Zhang; methodology: 
Dewei Pan, Qiang Zhang, Zhijie Liu and Wei Zhang; data 
collection: Dewei Pan, Runqiang Li and Binglin Wen and 
Wei Zhang; data curation: Dewei Pan, Runqiang Li and 
Binglin Wen; formal analyzes: Dewei Pan, Runqiang Li 
and Binglin Wen; research: Dewei Pan, Qiang Zhang, Zh-
ijie Liu, Wei Zhang, Runqiang Li and Binglin Wen; writ-
ing: Dewei Pan, Runqiang Li and Binglin Wen; review 
and editing: Dewei Pan, Qiang Zhang, Wei Zhang, Run-
qiang Li and Binglin Wen; supervision: Dewei Pan, 
Qiang Zhang, Runqiang Li and Binglin Wen; validation: 
Dewei Pan, Runqiang Li and Binglin Wen; verification: 
Dewei Pan, Qiang Zhang, Runqiang Li and Binglin Wen; 
final approval: Dewei Pan, Qiang Zhang, Zhijie Liu, Wei 
Zhang, Runqiang Li and Binglin Wen.
References
[1] 	
World Health Organization (2024). Global status report 
on 
drowning 
prevention 
2024. 
World 
Health 
Organization. 
https://www.who.int/publications/i/
item/9789240103962.
[2] 	
K Supriya, N Pabitramala, KP Singh, DWS James, & C 
Deepen (2022). A retrospective analysis of drowning 
deaths in Imphal. Journal of Medical Society, 36(2), 65-
68. doi: 10.4103/jms.jms_46_22.
[3] 	
Justin-Paul Scarr, & Jagnoor Jagnoor (2023). Identifying 
strategic priorities for advancing global drowning 
prevention: a Delphi method. BMJ Glob Health, 8(9): 
1-14. doi:10.1136/bmjgh-2023-013303.
[4] 	
Tingzhuang Liu, Xinyu He, Linglu He, & Fei Yuan (2023). 
A 
video 
drowning 
detection 
device 
based 
on 
underwater computer vision. IET Image Processing, 17: 
1905-1918. doi.org/10.1049/ipr2.12765.
[5] 	
Halik R A (2023). Drownings in Poland in the years 
2013-2021 – trends, changes, inequalities, and 
preliminary conclusions for public health. Journal of 
Health 
Inequalities, 
9(2): 
1-8. 
doi.org/10.5114/
jhi.2023.132918.
[6] 	
Liu Z, & Zhu Z (2021). Discussion on Development of 
Rescue Equipment for People Falling into The Sea. 
Research on Protective Equipment Technology, 6: 11-
18. (No DOI available).
[7] 	
Vanita Jain, Dharmender Saini, Monu Gupta, Neeraj 
Joshi, Anubhav Mishra, Vishakha Bansal, & D. Jude 
Hemanth (2021). A Comprehensive Review on Design 
of Autonomous Robotic Boat for Rescue Applications. 
Mathematical Problems in Engineering, 2021: 1-17. 
doi: 10.1155/2021/6614002.
[8] 	
Jonathon Webber, Kevin Moran, Claire French, Felicity 
Fozard, & Olivia Pearless (2020). Fatal coastal drowning 
incidents: A 10-year review of body recovery times in 
New Zealand. Forensic Science International, 320: 
110711-110717. doi: 10.1016/j.forsciint.2020.110573.
[9] 	
Hu X, Fu H, & Wu X (2020). Research on Technology of 
Sea Emergency Rescue Based on Unmanned Surface 
Vehicle. Journal of Physics: Conference Series, 1575(1): 
1-7. doi: 10.1088/1742-6596/1575/1/012097.
[10] 	 M Lyu, Y Zhao, C Huang, & H Huang (2023). Unmanned 
Aerial Vehicles for Search and Rescue: A Survey. Remote 
Sensing,15(13): 1-35. doi: 10.3390/rs15133266.
[11] 	 D Yang, Y Cao, Y Feng, X Lai, & Z Pan (2021). Drowning 
Detection Algorithm For Intelligent Lifebuoy. 2021 
International Conference on Unmanned Systems (ICUS), 
512-519. doi: 10.1109/ICUS52573.2021.9641291.
[12] 	 Hu L (2021). Intelligent Lifebuoy Based on Machine 
Vision. 2021 4th International Conference on Artificial 
Intelligence and Information Technology (ICAITA), 
1-57. doi: 10.1088/1742-6596/2078/1/012055.
[13] 	 Angelo Bonfitto, & Nicola Amati (2018). Mechanical 
Construction and Propulsion Analysis of a Rescue 
Underwater Robot in the case of Drowning Persons. 
Applied Sciences, 8(5): 693-707. doi: 10.3390/
app8050693.
[14] 	 GF Clauss, A Kauffeldt, N Otten, & S Stuppe (2010). Hull 
Optimization of the Unmanned AGaPaS Rescue Vessel. 
Proceedings of the ASME 2010 29th International 
Conference on Ocean, Offshore and Arctic Engineering, 
245-254. doi: 10.1115/OMAE2010-20386.
[15] 	 S Wang, D Pan, Z Zhou, H Yu, X Ma, & G Fang (2022). 
Optimization method and experimental research on 
attitude adjustment scheme of attitude adaptive rescue 
robot. Scientific Reports, 12(1): 18010-18030. doi: 
10.1038/s41598-022-22991-7.
[16] 	 Yan Zhouzhou (2019). Design and Simulation of Wave-
adapted Rescue Robot. Dalian Maritime University. doi: 
10.26989/d.cnki.gdlhu.2019.000950.
[17] 	 Weihao Yuan, Kaiyu Hang, Haoran Song, Danica Kragic, 
Michael Y. Wang, & Johannes A. Stork (2019). Reinforce-
ment Learning in Topology-based Representation for 
Human Body Movement with Whole Arm Manipulation. 
2019 IEEE International Conference on Robotics and Au-
tomation (ICRA), 1-8. doi: 10.1109/ICRA.2019.8794160.
[18] 	 Yoon J, & Yoon D (2022). A Human Lifting and 
Navigation System Based on ICT for Underwater 
Rescue. 2022 The 22nd International Conference on 
Control, Automation and Systems (ICCAS 2022), 284-
287. doi: 10.23919/ICCAS55662.2022.10003734.

---

### Halaman 17

94
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
[19] 	 C Ye, Y Su, S Yu, & Y Wang (2023). Development of a 
Deformable Water-Mobile Robot. Actuators,12(5): 202-
219. doi: 10.3390/act12050202.
[20] 	 Celia Seguin, Gilles Blaquière, Anderson Loundou, 
Pierre 
Michelet, 
& 
Thibaut 
Markarian 
(2018). 
Unmanned 
aerial 
vehicles 
(drones) 
to 
prevent 
drowning. Resuscitation, , 127: 63-67. doi: 10.1016/j.
resuscitation.2018.04.005.
[21] 	 Nishan B. Shetty, Naveen Rao, Pruthviraj Umesh, & K. V. 
Gangadharan (2020). Remotely operated marine rescue 
vehicle. AIP Conference Proceedings, 2247(1), 020022-
1 - 020022-7. doi: 10.1063/5.0004147.
[22] 	 Kaixuan Wang, Kexuan Zhao, Mingyi Su, Jin Qi, Yuqing 
Hou, & Sheng Tang (2021). An Intelligent Life Jacket Sys-
tem Based on OneNET. 2021 IEEE 6th International Con-
ference on Intelligent Computing and Signal Processing, 
1071-1074. doi: 10.1109/ICSP51882.2021.9408758. 
[23] 	 Duong Bao Nguyen, Tran Le Minh, Nguyen Van Truc, & 
Hoang Vu Tran (2023). Building a Smart Life Jacket Based 
on the IoT Platform. 2023 International Conference on 
Advanced Technologies for Communications (ATC), 527-
533. doi: 10.1109/ATC58710.2023.10318940.
[24] 	 Mohsen Barghamadi, & Seyedeh Maryam Anvari 
(2019). Rescue devices in the water environments: a 
systematic review. Journal of Advanced Sport Technolo-
gy, 3(1), 27 - 32. (No DOI available). 
[25] 	 Ma Shuchao (2020). Research and Development of The 
Small Ice Rescue Robot . Dalian Polytechnic University. 
doi: 10.26992/d.cnki.gdlqc.2020.000541.
[26] 	 Davis T, O’Neill K N, Adrianna M. Dunlap, & Parsa 
Esshaghi 
Bayat 
(2019). 
S.A.V.E.M.E. 
(Submerged 
Automated Vehicular Elevation Minor Extraction) 
Alternatively: Home Swimming Pool Rescue Device. 
The University of Akron. (No DOI available). 
[27] 	 Zhang Yichi (2020). Study on Multi-target Unmanned 
Rescue Method in Reef Seas. Dalian Maritime University. 
doi: 10.26989/d.cnki.gdlhu.2020.000734.
[28] 	 Jiong Li, Xuesong Bai, Yang Li, Hongwang Du, Fangtao 
Fan, huaixian Li, Zhi Li, & Wei Xiong(2022). 
Investigation of a Cabin Suspended and Articulated 
Rescue Vessel in Terms of Motion Reduction[J]. Journal 
of Marine Science and Engineering, 10(12), 1966-1975. 
doi: 10.3390/jmse10121966.
[29] 	 Li Shuaixian (2023). Design and Research on Remote 
Control System of Wave-adapted Rescue Ship. Dalian 
Maritime University. doi: 10.26989/d.cnki.gdlhu.2023. 
001541.
[30] 	 CHEN Mengjie, HAN Shaoqi, LI Haojie, LENG Junling, 
ZHOU Xiaodong, & CHEN Yifei. Development of intelli-
gent pre-hospital first aid equipment for drowning pa-
tients. Chinese Journal of Disaster Medicine, 2022, 10(6), 
354-357. doi:10.13919/j.issn.2095-6274.2022.06.013.
[31] 	 B Liu, S Zhao, T Hong, Q Zhao, S Wang, H Xiao, & S Xu 
(2022). An Automatic Stable Service Support USV. 
Advances in Intelligent Automation and Soft Computing. 
Springer International 
Publishing, 
909-917. doi: 
10.1007/978-3-030-81007-8_104.
[32] 	 Abdel Ilah N. Alshbatat, Shamma Alhameli, Shamsa 
Almazrouei, Salama Alhameli, & Wadhha Almarar 
(2020). Automated Vision-based Surveillance System to 
Detect Drowning Incidents in Swimming Pools.2020 
Advances in Science and Engineering Technology 
International Conferences (ASET), 1-5. doi: 10.1109/
ASET48392.2020.9118248.
[33] 	 Shatnawi M, Albreiki F, Alkhoori A, Mariam Alhebshi, & 
Anas Shatnawi (2024). Advances and Challenges in 
Automated Drowning Detection and Prevention Systems. 
Information, 15(11), 1-20. doi: 10.3390/info15110721.
[34] 	 Salman Jalalifar, Andrew Belford, Eila Erfani, Amir Razm-
jou, Rouzbeh Abbassi, Masoud Mohseni-Dargah, & 
Mohsen Asadnia (2024). Enhancing Water Safety: 
Exploring Recent Technological Approaches for Drown-
ing Detection. Sensors, 24(2), 1-18. doi: 10.3390/
s24020331.
[35] 	 Jose A, & Udupa G (2021). Gantry robot system for 
preventing drowning accidents in swimming pools[J]. 
Materials Today: Proceedings, 46, 4975-4981. doi: 
10.1016/j.matpr.2020.10.388.
[36] 	 Muhammad Aftab Hayat, Goutian Yang, Atif Iqbal, Adeel 
Saleem, Muhammad Mateen (2019). Comprehensive and 
Comparative Study of Drowning Person Detection and 
Rescue Systems. 2019 4th International Conference on 
Information and Communication Technology (ICICT), 
66-71. doi: 10.1109/ICICT47744.2019.9001918.
[37] 	 Hao Deng, Hang Su, Tao Mei, Wenjun Xu, Zhengkun 
Cheng, Xiang Dong (2019). Introduction of a Flexible 
Adaptive AUV-Capture Device Based on bio-inspired 
hydraulic Soft Robot. Proceedings of the IEEE 
International Conference on Robotics and Biomimetics, 
2806-2813. doi: 10.1109/ROBIO49542.2019.8961608.
[38] 	 Junjie Huang, Zhisen Wang, Wanting Huang, Qijia Yan, 
Hexi Miao, & Deshan Chen (2024,). USRV: hydrodynamic 
analysis and design of a novel anti-flow underwater search 
and rescue vehicle with circuit control and perception 
system. Journal of Marine Engineering & Technology, 
23(2), 1-14. doi: 10.1080/20464177.2024.2315649.
[39] 	 Junjie Huang, Wanting Huang, Deshan Chen, Hexi Miao, 
& Qijia Yan (2023). Conceptual Design of High-speed 
Anti-flow Water Search and Rescue Vehicle. The 7th 
International 
Conference 
on 
Transportation 
Information and Safety, 1607-1612. doi: 10.1109/
ICTIS60134.2023.10243684.
[40] 	 Zhao J, Sun F, Chen H, Zhou J, Ma X, & Zhu H (2021). 
Servo offshore water rescue system based on Internet 
of things. Chinese New Technologies and Products, 6, 
27-29. doi: 10.13612/j.cnki.cntp.2021.11.009.
[41] 	 Eid S, & Dol S S (2019). Design and Development of 
Lightweight-High Endurance Unmanned Aerial Vehicle 
for Offshore Search and Rescue Operation. 2019 
Advances in Science and Engineering Technology 
International Conferences (ASET). IEEE, 1-5. doi: 
10.1109/ICASET.2019.8714418.
[42] 	 Kim A (2024). Lifeguard UAV System: Scout Quadcopter 
and Rescue Coaxial Hexacopter with In-Arm Pitch Axis 
for Extended and Symmetric Dual-Axis Tilt Rotor. 2024 
IEEE International Conference on Automatic Control 
and Intelligent Systems (I2CACIS), 83-88. doi: 10.1109/
I2CACIS61270.2024.10649858.
[43] 	 Rafizah Ab Rahman, Rafidah Ab Rahman, Mohd 
Hafizzuddin Mohd Hakim, Nurul Natasha Mohamad 
Sabari, & Nurshazren Natasha Mohd Nazri (2019). 
AviaDron: Development of Rescue Mission Drone. 
Journal of Design for Sustainable and Environment, 
2019, 1(1), 1-4. (No DOI available).

---

### Halaman 18

95
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
[44] 	 RJ Setiawan, I Suryanto, I Latif, N Billah, & A Widyasti 
(2017). Flying Robot based UAV as a Monitoring and 
Surveillance System in the Coastal Areas. Symposium 
on Innovation and Creativity (iMIT-SIC), 3, 351-354. 
(No DOI available). 
[45] 	 Herdel V, Yamin L, & Cauchard J (2022). Above and 
Beyond: A Scoping Review of Domains and Applications 
for Human-Drone Interaction. Proceedings of the 2022 
CHI Conference on Human Factors in Computing 
Systems, 1-22. doi: 10. 1145/3491102.3501881.
[46] 	 Feltynowski M, & Zawistowski M (2018). Opportunities 
Related to the Use of Unmanned Systems in Emergency 
Services. BiTP, 51(3), 126-136. doi: 10.12845/
bitp.51.3.2018.9.
[47] 	 E Lygouras, N Santavas, A Taitzoglou, K Tarchanidis, A 
Mitropoulos, & A Gasteratos (2019). Unsupervised 
Human Detection with an Embedded Vision System on 
a Fully Autonomous UAV for Search and Rescue 
Operations[J]. 
Sensors, 
19(16), 
3542-3561. 
doi: 
10.3390/s19163542.
[48] 	 Daniel Serrano López, German Moreno, Jose Cordero, 
Jose Sanchez, Shashank Govindaraj, Mario Monteiro 
Marques, Victor Lobo, Stefano Fioravanti, Alberto Grati, 
Konrad Rudin, Massimo Tosa, Anibal Matos, Andre Dias, 
Alfredo Martins, Janusz Bedkowski, Haris Balta, & Geert 
De Cubber (2017). Search and Rescue Robotics-From 
Theory to Practice: Interoperability in a Heterogeneous 
Team of Search and Rescue Robots. IntechOpen, 93-
125. doi: 10.5772/intechopen.69493.
[49] 	 Geert De Cubber, Daniela Doroftei, Haris Balta, Anibal 
Matos, Eduardo Silva, Daniel Serrano, Shashank 
Govindaraj, Rui Roda, Victor Lobo, Mário Marques, & 
Rene Wagemans (2017). Search and Rescue Robotics-
From Theory to Practice: Operational validation of 
search and rescue robots. IntechOpen, 225-255. doi: 
10.5772/intechopen.69497.
[50] 	 Bäckman A, Hollenberg J, Svensson L, Ringh M, 
Nordberg P, Djärv T, Forsberg S, Hernborg O, & Claesson 
A (2018). Drones for Provision of Flotation Support in 
Simulated Drowning. Air Medical Journal, 37(3), 170-
173. doi: 10.1016/j.amj.2018.01.007. 
[51] 	 Nikolay A. Mostakov, Vladislav S. Bakaev, Konstantin A. 
Kulagin, Andrey N. Migachev, & Aleksey V. Grafenkov 
(2022). UAV-based Drowning Rescue System. 2022 
International Conference on Information, Control, and 
Communication Technologies (ICCT). IEEE, : 1-4. doi: 
10.1109/ICCT56057.2022.9976801. 
[52] 	 Shekari A M (2018). Ocean Savior From Above: Small 
Unmanned Aircraft Systems (sUAS) Operations During 
Near-Shore Ocean Rescues. Embry-Riddle Aeronautical 
University. (No DOI available).
[53] 	 Liu Jie (2019). The Design and Research of Portable 
Water Rescue Unmanned Aerial Vehicle. Hebei 
University of Science and Technology. doi: 10.7666/d.
Y3551742.
[54] 	 Andrzej Ostrowski, Arkadiusz Stanula, & Zbigniew 
Małodobry (2024). The role of prevention supported by 
innovations and implementations in increasing the 
safety of people staying in water areas. ASEJ - Scientific 
Journal of Bielsko-Biala School of Finance and Law, 
28(1): 128-139. doi: 10.19192/wsfip.sj1.2024.19.
[55] 	 HM Tran, CH Lam, DT Cao, & HN Bao (2023, ). An un-
manned device designed for drowning rescue. World 
Journal of Advanced Engineering Technology and Scienc-
es, 9(2), 135-141. doi: 10.30574/wjaets.2023.9.2.0205.
[56] 	 Eleftherios Lygouras, Antonios Gasteratos, & Konstanti-
nos Tarchanidis (2018). ROLFER: A fully autonomous 
aerial rescue support system. Microprocessors and Mi-
crosystems, 61: 32–42. doi: 10.1016/j.micpro.2018. 
05.014.
[57] 	 E Lygouras, IM Dokas, K Andritsos, K Tarchanidis, & A 
Gasteratos (2017). Identifying Hazardous Emerging 
Behaviors in Search and Rescue Missions with Drones: 
A Proposed Methodology. International Conference on 
Information 
Systems 
for 
Crisis 
Response 
and 
Management in Mediterranean Countries. Springer, 
70-76. doi: 10.1007/978-3-319-67633-3_6.
[58] 	 Eleftherios Lygouras, Antonios Gasteratos, & Konstanti-
nos Tarchanidis (2017). ROLFER: An Innovative Proac-
tive Platform to Reserve Swimmer’s Safety. International 
Conference on Information Systems for Crisis Response 
and Management in Mediterranean Countries. Springer, 
57-69. doi: 10.1007/978-3-319-67633-3_5.
[59] 	 Dileep P, M. Durairaj, Sharmila Subudhi, V V R 
Maheswara Rao, J. Jayanthi, & D Suganthi (2023). AI-
driven drowned-detection system for rapid coastal 
rescue operations. Spatial Information Research, 32, 
143-150. doi: 10.1007/s41324-023-00549-7.
[60] 	 Li Min, Liu Bingxi, & GUO Miaodi (2019). SEA RESCUE 
DRONE[J]. 
Packaging 
Engineering, 
4, 
315. 
doi: 
CNKI:SUN:BZGC.0.2019-04-075.
[61] 	 Anthony C Ijeh, & AL Ahmed Naufal (2020). Using Ges-
ture Recognition to Prevent Drowning: A Crime Science 
Perspective. Crime Science and Digital Forensics. CRC 
Press, 20-40. doi: 10.1201/9780429322877. 
[62] 	 Xiaokai Mu, Hao Yuan, Zhongben Zhu, & Hongde Qin 
(2022). Analysis on the Design of Search and Rescue 
Underwater 
Robots. 
2022 
IEEE 
International 
Conference on Unmanned Systems (ICUS), 1016-1020. 
doi: 10.1109/ICUS55513.2022.9986756. 
[63] 	 Eike Krieg, Daniel Weber, Helge Renkewitz, & Sven 
Thomas (2022). Baywatch 2.0: Rescuing drowning 
persons with an underwater robotic lifeguard. OCEANS, 
1-5. doi: 10.1109/OCEANS47191.2022.9977071.
[64] 	 HaoDong Qi, & Ying Tang (2022). Autonomous Under-
water Rescue Technology. OCEANS 2022 - Chennai, 1-4. 
doi: 10.1109/OCEANSChennai45887.2022.9775456.
[65] 	 B Sun, W Pang, M Chen, & D Zhu (2022). Development 
and experimental verification of search and rescue ROV. 
Intelligence & Robotics, 2(4), 355-370. doi: 10.20517/
ir.2022.23.
[66] 	 Jianhua Wang, Wei Gu, Jianxin Zhu, & Jubiao Zhang 
(2009). An Unmanned Surface Vehicle for Multi-mission 
Applications. 
2009 
International 
Conference 
on 
Electronic 
Computer 
Technology, 
358-361. 
doi: 
10.1109/ICECT.2009.136.
[67] 	 Bruno M. Ferreira, Aníbal C. Matos, & José C. Alves (2016). 
Water-jet Propelled Autonomous Surface Vehicle UCAP: 
System Description and Control. OCEANS 2016-Shanghai, 
1-5. doi: 10.1109/OCEANSAP.2016.7485364.
[68] 	 Vitor A M Jorge, Roger Granada, Renan G Maidana, 
Darlan A Jurak, Guilherme Heck, Alvaro P F Negreiros, 
Davi H dos Santos, Luiz M G Gonçalves, & Alexandre M

---

### Halaman 19

96
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
Amory (2019). A Survey on Unmanned Surface Vehicles 
for Disaster Robotics: Main Challenges and Directions. 
Sensors, 19(3), 702-745. doi: 10.3390/s19030702.
[69] 	 Thanakodi Suresh, Talib Muhamad Lazim, Ali Syarifah 
Aishah Syed, Wahab Norshahriah Abdul, Ahmad Amalina 
Farhi, Noor Norshaheeda Mohd, Zahari Muhammad 
Izham Bin Ahmad, & Ahmad Mohd Arif (2021). A Study 
into the Development of a Light Weight Smart Life Buoy 
Prototype (LWSLB). Transactions on Maritime Science, 
10(2), 383-389. doi: 10.7225/toms.v10.n02.008.
[70] 	 Yongjun Gong, Yuqing Sun, Huajun Li, Chuanming Dong, 
& Zengmeng Zhang (2024). Development of Maritime 
Search, Rescue and Salvage Equipment. Strategic Study of 
CAE, 26(02), 50-62. doi: 10.15302/J-SSCAE-2024.02.001.
[71] 	 NORAS; Jorge Alberto Ferreira (2016). Self-propelled 
craft. US-20160214692-A1. (No DOI available). 
[72] 	 Qi Y, & Ke Y (2020). Fast Path Planning for On-Water 
Automatic Rescue Intelligent Robot Based on Constant 
Thrust Artificial Fluid Method. Scientific Programming, 
2020: 1-13. doi: 10.1155/2020/8828039. 
[73] 	 Shuaijun Wang, Yuxin Cui, & Gaoyu Zhang (2022). 
Design of a New-type Water Self-rescue Device. 
Proceedings of the 2022 5th International Conference 
on Robot Systems and Applications, 2022, 17-22. doi: 
10.1145/3556267.3556277.
[74] 	 YM Kalyan, & Saniya Ansari (2023). A Novel Approach 
Towards 
Development 
of 
Automated 
Intelligent 
Lifesaving Buoy. International Journal of Scientific 
Research in Science and Technology, 10(3), 320-329. 
doi: 10.32628/IJSRST52310361.
[75] 	 Jing Chu, Gaofeng Wei, & Zhinan Zhang (2019). Design 
of portable teleoperated marine rescue device. Acad J 
Sec Mil Med Univ, 40(11), 1246-1252. doi: 10.16781/ 
j.0258-879x.2019.11.1246.
[76] 	 Guangzhen Gao (2023). Design and Rescue Method 
Research of Air-dropped Unmanned Surface Rescue 
Vehicle. Dalian Maritime University. doi: 10.26989/d.
cnki.gdlhu.2023.001334.
[77] 	 Jiaxu Cao (2021). Conceptual Design and Hydrodynamic 
Performance Research of New Life-saving Devices. 
Jiangsu University of Science and Technology. doi: 
10.27171/d.cnki.ghdcc.2021.000544.
[78] 	 https://www.themarketintelligence.com/market-re-
ports/wireless-remote-control-lifebuoy-market-3943. 
2025.01.20.
[79] 	 https://fiturntech.cn/waterrescue/14.html. 
2025.01.20.
[80] 	 http://www.oceanring.cn/product_details/0/prod-
uct/12. 2025.01.20.
[81] 	 https://www.rescuetech1.com/dolphin1remotecon-
trolrescuebuoy.aspx. 2025.01.20.
[82] 	 http://tianfanzhineng.com/product/info/8/. 
2025.01.20.
[83] 	 https://b2b.baidu.com/land?id=bc04eca5ede81dc6aca
160db808ea4b510. 2025.01.20.
[84] 	 https://www.usaferescue.com/. 2025.01.20.
[85] 	 http://www.interzcool.com/c_html_products/remote-
controlled-life-saving-buoy-1617.htm. 2025.01.20.
[86] 	 https://www.nauticexpo.cn/prod/shenzhen-hover-
star-flight-technology-co-ltd/product-194016-574574.
html. 2025.01.20.
[87] 	 Grant A. Wilde, & Robin R. Murphy (2018). User 
Interface for Unmanned Surface Vehicles Used to 
Rescue Drowning Victims. 2018 IEEE International 
Symposium on Safety, Security, and Rescue Robotics 
(SSRR), 1-8. doi: 10.1109/SSRR.2018.8468608.
[88] 	 Katarzyna BOLZ, & Gabriel NOWACKI (2023). Air 
transport safety in UAV operational conditions. Journal 
of civil engineering and transport, 5(1), 9-23. doi: 
10.24136/tren.2023.001.
[89] 	 Nirmal Umar, Pokaad Alif Zulfakar, Lau Saijod Tze Way, 
Megat Ahmad, Mohd Megat Hamdan, Yaakob, Mohd 
Yuhazri, Singh Jasspeed, & Fairozan Mohd (2022). The 
Impact of Covid-19 on Human Rescue Operations: A 
Review on Past Unmanned - Water Rescue Boats 
(U-Wrb) and Adopting Them to The New Norm. Journal 
of Engineering Technology and Applied Physics, 4(1), 
7-15. doi: 10.33093/jetap.2022.4.1.2. 
[90] 	 Rebecca Thier Schofield (2018). Potential Fields 
Navigation of Lifeguard Assistant Robot for Mass 
Marine Casualty Response. Texas A&M University. (No 
DOI available).
[91] 	 Shashank M Gowda, Hithendra Shettigar, Prathveesha 
Kumar, & Prasanna Kumar (2019). Hydrobot - A Smart 
Rescue Bot. International Journal of Engineering 
Research & Technology (IJERT), 7(8): 1-3. doi: 
10.17577/IJERTCONV7IS08071.
[92] 	 T. Gopu, G. Vishnu, I. Sam Benjamin, N. Amarnath, & S. R. 
Vignesh (2022). Gesture Control Life Guard Robot 
Using Microcontroller. LC International Journal of 
STEM, 3(1), 15-22. doi: 10.5281/zenodo.6547203. 
[93] 	 Haiming Fu, Yanan Fu, Tianliang Liu, & Wenfu Xu 
(2018). A Small Intelligent Amphibious Robot: Design, 
Analysis and Experiment. Proceedings of The 2018 
IEEE International Conference on Real-time Computing 
and Robotics, 78-83. doi: 10.1109/RCAR.2018.8621631. 
[94] 	 Shuai Zhao, Boyun Liu, Yuanju Jian, Yi Yuan, & 
Shangxuan Xiao (2018). Water Monitoring Robot with 
Double Layer Structure Design. 2nd International 
Conference on Electrical, Control and Automation 
Engineering (ECAE 2017), 192-195. doi: 10.2991/ecae-
17.2018.40.
[95] 	 Aníbal Matos, Eduardo Silva, Nuno Cruz, José Carlos 
Alves, Duarte Almeida, & Miguel Pinto (2013). 
Development of an Unmanned Capsule for Large-Scale 
Maritime Search and Rescue. Proceedings of the 2013 
MTS/IEEE OCEANS - Bergen, 1-8. doi: 10.23919/
OCEANS.2013.6741340.
[96] 	 Di Zhang (2019). Preliminary study on design of rescue 
unmanned watercraft in new inland rivers and lakes. 
Jiangsu University of Science and Technology, doi: 
10.27171/d.cnki.ghdcc.2019.000350.
[97] 	 Jimin Zhang, Junfeng Xiong, Guangyu Zhang, Feng Gu, & 
Yuqing He (2016). Flooding Disaster Oriented USV & 
UAV System Development & Demonstration. 2016 IEEE 
International Conference on Robotics and Biomimetics 
(ROBIO), 1-4. doi: 10.1109/OCEANSAP.2016.7485676.
[98] 	 Junfeng Xiong, Feng Gu, Decai Li, Yuqing He, & Jianda Han 
(2016). Recent Advances in Robotic Systems: Design, 
Implementation and Modeling of Flooding Disaster-
Oriented USV. IntechOpen. doi: 10.5772/64305.
[99] 	 Dewei Feng (2022). Intelligent identification and 
positioning rescue system for falling into the water by

---

### Halaman 20

97
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
the lake. Taiyuan University of Technology. doi: 
10.27352/d.cnki.gylgu.2022.000215.
[100] 	Linlin Xiong, Shilin Liu, Dongqing Li, Yang Xiaolin,& Li 
Yuhang (2020). Design of a new type of throwing bomb 
for water rescue. Mechanical & Electrical Engineering 
Technology, 49(10), 173-175. doi: 10.3969/j.issn.1009-
9492.2020.10.054.
[101] 	LIU Shihan, HU Lifu, & ZHAO Xiujuan (2019). Design of 
intelligent water life jacket system based on satellite po-
sitioning. Industrial Instrumentation & Automation, 03, 
24-27+39. doi: 10.3969/j.issn.1000-0682.2019.03.005.
[102] 	Zixuan YIN (2018). Research on Design of Public 
Lifesaving Facilities System in Urban Lakes. Wuhan 
Institute of Technology. (No DOI available).
[103] 	Lluís Peris Miralles (2019). Bracelet with pulsometer 
and float that allows the users ascend to the surface of 
the water. Universitat Jaume I. (No DOI available).
[104] 	Loay F. Hussein, Rayan Al-Otaibi, Anis Ben Aissa, 
Mohammed Al-Ruwaili, Ayman MASSAOUDI, & Hisham 
Al-Balawi (2019). Design of GPS System for Tracking a 
Life Vest. International Journal of Computer Science 
and Information Security (IJCSIS), 17(2), 30-32. (No 
DOI available).
[105] 	Haowei Qi (2018). Research on Design of Airbag-type 
Lifesaving Functional Garments. Southwest University. 
doi: CNKI:CDMD:2.1018.860435. 
[106] 	Hyeon Cho, Dongju Jang, Jinsu Yoon, Yong Sang Ryu, 
Byeonggeol Lee, Byeongmoon Lee, Seungjun Chung, & 
Yongtaek Hong (2023). Milliwatt-Scale Body-Heat Har-
vesting Using Stretchable Thermoelectric Generators 
for Fully Untethered, Self-Sustainable Wearables. ACS 
Energy 
Letters, 
8: 
2585-2594. 
doi: 
10.1021/
acsenergylett.3c00243.
[107] 	Xueyi Wu (2018). Investigation and Construction of the 
Anti-drowning Security System for Primary and Middle 
School Students in Jiangxi Province. Jiangxi Normal 
University. (No DOI available).
[108] 	Nuhu Bello Kontagora, Buhari Umar Ugbede, Abu Ad-
ishetu Khadijat, & Guda Blessed (2022). Development 
of a Smart Wearable Anti-drowning System for Swim-
mers.The Journal of Contents Computing, 4(1), 417-
429. doi: 10.9728/jcc.2022.06.4.1.417.
[109] 	Simon Winkler (2022). Development of a Mobile Device 
to Prevent Accidental Drowning by Monitoring 
Respiratory Activity. PROCEEDINGS OF THE 2nd MCI 
MEDICAL TECHNOLOGIES MASTER’S CONFERENCE. 
MCI the Entrepreneurial University Group, 1-8. doi: 
10.9728/jcc.2022.06.4.1.417.
[110] 	M. Fürth, K. Raleigh, T. Duong, & D Zanotto (2018). 
Marine Design XIII: SmartPFD: Towards an actively 
controlled inflatable life jacket to reduce death at sea. 
CRC Press, 737-744. doi: 10.1201/9780429440519.
[111] 	Yiping Zhang, Chengyu Li, Chuanhui Wei, Renwei 
Cheng, Tianmei Lv, Junpeng Wang, Cong Zhao, Zhaoyang 
Wang, Fangming Li, Xiao Peng, Minyi Xu, & Kai Dong 
(2024). An intelligent self-powered life jacket system 
integrating multiple triboelectric fiber sensors for 
drowning rescue. InfoMat, 6(5), 1-14. doi: 10.1002/
inf2.12534.
[112] 	Mohammed Rashid Al Balushi, Alzahraa Abdullah Alsiy-
abi, & Yousuf Nasser Al Husaini (2024). Saving Lives At 
Sea: An Automated Drowning Rescue Technology. 
International Journal of Engineering Research and 
Technology (IJERT), 12(11), 1-7. doi: 10.17577/
IJERTV13IS010029.
[113] 	J.Geetha Ramani, R. Aswanth, J. Gayathri, & M. 
Gunasekaran 
(2019). 
Automatic 
prevention 
of 
drowning by inflatable wrist band system. 2019 5th 
International Conference on Advanced Computing & 
Communication Systems (ICACCS), 346-349. doi: 
10.1109/ICACCS.2019.8728368.
[114] 	Quan Qiu, Ming Wang, Haitao Tuo, Shannan Wu, Xiao 
Bai, & Fan Wang (2023). A Wristband Design for a 
Water Rescue System. 2023 IEEE International 
Conference on Electrical, Automation and Computer 
Engineering (ICEACE), 1711-1715. doi: 10.1109/
ICEACE60673.2023.10442555.
[115] 	Mostafa Ibrahim, Manal Ali, Mostafa Ahmed, Kareem 
Mohamed, Ali Ali, Ahmed Elsayed, Abdelmawla Yousef, 
Mona Alnaggar, Ali SiamHossa (2024). A Low-Cost 
Approach for Drowning Detection and Alertness. 
Egyptian Journal of Artificial Intelligence, 3(1), 1-12. 
doi: 10.21608/ejai.2024.223796.1012.
[116] 	Kangdi Zhao (2020). Research and Design of U-type 
Water Surface Rescue Equipment based on Rapidity. 
Shandong Jiaotong University. doi: 10.27864/d.cnki.
gsjtd.2020.000050.
[117] 	YAN Bingcheng, CAO Le, JIN Houxin, WANG Xinkun, 
YANG Dan (2022). Simulation and optimization analysis 
of U-shaped dynamic life-saving devices. Intelligent 
Computer 
and 
Applications, 
12(4), 
70-76. 
doi: 
10.3969/j.issn.2095-2163.2022.04.012.

---

### Halaman 21

98
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
Appendix A
Table 1 Cross-technology comparison table
Technology 
category
Autonomous rescue devices
Auxiliary self-rescue devices
Wearable intelligent rescue devices
Subtype
Rescue net/lifting 
basket robot
Robot arm / 
manipulator 
rescue robot
Airbag-type 
rescue robot
UAV
USV
AUV
Intelligent Life 
Jacket
Smart rescue 
wristbands
Chest-worn 
devices
Core rescue 
mechanism
To approach the 
target autonomously, 
lift the drowning 
person through the 
net or basket, and 
maintain the head 
surface.
Accurate 
grasping 
under visual 
guidance and 
flexible contact 
through stiffness 
adjustment
After 
underwater 
positioning, 
the airbag is 
released, and 
the drowning 
person is 
vertically lifted 
to the water 
surface by 
controllable 
buoyancy
Quickly reach 
the target 
area, airdrop 
the lifebuoy 
/ inflatable 
lifejacket, 
and lock the 
drowning 
person 
through visual 
recognition
Remote control 
approach, 
release of life-
saving platform 
/ traction 
rope, drag 
the drowning 
person to the 
safe area
Underwater 
autonomous 
positioning, through 
sonar and visual 
identification of 
drowning, carrying a 
life rope or buoyancy 
device to guide it to 
the surface, or drag 
it directly to the safe 
area.
Real-time 
monitoring of 
physiological 
parameters 
(heart rate / 
respiration), 
automatic 
inflation after 
falling into 
the water, GPS 
positioning and 
sending SOS 
signals
Acceleration / 
humidity sensors 
recognize 
abnormal 
movements (such 
as drowning 
struggles) and 
trigger wrist 
airbags to 
provide buoyancy
Monitor 
respiratory 
frequency / 
displacement 
changes, trigger 
sound and light 
alarms when 
abnormalities 
occur, and link 
rescue centers
Application 
scenarios
Unconscious / 
physically exhausted
Unconscious 
/ physically 
exhausted
Deep water 
area, rescue of 
seriously injured
Open water area
Water surface
Turbid waters, deep 
waters (more than 
10m), dense areas of 
underwater obstacles 
(such as reef areas, 
near shipwrecks)
Waterborne 
workers 
(fishermen/crew 
members)
Water sports 
(surfing / diving), 
child safety
Non-professional 
swimmers, 
child / elderly 
protection
Advantages
No drowning person 
cooperation is 
needed to reduce 
the risk of secondary 
injury
Adapt to 
different body 
types, adaptive 
adjustment of 
posture
The lift is 
controllable 
and suitable 
for vulnerable 
drowning 
persons
Fast response 
speed
It has strong 
wind and wave 
resistance 
and can drag 
multiple people
It can adapt to 
complex underwater 
environments such 
as low visibility, and 
can complete the 
search and guidance 
independently without 
relying on the water 
surface vision
Take the initiative 
to prevent and 
extend the golden 
rescue time
It is highly 
portable and 
wearable for 
daily wear
Close to the 
chest cavity, the 
physiological 
signal monitoring 
is precise
Limitations
Poor stability in 
complex waters 
(high waves/
obstacles)
Wave 
interference 
leads to 
positioning 
deviation 
and deep-sea 
operation is 
limited
Deep water 
pressure 
affects inflation 
efficiency and 
relies on precise 
positioning
The delivery 
accuracy of 
strong wind 
/ low light 
environment is 
reduced, and the 
load is limited
Poor mobility in 
shallow water
The underwater 
communication delay 
is high, the endurance 
is limited, the device 
is heavy and the 
transportation is 
inconvenient
Intense exercise 
may cause false 
triggering, and 
the wearing 
comfort is limited
The buoyancy is 
limited and only 
supports short-
term floating
It has a strong 
sense of restraint 
when worn 
and is prone 
to interference 
during exercise
Typical 
researches/
devices
Unmanned AGaPaS 
rescue ship [14], 
ice-surface rescue 
robot [25]
Stiffness 
adjustable 
manipulator [31], 
soft robotic arm 
[37]
USRV[38], 
seabed-mounted 
lifting device[18]
Multi-rotor UAV 
[20,46]
U-shaped 
intelligent 
lifebuoy [69] 
EMILY [87]
multi-functional 
robotic arm [65]
Intelligent life 
jacket [22,23]
SmartPFD [110]
Kingii Wristband 
[24] wristband 
integrated with 
multisensor 
[114]
Chest-worn 
devices [103]

---

### Halaman 22

99
D. Pan et al. / Scientific Journal of Maritime Research [Pomorstvo] 40 (2026) 78-99
Appendix B
Table 3 List of top wireless remote control lifebuoy [78]
Brand
Weight
Endurance Time
Maximum speed
Operational mode
Load capacity
Country
Fiturntech [79]
18 kg
60 min
6 m/s
wireless control
(1000 m)
1500 N
(Effective buoyancy)
China
Oceanring [80]
12.45 kg
90 min
6 m/s
wireless control
(1000 m)
2500 N
(Effective buoyancy)
China
OceanAlpha Dolphin 1  
[81]
13 kg
60 min
3.35 m/s
wireless control
(800 m)
2250 N
(Drag force)
China
Skysailing [82]
10 kg
60 min
5 m/s
wireless control
(600 m)
1500 N
(Effective buoyancy)
China
Marine Safety
—
—
—
—
—
Canada
Shenzhen Fuyuda [83]
12 kg
60 min
6 m/s
wireless control
(1000 m)
2000N
(Effective buoyancy)
500N
(Drag force)
China
Norsta Asia
—
—
—
—
—
China
Noras Performance [84]
13.7 kg
5.9km
4.17 m/s
wireless control
(800 m)
2000 N
(Effective buoyancy)
Norway
KINGSON [85]
8.9 kg
10 min
3 m/s
wireless control
(300 m)
180 N
(Effective buoyancy)
China
Hoverstar [86]
13.8 kg
45 min
4.17 m/s
wireless control
(800 m)
300 N
(Effective buoyancy)
2400 N
(Drag force)
China
