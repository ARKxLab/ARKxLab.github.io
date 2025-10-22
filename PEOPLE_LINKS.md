## People 页面跳转链接对照表

便于后期维护 `people.html`：为每个成员条目记录其跳转链接。若链接为 `#`，表示尚未配置，建议尽快补齐（个人页放在 `profile/` 目录内）。

### 说明
- **栏目**: 对应页面上的分组（Members、DKU Collaborators、External Collaborators、Alumni）
- **链接**: 站内链接为相对路径（如 `profile/xxx.html`），站外链接为完整 URL；`#` 表示未设置

### Members
- Prof. Xin Tong — 链接: https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page?id=435
- Hongni Ye — 链接: profile/hongni.html
 - Xiangrong “Daniel” Zhu — 链接: profile/daniel.html
- Jiawen Zhang — 链接: profile/jiawen.html
- Keyi Zeng — 链接: profile/keyi.html
- Jingyang “Elijah” Lin — 链接: profile/jingyang.html
 - Jiaxin Wang — 链接: profile/jiaxin.html
 - Zhaowen Deng — 链接: profile/zhaowen.html
- Yixuan Li — 链接: profile/yixuan.html
- Yuan Xu — 链接: profile/yuanxu.html
- Haoxuan Wang — 链接: profile/haoxuan.html
- Chenwan Zhong — 链接: profile/chenwan.html
- Ruyi Li — 链接: profile/Ruyi.html
- Tianjian Liu — 链接: profile/tianjian.html
- Dongyijie PAN — 链接: profile/primo.html
- Chunwei Yang — 链接: profile/chunwei.html
- Yizhi Song — 链接: profile/yizhi.html
 - Yinghao Gao — 链接: profile/yinghao.html

### DKU Collaborators
- Prof.Yecheng (Kent) Cao, PhD — 链接: https://faculty.dukekunshan.edu.cn/faculty_profiles/cao-yecheng-kent/
- Prof.Ming Li, PhD — 链接: https://scholars.duke.edu/person/MingLi
- Prof.Luyao Zhang, Phd — 链接: https://scholars.duke.edu/person/luyao.zhang
- Prof.Lijing Yan, PhD — 链接: https://scholars.duke.edu/person/lijing.yan
- Prof.Chenkai Wu, PhD — 链接: https://scholars.duke.edu/person/Chenkai.Wu
- Prof.Jung Eun Choi — 链接: https://scholars.duke.edu/person/Jung.Choi
- Prof. Charles Chang, PhD — 链接: https://charleschang.me/

### External Collaborators
- Prof.Kunlin Wei, PhD — 链接: https://www.psy.pku.edu.cn/english/people/faculty/professor/kunlinwei/index.htm
- Prof.Can Liu, PhD — 链接: https://www.scm.cityu.edu.hk/people/liu-can
- Prof.Min Fan, PhD — 链接: #（未设置）
- Prof.Fateme Rajabiyazdi, PhD — 链接: https://carleton.ca/rajabiyazdi/
- Prof.Mayra Donaji Barrera Machuca — 链接: https://www.dal.ca/faculty/computerscience/faculty-staff/Mayra-Barrera-Machuca.html
- Prof.Ö. NILAY YALÇIN, PhD — 链接: https://www.sfu.ca/siat/people/research-faculty/o-nilay-yalcin.html
- Prof.LAWRENCE KIM, PhD — 链接: https://www.sfu.ca/computing/people/faculty/lawrence-kim.html
- Prof.RAY LC, PhD — 链接: #（未设置）
- Prof.Zhicong Lu, PhD — 链接: #（未设置）
- Prof.Xin Yi, PhD — 链接: #（未设置）
- Prof.Yuhang Zhao, PhD — 链接: #（未设置）
- Prof.Yuling Sun, PhD — 链接: #（未设置）
- Prof.Kaixing Zhao, PhD — 链接: #（未设置）
- Prof.Yaxing Yao, PhD — 链接: #（未设置）
- Prof.Fan Liang, PhD — 链接: #（未设置）
- Zhixuan (Kyrie) Zhou — 链接: #（未设置）

### Alumni
- Yihe Wang — 链接: https://www.linkedin.com/in/wangyihe/
- Haitong Lin — 链接: https://www.linkedin.com/in/haitonglin/
- Rongqi Bei — 链接: https://www.linkedin.com/in/rongqi-bei/
- Wei Yi — 链接: #（未设置）
- Tong (Bill) Wu — 链接: #（未设置）
- Ruoxin You — 链接: #（未设置）
- Yutong (Tony) Ren — 链接: #（未设置）
- Xuening Peng — 链接: #（未设置）
- Ruiqi Richard Chen — 链接: https://ruiqichen338.github.io/

---

### 维护建议
- 新成员建议建立独立个人页：放在 `profile/姓名或唯一标识.html`，图片放置于 `images/`
- 在 `people.html` 中为对应卡片将 `href="#"` 替换为 `profile/xxx.html`
- 外部合作者/校友若使用站外链接，建议填写个人主页或学术主页的 HTTPS URL
- 若需要批量校验，后续可加入 Playwright 测试：扫描 `people.html` 内所有 `<a>` 卡片链接，校验是否为 `#`、是否 200 可达，并生成报告


