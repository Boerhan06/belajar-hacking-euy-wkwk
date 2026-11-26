# Mood Mate: A Review of Multimodal AI in Real-Time Mental Health Monitoring

> **Klaster Literatur:** Klaster 6: (Opsional) Fitur Ekspansi Suara / STT & Audio Feedback  
> **Penulis:** Sakshi Bhaganagare, Shravani Chavan, Sonali Gavali, Vaibhav Vilas Godase  
> **Tahun Publikasi:** 2025  
> **Publikasi / Jurnal:** International Journal of Advanced Research in Science Communication and Technology  
> **Tautan Resmi (DOI / URL):** [https://doi.org/10.48175/ijarsct-29517](https://doi.org/10.48175/ijarsct-29517)  

---

## 📌 Abstrak / Intisari Ilmiah
The global mental health crisis continues to escalate, with more than one billion people living with mental health disorders as of 2025, according to the World Health Organization (WHO). Mental disorders remain a leading cause of disability worldwide, with depressive disorders affecting approximately 4% of the global population, anxiety disorders impacting 4.4%, and other conditions like bipolar disorder (0.5%) and schizophrenia (0.3%) contributing to the burden. Projections indicate sustained growth in prevalence, exacerbated by factors such as economic instability, social isolation, and limited access to care, particularly in underserved regions. Traditional mental health services are strained, with significant gaps in treatment—most individuals with mental disorders remain underserved, highlighting the need for innovative, scalable solutions. This review introduces Mood Mate, a proposed multimodal AI system designed to advance real-time mental health monitoring by integrating diverse data sources, including voice biomarkers for tone analysis, facial expressions via convolutional neural networks (CNNs), physiological signals from wearables (e.g., heart rate variability and remote photo plethysmography), and textual inputs through natural language processing (NLP). Mood Mate enables continuous mood tracking, early detection of crises such as depression or anxiety episodes, and delivery of personalized interventions like cognitive behavioral therapy (CBT) prompts or mindfulness exercises. Building on recent advancements in AI mental health applications from 2023 to 2025—such as Wysa for chatbot-based support, Youper for mood logging and therapy, and emerging tools like Therabot or ChatGPT-integrated counseling—we synthesize evidence demonstrating detection accuracies ranging from 70% to 90% in multimodal systems. For instance, multimodal deep learning models have achieved up to 89.3% accuracy in identifying early signs of mental health crises, outperforming unimodal approaches by leveraging fused data for more robust predictions.

---

## 📖 Isi Dokumen / Ekstraksi Teks Lengkap
### Halaman 1

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2129 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
Mood Mate: A Review of Multimodal AI in Real-
Time Mental Health Monitoring 
Sakshi Bhaganagare1, Shravani Chavan2, Sonali Gavali3, Vaibhav Godase4 
1,2,3 UG Students, Department of Electronics and Telecommunication Engineering 
4Assistant Professor, Department of Electronics and Telecommunication Engineering 
SKN Sinhgad College of Engineering, Pandharpur 
Corresponding Email: vaibbhavgodse@gmail.com 
 
Abstract: The global mental health crisis continues to escalate, with more than one billion people living 
with mental health disorders as of 2025, according to the World Health Organization (WHO). Mental 
disorders remain a leading cause of disability worldwide, with depressive disorders affecting 
approximately 4% of the global population, anxiety disorders impacting 4.4%, and other conditions like 
bipolar disorder (0.5%) and schizophrenia (0.3%) contributing to the burden. Projections indicate 
sustained growth in prevalence, exacerbated by factors such as economic instability, social isolation, and 
limited access to care, particularly in underserved regions. Traditional mental health services are 
strained, with significant gaps in treatment—most individuals with mental disorders remain underserved, 
highlighting the need for innovative, scalable solutions. 
This review introduces Mood Mate, a proposed multimodal AI system designed to advance real-time 
mental health monitoring by integrating diverse data sources, including voice biomarkers for tone 
analysis, facial expressions via convolutional neural networks (CNNs), physiological signals from 
wearables (e.g., heart rate variability and remote photo plethysmography), and textual inputs through 
natural language processing (NLP). Mood Mate enables continuous mood tracking, early detection of 
crises such as depression or anxiety episodes, and delivery of personalized interventions like cognitive 
behavioral therapy (CBT) prompts or mindfulness exercises. Building on recent advancements in AI 
mental health applications from 2023 to 2025—such as Wysa for chatbot-based support, Youper for 
mood logging and therapy, and emerging tools like Therabot or ChatGPT-integrated counseling—we 
synthesize evidence demonstrating detection accuracies ranging from 70% to 90% in multimodal 
systems. For instance, multimodal deep learning models have achieved up to 89.3% accuracy in 
identifying early signs of mental health crises, outperforming unimodal approaches by leveraging fused 
data for more robust predictions. 
 
Keywords: Multimodal AI, mental health monitoring, Mood Mate, real-time detection, emotion 
recognition, personalized therapy 
 
I. INTRODUCTION 
The global mental health crisis has reached alarming proportions in 2025, affecting over one billion people worldwide 
with various mental health conditions, according to the latest data from the World Health Organization (WHO). This 
staggering figure underscores the pervasive nature of mental disorders, which represent the second leading cause of 
long-term disability globally and contribute significantly to healthcare costs and lost productivity. Anxiety and 
depressive disorders emerge as the most common, impacting individuals across all ages, incomes, and regions, with 
women disproportionately affected overall. Specifically, depression alone afflicts an estimated 5.7% of adults, 
translating to approximately 332 million people, and is about 1.5 times more prevalent among women (6.9%) than men 
(4.6%). Older adults (aged 70 and above) experience rates of 5.9%, while more than 10% of pregnant women and new 
mothers face depression worldwide. Suicide, often linked to untreated depression, claimed 727,000 lives in 2021 and 
remains a leading cause of death among youth aged 15–29.

---

### Halaman 2

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2130 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
These conditions impose a massive economic burden, with depression and anxiety alone costing the global economy an 
estimated US$1 trillion annually in lost productivity. Despite this, treatment gaps persist: median government spending 
on mental health hovers at just 2% of health budgets, with high-income countries allocating up to US$65 per person 
versus a mere US$0.04 in low-income nations. Only about one-third of people with depression in high-income 
countries receive formal care, dropping to under 10% in low-income settings for conditions like psychosis. Barriers to 
access include clinician shortages (a global median of 13 mental health workers per 100,000 people), stigma, 
involuntary inpatient care in many systems, and limited integration into primary healthcare. Projections indicate that, 
without urgent scaling, suicide rates will only decrease by 12% by 2030, far short of the UN's one-third reduction goal. 
These disparities are stark in low- and middle-income countries, where community-based care models are 
underdeveloped, and rights-based legislation complies with international standards in only 45% of nations. 
In this context, multimodal artificial intelligence (AI) emerges as a transformative tool for real-time, non-invasive 
mental health monitoring and intervention. By fusing data from diverse sources—such as voice biomarkers (e.g., tone 
and prosody via audio analysis), facial expressions (detected through video and convolutional neural networks), 
physiological signals (e.g., heart rate variability and electroencephalography from wearables), and textual inputs 
(processed via natural language processing)—multimodal systems can achieve superior detection accuracies compared 
to unimodal approaches. A 2025 meta-analysis of 80 studies found that multimodal AI yields pooled sensitivity of 0.88, 
specificity of 0.90, and area under the curve (AUC) of 0.95 for depression screening, outperforming unimodal 
modalities like EEG (AUC 0.92) or audio (AUC 0.92) alone. This fusion reduces noise, captures complementary 
signals, and enables early crisis detection, with deep learning enhancing accuracy by up to 3% over traditional machine 
learning. 
Mood Mate is proposed as an advanced AI companion app that embodies this multimodal paradigm, utilizing 
smartphone cameras, microphones, and integrated wearables for continuous assessment. It analyzes voice for emotional 
cues, facial micro-expressions for mood shifts, physiological metrics like remote photo plethysmography (rPPG) for 
stress indicators, and user-input text or chat logs for sentiment patterns. Building on established apps such as Youper 
(which combines text, voice, and mood logging for therapy sessions) and Wysa (a chatbot delivering cognitive 
behavioral therapy), Mood Mate aims for seamless data fusion to predict crises with over 90% estimated accuracy, 
delivering personalized interventions like guided mindfulness or CBT prompts in real-time. The AI mental health 
market, valued at USD 1.80 billion in 2025 and projected to reach USD 11.84 billion by 2034 at a 24.15% CAGR, is 
driven by such innovations, rising disorder prevalence (e.g., 280 million with depression), and investments in 
personalized care. 
This review synthesizes advancements in multimodal AI for mental health from 2023 to 2025, evaluating Mood Mate's 
conceptual framework against existing systems, identifying clinical applications, challenges, and ethical considerations. 
It addresses gaps in scalable, proactive tools amid growing demand, particularly in regions like North America (leading 
market share due to high prevalence and tech adoption) and Asia-Pacific (fastest growth via initiatives like India's Tele 
MANAS app). The scope focuses on peer-reviewed literature emphasizing real-time multimodal detection; limitations 
include a primary emphasis on English-language sources, exclusion of unimodal or pre-2023 studies, and reliance on 
available datasets which may underrepresent diverse populations. 
Table 1 shows Global Mental Health Statistics (2023-2025) 
Table 1: Global Mental Health Statistics (2023-2025) 
Metric 
2023 Value 
2025 Projection 
Source 
Mental Health Cases (Global) 
~970 million 
>1 billion 
WHO 
Depression Prevalence (Adults) 
5% 
5.7% 
WHO 
AI Mental Health Market 
$1.13 billion 
$2.5 billion (est.) 
Industry Reports 
Early Detection Efficacy 
70-80% via AI 
85%+ with multimodal 
Studies

---

### Halaman 3

International Journal of Adva
                           International Open-Access, Double
Copyright to IJARSCT 
D
www.ijarsct.co.in 
 
ISSN: 2581-9429 
Historical Development of AI in Mental 
AI's roots in mental health trace back to th
marked a milestone in conversational AI,
machine learning in the 1990s enabled pat
while 2023-2025 witnessed multimodal i
trials. Key milestones include FDA approv
chart illustrating key milestones from 195
projections. Colors: blue for tech advance
historical section 
Figure 1: Ti
 
Multimodal AI Architectures in Mood M
Multimodal architectures fuse data for enha
AUC). Voice analysis employs LSTMs f
Fusion techniques include early/late fusion
for real-time processing, achieving estimate
Figu
Table 2: Com
App/System 
Modalities 
Re
Ca
Youper 
Text, 
Voice, 
Mood Logs 
Ye
Wysa 
Chatbot, Audio 
Ye
Therabot 
Text, Generative 
AI 
Ye
Mood 
Mate 
(Proposed) 
All Fused 
Ye
 
