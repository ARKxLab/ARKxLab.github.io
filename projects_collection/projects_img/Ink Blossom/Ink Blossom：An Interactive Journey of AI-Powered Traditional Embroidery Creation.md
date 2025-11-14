Ink Blossom: An Interactive Journey of AI-Powered Traditional
Embroidery Creation
Jiawen Zhang
the Hong Kong University of Science
and Technology(Guangzhou)
Guangzhou, Guangdong, China
jzhang731@connect.hkust-gz.edu.cn
Mingyu Chen
the Hong Kong University of Science
and Technology(Guangzhou)
Guangzhou, Guangdong, China
mingyuchen@hkust-gz.edu.cn
Jiaqi Shi
the Hong Kong University of Science
and Technology(Guangzhou)
Guangzhou, Guangdong, China
jshi144@connect.hkust-gz.edu.cn
Xin Tong
the Hong Kong University of Science
and Technology(Guangzhou)
Guangzhou, Guangdong, China
xint@hkust-gz.edu.cn
Kang Zhang∗
the Hong Kong University of Science
and Technology(Guangzhou)
Guangzhou, Guangdong, China
kzhangcma@hkust-gz.edu.cn
Abstract
Ink Blossom is an interactive installation combining generative AI
with the intangible cultural heritage of traditional ethnic embroi￾dery from China. Integrating a tangible wooden embroidery frame
with a dynamic digital canvas, the project invites participants to
co-create with AI in real-time, transforming hand-drawn sketches
into authentic embroidery designs. Utilizing custom-trained LoRA
models, the system preserves the distinct visual languages of Miao
and Qiang embroidery, allowing users to creatively engage with tra￾ditional forms. Participant feedback reveals that generative AI deep￾ens their personal connections with these ancient crafts, proposing
an innovative collaborative future for the preservation of intangible
cultural heritage.
CCS Concepts
• Human-centered computing → Interactive systems and
tools; • Social and professional topics → Cultural characteristics;
• Applied computing → Arts and humanities.
Keywords
Intangible Cultural Heritage, Generative AI, Ethnic Embroidery,
Interactive Installation, Human-AI Co-creation
ACM Reference Format:
Jiawen Zhang, Mingyu Chen, Jiaqi Shi, Xin Tong, and Kang Zhang. 2025.
Ink Blossom: An Interactive Journey of AI-Powered Traditional Embroidery
Creation. In Proceedings of The 18th International Symposium on Visual
Information Communication and Interaction (VINCI ’25). ACM, New York,
NY, USA, 2 pages. https://doi.org/XXXXXXX.XXXXXXX
∗Corresponding author
Permission to make digital or hard copies of all or part of this work for personal or
classroom use is granted without fee provided that copies are not made or distributed
for profit or commercial advantage and that copies bear this notice and the full citation
on the first page. Copyrights for components of this work owned by others than the
author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or
republish, to post on servers or to redistribute to lists, requires prior specific permission
and/or a fee. Request permissions from permissions@acm.org.
VINCI ’25, Linz, Austria
© 2025 Copyright held by the owner/author(s). Publication rights licensed to ACM.
ACM ISBN 978-1-4503-XXXX-X/2025/12
https://doi.org/XXXXXXX.XXXXXXX
Figure 1: Ink Blossom: featuring a physical embroidery sta￾tion and a digital canvas.
1 Description
Ink Blossom reimagines traditional embroidery as an interactive
space for human-AI collaboration and cultural inheritance. It inte￾grates physical craftsmanship with modern digital creation, featur￾ing a physical embroidery station—a wooden frame that recreates
the tactile and ritualistic qualities of traditional embroidery. And
a digital canvas, which uses real-time generative algorithms to
provide participants with immediate visual interactive experiences
(Figure 1).
Miao and Qiang embroideries, recognized as significant Chinese
intangible cultural heritage, represent traditions dating back thou￾sands of years among the Miao and Qiang ethnic minorities [1, 3].
Traditionally, artisans dedicate months to meticulously crafting
intricate patterns using diverse stitching techniques passed down
through generations. Here, visitors are invited to simulate this expe￾rience by drawing freely on a tangible canvas, with their sketches
captured by an overhead camera. The AI interprets these sketches,
instantly generating culturally faithful embroidery visuals projected
onto a digital canvas. The interaction process is shown in Figure 2.
VINCI ’25, December 01–03, 2025, Linz, Austria Zhang et al.
Figure 2: The interaction process.
Figure 3: User sketches and corresponding generated results
for Miao embroidery (left) and Qiang embroidery (right)
styles.
Image generation is implemented based on two custom-trained
LoRA models [2], representing two distinctive traditional embroi￾dery styles from ethnic minorities: the floral “Dove Flower” motifs
characteristic of Miao embroidery and the geometric aesthetics of
Qiang embroidery (Figure 3). Participants can select the desired
style via different buttons. The system encodes the unique stylistic
features and compositional principles of each tradition, preserv￾ing cultural authenticity. Independent generative models prevent
cultural homogenization by AI and enable future integration of
additional embroidery styles.
2 Artist statement
Inspired by the Chinese idiom "妙笔生花," which speaks of a brush
so skilled it brings forth blooming flowers, our project brings this
magic in the digital age. We aim to let threads of tradition merge
with lines of code, allowing each AI-generated flower to carry the
memory of centuries-old craftsmanship. To ground this vision in
authentic cultural practice, we conducted a two-week field study in
August 2024, exploring embroidery companies in Tongren, Guizhou
province (the birthplace of Songtao Miao embroidery), and in the
Qiang ethnic regions of western Sichuan. We documented hun￾dreds of embroidery patterns, interviewed artisans, and annotated
stitch techniques to establish an initial dataset, crucial for ensuring
authenticity in our AI-generated textures and patterns.
By October 2024, the installation was completed and exhibited
in several cities, including the 9th International Intangible Cultural
Heritage Festival in Chengdu, the Hong Kong University of Sci￾ence and Technology (Guangzhou) Digital Media Art Exhibition,
NYU Shanghai’s IMA Gallery “Digital Qiang Garden: Pixel and
Threads,” and the rural village of Pingyuan Shao in Guizhou. These
exhibitions collectively attracted over 5,000 interactive experiences.
Participant feedback has been deeply insightful, demonstrating
how generative AI empowers humans. Many participants moved
from initial hesitation—"I can’t draw"—to confidently stating, "I
designed a beautiful embroidery pattern." Others noted that gen￾erative AI enabled more personal and meaningful engagement
with traditional crafts that once seemed distant or inaccessible.
Particularly encouraging was the response from master embroi￾derers and cultural inheritors, who recognized the tool’s potential
to enhance their creative processes while preserving cultural au￾thenticity. These experts highlighted the commercial prospects of
AI-assisted traditional craft production and expressed eagerness to
see digital designs realized as physical embroidery.
For future work, we aim to bridge digital and physical creation,
completing the loop from screen to fabric—honoring tradition by
letting digital ink blossom into embroidered art and heritage evolve
through code, experience, and connection.
3 Acknowledgement
We gratefully acknowledge Liping SHI, National Representative
Inheritor of Songtao Miao Embroidery Intangible Cultural Heritage,
and the Digital Qiang Garden Residency for their generous support.
Their contributions of exemplary embroidery works and cultural
expertise were essential to the authenticity and innovation of this
project.
References
[1] Song Haifan, Muhamad Firdaus Ramli, and Ramin Hajianfard. 2023. Fabric icons:
The impact of traditional costume patterns on ethnic identity of the Sichuan Qiang
Community. Global Journal of Arts, Humanities and Social Sciences 11, 8 (2023),
42–55.
[2] Edward J Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean
Wang, Lu Wang, Weizhu Chen, et al. 2022. Lora: Low-rank adaptation of large
language models. ICLR 1, 2 (2022), 3.
[3] Wang Shiyang and OV Kolosnichenko. 2024. Study of Miao embroidery: semiotics
of patterns and artistic value. Art and Design (2024).
Received XX June 2025; revised XX XXXX 2025; accepted XX XXXX 2025
