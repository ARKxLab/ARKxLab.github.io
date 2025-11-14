88 th Annual Meeting of the Association for Information Science & Technology | Nov. 14 – 18, 2025 | Washington, DC, USA 
ASIS&T Annual Meeting 2025 835 Long Papers 
“ I’m not confident in debiasing AI systems since I 
know too little”: Designing and Evaluating Hands - on 
Gender Bias Tutorials for AI Practitioners and 
Learners 
Zhou, Kyrie Zhixuan University of Texas at San Antonio, USA | kyrie.zhou@utsa.edu 
Cao, Jiaxun Duke Kunshan University, China | jessie.cao@duke.edu 
Yuan, Xiaowen University of California, Berkeley, USA | xiaowen_yuan@berkeley.edu 
Weissglass, Daniel E. Duke Kunshan University, China | daniel.weissglass@dukekunshan.edu.cn 
Kilhoffer, Zachary University of Illinois Urbana - Champaign, USA | zakkilhoffer@gmail.com 
Sanfilippo, Madelyn Rose University of Illinois Urbana - Champaign, USA | madelyns@illinois.edu 
Tong, Xin The Hong Kong University of Science and Technology (Guangzhou), China | xint@hkust - gz.edu.cn 
ABSTRACT 
Despite industrial initiatives and government regulations to ensure fairness in AI, gender bias remains a concerning 
issue, causing bad user experience, injustices, and mental harm to women. Computing education has incorporated 
ethics discussions to prepar e students to design more ethical AI systems. However, through interviews with 18 AI 
practitioners/learners, we revealed limitations of the current gender bias education in the computing curricula – the 
education is absent, sporadic, abstract, or tech - orie nted. We designed and evaluated hands - on tutorials to raise AI 
practitioners/learners’ awareness and knowledge of gender bias – such tutorials have the potential to complement the 
insufficient education on AI gender bias in computing /AI courses. By reflecting on the lessons from the design and 
evaluation process, we synthesized design implications and a rubric to guide future research, education, and design. 
KEYWORDS 
A I; g ender b ias; c omputing education ; tutorial 
INTRODUCTION 
Gender bias refers to a person receiving different treatment based on the person’s real or perceived gender identity 
(Jacobson et al., 1992). Gender bias broadly exists in AI tools for recruitment (Dastin, 2022), recommendation 
(Gupta, Parra, & Dennehy, 20 21), and many other scenarios that people regularly encounter (Broussard, 2023; 
Cheong et al., 2024; Shrestha & Das, 2022). As a result, procedural and substantive injustices (Endo, 2018) 
frequently arise against certain genders. For example: women receive fewer job posting advertisements on social 
media (Lambrecht & Tucker, 2019); for Twitter users who did not provide their gender to the platform, the Twitter 
algorithm misgendered gay men and straight women to a much larger extent than straight men, and th e non - binary 
population were misgendered in every case (Fosch - Villaronga et al. , 2021). 
Gender bias in AI thus remains a pressing issue, and AI practitioners are the ones responsible for building bias - free 
AI systems. Yet, AI practitioners often lack knowledge of preventive measures to avoid bias in AI applications 
(Vorisek et al., 2023). Mal e AI practitioners, who account for a large portion of this workforce, have less awareness 
of gender bias than female practitioners (Leavy, 2018; Medel & Pournaghshband, 2017). Equipping AI practitioners 
with both awareness and knowledge of AI gender bias is timely and important. 
Garrett, Beard, and Fiesler (2020) qualitatively analyzed course descriptions and syllabi of AI ethics courses and 
AI/ML technical courses from US universities to understand what ethics - related topics were taught – bias was part 
of the discussion. However, there is currently no research devoted to understanding how and how well AI gender 
bias is taught in computing /AI/ethics courses. Outside of the classroom, to our knowledge, there is only one AI 
gender bias education tool dedicated to teaching this topic to children and youth ( Melsión et al. , 2021) – this tool is 
not suitable for AI practitioners who need more technical knowledge such as debiasing techniques. The best way to 
introduce the topic of AI gender bias to AI practitioners/learners remains under - investigated. 
To bridge these research gaps, we conducted interviews and user experiments with 18 AI practitioners/learners to 
understand how they received gender bias education in universities and evaluate our education interventions. We 
aspired to answer the following research questions (RQs): 
• RQ1 : How is the current AI gender bias education received and perceived by AI practitioners/learners? 
• RQ2 : Are our tutorials effective in increasing AI practitioners/learners’ awareness and knowledge of AI 
gender bias? 

ASIS&T Annual Meeting 2025 836 Long Papers 
In this paper, we particularly focused on gender bias in binary construct, for two reasons. First , gender bias is 
extremely complex and necessarily requires multiple interventions to address. Our probing and intervention design 
is merely a first step. Second, non - binary individuals ’ experiences with gender bias are different from women, 
requiring dedicated investigation. 
The contribution of our work is three - fold. Firstly, we design and evaluate first - of - its - kind hands - on tutorials to raise 
AI practitioners/learners’ awareness and knowledge of AI gender bias. Secondly, we uncover the lack of AI gender 
bias education and ai m to attract more attention from the AI, HCI, and Computing Education community. Thirdly, 
we deliver design implications and a rubric to shed light on future research, education, and design practices. 
RELATED WORK 
AI and AI Ethics Education 
AI is reshaping the world in profound ways, automating work and enhancing productivity (Manyika et al., 2017). To 
leverage its benefits and mitigate its potential harms (Kazim & Koshiyama, 2021), systematic inclusion of AI ethics 
into the curriculum is imp ortant to get people prepared to face and solve ethical concerns such as security, privacy, 
and fairness (Borenstein & Howard, 2021). 
R esearch has focused on AI and AI ethics education in school and classroom settings, especially in universities, 
touching on topics taught, teaching methods used, and education effect (Garrett et al., 2020; Green, 2021; 
Katznelson & Gerke, 2021; Kilhoffer e t al., 2023; Quinn & Coghlan, 2021; Wright, 2020). Ethical principles such as 
bias and privacy are taught in AI ethics courses and technical AI courses in some U.S. universities, though how they 
are conveyed and received by the students is unclear (Garret t et al., 2020). Green reported on the experience of 
teaching ethical principles and letting students incorporate the principles into agents in an undergraduate - level AI 
ethics course (Green, 2021). Applied AI ethics education is also integrated into medic al (Katznelson & Gerke, 2021; 
Quinn & Coghlan, 2021), business (De Cremer & Narayanan, 2023), and l egal (Wright, 2020 ) curricula . Even high 
school and middle school students could learn AI ethics such as epistemic norms, privacy, and digital citizenship in 
both computing and non - computing courses (Eguchi, Okada, & Muto, 2021; Kilhoffer et al., 2023). 
Education tools are designed to teach AI and AI ethics to novice users, even for children and youth (Bilstrup, 
Kaspersen, Assent, Enni, & Petersen, 2022; Carney et al., 2020; Williams, Park, Oh, & Breazeal, 2019; 
Zimmermann - Niefield, Turner, Murphy, Kane, & Shapiro, 2019). For example, Re - Shape was an educational 
environment for people to reflect on data privacy through collecting, processing, and visualizing their physical 
movement data (Shapiro et al., 2020). Youth with no programming experience could inc orporate machine learning 
(ML) classifiers to model their physical activity interactively (Zimmermann - Niefield et al., 2019). 
AI Gender Bias Education 
Gender bias has been repeatedly reported in AI applications such as emotion recognition (Domnich & Anbarjafari, 
2021), search engines (Makhortykh, Urman, & Ulloa, 2021), recommendation (Gupta et al., 2021), and robots 
(Hitron, Megidish, Todress, Morag, & E rel, 2022). Gender bias raises many concerns, but chief among these is that 
such bias will result in significant substantive and procedural injustices – unfairness in the distribution of outcomes 
and the application of rules, respectively (Endo, 2018). Exp eriments on advertising algorithms on a major social 
media platform showed that a job posting made in an explicitly “gender neutral” way – specifying that it should be 
shown to both men and women – was nonetheless more likely to be shown to men than women (M. Ali et al., 2019). 
Medical AI is less able to care for women (Cirillo et al., 2020). A “male default” is encoded in machine translation 
(Prates, Avelar, & Lamb, 2020). Given the proliferation of algorithmic systems in the contemporary world, such 
injus tices can impact all parts of society and have costs for all facets of the human experience. 
AI practitioners are supposed to debias AI. However, awareness and knowledge of AI gender bias are lacking in 
practitioners (Leavy, 2018; Medel & Pournaghshband, 2017; Vorisek et al., 2023). In a web - based survey, 45% of 
the AI developers perceived their l ack of knowledge as reason for bias in AI systems, highlighting the need to 
strengthen knowledge about bias in AI, including concrete examples of gender bias, where biases in AI could occur, 
and preventive measures to avoid biases in AI (Vorisek et al., 20 23). 
Despite the urgent need, AI gender bias education is not sufficiently investigated and delivered in universities. Some 
courses in US universities contained gender bias as a topic, but omissions existed (Garrett et al., 2020). For example, 
diversity in the AI workforce was not identified to address gender imbalance s in tech companies. Further, they did 
not investigate how and how well AI gender bias was taught (Garrett et al., 2020), e.g., what approaches were used 
to convey the knowledge, and how much the s tudents’ knowledge and awareness of gender bias improved. These 
questions are key to assessing how useful these courses are in equipping AI practitioners/learners with awareness 
and knowledge of AI gender bias. 
To our knowledge, only one educational tool has been designed to teach AI gender bias – Melsión et al. developed 
an education platform to raise children’s awareness of gender bias in AI by visually explaining AI predictions 