IJARSCT 
 
 
nced Research in Science, Communication and Tec
e-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Jou
Volume 5, Issue 4, October 2025 
DOI: 10.48175/IJARSCT-29517 
 
 
 
II. METHODOLOGY 
Health Monitoring 
he 1950s, with early concepts in computer science. The 1
, simulating therapy. By the 1970s-1980s, rule-based sy
ttern recognition for diagnostics. The 2010s saw mobile 
ntegration, e.g., Kintsugi's voice biomarkers and Thera
vals for AI-assisted anxiety tools in 2024.Figure 1 shows 
0s to 2025, with markers for ELIZA (1966), multimoda
es, green for clinical validations. Placed here to visuali
imeline of Advances in AI for Mental Health 
Mate-Like Systems 
anced accuracy. Facial recognition uses CNNs on datasets
for tone, while physiological signals (e.g., ECG/EEG) i
n in systems like FusionNet. Mood Mate proposes a trans
ed 90%+ accuracy. 
ure 2: System Architecture Diagram 
mparison of Multimodal Features Across Apps 
eal-Time 
apability 
Accuracy 
(e.g., 
Depression 
Detection) 
Key Lim
es 
80% 
Limited 
es 
82% 
Bias in D
es 
85% (Trial) 
Syntheti
es 
90%+ (Est.) 
Privacy 
 
 
 
chnology 
urnal 
2131 
Impact Factor: 7.67 
1966 ELIZA chatbot 
ystems evolved, but 
apps like MoodKit, 
abot's generative AI 
Horizontal timeline 
al apps (2023+), and 
ize evolution in the 
 
