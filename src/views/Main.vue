<template>
    <div class="main">
        <v-container>
            <h1>Jobs</h1>
            <br>
            <v-card class="pa-2 text-md-center grey">
                <v-layout class="row wrap">
                    <v-flex class="xs3 md2">
                        <v-card-text>Job</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>Address</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>Company</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>Salary</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>Date</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>Href</v-card-text>
                    </v-flex>
                </v-layout>
            </v-card>
            <br>
            <v-card class="pa-2 text-md-center ma-1" v-for="job in jobs" :key="job.job_id">
                <v-layout class="wrap row pa-0" >
                    <v-flex class="xs4 md2">
                        <v-card-text>{{job.job_title}}</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>{{job.addr_simple}}</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>{{job.company_name}}</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>{{job.salary}}</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-card-text>{{job.date}}</v-card-text>
                    </v-flex>
                    <v-flex class="xs3 md2">
                        <v-btn class="green--text" @click="see(job.href)">
                            <v-icon left="">link</v-icon>
                            <span>page</span>
                        </v-btn>
                    </v-flex>

                </v-layout>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods:{
            see(e){
                window.location.href=e;
            }
        },
        data(){
            return{
                jobs: [
                    {
                        "job_id": "29574081",
                        "href": "https://www.zhipin.com/job_detail/dcbc314b02995fdd1X1_3Nm9GFM~.html",
                        "job_title": "Java",
                        "salary": "12k-20k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月13日"
                    }, {
                        "job_id": "17300686",
                        "href": "https://www.zhipin.com/job_detail/80b7e6987c6b07941nN52927GFQ~.html",
                        "job_title": "Java",
                        "salary": "13k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁云商",
                        "industry": "互联网",
                        "date": "06月04日"
                    }, {
                        "job_id": "17363219",
                        "href": "https://www.zhipin.com/job_detail/569589d9dcb620c01nN53d6_EVs~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "12月06日"
                    }, {
                        "job_id": "31259665",
                        "href": "https://www.zhipin.com/job_detail/ddb01a40702bc2a51HV43tS7Flc~.html",
                        "job_title": "Java",
                        "salary": "14k-28k",
                        "addr_simple": "南京 江宁区 大学城",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力信息技术集团",
                        "industry": "计算机软件",
                        "date": "12月13日"
                    }, {
                        "job_id": "31733202",
                        "href": "https://www.zhipin.com/job_detail/aa097283443d1f381HV92N6_EFA~.html",
                        "job_title": "Java",
                        "salary": "20k-40k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "华为",
                        "industry": "计算机软件",
                        "date": "12月24日"
                    }, {
                        "job_id": "21659372",
                        "href": "https://www.zhipin.com/job_detail/f5eb352fe151981d1XV83tS-F1A~.html",
                        "job_title": "Java",
                        "salary": "8k-16k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "雁联技术",
                        "industry": "计算机软件",
                        "date": "08月15日"
                    }, {
                        "job_id": "31781113",
                        "href": "https://www.zhipin.com/job_detail/5630cd2ab7b35e7b1HV909y8EVE~.html",
                        "job_title": "Java",
                        "salary": "20k-30k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "软通动力有限公司",
                        "industry": "计算机软件",
                        "date": "12月24日"
                    }, {
                        "job_id": "20434223",
                        "href": "https://www.zhipin.com/job_detail/3a5707ccd49095c91XR-2Nm_ElE~.html",
                        "job_title": "Java工程师",
                        "salary": "6k-12k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "05月15日"
                    }, {
                        "job_id": "22104467",
                        "href": "https://www.zhipin.com/job_detail/aee738c33676e9ad1XZ729m5FlU~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商",
                        "industry": "互联网",
                        "date": "06月23日"
                    }, {
                        "job_id": "16828501",
                        "href": "https://www.zhipin.com/job_detail/341c7ab87b4be98a1nJy2dW4EFM~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "小黑鱼",
                        "industry": "互联网",
                        "date": "08月23日"
                    }, {
                        "job_id": "14016135",
                        "href": "https://www.zhipin.com/job_detail/98bc6fc69604e5171nB62tu8E1c~.html",
                        "job_title": "Java",
                        "salary": "8k-16k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "ARSMO",
                        "industry": "医疗健康",
                        "date": "12月06日"
                    }, {
                        "job_id": "31985821",
                        "href": "https://www.zhipin.com/job_detail/5a3a6951fb395fca1HVz09i1ElM~.html",
                        "job_title": "Java",
                        "salary": "12k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "Suning",
                        "industry": "批发/零售",
                        "date": "昨天"
                    }, {
                        "job_id": "27689067",
                        "href": "https://www.zhipin.com/job_detail/9d22cdd0e63f4c1a1XN809S9FlU~.html",
                        "job_title": "Java",
                        "salary": "18k-36k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "11月14日"
                    }, {
                        "job_id": "6488913",
                        "href": "https://www.zhipin.com/job_detail/b42c6509717aa32d0XBy09S8Ew~~.html",
                        "job_title": "Java",
                        "salary": "20k-40k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "11月09日"
                    }, {
                        "job_id": "13389550",
                        "href": "https://www.zhipin.com/job_detail/8bc718008d1c511b1nd509S4FVI~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "07月22日"
                    }, {
                        "job_id": "15878508",
                        "href": "https://www.zhipin.com/job_detail/48f4355517b63c791nFy3NW4EFo~.html",
                        "job_title": "Java",
                        "salary": "14k-28k",
                        "addr_simple": "南京  ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁云商集团",
                        "industry": "互联网",
                        "date": "12月11日"
                    }, {
                        "job_id": "24337224",
                        "href": "https://www.zhipin.com/job_detail/3daceac33d6066ca1XB52Nq_ElY~.html",
                        "job_title": "JAVA工程师",
                        "salary": "10k-16k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "柯莱特集团",
                        "industry": "计算机软件",
                        "date": "11月14日"
                    }, {
                        "job_id": "20663269",
                        "href": "https://www.zhipin.com/job_detail/b1619555301d2da91XR83d6_Fls~.html",
                        "job_title": "JAVA",
                        "salary": "10k-20k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "05月21日"
                    }, {
                        "job_id": "20767407",
                        "href": "https://www.zhipin.com/job_detail/05457278dd6157501XR93dq5EFU~.html",
                        "job_title": "Java",
                        "salary": "6k-12k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月06日"
                    }, {
                        "job_id": "29521312",
                        "href": "https://www.zhipin.com/job_detail/7f1b7eb562c441831X1_2dy-EVA~.html",
                        "job_title": "Java",
                        "salary": "10k-18k",
                        "addr_simple": "南京  ",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月12日"
                    }, {
                        "job_id": "31957922",
                        "href": "https://www.zhipin.com/job_detail/330c9c4270bcf4831HVz3tq0ElA~.html",
                        "job_title": "Java开发",
                        "salary": "9k-14k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "文思海辉",
                        "industry": "计算机软件",
                        "date": "18:20"
                    }, {
                        "job_id": "31084872",
                        "href": "https://www.zhipin.com/job_detail/40f299d9d68364751HV609m1F1A~.html",
                        "job_title": "Java",
                        "salary": "20k-30k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "阿里云",
                        "industry": "互联网",
                        "date": "12月14日"
                    }, {
                        "job_id": "26562642",
                        "href": "https://www.zhipin.com/job_detail/9ab10f4a7a62ecad1XJ_3d-7FFA~.html",
                        "job_title": "java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "09月16日"
                    }, {
                        "job_id": "1623522",
                        "href": "https://www.zhipin.com/job_detail/be2356b91dbe6bb01nJ42Ni_Eg~~.html",
                        "job_title": "Java",
                        "salary": "15k-25k",
                        "addr_simple": "南京 秦淮区 苜蓿园",
                        "experience": "1-3年",
                        "education": "硕士",
                        "company_name": "中国电科二十八所",
                        "industry": "数据服务",
                        "date": "11月16日"
                    }, {
                        "job_id": "22545181",
                        "href": "https://www.zhipin.com/job_detail/2e973f2f3b8d34071XZ_39i8GFM~.html",
                        "job_title": "Java",
                        "salary": "6k-12k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "航天宏图",
                        "industry": "计算机软件",
                        "date": "10月24日"
                    }, {
                        "job_id": "22415731",
                        "href": "https://www.zhipin.com/job_detail/f6e076490df6598b1XZ-2ti6E1M~.html",
                        "job_title": "Java",
                        "salary": "10k-18k",
                        "addr_simple": "南京 玄武区 孝陵卫",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "汇通达网络",
                        "industry": "互联网",
                        "date": "06月29日"
                    }, {
                        "job_id": "12337025",
                        "href": "https://www.zhipin.com/job_detail/6bdd70cf508ae06a1nZ52Nq9Elc~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "万得",
                        "industry": "数据服务",
                        "date": "05月30日"
                    }, {
                        "job_id": "24855351",
                        "href": "https://www.zhipin.com/job_detail/b3d34db049e414c21XBy3ti-FVM~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "浩鲸科技",
                        "industry": "通信/网络设备",
                        "date": "11月15日"
                    }, {
                        "job_id": "24114353",
                        "href": "https://www.zhipin.com/job_detail/300d36d0204d96cf1XB72tm-FVE~.html",
                        "job_title": "Java",
                        "salary": "18k-22k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "石化盈科",
                        "industry": "计算机软件",
                        "date": "11月22日"
                    }, {
                        "job_id": "23315572",
                        "href": "https://www.zhipin.com/job_detail/c21025b55fe5294e1Xd52ti4F1A~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "雁联技术",
                        "industry": "计算机软件",
                        "date": "08月15日"
                    }, {
                        "job_id": "27618474",
                        "href": "https://www.zhipin.com/job_detail/82a12ca7279b86731XN82tW5F1Y~.html",
                        "job_title": "java",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "10月09日"
                    }, {
                        "job_id": "20918002",
                        "href": "https://www.zhipin.com/job_detail/3f584cedafa5b64f1XRz2tW9EFA~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京  ",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "华为",
                        "industry": "计算机软件",
                        "date": "05月25日"
                    }, {
                        "job_id": "5848855",
                        "href": "https://www.zhipin.com/job_detail/96ff38e58c2a66430nx-09W4FQ~~.html",
                        "job_title": "Java 工程师",
                        "salary": "2k-3k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "应届生",
                        "education": "本科",
                        "company_name": "亚信科技",
                        "industry": "计算机软件",
                        "date": "11月11日"
                    }, {
                        "job_id": "19390414",
                        "href": "https://www.zhipin.com/job_detail/eeca7a37290cde501n150t25EVY~.html",
                        "job_title": "JAVA",
                        "salary": "10k-18k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "柯莱特集团",
                        "industry": "计算机软件",
                        "date": "11月16日"
                    }, {
                        "job_id": "16870965",
                        "href": "https://www.zhipin.com/job_detail/edad7fbfeff334641nJy3N20Flc~.html",
                        "job_title": "Java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "武汉佰钧成",
                        "industry": "计算机软件",
                        "date": "04月24日"
                    }, {
                        "job_id": "28122852",
                        "href": "https://www.zhipin.com/job_detail/2a4f299fd7627a0b1Xx72d-1FVA~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "诚迈科技",
                        "industry": "移动互联网",
                        "date": "15:25"
                    }, {
                        "job_id": "32012689",
                        "href": "https://www.zhipin.com/job_detail/7b991111e827c17e1HZ62t-7GFs~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "昨天"
                    }, {
                        "job_id": "31594555",
                        "href": "https://www.zhipin.com/job_detail/6b8535a6d64bd1bb1HV_0tm4FVc~.html",
                        "job_title": "Java",
                        "salary": "15k-25k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "苏宁体育",
                        "industry": "互联网",
                        "date": "12月19日"
                    }, {
                        "job_id": "13840551",
                        "href": "https://www.zhipin.com/job_detail/0bd881d4d82307031ndy3924FVM~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "亚信安全",
                        "industry": "计算机软件",
                        "date": "09月26日"
                    }, {
                        "job_id": "20675809",
                        "href": "https://www.zhipin.com/job_detail/846474e6db9a386f1XR83Ni1EFs~.html",
                        "job_title": "Java",
                        "salary": "15k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "05月21日"
                    }, {
                        "job_id": "6736828",
                        "href": "https://www.zhipin.com/job_detail/69d0c98200da5f290XN53dW_GA~~.html",
                        "job_title": "Java",
                        "salary": "8k-16k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中软国际科技",
                        "industry": "互联网",
                        "date": "08月28日"
                    }, {
                        "job_id": "31515384",
                        "href": "https://www.zhipin.com/job_detail/62c4e5e1422620f71HV_2ti-GFY~.html",
                        "job_title": "java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "金证股份",
                        "industry": "计算机软件",
                        "date": "12月18日"
                    }, {
                        "job_id": "27594437",
                        "href": "https://www.zhipin.com/job_detail/9e599bf1d87e7e501XN_0tm5E1U~.html",
                        "job_title": "java开发",
                        "salary": "8k-16k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "昨天"
                    }, {
                        "job_id": "1526491",
                        "href": "https://www.zhipin.com/job_detail/29e17a9af7c722981nF43dm0EQ~~.html",
                        "job_title": "Java",
                        "salary": "15k-20k",
                        "addr_simple": "南京 秦淮区 苜蓿园",
                        "experience": "1-3年",
                        "education": "硕士",
                        "company_name": "中国电科28所",
                        "industry": "计算机软件",
                        "date": "12月05日"
                    }, {
                        "job_id": "31847016",
                        "href": "https://www.zhipin.com/job_detail/0fcdfdbce8b5a1061HVy39q9EVQ~.html",
                        "job_title": "java高级软件工程师",
                        "salary": "22k-40k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "硕士",
                        "company_name": "华为",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "20039216",
                        "href": "https://www.zhipin.com/job_detail/3dcc254558e963ad1XR62NS_EVQ~.html",
                        "job_title": "Java",
                        "salary": "6k-12k",
                        "addr_simple": "南京 鼓楼区 山西路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "国脉互联",
                        "industry": "互联网",
                        "date": "11月26日"
                    }, {
                        "job_id": "26852203",
                        "href": "https://www.zhipin.com/job_detail/4e5fede304d4c9bb1XJy3t-_EFE~.html",
                        "job_title": "Java",
                        "salary": "10k-17k",
                        "addr_simple": "南京 秦淮区 建康路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "海康威视",
                        "industry": "智能硬件",
                        "date": "11月19日"
                    }, {
                        "job_id": "22184151",
                        "href": "https://www.zhipin.com/job_detail/65310b98c779eb271XZ709m8FVM~.html",
                        "job_title": "Java",
                        "salary": "14k-19k",
                        "addr_simple": "南京 秦淮区 建康路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "海康威视",
                        "industry": "计算机软件",
                        "date": "06月25日"
                    }, {
                        "job_id": "31069660",
                        "href": "https://www.zhipin.com/job_detail/f2ada9d7348f29161HV63dS7FlI~.html",
                        "job_title": "JAVA讲师",
                        "salary": "15k-21k",
                        "addr_simple": "南京 江宁区 东山",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏州上元教育科技",
                        "industry": "在线教育",
                        "date": "12月15日"
                    }, {
                        "job_id": "30744515",
                        "href": "https://www.zhipin.com/job_detail/2610781692e015501HR939m4EVc~.html",
                        "job_title": "Java",
                        "salary": "11k-18k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "金证",
                        "industry": "计算机软件",
                        "date": "12月04日"
                    }, {
                        "job_id": "27280681",
                        "href": "https://www.zhipin.com/job_detail/8f591d81e3825bed1XN40927GFM~.html",
                        "job_title": "Java",
                        "salary": "14k-20k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "ZNV 力维",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "24089748",
                        "href": "https://www.zhipin.com/job_detail/fe914731f3e0958b1XB609S6FFo~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "10月30日"
                    }, {
                        "job_id": "30224848",
                        "href": "https://www.zhipin.com/job_detail/afe604b0093737fa1HR42dm1FFo~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "Suning",
                        "industry": "批发/零售",
                        "date": "11月23日"
                    }, {
                        "job_id": "31485253",
                        "href": "https://www.zhipin.com/job_detail/10326688102bfd2d1HV-09i_FVE~.html",
                        "job_title": "Java开发",
                        "salary": "9k-14k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "法本信息",
                        "industry": "互联网",
                        "date": "12月18日"
                    }, {
                        "job_id": "23856904",
                        "href": "https://www.zhipin.com/job_detail/85f19818d934ddfa1Xdy3tu0EFY~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "07月29日"
                    }, {
                        "job_id": "30051988",
                        "href": "https://www.zhipin.com/job_detail/a721bdc83efa95811HR63ty0GFo~.html",
                        "job_title": "Java",
                        "salary": "9k-14k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "诚迈科技",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "29327689",
                        "href": "https://www.zhipin.com/job_detail/f488b85eef6a75481X152dq7GFs~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "南京融翼",
                        "industry": "计算机软件",
                        "date": "11月08日"
                    }, {
                        "job_id": "24328203",
                        "href": "https://www.zhipin.com/job_detail/41b4d44965b798e31XB52dW_EFE~.html",
                        "job_title": "Java",
                        "salary": "8k-16k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "嫁思聪",
                        "industry": "社交网络",
                        "date": "08月09日"
                    }, {
                        "job_id": "24390562",
                        "href": "https://www.zhipin.com/job_detail/742b9d1f3fbeaebe1XB50t24FlA~.html",
                        "job_title": "Java",
                        "salary": "10k-14k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "南京大诚至远",
                        "industry": "互联网",
                        "date": "08月09日"
                    }, {
                        "job_id": "30263743",
                        "href": "https://www.zhipin.com/job_detail/d88c7697713c63d01HR43d66FFE~.html",
                        "job_title": "资深JAVA研发工程师",
                        "salary": "20k-40k",
                        "addr_simple": "南京 秦淮区 新街口",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "阿里巴巴集团",
                        "industry": "互联网",
                        "date": "12月02日"
                    }, {
                        "job_id": "32035274",
                        "href": "https://www.zhipin.com/job_detail/64e4918576f550f01HZ62Ni_F1Y~.html",
                        "job_title": "Java",
                        "salary": "7k-9k",
                        "addr_simple": "南京 鼓楼区 龙江",
                        "experience": "1年以内",
                        "education": "大专",
                        "company_name": "儿康慧国际",
                        "industry": "医疗/护理/卫生",
                        "date": "13:55"
                    }, {
                        "job_id": "30735792",
                        "href": "https://www.zhipin.com/job_detail/4337a2ca538397731HR92Ni6GVA~.html",
                        "job_title": "java开发工程师",
                        "salary": "12k-18k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "武汉佰钧成",
                        "industry": "计算机软件",
                        "date": "12月04日"
                    }, {
                        "job_id": "32002705",
                        "href": "https://www.zhipin.com/job_detail/db38ebd796e5281e1HZ629-6EFc~.html",
                        "job_title": "Java工程师",
                        "salary": "9k-14k",
                        "addr_simple": "南京 雨花台区 雨花新村",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "昨天"
                    }, {
                        "job_id": "28365281",
                        "href": "https://www.zhipin.com/job_detail/eb1517194c97abfd1Xx53di_GFM~.html",
                        "job_title": "Java",
                        "salary": "13k-26k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "孩子王",
                        "industry": "互联网",
                        "date": "10月22日"
                    }, {
                        "job_id": "21819386",
                        "href": "https://www.zhipin.com/job_detail/6b0a5555dcc7771a1XVy2tS-GFQ~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 秦淮区 建康路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "海康威视",
                        "industry": "智能硬件",
                        "date": "09月20日"
                    }, {
                        "job_id": "18835761",
                        "href": "https://www.zhipin.com/job_detail/d29355fa1741cfdc1nxy2Ni6FlM~.html",
                        "job_title": "Java开发工程师",
                        "salary": "12k-24k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京烽火",
                        "industry": "信息安全",
                        "date": "04月04日"
                    }, {
                        "job_id": "17716797",
                        "href": "https://www.zhipin.com/job_detail/40727e400f6d7f4a1nN92tu6GVU~.html",
                        "job_title": "java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 栖霞区 尧化",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "04月12日"
                    }, {
                        "job_id": "29621872",
                        "href": "https://www.zhipin.com/job_detail/3a92449320f2dde71X182dy1F1A~.html",
                        "job_title": "Java",
                        "salary": "10k-18k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "燕谷坊",
                        "industry": "食品/饮料/烟酒",
                        "date": "11月26日"
                    }, {
                        "job_id": "26934526",
                        "href": "https://www.zhipin.com/job_detail/72c6dad54e2fa5551XJz2Nm4ElQ~.html",
                        "job_title": "Java",
                        "salary": "10k-17k",
                        "addr_simple": "南京 玄武区 珠江路",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "聿瑶科技",
                        "industry": "电子商务",
                        "date": "09月22日"
                    }, {
                        "job_id": "31905873",
                        "href": "https://www.zhipin.com/job_detail/fb524657ea1afc551HVz29i1F1E~.html",
                        "job_title": "Java",
                        "salary": "20k-35k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁体育",
                        "industry": "互联网",
                        "date": "12月26日"
                    }, {
                        "job_id": "31946088",
                        "href": "https://www.zhipin.com/job_detail/d3d7b5bebe145c721HVz39u9GFo~.html",
                        "job_title": "Java",
                        "salary": "6k-10k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "浙江希优",
                        "industry": "计算机软件",
                        "date": "12月27日"
                    }, {
                        "job_id": "18527537",
                        "href": "https://www.zhipin.com/job_detail/6bbe047a7f4f77bc1nx_2dq4E1U~.html",
                        "job_title": "Java",
                        "salary": "5k-10k",
                        "addr_simple": "南京 江宁区 科学园",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "翼之坤国际贸易",
                        "industry": "社交网络",
                        "date": "08月02日"
                    }, {
                        "job_id": "11595827",
                        "href": "https://www.zhipin.com/job_detail/965df9136a058c971nV_0ti1ElU~.html",
                        "job_title": "Java",
                        "salary": "2k-3k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "亚信科技",
                        "industry": "计算机软件",
                        "date": "11月11日"
                    }, {
                        "job_id": "21178163",
                        "href": "https://www.zhipin.com/job_detail/2c28abf1045c37d71XV73NW8FlE~.html",
                        "job_title": "Java",
                        "salary": "5k-7k",
                        "addr_simple": "南京 鼓楼区 中央门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "贝电",
                        "industry": "计算机软件",
                        "date": "11月22日"
                    }, {
                        "job_id": "31853362",
                        "href": "https://www.zhipin.com/job_detail/59c4c5f9952c6b101HVy3t6-FlA~.html",
                        "job_title": "Java",
                        "salary": "15k-26k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "上海弘雅",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "26242602",
                        "href": "https://www.zhipin.com/job_detail/75be480628f307801XJ439-7EFA~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "华为",
                        "industry": "计算机软件",
                        "date": "09月11日"
                    }, {
                        "job_id": "31407560",
                        "href": "https://www.zhipin.com/job_detail/2827b38d7110dd211HV-29q4FlI~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "赤骥商贸有限公司",
                        "industry": "贸易/进出口",
                        "date": "12月16日"
                    }, {
                        "job_id": "17322209",
                        "href": "https://www.zhipin.com/job_detail/7ed6cb6236bc4dce1nN52d-_EFs~.html",
                        "job_title": "Java python",
                        "salary": "15k-30k",
                        "addr_simple": "南京 玄武区 梅园",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商集团",
                        "industry": "互联网",
                        "date": "12月06日"
                    }, {
                        "job_id": "27987836",
                        "href": "https://www.zhipin.com/job_detail/404024a3efd8984c1XNz09q1E1Q~.html",
                        "job_title": "Java工程师",
                        "salary": "8k-15k",
                        "addr_simple": "南京 浦口区 泰山",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "美辛软件",
                        "industry": "计算机软件",
                        "date": "12月12日"
                    }, {
                        "job_id": "28916556",
                        "href": "https://www.zhipin.com/job_detail/a3b359657d7953041Xxz2tu4FVQ~.html",
                        "job_title": "Java开发",
                        "salary": "9k-18k",
                        "addr_simple": "南京 江宁区 大学城",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月01日"
                    }, {
                        "job_id": "28763109",
                        "href": "https://www.zhipin.com/job_detail/c9e22c0b692102091Xx93d68EFs~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 鼓楼区 山西路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "厦门云族佳",
                        "industry": "互联网",
                        "date": "11月28日"
                    }, {
                        "job_id": "1623110",
                        "href": "https://www.zhipin.com/job_detail/1da86bfa33f963de1nJ42Ny8EA~~.html",
                        "job_title": "Java",
                        "salary": "14k-22k",
                        "addr_simple": "南京 秦淮区 苜蓿园",
                        "experience": "经验不限",
                        "education": "硕士",
                        "company_name": "中电28所",
                        "industry": "移动互联网",
                        "date": "08月09日"
                    }, {
                        "job_id": "15867675",
                        "href": "https://www.zhipin.com/job_detail/f40a1113198f87231nFy3dq7F1c~.html",
                        "job_title": "Java",
                        "salary": "11k-17k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "睿辰欣创",
                        "industry": "计算机软件",
                        "date": "12月06日"
                    }, {
                        "job_id": "31836251",
                        "href": "https://www.zhipin.com/job_detail/5cdf4c946ff6b1831HVy2Nu_FVM~.html",
                        "job_title": "Java",
                        "salary": "6k-10k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "杭州东方通信软件...",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "31997700",
                        "href": "https://www.zhipin.com/job_detail/d8c7e5fb8bfb638b1HVz0tq6EFI~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "昨天"
                    }, {
                        "job_id": "29905491",
                        "href": "https://www.zhipin.com/job_detail/19fbfa0ba57efdce1X1z29i5GVM~.html",
                        "job_title": "JAVA工程师",
                        "salary": "11k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "南京迈特望",
                        "industry": "计算机软件",
                        "date": "11月19日"
                    }, {
                        "job_id": "29836089",
                        "href": "https://www.zhipin.com/job_detail/8471fbd938b78bb71X1y2Nu9GFs~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "万得",
                        "industry": "数据服务",
                        "date": "11月27日"
                    }, {
                        "job_id": "31230028",
                        "href": "https://www.zhipin.com/job_detail/60c17391c1a95ab41HV42N29Elo~.html",
                        "job_title": "Java",
                        "salary": "4k-8k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "嫁思聪",
                        "industry": "社交网络",
                        "date": "12月12日"
                    }, {
                        "job_id": "29026787",
                        "href": "https://www.zhipin.com/job_detail/894e2dd22c58ef601X162du6GFU~.html",
                        "job_title": "Java工程师",
                        "salary": "11k-20k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "途牛旅游网",
                        "industry": "互联网",
                        "date": "12月25日"
                    }, {
                        "job_id": "25536104",
                        "href": "https://www.zhipin.com/job_detail/62027aff71c11a2d1XF_2Nu8EFY~.html",
                        "job_title": "JAVA维护",
                        "salary": "7k-12k",
                        "addr_simple": "南京 江宁区 大学城",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月27日"
                    }, {
                        "job_id": "25556297",
                        "href": "https://www.zhipin.com/job_detail/19eed68c28bf07ed1XF_3tu_GVU~.html",
                        "job_title": "Java",
                        "salary": "13k-18k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "滴普科技",
                        "industry": "互联网",
                        "date": "12月23日"
                    }, {
                        "job_id": "31891036",
                        "href": "https://www.zhipin.com/job_detail/43032a120e399e321HVy0ty9E1Q~.html",
                        "job_title": "Java工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力有限公司",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "31024881",
                        "href": "https://www.zhipin.com/job_detail/aaf76e6e06af255a1HV62dm1GFM~.html",
                        "job_title": "Java",
                        "salary": "4k-8k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "嫁思聪",
                        "industry": "社交网络",
                        "date": "12月08日"
                    }, {
                        "job_id": "25828501",
                        "href": "https://www.zhipin.com/job_detail/878502be611d5b201XFy2dW4EFM~.html",
                        "job_title": "Java",
                        "salary": "15k-25k",
                        "addr_simple": "南京 秦淮区 碑亭巷",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "茁金",
                        "industry": "互联网金融",
                        "date": "10月24日"
                    }, {
                        "job_id": "30904050",
                        "href": "https://www.zhipin.com/job_detail/92a7b18ef33b22b21HRz29m9FVI~.html",
                        "job_title": "java开发",
                        "salary": "11k-16k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "中软国际",
                        "industry": "互联网",
                        "date": "12月20日"
                    }, {
                        "job_id": "22025835",
                        "href": "https://www.zhipin.com/job_detail/89106302ff3dff291XZ62di1E1c~.html",
                        "job_title": "Java开发",
                        "salary": "8k-16k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月09日"
                    }, {
                        "job_id": "31358224",
                        "href": "https://www.zhipin.com/job_detail/425861acaff143b81HV53tW_ElY~.html",
                        "job_title": "Java开发",
                        "salary": "17k-22k",
                        "addr_simple": "南京 浦口区 江浦",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "纬创",
                        "industry": "计算机软件",
                        "date": "12月14日"
                    }, {
                        "job_id": "21794945",
                        "href": "https://www.zhipin.com/job_detail/aa18d641b923b1fa1XV90tm0FFc~.html",
                        "job_title": "JAVA工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "秦苍科技",
                        "industry": "互联网金融",
                        "date": "10月18日"
                    }, {
                        "job_id": "28962327",
                        "href": "https://www.zhipin.com/job_detail/af6e42536e12b1ef1Xxz3d--ElU~.html",
                        "job_title": "Java工程师",
                        "salary": "8k-12k",
                        "addr_simple": "南京 鼓楼区 华侨路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "狄邦教育管理集团",
                        "industry": "在线教育",
                        "date": "11月26日"
                    }, {
                        "job_id": "30838078",
                        "href": "https://www.zhipin.com/job_detail/b651f608337ec8ba1HRy2NW9F1o~.html",
                        "job_title": "java",
                        "salary": "9k-14k",
                        "addr_simple": "南京 建邺区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "12月05日"
                    }, {
                        "job_id": "18752204",
                        "href": "https://www.zhipin.com/job_detail/9f73d16b7b0860f71nx93t-_EFY~.html",
                        "job_title": "Java工程师",
                        "salary": "8k-15k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "03月31日"
                    }, {
                        "job_id": "22813043",
                        "href": "https://www.zhipin.com/job_detail/568fccf42ae518371XZy2t69FFE~.html",
                        "job_title": "Java",
                        "salary": "20k-40k",
                        "addr_simple": "南京 江宁区 百家湖",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "蚂蚁金服",
                        "industry": "互联网",
                        "date": "08月29日"
                    }, {
                        "job_id": "25554527",
                        "href": "https://www.zhipin.com/job_detail/04645299708ba85b1XF_3tm4ElU~.html",
                        "job_title": "Java后端高级工程师",
                        "salary": "15k-30k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "浩鲸科技",
                        "industry": "通信/网络设备",
                        "date": "08月30日"
                    }, {
                        "job_id": "10595162",
                        "href": "https://www.zhipin.com/job_detail/41bc18aa34ba1ee61nR_0ti8FlA~.html",
                        "job_title": "Java 工程师",
                        "salary": "7k-14k",
                        "addr_simple": "南京 雨花台区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "亚信科技",
                        "industry": "计算机软件",
                        "date": "12月05日"
                    }, {
                        "job_id": "28006331",
                        "href": "https://www.zhipin.com/job_detail/474647509b12e5541Xx629u-E1M~.html",
                        "job_title": "Java工程师",
                        "salary": "11k-16k",
                        "addr_simple": "南京 江宁区 百家湖",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "润和软件",
                        "industry": "移动互联网",
                        "date": "12月18日"
                    }, {
                        "job_id": "25378035",
                        "href": "https://www.zhipin.com/job_detail/44378f57bc093ab61XF53NW9E1c~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-19k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "金证",
                        "industry": "计算机软件",
                        "date": "12月20日"
                    }, {
                        "job_id": "5227786",
                        "href": "https://www.zhipin.com/job_detail/fe89d538c11a4ac90nZ43Nq1Fg~~.html",
                        "job_title": "Java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 秦淮区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏亿科达",
                        "industry": "计算机软件",
                        "date": "12月05日"
                    }, {
                        "job_id": "24268132",
                        "href": "https://www.zhipin.com/job_detail/1f6fc407df0a07ca1XB43dW8E1A~.html",
                        "job_title": "Java",
                        "salary": "10k-18k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "云沃客",
                        "industry": "计算机软件",
                        "date": "12月11日"
                    }, {
                        "job_id": "14369999",
                        "href": "https://www.zhipin.com/job_detail/962be19c4a70d5d81nB53dS0GVs~.html",
                        "job_title": "Java开发",
                        "salary": "6k-10k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "科大国创软件股份公司",
                        "industry": "计算机软件",
                        "date": "06月08日"
                    }, {
                        "job_id": "10420564",
                        "href": "https://www.zhipin.com/job_detail/92d6b9d34994c52e1nR-2d24FlY~.html",
                        "job_title": "JAVA开发工程师",
                        "salary": "5k-7k",
                        "addr_simple": "南京 秦淮区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "华韩整形",
                        "industry": "医疗健康",
                        "date": "05月11日"
                    }, {
                        "job_id": "25648268",
                        "href": "https://www.zhipin.com/job_detail/b6291f6cb049a0121XF839W_Flo~.html",
                        "job_title": "高级JAVA工程师",
                        "salary": "13k-25k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "运满满",
                        "industry": "移动互联网",
                        "date": "12月11日"
                    }, {
                        "job_id": "17080099",
                        "href": "https://www.zhipin.com/job_detail/3905af1df1ee72a41nN60929GVs~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京守易众",
                        "industry": "电子商务",
                        "date": "12月06日"
                    }, {
                        "job_id": "29756842",
                        "href": "https://www.zhipin.com/job_detail/667f44738f91dcb51X193tu1FFA~.html",
                        "job_title": "南京java",
                        "salary": "11k-17k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "厦门云族佳",
                        "industry": "互联网",
                        "date": "11月15日"
                    }, {
                        "job_id": "25369064",
                        "href": "https://www.zhipin.com/job_detail/999cbe76420731b91XF53dS9FlY~.html",
                        "job_title": "Java",
                        "salary": "6k-10k",
                        "addr_simple": "南京 鼓楼区 中央路",
                        "experience": "1-3年",
                        "education": "学历不限",
                        "company_name": "功城狮",
                        "industry": "计算机软件",
                        "date": "09月27日"
                    }, {
                        "job_id": "18816084",
                        "href": "https://www.zhipin.com/job_detail/45c7b12f5e84d82f1nxy2tu9GFY~.html",
                        "job_title": "Java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 玄武区 梅园",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "意丰智信息技术",
                        "industry": "计算机软件",
                        "date": "04月14日"
                    }, {
                        "job_id": "26638752",
                        "href": "https://www.zhipin.com/job_detail/f4d7ae05432da92e1XJ82NW6FVA~.html",
                        "job_title": "java后端工程师",
                        "salary": "13k-26k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "小米",
                        "industry": "互联网",
                        "date": "09月17日"
                    }, {
                        "job_id": "30362371",
                        "href": "https://www.zhipin.com/job_detail/d26ed93fe0eee69c1HR53d--F1M~.html",
                        "job_title": "JAVA开发",
                        "salary": "8k-13k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "世纪恒通",
                        "industry": "移动互联网",
                        "date": "11月27日"
                    }, {
                        "job_id": "30781058",
                        "href": "https://www.zhipin.com/job_detail/0fe794a18a8d32181HR909y9FVo~.html",
                        "job_title": "JAVA研发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 江宁区 东山",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "长园深瑞",
                        "industry": "通信/网络设备",
                        "date": "12月04日"
                    }, {
                        "job_id": "25390573",
                        "href": "https://www.zhipin.com/job_detail/9834c646d29efd3d1XF50t24F1E~.html",
                        "job_title": "Java",
                        "salary": "9k-18k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "铁路计算机工程",
                        "industry": "计算机服务",
                        "date": "08月27日"
                    }, {
                        "job_id": "31898568",
                        "href": "https://www.zhipin.com/job_detail/f4e87479916c794c1HVy0tW4Flo~.html",
                        "job_title": "JAVA项目经理",
                        "salary": "12k-15k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "南京迈特望",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "31781342",
                        "href": "https://www.zhipin.com/job_detail/9c70d1a9b732115c1HV909y-FFA~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "拓保软件",
                        "industry": "计算机软件",
                        "date": "12月24日"
                    }, {
                        "job_id": "31261872",
                        "href": "https://www.zhipin.com/job_detail/864a0e9187c23aa71HV43dy1F1A~.html",
                        "job_title": "Java",
                        "salary": "9k-14k",
                        "addr_simple": "南京 栖霞区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "旺米科技",
                        "industry": "移动互联网",
                        "date": "12月13日"
                    }, {
                        "job_id": "29256854",
                        "href": "https://www.zhipin.com/job_detail/9cdfa8a99e489b311X143tu1FVY~.html",
                        "job_title": "高级Java开发",
                        "salary": "13k-20k",
                        "addr_simple": "南京  ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月07日"
                    }, {
                        "job_id": "29219530",
                        "href": "https://www.zhipin.com/job_detail/405c34aaf50e9d0f1X142tS4E1I~.html",
                        "job_title": "Java开发",
                        "salary": "8k-14k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "云族佳",
                        "industry": "互联网",
                        "date": "11月19日"
                    }, {
                        "job_id": "19372000",
                        "href": "https://www.zhipin.com/job_detail/b0dda4bd8471e7f71n153N-9EFI~.html",
                        "job_title": "Java开发",
                        "salary": "11k-17k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "柯莱特集团",
                        "industry": "计算机软件",
                        "date": "04月18日"
                    }, {
                        "job_id": "28468785",
                        "href": "https://www.zhipin.com/job_detail/654acf35ed5a9a301Xx-3dW6GFc~.html",
                        "job_title": "java",
                        "salary": "7k-11k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "希优科技",
                        "industry": "计算机软件",
                        "date": "10月24日"
                    }, {
                        "job_id": "19043823",
                        "href": "https://www.zhipin.com/job_detail/2b4bb545532c6f231n163961ElE~.html",
                        "job_title": "Java",
                        "salary": "15k-22k",
                        "addr_simple": "南京  ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "南京苏宁软件",
                        "industry": "计算机软件",
                        "date": "06月07日"
                    }, {
                        "job_id": "31884594",
                        "href": "https://www.zhipin.com/job_detail/53cb79a6561233271HVy09m4GVY~.html",
                        "job_title": "Java（前台）",
                        "salary": "7k-10k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "25567157",
                        "href": "https://www.zhipin.com/job_detail/e9f9c5309f8b70441XF_3dq8FVU~.html",
                        "job_title": "Java",
                        "salary": "12k-19k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "富宇通",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "30327897",
                        "href": "https://www.zhipin.com/job_detail/dc1ebfa2a5e5ac491HR52dq1GVU~.html",
                        "job_title": "Java（中高级）",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "深圳雁联",
                        "industry": "互联网",
                        "date": "11月26日"
                    }, {
                        "job_id": "29213115",
                        "href": "https://www.zhipin.com/job_detail/5aa234392e8672a91X142t68EVc~.html",
                        "job_title": "Java开发工程师",
                        "salary": "15k-30k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "小米",
                        "industry": "互联网",
                        "date": "11月06日"
                    }, {
                        "job_id": "5654977",
                        "href": "https://www.zhipin.com/job_detail/d7a29816ab4ce0e10nJ_39S6Fw~~.html",
                        "job_title": "java开发工程师",
                        "salary": "9k-18k",
                        "addr_simple": "南京 雨花台区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "文思海辉技术有限公司",
                        "industry": "计算机软件",
                        "date": "10月08日"
                    }, {
                        "job_id": "31848336",
                        "href": "https://www.zhipin.com/job_detail/cd09a353e9d6a3fe1HVy39W-E1Q~.html",
                        "job_title": "Java开发工程师",
                        "salary": "13k-16k",
                        "addr_simple": "南京 江宁区 百家湖",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "博彦科技",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "30406210",
                        "href": "https://www.zhipin.com/job_detail/8f11cc83666a07ef1HR-29u_EVI~.html",
                        "job_title": "JAVA开发",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "诚迈科技",
                        "industry": "移动互联网",
                        "date": "11月27日"
                    }, {
                        "job_id": "24259284",
                        "href": "https://www.zhipin.com/job_detail/617c701ed3f2820d1XB43tS_GFY~.html",
                        "job_title": "Java后端开发",
                        "salary": "8k-15k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "09月28日"
                    }, {
                        "job_id": "20999548",
                        "href": "https://www.zhipin.com/job_detail/a90fcfa30ee6b85c1XRz0tS4FFo~.html",
                        "job_title": "java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "雁联技术",
                        "industry": "计算机软件",
                        "date": "08月02日"
                    }, {
                        "job_id": "32011868",
                        "href": "https://www.zhipin.com/job_detail/1f7e3a67a5d4a6391HZ62ty1Flo~.html",
                        "job_title": "Java开发",
                        "salary": "10k-15k",
                        "addr_simple": "南京 江宁区 百家湖",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "润和软件",
                        "industry": "移动互联网",
                        "date": "昨天"
                    }, {
                        "job_id": "30335768",
                        "href": "https://www.zhipin.com/job_detail/80e73cc1a06ff7cb1HR52Ni6Flo~.html",
                        "job_title": "java开发",
                        "salary": "12k-18k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "深圳雁联",
                        "industry": "互联网",
                        "date": "昨天"
                    }, {
                        "job_id": "20410012",
                        "href": "https://www.zhipin.com/job_detail/ac437502e08a8a0d1XR-2t29EVA~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商",
                        "industry": "互联网",
                        "date": "12月04日"
                    }, {
                        "job_id": "31809556",
                        "href": "https://www.zhipin.com/job_detail/729f34bb2e66037c1HVy29S4FVQ~.html",
                        "job_title": "Java",
                        "salary": "8k-13k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "上海屹通",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "20520347",
                        "href": "https://www.zhipin.com/job_detail/81d2f902e8027f4a1XR_2d2-FFU~.html",
                        "job_title": "java架构师",
                        "salary": "20k-40k",
                        "addr_simple": "南京  ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "08月24日"
                    }, {
                        "job_id": "30429682",
                        "href": "https://www.zhipin.com/job_detail/e1984480aeddd78f1HR-2dS7GFA~.html",
                        "job_title": "Java教员",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 小行",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "新中博职业培训",
                        "industry": "计算机软件",
                        "date": "11月29日"
                    }, {
                        "job_id": "22370674",
                        "href": "https://www.zhipin.com/job_detail/06360c91fbda885b1XZ53N27F1Y~.html",
                        "job_title": "Java工程师南京",
                        "salary": "6k-10k",
                        "addr_simple": "南京 鼓楼区 山西路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "安硕信息",
                        "industry": "计算机软件",
                        "date": "12:02"
                    }, {
                        "job_id": "26096271",
                        "href": "https://www.zhipin.com/job_detail/0533e96653d8afbe1XJ60tu_F1M~.html",
                        "job_title": "Java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 秦淮区 光华路",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "眼镜圈",
                        "industry": "电子商务",
                        "date": "09月08日"
                    }, {
                        "job_id": "30529962",
                        "href": "https://www.zhipin.com/job_detail/aaef3b58d759362e1HR_2dS0FlA~.html",
                        "job_title": "南京java",
                        "salary": "11k-17k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "学历不限",
                        "company_name": "厦门云族佳",
                        "industry": "互联网",
                        "date": "11月29日"
                    }, {
                        "job_id": "17321523",
                        "href": "https://www.zhipin.com/job_detail/ff8bea975bfb9db71nN52dy4ElE~.html",
                        "job_title": "Java",
                        "salary": "15k-25k",
                        "addr_simple": "南京 玄武区 梅园",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商集团",
                        "industry": "互联网",
                        "date": "12月06日"
                    }, {
                        "job_id": "31623412",
                        "href": "https://www.zhipin.com/job_detail/b48e76047030d8801HV82d65EVA~.html",
                        "job_title": "南京-Java",
                        "salary": "9k-14k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "厦门云族佳",
                        "industry": "互联网",
                        "date": "12月20日"
                    }, {
                        "job_id": "31204012",
                        "href": "https://www.zhipin.com/job_detail/d75707250de4ad231HV429m9EVA~.html",
                        "job_title": "Java",
                        "salary": "9k-17k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "大别山珍农业科技",
                        "industry": "互联网",
                        "date": "12月19日"
                    }, {
                        "job_id": "4959314",
                        "href": "https://www.zhipin.com/job_detail/b0ab86855ec75178031_0t68FA~~.html",
                        "job_title": "Java",
                        "salary": "3k-6k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "学历不限",
                        "company_name": "店宝贝",
                        "industry": "互联网",
                        "date": "12月27日"
                    }, {
                        "job_id": "27686173",
                        "href": "https://www.zhipin.com/job_detail/4345323e473847421XN809u8F1E~.html",
                        "job_title": "Java开发工程师",
                        "salary": "11k-22k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "10月10日"
                    }, {
                        "job_id": "28366192",
                        "href": "https://www.zhipin.com/job_detail/b4f5f0cf35358b7a1Xx53du8GVA~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "孩子王",
                        "industry": "互联网",
                        "date": "10月22日"
                    }, {
                        "job_id": "22942552",
                        "href": "https://www.zhipin.com/job_detail/ea170f08d32dcd5b1XZz39-4FVA~.html",
                        "job_title": "高级Java工程师",
                        "salary": "15k-25k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "12月13日"
                    }, {
                        "job_id": "15447450",
                        "href": "https://www.zhipin.com/job_detail/4f7c1e9c4150123a1nF-39q5FVI~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-18k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "07月05日"
                    }, {
                        "job_id": "21232986",
                        "href": "https://www.zhipin.com/job_detail/e729796d9621b1b11XV42N-0GFQ~.html",
                        "job_title": "Java",
                        "salary": "8k-12k",
                        "addr_simple": "南京 玄武区 梅园",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "意丰智信息技术",
                        "industry": "计算机软件",
                        "date": "08月11日"
                    }, {
                        "job_id": "19759449",
                        "href": "https://www.zhipin.com/job_detail/88c6857cbf52bfa21n193tS5FFs~.html",
                        "job_title": "Java工程师",
                        "salary": "6k-12k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "航天宏图",
                        "industry": "计算机软件",
                        "date": "04月27日"
                    }, {
                        "job_id": "27181199",
                        "href": "https://www.zhipin.com/job_detail/8dd33be363ab33681XN709y8GVs~.html",
                        "job_title": "java架构",
                        "salary": "25k-35k",
                        "addr_simple": "南京 秦淮区 中华门",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "联蔚信息",
                        "industry": "企业服务",
                        "date": "09月28日"
                    }, {
                        "job_id": "19134559",
                        "href": "https://www.zhipin.com/job_detail/d8764517c1dc4e761n172Nm4FVs~.html",
                        "job_title": "Java技术经理",
                        "salary": "13k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "12月18日"
                    }, {
                        "job_id": "15371596",
                        "href": "https://www.zhipin.com/job_detail/f3ad0076dc1b72ca1nF53Ny4GVQ~.html",
                        "job_title": "中级java开发",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "08月10日"
                    }, {
                        "job_id": "26137352",
                        "href": "https://www.zhipin.com/job_detail/d90f117b12da26881XJ72Nq-FVA~.html",
                        "job_title": "Java",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "高中",
                        "company_name": "南京百顺制品有限公司",
                        "industry": "电子商务",
                        "date": "11月22日"
                    }, {
                        "job_id": "1578207",
                        "href": "https://www.zhipin.com/job_detail/40bec08648e9ea251nF909-9Fw~~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "途牛",
                        "industry": "旅游",
                        "date": "07月05日"
                    }, {
                        "job_id": "26247022",
                        "href": "https://www.zhipin.com/job_detail/56d2f46a40f7402e1XJ439q9ElA~.html",
                        "job_title": "JAVA工程师",
                        "salary": "8k-15k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "互联网",
                        "date": "12月11日"
                    }, {
                        "job_id": "31594156",
                        "href": "https://www.zhipin.com/job_detail/73be37d65ce8e54a1HV_0tm8FVQ~.html",
                        "job_title": "Java",
                        "salary": "10k-13k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "南京领添",
                        "industry": "互联网",
                        "date": "12月19日"
                    }, {
                        "job_id": "30185054",
                        "href": "https://www.zhipin.com/job_detail/3b462d7d39e10a931HR709i9FVY~.html",
                        "job_title": "Java",
                        "salary": "12k-18k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "争锋科技",
                        "industry": "计算机软件",
                        "date": "11月23日"
                    }, {
                        "job_id": "23367004",
                        "href": "https://www.zhipin.com/job_detail/4e973b054676905d1Xd53dq9EFY~.html",
                        "job_title": "Java工程师",
                        "salary": "13k-25k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "TamoTech",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "24014826",
                        "href": "https://www.zhipin.com/job_detail/24001882e2480e3f1XB62tm1ElQ~.html",
                        "job_title": "高级Java开发",
                        "salary": "15k-20k",
                        "addr_simple": "南京 鼓楼区 山西路",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "科大国创软件股份公司",
                        "industry": "计算机软件",
                        "date": "08月01日"
                    }, {
                        "job_id": "20761559",
                        "href": "https://www.zhipin.com/job_detail/c8f7fde94bd04cce1XR93dy4FVs~.html",
                        "job_title": "Java后端",
                        "salary": "12k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "10月08日"
                    }, {
                        "job_id": "11683927",
                        "href": "https://www.zhipin.com/job_detail/0e4cd365c68597291nV80960ElU~.html",
                        "job_title": "Java",
                        "salary": "6k-8k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "博纳睿通",
                        "industry": "计算机软件",
                        "date": "12月06日"
                    }, {
                        "job_id": "25252993",
                        "href": "https://www.zhipin.com/job_detail/5b1660db9f18176e1XF43t-0GVE~.html",
                        "job_title": "java工程师",
                        "salary": "10k-17k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏达科",
                        "industry": "通信/网络设备",
                        "date": "09月13日"
                    }, {
                        "job_id": "29692866",
                        "href": "https://www.zhipin.com/job_detail/5c55f08f02f154591X180t-1FlQ~.html",
                        "job_title": "JAVA项目经理",
                        "salary": "10k-20k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月14日"
                    }, {
                        "job_id": "27685077",
                        "href": "https://www.zhipin.com/job_detail/1c1e96fb4df06f061XN809i9F1U~.html",
                        "job_title": "Java开发工程师",
                        "salary": "9k-18k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "10月10日"
                    }, {
                        "job_id": "29394657",
                        "href": "https://www.zhipin.com/job_detail/a9101f689242b43b1X150tm7FVU~.html",
                        "job_title": "java",
                        "salary": "7k-12k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "11月09日"
                    }, {
                        "job_id": "17439458",
                        "href": "https://www.zhipin.com/job_detail/e53f00fced5c3c2b1nN-2NS5FVo~.html",
                        "job_title": "JAVA高级工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 鼓楼区 水西门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏鸿信",
                        "industry": "互联网",
                        "date": "12月13日"
                    }, {
                        "job_id": "27278734",
                        "href": "https://www.zhipin.com/job_detail/821f997ff82bf9321XN43NW6E1Y~.html",
                        "job_title": "高级JAVA工程师",
                        "salary": "15k-30k",
                        "addr_simple": "南京 雨花台区 雨花新村",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "云帐房",
                        "industry": "互联网",
                        "date": "12月12日"
                    }, {
                        "job_id": "27174906",
                        "href": "https://www.zhipin.com/job_detail/0d9c75079e926e391XN73Nm0EFQ~.html",
                        "job_title": "java开发工程师",
                        "salary": "6k-10k",
                        "addr_simple": "南京 江宁区 东山",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "科大国创软件股份公司",
                        "industry": "计算机软件",
                        "date": "09月27日"
                    }, {
                        "job_id": "29717340",
                        "href": "https://www.zhipin.com/job_detail/a865f6395dee0c671X192tq-FFI~.html",
                        "job_title": "Java高级工程师",
                        "salary": "8k-13k",
                        "addr_simple": "南京 秦淮区 苜蓿园",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中国电科28所",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "29240712",
                        "href": "https://www.zhipin.com/job_detail/3a3e3c71ce3a65cd1X143926EVA~.html",
                        "job_title": "Java开发工程师",
                        "salary": "12k-24k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京领添",
                        "industry": "互联网",
                        "date": "12月21日"
                    }, {
                        "job_id": "30972198",
                        "href": "https://www.zhipin.com/job_detail/7ce0e4b135c4e8eb1HRz3N-8GVo~.html",
                        "job_title": "java架构师（南京）",
                        "salary": "25k-40k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "运满满",
                        "industry": "移动互联网",
                        "date": "12月07日"
                    }, {
                        "job_id": "13068483",
                        "href": "https://www.zhipin.com/job_detail/cffc54e4829d41751nd63dW5GFE~.html",
                        "job_title": "JAVA 研发工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "亚信科技",
                        "industry": "计算机软件",
                        "date": "12月11日"
                    }, {
                        "job_id": "28389133",
                        "href": "https://www.zhipin.com/job_detail/a1e10b2ec3eddcbc1Xx509S8E1E~.html",
                        "job_title": "Java开发工程师",
                        "salary": "3k-5k",
                        "addr_simple": "南京 玄武区 孝陵卫",
                        "experience": "应届生",
                        "education": "本科",
                        "company_name": "泛微网络",
                        "industry": "计算机软件",
                        "date": "10月23日"
                    }, {
                        "job_id": "13417741",
                        "href": "https://www.zhipin.com/job_detail/8c35034e2b9d76bd1nd-2tq6FFM~.html",
                        "job_title": "Java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "昆虫软件",
                        "industry": "数据服务",
                        "date": "06月07日"
                    }, {
                        "job_id": "26424491",
                        "href": "https://www.zhipin.com/job_detail/d0804be8d10bcb6e1XJ-2dm5GVM~.html",
                        "job_title": "JAVA开发工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "速度中国",
                        "industry": "数据服务",
                        "date": "12月03日"
                    }, {
                        "job_id": "32039395",
                        "href": "https://www.zhipin.com/job_detail/f992a036bf6db8b01HZ62NS-GVc~.html",
                        "job_title": "Java高级开发",
                        "salary": "12k-24k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中软国际",
                        "industry": "计算机软件",
                        "date": "15:05"
                    }, {
                        "job_id": "31884692",
                        "href": "https://www.zhipin.com/job_detail/65ddd6f0fb406b551HVy09m7GVA~.html",
                        "job_title": "Java（前台2）",
                        "salary": "6k-8k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "21536521",
                        "href": "https://www.zhipin.com/job_detail/1e9cea43a8d8e1c11XV_2Nu4ElM~.html",
                        "job_title": "Java 研发",
                        "salary": "10k-20k",
                        "addr_simple": "南京 鼓楼区 中央门",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "贝电",
                        "industry": "计算机软件",
                        "date": "11月20日"
                    }, {
                        "job_id": "29180628",
                        "href": "https://www.zhipin.com/job_detail/1bd37f1ea5f64d711X170927Elo~.html",
                        "job_title": "Java开发",
                        "salary": "10k-18k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "11月06日"
                    }, {
                        "job_id": "30747964",
                        "href": "https://www.zhipin.com/job_detail/c45db32a125adcc11HR939q0FlY~.html",
                        "job_title": "Java开发工程师",
                        "salary": "9k-13k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "金吉鸟健身",
                        "industry": "生活服务",
                        "date": "12月04日"
                    }, {
                        "job_id": "25960257",
                        "href": "https://www.zhipin.com/job_detail/c1bb5b5b1592e0fa1XFz3d2_FVU~.html",
                        "job_title": "Java",
                        "salary": "7k-14k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "恒歌零一",
                        "industry": "计算机软件",
                        "date": "12月20日"
                    }, {
                        "job_id": "19888735",
                        "href": "https://www.zhipin.com/job_detail/f0861aee40778b4e1n1y09W6E1c~.html",
                        "job_title": "Java技术经理",
                        "salary": "12k-24k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "O2O",
                        "date": "05月02日"
                    }, {
                        "job_id": "22963361",
                        "href": "https://www.zhipin.com/job_detail/6b1e1c5aacd1540f1XZz3d6-FlM~.html",
                        "job_title": "Java开发",
                        "salary": "8k-13k",
                        "addr_simple": "南京 鼓楼区 南大",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "万达信息",
                        "industry": "计算机软件",
                        "date": "07月11日"
                    }, {
                        "job_id": "26247705",
                        "href": "https://www.zhipin.com/job_detail/6c9bc01c687a66011XJ439q6EFc~.html",
                        "job_title": "Java实习",
                        "salary": "3k-4k",
                        "addr_simple": "南京 鼓楼区 南大",
                        "experience": "应届生",
                        "education": "本科",
                        "company_name": "联坤软件",
                        "industry": "计算机软件",
                        "date": "09月11日"
                    }, {
                        "job_id": "23659438",
                        "href": "https://www.zhipin.com/job_detail/81b258689e87a8e51Xd83tS5E1o~.html",
                        "job_title": "Java开发",
                        "salary": "13k-26k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "Suning",
                        "industry": "批发/零售",
                        "date": "10月13日"
                    }, {
                        "job_id": "31900975",
                        "href": "https://www.zhipin.com/job_detail/a4a452a87e9cce571HVz2920F1c~.html",
                        "job_title": "java工程师",
                        "salary": "11k-16k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "金证股份",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "30436536",
                        "href": "https://www.zhipin.com/job_detail/460151802a7108091HR-2Nu4E1Q~.html",
                        "job_title": "南京-Java-(6748)",
                        "salary": "9k-11k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "厦门云族佳",
                        "industry": "互联网",
                        "date": "11月28日"
                    }, {
                        "job_id": "31118971",
                        "href": "https://www.zhipin.com/job_detail/9f8f01d1cd0de2e51HV72tW0F1M~.html",
                        "job_title": "Java开发工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 浦口区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "科蓝软件",
                        "industry": "计算机软件",
                        "date": "12月11日"
                    }, {
                        "job_id": "23093613",
                        "href": "https://www.zhipin.com/job_detail/68c12af6a909e5531Xd60t67EVE~.html",
                        "job_title": "Java开发",
                        "salary": "8k-16k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "10月08日"
                    }, {
                        "job_id": "21038623",
                        "href": "https://www.zhipin.com/job_detail/af0c6fb78e752d2a1XV62NW7ElE~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 后宰门",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "北京用友政务",
                        "industry": "计算机软件",
                        "date": "05月29日"
                    }, {
                        "job_id": "26989496",
                        "href": "https://www.zhipin.com/job_detail/0a0febe39f1cde981XJz09S5GVQ~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-14k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "云族佳",
                        "industry": "互联网",
                        "date": "11月05日"
                    }, {
                        "job_id": "30531685",
                        "href": "https://www.zhipin.com/job_detail/762f1c52b22483341HR_2Ny7GFc~.html",
                        "job_title": "Java开发自研项目",
                        "salary": "12k-18k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "11月29日"
                    }, {
                        "job_id": "6611580",
                        "href": "https://www.zhipin.com/job_detail/fa58e7e31ef13a790XJ72ti1EA~~.html",
                        "job_title": "Java",
                        "salary": "13k-18k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "淘点",
                        "industry": "互联网",
                        "date": "12月27日"
                    }, {
                        "job_id": "31479892",
                        "href": "https://www.zhipin.com/job_detail/b69a93c401761c3d1HV-3NS1GVA~.html",
                        "job_title": "java",
                        "salary": "12k-18k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "赤骥",
                        "industry": "贸易/进出口",
                        "date": "12月18日"
                    }, {
                        "job_id": "26842059",
                        "href": "https://www.zhipin.com/job_detail/6882957a162a31ff1XJy39-9FVs~.html",
                        "job_title": "Java",
                        "salary": "12k-24k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "旅付通",
                        "industry": "互联网",
                        "date": "10月29日"
                    }, {
                        "job_id": "31353956",
                        "href": "https://www.zhipin.com/job_detail/c5e9e2662873ef3e1HV53t60FVQ~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 浦口区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "纬创",
                        "industry": "计算机软件",
                        "date": "12月14日"
                    }, {
                        "job_id": "26511842",
                        "href": "https://www.zhipin.com/job_detail/523e882160e1641c1XJ_2ty1FFA~.html",
                        "job_title": "Java工程师",
                        "salary": "8k-12k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "倍便利科技",
                        "industry": "互联网",
                        "date": "09月14日"
                    }, {
                        "job_id": "30746951",
                        "href": "https://www.zhipin.com/job_detail/eb22dc69329362e71HR939u0FVM~.html",
                        "job_title": "Java研发工程师",
                        "salary": "8k-13k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "金吉鸟健身",
                        "industry": "生活服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "25550057",
                        "href": "https://www.zhipin.com/job_detail/ec74dda92ecbc8071XF_3t29FVU~.html",
                        "job_title": "Java",
                        "salary": "2k-4k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "1年以内",
                        "education": "大专",
                        "company_name": "嫁思聪",
                        "industry": "社交网络",
                        "date": "08月30日"
                    }, {
                        "job_id": "25481974",
                        "href": "https://www.zhipin.com/job_detail/385145b42e86cfd51XF-09y0F1Y~.html",
                        "job_title": "Java",
                        "salary": "8k-13k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "绿和生活通",
                        "industry": "互联网",
                        "date": "12月21日"
                    }, {
                        "job_id": "19958973",
                        "href": "https://www.zhipin.com/job_detail/d7aaea2094f9ab7a1n1z3tW0F1E~.html",
                        "job_title": "java开发工程师 （DevOps）",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "06月10日"
                    }, {
                        "job_id": "13648613",
                        "href": "https://www.zhipin.com/job_detail/a7678ce9138febeb1nd839W7EVE~.html",
                        "job_title": "Java",
                        "salary": "5k-10k",
                        "addr_simple": "南京  ",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "财信网络科技",
                        "industry": "计算机软件",
                        "date": "12月06日"
                    }, {
                        "job_id": "31782774",
                        "href": "https://www.zhipin.com/job_detail/0157f3e51caa84041HV909-6F1Y~.html",
                        "job_title": "Java工程师",
                        "salary": "12k-20k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月24日"
                    }, {
                        "job_id": "28646571",
                        "href": "https://www.zhipin.com/job_detail/b348e09a38b5772a1Xx839u4F1M~.html",
                        "job_title": "高级Java开发工程师",
                        "salary": "13k-26k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "18460430",
                        "href": "https://www.zhipin.com/job_detail/2379a6fb3a28b1a51nx-3d25E1I~.html",
                        "job_title": "高级java开发",
                        "salary": "12k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "05月18日"
                    }, {
                        "job_id": "15745445",
                        "href": "https://www.zhipin.com/job_detail/d7dd6e47f58deebc1nF939i5FFc~.html",
                        "job_title": "Java",
                        "salary": "8k-16k",
                        "addr_simple": "南京 秦淮区 光华路",
                        "experience": "1-3年",
                        "education": "大专",
                        "company_name": "泰赋星",
                        "industry": "计算机软件",
                        "date": "07月17日"
                    }, {
                        "job_id": "18661090",
                        "href": "https://www.zhipin.com/job_detail/b75b56bcf70f43871nx83dy9GVI~.html",
                        "job_title": "Java",
                        "salary": "12k-20k",
                        "addr_simple": "南京 秦淮区 大光路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "宁聚科技",
                        "industry": "互联网",
                        "date": "06月10日"
                    }, {
                        "job_id": "29022948",
                        "href": "https://www.zhipin.com/job_detail/035b1db6318a8c4f1X162d-0FFo~.html",
                        "job_title": "软件工程师（JAVA）",
                        "salary": "12k-16k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "恒隆兴",
                        "industry": "计算机软件",
                        "date": "11月08日"
                    }, {
                        "job_id": "17293165",
                        "href": "https://www.zhipin.com/job_detail/d110dde588bff9891nN40t68Flc~.html",
                        "job_title": "Java开发工程师",
                        "salary": "11k-18k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "柯莱特集团",
                        "industry": "计算机软件",
                        "date": "04月24日"
                    }, {
                        "job_id": "20520251",
                        "href": "https://www.zhipin.com/job_detail/41a6342bf243b61f1XR_2d2_FVM~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京  ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁",
                        "industry": "计算机软件",
                        "date": "09月10日"
                    }, {
                        "job_id": "29710643",
                        "href": "https://www.zhipin.com/job_detail/86d8626722f149051X192t27FFE~.html",
                        "job_title": "java高级开发",
                        "salary": "15k-20k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "nubia",
                        "industry": "通信/网络设备",
                        "date": "11月14日"
                    }, {
                        "job_id": "32044794",
                        "href": "https://www.zhipin.com/job_detail/e59273a5af533b251HZ639m6GVY~.html",
                        "job_title": "Java工程师",
                        "salary": "7k-12k",
                        "addr_simple": "南京 浦口区 沿江",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "南京焦点领动云计算",
                        "industry": "互联网",
                        "date": "16:32"
                    }, {
                        "job_id": "24214705",
                        "href": "https://www.zhipin.com/job_detail/7fe19ba5ff9877b21XB42tm6EFc~.html",
                        "job_title": "Java",
                        "salary": "10k-18k",
                        "addr_simple": "南京 浦口区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "零联信息",
                        "industry": "电子商务",
                        "date": "08月05日"
                    }, {
                        "job_id": "29319641",
                        "href": "https://www.zhipin.com/job_detail/0947ed245a8f14351X152tS7FFM~.html",
                        "job_title": "JAVA(自研）",
                        "salary": "13k-17k",
                        "addr_simple": "南京 建邺区 西善桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "外勤365",
                        "industry": "互联网",
                        "date": "11月15日"
                    }, {
                        "job_id": "18837263",
                        "href": "https://www.zhipin.com/job_detail/4472406b434fd3de1nxy2Nq_FlE~.html",
                        "job_title": "高级Java技术经理",
                        "salary": "10k-20k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "南京烽火",
                        "industry": "信息安全",
                        "date": "04月03日"
                    }, {
                        "job_id": "6736270",
                        "href": "https://www.zhipin.com/job_detail/493170fa2d304e100XN53d-6EA~~.html",
                        "job_title": "java开发工程师",
                        "salary": "8k-12k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "佰钧成技术有限公司",
                        "industry": "计算机软件",
                        "date": "昨天"
                    }, {
                        "job_id": "28718487",
                        "href": "https://www.zhipin.com/job_detail/3eda0a82ab0391381Xx92tW5GFU~.html",
                        "job_title": "JAVA WEB",
                        "salary": "12k-18k",
                        "addr_simple": "南京 鼓楼区 新街口",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "音达科技",
                        "industry": "通信/网络设备",
                        "date": "10月29日"
                    }, {
                        "job_id": "26374086",
                        "href": "https://www.zhipin.com/job_detail/dc9d754b30dfca151XJ53Nm9GFQ~.html",
                        "job_title": "java研发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "小黑鱼",
                        "industry": "互联网",
                        "date": "12月19日"
                    }, {
                        "job_id": "30960823",
                        "href": "https://www.zhipin.com/job_detail/f45ca2ff548c1e3d1HRz3d21ElE~.html",
                        "job_title": "JAVA",
                        "salary": "12k-20k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "大别山珍农业科技",
                        "industry": "互联网",
                        "date": "12月12日"
                    }, {
                        "job_id": "16561909",
                        "href": "https://www.zhipin.com/job_detail/c0dbdf2c607d67031nJ_3dy0EFs~.html",
                        "job_title": "Java",
                        "salary": "8k-13k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "睿之航",
                        "industry": "计算机软件",
                        "date": "12月06日"
                    }, {
                        "job_id": "24396452",
                        "href": "https://www.zhipin.com/job_detail/711965cb00c67ead1XB50tu5FVA~.html",
                        "job_title": "java开发工程师",
                        "salary": "12k-24k",
                        "addr_simple": "南京 江宁区 百家湖",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "金智教育",
                        "industry": "互联网",
                        "date": "11月27日"
                    }, {
                        "job_id": "12220619",
                        "href": "https://www.zhipin.com/job_detail/df8149d986ddce5c1nZ42d27EVs~.html",
                        "job_title": "Java高级软件开发工程师",
                        "salary": "13k-25k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商",
                        "industry": "互联网",
                        "date": "12月04日"
                    }, {
                        "job_id": "6582457",
                        "href": "https://www.zhipin.com/job_detail/9dc45c0633b61b940XFy2dm4Fw~~.html",
                        "job_title": "java研发工程师",
                        "salary": "13k-25k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "12月05日"
                    }, {
                        "job_id": "27089078",
                        "href": "https://www.zhipin.com/job_detail/ce52dfe37ee49fb81XN609S9F1o~.html",
                        "job_title": "java开发工程师",
                        "salary": "12k-18k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "法本信息",
                        "industry": "互联网",
                        "date": "09月26日"
                    }, {
                        "job_id": "31816944",
                        "href": "https://www.zhipin.com/job_detail/d15347691bc019251HVy2tu0FFY~.html",
                        "job_title": "中/高/资深Java开发工程师",
                        "salary": "18k-35k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "小米",
                        "industry": "互联网",
                        "date": "12月26日"
                    }, {
                        "job_id": "24362357",
                        "href": "https://www.zhipin.com/job_detail/889ff829b2f52e431XB53d--FVU~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 秦淮区 石鼓路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "知嘛",
                        "industry": "互联网",
                        "date": "08月08日"
                    }, {
                        "job_id": "30473075",
                        "href": "https://www.zhipin.com/job_detail/b4e065f93eeafb991HR-3N69F1c~.html",
                        "job_title": "中级java工程师",
                        "salary": "8k-13k",
                        "addr_simple": "南京 江宁区 东山",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "科大国创软件股份公司",
                        "industry": "计算机软件",
                        "date": "12月19日"
                    }, {
                        "job_id": "22950981",
                        "href": "https://www.zhipin.com/job_detail/ebdabf1147ddb2b01XZz3t20GFM~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "12月13日"
                    }, {
                        "job_id": "30935445",
                        "href": "https://www.zhipin.com/job_detail/5cb913455134143f1HRz2Ni5FFc~.html",
                        "job_title": "Java程序员",
                        "salary": "9k-14k",
                        "addr_simple": "南京  ",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "中电28所",
                        "industry": "移动互联网",
                        "date": "12月06日"
                    }, {
                        "job_id": "6134416",
                        "href": "https://www.zhipin.com/job_detail/e9352590f80c9ebf0XV539m8Fg~~.html",
                        "job_title": "Java",
                        "salary": "6k-12k",
                        "addr_simple": "南京 江宁区 大学城",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "中教畅享",
                        "industry": "互联网",
                        "date": "12月05日"
                    }, {
                        "job_id": "21575998",
                        "href": "https://www.zhipin.com/job_detail/a0203d16fef8f10c1XV_3Ni0GVo~.html",
                        "job_title": "JAVA工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 浦口区 沿江",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏荣泽",
                        "industry": "计算机软件",
                        "date": "07月13日"
                    }, {
                        "job_id": "30574873",
                        "href": "https://www.zhipin.com/job_detail/a9ad95565ee083a81HR_3Nm1F1E~.html",
                        "job_title": "Java开发工程师",
                        "salary": "12k-16k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "京北方",
                        "industry": "互联网金融",
                        "date": "11月30日"
                    }, {
                        "job_id": "26810401",
                        "href": "https://www.zhipin.com/job_detail/88b0abcba534c0991XJy2t25EFM~.html",
                        "job_title": "Java",
                        "salary": "9k-15k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中国云签",
                        "industry": "企业服务",
                        "date": "09月20日"
                    }, {
                        "job_id": "17333061",
                        "href": "https://www.zhipin.com/job_detail/0f34a89b7bf101711nN52N69FlM~.html",
                        "job_title": "java开发工程师",
                        "salary": "12k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "苏宁物流",
                        "industry": "物流/仓储",
                        "date": "10月16日"
                    }, {
                        "job_id": "31929439",
                        "href": "https://www.zhipin.com/job_detail/3a44b9fc6e9d4f241HVz2dS5E1s~.html",
                        "job_title": "Java软件开发工程师",
                        "salary": "20k-40k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "华为技术有限公司",
                        "industry": "计算机软件",
                        "date": "12月27日"
                    }, {
                        "job_id": "30404988",
                        "href": "https://www.zhipin.com/job_detail/f173c460321537961HR-29m0GFo~.html",
                        "job_title": "java开发",
                        "salary": "10k-14k",
                        "addr_simple": "南京 秦淮区 中华门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "联蔚信息",
                        "industry": "企业服务",
                        "date": "11月27日"
                    }, {
                        "job_id": "25132417",
                        "href": "https://www.zhipin.com/job_detail/75397e2f9a06cf951XF72N-5EVU~.html",
                        "job_title": "java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 鼓楼区 热河南路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "第三极区块链",
                        "industry": "移动互联网",
                        "date": "08月22日"
                    }, {
                        "job_id": "30909363",
                        "href": "https://www.zhipin.com/job_detail/7bdd331196652c061HRz29S-FlE~.html",
                        "job_title": "java开发工程师（高级）",
                        "salary": "10k-15k",
                        "addr_simple": "南京 江宁区 东山",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "科大国创软件股份公司",
                        "industry": "计算机软件",
                        "date": "12月06日"
                    }, {
                        "job_id": "23224585",
                        "href": "https://www.zhipin.com/job_detail/9b43167a8b091b981Xd42dm4GFc~.html",
                        "job_title": "Java web开发工程师",
                        "salary": "12k-20k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京烽火",
                        "industry": "信息安全",
                        "date": "11月09日"
                    }, {
                        "job_id": "23790609",
                        "href": "https://www.zhipin.com/job_detail/941caa7370a379a71Xd90t27EFs~.html",
                        "job_title": "Java开发",
                        "salary": "10k-16k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "汉克时代",
                        "industry": "互联网",
                        "date": "11月22日"
                    }, {
                        "job_id": "26246842",
                        "href": "https://www.zhipin.com/job_detail/51058e4475c7486f1XJ439u1FFA~.html",
                        "job_title": "JAVA技术经理",
                        "salary": "15k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "互联网",
                        "date": "12月11日"
                    }, {
                        "job_id": "31795981",
                        "href": "https://www.zhipin.com/job_detail/46eb1bf2fc63e2001HV90ti0GFM~.html",
                        "job_title": "Java开发工程师",
                        "salary": "12k-16k",
                        "addr_simple": "南京 秦淮区 碑亭巷",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "上海屹通信息科技",
                        "industry": "移动互联网",
                        "date": "12月24日"
                    }, {
                        "job_id": "24715088",
                        "href": "https://www.zhipin.com/job_detail/a5d6554aa50b5d431XB92ti9GFo~.html",
                        "job_title": "Java资深开发工程师",
                        "salary": "20k-30k",
                        "addr_simple": "南京 玄武区 亚东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商",
                        "industry": "O2O",
                        "date": "08月14日"
                    }, {
                        "job_id": "25617745",
                        "href": "https://www.zhipin.com/job_detail/b7359d506f2e2f441XF82tq6FFc~.html",
                        "job_title": "JAVA后台开发",
                        "salary": "20k-40k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "润和软件",
                        "industry": "移动互联网",
                        "date": "12月04日"
                    }, {
                        "job_id": "28448506",
                        "href": "https://www.zhipin.com/job_detail/94a52afb3453980e1Xx-39W4EFQ~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 玄武区 孝陵卫",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京冠霆",
                        "industry": "互联网",
                        "date": "12月16日"
                    }, {
                        "job_id": "7080762",
                        "href": "https://www.zhipin.com/job_detail/7c260ba93e272eba0HRy29q7Eg~~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "电子商务",
                        "date": "12月05日"
                    }, {
                        "job_id": "25853290",
                        "href": "https://www.zhipin.com/job_detail/5f2c0ae36fd5be831XFy3t6_GVI~.html",
                        "job_title": "java软件工程师",
                        "salary": "25k-50k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "vivo",
                        "industry": "移动互联网",
                        "date": "09月10日"
                    }, {
                        "job_id": "32008401",
                        "href": "https://www.zhipin.com/job_detail/4978b6f364a861cd1HZ629W5EFM~.html",
                        "job_title": "Java开发工程师",
                        "salary": "15k-25k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "经验不限",
                        "education": "本科",
                        "company_name": "小黑鱼",
                        "industry": "互联网",
                        "date": "昨天"
                    }, {
                        "job_id": "24125731",
                        "href": "https://www.zhipin.com/job_detail/4a3538cac0c6f8891XB72di6E1M~.html",
                        "job_title": "Java工程师",
                        "salary": "14k-20k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "妖精的口袋",
                        "industry": "电子商务",
                        "date": "11月16日"
                    }, {
                        "job_id": "17772167",
                        "href": "https://www.zhipin.com/job_detail/492d9a634de103b71nN93N-8FlU~.html",
                        "job_title": "高级Java工程师",
                        "salary": "13k-26k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "万得资讯",
                        "industry": "互联网",
                        "date": "11月22日"
                    }, {
                        "job_id": "28358947",
                        "href": "https://www.zhipin.com/job_detail/aad585f1209ef7f41Xx53tW0FFU~.html",
                        "job_title": "Java软件开发工程师",
                        "salary": "12k-24k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁云商集团",
                        "industry": "互联网",
                        "date": "12月27日"
                    }, {
                        "job_id": "26887362",
                        "href": "https://www.zhipin.com/job_detail/ec27ae59805902351XJy09q-FlA~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-16k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "学历不限",
                        "company_name": "慧明软件",
                        "industry": "计算机软件",
                        "date": "11月06日"
                    }, {
                        "job_id": "24008204",
                        "href": "https://www.zhipin.com/job_detail/5515756d8c708ce61XB629W_EFY~.html",
                        "job_title": "JAVA开发工程师",
                        "salary": "15k-25k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "南京领添",
                        "industry": "互联网",
                        "date": "09月04日"
                    }, {
                        "job_id": "22488529",
                        "href": "https://www.zhipin.com/job_detail/d31faa44af93dc7a1XZ-09W4Els~.html",
                        "job_title": "Java开发",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 安德门",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "文思海辉西安分公司",
                        "industry": "互联网",
                        "date": "12月25日"
                    }, {
                        "job_id": "31885079",
                        "href": "https://www.zhipin.com/job_detail/bdfd54faac1b4d071HVy09i9F1s~.html",
                        "job_title": "Java（前置应用）",
                        "salary": "6k-9k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "30676722",
                        "href": "https://www.zhipin.com/job_detail/7e140310227389831HR83Nu6ElA~.html",
                        "job_title": "Java架构师",
                        "salary": "18k-30k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "13068197",
                        "href": "https://www.zhipin.com/job_detail/0862d99e22f5f0641nd63dW8GVU~.html",
                        "job_title": "JAVA 高级研发工程师",
                        "salary": "12k-22k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "亚信科技",
                        "industry": "计算机软件",
                        "date": "04月21日"
                    }, {
                        "job_id": "21487690",
                        "href": "https://www.zhipin.com/job_detail/a1aec72dc525ac641XV-09q7GVI~.html",
                        "job_title": "Java研发",
                        "salary": "6k-12k",
                        "addr_simple": "南京 鼓楼区 中央门",
                        "experience": "1年以内",
                        "education": "本科",
                        "company_name": "贝电",
                        "industry": "计算机软件",
                        "date": "11月22日"
                    }, {
                        "job_id": "26187565",
                        "href": "https://www.zhipin.com/job_detail/7da51654fbe25c271XJ709q4Flc~.html",
                        "job_title": "Java工程师",
                        "salary": "5k-10k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "星云物联",
                        "industry": "智能硬件",
                        "date": "10月10日"
                    }, {
                        "job_id": "25401267",
                        "href": "https://www.zhipin.com/job_detail/b71fc10e030183261XF-29y_FlU~.html",
                        "job_title": "java开发工程师---南京",
                        "salary": "15k-30k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "小米",
                        "industry": "互联网",
                        "date": "12月18日"
                    }, {
                        "job_id": "27239720",
                        "href": "https://www.zhipin.com/job_detail/8471c27af728101a1XN42NS6ElI~.html",
                        "job_title": "Java工程师",
                        "salary": "10k-18k",
                        "addr_simple": "南京 建邺区 兴隆",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏索派",
                        "industry": "计算机服务",
                        "date": "09月28日"
                    }, {
                        "job_id": "26193676",
                        "href": "https://www.zhipin.com/job_detail/fc06c159fa943d131XJ70t67F1Q~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-16k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "京北方",
                        "industry": "计算机软件",
                        "date": "09月10日"
                    }, {
                        "job_id": "31278286",
                        "href": "https://www.zhipin.com/job_detail/f480adacfc8638841HV43NW_GFQ~.html",
                        "job_title": "java开发工程师",
                        "salary": "11k-22k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "雁联技术",
                        "industry": "计算机软件",
                        "date": "12月13日"
                    }, {
                        "job_id": "26679866",
                        "href": "https://www.zhipin.com/job_detail/23fc2bc28a9c09d81XJ83NS1FlQ~.html",
                        "job_title": "Java",
                        "salary": "6k-8k",
                        "addr_simple": "南京 建邺区 建邺万达",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "江苏浩凯",
                        "industry": "互联网",
                        "date": "09月18日"
                    }, {
                        "job_id": "27271368",
                        "href": "https://www.zhipin.com/job_detail/94a208f6052251cc1XN43Ny-Flo~.html",
                        "job_title": "Java开发工程师",
                        "salary": "7k-10k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "华警云防科技",
                        "industry": "计算机软件",
                        "date": "12月26日"
                    }, {
                        "job_id": "30151005",
                        "href": "https://www.zhipin.com/job_detail/57dc44062c6eeb231HR73ty9EFc~.html",
                        "job_title": "Java项目经理",
                        "salary": "12k-24k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "江苏零浩",
                        "industry": "O2O",
                        "date": "昨天"
                    }, {
                        "job_id": "31884841",
                        "href": "https://www.zhipin.com/job_detail/0b6e48671cf34a0c1HVy09m1FFM~.html",
                        "job_title": "Java（后台应用）",
                        "salary": "6k-9k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "江苏网谱数据",
                        "industry": "数据服务",
                        "date": "12月26日"
                    }, {
                        "job_id": "17142429",
                        "href": "https://www.zhipin.com/job_detail/4b1dba5adc4fc64e1nN739-5Els~.html",
                        "job_title": "JAVA开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "苏宁易购",
                        "industry": "O2O",
                        "date": "12月06日"
                    }, {
                        "job_id": "25090426",
                        "href": "https://www.zhipin.com/job_detail/491e9f094a2bfb201XF60t25ElQ~.html",
                        "job_title": "Java",
                        "salary": "15k-20k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "华博金服",
                        "industry": "互联网金融",
                        "date": "08月21日"
                    }, {
                        "job_id": "27516390",
                        "href": "https://www.zhipin.com/job_detail/7486972adc2c895f1XN_2tu-GVI~.html",
                        "job_title": "Java开发",
                        "salary": "10k-20k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "南京烽火",
                        "industry": "计算机软件",
                        "date": "10月19日"
                    }, {
                        "job_id": "17393874",
                        "href": "https://www.zhipin.com/job_detail/770f5987464476ba1nN50t61F1Y~.html",
                        "job_title": "java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 玄武区 梅园",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "苏宁IT",
                        "industry": "互联网",
                        "date": "12月06日"
                    }, {
                        "job_id": "28460767",
                        "href": "https://www.zhipin.com/job_detail/5bf34ea7cb29c30f1Xx-3d26FlU~.html",
                        "job_title": "中高级Java开发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 江宁区 方山",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "软通动力",
                        "industry": "计算机软件",
                        "date": "12月25日"
                    }, {
                        "job_id": "27849834",
                        "href": "https://www.zhipin.com/job_detail/66ab134ce20ff5f71XNy39S1E1Y~.html",
                        "job_title": "java高级技术经理",
                        "salary": "15k-30k",
                        "addr_simple": "南京 玄武区 ",
                        "experience": "5-10年",
                        "education": "大专",
                        "company_name": "Suning",
                        "industry": "批发/零售",
                        "date": "10月13日"
                    }, {
                        "job_id": "15183057",
                        "href": "https://www.zhipin.com/job_detail/076216bc277261221nF70969FVU~.html",
                        "job_title": "JAVA软件开发工程师",
                        "salary": "8k-16k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "世纪恒通",
                        "industry": "移动互联网",
                        "date": "06月05日"
                    }, {
                        "job_id": "27851244",
                        "href": "https://www.zhipin.com/job_detail/19ba3d4906625d151XNy3ty_FFY~.html",
                        "job_title": "Java开发",
                        "salary": "10k-12k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "云沃客",
                        "industry": "计算机软件",
                        "date": "11月30日"
                    }, {
                        "job_id": "31851333",
                        "href": "https://www.zhipin.com/job_detail/1bd9ef5e5aee0ffe1HVy3ty-E1E~.html",
                        "job_title": "java",
                        "salary": "15k-30k",
                        "addr_simple": "南京 栖霞区 亚东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "商窝企业管理咨询",
                        "industry": "企业服务",
                        "date": "12月25日"
                    }, {
                        "job_id": "31420940",
                        "href": "https://www.zhipin.com/job_detail/53ffa3d17a2bb66f1HV-2d20FFI~.html",
                        "job_title": "Java开发   外派南瑞",
                        "salary": "8k-13k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "润和软件",
                        "industry": "移动互联网",
                        "date": "12月17日"
                    }, {
                        "job_id": "26835913",
                        "href": "https://www.zhipin.com/job_detail/5339ae5cb6c6f36a1XJy2Ni0EVE~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-18k",
                        "addr_simple": "南京 玄武区 孝陵卫",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "汇通达网络",
                        "industry": "互联网",
                        "date": "09月20日"
                    }, {
                        "job_id": "23565659",
                        "href": "https://www.zhipin.com/job_detail/a3521d7465d2cf601Xd_3di7FVs~.html",
                        "job_title": "玄武区Java开发",
                        "salary": "9k-18k",
                        "addr_simple": "南京 玄武区 珠江路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "云族佳",
                        "industry": "互联网",
                        "date": "07月23日"
                    }, {
                        "job_id": "21760146",
                        "href": "https://www.zhipin.com/job_detail/46c3b2e34334aa2e1XV93d28FFQ~.html",
                        "job_title": "Java",
                        "salary": "8k-15k",
                        "addr_simple": "南京 江宁区 ",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "昊亦源",
                        "industry": "人力资源服务",
                        "date": "10月23日"
                    }, {
                        "job_id": "17290541",
                        "href": "https://www.zhipin.com/job_detail/f3f0a2ebf133bf0f1nN40t24FFM~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 鼓楼区 山西路",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "五星电器",
                        "industry": "家具/家电/家居",
                        "date": "12月06日"
                    }, {
                        "job_id": "19069550",
                        "href": "https://www.zhipin.com/job_detail/7b1c2b064a1030fc1n163dS4FVI~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-20k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "5-10年",
                        "education": "本科",
                        "company_name": "绛门科技",
                        "industry": "计算机软件",
                        "date": "04月10日"
                    }, {
                        "job_id": "31803082",
                        "href": "https://www.zhipin.com/job_detail/5128808b521847cf1HVy2969GFA~.html",
                        "job_title": "初级java工程师",
                        "salary": "7k-8k",
                        "addr_simple": "南京 秦淮区 建康路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "开科唯识",
                        "industry": "计算机软件",
                        "date": "12月24日"
                    }, {
                        "job_id": "13686456",
                        "href": "https://www.zhipin.com/job_detail/27130ffa8a5c80b01nd809u5FVQ~.html",
                        "job_title": "Java开发工程师",
                        "salary": "10k-18k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "东方网力",
                        "industry": "计算机软件",
                        "date": "03月31日"
                    }, {
                        "job_id": "29189558",
                        "href": "https://www.zhipin.com/job_detail/fa8e1a549c9b7bb01X1709S4FVo~.html",
                        "job_title": "中高级java开发",
                        "salary": "8k-16k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "纬创",
                        "industry": "计算机软件",
                        "date": "11月16日"
                    }, {
                        "job_id": "24604982",
                        "href": "https://www.zhipin.com/job_detail/2f22d71bb4f0b2c91XB829m0GFA~.html",
                        "job_title": "java开发（南京）",
                        "salary": "9k-17k",
                        "addr_simple": "南京 建邺区 江东",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "欣网互联",
                        "industry": "移动互联网",
                        "date": "08月13日"
                    }, {
                        "job_id": "25582832",
                        "href": "https://www.zhipin.com/job_detail/37bca057374dc6221XF_09-1E1A~.html",
                        "job_title": "java工程师",
                        "salary": "7k-12k",
                        "addr_simple": "南京 秦淮区 淮海路",
                        "experience": "1-3年",
                        "education": "本科",
                        "company_name": "上海贝法瑞",
                        "industry": "计算机软件",
                        "date": "08月30日"
                    }, {
                        "job_id": "31385866",
                        "href": "https://www.zhipin.com/job_detail/a4b5fe0e5e3087341HV509i1FlQ~.html",
                        "job_title": "java开发-3年以上经验",
                        "salary": "11k-22k",
                        "addr_simple": "南京 建邺区 湖西街",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "云沃客",
                        "industry": "计算机软件",
                        "date": "12月15日"
                    }, {
                        "job_id": "11747087",
                        "href": "https://www.zhipin.com/job_detail/6cdaa8655adf68661nV939q9GFU~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 栖霞区 尧化",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "首一商城",
                        "industry": "电子商务",
                        "date": "11月15日"
                    }, {
                        "job_id": "24406489",
                        "href": "https://www.zhipin.com/job_detail/2f78b1639c8c50471XB-29u5GFs~.html",
                        "job_title": "高级Java工程师",
                        "salary": "12k-15k",
                        "addr_simple": "南京 雨花台区 宁南",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "数据堂",
                        "industry": "互联网",
                        "date": "12月07日"
                    }, {
                        "job_id": "28823737",
                        "href": "https://www.zhipin.com/job_detail/2bbffa2fd555f3ef1Xxy2d66E1U~.html",
                        "job_title": "Java",
                        "salary": "10k-15k",
                        "addr_simple": "南京 雨花台区 铁心桥",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "奇漾科技",
                        "industry": "计算机软件",
                        "date": "12月12日"
                    }, {
                        "job_id": "31089082",
                        "href": "https://www.zhipin.com/job_detail/552dca29512558431HV609S9GFA~.html",
                        "job_title": "java工程师",
                        "salary": "10k-15k",
                        "addr_simple": "南京 玄武区 丹凤街",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "中云智慧",
                        "industry": "计算机软件",
                        "date": "12月10日"
                    }, {
                        "job_id": "27924326",
                        "href": "https://www.zhipin.com/job_detail/c5db5721909f8ee71XNz2dm-ElQ~.html",
                        "job_title": "JAVA工程师",
                        "salary": "14k-17k",
                        "addr_simple": "南京 建邺区 西善桥",
                        "experience": "3-5年",
                        "education": "本科",
                        "company_name": "外勤365",
                        "industry": "互联网",
                        "date": "10月15日"
                    }, {
                        "job_id": "30829904",
                        "href": "https://www.zhipin.com/job_detail/ec7ae2bd83c0d1041HRy2dS0EFY~.html",
                        "job_title": "java",
                        "salary": "10k-12k",
                        "addr_simple": "南京 建邺区 小行",
                        "experience": "3-5年",
                        "education": "大专",
                        "company_name": "金泰亚盛",
                        "industry": "计算机软件",
                        "date": "12月18日"
                    }
                ]
            }
        },

    }
</script>

<style scoped>

</style>