ASIS&T Annual Meeting 2025 837 Long Papers 
( Melsión et al., 2021). For example, the AI would classify a person in the kitchen as a woman for the “feminine” 
features such as kitchen utensils in an image. Though effective in helping children recognize gender bias in AI 
predictions, this tool is not suitable f or AI practitioners who need technical knowledge on sources of gender bias and 
debiasing techniques and an environment (e.g., dataset, code) mimicking real - world development practices. 
Research Gaps 
Overall, AI gender bias is under - covered compared to other topics in AI/AI ethics education such as cybersecurity 
and privacy (Kilhoffer et al., 2023). How effectively computing /AI courses teach gender bias is also under - 
investigated (Garrett et al., 2020). Existing research and practice fail to deliver a comprehensive AI gender bias 
education, including raising people’s awareness (e.g., understanding and identifying gender bias in AI, having a 
mindset of solving the gender bias issue in AI), and enhancing their technical knowledge (e.g., sources of gender 
bias, debiasing techniques), which are lacking in AI practitioners/learners (Leavy, 2018; Medel & Pournaghshband, 
2017; Vorisek et al., 2023). To bridge these gaps, we interviewed AI practitioners/learners and designed and 
evaluated hands - on tutorials with AI practitioners/learners. 
DESIGNING HANDS - ON TUTORIALS FOR AI GENDER BIAS EDUCATION 
Design Principles 
The abundance of topics taught in AI and AI ethics education, as well as methods leveraged, informed the design of 
our tutorials. First, to enhance education outcomes, the tutorials should be hands - on and interactive (Bilstrup et al., 
2022; Carney et al., 2020; Williams et al., 2019; Zimmermann - Niefield et al., 2019), hopefully with immediate 
feedback, i.e., learners can manipulate data and observe changes in model predictions (Carney et al., 2020). For 
example, after one attempt s to remove gender bias from the training data, the model should update accordingly and 
generate less biased predictions. Second, to simulate real - world AI development and debiasing practices, it is 
important to expose AI practitioners/learners to technical knowledge of AI gender bias (e.g., sources of gender bias, 
debiasing techniques), AI concepts (e.g., feature, label, mod el) and AI development components (e.g., dataset, 
code). This equips developers to apply the knowledge learned to real - world development. With this in mind, we 
in tentionally distinguished our tutorials from existing materials customized for AI novices (Shapiro et al., 2020). 
Third, to engage learners, the education should be themed around real - life scenarios, inspired by situational learning 
(Shih, Lin, Wu, & Yu, 2021). We chose two scenarios, i.e., AI - based recruitment, which helps organizations 
effectively source and screen candidates (Dastin, 2022), and AI - based autocomplete, which search engines use to 
complete searches that users start to type (Karapapa & Borgh i, 2015), to facilitate the learning activities. 
What To Teach 
Our tutorials aimed to improve awareness and knowledge of gender bias in AI practitioners/learners. Awareness - 
wise, we aimed to equip AI practitioners/learners with awareness of gender bias, including understanding and 
identifying gender bias ( Melsión et al., 2021) and being willing to address this issue (Leavy, 2018). Knowledge - 
wise, we aimed to teach AI practitioners/learners sources of gender bias and debiasing techniques. Friedman and 
Nissenbaum categorized bias into pre - existing social bias, which has its roots in social institutions, practices, and 
attitudes, technical bias, which arises from the resolution of technical issues in the design, and emergent social bias, 
which emerges only in a context of use (Friedman & Nissenbaum, 1993). Gender bias taught in our tutorials is 
mainly pre - existing social bias, which is introduced into AI through training data (Nadeem, Abedin, & Marjanovic, 
2020), but we also wanted to convey the idea that technical bias can arise if not addressed by AI practitioners. 
Debia sing techniques, on the other hand, can help AI practitioners/learners mitigate gender bias from AI. Numerous 
debiasing techniques have been proposed (Hort, Chen, Zhang, Harman, & Sarro, 2024; Nadeem et al., 2020; Sun et 
al., 2019). Under the broad umbrell a of data manipulation (Sun et al., 2019), one can, for example, debias the 
training corpora with data augmentation, e.g., to create an augmented dataset identical to the original dataset but 
biased towards the opposite gender (gender swapping) and to trai n on the union of the original and gender - swapped 
datasets (Zhao, Wang, Yatskar, Ordonez, & Chang, 2018). The two debiasing techniques (i.e., data cleaning and 
gender swapping) taught in our autocomplete tutorial and the first debiasing technique (i.e., da ta cleaning) taught in 
our recruitment tutorial could be categorized as data manipulation techniques. The second debiasing technique, 
unawareness, i.e., neglecting sensitive features such as gender, race, and age in the training process, taught in our 
recr uitment tutorial, is common in the machine learning domain (Pitoura, Stefanidis, & Koutrika, 2022). 
Two Tutorials: Recruitment and Autocomplete 
The two tutorials teach about sources of gender bias and debiasing techniques based on two different scenarios: AI - 
based recruitment and autocomplete. We featured data bias and simple yet popular algorithms, i.e., Random Forest 
and Markov Language Model, t o showcase our education. Table 1 shows the user flow for the two tutorials. 