s like E-DAIC (87% 
integrate via GNNs. 
former-based model 
 
mitation 
Physiological 
Data 
ic Data Reliance 
Concerns

---

### Halaman 4

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2132 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
Current Applications and Evidence 
Applications include screening via audiovisual signals (AUC 0.87 in E-DAIC). Interventions like Therabot reduced 
depression by 51% in trials. Monitoring uses wearables for stress detection. Evidence from 2025 meta-analyses shows 
24% market growth and 80% user improvements. 
Table 3: Performance Metrics from Recent Studies 
Study/Year 
Modality Focus 
Metric (e.g., AUC/F1) Sample Size Outcome Improvement 
E-DAIC (2024) 
Audio/Video/LLM 
0.87 AUC 
200 
29% Early Detection 
FusionNet (2025) 
Multimodal 
85% Accuracy 
300 
75% Relapse Prevention 
Therabot Trial (2025) 
Generative AI 
0.82 F1 
100 
51% Depression Drop 
Cross-Modality (2024) 
Audio/Text 
80% Severity Score 
500 
Personalized Plans 
 
Challenges and Limitations 
While multimodal AI systems like Mood Mate hold immense promise for revolutionizing mental health monitoring, 
their deployment is fraught with multifaceted challenges that span technical, ethical, clinical, regulatory, and 
socioeconomic domains. These limitations, as highlighted in recent literature from 2023 to 2025, must be systematically 
addressed to ensure safe, equitable, and effective implementation. A 2025 survey on multimodal machine learning in 
mental health identifies persistent obstacles including data governance, privacy, fairness, explainability, and the 
inherent complexity of mental disorders, which often manifest variably across individuals and contexts. Similarly, 
reviews emphasize that while AI integration offers opportunities, it is tempered by algorithmic biases and data quality 
issues that could exacerbate existing healthcare disparities. 
Discussion 
The synthesis of literature from 2023 to 2025 reveals that multimodal AI systems, such as the proposed Mood Mate, 
represent a paradigm shift in mental health monitoring by integrating diverse data streams—voice, facial expressions, 
physiological signals, and textual inputs—to achieve superior predictive accuracy and personalization. Empirical 
evidence consistently demonstrates that multimodal approaches outperform unimodal ones, with detection accuracies 
ranging from 85% to 95% for conditions like depression and anxiety, compared to 70-80% for single-modality systems. 
For instance, a 2025 study on multi-modal deep-attention-BiLSTM frameworks reported scalable, cost-effective early 
detection of mental disorders, leveraging fused data for real-time insights that could reduce intervention delays by up to 
30%. Similarly, scoping reviews highlight AI's role across mental health care phases, from pre-treatment screening 
(e.g., using wearables for physiological monitoring) to post-treatment follow-up, with multimodal fusion enabling more 
robust emotion recognition and crisis prediction. This integration not only enhances diagnostic precision but also 
supports proactive interventions, as seen in apps like Wysa and Youper, where user engagement rates improved by 40-
50% through personalized CBT prompts derived from multimodal analysis. 
Clinically, these advancements imply a move toward patient-centered care, where Mood Mate-like systems could 
augment traditional therapy by providing 24/7 monitoring without overburdening healthcare providers. In remote 
patient monitoring contexts, AI has been shown to identify subtle mood shifts via heart rate variability and voice 
biomarkers, potentially decreasing hospitalization rates for severe cases by 20-25%. Practically, this democratizes 
access, particularly in low-resource settings, where generative AI and virtual reality (VR) integrations—such as 
immersive mindfulness sessions—address stigma and geographical barriers. Policy implications are profound: 
regulatory bodies like the FDA are increasingly approving AI-assisted tools, but standardized frameworks are needed to 
ensure interoperability with electronic health records (EHRs) and compliance with GDPR for data privacy. 
Economically, the AI mental health market's growth from $1.8 billion in 2025 underscores investment potential, yet 
equitable distribution remains a concern to avoid exacerbating health disparities. 
Despite these benefits, significant challenges persist. Algorithmic biases in training datasets, often skewed toward 
Western populations, can lead to inaccurate predictions for diverse ethnic groups, with error rates up to 15% higher in 
underrepresented demographics. Ethical dilemmas, including informed consent for continuous monitoring and the risk 
of over-reliance on AI (potentially delaying human intervention), are recurrent themes in 2025 reviews. Technical

---

### Halaman 5

International Journal of Adva
                           International Open-Access, Double
Copyright to IJARSCT 
D
www.ijarsct.co.in 
 
ISSN: 2581-9429 
limitations, such as data noise in real-wo
scalability, with current models requiring
evidence include a lack of longitudinal 
efficacy, with only 20% of 2023-202
neuropsychology remains nascent, where A
gold-standard clinical tools. 
As illustrated in Figure 3, emerging tren
highlighting areas for targeted improvem
models, where Mood Mate could incorpo
Advancements in generative AI, such as L
prototypes achieving 51% symptom reduct
and advanced sensors like EEG for deepe
development, emphasizing bias audits and 
datasets. Policy recommendations include 
real-world impacts. 
Figu
 
The global mental health crisis, affectin
innovative, scalable solutions to bridge th
exemplifies the transformative potential of
textual inputs to enable real-time monitor
behavioral therapy (CBT) prompts and m
systems like Wysa, Youper, and Therabot
significantly outperforming unimodal app
systems have shown tangible benefits, incl
in hospitalization rates through proactive m
However, realizing Mood Mate’s full po
ensuring GDPR-compliant data privacy an
paramount. Technical hurdles, including 
innovations like edge computing and optim
approvals for AI-driven therapies highlight
Future efforts should focus on hybrid hu
advancements in virtual reality interventi
IJARSCT 
 
 
nced Research in Science, Communication and Tec
e-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Jou
Volume 5, Issue 4, October 2025 
DOI: 10.48175/IJARSCT-29517 
 
 
 
orld environments and computational demands for real-
g edge computing optimizations to achieve sub-second
studies; most research is cross-sectional, limiting insi
25 trials extending beyond six months. Furthermore
AI could enable granular assessments but faces hurdles i
nds show strong progress in accuracy and scalability 
ment. Looking ahead, future directions should prioritiz
orate clinician oversight via telehealth APIs to mitigate 
LLMs for empathetic chatbots, promise more nuanced inte
tion in trials. Multimodal expansions could include VR f
er neural insights, potentially boosting prediction AUC 
transparent algorithms, is crucial, alongside global collab
incentives for EHR integration and funding for longitudi
 
ure 3: Emerging Trends Radar Chart 
III. CONCLUSION 
ng over one billion individuals in 2025, underscores t
he gap in accessible care. Mood Mate, a proposed mul
f integrating voice biomarkers, facial expressions, physio
ring, early crisis detection, and personalized intervention
mindfulness exercises. Advancements from 2023 to 202
t, demonstrate that multimodal AI achieves detection acc
proaches (70-80%) by leveraging fused data for robust
luding up to 50% improvements in user engagement and
monitoring. 
otential demands addressing critical challenges. Ethical
nd mitigating algorithmic biases that affect underrepresen
data noise and computational demands for real-time 
mized fusion algorithms. The absence of longitudinal st
ts the need for rigorous clinical validation. 
uman-AI models to balance automation with clinical o
ons and large language models for empathetic interacti
 
 
 
chnology 
urnal 
2133 
Impact Factor: 7.67 
-time fusion, hinder 
d latencies. Gaps in 
ghts into long-term 
e, integration with 
in validating against 
but lag in privacy, 
e hybrid human-AI 
over-reliance risks. 
eractions, with 2025 
for exposure therapy 
to 0.98. Ethical AI 
borations for diverse 
inal trials to validate 
the urgent need for 
ltimodal AI system, 
ological signals, and 
ns such as cognitive 
25, as evidenced by 
curacies of 85-95%, 
t predictions. These 
d 20-25% reductions 
l concerns, such as 
nted groups, remain 
processing, require 
tudies and full FDA 
oversight, alongside 
ions. Global dataset

---

### Halaman 6

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2134 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
collaborations and bias audits are essential to ensure equitable outcomes across diverse populations. Policy initiatives, 
including regulatory frameworks and incentives for electronic health record integration, will be critical to scaling 
solutions like Mood Mate. By addressing these priorities, multimodal AI can reduce stigma, enhance access in 
underserved regions, and redefine mental health care as proactive and inclusive. Stakeholders—researchers, clinicians, 
policymakers, and tech developers—must collaborate to translate this potential into impactful, ethical, and sustainable 
real-world applications, ensuring mental health support is universally accessible. 
 
REFERENCES 
1. Bantilan, N., Malgaroli, M., Ray, B., & Hull, T. D. (2024). Deep learning for depression detection from text 
and 
audio: 
A 
multi-modal 
approach. 
Journal 
of 
Affective 
Disorders, 
340, 
123-130. 
https://doi.org/10.1016/j.jad.2024.05.087 
2. Chen, Z., Zhang, Y., & Liu, P. (2025). Multimodal AI for remote patient monitoring: Reducing hospitalization 
rates 
through 
early 
detection. 
Health 
Informatics 
Journal, 
31(1), 
78-89. 
https://doi.org/10.1177/14604582241234567 
3. De Choudhury, M., Sharma, S., & Kiciman, E. (2024). Social media and multimodal AI for mental health 
crisis prediction. Proceedings of the ACM on Human-Computer Interaction, 8(CSCW1), 1-22. 
https://doi.org/10.1145/3637372 
4. Godase, V., Pawar, P., Nagane, S., & Kumbhar, S. (2024). Automatic railway horn system using node 
MCU. Journal of Control & Instrumentation, 15(1). 
5. Jamadade, V. K., Ghodke, M. G., Katakdhond, S. S., & Godase, V. A Comprehensive Review on Scalable 
Arduino Radar Platform for Real-time Object Detection and Mapping. 
6. Godase, V. (2025, April). Advanced Neural Network Models for Optimal Energy Management in Microgrids 
with Integrated Electric Vehicles. In Proceedings of the International Conference on Trends in Material 
Science and Inventive Materials (ICTMIM-2025) DVD Part Number: CFP250J1-DVD. 
7. Dange, R., Attar, E., Ghodake, P., & Godase, V. (2023). Smart agriculture automation using ESP8266 
NodeMCU. J. Electron. Comput. Netw. Appl. Math, (35), 1-9. 
8. Mane, V. G. A. L. K., & Gangonda, K. D. S. Pipeline Survey Robot. 
9. Godase, V., & Jagadale, A. (2019). Three element control using PLC, PID & SCADA interface. International 
Journal for Scientific Research & Development, 7(2), 1105-1109. 
10. Godase, V., Modi, S., Misal, V., & Kulkarni, S. (2025). LoRaEdge-ESP32 synergy: Revolutionizing farm 
weather data collection with low-power, long-range IoT. Advance Research in Analog and Digital 
Communications, 2(2), 1-11. 
11. Godase, V., Modi, S., Misal, V., & Kulkarni, S. Real-time object detection for autonomous drone navigation 
using YOLOv8,‖. Advance Research in Communication Engineering and its Innovations, 2(2), 17-27. 
12. Bhaganagare, S., Chavan, S., Gavali, S., & Godase, V. V. (2025). Voice-Controlled Home Automation with 
ESP32: A Systematic Review of IoT-Based Solutions. Journal of Microprocessor and Microcontroller 
Research, 2(3), 1-13. 
13. Jamadade, V. K., Ghodke, M. G., Katakdhond, S. S., & Godase, V. A Comprehensive Review on Scalable 
Arduino Radar Platform for Real-time Object Detection and Mapping. 
14. V. Godase, R. Ghodake, S. Takale, and A. Mulani, ―Design and Optimization of Reconfigurable Microwave 
Filters Using AI Techniques,‖ Journal of RF and Microwave Communication Technologies, vol. 2, no. 2, 
pp.26–41, Aug. 2025.  
15. Godase, V. (2025). Cross-Domain Comparative Analysis of Microwave Imaging Systems for Medical 
Diagnostics and Industrial Testing. Journal of Microwave Engineering & Technologies, 12(2), 39-48p. 
16. V. K. Jamadade, M. G. Ghodke, S. S. Katakdhond, and V. Godase, ―A Review on Real-time 
SubstationFeeder Power Line Monitoring and Auditing Systems,” International Journal of Emerging IoT 
Technologiesin Smart Electronics and Communication, vol. 1, no. 2, pp. 1-16, Sep. 2025.

---

### Halaman 7

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2135 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
17. V. Godase, A. Mulani, R. Ghodake, S. Takale, “Automated Water Distribution Management and Leakage 
Mitigation Using PLC Systems,” Journal of Control and Instrumentation Engineering, vol.11, no. 3, pp. 1-8, 
Aug. 2025. 
18. V. Godase, A. Mulani, R. Ghodake, S. Takale, “PLC-Assisted Smart Water Distribution with Rapid Leakage 
Detection and Isolation,” Journal of Control Systems and Converters, vol. 1, no. 3, pp. 1-13, Aug. 2025. 
19. A. Salunkhe et al., “A Review on Real-Time RFID-Based Smart Attendance Systems for EfficientRecord 
Management,” Advance Research in Analog and Digital Communications, vol. 2, no. 2, pp.32-46, Aug. 2025. 
20. V. V. Godase, S. R. Takale, R. G. Ghodake, and A. Mulani, “Attention Mechanisms in Semantic Segmentation 
of Remote Sensing Images,” Journal of Advancement in Electronics Signal Processing, vol. 2, no. 2, pp. 45–
58, Aug. 2025. 
21. Godase, V., Mulani, A., Takale, S., & Ghodake, R. (2025). Comprehensive Review on Automated Field 
Irrigation using Soil Image Analysis and IoT. Journal of Advance Electrical Engineering and Devices, 3(1), 
46-55. 
22. D. Waghmare, A. Mulani, S. R. Takale, V. Godase, and A. Mulani, “A Comprehensive Review on Automatic 
Fruit Sorting and Grading Techniques with Emphasis on Weight-based Classification,” Research & Review: 
Electronics and Communication Engineering, vol. 2, no. 3, pp. 1-10, Oct. 2025. 
23. Godase, M. V., Mulani, A., Ghodak, R., Birajadar, G., Takale, S., & Kolte, M. (2024). A MapReduce and 
Kalman filter based secure IIoT environment in Hadoop. 
24. Nagane, M.S., Pawar, M.P., & Godase, P.V. (2022). Cinematica Sentiment Analysis. Journal of Image 
Processing and Intelligent Remote Sensing. 
25. Dhope, V. (2024). SMART PLANT MONITORING SYSTEM. In International Journal of Creative Research 
Thoughts (IJCRT). https://www.ijcrt.org 
26. Godase, V., Mulani, A., Takale, S., & Ghodake, R. (2025). A Holistic Review of Automatic Drip Irrigation 
Systems: Foundations and Emerging Trends. Available at SSRN 5247778. 
27. Godase, V., Mulani, A., Pawar, A., & Sahani, K. (2025). A Comprehensive Review on PIR Sensor-Based 
Light Automation Systems. International Journal of Image Processing and Smart Sensors, 1(1), 22-29. 
28. Karve, S., Gangonda, S., Birajadar, G., Godase, V., Ghodake, R., & Mulani, A. O. (2023, October). Optimized 
Neural Network for Prediction of Neurological Disorders. In International Conference on Emerging Trends in 
Artificial Intelligence, Data Science and Signal Processing (pp. 183-191). Cham: Springer Nature Switzerland. 
29. Godase, M. V., Mulani, A., Ghodak, M. R., Birajadar, M. G., Takale, M. S., & Kolte, M. A MapReduce and 
Kalman Filter based Secure IIoT Environment in Hadoop. Sanshodhak, Volume 19, June 2024. 
30. Mulani, A. O., & Mane, P. B. (2017). Watermarking and cryptography based image authentication on 
reconfigurable platform. Bulletin of Electrical Engineering and Informatics, 6(2), 181-187. 
31. Gadade, B., Mulani, A. O., & Harale, A. D. IoT Based Smart School Bus and Student Tracking System. 
Sanshodhak, Volume 19, June 2024. 
32. Dhanawadel, A., Mulani, A. O., & Pise, A. C. IOT based Smart farming using Agri BOT. Sanshodhak, 
Volume 20, June 2024. 
33. Mulani, A., & Mane, P. B. (2016). DWT based robust invisible watermarking. Scholars' Press. 
34. R. G. Ghodke, G. B. Birajdar, A.O. Mulani, G.N. Shinde, R.B. Pawar, Design and Development of an 
Efficient and Cost-Effective surveillance Quadcopter using Arduino, Sanshodhak, Volume 20, June 2024. 
35. R. G. Ghodke, G. B. Birajdar, A.O. Mulani, G.N. Shinde, R.B. Pawar, Design and Development of Wireless 
Controlled ROBOT using Bluetooth Technology, Sanshodhak, Volume 20, June 2024. 
36. Swami, S. S., & Mulani, A. O. (2017, August). An efficient FPGA implementation of discrete wavelet 
transform for image compression. In 2017 International Conference on Energy, Communication, Data 
Analytics and Soft Computing (ICECDS) (pp. 3385-3389). IEEE. 
37. Mane, P. B., & Mulani, A. O. (2018). High speed area efficient FPGA implementation of AES 
algorithm. International Journal of Reconfigurable and Embedded Systems, 7(3), 157-165.

---

### Halaman 8

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2136 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
38. Mulani, A. O., & Mane, P. B. (2016). Area efficient high speed FPGA based invisible watermarking for image 
authentication. Indian journal of Science and Technology, 9(39), 1-6. 
39. Kashid, M. M., Karande, K. J., & Mulani, A. O. (2022, November). IoT-based environmental parameter 
monitoring using machine learning approach. In Proceedings of the International Conference on Cognitive 
and Intelligent Computing: ICCIC 2021, Volume 1 (pp. 43-51). Singapore: Springer Nature Singapore. 
40. Nagane, U. P., & Mulani, A. O. (2021). Moving object detection and tracking using Matlab. Journal of 
Science and Technology, 6(1), 2456-5660. 
41. Kulkarni, P. R., Mulani, A. O., & Mane, P. B. (2016). Robust invisible watermarking for image authentication. 
In Emerging Trends in Electrical, Communications and Information Technologies: Proceedings of ICECIT-
2015 (pp. 193-200). Singapore: Springer Singapore. 
42. Ghodake, M. R. G., & Mulani, M. A. (2016). Sensor based automatic drip irrigation system. Journal for 
Research, 2(02). 
43. Mandwale, A. J., & Mulani, A. O. (2015, January). Different Approaches For Implementation of Viterbi 
decoder on reconfigurable platform. In 2015 International Conference on Pervasive Computing (ICPC) (pp. 1-
4). IEEE. 
44. Jadhav, M. M., Chavan, G. H., & Mulani, A. O. (2021). Machine learning based autonomous fire combat 
turret. Turkish Journal of Computer and Mathematics Education, 12(2), 2372-2381. 
45. Shinde, G., & Mulani, A. (2019). A robust digital image watermarking using DWT-PCA. International 
Journal of Innovations in Engineering Research and Technology, 6(4), 1-7. 
46. Mane, D. P., & Mulani, A. O. (2019). High throughput and area efficient FPGA implementation of AES 
algorithm. International Journal of Engineering and Advanced Technology, 8(4). 
47. Mulani, A. O., & Mane, D. P. (2017). An Efficient implementation of DWT for image compression on 
reconfigurable platform. International Journal of Control Theory and Applications, 10(15), 1-7. 
48. Deshpande, H. S., Karande, K. J., & Mulani, A. O. (2015, April). Area optimized implementation of AES 
algorithm on FPGA. In 2015 International Conference on Communications and Signal Processing 
(ICCSP) (pp. 0010-0014). IEEE. 
49. Deshpande, H. S., Karande, K. J., & Mulani, A. O. (2014, April). Efficient implementation of AES algorithm 
on FPGA. In 2014 International Conference on Communication and Signal Processing (pp. 1895-1899). 
IEEE. 
50. Kulkarni, P., & Mulani, A. O. (2015). Robust invisible digital image mamarking using discrete wavelet 
transform. International Journal of Engineering Research & Technology (IJERT), 4(01), 139-141. 
51. Mulani, A. O., Jadhav, M. M., & Seth, M. (2022). Painless Non‐invasive blood glucose concentration level 
estimation using PCA and machine learning. The CRC Book entitled Artificial Intelligence, Internet of Things 
(IoT) and Smart Materials for Energy Applications. 
52. Mulani, A. O., & Shinde, G. N. (2021). An approach for robust digital image watermarking using 
DWT‐PCA. Journal of Science and Technology, 6(1). 
53. Mulani, A. O., & Mane, P. B. (2014, October). Area optimization of cryptographic algorithm on less dense 
reconfigurable platform. In 2014 International Conference on Smart Structures and Systems (ICSSS) (pp. 86-
89). IEEE. 
54. Jadhav, H. M., Mulani, A., & Jadhav, M. M. (2022). Design and development of chatbot based on 
reinforcement learning. Machine Learning Algorithms for Signal and Image Processing, 219-229. 
55. Mulani, A. O., & Mane, P. (2018). Secure and area efficient implementation of digital image watermarking on 
reconfigurable platform. International Journal of Innovative Technology and Exploring Engineering, 8(2), 56-
61. 
56. Kalyankar, P. A., Mulani, A. O., Thigale, S. P., Chavhan, P. G., & Jadhav, M. M. (2022). Scalable face image 
retrieval using AESC technique. Journal Of Algebraic Statistics, 13(3), 173-176. 
57. Takale, S., & Mulani, A. (2022). DWT-PCA based video watermarking. Journal of Electronics, Computer 
Networking and Applied Mathematics (JECNAM) ISSN, 2799-1156.

---

### Halaman 9

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2137 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
58. Kamble, A., & Mulani, A. O. (2022). Google assistant based device control. Int. J. of Aquatic Science, 13(1), 
550-555. 
59. Kondekar, R. P., & Mulani, A. O. (2017). Raspberry Pi based voice operated Robot. International Journal of 
Recent Engineering Research and Development, 2(12), 69-76. 
60. Ghodake, R. G., & Mulani, A. O. (2018). Microcontroller based automatic drip irrigation system. In Techno-
Societal 2016: Proceedings of the International Conference on Advanced Technologies for Societal 
Applications (pp. 109-115). Springer International Publishing. 
61. Mulani, A. O., Birajadar, G., Ivković, N., Salah, B., & Darlis, A. R. (2023). Deep learning based detection of 
dermatological diseases using convolutional neural networks and decision trees. Traitement du Signal, 40(6), 
2819. 
62. Boxey, A., Jadhav, A., Gade, P., Ghanti, P., & Mulani, A. O. (2022). Face Recognition using Raspberry 
Pi. Journal of Image Processing and Intelligent Remote Sensing (JIPIRS) ISSN, 2815-0953. 
63. Patale, J. P., Jagadale, A. B., Mulani, A. O., & Pise, A. (2023). A Systematic survey on Estimation of 
Electrical Vehicle. Journal of Electronics, Computer Networking and Applied Mathematics (JECNAM) ISSN, 
2799-1156. 
64. Gadade, B., & Mulani, A. (2022). Automatic System for Car Health Monitoring. International Journal of 
Innovations in Engineering Research and Technology, 57-62. 
65. Shinde, M. R. S., & Mulani, A. O. (2015). Analysisof Biomedical Image Using Wavelet 
Transform. International Journal of Innovations in Engineering Research and Technology, 2(7), 1-7. 
66. Mandwale, A., & Mulani, A. O. (2014, December). Implementation of convolutional encoder & different 
approaches for viterbi decoder. In IEEE International Conference on Communications, Signal Processing 
Computing and Information technologies. 
67. Mulani, A. O., Jadhav, M. M., & Seth, M. (2022). Painless machine learning approach to estimate blood 
glucose level with non-invasive devices. In Artificial intelligence, internet of things (IoT) and smart materials 
for energy applications (pp. 83-100). CRC Press. 
68. Maske, Y., Jagadale, A. B., Mulani, A. O., & Pise, A. C. (2023). Development of BIOBOT system to assist 
COVID patient and caretakers. European Journal of Molecular & Clinical Medicine, 10(01), 2023. 
69. Utpat, V. B., Karande, D. K., & Mulani, D. A. Grading of Pomegranate Using Quality Analysis‖. International 
Journal for Research in Applied Science & Engineering Technology (IJRASET), 10. 
70. Takale, S., & Mulani, D. A. (2022). Video Watermarking System. International Journal for Research in 
Applied Science & Engineering Technology (IJRASET), 10. 
71. Mandwale, A., & Mulani, A. O. (2015, January). Different approaches for implementation of Viterbi decoder. 
In IEEE international conference on pervasive computing (ICPC). 
72. Maske, Y., Jagadale, M. A., Mulani, A. O., & Pise, A. (2021). Implementation of BIOBOT System for 
COVID Patient and Caretakers Assistant Using IOT. International Journal of Information Technology and, 
30-43. 
73. Mulani, A. O., & Mane, D. P. (2016). Fast and Efficient VLSI Implementation of DWT for Image 
Compression. International Journal for Research in Applied Science & Engineering Technology, 5, 1397-
1402. 
74. Kambale, A. (2023). Home automation using google assistant. UGC care approved journal, 32(1), 1071-1077. 
75. Pathan, A. N., Shejal, S. A., Salgar, S. A., Harale, A. D., & Mulani, A. O. (2022). Hand gesture controlled 
robotic system. Int. J. of Aquatic Science, 13(1), 487-493. 
76. Korake, D. M., & Mulani, A. O. (2016). Design of Computer/Laptop Independent Data transfer system from 
one USB flash drive to another using ARM11 processor. International Journal of Science, Engineering and 
Technology Research. 
77. Mandwale, A., & Mulani, A. O. (2016). Implementation of High Speed Viterbi Decoder using 
FPGA. International Journal of Engineering Research & Technology, IJERT.

---

### Halaman 10

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2138 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
78. Kolekar, S. D., Walekar, V. B., Patil, P. S., Mulani, A. O., & Harale, A. D. (2022). Password Based Door Lock 
System. Int. J. of Aquatic Science, 13(1), 494-501. 
79. Shinde, R., & Mulani, A. O. (2015). Analysis of Biomedical Image‖. International Journal on Recent & 
Innovative trend in technology (IJRITT). 
80. Sawant, R. A., & Mulani, A. O. (2022). Automatic PCB Track Design Machine. International Journal of 
Innovative Science and Research Technology, 7(9). 
81. ABHANGRAO, M. R., JADHAV, M. S., GHODKE, M. P., & MULANI, A. (2017). Design And 
Implementation Of 8-bit Vedic Multiplier. International Journal of Research Publications in Engineering and 
Technology (ISSN No: 2454-7875). 
82. Gadade, B., Mulani, A. O., & Harale, A. D. (2024). Iot based smart school bus and student monitoring 
system. Naturalista Campano, 28(1), 730-737. 
83. Mulani, D. A. O. (2024). A Comprehensive Survey on Semi-Automatic Solar-Powered Pesticide Sprayers for 
Farming. Journal of Energy Engineering and Thermodynamics (JEET) ISSN, 2815-0945. 
84. Salunkhe, D. S. S., & Mulani, D. A. O. (2024). Solar Mount Design Using High-Density 
Polyethylene. NATURALISTA CAMPANO, 28(1). 
85. Seth, M. (2022). Painless Machine learning approach to estimate blood glucose level of Non-Invasive 
device. Artificial Intelligence, Internet of Things (IoT) and Smart Materials for Energy Applications. 
86. Kolhe, V. A., Pawar, S. Y., Gohery, S., Mulani, A. O., Sundari, M. S., Kiradoo, G., ... & Sunil, J. (2024). 
Computational and experimental analyses of pressure drop in curved tube structural sections of Coriolis mass 
flow metre for laminar flow region. Ships and Offshore Structures, 19(11), 1974-1983. 
87. Basawaraj Birajadar, G., Osman Mulani, A., Ibrahim Khalaf, O., Farhah, N., G Gawande, P., Kinage, K., & 
Abdullah Hamad, A. (2024). Epilepsy identification using hybrid CoPrO-DCNN classifier. International 
Journal of Computing and Digital Systems, 16(1), 783-796. 
88. Kedar, M. S., & Mulani, A. (2021). IoT Based Soil, Water and Air Quality Monitoring System for 
Pomegranate Farming. Journal of Electronics, Computer Networking and Applied Mathematics (JECNAM) 
ISSN, 2799-1156. 
89. Godse, A. P. A.O. Mulani (2009). Embedded Systems (First Edition).  
90. Pol, R. S., Bhalerao, M. V., & Mulani, A. O. A real time IoT based System Prediction and Monitoring of 
Landslides. International Journal of Food and Nutritional Sciences, Volume 11, Issue 7, 2022. 
91. Mulani, A. O., Sardey, M. P., Kinage, K., Salunkhe, S. S., Fegade, T., & Fegade, P. G. (2025). ML-powered 
Internet of Medical Things (MLIOMT) structure for heart disease prediction. Journal of Pharmacology and 
Pharmacotherapeutics, 16(1), 38-45. 
92. Aiwale, S., Kolte, M. T., Harpale, V., Bendre, V., Khurge, D., Bhandari, S., ... & Mulani, A. O. (2024). Non-
invasive Anemia Detection and Prediagnosis. Journal of Pharmacology and Pharmacotherapeutics, 15(4), 
408-416. 
93. Mulani, A. O., Bang, A. V., Birajadar, G. B., Deshmukh, A. B., Jadhav, H. M., & Liyakat, K. K. S. (2024). 
IoT Based Air, Water, and Soil Monitoring System for Pomegranate Farming. Annals of Agri-Bio 
Research, 29(2), 71-86. 
94. Kulkarni, T. M., & Mulani, A. O. (2024). Face Mask Detection on Real Time Images and Videos using Deep 
Learning. International Journal of Electrical Machine Analysis and Design (IJEMAD), 2(1). 
95. Thigale, S. P., Jadhav, H. M., Mulani, A. O., Birajadar, G. B., Nagrale, M., & Sardey, M. P. (2024). Internet of 
things and robotics in transforming healthcare services. Afr J Biol Sci (S Afr), 6(6), 1567-1575. 
96. Pol, D. R. S. (2021). Cloud Based Memory Efficient Biometric Attendance System Using Face 
Recognition. Stochastic Modeling & Applications, 25(2). 
97. Nagtilak, M. A. G., Ulegaddi, M. S. N., Adat, M. A. S., & Mulani, A. O. (2021). Breast Cancer Prediction 
using Machine Learning. 
98. Rahul, G. G., & Mulani, A. O. (2016). Microcontroller Based Drip Irrigation System.

---

### Halaman 11

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2139 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
99. Kulkarni, T. M., & Mulani, A. O. Deep Learning Based Face-Mask Detection: An Approach to Reduce 
Pandemic Spreads in Human Healthcare. African Journal of Biological Sciences, 6(6), 2024. 
100. Mulani, A., & Mane, P. B. (2016). DWT based robust invisible watermarking. Scholars' Press. 
101. Dr. Vaishali Satish Jadhav, Dr. Shweta Sadanand Salunkhe, Dr. Geeta Salunkhe, Pranali Rajesh Yawle, Dr. 
Rahul S. Pol, Dr. Altaf Osman Mulani, Dr. Manish Rana, Iot Based Health Monitoring System for Human, 
Afr. J. Biomed. Res. Vol. 27 (September 2024). 
102. Dr. Vaishali Satish Jadhav, Geeta D. Salunke, Kalyani Ramesh Chaudhari, Dr. Altaf Osman Mulani, Dr. 
Sampada Padmakar Thigale, Dr. Rahul S. Pol, Dr. Manish Rana, Deep Learning-Based Face Mask 
Recognition in Real-Time Photos and Videos, Afr. J. Biomed. Res. Vol. 27 (September 2024). 
103. Altaf Osman Mulani, Electric Vehicle Parameters Estimation Using Web Portal, Recent Trends in Electronics 
& Communication Systems, Volume 10, Issue 3, 2023. 
104. Aryan Ganesh Nagtilak, Sneha Nitin Ulegaddi, Mahesh Mane, Altaf O. Mulani, Automatic Solar Powered 
Pesticide Sprayer for Farming, International Journal of Microwave Engineering and Technology, Volume 9 
No. 2, 2023. 
105. Annasaheb S. Dandage, Vitthal R. Rupnar, Tejas A Pise, and A. O. Mulani, Real-Time Language Translation 
Application Using Tkinter. International Journal of Digital Communication and Analog Signals. 2025; 11(01): 
-p. 
106. AnnaSaheb S Dandage, Vitthal R. Rupnar, Tejas A Pise, and A. O. Mulani, IoT-Powered Weather Monitoring 
and Irrigation Automation: Transforming Modern Farming Practices. . 2025; 11(01): -p. 
107. Mulani, A.O., Kulkarni, T.M. (2025). Face Mask Detection System Using Deep Learning: A Comprehensive 
Survey. In: Singh, S., Arya, K.V., Rodriguez, C.R., Mulani, A.O. (eds) Emerging Trends in Artificial 
Intelligence, Data Science and Signal Processing. AIDSP 2023. Communications in Computer and 
Information Science, vol 2439. Springer, Cham. https://doi.org/10.1007/978-3-031-88759-8_3. 
108. Karve, S., Gangonda, S., Birajadar, G., Godase, V., Ghodake, R., Mulani, A.O. (2025). Optimized Neural 
Network for Prediction of Neurological Disorders. In: Singh, S., Arya, K.V., Rodriguez, C.R., Mulani, A.O. 
(eds) Emerging Trends in Artificial Intelligence, Data Science and Signal Processing. AIDSP 2023. 
Communications 
in 
Computer 
and 
Information 
Science, 
vol 
2440. 
Springer, 
Cham. 
https://doi.org/10.1007/978-3-031-88762-8_18. 
109. Saurabh Singh, Karm Veer Arya, Ciro Rodriguez Rodriguez, and Altaf Osman Mulani, Emerging Trends in 
Artificial Intelligence, Data Science and Signal Processing, Communications in Computer and Information 
Science (CCIS), volume 2440. 
110. Saurabh Singh, Karm Veer Arya, Ciro Rodriguez Rodriguez, and Altaf Osman Mulani, Emerging Trends in 
Artificial Intelligence, Data Science and Signal Processing, Communications in Computer and Information 
Science (CCIS), volume 2439. 
111. Godase, V., Mulani, A., Pawar, A., & Sahani, K. (2025). A Comprehensive Review on PIR Sensor-Based 
Light Automation Systems. International Journal of Image Processing and Smart Sensors, 1(1), 22-29. 
112. Godase, V., Mulani, A., Takale, S., & Ghodake, R. (2025). Comprehensive Review on Automated Field 
Irrigation using Soil Image Analysis and IoT. Journal of Advance Electrical Engineering and Devices, 3(1), 
46-55. 
113. Altaf Osman Mulani, Deshmukh M., Jadhav V., Chaudhari K., Mathew A.A., Shweta Salunkhe. Transforming 
Drug Therapy with Deep Learning: The Future of Personalized Medicine. Drug Research. 2025 Aug 29. 
114. Altaf O. Mulani, Vaibhav V. Godase, Swapnil R. Takale, Rahul G. Ghodake (2025), Image Authentication 
Using Cryptography and Watermarking, International Journal of Image Processing and Smart Sensors, Vol. 1, 
Issue 2, pp 27-34. 
115. Altaf O. Mulani, Vaibhav V. Godase, Swapnil R. Takale, Rahul G. Ghodake (2025), Advancements in 
Artificial Intelligence: Transforming Industries and Society, International Journal of Artificial Intelligence of 
Things (AIoT) in Communication Industry, Vol. 1, Issue 2, pp 1-5.

---

### Halaman 12

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2140 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
116. Altaf O. Mulani, Vaibhav V. Godase, Swapnil R. Takale, Rahul G. Ghodake (2025), AI-Powered Predictive 
Analytics in Healthcare: Revolutionizing Disease Diagnosis and Treatment, Journal of Advance Electrical 
Engineering and Devices, Vol. 3, Issue 2, pp 27-34. 
117. Godase, V., Mulani, A., Takale, S., & Ghodake, R. (2025). A Holistic Review of Automatic Drip Irrigation 
Systems: Foundations and Emerging Trends. Available at SSRN 5247778. 
118. V. Godase, R. Ghodake, S. Takale, and A. Mulani, ―Design and Optimization of Reconfigurable Microwave 
Filters Using AI Techniques, International Journal of RF and Microwave Communication Technologies, vol. 
2, no. 2, pp.26–41, Aug. 2025. 
119. V. Godase, A. Mulani, R. Ghodake, S. Takale, “Automated Water Distribution Management and Leakage 
Mitigation Using PLC Systems,” Journal of Control and Instrumentation Engineering, vol.11, no. 3, pp. 1-8, 
Aug. 2025. 
120. V. Godase, A. Mulani, R. Ghodake, S. Takale, “PLC-Assisted Smart Water Distribution with Rapid Leakage 
Detection and Isolation,” Journal of Control Systems and Converters, vol. 1, no. 3, pp. 1-13, Aug. 2025. 
121. V. V. Godase, S. R. Takale, R. G. Ghodake, and A. Mulani, “Attention Mechanisms in Semantic Segmentation 
of Remote Sensing Images,” Journal of Advancement in Electronics Signal Processing, vol. 2, no. 2, pp. 45–
58, Aug. 2025. 
122. D. Waghmare, A. Mulani, S. R. Takale, V. Godase, and A. Mulani, “A Comprehensive Review on Automatic 
Fruit Sorting and Grading Techniques with Emphasis on Weight-based Classification,” Research & Review: 
Electronics and Communication Engineering, vol. 2, no. 3, pp. 1-10, Oct. 2025. 
123. Karande, K. J., & Talbar, S. N. (2014). Independent component analysis of edge information for face 
recognition. Springer India. 
124. Karande, K. J., & Talbar, S. N. (2008). Face recognition under variation of pose and illumination using 
independent component analysis. ICGST-GVIP, ISSN. 
125. Gaikwad, D. S., & Karande, K. J. (2016). Image processing approach for grading and identification of diseases 
on pomegranate fruit: An overview. International Journal of Computer Science and Information Technologies, 
7, 519-522. 
126. Kawathekar, P. P., & Karande, K. J. (2014, July). Severity analysis of Osteoarthritis of knee joint from X-ray 
images: A Literature review. In 2014 International Conference on Signal propagation and computer 
technology (ICSPCT 2014) (pp. 648-652). IEEE. 
127. Daithankar, M. V., Karande, K. J., & Harale, A. D. (2014, April). Analysis of skin color models for face 
detection. In 2014 International Conference on Communication and Signal Processing (pp. 533-537). IEEE. 
128. Karande, J. K., Talbar, N. S., & Inamdar, S. S. (2012, May). Face recognition using oriented Laplacian of 
Gaussian (OLOG) and independent component analysis (ICA). In 2012 Second International Conference on 
Digital Information and Communication Technology and it's Applications (DICTAP) (pp. 99-103). IEEE. 
129. Shubham Salunkhe, Pruthviraj Zambare, Sakshi Shinde, S. K. Godase. (2024).API Development for Cloud 
Parameter Curation International. Journal of Electrical and Communication Engineering Technology, 2(1). 
https://doi.org/10.37591/ijecet 
130. Badave, A., Pawale, A., Andhale, T., Godase, S. K., & STM JOURNALS. (2024). Smart home safety using 
fire 
and 
gas 
detection 
system. 
Recent 
Trends 
in 
Fluid 
Mechanics, 
1, 
35–43. 
https://journals.stmjournals.com/rtfm 
131. Asabe, H., Asabe, R., Lengare, O., & Godase, S. (2025). IOT- BASED STORAGE SYSTEM FOR 
MANAGING VOLATILE MEDICAL RESOURCES IN HEALTHCARE FACILITIES. INTERNATIONAL 
JOURNAL OF PROGRESSIVE RESEARCH IN ENGINEERING MANAGEMENT AND SCIENCE (IJPREMS), 
05(03), 2427–2433. https://www.ijprems.com 
132. Karche, S. N., Mulani, A. O., Department of Electronics, SKN Sinhgad College of Engineering, Korti, & 
University of Solapur, Maharashtra, India. (2018). AESC Technique for Scalable Face Image Retrieval. 
International Journal of Innovative Research in Computer and Communication Engineering, 6(4), 3404–3405.  
https://doi.org/10.15680/IJIRCCE.2018.0604036

---

### Halaman 13

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2141 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
133. Bankar, A. S., Harale, A. D., & Karande, K. J. (2021). Gestures Controlled Home Automation using Deep 
Learning: A Review. International Journal of Current Engineering and Technology, 11(06), 617–621. 
https://doi.org/10.14741/ijcet/v.11.6.4 
134. Mali, A. S., Ghadge, S. K., Adat, A. S., & Karande, S. V. (2024). Intelligent Medication Management System. 
IJSRD - International Journal for Scientific Research & Development, Vol. 12(Issue 3). 
135. Water Level Control, Monitoring and Altering System by using GSM in Irrigation Based on Season. (2019). In 
International Research Journal of Engineering and Technology (IRJET) (Vol. 06, Issue 04, p. 1035) [Journal-
article]. https://www.irjet.net 
136. Modi, S., Misal, V., Kulkarni, S., & Mali A.S. (2025). Hydroponic Farming Monitoring System - Automated 
system to monitor and control nutrient and pH levels. In Journal of Microcontroller Engineering and 
Applications (Vol. 12, Issue 3, pp. 11–16). https://doi.org/10.37591/JoMEA 
137. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “VGHN: variations aware geometric 
moments and histogram features normalization for robust uncontrolled face recognition”, International 
Journal of Information Technology, https://doi.org/10.1007/s41870-021-00703-0. 
138. Siddheshwar  Gangonda and Prachi Mukherji, “Speech Processing for Marathi Numeral Recognition using 
MFCC & DTW Features”, International Journal of Engineering Research And Applications (IJERA) pp. 118-
122, ISSN: 2248-9622. 
139. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “Recognition of Marathi Numerals 
Using MFCC and DTW Features”, Book Title: Recent Trends on Image Processing and Pattern Recognition, 
RTIP2R 2018, CCIS 1037, pp. 1–11, © Springer Nature Singapore Pte Ltd. 2019 https://doi.org/10.1007/978-
981-13-9187-3_17. 
140. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “Analysis of Face Recognition 
Algorithms for Uncontrolled Environments”, Book Title: Computing, Communication and Signal Processing, 
pp. 919–926, © Springer Nature Singapore Pte Ltd. 2018.  
141. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “Recognition of Marathi Numerals 
using MFCC and DTW Features”, 2nd International Conference on Recent Trends in Image Processing and 
Pattern Recognition (RTIP2R 2018), 21th -22th  Dec., 2018, organized by Solapur University, Solapur in 
collaboration with University of South Dakota (USA) and Universidade de Evora (Portugal), India.  
142. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “A Comprehensive Survey of Face 
Databases for Constrained and Unconstrained Environments”, 2nd IEEE Global Conference on Wireless 
Computing & Networking (GCWCN-2018), 23th-24th Nov., 2018, organized by STES's Sinhgad Institute of 
Technology, Lonavala, India. 
143. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “An Extensive Survey of Prominent 
Researches in Face Recognition under different Conditions”, 4th International Conference on Computing, 
Communication, Control And Automation (ICCUBEA-2018), 16th to 18th Aug. 2018 organized by Pimpri 
Chinchwad College of Engineering (PCCOE), Pune, India. 
144. Siddheshwar S. Gangonda, Prashant P. Patavardhan, Kailash J. Karande, “Analysis of Face Recognition 
Algorithms for Uncontrolled Environments”, 3rd International Conference on Computing, Communication and 
Signal Processing (ICCASP 2018), 26th-27th Jan.2018, organized by Dr. BATU, Lonere, India. 
145. Siddheshwar 
Gangonda 
and 
Prachi 
Mukherji, 
“Speech 
Processing 
for 
Marathi 
Numeral 
Recognition”,International Conference on Recent Trends, Feb 2012, IOK COE, Pune. 
146. S. S. Gangonda, “Bidirectional Visitor Counter with automatic Door Lock System”, National Conference on 
Computer, Communication and Information Technology (NCCCIT-2018), 30th and 31st March 2018 organized 
by Department of Electronics and Telecommunication Engineering, SKN SCOE, Korti, Pandharpur.  
147. Siddheshwar Gangonda and Prachi Mukherji, “Speech Processing for Marathi Numeral Recognition using 
MFCC & DTW Features”, ePGCON 2012, 23rd and 24th April 2012 organized by Commins COE for Woman, 
Pune.

---

### Halaman 14

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2142 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
148. Siddheshwar Gangonda and Prachi Mukherji, “Speech Processing for Marathi Numeral Recognition”, 
National Conference on Emerging Trends in Engineering and Technology (VNCET’12), 30th March 2012 
organized by Vidyavardhini’s College of Engineering and Technology, Vasai Road, Thane. 
149. Siddheshwar Gangonda and Prachi Mukherji, “Speech Processing for Marathi Numeral Recognition”, 
ePGCON 2011, 26th April 2011 organized by MAEER’s MIT, Kothrud, Pune-38. 
150. Siddheshwar Gangonda, “Medical Image Processing”,Aavishkar-2K7, 17th and 18th March 2007 organized by 
Department of Electronics and Telecommunication Engineering, SVERI’s COE, Pandharpur. 
151. Siddheshwar Gangonda, “Image enhancement & Denoising”,VISION 2k7, 28th Feb-2nd  March 2007 
organized by M.T.E. Society’s Walchand College of Engineering, Sangli. 
152. Siddheshwar Gangonda, “Electromagnetic interference & compatibility” KSHITIJ 2k6, 23rd and 24th Sept. 
2006 organized by Department of Mechanical Engineering, SVERI’s COE, Pandharpur. 
153. A. Pise and K. Karande, “A genetic Algorithm-Driven Energy-Efficient routing strategy for optimizing 
performance in VANETs,” Engineering Technology and Applied Science Research, vol. 15, no. 5, 2025, 
[Online]. Available: https://etasr.com/index.php/ETASR/article/view/12744 
154. A. C. Pise, K. J. Karande, “Investigating Energy-Efficient Optimal Routing Protocols for VANETs: A 
Comprehensive Study”, ICT for Intelligent Systems, Lecture Notes in Networks and Systems 1109, 
Proceedings of ICTIS 2024 Volume 3, Lecture Notes in Networks and Systems, Springer, Singapore, ISSN 
2367-3370, PP 407-417, 29 October 2024  https://doi.org/10.1007/978-981-97-6675-8_33. 
155. A. C. Pise, et. al., “Smart Vehicle: A Systematic Review”, International Journal - The Ciência & Engenharia -
Science & Engineering Journal ISSN: 0103-944XVolume 11 Issue 1, 2023pp: 992–998, 2023. 
156. A. C. Pise, et. al., “Smart Vehicle: A Systematic Review”, International Journal of Research Publication and 
Reviews, ISSN 2582-7421, Vol 4, no 10, pp 2728-2731 October 2023. 
157. A. C. Pise, et. al., “Development of BIOBOT System to Assist COVID Patient and Caretakers”, European 
Journal of Molecular and Clinical Medicine ; 10(1):3472-3480, 2023. 
158. A. C. Pise, et. al., “IoT Based Landmine Detection Robot”, International Journal of Research in Science & 
EngineeringISSN: 2394-8299Vol: 03, No. 04, June-July 2023. 
159. A. C. Pise, et. al., “A Systematic survey on Estimation of Electrical Vehicle”, Journal of Electronics, 
Computer Networking and Applied Mathematics (JECNAM) ISSN: 2799-1156, Volume 3, Issue 01, Pages 1-
6, December 2023. 
160. A. C. Pise, et. al., “Python Algorithm to Estimate Range of Electrical Vehicle”, Web of Science, Vol 21, No 1 
(2022) December 2022 
161. A. C. Pise, et. al., “Implementation of BIOBOT System for COVID Patient and Caretakers Assistant using 
IOT”, 
International 
Journal 
of 
Information 
technology 
and 
Computer 
Engineering. 
30-43. 
10.55529/ijitc.21.30.43, (2022). 
162. A. C. Pise, et. al., “An IoT Based Real Time Monitoring of Agricultural and Micro irrigation system”, 
International journal of scientific research in Engineering and management (IJSREM), VOLUME: 06 ISSUE: 
04 | APRIL – 2022, ISSN:2582-3930. 
163. A. C. Pise, Dr. K. J. Karande, “An Exploratory study of Cluster Based Routing Protocol in VANET: A 
Review”, International Journal of Advanced Research in Engineering and Technology(IJARET), 12,10, 2021, 
17-30, 
Manuscript 
ID 
:00000-94375 
Source 
ID 
: 
00000006, 
Journal_uploads/ 
IJARET/VOLUME_12_ISSUE_10/IJARET_12_10_002.pdf 
164. A. C. Pise, et. al., “Android based Portable Health Support System,” A Peer Referred & Indexed International 
Journal  of Research,Vol.8,issue.4 , April 2019. 
165. A. C. Pise, et. al., “Facial Expression Recognition Using Image Processing,” International Journal  of VLSI  
Design, Microelectronics and Embedded System,Vol.3,issue.2 , July 2018. 
166. A. C. Pise, et. al., “Detection of Cast Iron Composition by Cooling Curve Analysis using Thermocouple 
Temperature Sensor,” UGC Approved International Journal of Academic Science (IJRECE),Vol.6, Issue.3 , 
July-September 2018.

---

### Halaman 15

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2143 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
167. A. C. Pise, et. al., “Android Based Portable Health Support”, System International Journal of Engineering 
Sciences & Research Technology (IJESRT 2017) Vol.6, Issue 8, pp 85-88 5th Aug 2017 
168. A. C. Pise, et. al., “Adaptive Noise Cancellation in Speech Signal”, International Journal of Innovative Engg 
and Technology, 2017 
169. A. C. Pise, et. al., “Lung Cancer Detection System by using Baysian Classifier”, ISSN 2454-7875, IJRPET, 
published online in conference special issue VESCOMM-2016, February 2016 
170. A. C. Pise, et. al.,“Review on Agricultural Plant Diseases Detection by Image Processing”, ISSN 2278-62IX, 
IJLTET, Vol 7, Issue 1 May 2016 
171. A. C. Pise, et. al. “Segmentation of Retinal Images for Glaucoma Detection”, International Journal of 
Engineering Research and Technology (06, June-2015). 
172. A. C. Pise, et. al. “Color Local Texture Features Based Face Recognition”, International Journal of 
Innovations in Engineering and Technology(IJIET) , Dec. 2014  
173. A. C. Pise, et. al. “Single Chip Solution For Multimode Robotic Control”, International Journal of Engineering 
Research and Technology (IJERT-2014), Vol. 3, Issue 12, Dec. 2014. 
174. Anjali C. Pise et. al., “Remote monitoring of Greenhouse parameters using zigbee Wireless Sensor Network”, 
International Journal of Engineering Research & Technology ISSN 2278-0181 (online) Vol. 3, Issue 2, and pp: 
(2412-2414), Feb. 2014. 
175. A. C. Pise, K. J. Karande, “Cluster Head Selection Based on ACO In Vehicular Ad-hoc Networks”, Machine 
Learning for Environmental Monitoring in Wireless Sensor Networks  
176. A. C. Pise, K. J. Karande, “Architecture, Characteristics, Applications and Challenges in Vehicular Ad Hoc 
Networks” Presented in 27th IEEE International Symposium on Wireless Personal Multimedia 
Communications (WPMC 2024) “Secure 6G – AI Nexus: Where Technology Meets Humanity” Accepted for 
book chapter to be published in international Scopus index book by River publisher. 
177. A. C. Pise, Dr. K. J. Karande, “K-mean Energy Efficient Optimal Cluster Based Routing Protocol in Vehicular 
Ad Hoc Networks”, International Conference on Innovations in Artificial Intelligence and Machine Learning 
(ICAIML-2022), August 20th and 21st 2022 Springer database Conference. 
178. A. C. Pise, Mr. D. Nale, “Web-Based Application for Result Analysis”, ”, International Conference on 
Innovations in Artificial Intelligence and Machine Learning (ICAIML-2022), August 20th and 21st 2022 
Springer database Conference. 
179. A. C. Pise, et. al., “Detection of Cast Iron Composition by Cooling Curve Analysis using Thermocouple 
Temperature Sensor,” 2nd International Conference on Engineering Technology, Science and Management 
Innovation (ICETSMI – 2018), 2nd September 2018. 
180. A. C. Pise, et. al., “Facial Expression Recognition Using Facial Features,” IEEE International Conference on 
Communication and Electronics Systems (ICCES 2018), October 2018. 
181. A. C. Pise, et. al., “Estimating Parameters of Cast Iron Composition using Cooling Curve Analysis,” IEEE 
International Conference on Communication and Electronics Systems (ICCES 2018), Coimbatore, October 
2018. 
182. A. C. Pise, et. al., “Android based portable Health Support System,” International Conference on Innovations 
in Engineering and Technology (CIET 2016), SKN Sinhgad College of Engineering, 30-31 Dec 2016. 
183. A. C. Pise, et. al., “Baysian Classifier & FCM Segmentation for Lung Cancer Detection in early stage,” 
International Conference on Innovations in Engineering and Technology (CIET 2016), SKN Sinhgad College 
of Engineering, 30-31 Dec 2016. 
184. A. C. Pise, et. al., “Cast Iron Composition Measurement by Coding Curve Analysis,” International Conference 
on Innovations in Engineering and Technology (CIET 2016), SKN Sinhgad College of Engineering, 30-31 
Dec 2016. 
185. A. C. Pise, et. al., “War field Intelligence Defence Flaging Vehicle,” International Conference on Innovations 
in Engineering and Technology (CIET 2016), SKN Sinhgad College of Engineering, 30-31 Dec 2016.

---

### Halaman 16

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2144 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
186. A. C. Pise, et. al. “Disease Detection of Pomegranate Plant”, IEEE sponsored International Conference on 
Computation of Power, Energy, Information and Communication, 22- 23 Apr. 2015.  
187. A. C. Pise, P. Bankar. “Face Recognition by using GABOR and LBP”, IEEE International Conference on 
Communication and Signal Processing, ICCSP, 2-4 Apr. 2015 
188. A. C. Pise, et. al. “Single Chip Solution For Multimode Robotic Control”, Ist IEEE International Conferene on 
Computing Communication and Automation, 26-27 Feb2015.  
189. Anjali C. Pise, Vaishali S. Katti, “Efficient Design for Monitoring of Greenhouse Parameters using Zigbee 
Wireless Sensor Network”, fifth SARC international conference IRF,IEEE forum ISBN 978-93-84209-21-6,pp 
24-26, 25th May 2014 
190. A. C. Pise, P. Bankar, “Face Recognition using Color Local Texture Features”, International Conference on 
Electronics and Telecommunication, Electrical and Computer Engineering, Apr.2014.  
191. A. C. Pise, et.al. “Monitoring parameters of Greenhouse using Zigbee Wireless Sensor Network”, 1st 
International Conference on Electronics and Telecommunication, Electrical and Computer Engineering, 5-6 
Apr.2014.  
192. A. C. Pise, et. al. “Compensation schemes and performance Analysis of IQ Imbalances in Direct Conversion 
Receivers”, International Conference at GHPCOE, Gujarat, (Online Proceeding is Available), 2009. 
193. A. C. Pise, K. J. Karande,  “Energy-Efficient Optimal Routing Protocols in VANETs”, 66th Annual IETE 
Convention, AIC -2023 September16-17, 2023,  under the Theme: The Role of 5G In Enabling Digital 
Transformation for Rural Upliftment. 
194. A. C. Pise, et. al. “Automatic Bottle Filling Machine using Raspberry Pi”, National Conference on computer 
;Communication & information Technology (NCCIT-2018) dated 30th & 31st March 2018. 
195. A. C. Pise, et. al. “Design & Implementation of ALU using VHDL”, National Conference on computer 
;Communication & information Technology (NCCIT-2018) dated 30th & 31st March 2018. 
196. A. C. Pise, et. al. “Mechanism and Control of Autonomus four rotor Quad copter”, National Conference on 
Computer, Electrical and Electronics Engineering, 23- 24 Apr. 2016. 
197. A. C. Pise, et. al. “Segmentation of Optic Disk and Optic Cup from retinal Images”, ICEECMPE – Chennai, 
June 2015  
198. A. C. Pise, et. al. “Diseases Detection of Pomegranate Plant”, IEEE Sponsored International conference on 
Computation of Power, Energy , April 2015. 
199. A. C. Pise, et. al. “Compensation Techniques for I/Q Imbalance in Direct-Conversion Receivers”, Conference 
at SCOE, Pune 2010. 
200. A. C. Pise, et. al. “I/Q Imbalance compensation Techniques in Direct Conversion Receiver ”, Advancing 
Trends in Engineering and Management Technologies, ATEMT-2009, Conference at Shri Ramdeobaba Kamla 
Nehru Engineering College, Nagpur, 20-21 November 2009 
201. A. C. Pise, et. al. “Compensation Techniques for I/Q Imbalance in Direct Conversion Receiver”, Conference at 
PICT, Pune 2008. 
202. A. C. Pise, et. al. “I/Q Imbalance compensation Techniques in Direct Conversion Receiver ”, Conference at 
DYCOE, Pune 2008. 
203. A. C. Pise, et. al. “DUCHA: A New Dual channel MAC protocol for Multihop Ad-Hoc Networks”, 
Conference at SVCP, Pune 2007. 
204. Godase, V., Pawar, P., Nagane, S., & Kumbhar, S. (2024). Automatic railway horn system using node 
MCU. Journal of Control & Instrumentation, 15(1). 
205. Godase, V., & Godase, J. (2024). Diet prediction and feature importance of gut microbiome using machine 
learning. Evolution in Electrical and Electronic Engineering, 5(2), 214-219. 
206. Jamadade, V. K., Ghodke, M. G., Katakdhond, S. S., & Godase, V. A Comprehensive Review on Scalable 
Arduino Radar Platform for Real-time Object Detection and Mapping. 
207. Godase, V. (2025). A comprehensive study of revolutionizing EV charging with solar-powered wireless 
solutions. Advance Research in Power Electronics and Devices e-ISSN, 3048-7145.

---

### Halaman 17

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2145 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
208. Godase, V. (2025, April). Advanced Neural Network Models for Optimal Energy Management in Microgrids 
with Integrated Electric Vehicles. In Proceedings of the International Conference on Trends in Material 
Science and Inventive Materials (ICTMIM-2025) DVD Part Number: CFP250J1-DVD. 
209. Dange, R., Attar, E., Ghodake, P., & Godase, V. (2023). Smart agriculture automation using ESP8266 
NodeMCU. J. Electron. Comput. Netw. Appl. Math, (35), 1-9. 
210. Godase, V. (2025). Optimized Algorithm for Face Recognition using Deepface and Multi-task Cascaded 
Convolutional Network (MTCNN). Optimum Science Journal. 
211. Mane, V. G. A. L. K., & Gangonda, K. D. S. Pipeline Survey Robot. 
212. Godase, V. (2025). Navigating the digital battlefield: An in-depth analysis of cyber-attacks and 
cybercrime. International Journal of Data Science, Bioinformatics and Cyber Security, 1(1), 16-27. 
213. Godase, V., & Jagadale, A. (2019). Three element control using PLC, PID & SCADA interface. International 
Journal for Scientific Research & Development, 7(2), 1105-1109. 
214. Godase, V. (2025). Edge AI for Smart Surveillance: Real-time Human Activity Recognition on Low-power 
Devices. International Journal of AI and Machine Learning Innovations in Electronics and Communication 
Technology, 1(1), 29-46. 
215. Godase, V., Modi, S., Misal, V., & Kulkarni, S. (2025). LoRaEdge-ESP32 synergy: Revolutionizing farm 
weather data collection with low-power, long-range IoT. Advance Research in Analog and Digital 
Communications, 2(2), 1-11. 
216. Godase, V. (2025). Comparative study of ladder logic and structured text programming for PLC. Available at 
SSRN 5383802. 
217. Godase, V., Modi, S., Misal, V., & Kulkarni, S. Real-time object detection for autonomous drone navigation 
using YOLOv8,‖. Advance Research in Communication Engineering and its Innovations, 2(2), 17-27. 
218. Godase, V. (2025). Smart energy management in manufacturing plants using PLC and SCADA. Advance 
Research in Power Electronics and Devices, 2(2), 14-24. 
219. Godase, V. (2025). IoT-MCU Integrated Framework for Field Pond Surveillance and Water Resource 
Optimization. International 
Journal 
of 
Emerging 
IoT 
Technologies 
in 
Smart 
Electronics 
and 
Communication, 1(1), 9-19. 
220. Godase, V. (2025). Graphene-Based Nano-Antennas for Terahertz Communication. International Journal of 
Digital Electronics and Microprocessor Technology, 1(2), 1-14. 
221. Godase, V., Khiste, R., & Palimkar, V. (2025). AI-Optimized Reconfigurable Antennas for 6G 
Communication Systems. Journal of RF and Microwave Communication Technologies, 2(3), 1-12. 
222. Bhaganagare, S., Chavan, S., Gavali, S., & Godase, V. V. (2025). Voice-Controlled Home Automation with 
ESP32: A Systematic Review of IoT-Based Solutions. Journal of Microprocessor and Microcontroller 
Research, 2(3), 1-13. 
223. Jamadade, V. K., Ghodke, M. G., Katakdhond, S. S., & Godase, V. A Comprehensive Review on Scalable 
Arduino Radar Platform for Real-time Object Detection and Mapping. 
224. Godase, V. (2025). Cross-Domain Comparative Analysis of Microwave Imaging Systems for Medical 
Diagnostics and Industrial Testing. Journal of Microwave Engineering & Technologies, 12(2), 39-48p. 
225. V. K. Jamadade, M. G. Ghodke, S. S. Katakdhond, and V. Godase, ―A Review on Real-time Substation 
Feeder Power Line Monitoring and Auditing Systems,” International Journal of Emerging IoT Technologies in 
Smart Electronics and Communication, vol. 1, no. 2, pp. 1-16, Sep. 2025. 
226. V. V. Godase, “VLSI-Integrated Energy Harvesting Architectures for Battery-Free IoT Edge Systems,”Journal 
of Electronics Design and Technology, vol. 2, no. 3, pp. 1-12, Sep. 2025. 
227. A. Salunkhe et al., “A Review on Real-Time RFID-Based Smart Attendance Systems for Efficient Record 
Management,” Advance Research in Analog and Digital Communications, vol. 2, no. 2, pp.32-46, Aug. 2025. 
228. Vaibhav, V. G. (2025). A Neuromorphic-Inspired, Low-Power VLSI Architecture for Edge AI in IoT Sensor 
Nodes. Journal of Microelectronics and Solid State Devices, 12(2), 41-47p.

---

### Halaman 18

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2146 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
229. Nagane, M.S., Pawar, M.P., & Godase, P.V. (2022). Cinematica Sentiment Analysis. Journal of Image 
Processing and Intelligent Remote Sensing. 
230. Godase, V.V. (2025). Tools of Research. SSRN Electronic Journal. 
231. Godase, V. (n.d.). EDUCATION AS EMPOWERMENT: THE KEY TO WOMEN’S SOCIO ECONOMIC 
DEVELOPMENT. Women Empowerment and Development, 174–179. 
232. Godase, V. (n.d.). COMPREHENSIVE REVIEW ON EXPLAINABLE AI TO ADDRESSES THE BLACK 
BOX CHALLENGE AND ITS ROLE IN TRUSTWORTHY SYSTEMS. In Sinhgad College of Engineering, 
Artificial Intelligence Education and Innovation (pp. 127–132). 
233. Godase, 
V. (n.d.-b). REVOLUTIONIZING 
HEALTHCARE 
DELIVERY WITH 
AI-POWERED 
DIAGNOSTICS: A COMPREHENSIVE REVIEW. In SKN Sinhgad College of Engineering, SKN Sinhgad 
College of Engineering (pp. 58–61). 
234. Dhope, V. (2024). SMART PLANT MONITORING SYSTEM. In International Journal of Creative Research 
Thoughts (IJCRT). https://www.ijcrt.org 
235. M. M. Zade,Sushant D.Kambale,Shweta A.Mane,Prathamesh M. Jadhav.(2025) “IOT Based early fire 
detection 
in 
Jungles”. 
RIGJA&AR 
Volume 
2 
Issue 
1,ISSN:2998-4459. 
DOI:https://doi.org/10.5281/zendo.15056435 
236. M. M. Zade, Bramhadev B. Rupanar, Vrushal S. Shilawant , Akansha R. Pawar(2025) “IOT Flood Monitoring 
& Alerting System using Rasberry Pi-Pico ”International Journal of Research Publication & Reviews , 
Volume 6 ,Issue 3,ISSN:2582-7421.DOI:https://ijrpr.com/uploads/V6ISSUE3/IJRPR40251.pdf  
237. M.M.Zade(2022)  “Touchless Fingerprint Recognition System”(Paper-ID 907)(2022) International Conference 
on 
“Advanced 
Technologies 
for 
Societal 
Applications: 
Techno-Societal 
2022 
https://link.springer.com/book/10.1007/978-3-031-34644-6?page=6 
238. Mr.M.M.Zade published the paper on “Automation of Color Object Sorting Conveyor Belt”, in International 
Journal of Scientific Research in Engineering & Management (IJSREM),ISSN:2582-3930 Volume 06 ,Issue 
11th November 2022. 
239. Mr.M.M.Zade published the paper on “Cloud Based Patient Health Record Tracking web Developement”,in 
International Journal of Advanced  Research in Science, Communication & Technology(IJARSCT),ISSN 
NO:2581-9429 Volume 02 ,Issue 03,DOI 1048175/IJARSCT-3705,IF 6.252, May 2022. 
240. Mr. Mahesh M Zade, “Performance analysis of PSNR Vs. Impulse Noise for the enhancement of Image        
using SMF”, Journal of Applied Science & Computations (JASC UGC Approved), Volume VI, Issue II, 
Feb.2019  
241. Mr. Mahesh M Zade, “Classification of Power Quality Disturbances Using SVM & their Efficiency 
Comparison”, Journal of Applied Science & Computations (JASC UGC Approved), Volume VI, Issue II, 
Feb.2019 
242. Mr. Mahesh M Zade, “Dynamic Clustering of Wireless Sensor Network Using Modified AODV”, Journal of 
Applied Science & Computations (JASC UGC Approved), Volume VI, Issue II, Feb.2019 
243. Mr. Mahesh M Zade, “Performance analysis of PSNR Vs. Impulse Noise for the enhancement of Image using 
SMF”, National Conference on Mathematical Modeling and Computational Intelligence 2K19 (MMCI-2k19), 
in association with JASC, at S. B. Patil College of Engineering, Indapur, Feb.2019  
244. Mr. Mahesh M Zade, “Classification of Power Quality Disturbances Using SVM & their Efficiency 
Comparison”, National Conference on Mathematical Modeling and Computational Intelligence 2K19 (MMCI-
2k19), in association with JASC, at S. B. Patil College of Engineering, Indapur   Feb.2019  
245. Mr. Mahesh M Zade, “Dynamic Clustering of Wireless Sensor Network Using Modified AODV”, National 
Conference on Mathematical Modeling and Computational Intelligence 2K19 (MMCI-2k19), in association 
with JASC, at S. B. Patil College of Engineering, Indapur   Feb.2019  
246. Mr. Mahesh M Zade & Mr.S.M.Karve,"Performance Analysis of Median Filter for Enhancement of Highly  
Corrupted Images", National Conference on Advanced Trends in Engineering, Association with IRJMS,      
Karmyogi Engineering College,    Shelave, Pandharpur, March 2016.

---

### Halaman 19

IJARSCT 
 
 
 
 
 
 
 
               International Journal of Advanced Research in Science, Communication and Technology 
                           International Open-Access, Double-Blind, Peer-Reviewed, Refereed, Multidisciplinary Online Journal 
Volume 5, Issue 4, October 2025 
Copyright to IJARSCT 
DOI: 10.48175/IJARSCT-29517 
 
 
2147 
www.ijarsct.co.in 
 
 
ISSN: 2581-9429 
Impact Factor: 7.67 
247. Mr. Mahesh M Zade & Mr.S.M.Karve,"Implementation of Reed Solomen Encoder & Decoder Using 
FPGA",National Conference on Advanced Trends in Engineering, Association with IRJMS, Karmyogi 
Engineering College, Shelave, Pandharpur, March 2016.   
248. Mr. Mahesh M Zade & Dr.S.M.Mukane,"Performance of Switching Median Filter for Enhancement of     
Image", National Conference on Mechatronics at Sinhgad Institute of Technology and Science, Narhe,      
Pune, Feb. 2016.   
249. Mr. Mahesh M Zade & Dr.S.M.Mukane,"Enhancement of Image with the help of Switching Median Filter", 
National Conference on Emerging Trends in Electronics & Telecommunication Engineering, SVERI's College 
of Engineering Pandharpur, NCET 2013.   
250. Mr.Mahesh M Zade & Dr.S.M.Mukane,"Enhancement of Image with the help of Switching Median Filter", 
International Journal of Computer Application (IJCA) SVERI’s College of Engineering, Pandharpur, 
Dec.2013. 
251. A. O. Mulani, V. Godase, S. Takale, and R. Ghodake, “Secure Image Authentication using AES and DWT 
Watermarking on Reconfigurable Platform,” International Journal of Embedded System and VLSI Design, 
vol. 1, no. 2, pp. 14-20, Oct. 2025.
