Characterizing Collective Efforts in Content Sharing and Quality
Control for ADHD-relevant Content on Video-sharing Platforms
Hanxiu ‘Hazel’ Zhu
Department of Computer Sciences
University of Wisconsin-Madison
Madison, Wisconsin, USA
hzhu339@wisc.edu
Avanthika Senthil Kumar
Department of Computer Sciences
University of Wisconsin-Madison
Madison, Wisconsin, USA
asenthilkum5@wisc.edu
Sihang Zhao
School of Science and Engineering
The Chinese University of Hong
Kong, Shenzhen
Shenzhen, China
222010544@link.CUHK.edu.cn
Ru Wang
Department of Computer Sciences
University of Wisconsin-Madison
Madison, Wisconsin, USA
ru.wang@wisc.edu
Xin Tong
The Hong Kong University of Science
and Technology (Guangzhou)
Guangzhou, China
xint@hkust-gz.edu.cn
Yuhang Zhao
Department of Computer Sciences
University of Wisconsin-Madison
Madison, Wisconsin, USA
yuhang.zhao@cs.wisc.edu
Abstract
Video-sharing platforms (VSPs) have become increasingly impor￾tant for individuals with ADHD to recognize symptoms, acquire
knowledge, and receive support. While videos offer rich informa￾tion and high engagement, they also present unique challenges,
such as information quality and accessibility issues to users with
ADHD. However, little work has thoroughly examined the video
content quality and accessibility issues, the impact, and the control
strategies in the ADHD community. We fill this gap by systemati￾cally collecting 373 ADHD-relevant videos with comments from
YouTube and TikTok and analyzing the data with a mixed method.
Our study identified the characteristics of ADHD-relevant videos
on VSPs (e.g., creator types, video presentation forms, quality is￾sues) and revealed the collective efforts of creators and viewers in
video quality control, such as authority building, collective qual￾ity checking, and accessibility improvement. We further derive
actionable design implications for VSPs to offer more reliable and
ADHD-friendly content.
CCS Concepts
• Human-centered computing → Empirical studies in acces￾sibility; Empirical studies in collaborative and social com￾puting.
Keywords
video-sharing platforms, information quality, online communities,
ADHD, accessibility
ACM Reference Format:
Hanxiu ‘Hazel’ Zhu, Avanthika Senthil Kumar, Sihang Zhao, Ru Wang,
Xin Tong, and Yuhang Zhao. 2025. Characterizing Collective Efforts in
Content Sharing and Quality Control for ADHD-relevant Content on Video￾sharing Platforms. In The 27th International ACM SIGACCESS Conference on
This work is licensed under a Creative Commons Attribution 4.0 International License.
ASSETS ’25, Denver, CO, USA
© 2025 Copyright held by the owner/author(s).
ACM ISBN 979-8-4007-0676-9/25/10
https://doi.org/10.1145/3663547.3746387
Computers and Accessibility (ASSETS ’25), October 26–29, 2025, Denver, CO,
USA. ACM, New York, NY, USA, 15 pages. https://doi.org/10.1145/3663547.
3746387
1 Introduction
Attention Deficit Hyperactivity Disorder (ADHD) has received in￾creasing attention in recent years as more individuals recognize
their symptoms and seek diagnosis and support. Despite the grow￾ing awareness, misconceptions about ADHD persist, such as the
belief that it affects only White boys [15] or that individuals have to
exhibit hyperactivity [38]. These misconceptions leave many peo￾ple unaware of their ADHD, and even people who recognize their
symptoms often face difficulties in obtaining proper diagnosis and
treatment [8]. As a result, information and resources online have
been crucial for individuals with ADHD to identify and understand
their symptoms and experiences and seek support from peers [18].
Among various social media platforms, video-sharing platforms
(VSPs), such as TikTok and YouTube, have become an emerging
medium for people with ADHD to share experiences and exchange
information [75]. Unlike conventional text- or image-based media,
videos offer richer information via multimodal channels, enabling
increased engagement, higher persuasiveness, and more effective
behavior intervention [43, 83]. This has led to a surge in the ADHD
audience as well as ADHD-relevant content on VSPs. For example,
by June 2024, TikTok had more than three million video posts and 25
billion views under the hashtag “#adhd,” highlighting the influence
of VSPs on ADHD-relevant discussions.
Recent research has started examining the experiences of ADHD
users with VSPs [18, 40, 49]. For example, Eagle and Ringland [18]
conducted a digital ethnography study to analyze ADHD-relevant
posts and comments on Twitter, Instagram, and TikTok, and identi￾fied TikTok as a valuable source of shared expertise for people with
ADHD. These works mainly focused on the community-building
and content-sharing experiences of ADHD users, without deeply in￾vestigating the potential content quality and delivery issues brought
by the unique video form.
Video content can bring unique risks and challenges to users
with ADHD. The high information richness and less controllable
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
content flow in videos make it particularly challenging to iden￾tify and combat misinformation [55], potentially leading to hasty
ADHD self-diagnosis and misunderstanding [22]. The multimodal
nature of videos could also bring unique perceptual challenges to
ADHD viewers [54]. To reveal the content quality issues on VSPs,
Yeung et al. [86] and Thapa et al. [75] examined the prevalence of
misleading ADHD content on TikTok and YouTube respectively
by asking medical experts to rate video quality using existing or
self-devised information quality frameworks. However, both works
focused on quantitative measures through a medical lens, overlook￾ing the complexity and nuances of user reactions, challenges, and
strategies in video quality control. With the increasing amount of
ADHD-relevant videos online, it is critical to deeply investigate the
characteristics of such videos on VSPs, their content quality and
accessibility issues for ADHD users, and how ADHD creators and
viewers respond to and combat these issues, thus inspiring a more
inclusive, safe, and trustworthy VSP community for ADHD.
Our research focuses on emerging VSPs and investigates the
unique characteristics and quality issues of ADHD-relevant videos.
We contextualize our research on the two most popular and repre￾sentative VSPs—TikTok that shares short video content and YouTube
that mainly offers long video content. We address the problems
from both the content creators’ (via the videos) and viewers’ (via
the comments) perspectives, unfolding their challenges, strategies,
and social dynamics in monitoring, controlling, and improving
video quality and accessibility on VSPs. Specifically, we answer the
research questions below:
(1) What types of ADHD-relevant content are covered on
YouTube and TikTok respectively? What are their charac￾teristics (e.g., creator types, presentation forms) and how do
they impact content quality?
(2) How do content creators establish authority and trust on
their videos and maintain video quality?
(3) How do viewers of ADHD-relevant videos perceive, inter￾pret, and respond to different video creators, content, and
qualities?
To answer the questions, we systematically collected and ana￾lyzed 373 videos with comments (YouTube: 189, TikTok: 184) for
an in-depth content analysis. We analyzed the data using a mixed
method to uncover both quantitative characteristics and distribu￾tions of ADHD-relevant videos and qualitative understanding of
user challenges and strategies. We found that TikTok and YouTube
have distinctive creator demographics and presentation forms (e.g.,
more personal ADHD experience sharing by individual creators on
TikTok vs. more educational and medical knowledge by health prac￾titioners and organizations on YouTube), serving different content
sharing purposes yet posing different issues. Through examining
the collective quality control efforts, we highlighted potential chal￾lenges in these quality control practices (e.g., risks of misleading
authority) and their impact on viewers, uncovering unique creator￾viewer dynamics (e.g., creators reminding viewers to seek clinical
help vs. viewers complaining the lack of accessible diagnostic re￾sources for adult women with ADHD) in ADHD communities on
VSPs. Furthermore, we discovered video accessibility issues that
largely affect ADHD viewers’ ability to intake the video content,
including video length, slow pace, distracting multimodal elements,
and caption availability, and revealed the corresponding practices
and challenges when combating these issues.
Our contributions are twofold. First, to the best of our knowl￾edge, this is the first research that conducts both qualitative and
quantitative examination of ADHD-relevant videos on VSPs with
a focus on content quality and accessibility. Our research focuses
on the collective efforts of the creators, viewers, and the platforms,
revealing current challenges and practices around trust building
and quality control. While our study focused on ADHD, the insights
can potentially be generalized to the broader neurodivergent or
mental health communities. Second, based on the characterization
and analysis of ADHD-relevant content and user interactions, we
derived concrete and actionable design implications to enable more
inclusive video-watching experiences and facilitate quality control
and accessibility efforts for the ADHD community.
2 Background & Related Work
In this section, we explain the historically ingrained diagnostic
challenges and the importance of active help-seeking forindividuals
with ADHD. We also examine the role of video-sharing platforms
in supporting help-seeking and community-building within the
ADHD community, as well as the underexplored issue of ADHD￾relevant video qualities on these platforms.
2.1 ADHD: Diagnostic Challenges
Attention-deficit/hyperactivity disorder (ADHD) is a neurodevelop￾mental disorder that affects 7.6% of children and 6.8% of adults [61].
People with ADHD could display inattention and/or hyperactiv￾ity/impulsivity [82], and poorly managed ADHD could put people
under various risks, including low self-esteem, underachievement,
and substance abuse [80].
Despite the prevalence of ADHD and the importance of timely
recognition and treatment, diagnosing ADHD can be challenging.
Previously known as hyperkinetic behavior syndrome, ADHD was
originally characterized as a childhood disorder that mainly affects
boys who exhibit disruptive behaviors [38]. As a result, children
who have the inattentive sub-type of ADHD have more difficul￾ties getting a timely diagnosis and intervention in childhood [68].
Additionally, biases along the axes of age, gender, and race also
contribute to diagnostic challenges. Adults [23, 53, 60], women
[34, 88], people of color [65, 93], and their intersections [8, 51, 78]
are more likely to experience undiagnosed or misdiagnosed ADHD,
as their experiences are misinterpreted or dismissed [8, 29]. For
individuals who failed to have their ADHD diagnosed early, they
gradually adopt coping strategies or masking techniques to fit into
their environment, making their ADHD presentations even less
identifiable [2, 37].
As a result, self-exploration and awareness become crucial for
people with undiagnosed ADHD to realize the need to seek help
[39, 58]. Social media thus becomes an indispensable source for
users with ADHD. While ADHD affects each individual differently,
research has shown that people with ADHD could be particularly
attracted to social media [7], a condition that was exacerbated
during the COVID-19 lockdown [81]. We unpack the impact of
social media on ADHD and the broader health community below.
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
2.2 Using Social Media for Health Purposes
Conventional text/image-based social media platforms, including
Facebook, Reddit, and Twitter, have long been used to support users
with health needs in sharing experiences, exchanging support, and
deconstructing stereotypes [20, 62, 76]. More recently, however,
video-sharing platforms (VSPs) have emerged rapidly among
health communities, since videos afford particularly rich informa￾tion and fast propagation [41]. YouTube and TikTok are the two
most prominent VSPs in the U.S., with 83% of adults reported using
YouTube and 33% using TikTok [59]. Both platforms bring increas￾ing impact on the dissemination of a wide range of health-related
content [48].
Compared to other media forms, videos can more easily garner
neurodivergent users’ attention and provide a greater sense of
enjoyment [54]. Recently, there has been a surge in ADHD-relevant
content on VSPs, particularly following the significant growth in
short-form video viewers during COVID-19 [84]. Creators have
published more than three million posts under the hashtag “#adhd”
on TikTok with more than 25 billion views (as of June 2024), making
it one of the most popular health-related hashtags [91].
Despite the increasing popularity of VSPs and the surge of ADHD
content, the characteristics of videos and their impact on the ADHD
community remain underexplored. Limited prior work has started
investigating how people with ADHD use VSPs to construct ADHD
discourse and form communities [32, 49]. For example, Leveille [40]
analyzed the personal and humorous nature of ADHD-relevant
content on TikTok, unveiling their role in reflecting neurodivergent
identity. Eagle and Ringland [18] conducted a digital ethnography to
examineADHD communities across TikTok, Twitter, and Instagram,
highlighting VSPs as valuable sources of information and support.
Moreover, prior work has also started to explore neurodiverse users’
experiences with the video watching and creation process [50]. For
example, Jiang et al. [31] conducted an interview study to unveil the
challenges and strategies of viewers with ADHD when consuming
video contents. Simpson et al. [69] explored the experiences of
neurodiverse TikTok creators with an interview study, revealing the
need for VSPs to support such creators. However, while prior work
has contributed to qualitative understanding of ADHD community
building, advocacy and creative experiences on VSPs, none of these
works has examined the different characteristics and qualities of
ADHD-relevant videos and their impacts on viewers. In contrast,
our work examines the ADHD communities on different VSPs
from the perspective of content quality and accessibility, which
are critical towards building a safer and more inclusive online
environment for users with ADHD.
2.3 Quality of Health Contents on Social Media
Despite the important role thatsocial media playsin offering health￾relevant content, research has called the quality of such content
into question. Numerous efforts in the health field have been made
to assess the quality of health information on various social media
platforms, covering topics of drugs [5, 85], vaccines[10, 63], chronic
illnesses [13, 52], pandemics [3, 19], and mental health [46, 71],
and discovered that 30% to 87% of posts on different social media
platforms contain misinformation [73].
The content quality issues for ADHD-relevant videos on VSPs
can be more severe and challenging due to the rich, multimodal,
and less controllable nature of videos [55]. For example, Thapa et al.
[75] collected ADHD-relevant videos on YouTube, rated the video
quality with a self-devised scoring system, and identified 38.4% of
the videos as misleading. More recently, Yeung et al. [86] invited
experts to rate the top 100 videos under the hashtag “#adhd” on
TikTok in 2022, and identified 52% as misleading.
However, although prior work has highlighted the potential
content quality risk of ADHD-relevant videos, such quantitative
evaluation of ADHD video quality relied on a score-based assess￾ment system developed from a clinical lens [9], without diving into
creators’ and viewers’ reactions, practices, and challenges when
combating video quality issues. Such clinical criteria are usually
not well-suited for videos that share unique personal experiences—
an important type of content for ADHD community building and
experience sharing [18]. This gap highlights the need for a more
nuanced and thorough approach to examine the characteristics,
qualities, and impact of ADHD content on VSPs.
3 Methodology
Our work seeks to understand how ADHD community members
on VSPs share, consume, and evaluate content. We collected and
analyzed both ADHD-relevant videos and comments to understand
video characteristics and user interaction dynamics. We elaborate
on our choices of platforms, data collection and analysis process
below.
3.1 Platform Choices
We chose YouTube and TikTok, the two most popular VSPs in the
United States [59]. Both platforms engaged heated discussions on
ADHD and were criticized for containing content of varying quality
[75, 86]. While YouTube introduced Shorts in 2021, it is relatively
new and is not as widely viewed as TikTok [74]. Thus, we focused
on examining standard-length videos on YouTube to derive more
distinctive comparison.
3.2 Data Collection & Sampling
We systematically and exhaustively collected videos, their metadata,
and commentsfrom TikTok and YouTube.Additionally, we collected
video descriptions and creators’ profiles, which contain important
resource and creator information. We conducted video search with
the platform’s default priority settings (i.e., relevance1) to collect
videos that are more likely to be recommended to users. We specify
the video collection methods for each platform below.
3.2.1 TikTok Video Collection. Following prior work [79], we col￾lected ADHD-relevant videos on TikTok with Apify, a third-party
scraping tool2. We did not use the official TikTok API as it did not
support any priority search (e.g., results ranked by relevance). To
ensure comprehensive coverage of videos, we used hashtags as the
search index due to their primary influence on video search and
organization on TikTok [6], following prior research [44].
1YouTube: https://support.google.com/youtube/answer/111997; TikTok: https://support.
tiktok.com/en/using-tiktok/exploring-videos/discover-and-search
2Apify: https://apify.com/clockworks/tiktok-scraper.
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
We started by searching the hashtag “#adhd” and collected 3984
videos. Using the search results as seeds, we further identified other
relevant hashtags. Specifically, we extracted and ranked the top 100
most frequent hashtags that co-occur with “#adhd” from the 3984
videos, manually checked and removed those that are not directly
related to ADHD (e.g., #fyp, #ocd, #lgbtq), and generated a new
set of hashtags as search terms for another round of video search.
We repeated this process until the hashtag set saturated. In the
end, we obtained 55 hashtags (see Table 1). For each hashtag, we
scraped the top 1000 videos, and collected a total of 50085 videos
on November 10th, 2023. After removing the duplicated videos, we
had 34067 unique videos. As comment analysis is a critical part
of our research to understand viewers’ responses and interactions
between creators and viewers, we dropped videos with fewer than
20 comments, resulting in 26318 TikTok videos.
3.2.2 YouTube Video Collection. We used the YouTube Data API
to collect videos from YouTube. While hashtagging is available on
YouTube, it is not the primary way to relate and organize videos on
YouTube [77]. We thus employed a keyword-based search approach
and strived to derive a comprehensive set of keywords to cover di￾verse ADHD-related topics. To identify the keywords, we referred
to the TikTok dataset to inform popular ADHD-relevant topics.
Specifically, we identified the top 1000 most frequently occurring
hashtags from the TikTok dataset. Two researchers then discussed
and grouped them into 26 categories(see Table 1). We used these cat￾egories as keywords for YouTube video search, combining “ADHD”
with each category keyword (e.g., ADHD parenting) as the search
term to retrieve videos on each topic. We collected videos from
each search term until the search results became irrelevant [ ].
This approach resulted in 8946 videos (on November 28th, 2023).
After removing the duplicated videos, we had 5285 unique videos
and then narrowed down to 2281 having more than 20 comments.
36
3.2.3 Video Sampling. While collecting a comprehensive set of
videos, we also needed to further narrow down the scope to get a
reasonable number of videos for analysis. We thus applied a critical
case sampling approach [57] to achieve a balanced video sampling
across all ADHD topics. However, as search results from YouTube
rely on both the keywords and video popularity and quality [90],
the returned results may not always match the intended search
topic (e.g., when searching ADHD parenting, a popular ADHD video
that is unrelated to parenting might be returned). To address this
issue, we conducted another round of categorization to more accu￾rately assign each video to the appropriate categories in Table 1.
TikTok videos were categorized based on whether a video contained
hashtags that belonged to a certain category. YouTube videos were
manually categorized by analyzing their titles and descriptions:
Two researchers independently categorized 200 randomly selected
videos, discussed their categorization to resolve disagreements, and
split the remaining videos to complete all video categorization.
We selected 10 videos per category from each platform. We
selected both the top five most viewed videos to capture the most
influential content and another five randomly-sampled videos to
represent a diverse range of content. We then removed videos that
were 1) duplicated, 2) non-English, and/or 3) neither about ADHD
nor created by ADHD or health-related creators.
Table 1: Search terms used for collecting TikTok and YouTube
videos.
TikTok Hashtags
adhd, adhdtok, adhdbrain, adhdsquad, adhdtiktok, adhdex￾plained, adhdcommunity, 80hd, add, adhdanonymous, adhdtribe,
actuallyadhd, neurodivergent, neurospicy, neurodivergenttiktok,
adhdlife, adhdinwomen, adhdwomen, womenwithadhd, adhd￾girls, adhdingirls, adhshe, adhdinmen, adultadhd, adhdadult, ad￾hdinadults, adhdcheck, adhddiagnosis, adhdsymptoms, latediag￾nosisadhd, adhdprobs, adhdproblems, adhdstruggles, adhdtips,
adhdhelp, adhdsupport, adhdhacks, adhdcoach, adhdcoaching,
adhdtipsandtricks, adhdmemes, adhdhumor, adhdcouple, ad￾hdrelationships, adhdpartner, adhdmom, adhdparenting, adhd￾family, audhd, audhder, audhdtok, audhdtiktok, adhdawareness,
adhdisreal
YouTube Categories
parenting, relationship, workplace, school & education, gender,
race, sexuality, adult, kids, problems & challenges, knowledge &
facts, diagnosis, symptoms, comorbidity, mental health, physical
health, help & tips, tools & technologies, community, medication
& treatment, positivity, creator, memes, awareness & advocacy,
stigma, life & experiences
Final Video Dataset. The sampling process resulted in 184
TikTok and 189 YouTube videos in the final video dataset with a
wide range of views, likes, and comments. On average, videos we
selected from YouTube had been viewed 1.7𝑀 ± 3.3𝑀(𝑀𝑒𝑎𝑛 ± 𝑆𝐷)
times, and received 77.6𝐾 ±165𝐾 likes and 5.6𝐾 ±24.4𝐾 comments.
Videos from TikTok had been played 4.6𝑀 ± 8.4𝑀 times, receiving
584𝐾 ± 1.2𝑀 diggs (likes), and 5.9𝐾 ± 21.1𝐾 comments.
3.2.4 Comment Collection. Using the same tools for video col￾lection, we collected the top 20 comments under each video on
December 11th, 2023. We did not limit comment collection to those
explicitly made by viewers with ADHD, as different stakeholders
(e.g., health experts, family of people with ADHD) could all play
crucial roles in the ADHD online communities [18].
3.3 Data Analysis
We analyzed the videos and comments with a mixed methods ap￾proach, combining both quantitative and qualitative analyses.
3.3.1 Quantitative Analysis. We compared the characteristics and
distributions of ADHD-relevant videos on YouTube and TikTok via
Chi-square tests with Bonferroni correction. In addition, we also
reported descriptive statistics, including mean, standard deviation,
and the proportions of videos with different attributes (e.g., creator
types, content types, video forms, different quality control and
accessibility measures).
3.3.2 Qualitative analysis. We employed thematic analysis [14]
to qualitatively generate codebooks and themes to deeply under￾stand the content of ADHD-relevant videos on VSPs and viewers’
experiences.
To analyze the video content and characteristics, we first ran￾domly sampled 20 TikTok videos and 20 YouTube videos from the
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
final video dataset. Two researchers coded the selected videos inde￾pendently via open coding. To qualitatively analyze the videos, they
converted the multimodal video data into text transcripts: First, they
obtained the transcript for each video. They then watched the video,
took notes of important video content (e.g., presentation form), and
inserted the notes into the transcript based on the timestamp. They
also added other metadata (e.g., creator profiles) to the transcript,
and coded the finalized transcripts following the standard thematic
analysis method. After coding the 40 selected videos, they discussed
and revised their codes to resolve any disagreement and developed
an initial codebook with consensus. Three researchers then divided
and coded the remaining videos. During the process, the researchers
met and checked their codes on a weekly basis to ensure consis￾tency and add new codes to the codebook. Meanwhile, a fourth
researcher oversaw the entire coding process to ensure higher-level
agreement. The final codebook contained 61 codes. Two researchers
then conducted axial coding together, grouping codes of similar
types under high-level categories using affinity diagramming and
obtained nine themes.
We applied the same method to code video comments, with two
researchers developing the initial codebook for comments on the
20 sampled videos, and three researchers coding the remaining
comments. The final codebook contained over 90 codes with 15
high-level themes.
Finally, to examine the relationships between videos and com￾ments (e.g., viewers’ response to videos with certain quality
measures), we conducted another round of axial coding, cross￾referencing and connecting codes from the video and comment
codebooks, generating nine additional themes.
3.4 Ethical Considerations
All videos collected in this work are public. We obtained the Institu￾tional Review Board (IRB) approval before starting data collection.
All researchers have prior experience working with individuals
with disabilities and/or analyzing data from online communities.
Some of the researchers on the team identify as neurodivergent.
We recognize the limitations of our experiences and perspectives,
and the fact that we, as researchers in HCI, do not have expertise
in the health field. The goal of this work is not to judge whether
ADHD content on VSPs is high- or low-quality, nor to criticize any
content or users. Instead, we examined the voices of the ADHD
community members via the videos and the comments to broadcast
the underlying issues and needs, thus deriving design implications
to support open, safe, and trustworthy content sharing on VSPs.
4 Findings
In this section, we present the main findings from our mixed meth￾ods analysis, including quantitative results on the characteristics
of ADHD-relevant videos, the collective efforts by creators and
viewers in video quality control alongside their challenges, and
ADHD-relevant accessibility issues and practices in video creation.
4.1 Characterizing ADHD-relevant Videos
We report quantitative results to characterize and compare the
ADHD-relevant videos on YouTube and TikTok (e.g., creator types,
content types, presentation forms), highlighting the commonalities
and differences between the two VSPs.
4.1.1 Who are the creators? In total, we collected videos from 127
creators on YouTube and 125 creators on TikTok. Based on the
creator profiles and their self-disclosed identity in the videos, we
identified nine types of creators based on their relationship with
ADHD, including individuals with ADHD (self-disclosed), individuals
with other neurodiverse conditions (e.g., autism), partners and parents
of people with ADHD, health professionals (e.g., doctors and psychia￾trists who could diagnose ADHD), ADHD coaches (i.e., creators who
offered paid courses or coaching sessions in a non-clinical setting),
educational institutions and non-profit organizations (e.g., official
channels of universities), companies that sell ADHD-related products
(e.g., video games for people with ADHD), other media channels
(e.g., local news), and other individuals (i.e., creators who did not
disclose any relationship with neurodiversity or health expertise).
Note that these categories are not mutually exclusive (e.g., some
health professionals and ADHD coaches self-reported as having
ADHD). We show the distribution of creator types in Figure 1(a).
Interestingly, we observed a stark difference in the creator type
distributions between TikTok and YouTube. We found that in￾dividuals with ADHD were the dominant creators on TikTok,
comprising 69.6% of all creators producing ADHD-related con￾tent, which was significantly more than the 35.4% on YouTube
(𝜒2 (1, 252) = 28.1, 𝑝 < 0.001). In contrast, YouTube featured signifi￾cantly more institutions and organizations (YouTube: 14.2%, TikTok:
3.2%, 𝜒2 (1, 252) = 8.2, 𝑝 = 0.038), and also had a higher proportion
of health professionals (YouTube: 15.0%, TikTok: 4.0%), although
this difference was not statistically significant (𝜒2 (1, 252) = 7.6,
𝑝 = 0.053). The different creator identity distribution indicated a
major difference between the two platforms: TikTok fostered close￾knit communities of individuals for personal experience sharing, while
YouTube conveyed more “authoritative information” from profession￾als and organizations. This observation was echoed by viewers’ sen￾timents on the two platforms. For example, a TikTok creator shared
their personal experience with adult ADHD diagnosis, encouraging
viewers to support each other through this journey. Comments
directly responded to the creator’s words, highlighting a strong
sense of community: “None of us is alone. You’re building a commu￾nity of support!” (TikTok comment). In contrast, stronger medical
expert presence on YouTube allowed viewers to acquire authorita￾tive information, as one viewer wrote under a clinician’s video on
non-medical ADHD interventions: “This channel is real, reliable and
absolutely helpful. . . I’m not able to see a good doctor financially. . .
watching this video really helped” (YouTube comment).
4.1.2 What contents are covered? We identified 12 content types
for ADHD-relevant videos. We found that the video content cov￾ered two high-level categories—clinical knowledge & treatment and
pragmatic experiences & strategies—echoing Zhang et al.’s content
taxonomy for mental health videos on TikTok [92]. We further
expanded the prior taxonomy by deriving subcategories specialized
for ADHD. Specifically, for the clinical knowledge & treatment cat￾egory, we identified four types: (1) symptoms and impact of ADHD,
(e.g., being inattentive); (2) explanation of ADHD symptoms (e.g., us￾ing dopamine levels to explain ADHD); (3) medical information (e.g.,
different types of medications); and (4) demographics of ADHD (e.g.,
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
Figure 1: Creator and video distributions on YouTube and TikTok. (a) Distributions of creator types; (b) Distributions of videos
convering different contents; (c) Distributions of video forms.
gender distributions). For the pragmatic experiences and strategies,
we identified eight types: (1) tips, strategies, and tools (e.g., body dou￾bling); (2) lived experiences of ADHD (e.g., growing up with ADHD);
(3) awareness and advocacy (e.g., explicitly advocating ADHD as a
serious disorder); (4) experience with medical processes (e.g., clinical
diagnostic experiences); (5) community support (e.g., play a happy
song for “my adhd people”); (6) life beyond ADHD (e.g., wedding
vlogs); (7) evaluation of online information (e.g., criticizing certain
videos to convey misinformation); and (8) advice seeking (e.g., what
to do in face of Adderall shortage). We show the distribution of
video content on YouTube and TikTok in Figure 1(b) (Note that
some videos cover multiple types of content).
Content Commonalities. We found that ADHD symptoms and
impacts were the most common topics on both YouTube (45.0%)
and TikTok (32.1%). The prevalence of this content corresponded to
people’s need for self-recognition of ADHD symptoms for further
diagnosis or help-seeking. To supplement these generic descrip￾tions, many videos on both platforms (YouTube: 29.6%, TikTok:
30.4%) shared personal lived experiences with ADHD, allowing
viewers to understand ADHD symptoms with concrete examples
and contexts.
Content Differences. We found that there were significantly
more YouTube videos covering medical information (YouTube:
13.8%, TikTok: 2.2%, 𝜒2 (1, 373) = 15.4, 𝑝 < 0.01) and ADHD demo￾graphics (YouTube: 9.0%, TikTok: 0.5%, 𝜒2 (1, 373) = 12.7, 𝑝 < 0.01),
which was in line with the larger number of health professionals
and organizations on YouTube. YouTube also had significantly more
videos on awareness and advocacy, explicitly defying ADHD stereo￾types and advocating for ADHD as a serious disorder (YouTube:
32.8%, TikTok: 7.4%, 𝜒2 (1, 373) = 34.9, 𝑝 < 0.001), reflecting pur￾poses of many educational videos from organizations. Additionally,
although both platforms provided practical tips,strategies, and tech￾nologies that facilitated navigation of ADHD lives, YouTube had
a significantly higher proportion of videos covering such content
(YouTube: 42.3%, TikTok: 24.3%, 𝜒2 (1, 373) = 12.6, 𝑝 < 0.01). How￾ever, content on TikTok appeared to foster more direct and intimate
interactions between ADHD community members, even though
the differences were not statistically significant. For example, more
videos on TikTok offered direct community support (TikTok: 6.5%,
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
Figure 2: Examples of different videos forms except for compilation. A compilation video could consist of multiple forms above.
YouTube: 1.9%, 𝜒2 (1, 373) = 4.8, 𝑝 = 0.36), and shared personal life
events beyond their ADHD experiences (TikTok: 4.4%, YouTube:
1.1%, 𝜒2 (1, 373) = 2.7, 𝑝 = 1.00). As a result, the two platforms
could potentially attract different viewers who sought different
types of information and support.
4.1.3 How are videos presented? We found that creators shared
ADHD-related videos via various presentation forms based on their
purposes. We identified 13 forms of video presentations on YouTube
and TikTok (Figure 2), including (1) video selfie (i.e., recording of
creator speaking to the camera) ; (2) role playing and skits that
vividly illustrated ADHD symptoms and experiences; (3) life record￾ing (e.g., vlogs); (4) first-person POV that directly reflected ADHD
perspectives; (5) animation; (6) pure audio (e.g., music to help with
ADHD concentration); (7) talks and interviews that reflected pub￾lic discourse; (8) text with background; (9) memes; (10) duet (i.e., a
creator responding to another video); (11) news and documentary
that recorded or reported ADHD from a third-party perspective;
(12) slides presentation; and (13) compilation (i.e., stitching multiple
videos together to create a new one). We show the distribution of
video presentation forms in Figure 1(c).
Our results showed that the most common presentation form
on both YouTube and TikTok was a video selfie (YouTube: 38.1%,
TikTok: 45.1%). However, the two VSPs also leveraged different
presentation forms for ADHD content. Specifically, YouTube had
significantly more formal videos presented from public perspec￾tives, including talks and interviews (YouTube: 16.4%, TikTok: 1.6%,
𝜒2 (1, 373) = 22.8, 𝑝 < 0.001) and news and documentary (YouTube:
6.3%, TikTok: none, 𝜒2 (1, 373) = 10.1, 𝑝 = 0.019). YouTube also
uniquely presented animation, pure audio, and compilations, re￾flecting production effort and diversity of presentation forms in
long videos. In contrast, TikTok had significantly more videos fea￾turing role-playing (TikTok: 28.8%, YouTube: 14.8%, 𝜒2 (1, 373) =
9.9, 𝑝 = 0.021), and uniquely presented memes and first-person
POV videos. Video forms on TikTok illustrated ADHD experiences
in a personal, creative, and light-hearted manner, reflecting different
styles and community cultures between TikTok and YouTube.
4.2 Efforts and Challenges in Content Quality
Control
We elaborate on the collective efforts—by VSPs, creators, and
viewers—in indicating, assessing, and improving the quality of
ADHD-relevant videos, alongside the underlying challenges. While
some findings might generalize to other health communities, we
highlight the unique interactions and perceptual gaps across dif￾ferent user groups in ADHD communities on VSPs, which were
critical in people’s help-seeking decisions due to the long-running
stereotypes of ADHD and the diagnostic challenges that followed
[18].
4.2.1 Proactive Quality Indicators on VSPs. We found that both
VSPs and creators proactively indicated video qualities via author￾ship, attributions, and areas of uncertainty. We elaborate on their
strategies and the corresponding challenges.
Establishing Authorship: Identity Disclosure by Creators.
Authorship, including authors, their affiliations, and relevant cre￾dentials, plays a vital role in trust building [67]. We found that
creators of ADHD-relevant videos on both YouTube and TikTok
disclosed their neurodiverse conditions and ADHD- or health-related
expertise to provide authorship information, thus establishing au￾thority and trust. Creators disclosed their identities via profiles,
video content, video descriptions, creator names, and video titles,
with most ADHD individuals (YouTube: 55.6%, TikTok: 69.5%) and
health professionals (YouTube: 78.9%, TikTok: 100%) disclosing their
identities via profiles.
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
Challenge: Vague Disclosure. The various authorship estab￾lishment strategies also raised issues. We found that creators lacked
a common standard for identity and background disclosure, with
creators sharing their identities to varying degrees, potentially lead￾ing to misleading information. For instance, 8.3% of YouTube and
60% of TikTok creators who claimed to be “Dr.” or “Ph.D.” provided
only degree information with no further expertise details (e.g., clin￾ical psychologist). This lack of specificity could sometimes lead to
confusion or misinterpretation. For instance, one TikTok creator
disclosed their Ph.D. degree in their profile with no expertise speci￾fication; however, a website linked from their profile indicated that
the Ph.D. degree was not related to health or ADHD. This incom￾plete disclosure on TikTok resulted in confusion among viewers as
reflected in the comments:
Viewer A: “Can you share the rationale behind your
statement?” (TikTok comment).
Viewer B: “Their PhD” (Reply to Viewer A).
Viewer C: “They have a Ph.D. in [a communication￾related field]” (Reply to Viewer B).
This conversation indicated viewers’ skepticism towards the
creator’s authorship. While the creator might not intend to associate
their Ph.D. with the reliability of video content, some viewers could
misinterpret such information due to the incomplete disclosure
at important locations (e.g., profiles), resulting in issues such as
over-estimating the credibility of the content due to the creator’s
disclosed authorship.
Establishing Authorship: Platform Recognition. Besides cre￾ators, we found that VSPs also had platform-based mechanisms
to recognize creators’ health expertise. Specifically, 7.1% of cre￾ators on YouTube (10.6% of videos) had a brief description under
their videos—“From a channel with a health professional licensed in
[country].”—to recognize their reliability as health sources.
Challenge: Low Recognition Rate. Despite the effort, we no￾ticed that such a platform-based approach might not fully capture
the available professional healthcare sources: the YouTube health
expert recognition feature only covered 47.4% of creators who self￾disclosed as health professionals, potentially limiting viewers’ ac￾cess to some credible medical information. At the time of our work,
we did not find a similar feature on TikTok for recognizing health
sources.
Making Attribution: References. Aside from establishing au￾thorship, we also observed some creators added references to
their videos for reliable attribution. Common references included
health-related publications (e.g., JAMA) and articles by authorita￾tive ADHD-related organizations (e.g., CHADD). On YouTube, we
found that 13.2% ADHD-relevant videos contained some form of
references: 7.9% in video descriptions, 4.2% in video contents, and
2.6% vaguely mentioning some studies without explicitly providing
titles or links. Notably, one video added references with timestamps
in the video description to help viewers map references to the video
content. Compared to YouTube (13.2%), significantly fewer videos
on TikTok (2.2%) included references (𝜒2 (1, 373) = 14.4, 𝑝 < 0.001),
with 0.55% of videos having references in descriptions and 1.65% in
videos.
We found that some viewers would actively seek references
from non-professional creators to ensure the quality of the ADHD
content they consume. For example, under a YouTube video that
promoted a video game claimed to alleviate ADHD symptoms, a
comment pointed out the video lacked concrete references:“Where’s
the studies backing up the bold claim that it improves our symptoms...?
Link to peer-reviewed research papers, please?” (YouTube comment).
Challenge: Irrelevant References. We found some creators
added irrelevant references to their videos to make the content
appear credible. For example, one video on TikTok about ADHD
behaviors shared in its description that “This video is based on the
following scientific article: [link]” (TikTok description). However,
we reviewed the reference link, but found no content relevant
to ADHD or neurodiversity in it. Comments further highlighted
concerns about the misconception introduced by the video: “Videos
like this make people think they have ADHD, and ended up with more
stigma on ADHD” (TikTok comment). Adding irrelevant references
could bring the risk of misleading viewers into trusting low-quality
content on a surface level and associating certain behaviors with
ADHD without a deep understanding.
Clarifying Areas of Uncertainty: Reminders and Dis￾claimers. In contrast to indicating the high quality of their videos,
some creators highlighted uncertainties and limitations of their
videos to avoid misinformation. They emphasized, for instance,
that they were not health professionals, that the content reflected
only personal experiences or opinions, or that the viewers should
seek professional help or diagnosis. For example, a TikTok video
demonstrating the creator’s ADHD symptoms had a reminder in
the description: “Please take this video with humour—it’s how I cope
with my messed up life” (TikTok description). Some creators also
added in-video captions reminding viewers that the video is “not a
diagnostic tool” (TikTok video).
In total, we found 3.8% of videos on TikTok included such re￾minders (2.2% appearing in videos, 1.1% in comments, and 0.5%
in descriptions) compared to 15.3% of videos on YouTube (11.1%
in descriptions, 4.2% in videos, 2.6% in profiles, and 0.5% in com￾ments), with YouTube having a significantly higher proportion
(𝜒2 (1, 373) = 12.9, 𝑝 < 0.001). These reminders highlighted limita￾tions of the video content, encouraging viewers to be cautious in
help-seeking online and acquire clinical help if possible.
Challenge: Low Visibility. Despite creators’ efforts, these re￾minders might not be obvious or visible enough to the viewers.
For example, we found a video on TikTok featuring the creator
playing the role of a doctor diagnosing viewers with a series of
“ADHD tests”. The creator put a reminder in the comment: “I’m not
a doctor, and this video is only for your relaxation” (TikTok comment).
However, there were still viewers seeking professional advice in
comments: “Does it mean I have ADHD if I failed the test?” (TikTok
comment). Low visibility of these reminders or disclaimers can pre￾vent the creators from effectively conveying their intent to viewers,
leading to unnecessary expectations and misunderstanding.
4.2.2 Quality Control via Comments. Besides VSPs and creators,
we also found viewers playing an active role in ADHD content
quality control via comments—a critical space for ADHD viewers.
We elaborate on viewers’ strategies for assessing and improving
ADHD content quality.
Active Engagement in Comments as Viewers with ADHD. We
found that comment-reading during videos was a common behavior
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
for viewers with ADHD, especially under long videos on YouTube,
due to difficulty sustaining attention being a common ADHD symp￾tom [82]. We discovered 30 comments under 19 YouTube videos
mentioned finding themselves reading comments halfway through
a video. Twenty comments explicitly linked this behavior with their
ADHD identity: “Anyone with ADHD knows that during a video they
scroll to the comments” (YouTube comment). One comment detailed
this experience:
“ADHD is like starting to scroll through the comments,
constantly paying attention while also reading com￾ments, and then a comment says something interesting,
and you realize the video is over and [you] literally have
no idea what the video is about” (YouTube comment).
Comments Assessing ADHD Content Quality. Given the im￾portance of comments for viewers with ADHD, comments also
served as an important space for viewers to assess the video quality.
For example, comments under 13 YouTube and 28 TikTok videos
highlighted how the video content differed from their own expe￾riences: “That’s far from what ADHD is! I suffer daily and it ain’t
anything like what you have recorded!” (TikTok comment). Such
comments emphasized the limited (and sometimes misleading) per￾spective of one’s personal experience, reminding viewers not to
hastily associate a particular behavior with ADHD. In other cases,
comments highlighted factual mistakes in six YouTube and three
TikTok videos: “As someone with severe ADHD, this video is NOT
an ADHD test. ADHD is NOT getting mesmerized by cool patterns
and moving colours” (YouTube comment). Such comments served
as important signifiers of potential misleading content, making
viewers more discerning about the video content.
Despite the critical role of comments in video quality assessment,
we recognized that comments could also be a source of misinforma￾tion. For example, some comments expressed ADHD misconcep￾tions under videos sharing personal ADHD experiences: “This is
absolutely bullshit. Stop excusing your laziness!” (TikTok comment).
Comments Supplementing Video Contents. Aside from show￾ing agreement or disagreement, some comments also made efforts
to improve the video content quality. In particular, diverse ADHD
experience sharing via comments helped construct a more holistic
portrayal of ADHD. We found comments under 18.0% of YouTube
and 21.9% of TikTok videos shared alternative or additional per￾spectives that the videos overlooked. For example, under a YouTube
video where the creator described her ADHD experiences as having
a “superpower” (YouTube video), a comment highlighted the more
challenging aspects of ADHD for many individuals:
“ADHD IS a disability... I’m happy that [the creator]
seems happy with their ADHD, but it’s way worse
for some people, and we have a much tougher time”
(YouTube comment).
4.2.3 Perceptual Gaps between ADHD Content Creators and View￾ers. While we found that content creators and viewers collec￾tively contribute to signaling and improving the quality of ADHD￾relevant videos, we also recognized some unique perceptual gaps
between them. Specifically, some creators with high credibility
could be perceived as arrogant by viewers if they lacked ADHD
community understanding. In addition, some quality indicators
proposed by creators might be impractical to the viewers due to
the lack of pointers (e.g., links) to professional resource on VSPs.
Authorities vs. Individuals. Although prior work [86] has
regarded health professional creators as high-quality sources of
content, we noticed some viewers directly criticized ADHD concep￾tualization content (e.g., videos on “What is ADHD?”) with reliable
authorship (e.g., health professionals) as “arrogant” and “dismissive”
(YouTube comment). Such criticism was rooted in the conventional
portrayal of ADHD from an authoritative lens, framing ADHD as
a defect instead of a difference and disregarding the validity of
many coping strategies adopted by individuals [70]. For example,
a comment on YouTube criticized a health professional for their
negative attitude towards the use of stimulants by some individuals
with ADHD:
“The way you presented this is atrocious. You focused re￾ally heavily on the negative aspects, speaking nothing of
the positive affects that give many of us the only chance
to function within normal society... We’re treated like
drug addicts for having ADHD” (YouTube comment).
Perspective differences could lead to a gap in community culture
and understanding between the ADHD viewers and the professional
creators. Such a gap could reduce the usefulness of the creators’
advice, affecting viewers’ general impression of the video and its
creator:“I don’t want to hear one word that they have to say”(YouTube
comment).
Diagnostic Needs vs. MissingResource Pointers.As previously
highlighted, many creators reminded and encouraged viewers to
seek clinical evaluations of ADHD. However, we found creators
rarely offered direct pointers (e.g., links to directories) or guidance
on how to access professional resources. In total, we only identified
four health professionals on YouTube who included links to their
clinics’ websites in their profiles or video descriptions, covering
merely 2.1% of videos. We did not observe any creator-initiated
pointers to professional resources on TikTok. Additionally, neither
of the VSPs offered platform-based resource pointers.
As a result, we found many viewers—especially adults and
women who have been historically marginalized in ADHD—
underscored the lack of access to good clinical diagnostic resources
in comments. We identified comments on 13 YouTube and nine
TikTok videos mentioning the difficulty of finding a healthcare
professional that “actually understands” (TikTok comment). One
YouTube comment specifically complained about the difficulty for
female adults to get an ADHD diagnosis: “I 100% CANNOT find help
or anyone who can diagnose female adults [for ADHD]... Everywhere
I call are not able to help” (YouTube comment).
The gap between an encouragement to seek professional diag￾nosis and a lack of professional resource pointers could make it
challenging for people with diagnostic needs to move forward—a
problem especially critical for the ADHD community due to the
diagnostic challenges faced by the adult and female members. Our
findings highlight an unmet need for clinical diagnosis resource
pointers on video platforms, which could play a crucial role in
guiding viewers through the help-seeking process.
4.2.4 Tensions around ADHD Self-diagnosis. Due to the lack of
accessible clinical resources, some viewers had to self-diagnose as
having ADHD. However, we found ADHD self-diagnosis to be a
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
particularly controversial topic in the ADHD community on VSPs.
We found that some viewers expressed reservation towards the idea
of self-diagnosis, with comments expressing frustration over people
who irresponsibly claimed to have ADHD and conveyed inaccu￾rate ADHD impressions. For example, multiple comments under
a YouTube video discussing video influence on mental disorders
shared their encounters: “[They] claimed to self-diagnose ADHD and
would rub it in everyone’s face... Claiming many insulting stereotypes
about ADHD were true” (YouTube comment).
We recognized that such a reserved attitude towards ADHD
self-diagnosis could help viewers become more aware of the risks
associated with hasty self-diagnosis. For example, we found com￾ments on six YouTube and two TikTok videos stated “I don’t want to
self-diagnose” before sharing how they related to the shared ADHD
experiences in the videos, and two YouTube comments explicitly
expressed that they would never self-diagnose as it “puts [them] in
danger.” However, the negative perception could simultaneously
induce stigma on people who chose to self-diagnose after careful
research: “Unfortunately, I have to self-diagnose myself with ADHD
because I couldn’t get help... People wouldn’t take me seriously if I
come out and say, ‘I’m self-diagnosed.”’ (YouTube comment).
Despite the controversy, we also found VSPs offered a space for
self-diagnosed individuals to advocate for this diagnostic approach.
For example, one YouTube comment shared their improved self￾understanding with self-diagnosis: “I’ve done a lot of research for
my self-diagnosis and I’m happy with where I am now. Getting an
official one won’t really benefit me, but understanding myself does!”
(YouTube comment). VSPs played a critical role in sparking viewers’
self-recognition and guiding further exploration of ADHD, with
19.0% of YouTube and 22.8% of TikTok videos containing comments
that explicitly questioned if they might have ADHD after watching
those videos: “The more I watch these videos, the more convinced I be￾come that I might have ADHD” (YouTube comment). Given the need
for ADHD self-exploration and the significance of VSPs during this
process, our findings underlined the importance of improving con￾tent quality control practices to help viewers make more informed
decisions when navigating ADHD content.
4.3 Video Accessibility for ADHD as a Critical
Factor Affecting Video Quality
Given the unique richness and engaging formats of videos, video
delivery and accessibility become another critical aspect that affects
video quality [66], impacting ADHD viewers’ ability in fully taking
in the video content. We identify four primary aspects that impact
video accessibility for viewers with ADHD, including prolonged
video length, slow pace, distracting sounds and visuals, and missing
or low-quality captions. We explicate each aspect below, alongside
the current practices and barriers.
4.3.1 Video Length. We found comments under 17 YouTube and
two TikTok videos criticized the videos for being too long for view￾ers with ADHD. Compared to the length of the TikTok videos (1.0
± 1.2 minutes) we collected, long videos on YouTube (13.4 ± 22.3
minutes) were much harder to interpret for viewers with ADHD.
For example, under a 2-hour YouTube video on medical information,
40% of comments complained about its length: “Isn’t it ironic? This
will take me a month to get through [this video] with my ADHD”
(YouTube comment). Some comments highlighted their preference
for short videos under a minute: “Videos for people with ADHD that
are 8 minutes long... I am not sitting through them! You helped me
so much with these short videos” (YouTube comment). Among the
17 YouTube videos longer than 30 minutes, 58.8% were talks or
presentations from health professionals, making such professional
content especially inaccessible to people with ADHD.
To make the long videos more accessible, both creators and
viewers made efforts by leveraging platform-enabled features or
manually breaking down the video content.
Video Chapters. We found 27.0% of videos on YouTube used its
video chapter feature (11.6% of videos relied on automatically gen￾erating the chapters), providing a “table of contents” with section
titles and timestamps for easier in-video navigation. A comment
indicated appreciation for this feature: “No way we can finish a
video this long... When you have the chapters, it’s easier” (YouTube
comment). However, organizing videos into chapters could be chal￾lenging for creators with ADHD. We discovered one YouTube video
where a creator showcased multiple ADHD-relevant products and
promised to create chapters based on products. However, only two
products were properly labeled, despite the video featuring over
a dozen. Comments attributed this incomplete effort to the cre￾ator’s ADHD, with one stating: “This is the most ADHD thing ever!”
(YouTube comment).
Community-driven Video Breakdown. Besides the platform￾enabled feature, we also found comments under 12 different
YouTube videos contributed their own breakdowns of the video,
sharing personal notes followed by timestamps directly linked to
the videos. To reduce the amount of content to watch, some com￾ments focused only on key content, such as “actionable items in
video” (YouTube comment). These efforts highlighted the value of
a community-driven approach in making the video content more
accessible.
4.3.2 Distracting Sounds and Visuals. Comments under seven
YouTube and three TikTok videos complained about distracting
auditory or visual elements. For example, under a documentary
on YouTube that depicted the lives of families affected by ADHD,
a comment described the soundtracks behind certain scenes (con￾sisting of multiple sounds overlaid on each other) as “maddening
for someone with ADHD” (YouTube comment). Besides audio, some
comments also expressed a preference for a more simplistic visual
design. For example, under a YouTube video illustrating ADHD
experiences via anime clips, a comment criticized the video design:
“As a person with ADHD, the anime overlays are too distracting. I
would rather see [the creator’s] face or mouth speech patterns because
it helps me focus” (YouTube comment).
Other than elementsin videos, viewers also complained about be￾ing distracted by VSP features such as video recommendations: “It’s
like a disease” (YouTube comment). One YouTube comment described
their desire for an “ADHD mode” interface, with “only a clean screen
with the specific content you’re viewing and no recommended videos”
(YouTube comment).
4.3.3 Slow Pace. Video pace (i.e., how fast a creator speaks and
how long it takes for them to “get to the point”) was shown to
be another factor that could cause accessibility issues for viewers
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
with ADHD. Six YouTube and one TikTok videos received com￾ments complaining about the slow pace of the video. As a comment
mentioned: “An ADHD symptom for me: I struggle with people who
talk slowly... I lose focus quickly if information isn’t given to me at
lightning speed” (YouTube comment).
Interestingly, we discovered that viewers with ADHD could
perceive “fast” differently from neurotypical people. For example,
we found that a health professional giving a talk apologized for
speaking too fast. A commentresponded to this apology:“[He] made
me laugh when he apologized for speaking fast, since I’m watching
this at 1.5x speed. [I] wouldn’t be able to focus or process at a lower
speed” (YouTube comment).
To address this issue, we found that comments under 14 YouTube
and three TikTok videos suggested speeding up the videos to make
them easier to watch. However, we found that speeding up a video
could sometimes cause unintended side effects. As most videos
leveraged a multimodal format, speeding up a video would also
increase the playback rate of visual information, which may cause
further distraction for people with ADHD. We found a YouTube
comment complaining about the distracting effect of speeding up
visual information: “I turned up the speed to 1.5x, but then [the
creator’s] blinking became weird and I focused on that. I had to replay
the video all over” (YouTube comment).
4.3.4 Captions & Subtitles. Echoing prior work [69], we found
comments under one YouTube and three TikTok videos expressing
a preference for captions and subtitles. A comment explained this
need with their challenges in processing speech: “I won’t be able to
understand if there aren’t subtitles. I speak English, but I can barely
hear English—if that makes sense” (TikTok comment).
While current VSPs commonly support auto-generated captions,
we found that caption quality was especially important for viewers
with ADHD. One comment shared how incorrect subtitles could
be distracting: “It drives me insane when [subtitles] are wrong... My
ADHD brain will just hyperfocus on spotting every single mistake”
(TikTok comment).
5 Discussion
Our research has contributed an in-depth examination of long and
short-form ADHD-relevant videos across different video platforms,
uncovering the video quality issues, user strategies, and challenges
via a mixed-method approach. We answered the three research
questions proposed in the Introduction:
For RQ1, we characterized ADHD-relevant videos on YouTube
and TikTok. We uncovered that the two platforms, due to their
different video characteristics, served different purposes but also
posed different video quality and accessibility issues. For example,
longer videos on YouTube, often made by health professionals, could
pose accessibility challenges for ADHD viewers due to length and
pace. In contrast, TikTok videos, with their personal and humorous
styles, rarely contain quality control measures, which can lead to
limited or sometimes misleading perspectives.
RQ2 focused on the creators’ aspect, where we examined their
efforts in proactively indicating content quality through identity
disclosure, attributions, and reminders/disclaimers, alongside the
corresponding issues underlying such strategies (e.g., incomplete
identity disclosure). We also revealed videos’ accessibility issues and
creators’ practices and challenges in improving ADHD accessibility
(e.g., difficulty of creating video chapters as an ADHD creator).
For RQ3, we focused on the viewers’ perspective via comment
analysis, uncovering their reactions to quality and accessibility
issues as well as their strategies and challenges in assessing and
combating these issues as a community, such as questioning the
authoritative sources, providing supplementary information to the
video content, and commenting with video summary and times￾tamps to facilitate accessibility.
5.1 Video Quality Control in the ADHD Context
Our research confirmed that content quality control on social media
is a collective effort across multiple stakeholders [1], including
social media platforms [21, 25], content creators [28], and viewers
[27]. We also recognized video-sharing platforms as important sites
for ADHD communities to validate individual experiences and
support each other, echoing prior work [18, 40].
Beyond insights from prior work, our research highlighted the
unique video quality control challenges encountered by users with
ADHD on VSPs. Compared to conventional social media which
primarily uses text and images to deliver information [94], videos
provide richer information and a higher-level of stimulation [83].
Such a unique characteristic of video could make viewers with
ADHD more inclined to seek interesting and stimulating content:
Nine comments on TikTok specifically mentioned they were going
to “scroll” as they got bored, consistent with the ADHD tendency
of sensation and stimulation seeking [11]. Such a characteristic of
ADHD could reduce the effectiveness of common misinformation
management techniques such as debunking [89], if the presentation
of such content was not well-designed. Furthermore, our findings
also revealed that content posted by health professionals—who
play an important role of debunking health-related misinformation
on VSPs [64]—were usually long and inaccessible to viewers with
ADHD. Such a gap highlighted the importance of tailoring infor￾mation quality-related content to the needs of viewers with ADHD
on VSPs, such as converting misinformation debunking videos to
short-form videos that were more ADHD-friendly. In addition, our
findings revealed that creators’ video quality control practices were
spread across various sections of the platform interface, including
videos, descriptions, comments, and creator profiles. However, as
comments indicated, viewers with ADHD could often be distracted
by the platform’s complex visual layout and high information den￾sity (e.g., recommended videos). These distractions could make it
difficult for viewers to notice important content quality control mes￾sages from creators, such as those included in video descriptions
or creator profiles. This challenge highlighted the need for VSPs
to design ADHD-friendly interfaces that present and prioritize key
video quality control information in a more accessible and visible
manner.
Our research also highlighted the unique needs of viewers with
ADHD in communicating video quality issues. Unlike health con￾tent focusing on illnesses or disorders with clear physicalsymptoms
requiring treatment or correction [42, 87], activists in the ADHD
community—and the broader neurodiverse community to which
it belongs—have been fighting to validate the neurodiverse experi￾ences and celebrate all individuals regardless of their neurological
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
differences [24]. As a result, ADHD communities tend to embrace
a more diverse set of identities regardless of their diagnostic status
[33, 72]. Given the complexity of ADHD community membership,
our findings identified specific challenges encountered by some
ADHD community members in video quality control practices. For
example, as video creators reminded viewers to seek professional
help and refrain from self-diagnosis, the self-diagnosed ADHD
community members (many of whom highlighted their clinical
diagnostic challenges in comments) inevitably had their identities
questioned and stigmatized in the process. The dilemma between
establishing a standard for video quality control and breaking the
existing standard to truly embrace the spirit of neurodiversity move￾ment makes video quality control in the ADHD community a par￾ticularly challenging task. Echoing calls from prior work [18, 70],
we encourage future researchers to privilege community culture
and member identities when investigating ways to carefully assess
and indicate content quality on VSPs for communities like ADHD.
5.2 Towards Safer and ADHD-inclusive VSPs
Based on our findings, we derived design considerations for cre￾ating safer, more trustworthy, and inclusive video platforms for
individuals with ADHD.
Facilitate Video Customizations and Simplification for
ADHD. Our findings highlighted the challengesthat ADHD viewers
face during video watching, including having difficulties reducing
visual/audio distractions and getting distracted by accelerated vi￾suals when speeding up videos. This finding highlighted the need
for future research to investigate video customization techniques
for ADHD viewers. For example, computer vision technologies
could be used to recognize and segment the visual information in
videos (e.g., using object detection models [35] to recognize the
speaker and the presentation screens), and simplify a video with
distracting visual components (e.g., removing distracting anime
overlays with video inpainting techniques [16]). Emerging video
summarization models [4] also have the potential to shorten long
videos into more concise and fast-paced video clips based on ADHD
viewers’ needs, as an alternative solution to speeding up videos.
As over-simplification might lead to inconsistent information gain
across viewers, we also encourage future research to consider how
to mitigate such inconsistencies. For example, VLM models [45]
could provide a summary of the hidden video content for viewers
to review at the end.
Leverage Community-driven Quality Control Efforts. Our
findings revealed the collective efforts across VSPs, creators, and
viewers in quality (and accessibility) control and improvement for
ADHD-relevant videos. For example, many ADHD viewers lever￾aged comments to share alternative experiences that supplemented
or challenged video content and added personal video breakdowns
to make video presentations more accessible. Future research should
consider how to better leverage such collective efforts to monitor
and enhance video content quality and accessibility. For example,
VSPs could provide a collective quality review feature, using LLM
models [30] to recognize and summarize comments and label video
quality (e.g., flag a video if a large number of comments challenged
the video content), orsupplement the video content by adding differ￾ent opinions from comments. Interaction techniques on how to best
present this supplementary information without distracting ADHD
viewers would also be a critical open question. More importantly,
our findings indicated that comments could also include misleading
or harmful information. To alleviate this issue, AI summarization
technology should also consider how to better distinguish and com￾bat misinformation, for example, by gauging diverse perspectives
(e.g., examining sub-level comments that deepen the discussion)
and comprehensively presenting different opinions.
Reduce ADHD Efforts in Creative Work. Our findings identi￾fied the large proportion of creators with ADHD on VSPs sharing
ADHD-relevant content and uncovered their challenges in taking
extra steps to make their videos more credible and accessible (e.g.,
adding video chapters). More research is needed to enable a more
streamlined and accessible content creation process for creators
with ADHD. Current AI technology has the potential to automate
many quality control efforts for creators. For example, video un￾derstanding models [12] combined with LLMs could recognize the
video content and generate automatic disclaimers (e.g., “This video
is my personal experience only”), automatically extract and display
creators’ identity information (e.g., health professional in a specific
field) from the video for higher visibility if they didn’t disclose it
explicitly in their profiles, or add video chapters and summaries
automatically based on creator-specified prompts. Despite the po￾tential, we recognize the risk of AI hallucination [30] and encourage
future researchers to incorporate suitable techniques to reduce the
impact caused by this issue, such as adding reminders of AI risks
or enabling easy human verification.
5.3 Limitations & Future Work
Our research has limitations. Firstly, our work analyzed the experi￾ences and perceptions of viewers with ADHD on VSPs via comment
analysis, a method commonly used by prior literature for commu￾nity understanding [26, 56]. Nonetheless, we recognized the risks
associated with this method, such as difficulty verifying the ADHD
identities of the commenters. Despite the risks, we found value in
analyzing the comment data, which comes from an anonymous
and non-study setting. Such anonymity could afford a stronger
inclination for self-disclosure [47] and more involved expressions
[17], which are critical for uncovering the tension between users of
different backgrounds and perspectives in ADHD communities (e.g.,
how viewers with ADHD questioned the authority of the creator).
Leveraging the large-scale comment data, our work was also able to
identify patterns of common challenges experienced by viewers of
ADHD-relevant videos, and provide high-level pointers for future
researchers to explore in depth (e.g., how to better support active
ADHD help-seeking via VSPs). In future work, more empirical
studies are needed to engage content creators and ADHD viewers
directly to collect richer data that dives deep into users’ personal
experiences and choices. Moreover, our work lacked health expert
inputs when discussing quality issues of health information. Future
work could gauge perspectives from both the medical and ADHD
communities for a more holistic analysis.
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
6 Conclusion
Our work contributed the first in-depth characterization and analy￾sis of ADHD-relevant content on different VSPs. By carefully analyz￾ing 373 videos and the corresponding comments, we characterized
the unique creator demographics, content covered and presentation
forms on each platform, identified the collective content quality
control efforts and tensions across different user groups, and high￾lighted video accessibility issues for viewers with ADHD on each
platform. Building on these insights, we proposed design guidelines
on how VSPs could improve ADHD-relevant video sharing experi￾ences to create a safer and more inclusive online environment for
the ADHD community.
Acknowledgments
This work was partially supported by the University of Wiscon￾sin—Madison Office of the Vice Chancellor for Research and Grad￾uate Education with funding from the Wisconsin Alumni Research
Foundation.
References
[1] Eugene Agichtein, Carlos Castillo, Debora Donato, Aristides Gionis, and Gilad
Mishne. 2008. Finding high-quality content in social media. In Proceedings of the
2008 international conference on web search and data mining. 183–194.
[2] Jessica C. Agnew-Blais, Guilherme V. Polanczyk, Andrea Danese, Jasmin Wertz,
Terrie E. Moffitt, and Louise Arseneault. 2016. Evaluation of the Persistence,
Remission, and Emergence of Attention-Deficit/Hyperactivity Disorder in Young
Adulthood. JAMA Psychiatry 73, 7 (July 2016), 713. doi:10.1001/jamapsychiatry.
2016.0465
[3] Wasim Ahmed, Peter A. Bath, Laura Sbaffi, and Gianluca Demartini. 2019. Novel
insights into views towards H1N1 during the 2009 Pandemic: a thematic analysis
of Twitter data. Health Information &amp; Libraries Journal 36, 1 (Jan. 2019),
60–72. doi:10.1111/hir.12247
[4] Toqa Alaa, Ahmad Mongy, Assem Bakr, Mariam Diab, and Walid Gomaa. 2024.
Video Summarization Techniques: A Comprehensive Review. doi:10.48550/
ARXIV.2410.04449
[5] Jon-Patrick Allem, Emilio Ferrara, Sree Priyanka Uppu, Tess Boley Cruz, and
Jennifer B Unger. 2017. E-Cigarette Surveillance With Social Media Data: Social
Bots, Emerging Topics, and Trends. JMIR Public Health and Surveillance 3, 4 (Dec.
2017), e98. doi:10.2196/publichealth.8641
[6] Katie Elson Anderson. 2020. Getting acquainted with social networks and apps:
it is time to talk about TikTok. Library Hi Tech News 37, 4 (Feb. 2020), 7–12.
doi:10.1108/lhtn-01-2020-0001
[7] Cecilie Schou Andreassen, Joël Billieux, Mark D. Griffiths, Daria J. Kuss, Zsolt
Demetrovics, Elvis Mazzoni, and Ståle Pallesen. 2016. The relationship between
addictive use of social media and video games and symptoms of psychiatric
disorders: A large-scale cross-sectional study. Psychology of Addictive Behaviors
30, 2 (March 2016), 252–262. doi:10.1037/adb0000160
[8] Darby E. Attoe and Emma A. Climie. 2023. Miss. Diagnosis: A Systematic Review
of ADHD in Adult Women. Journal of Attention Disorders 27, 7 (March 2023),
645–657. doi:10.1177/10870547231161533
[9] Samy A Azer. 2020. Are DISCERN and JAMA suitable instruments for assessing
YouTube videos on thyroid cancer? Methodological concerns. J. Cancer Educ. 35,
6 (Dec. 2020), 1267–1277.
[10] C. H. Basch, P. Zybert, R. Reeves, and C. E. Basch. 2017. What do popular
YouTubeTM videos say about vaccines? Child: Care, Health and Development 43,
4 (Jan. 2017), 499–503. doi:10.1111/cch.12442
[11] Loredana Benedetto and Massimo Ingrassia. 2019. Problematic internet use
and sensation seeking in adults with ADHD symptoms. Journal of Clinical &
Developmental Psychology 1, 1 (2019).
[12] Gedas Bertasius, Heng Wang, and Lorenzo Torresani. 2021. Is Space-Time Atten￾tion All You Need for Video Understanding? doi:10.48550/ARXIV.2102.05095
[13] T C Biggs, J H Bird, P G Harries, and R J Salib. 2013. YouTube as a source of infor￾mation on rhinosinusitis: the good, the bad and the ugly. The Journal of Laryngol￾ogy &amp; Otology 127, 8 (July 2013), 749–754. doi:10.1017/s0022215113001473
[14] Virginia Braun and Victoria Clarke. 2022. Toward good practice in thematic
analysis: Avoiding common problems and be(com)ing aknowingresearcher. In￾ternational Journal of Transgender Health 24, 1 (Oct. 2022), 1–6. doi:10.1080/
26895269.2022.2129597
[15] Katrin Bruchmüller, Jürgen Margraf, and Silvia Schneider. 2012. Is ADHD diag￾nosed in accord with diagnostic criteria? Overdiagnosis and influence of client
gender on diagnosis. Journal of Consulting and Clinical Psychology 80, 1 (2012),
128–138. doi:10.1037/a0026582
[16] Ya-Liang Chang, Zhe Yu Liu, and Winston Hsu. 2019. Vornet: Spatio-temporally
consistent video inpainting for object removal. In Proceedings of the IEEE/CVF
conference on computer vision and pattern recognition workshops. 0–0.
[17] Munmun De Choudhury and Sushovan De. 2014. Mental health discourse on
reddit: Self-disclosure, social support, and anonymity. In Proceedings of the inter￾national AAAI conference on web and social media, Vol. 8. 71–80.
[18] Tessa Eagle and Kathryn E. Ringland. 2023. “You Can’t Possibly Have ADHD”: Ex￾ploring Validation and Tensions around Diagnosis within Unbounded ADHD So￾cial Media Communities. In Proceedings of the 25th International ACM SIGACCESS
Conference on Computers and Accessibility (<conf-loc>, <city>New York</city>,
<state>NY</state>, <country>USA</country>, </conf-loc>) (ASSETS ’23). As￾sociation for Computing Machinery, New York, NY, USA, Article 29, 17 pages.
doi:10.1145/3597638.3608400
[19] Elia Gabarron, Sunday Oluwafemi Oyeyemi, and Rolf Wynn. 2021. COVID-19-
related misinformation on social media: a systematic review. Bulletin of the World
Health Organization 99, 6 (March 2021), 455–463A. doi:10.2471/blt.20.276782
[20] Amy Gajaria, Emanuela Yeung, Tara Goodale, and Alice Charach. 2011. Beliefs
About Attention-Deficit/Hyperactivity Disorder and Response to Stereotypes:
Youth Postings in Facebook Groups. Journal of Adolescent Health 49, 1 (July 2011),
15–20. doi:10.1016/j.jadohealth.2010.09.004
[21] Tarleton Gillespie. 2018. Custodians of the Internet: Platforms, content moderation,
and the hidden decisions that shape social media. Yale University Press.
[22] R. Gilmore, J. Beezhold, V. Selwyn, R. Howard, I. Bartolome, and N. Henderson.
2022. Is TikTok increasing the number of self-diagnoses of ADHD in young
people? European Psychiatry 65, S1 (2022). doi:10.1192/j.eurpsy.2022.1463
[23] Ylva Ginsberg, Javier Quintero, Ernie Anand, Marta Casillas, and Himanshu P.
Upadhyaya. 2014. Underdiagnosis of Attention-Deficit/Hyperactivity Disorder
in Adult Patients: A Review of the Literature. The Primary Care Companion For
CNS Disorders (June 2014). doi:10.4088/pcc.13r01600
[24] Steve Graby. 2015. Neurodiversity: bridging the gap between the disabled people’s
movement and the mental health system survivors’ movement? Policy Press,
231–244.
[25] Anatoliy Gruzd, Felipe Bonow Soares, and Philip Mai. 2023. Trust and safety on
social media: understanding the impact of anti-social behavior and misinforma￾tion on content moderation and platform governance. Social Media+ Society 9, 3
(2023), 20563051231196878.
[26] Karen AE Hall, Blanca Deusdad, Manuel D’Hers Del Pozo, and Ángel Martínez￾Hernáez. 2022. How did people with functional disability experience the first
COVID-19 lockdown? A thematic analysis of YouTube comments. International
journal of environmental research and public health 19, 17 (2022), 10550.
[27] Bing He, Yibo Hu, Yeon-Chang Lee, Soyoung Oh, Gaurav Verma, and Srijan
Kumar. 2025. A survey on the role of crowds in combating online misinformation:
Annotators, evaluators, and creators. ACM Transactions on Knowledge Discovery
from Data 19, 1 (2025), 1–30.
[28] Dan Hiaeshutter-Rice, Sedona Chinn, and Kaiping Chen. 2021. Platform effects
on alternative influencer content: Understanding how audiences and channels
shape misinformation online. Frontiers in Political Science 3 (2021), 642394.
[29] Mira Elise Glaser Holthe and Eva Langvik. 2017. The strives, struggles, and
successes of women diagnosed with ADHD as adults. SAGE Open 7, 1 (Jan. 2017),
215824401770179.
[30] Ziwei Ji, Tiezheng Yu, Yan Xu, Nayeon Lee, Etsuko Ishii, and Pascale Fung.
2023. Towards Mitigating LLM Hallucination via Self Reflection. In EMNLP ’23.
doi:10.18653/v1/2023.findings-emnlp.123
[31] Lucy Jiang, Woojin Ko, Shirley Yuan, Tanisha Shende, and Shiri Azenkot. 2025.
Shifting the Focus: Exploring Video Accessibility Strategies and Challenges for
People with ADHD. In Proceedings of the 2025 CHI Conference on Human Factors
in Computing Systems (CHI ’25). Association for Computing Machinery, New
York, NY, USA, Article 561, 16 pages. doi:10.1145/3706598.3713637
[32] Seok Kang, Jae-Sik Ha, and Teresa Velasco. 2016. Attention Deficit Hyperactivity
Disorder on YouTube: Framing, Anchoring, and Objectification in Social Media.
Community Mental Health Journal 53, 4 (May 2016), 445–451. doi:10.1007/s10597-
016-0015-5
[33] Luise Kazda, Katy Bell, Rae Thomas, Leah Hardiman, Iona Heath, and Alexandra
Barratt. 2024. Attention deficit/hyperactivity disorder (ADHD) in children: more
focus on care and support, less on diagnosis. bmj 384 (2024).
[34] Clive Anthony Kelly, Carolyn Kelly, and Rachael Taylor. 2024. Review of the
Psychosocial Consequences of Attention Deficit Hyperactivity Disorder (ADHD)
in Females. European Journal of Medical and Health Sciences 6, 1 (Feb. 2024),
10–20. doi:10.24018/ejmed.2024.6.1.2033
[35] Rahima Khanam and Muhammad Hussain. 2024. Yolov11: An overview of the
key architectural enhancements. arXiv preprint arXiv:2410.17725 (2024).
[36] Aida Komkaite, Liga Lavrinovica, Maria Vraka, and Mikael B. Skov. 2019. Under￾neath the Skin: An Analysis of YouTube Videos to Understand Insertable Device
Interaction. In CHI ’19 (Glasgow, Scotland Uk). doi:10.1145/3290605.3300444
ASSETS ’25, October 26–29, 2025, Denver, CO, USA Zhu et al.
[37] Hirotaka Kosaka, Toru Fujioka, and Minyoung Jung. 2018. Symptoms in in￾dividuals with adult-onset ADHD are masked during childhood. European
Archives of Psychiatry and Clinical Neuroscience 269, 6 (April 2018), 753–755.
doi:10.1007/s00406-018-0893-3
[38] Maurice W. Laufer and Eric Denhoff. 1957. Hyperkinetic behavior syndrome
in children. The Journal of Pediatrics 50, 4 (1957), 463–474. doi:10.1016/S0022-
3476(57)80257-1
[39] Grace J Lee, Kyra Fife, Lyndsey Fought, Tiffany Fowler, and Julie Suhr. 2023. 35 So￾cial Media Use Relates to Beliefs about Attention-Deficit/Hyperactivity Disorder
(ADHD) Among Emerging Adults. Journal of the International Neuropsychological
Society 29, s1 (Nov. 2023), 642–643. doi:10.1017/s135561772300810x
[40] Abigail D. Leveille. 2024. “Tell Me You Have ADHD Without Telling Me You
Have ADHD”: Neurodivergent Identity Performance on TikTok. Social Media +
Society 10, 3 (July 2024). doi:10.1177/20563051241269260
[41] Haitao Li, Xu Cheng, and Jiangchuan Liu. 2014. Understanding Video Shar￾ing Propagation in Social Networks: Measurement and Analysis. ACM Trans.
Multimedia Comput. Commun. Appl. 10, 4, Article 33 (jul 2014), 20 pages.
doi:10.1145/2594440
[42] Heidi Oi-Yee Li, Elena Pastukhova, Olivier Brandts-Longtin, Marcus G Tan, and
Mark G Kirchhof. 2022. YouTube as a source of misinformation on COVID-19
vaccination: a systematic analysis. BMJ global health 7, 3 (2022), e008334.
[43] Kai Li, Cheng Zhou, Xin (Robert) Luo, Jose Benitez, and Qinyu Liao. 2022.
Impact of information timeliness and richness on public engagement on so￾cial media during COVID-19 pandemic: An empirical investigation based on
NLP and machine learning. Decision Support Systems 162 (Nov. 2022), 113752.
doi:10.1016/j.dss.2022.113752
[44] Chen Ling, Krishna P. Gummadi, and Savvas Zannettou. 2023. “Learn the Facts
about COVID-19”: Analyzing the Use of Warning Labels on TikTok Videos.
ICWSM ’23 17 (June 2023), 554–565. doi:10.1609/icwsm.v17i1.22168
[45] Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee. 2024. Visual instruc￾tion tuning. NeurIPS ’24 (2024).
[46] Lorenzo Lorenzo-Luaces, Clare Dierckman, and Sydney Adams. 2023. Attitudes
and (Mis)information About Cognitive Behavioral Therapy on TikTok: An Anal￾ysis of Video Content. Journal of Medical Internet Research 25 (March 2023),
e45571. doi:10.2196/45571
[47] Xiao Ma, Jeff Hancock, and Mor Naaman. 2016. Anonymity, intimacy and self￾disclosure in social media. In Proceedings of the 2016 CHI conference on human
factors in computing systems. 3857–3869.
[48] Kapil Chalil Madathil, A Joy Rivera-Rodriguez, Joel S Greenstein, and Anand K
Gramopadhye. 2014. Healthcare information on YouTube: A systematic re￾view. Health Informatics Journal 21, 3 (March 2014), 173–194. doi:10.1177/
1460458213512220
[49] Victoria McDermott. 2022. “Tell Me Something You Didn’t Know Was
Neurodivergence-Related Until Recently. I’ll Start”: TikTok as a Public Sphere for
Destigmatizing Neurodivergence. IGI Global, 127–147. doi:10.4018/978-1-6684-
5103-8.ch007
[50] Emma J McDonnell, Tessa Eagle, Pitch Sinlapanuntakul, Soo Hyun Moon,
Kathryn E. Ringland, Jon E. Froehlich, and Leah Findlater. 2024. “Caption It in an
Accessible Way That Is Also Enjoyable”: Characterizing User-Driven Captioning
Practices on TikTok. In Proceedings of the CHI Conference on Human Factors in
Computing Systems (Honolulu, HI, USA) (CHI ’24). Association for Computing Ma￾chinery, New York, NY, USA, Article 492, 16 pages. doi:10.1145/3613904.3642177
[51] Julia Morgan. 2023. Exploring women’s experiences of diagnosis of ADHD in
adulthood: a qualitative study. Advances in Mental Health (Oct. 2023), 1–15.
doi:10.1080/18387357.2023.2268756
[52] Simon M Mueller, Pierre Jungo, Lucian Cajacob, Simon Schwegler, Peter Itin,
and Oliver Brandt. 2019. The Absence of Evidence is Evidence of Non-Sense:
Cross-Sectional Study on the Quality of Psoriasis-Related Videos on YouTube
and Their Reception by Health Seekers. Journal of Medical Internet Research 21,
1 (Jan. 2019), e11935. doi:10.2196/11935
[53] Jeffrey H. Newcorn, Margaret Weiss, and Mark A. Stein. 2007. The Complexity
of ADHD: Diagnosis and Treatment of the Adult Patient With Comorbidities.
CNS Spectrums 12, S12 (2007), 1–16. doi:10.1017/s1092852900026158
[54] Sanne W. C. Nikkelen, Patti M. Valkenburg, Mariette Huizinga, and Brad J.
Bushman. 2014. Media use and ADHD-related behaviors in children and ado￾lescents: A meta-analysis. Developmental psychology 50 9 (2014), 2228–41.
https://api.semanticscholar.org/CorpusID:15418721
[55] Shuo Niu, Zhicong Lu, Amy X. Zhang, Jie Cai, Carla F. Griggio, and Hendrik
Heuer. 2023. Building Credibility, Trust, and Safety on Video-Sharing Platforms.
In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing
Systems (Hamburg, Germany) (CHI EA ’23). Association for Computing Machin￾ery, New York, NY, USA, Article 337, 7 pages. doi:10.1145/3544549.3573809
[56] Shuo Niu, Katherine G. McKim, and Kathleen Palm Reed. 2022. Education,
Personal Experiences, and Advocacy: Examining Drug-Addiction Videos on
YouTube. Proc. ACM Hum.-Comput. Interact. 6, CSCW2, Article 511 (Nov. 2022),
28 pages. doi:10.1145/3555624
[57] M Q Patton. 1999. Enhancing the quality and credibility of qualitative analysis.
Health Serv. Res. 34, 5 Pt 2 (Dec. 1999), 1189–1208.
[58] Manjiri Pawaskar, Moshe Fridman, Regina Grebla, and Manisha Madhoo. 2019.
Comparison of Quality of Life, Productivity, Functioning and Self-Esteem in
Adults Diagnosed With ADHD and With Symptomatic ADHD. Journal of Atten￾tion Disorders 24, 1 (May 2019), 136–144. doi:10.1177/1087054719841129
[59] Pew Research Center. 2024. Americans’ Social Media Use. Technical Report. https:
//www.pewresearch.org/internet/2024/01/31/americans-social-media-use/
[60] Rafael A. Rivas-Vazquez, Samantha G. Diaz, Melina M. Visser, and Ana A. Rivas￾Vazquez. 2023. Adult ADHD: Underdiagnosis of a Treatable Condition. Journal of
Health Service Psychology 1 (Jan. 2023), 11–19. doi:10.1007/s42843-023-00077-w
[61] Nader Salari, Hooman Ghasemi, Nasrin Abdoli, Adibeh Rahmani, Moham￾mad Hossain Shiri, Amir Hossein Hashemian, Hakimeh Akbari, and Masoud
Mohammadi. 2023. The global prevalence of ADHD in children and adolescents:
a systematic review and meta-analysis. Italian Journal of Pediatrics 49, 1 (April
2023). doi:10.1186/s13052-023-01456-1
[62] Anastasia Schaadhardt, Yue Fu, Cory Gennari Pratt, and Wanda Pratt. 2023.
“Laughing so I don’t cry”: How TikTok users employ humor and compassion
to connect around psychiatric hospitalization. In Proceedings of the 2023 CHI
Conference on Human Factors in Computing Systems (Hamburg, Germany) (CHI
’23). Association for Computing Machinery, New York, NY, USA, Article 338,
13 pages. doi:10.1145/3544548.3581559
[63] Ana Lucía Schmidt, Fabiana Zollo, Antonio Scala, Cornelia Betsch, and Walter
Quattrociocchi. 2018. Polarization of the vaccination debate on Facebook. Vaccine
36, 25 (June 2018), 3606–3612. doi:10.1016/j.vaccine.2018.05.040
[64] Filipo Sharevski, Jennifer Vander Loop, Peter Jachim, Amy Devine, and Sanchari
Das. 2024. ’Debunk-It-Yourself’: Health Professionals Strategies for Responding
to Misinformation on TikTok. In Proceedings of the New Security Paradigms
Workshop. 35–55.
[65] Yu Shi, Lindsay R. Hunter Guevara, Hayley J. Dykhoff, Lindsey R. Sangar￾alingham, Sean Phelan, Michael J. Zaccariello, and David O. Warner. 2021.
Racial Disparities in Diagnosis of Attention-Deficit/Hyperactivity Disorder in
a US National Birth Cohort. JAMA Network Open 4, 3 (March 2021), e210321.
doi:10.1001/jamanetworkopen.2021.0321
[66] Sarah J. Shoemaker, Michael S. Wolf, and Cindy Brach. 2014. Development of
the Patient Education Materials Assessment Tool (PEMAT): A new measure of
understandability and actionability for print and audiovisual patient information.
Patient Education and Counseling 96, 3 (Sept. 2014), 395–403. doi:10.1016/j.pec.
2014.05.027
[67] William M. Silberg. 1997. Assessing, Controlling, and Assuring the Quality of
Medical Information on the Internet: Caveant Lector et Viewor—Let the Reader
and Viewer Beware. JAMA 277, 15 (April 1997), 1244. doi:10.1001/jama.1997.
03540390074039
[68] Viktória Simon, Pál Czobor, Sára Bálint, Ágnes Mészáros, and István Bitter. 2009.
Prevalence and correlates of adult attention-deficit hyperactivity disorder: meta￾analysis. The British Journal of Psychiatry 194, 3 (2009), 204–211. doi:10.1192/bjp.
bp.107.048827
[69] Ellen Simpson, Samantha Dalal, and Bryan Semaan. 2023. "Hey, Can You Add
Captions?": The Critical Infrastructuring Practices of Neurodiverse People on
TikTok. Proc. ACM Hum.-Comput. Interact. 7, CSCW1, Article 57 (apr 2023),
27 pages. doi:10.1145/3579490
[70] Katta Spiel, Eva Hornecker, Rua Mae Williams, and Judith Good. 2022. ADHD
and Technology Research – Investigated by Neurodivergent Readers. CHI ’22
547 (April 2022), 1–21. https://doi.org/10.1145/3491102.3517592
[71] Isabella Starvaggi, Clare Dierckman, and Lorenzo Lorenzo-Luaces. 2024. Mental
health misinformation on social media: Review and future directions. Current
Opinion in Psychology 56 (April 2024), 101738. doi:10.1016/j.copsyc.2023.101738
[72] Paul Stenner, Lindsay O’Dell, and Alison Davies. 2019. Adult women and ADHD:
On the temporal dimensions of ADHD identities. Journal for the Theory of Social
Behaviour 49, 2 (2019), 179–197.
[73] Victor Suarez-Lledo and Javier Alvarez-Galvez. 2021. Prevalence of Health
Misinformation on Social Media: Systematic Review. Journal of Medical Internet
Research 23, 1 (Jan. 2021), e17187. doi:10.2196/17187
[74] Christopher J Thang, David Garate, Joseph Thang, Jules B Lipoff, and John S
Barbieri. 2023. Short-Form Medical Media: A Multi-Platform Analysis of Acne
Treatment Information in TikTok Videos, Instagram Reels, and YouTube Shorts.
JMIR Dermatology 6 (Aug. 2023), e48140. doi:10.2196/48140
[75] Pratikshya Thapa, Ashish Thapa, Nabina Khadka, Ruchi Bhattarai, Samir Jha,
Amit Khanal, and Bibhusan Basnet. 2018. YouTube lens to attention deficit
hyperactivity disorder: A Social Media Analysis. BMC Research Notes 11, 1 (2018).
doi:10.1186/s13104-018-3962-9
[76] Mike Thelwall, Meiko Makita, Amalia Mas-Bleda, and Emma Stuart. 2020. “My
ADHD Hellbrain”: A Twitter Data Science Perspective on a Behavioural Disorder.
Journal of Data and Information Science 6, 1 (Dec. 2020), 13–34. doi:10.2478/jdis-
2021-0007
[77] Chau Tong, Drew Margolin, Rumi Chunara, Jeff Niederdeppe, Teairah Taylor,
Natalie Dunbar, and Andy J King. 2022. Search Term Identification Methods for
Computational Health Communication: Word Embedding andNetworkApproach
for Health Content on YouTube. JMIR Medical Informatics 10, 8 (Aug. 2022),
e37862. doi:10.2196/37862
ADHD Content Characteristics & Quality on Video Sharing Platforms ASSETS ’25, October 26–29, 2025, Denver, CO, USA
[78] Roberta Waite and J. Russell Ramsay. 2009. Cultural Proficiency: A Hispanic
Woman With ADHD—A Case Example. Journal of Attention Disorders 13, 4 (May
2009), 424–432. doi:10.1177/1087054709332393
[79] Yihe Wang and Kathryn E. Ringland. 2023. Weaving Autistic Voices on TikTok:
Utilizing Co-Hashtag Networks for Netnography. In CSCW ’23 Companion. doi:10.
1145/3584931.3606995
[80] C. Watters, D. Adamis, F. McNicholas, and B. Gavin. 2017. The impact of attention
deficit hyperactivity disorder (ADHD) in adulthood: a qualitative study. Irish
Journal of Psychological Medicine 35, 3 (June 2017), 173–179. doi:10.1017/ipm.
2017.21
[81] Anna Maria Werling, Susanne Walitza, and Renate Drechsler. 2021. Impact of the
COVID-19 lockdown on screen media use in patients referred for ADHD to child
and adolescent psychiatry: an introduction to problematic use of the internet in
ADHD and results of a survey. Journal of Neural Transmission 128, 7 (April 2021),
1033–1043. doi:10.1007/s00702-021-02332-0
[82] Timothy E Wilens and Thomas J Spencer. 2010. Understanding attention￾deficit/hyperactivity disorder from childhood to adulthood. Postgrad. Med. 122, 5
(Sept. 2010), 97–109.
[83] Chloe Wittenberg, Ben M. Tappin, Adam J. Berinsky, and David G. Rand. 2021.
The (minimal) persuasive advantage of political video over text. Proceedings of the
National Academy of Sciences 118, 47 (Nov. 2021). doi:10.1073/pnas.2114388118
[84] Yi Xu, Jiahe Wang, and Mengyuan Ma. 2023. Adapting to lockdown: Explor￾ing stress coping strategies on short video social media during the COVID-19
pandemic. Psychol. Res. Behav. Manag. 16 (Dec. 2023), 5273–5287.
[85] Qinghua Yang, Angeline Sangalang, Molly Rooney, Erin Maloney, Sherry Emery,
and Joseph N. Cappella. 2018. How Is Marijuana Vaping Portrayed on YouTube?
Content, Features, Popularity and Retransmission of Vaping Marijuana YouTube
Videos. Journal of Health Communication 23, 4 (March 2018), 360–369. doi:10.
1080/10810730.2018.1448488
[86] Anthony Yeung, Enoch Ng, and Elia Abi-Jaoude. 2022. TikTok and attention￾deficit/hyperactivity disorder: A cross-sectional study of social media content
quality. The Canadian Journal of Psychiatry 67, 12 (2022), 899–906. doi:10.1177/
07067437221082854
[87] Ho Young Yoon, Kyung Han You, Jung Hye Kwon, Jung Sun Kim, Sun Young
Rha, Yoon Jung Chang, and Sang-Cheol Lee. 2022. Understanding the social
mechanism of cancer misinformation spread on YouTube and lessons learned:
infodemiological study. Journal of medical Internet research 24, 11 (2022), e39571.
[88] Susan Young, Nicoletta Adamo, Bryndís Björk Ásgeirsdóttir, Polly Branney,
Michelle Beckett, William Colley, Sally Cubbin, Quinton Deeley, Emad Farrag,
Gisli Gudjonsson, Peter Hill, Jack Hollingdale, Ozge Kilic, Tony Lloyd, Peter Ma￾son, Eleni Paliokosta, Sri Perecherla, Jane Sedgwick, Caroline Skirrow, Kevin Tier￾ney, Kobus van Rensburg, and Emma Woodhouse. 2020. Females with ADHD: An
expert consensusstatement taking a lifespan approach providing guidance for the
identification and treatment of attention-deficit/ hyperactivity disorder in girls
and women. BMC Psychiatry 20, 1 (Aug. 2020). doi:10.1186/s12888-020-02707-9
[89] Hamza Yousuf, Sander van der Linden, Luke Bredius, GA Ted van Essen, Govert
Sweep, Zohar Preminger, Eric van Gorp, Erik Scherder, Jagat Narula, and Leonard
Hofstra. 2021. A media intervention applying debunking versus non-debunking
content to combat vaccine misinformation in elderly in the Netherlands: A digital
randomised trial. EClinicalMedicine 35 (2021).
[90] YouTube. n.d.. Navigating YouTube Search – How YouTube Works. https://www.
youtube.com/intl/en_be/howyoutubeworks/product-features/search/. https:
//www.youtube.com/intl/en_be/howyoutubeworks/product-features/search/ Ac￾cessed: 2025-06-25.
[91] Marco Zenone, Nikki Ow, and Skye Barbic. 2021. TikTok and public health:
a proposed research agenda. BMJ Global Health 6, 11 (Nov. 2021), e007648.
doi:10.1136/bmjgh-2021-007648
[92] Alice Qian Zhang, Ashlee Milton, and Stevie Chancellor. 2023. #Pragmatic or
#Clinical: Analyzing TikTok Mental Health Videos. In Companion Publication of
the 2023 Conference on Computer Supported Cooperative Work and Social Comput￾ing (Minneapolis, MN, USA) (CSCW ’23 Companion). Association for Computing
Machinery, New York, NY, USA, 149–153. doi:10.1145/3584931.3607013
[93] Xin Zhao, Timothy Hayes, Adela C. Timmons, Wensong Wu, and Stacy L. Frazier.
2023. Unpacking Inequities in ADHD Diagnosis: Examining Individual-Level
Race/Ethnicity and State-Level Online Information-Seeking Patterns. Admin￾istration and Policy in Mental Health and Mental Health Services Research 50, 4
(March 2023), 576–590. doi:10.1007/s10488-023-01259-w
[94] Ziyuan Zhao, Huiying Zhu, Zehao Xue, Zhao Liu, Jing Tian, Matthew Chin Heng
Chua, and Maofu Liu. 2019. An image-text consistency driven multimodal senti￾ment analysis approach for social media. Information Processing & Management
56, 6 (2019), 102097.