ASIS&T Annual Meeting 2025 838 Long Papers 
Step Recruitment Tutorial Autocomplete Tutorial 
Tutorial Overview Overview of following steps Overview of following steps 
Scenario Explanation Gender bias in AI - based 
recruitment 
Gender bias in autocomplete 
Dataset Selection Identifying gender bias in dataset Identifying gender bias in dataset 
Model Explanation Random Forest Markov Language Model 
Debiasing Technique - 1 Data modification Data modification 
Debiasing Technique - 2 Neglecting gender feature Gender swapping 
Table 1. Tutorial U ser F low 
The Recruitment Tutorial 
The recruitment tutorial aims to teach learners about gender bias in AI - based recruitment systems (Pena, Serna, 
Morales, & Fierrez, 2020) – when solely relying on AI for recruitment, fewer women may be hired, even if they 
have the same merits as men, due to the historical hiring prejudice toward women, especially in the STEM fields 
(Glass & Minnotte, 2010). After an overview of the tutorial , the concept and harm of gender bias as well as gender 
bias in the hiring process are introduced. Users are then prompted to choose between two datasets for training, one 
with gender bias, where well - performing women are not recruited, and one without bias . After briefly explaining to 
users how Random Forest works, they are directed to Google Colaboratory, or Colab, which hosts the Python script 
for the models prepared by the research team . They are instructed to run the models trained on the two different 
datasets and compare their hiring decisions on a new set of candidates. The model trained on the biased dataset will 
generate more biased predictions. The first debiasing technique, i.e., d ata cleaning, is then introduced . In this step, 
users are guided to clean the more biased dataset to make it less biased against women, use the debiased dataset to 
train the model, and check if there is bias in predictions. In the following step, users are presented with the second 
debiasing technique, i.e., neglecting gender feature in training, in a similar way . 
The Autocomplete Tutorial 
The autocomplete tutorial aims to teach learners about gender bias in autocomplete systems which are commonly 
used in search engines. We hope to show users that stereotypical words, and specifically professional titles, are 
associated with different gender s. For example, the word “nurse” has a significantly higher chance to be associated 
with women whilst “doctor” associated with men ( Garrido - Muñoz, Montejo - Ráez, Martínez - Santiago, & Ureña - 
López, 2021). With such stereotypes, autocompleted search queries ma y contain bias. The tutorial first introduces 
the definition and examples of autocomplete: “If one types ‘Today,’ AI might predict ‘is a good day,’ since this is a 
frequent pattern in people’s expressions.” Then we present a biased, text - based dataset of g ender - profession pairs 
(e.g., “woman nurse”, “man engineer”) where different genders are associated with different distributions of 
professional titles. Then users are introduced to the Markov Language Model and prompted to observe predictions 
of the model trained on the biased dataset. Users are then asked to modify the dataset to make it less biased and 
observe the corresponding model predictions. The second debiasing technique, gender - swapping, i.e., swapping the 
professional titles for men and women, is similarly taught. 
Prototyping and Implementation 
We used Figma, a UI prototyping tool, to design the Lo - Fi and Hi - Fi prototypes. In the Lo - Fi prototype, we 
designed the general layout and workflow of the websites. In the Hi - Fi prototype, we designed specific UI 
components, such as text, buttons, visualiz ations of models, and embedded links to datasets and Colab notebooks 
hosted on Google Drive. The websites were built with React and Gatsby frameworks and deployed using Netlify. 
METHOD 
In the second half of 2023, w e conducted interviews and user experiments with 18 AI practitioners/learners 
( researchers, industrial practitioners, or students with an AI background ) to understand AI gender bias education and 
evaluate our tutorials. 
Participants 
We recruited participants by posting messages and posters on Twitter and WeChat through a convenience sampling 
approach (Emerson, 2021). We also asked our contacts who were students and professors in computing - related 
fields , or AI developers, to spread the recruitment information. The screening survey asked about respondents’ 
profession, major (for students), and self - rated level of knowledge in AI. We included people who had prior 
experience with AI and who were over 18 yea rs old in the study. In the end, 18 AI practitioners/learners participated 
in our research, including 8 AI researchers (4 studying AI and 4 studying the intersection between AI and HCI), 5 
industrial practitioners (3 AI developers and 2 AI product managers), and 5 students who majored in computing - 
related fields or had taken AI courses. The AI researchers may not have directly contributed to the creation of AI 
systems, but they contribute either practically or intellectually to AI systems. We included students (AI learners) in 

ASIS&T Annual Meeting 2025 839 Long Papers 
our study as future AI practitioners. The participants were equally distributed between female and male, most from 
the US and China. Courses are one of our participants’ main sources of AI knowledge (16/18). 
Procedures 
We first introduced the purpose of the study and the study process. After acquiring consent and permission for 
recording from the participants, the study began. We compensated the participants with 100 RMB or 15 US Dollars 
for their participation in the IR B - approved study which took place in Zoom for roughly 1 hour. 
Pre - Study Interview 
We asked participants questions to probe their experience and perception of AI gender bias. We further asked if and 
how AI gender bias was taught in computing /AI courses. 
Study Tasks: Completing Two Tutorials 
Participants were asked to complete the two hands - on tutorials. During the learning process, we asked questions 
about their in - activity behaviors, e.g., “Why did you choose this dataset?” “How do you think about this debiasing 
technique?” After each tutori al, the participants were asked to fill in a survey containing Likert - scale usability 
questions, e.g., “The tutorial was well organized and made good use of time,” “I learned about something technical,” 
and “I learned about something important for society. ” 
Post - Study Interview 
After completing the tutorials, participants were asked about the experiment process and their understanding of AI 
gender bias. We particularly sought to see if their understanding changed after the education, e.g., “How is gender 
bias introduced in the tr aining and deployment process? Has your understanding changed after our experiment?” 
“How can gender bias be mitigated from AI systems from a developer’s perspective? Has your understanding 
changed after our experiment?” We ended by asking for suggestions to further improve the tutorials. 
Measurements 
We drew on several measurements to assess the educational effect and usability of the tutorials. Education effect 
was inferred through (1) participants’ self - expressed awareness (ability to identify gender bias, willingness to 
mitigate gender bias) and kno wledge (sources of gender bias, debiasing techniques) in the pre - and post - study 
interviews, and (2) observation of their in - tutorial activities. The usability of the tutorials was inferred from (1) the 
post - study interview and (2) the usability questions in the surveys after the tutorials. 
Data Analysis 
We conducted qualitative thematic analysis (Braun & Clarke, 2006) to understand the transcripts of the pre - study 
and post - study interviews and observational notes taken during the experiments. Three authors independently and 
iteratively conducted open coding throughout the projec t. We regularly discussed, created/re - created codes, and 
identified emergent themes. We stopped coding when we observed signs of saturation, i.e., no new themes emerged 
to answer our RQs. XMind, a mind - mapping tool, was used to orga nize different levels of themes and quotes into a 
hierarchical structure. The major themes identified in the end included “lived experience of prevalent AI gender 
bias,” “lack of AI gender bias education,” “awareness change,” “knowledge gain,” “intuitivene ss,” and so on. 
FINDINGS 
Our interviews revealed a lack of AI gender bias education in computing /AI courses the participants took, which led 
to inadequate awareness and knowledge of gender bias and their lack of confidence in debiasing AI. Our hands - on 
tutorials effectively improved the AI practitioners/learners’ awareness and knowledge of AI gender bias. After 
completing the tutorials, the participants had a more in - depth understanding of sources of gender bias and debiasing 
techniques. They were more inclined to pay attention to debiasing AI in their future development practices. 
Insufficient Education Despite Prevalent AI Gender Bias (RQ1) 
We answered RQ1 based on findings collected from the pre - study interview to understand how the topic of gender 
bias was covered in computing /AI courses. While the participants acknowledged the wide existence of gender bias 
in AI they used or built, insufficient relevant education was in place in the computing /AI courses they took. 
The industrial practitioners provided insiders’ observations of gender bias in the AI systems they built, especially 
regarding the difficulty of mitigating gender bias due to corporate priorities (e.g., profits, fast production) and the 
male - dominated IT c ulture. P7 was the product manager of a Bert - based (Koroteev, 2021) educational chatbot for 
teaching English to children in China. She acknowledged that the design of the chatbot contained gender bias and 
stereotypes — the chatbot was designed with a femal e figure and a feminine voice, just like many other voice 
assistants on the market (Feine, Gnewuch, Morana, & Maedche, 2020). As a feminist, she proposed to redesign the 
“female” chatbot with a more adventurous character to make the design less stereotypic al but was rejected by her 
manager given other corporate priorities and the manager’s lack of gender awareness, 

ASIS&T Annual Meeting 2025 840 Long Papers 
“Chatbots are always designed as caring and gentle female characters, which I suppose is a product of the 
male gaze and a way to attract male users. I wanted to make it less stereotypical, which I guess was not the 
priority of the team. The priority, inste ad, was to ship the product fast. It was a startup company and profit 
is all that is cared about. My manager doesn’t think it is gender bias, and she doesn’t care.” 
P10 was the recommendation algorithm manager for a short video platform. He disclosed that their system took 
gender as an important feature when recommending content to users. Further, the cold start process, i.e., establishing 
user profiles and pushing re commendations for new users, assumed all users as male for efficiency. He commented 
that this was a standardized way of building recommendation systems in the social media industry, possibly because 
“most IT managers and developers were male and did not ha ve adequate knowledge and awareness of gender bias.” 
Despite the perceived prevalence and severity of gender bias in AI systems, the participants regarded education on 
this topic as insufficient in their computing /AI courses. Some noted that the discussion of gender bias and other 
ethical issues was completely absent from AI courses. Instead, only algorithms were taught. P2 explained: 
“AI courses and CS courses, in general, didn’t teach bias or other ethical concerns at all but only taught 
principles and applications of AI algorithms. The assignments didn’t concern gender bias as well.” 
Even if some reported receiving AI gender bias education in computing /AI courses, it was rather sporadic, appearing 
as a brief discussion in class. For example, P5 recalled that gender bias and other social and ethical issues were only 
occasionally taught in AI courses as quick discussions. Similarly, only one slide was devoted to discussing AI 
gender bias throughout P9’s computing /AI education in college. 
Furthermore, AI gender bias was often discussed abstractly, e.g., under the umbrella of more generic bias and 
fairness principles. For instance, P8 recalled that in a foundational machine learning course, the instructor taught 
how data imbalance, e.g., mor e images of one demographic group than another in a dataset, led to fairness issues in 
AI models, and then briefly mentioned AI gender bias as one of the cases. P3, alike, noted that AI textbooks only 
discussed definitions and metrics of AI bias, but did n ot discuss specific examples concerning gender or race. 
Yet another drawback of AI gender bias education in computing /AI courses was that it was often tech - oriented 
without facilitating discussions about people’s experiences and the relationship between people and technology, 
demonstrating a technological determinism perspective (Drew, 2016). P9 gave an example, 
“The ethical discussions didn’t touch on social aspects, but only focused on data processing, algorithms, 
and training infrastructures.” 
P7 mentioned an assignment about detecting prejudicial speech against women, which only asked for a higher 
accuracy of the model without facilitating a discussion around gender bias or data feminism (D’ignazio & Klein, 
2020). The only exception was an AI e thics course at Stanford P4 attended. He elaborated, 
“The focus of the course was to remind you of the existence of AI bias. Not many technical skills were 
taught in the course. The discussions were more about reflection of social issues.” 
This Stanford course represents a distinct pedagogical format as a full course on deep learning rather than a tutorial. 
It was instructed by a professor who is simultaneously an AI and an HCI researcher studying social issues, 
suggesting the impact of inst ructors’ knowledge/awareness of gender bias and social/ethical issues in general on (1) 
topics covered in AI courses, and (2) methods used when teaching gender bias. 
In short, education on AI gender bias was insufficient in the computing /AI courses the participants took. The 
discussion of AI gender bias in the classroom was absent, sporadic, too abstract, or tech - oriented. The lack of a 
comprehensive AI gender bias education combining technical knowledge and sociotechnical discussion was a 
missed opportunity to equip students with gender awareness and knowledge to combat gender bias in AI. The lack 
of education on AI gender bias may be attributed to insufficient gender awareness in professors who do not have a 
sociotechnical mindset, an emphasis on practical technical knowledge, fewer jobs related to AI ethics than software 
engineering, and so on, as suggested by the participants. By revealing the lack of education on AI gender bias, we 
demonstrate the necessity of delivering such education through educational tools and materials. 
Learning Outcomes of Our Tutorials (RQ2) 
Both awareness change and knowledge gain were observed through the participants’ self - expressed improvement 
and their in - tutorial activities. Below, we unpack both aspects. 
Awareness Change: An Ability to Recognize Gender Bias and Willingness to Solve This Issue 
Gender bias is often implicit and hard to recognize; making well - informed decisions about gender bias requires 
gender awareness and consciousness (Wang et al., 2022). Our tutorials helped participants gain awareness of AI 
gender bias in that they were more capable of understanding and identifying gender bias, more mindful of the harm 

ASIS&T Annual Meeting 2025 841 Long Papers 
gender bias could bring to women, and more willing to solve this issue. Technical people like P6 thought it 
important to be equipped with an awareness of gender bias, which was often lacking in them, 
“The tutorials enable me to realize hidden bias through simple demos. This is especially important for 
technical people like me.” 
After completing the tutorials, the participants were more capable of r ecognizing g ender b ias. In the pre - study 
interview, most participants did not identify gender bias until prompted; they were aware in abstract but did not 
identify bias in practice (“I haven’t noticed gender bias in AI”). Even P3, who self - identified as a feminist, indicated 
the difficulty of identifying gender bias in AI due to its implicit nature: 
“Gender bias is often implicit. I read many books on feminism, so I can recognize gender bias, but not 
always. Most people would think it’s just normal.” 
Similarly, P15 thought large language models (LLMs) output gender bias in a subtle, implicit way (e.g., assuming a 
nurse is female) and people would not realize that it was gender bias. Gradually, people would take gender bias for 
granted and lose the abil ity to identify gender bias, according to him. 
The tutorials helped them identify contextual gender bias on their own. After completing the tutorials, P4 
commented that he was able to recognize gender bias in different forms, such as stereotyping (gender - profession 
association) and disparagement (recru itment decision based on gender). Participants commonly expressed such an 
awareness change. Participants’ enhanced ability to recognize gender bias was also observed in their in - tutorial 
activities. All participants but one were able to identify gender bia s and select the less biased datasets while 
completing the tutorials. P1 provided her rationale for selecting the less biased dataset in the recruitment tutorial, 
which was common among other participants: “In the other dataset, women are not recruited eve n if they perform 
well in interviews.” 
After completing the tutorials, the participants were also more w illing to s olve AI g ender b ias. None of our 
participants had professional experience debiasing AI. P17 thought our tutorials prompted her to think about how 
gender bias affected the career and browsing experience of women, which she tended to overlook in her life. Such 
ignorance of the existence and harm of AI gender bias was more common and severe in male AI 
practitioners/learners. For example, P12 deemed gender bias as less harmful and offen sive. P10 told the concerning 
fact that many male engineers in his development team were not equipped with adequate gender awareness and 
would “laugh about feminism when talking about the #MeToo Movements.” P6 frankly acknowledged that he did 
not care much about AI gender bias since it did not impact him negatively. Since gender bias often targeted women 
and gender minorities, he suggested that he could even “benefit from gender bias as a man such as enjoying better 
work opportunities in the IT field.” As a result, he did not consider debiasing AI when he built AI systems. 
Our participants expressed a stronger intention to pay attention to debiasing AI systems after completing the 
tutorials. The mindset of P6, who indicated little interest in debiasing AI, changed – after completing the tutorials, 
he realized the harm AI gen der bias could incur to women, which he had not been exposed to as a man: 
“Previously, I didn’t think keeping recommending girls dolls was biased. Now, I realize that the current 
society has more flexible gender roles assigned to people, and we should do something to combat 
stereotypes in AI. They caused real harm to women.” 
P8, an AI researcher who was shifting her research focus from non - human systems to sociotechnical systems such as 
LLMs, indicated that she would consider gender bias: 
“I didn’t think much about gender bias before, since I’ve been working on robots. Now I find it important 
to use subjective, manual interference to solve gender issues in social contexts after seeing how severe 
gender bias can be in sociotechnical systems such as search engines which people use daily. I’ll consider 
gender bias as I dive into the research of LLMs.” 
She suggested that the real - life scenarios in the tutorials enabled her to think about how gender bias impacted 
people. 
Knowledge Gain: Sources of Gender Bias and Debiasing Techniques 
In the pre - study interview, most participants acknowledged a lack of knowledge in terms of sources of gender bias 
and debiasing techniques and were not confident about building bias - free AI systems, which may be attributed to 
insufficient school education on AI gender bias and education tools/materials. P2 said: 
“I’m not confident in debiasing AI systems since I know too little [about gender bias]. Few people are 
equipped with this knowledge.” 

ASIS&T Annual Meeting 2025 842 Long Papers 
P6 speculated that “gender bias would probably remain” if he were to build an AI system. Even if people had 
relevant knowledge, “it was not easy to apply the theoretical knowledge into practice,” as P3 commented. Below, we 
report their knowledge gain in te rms of sources of gender bias and debiasing techniques. 
Before the study, some participants only had a simple understanding of the sources of gender bias. Pre - existing 
social bias was seen as a main source of gender bias in AI systems. For example, when we asked P5 to reflect on the 
Google autocomplete scenario in the screening survey, she thought gender bias rooted in society and human 
language was the reason for AI’s misbehavior: 
“Gender bias has existed in society for a long time. People’s search behavior and language patterns are 
learned by AI. People pay more attention to women’s body shape and personal lives and pay more 
attention to men’s careers. AI simply reinforces such soc ial biases.” 
P9, who had a more technical background, cited the classic “garbage in, garbage out” concept, meaning the quality 
of model output is determined by the quality of the input. 
Our tutorials helped improve the participants’ knowledge of sources of AI gender bias. The tutorials corrected the 
false understanding of some participants, as in P3’s case: 
“Before the study, I thought AI was a black box and maybe it set some rules to contain bias in itself. Now I 
know gender bias is introduced by the datasets which carry social biases.” 
Some gained a more comprehensive understanding of sources of gender bias through the tutorials. For example, P2 
originally thought the only reason for biased AI was “social contexts” (pre - existing social bias). After completing 
our tutorials, she realized that gender bias also came from the training process, especially when developers made 
wrong decisions regarding gender bias (technical bias). 
Debiasing t echniques are another key point of education in our tutorials . The participants with less technical 
knowledge of AI, like AI/HCI researchers and AI product managers, had never heard of debiasing techniques before 
the study. The AI researchers and AI developers who had heard of debiasing techniques did not know how t hey 
worked or how to apply them in practice. 
After the study, our participants reported a deeper understanding of debiasing techniques in AI systems and felt 
more natural and confident doing so. For example, P2 did not know any debiasing techniques before the study and 
thought debiasing was a hopeles s effort. She was surprised by the power of debiasing techniques after mitigating 
gender bias herself via the tutorials. Similarly, P11 originally thought gender bias in datasets was hard to remove, 
but gained more experience and confidence after practicin g the debiasing techniques. P1’s mindset switched from 
“human biases are hard to solve” to “I can solve the problem after learning and practicing the debiasing techniques.” 
Some participants expressed a persistent challenge in the development of bias - free AI – debiasing was often not a 
priority for AI companies, so they may not be able to apply the debiasing techniques they learned. For example, P9 
argued that unawareness, i. e., neglecting the gender feature in training, might not be feasible because “asking 
companies to give up the collected gender feature is not very likely unless it is enforced by policy or law.” P10 
thought there were no direct financial benefits to incent ivize companies to mitigate gender bias. Instead, 
recommending biased content can even maximize profits in some cases. He explained, 
“When most users are male, debiasing would lead to poorer performance for users, with core metrics 
degraded. Recommending content with beautiful women to male users maximizes financial returns for 
social media platforms... Since debiasing was not a corpora te priority, no fairness - related values are coded 
into the mindset of developers.” 
P4 pointed out the massive cost of debiasing AI since “companies need to hire people who have this knowledge.” 
P13 and P18 noted that developers were not often the decision - makers. Even if they were willing and able to debias 
AI models, “they can only do w hat they are told. (P13)” 
What Features Made Our Tutorials More/Less Helpful? 
The participants rated our tutorials highly in terms of: usability; being interesting, engaging, and easy to understand; 
and teaching socially important topics. Based on the usability questions , the participants rated the recruitment 
tutorial 83 out of 100, and the autocomplete tutorial 84 out of 100, indicating approval. Both tutorials did most 
poorly on delivering technical knowledge (72 for the recruitment tutorial, 75 for the autocomplete tutorial), which 
could be attributed to our design considerations . W e wanted to balance technical and sociotechnical discussion, and 
accommodate different background s of AI practitioners/learners. O verall usability score s are summarized in Table 2 . 

ASIS&T Annual Meeting 2025 843 Long Papers 
Recruitment Autocomplete 
The tutorial was well organized and made good use of time 79 87 
I learned about something technical 72 75 
I learned about something important for society 86 81 
I felt the tutorial was interesting 83 82 
I felt the tutorial kept my attention 83 86 
The sources of bias introduced were easy to understand 87 89 
The debiasing methods introduced were easy to understand 89 88 
Overall score 83 84 
Table 2 . Usability S cores S ummary - A verage E valuations ( Converted F rom 7 - point Likert Scale ) 
Participants valued the hands - on nature of the tutorials. Learning AI gender bias by manipulating data and observing 
the impact on model predictions was intuitive , engaging, and helped learners with the concepts. P3 explained: 
“After the study, I have a more concrete understanding of gender bias and debiasing methods. I’m curious 
to see the new results after modifying the datasets. The hands - on nature keeps researchers and participants 
on the same page and makes the discussion m ore concrete.” 
During the learning process, all participants were able to operate and learn from the key tasks such as selecting the 
less biased dataset, modifying the more biased dataset, and applying different debiasing techniques. 
The participants also expressed several issues and challenges they encountered when taking our tutorials. First, 
identifying differences between datasets was time - consuming, especially for people without a tech background. P8 
suggested a visualized compari son of the datasets to show discrepancies. Second, the autocomplete tutorial was 
perceived harder to grasp for many participants, since more domain knowledge was required to understand NLP. 
DISCUSSION 
Designing and evaluating the tutorials led us to two main findings. 
Finding 1: AI gender bias education is urgently needed yet insufficient. We revealed a lack of awareness and 
knowledge of AI gender bias in a wide range of AI practitioners/learners such as AI researchers, developers, and 
product managers, echoing prior results (Leavy, 2018; Medel & Pournaghshband, 2017; Vorisek et al., 2023). None 
of the participants were confident in building bias - free AI systems due to the ir lack of knowledge and corporate 
priorities such as expediency, echoing prior research ( Lancaster et al., 2024). Despite the urgent need for AI gender 
bias education for AI practitioners who are on the front line of building bias - free AI, limited education efforts were 
seen. Contrary to findings in prior research (Garrett et al., 2020), i.e., bias is a frequen t topic in 51 AI courses’ 
syllabi in 34 US universities, we found gender bias was barely taught or not taught in a sociotechnical manner. This 
difference may suggest the discrepancy between what is supposed to be taught (in the syllabi), what is ac tually 
taught, and how it is taught. Further, the participants haven’t heard of any educational tools regarding AI gender 
bias. In fact, there is only one education tool for teaching AI gender bias to our knowledge ( Melsión et al., 2021) – 
this tool is designed for children, aiming to raise their awareness of gender bias through the explanation of 
stereotypical predictive features (e.g., predicting a person as female based on kitchen elements). It is unsuitable for 
AI practit ioners needing more technical kn owledge, such as debiasing techniques (Vorisek et al., 2023). A 
comprehensive gender bias education combining technical knowledge and sociotechnical discussions is needed. 
Finding 2: Hands - on activities are highly effective in engaging learners. Inspired by AI ethics education tools 
designed for AI novices (Akgun & Greenhow, 2021; S. Ali et al., 2019; Shapiro et al., 2020), we designed the 
tutorials to be hands - on and scenario - based and provide immediate feedback, making them intuitive and engaging 
for learners. Even those with limited AI knowledge could benefit from the learning process by manipu lating the 
dataset, running the model, and observing the predictions. The real - l ife scenarios, recruitment and autocomplete, 
echoed the participants’ life experiences and enabled them to reflect on the harm gender bias could incur. Our 
tutorials improved the awareness and knowledge of AI gender bias for AI practitioners/learners. Awar eness - wise, 
our participants felt more confident in identifying gender bias and more willing to solve the bias issue after 
completing the tutorials. Knowledge - wise, they were equipped with knowledge of sources of gender bias and 
debiasing techniques, which was key to debiasing AI (Vorisek et al., 2023). 
Education Implications: A Rubric 
People’s assumptions about gender are often skewed – an online study showed that college students on average 
preferred the original biased recommendation of college majors over the debiased recommendation (Wang et al., 
2022). The same can be said about peo ple’s racial assumptions – associations between leaders and Whiteness were 
held up to scrutiny (Petsko & Rosette, 2023). To equip people with more adequate awareness and assumptions of 

ASIS&T Annual Meeting 2025 844 Long Papers 
gender, race, and other identities, and enhanced ability to identify bias, in the context of AI in particular, an ideal 
education should teach them to understand and identify bias in AI, as well as motivate them to do so. At the 
knowledge level, one can be taught sources of bias (social bias and technical bias) and debiasing techniques (dataset 
modification, model modification). Even AI practitioners are found to lack such knowledge (Vorisek et al., 2023), 
let alone users who have less technical knowledge o f AI. 
Our AI gender bias education is just a start; by accommodating intersectional experiences, education on biases 
against a broader set of genders and demographic populations can be similarly approached. To ease future efforts in 
delivering AI bias education, we provide a rubric (see Table 3 ), outlining what to teach and how to evaluate the 
education. We list learning objectives in terms of awareness and knowledge, tasks, evaluation methods, and rating 
criteria, which are subject to change in different context s. For example, our tutorials can be adapted into hands - on 
group activities accompanied by in - class discussions in a high school classroom (Kilhoffer et al., 2023). Researchers 
and teachers can use this rubric as a guide when developing educational materia ls. 
Category Learning Objective Tasks Evaluation Rating 
Awareness Understanding Defining Bias Tutorial Yes/No 
Identifying Dataset Selection Tutorial Yes/No 
Willingness to Address Self - Reporting Exit Interview Yes/No 
Knowledge Sources of Bias Social Bias Exit Interview (0 - 10) 
Technical Bias Exit Interview (0 - 10) 
Debiasing Techniques Dataset Modification Tutorial, Exit 
Interview 
(0 - 10) 
Model Modification Tutorial, Exit 
Interview 
(0 - 10) 
Table 3 . A R ubric for T eaching AI B ias 
Research Implications 
Equipping Tech People with Gender Awareness 
Tech people such as AI developers and AI researchers who study non - human systems often lack awareness of AI 
gender bias, as seen in our participants and results in previous research (Vorisek et al., 2023). Further, our female 
participants expressed more co ncern about AI gender bias given their negative experience with AI, while some male 
participants even claimed to have “benefited from gender bias.” This echoed with prior research on the gendered 
perception of AI biases (Vorisek et al., 2023). Thus, it is important to equip tech people with gender awareness, so 
that they can mindfully mitigate gender bias in AI. Our tutorials showed evidence of success in this regard. They can 
be leveraged in both academic and non - academic settings (e.g., company training, self - learning). 
Accommodating Different Levels of Tech Literacy 
Considering how developmental milestones and prior experience with technology affect perceptions of AI is 
important when developing educational tools. Much effort has been devoted to communicating AI concepts to 
learners without extensive backgrounds in math or computing , including children (Williams et al., 2019; 
Zimmermann - Niefield et al., 2019). However, the simplified communication of AI concepts ( Melsión et al., 2021) 
may not satisfy the learning needs of AI practitioners, who need to deal with more co mplicated scenarios when 
developing AI systems. By exposing learners to data sheets, code, and the training process with sufficient 
explanation, while at the same time avoiding the need to write code and interpret tech jargon, the learning needs of 
both AI novices and more tech - savvy learners can be accommodated. 
Limitations and Future Work 
There are several limitations of our work. First, we treated gender as a binary construct in the design and evaluation 
of the tutorials. Future work should consider the broader spectrum of gender identities to truly address and rectify 
gender bias in AI sy stems. Second , we drew on qualitative evidence to assess participants’ knowledge of gender bias 
before and after using the tutorials. A large - scale, quantitative evaluation of the tutorials is encouraged as future 
work to generalize our findings. Longitudi nal studies can further explore the long - term educational effect. Third , we 
included Random Forest and Markov Language Models because of their wide use and simplicity, accommodating 
multiple AI knowledge levels. Our main goal of this research is to educate AI practitioners/learners about gender 
bias at both knowledge and awar eness levels. Qualitative evidence indicates these educational effects. In the future, 
researchers can integrate other algorithms, types of biases beyond data bias, and bias mitigation techniques into 
gender bias education. F ourth , profit - oriented corporate priorities such as shipping products fast and “profitable 
bias” are persisting hurdles to debiasing AI. Future research could combine education with policy to push companies 
into the collective mission of debiasing AI (Hine & Fl oridi, 2023). It is also interesting to examine if developing 
tutorials for decision - makers helps address persistent profit - motivated bias es , and what else might be done. 

ASIS&T Annual Meeting 2025 845 Long Papers 
CONCLUSION 
AI practitioners often lack the awareness and knowledge to mitigate gender bias from AI. We design and evaluate 
hands - on tutorials to complement the insufficient school education in AI gender bias and education tools. 
Evaluations with AI practitioners/lear ners demonstrate our tutorials’ effectiveness and preliminary promise – the 
participants’ awareness and knowledge increased after completing our tutorials. We reflect on the lessons learned 
during our design and evaluation process in terms of how our tutor ials succeed and how they can be designed better. 
Gender bias is a systemic problem. The education intervention we created and promoted is a first step toward 
reducing gender bias in AI systems. We call for more efforts in designing AI gender bias educatio n tools and 
materials to prepare AI practitioners/learners to build biasfree AI. A more systematic approach combining design, 
education, and governance is also necessary to reach this goal. 
G ENERATIVE AI USE 
We confirm that we did not use generative AI tools/services to author this submission . 
AUTHOR ATTRIBUTION 
First Author: conceptualization, methodology, data curation, formal analysis, writing – original draft; Second 
Author: conceptualization, methodology, data curation, formal analysis, writing – review and editing; Third Author: 
conceptualization, methodolog y, data curation, formal analysis, writing – review and editing; Fourth Author: 
conceptualization, methodology, writing – review and editing, supervision; Fifth Author: conceptualization, 
methodology, writing – review and editing; Sixth Author: conceptuali zation, methodology, writing – review and 
editing, supervision; Seventh Author: conceptualization, methodology, writing – review and editing, project 
administration, funding acquisition , supervision. 
REFERENCES 
Akgun, S., & Greenhow, C. (2022). Artificial intelligence in education: Addressing ethical challenges in K - 12 settings. AI and 
Ethics , 2 (3), 431 - 440. 
Ali, M., Sapiezynski, P., Bogen, M., Korolova, A., Mislove, A., & Rieke, A. (2019). Discrimination through optimization: How 
Facebook's Ad delivery can lead to biased outcomes. Proceedings of the ACM on human - computer interaction , 3 (CSCW), 
1 - 30. 
Ali, S., Payne, B.H., Williams, R., Park, H.W., Breazeal, C. (2019). Constructionism, ethics, and creativity: Developing prim ary 
and middle school artificial intelligence education. International workshop on education in artificial intelligence k - 12 (pp. 1 – 
4). 
Bilstrup, K. E. K., Kaspersen, M. H., Assent, I., Enni, S., & Petersen, M. G. (2022, June). From demo to design in teaching 
machine learning. In Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (pp. 2168 - 
2178). 
Borenstein, J., & Howard, A. (2021). Emerging challenges in AI and the need for AI ethics education. AI and Ethics , 1 (1), 61 - 65. 
Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative research in psychology , 3 (2), 77 - 101. 
Broussard, M. (2023). More than a glitch: Confronting race, gender, and ability bias in tech. MIT Press. 
Buolamwini, J., & Gebru, T. (2018, January). Gender shades: Intersectional accuracy disparities in commercial gender 
classification. In Conference on fairness, accountability and transparency (pp. 77 - 91). PMLR. 
Carney, M., Webster, B., Alvarado, I., Phillips, K., Howell, N., Griffith, J., ... & Chen, A. (2020, April). Teachable machin e: 
Approachable Web - based tool for exploring machine learning classification. In Extended abstracts of the 2020 CHI 
conference on human factors in computing systems (pp. 1 - 8). 
Cheong, M., Abedin, E., Ferreira, M., Reimann, R., Chalson , S., Robinson, P., ... & Klein, C. (2024). Investigating gender and 
racial biases in DALL - E mini images. ACM Journal on Responsible Computing , 1 (2), 1 - 20. 
Cirillo, D., Catuara - Solarz, S., Morey, C., Guney, E., Subirats, L., Mellino, S., ... & Mavridis, N. (2020). Sex and gender 
differences and biases in artificial intelligence for biomedicine and healthcare. NPJ digital medicine , 3 (1), 81. 
Dastin, J. (2022). Amazon scraps secret AI recruiting tool that showed bias against women. In Ethics of data and analytics (pp. 
296 - 299). Auerbach Publications. 
De Cremer, D., & Narayanan, D. (2023). On educating ethics in the AI era: why business schools need to move beyond digital 
upskilling, towards ethical upskilling. AI and Ethics , 3 (4), 1037 - 1041. 
D'ignazio, C., & Klein, L. F. (2023). Data feminism . MIT press. 
Domnich, A., & Anbarjafari, G. (2021). Responsible AI: Gender bias assessment in emotion recognition. arXiv preprint 
arXiv:2103.11436 . 
Drew, R. (2016). Technological determinism. A companion to popular culture , 165 - 183. 
Eguchi, A., Okada, H., & Muto, Y. (2021). Contextualizing AI education for K - 12 students to enhance their learning of AI 
literacy through culturally responsive approaches. KI - Künstliche Intelligenz , 35 (2), 153 - 161. 
Emerson, R. W. (2021). Convenience sampling revisited: Embracing its limitations through thoughtful study design. Journal of 
visual impairment & blindness , 115 (1), 76 - 77. 

ASIS&T Annual Meeting 2025 846 Long Papers 
Endo, S. K. (2018). Technological opacity & procedural injustice. BCL Rev. , 59 , 821. 
Feine, J., Gnewuch, U., Morana, S., & Maedche, A. (2020). Gender bias in chatbot design. In Chatbot Research and Design: 
Third International Workshop, CONVERSATIONS 2019, Amsterdam, The Netherlands, November 19 – 20, 2019, Revised 
Selected Papers 3 (pp. 79 - 9 3). Springer International Publishing. 
Fosch - Villaronga, E., Poulsen, A., Søraa, R. A., & Custers, B. (2021). Gendering algorithms in social media. ACM SIGKDD 
Explorations Newsletter , 23 (1), 24 - 31. 
Friedman, B., & Nissenbaum, H. (1993, April). Discerning bias in computer systems. In INTERACT'93 and CHI'93 Conference 
Companion on Human Factors in Computing Systems (pp. 141 - 142). 
Garrett, N., Beard, N., & Fiesler, C. (2020, February). More than" If Time Allows" the role of ethics in AI education. 
In Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society (pp. 272 - 278). 
Garrido - Muñoz, I., Montejo - Ráez, A., Martínez - Santiago, F., & Ureña - López, L. A. (2021). A survey on bias in deep 
NLP. Applied Sciences , 11 (7), 3184. 
Glass, C., & Minnotte , K. L. (2010). Recruiting and hiring women in STEM fields. Journal of diversity in Higher 
Education , 3 (4), 218. 
Green, N. (2021, July). An AI ethics course highlighting explicit ethical agents. In Proceedings of the 2021 AAAI/ACM 
Conference on AI, Ethics, and Society (pp. 519 - 524). 
Gupta, M., Parra, C. M., & Dennehy, D. (2022). Questioning racial and gender bias in AI - based recommendations: Do espoused 
national cultural values matter?. Information Systems Frontiers , 24 (5), 1465 - 1481. 
Herring, S. C., Ogan, C., Ahuja, M., & Robinson, J. C. (2006). Gender and the culture of computing in applied IT education. 
In Encyclopedia of gender and information technology (pp. 474 - 481). IGI Global. 
Hine, E., & Floridi, L. (2023). The blueprint for an ai bill of rights: in search of enaction, at risk of inaction. Minds and 
Machines , 33 (2), 285 - 292. 
Hitron, T., Megidish, B., Todress, E., Morag, N., & Erel, H. (2022, August). Ai bias in human - robot interaction: An evaluation of 
the risk in gender biased robots. In 2022 31st IEEE International Conference on Robot and Human Interactive 
Communication (RO - MAN) (pp. 1598 - 1605). IEEE. 
Hort, M., Chen, Z., Zhang, J. M., Harman, M., & Sarro, F. (2024). Bias mitigation for machine learning classifiers: A 
comprehensive survey. ACM Journal on Responsible Computing , 1 (2), 1 - 52. 
Jacobson, J. L. (1993). Gender Bias: Roadblock to Sustainable Development. Focus , 3 (1). 
Karapapa, S., & Borghi, M. (2015). Search engine liability for autocomplete suggestions: personality, privacy and the power o f 
the algorithm. International Journal of Law and Information Technology , 23 (3), 261 - 289. 
Katznelson, G., & Gerke, S. (2021). The need for health AI ethics in medical school education. Advances in Health Sciences 
Education , 26 (4), 1447 - 1458. 
Kazim, E., & Koshiyama, A. S. (2021). A high - level overview of AI ethics. Patterns , 2 (9). 
Kilhoffer, Z., Zhou, Z., Wang, F., Tamton, F., Huang, Y., Kim, P., ... & Wang, Y. (2023, May). “How technical do you get? I’m 
an English teacher”: Teaching and Learning Cybersecurity and AI Ethics in High School. In 2023 IEEE symposium on 
security and privacy (SP) (pp. 2032 - 2032). IEEE. 
Koroteev, M. V. (2021). BERT: a review of applications in natural language processing and understanding. arXiv preprint 
arXiv:2103.11943 . 
Lambrecht, A., & Tucker, C. (2019). Algorithmic bias? An empirical study of apparent gender - based discrimination in the 
display of STEM career ads. Management science , 65 (7), 2966 - 2981. 
Lancaster, C. M., Schulenberg, K., Flathmann, C., McNeese, N. J., & Freeman, G. (2024). “It’s everybody’s role to speak up... 
but not everyone will”: Understanding AI professionals’ perceptions of accountability for AI bias mitigation. ACM Journal 
on Responsible Computing , 1 (1), 1 - 30. 
Leavy, S. (2018, May). Gender bias in artificial intelligence: The need for diversity and gender theory in machine learning. 
In Proceedings of the 1st international workshop on gender equality in software engineering (pp. 14 - 16). 
Makhortykh, M., Urman, A., & Ulloa, R. (2021, April). Detecting race and gender bias in visual representation of AI on web 
search engines. In International Workshop on Algorithmic Bias in Search and Recommendation (pp. 36 - 50). Cham: Springer 
International Publishing. 
Manyika, J., Chui, M., Miremadi, M., Bughin, J., George, K., Willmott, P., & Dewhurst, M. (2017). A future that works: AI, 
automation, employment, and productivity. McKinsey Global Institute Research, Tech. Rep , 60 , 1 - 135. 
Manzini, T., Lim, Y. C., Tsvetkov, Y., & Black, A. W. (2019). Black is to criminal as caucasian is to police: Detecting and 
removing multiclass bias in word embeddings. arXiv preprint arXiv:1904.04047 . 
Medel, P., & Pournaghshband , V. (2017, March). Eliminating gender bias in computer science education materials. 
In Proceedings of the 2017 ACM SIGCSE technical symposium on computer science education (pp. 411 - 416). 
Melsión, G. I., Torre, I., Vidal, E., & Leite, I. (2021, June). Using explainability to help children understandgender bias i n AI. 
In Proceedings of the 20th Annual ACM Interaction Design and Children Conference (pp. 87 - 99). 
Nadeem, A., Abedin, B., & Marjanovic, O. (2020). Gender bias in AI: A review of contributing factors and mitigating strategie s. 

ASIS&T Annual Meeting 2025 847 Long Papers 
Pena, A., Serna, I., Morales, A., & Fierrez, J. (2020). Bias in multimodal AI: Testbed for fair automatic recruitment. 
In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (pp. 28 - 29). 
Petsko, C. D., & Rosette, A. S. (2023). Are leaders still presumed white by default? Racial bias in leader categorization 
revisited. Journal of Applied Psychology , 108 (2), 330. 
Pitoura, E., Stefanidis, K., & Koutrika, G. (2022). Fairness in rankings and recommendations: an overview. The VLDB Journal , 
1 - 28. 
Prates, M. O., Avelar, P. H., & Lamb, L. C. (2020). Assessing gender bias in machine translation: a case study with google 
translate. Neural Computing and Applications , 32 , 6363 - 6381. 
Quinn, T. P., & Coghlan, S. (2021). Readying medical students for medical AI: The need to embed AI ethics education. arXiv 
preprint arXiv:2109.02866 . 
Schulenberg, K., Hauptman, A. I., Schlesener, E. A., Watkins, H., & Freeman, G. (2023, January). " I Felt Like I Wasn't Reall y 
Meant to be There": Understanding Women's Perceptions of Gender in Approaching AI Design & Development. 
In HICSS (pp. 175 - 184). 
Shapiro, B. R., Meng, A., O'Donnell, C., Lou, C., Zhao, E., Dankwa, B., & Hostetler, A. (2020, April). Re - Shape: A method to 
teach data ethics for data science education. In Proceedings of the 2020 CHI conference on human factors in computing 
systems (pp. 1 - 13). 
Shih, P. K., Lin, C. H., Wu, L. Y., & Yu, C. C. (2021). Learning ethics in AI — teaching non - engineering undergraduates through 
situated learning. Sustainability , 13 (7), 3718. 
Shrestha, S., & Das, S. (2022). Exploring gender biases in ML and AI academic research through systematic literature 
review. Frontiers in artificial intelligence , 5 , 976838. 
Sun, T., Gaut, A., Tang, S., Huang, Y., ElSherief, M., Zhao, J., ... & Wang, W. Y. (2019). Mitigating gender bias in natural 
language processing: Literature review. arXiv preprint arXiv:1906.08976 . 
Toupin, S. (2024). Shaping feminist artificial intelligence. New Media & Society , 26 (1), 580 - 595. 
Van Nuenen, T., Such, J., & Cote, M. (2022). Intersectional experiences of unfair treatment caused by automated computational 
systems. Proceedings of the ACM on Human - Computer Interaction , 6 (CSCW2), 1 - 30. 
Vorisek, C. N., Stellmach, C., Mayer, P. J., Klopfenstein, S. A. I., Bures, D. M., Diehl, A., ... & Thun, S. (2023). Artifici al 
intelligence bias in health care: web - based survey. Journal of Medical Internet Research , 25 , e41089. 
Wang, C., Wang, K., Bian, A., Islam, R., Keya, K. N., Foulds, J., & Pan, S. (2022, March). Do humans prefer debiased AI 
algorithms? A case study in career recommendation. In Proceedings of the 27th International Conference on Intelligent 
User Interfaces (pp. 134 - 147). 
Williams, R., Park, H. W., Oh, L., & Breazeal, C. (2019, July). Popbots: Designing an artificial intelligence curriculum for early 
childhood education. In Proceedings of the AAAI conference on artificial intelligence (Vol. 33, No. 01, pp. 9729 - 9736). 
Wright, S. A. (2020, December). Ai in the law: Towards assessing ethical risks. In 2020 IEEE International Conference on Big 
Data (Big Data) (pp. 2160 - 2169). IEEE. 
Zhao, J., Wang, T., Yatskar, M., Ordonez, V., & Chang, K. W. (2018). Gender bias in coreference resolution: Evaluation and 
debiasing methods. arXiv preprint arXiv:1804.06876 . 
Zimmermann - Niefield, A., Turner, M., Murphy, B., Kane, S. K., & Shapiro, R. B. (2019, June). Youth learning machine learning 
through building models of athletic moves. In Proceedings of the 18th ACM international conference on interaction design 
and children (pp. 121 - 132).