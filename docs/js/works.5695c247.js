(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["works"],{1822:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works"},[t._m(0),a("div",{staticClass:"works__content"},[a("ul",{staticClass:"works__content-list"},t._l(t.worksSummary,function(e,i){return a("li",{key:e.id,staticClass:"works__content-list__item",on:{click:function(e){return t.clickWork(i)}}},[a("figure",{staticClass:"item"},[a("img",{attrs:{src:e.appImageSource}}),a("h3",[t._v(t._s(e.appName))]),t._m(1,!0)]),a("works-detail-modal",{attrs:{currentModalIndex:t.currentModalIndex,index:i,workSummary:e,workDetail:t.worksDetail[i]},on:{modalClose:t.closeModal}})],1)}),0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works__title"},[a("h1",[t._v("つくったもの")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figcaption",{staticClass:"item-mask"},[a("h2",{staticClass:"item-mask--text"},[t._v("\n\t\t\t\t\t\t\tRead More...\n\t\t\t\t\t\t")])])}],s=a("64e1"),r=a("f688"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"works__detail"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],staticClass:"works__modal-overlay",on:{click:function(e){return e.stopPropagation(),t.close(e)}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],staticClass:"works__modal",attrs:{id:t.modalId}},[i("div",{staticClass:"modal__header"},[i("h3",[t._v("\n\t\t\t\t"+t._s(t.workSummary.appName)+"\n\t\t\t")]),i("h2",{staticClass:"modal__header__close",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("×")])]),i("div",{staticClass:"modal__content"},[i("div",{staticClass:"modal__content--figure"},[i("img",{staticClass:"figure-capture",attrs:{src:t.workSummary.appImageSource}}),i("a",{staticClass:"figure-git-hub",attrs:{href:t.workDetail.gitHubLink}},[i("img",{attrs:{src:a("ec4d")}})])]),i("div",{staticClass:"modal__content--info",domProps:{innerHTML:t._s(t.detailComment)}}),i("ul",{staticClass:"item__icon-list"},t._l(t.workSummary.appIconList,function(e){return i("li",{key:e.id,staticClass:"item__icon-list__image"},[""===e.imgSource?i("h4",{staticClass:"item__icon-list__alt-text"},[t._v(t._s(e.tagName))]):i("img",{attrs:{src:e.imgSource}}),i("p",[t._v(t._s(e.tagName))])])}),0),i("div",{staticClass:"modal__footer"},[i("button",{staticClass:"button--close",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("\n\t\t\t\t\tClose\n\t\t\t\t")])])])])])},c=[],m={props:{currentModalIndex:Number,index:Number,workSummary:Object,workDetail:Object},computed:{modalId(){return"modal"+this.index},isModalVisible(){return this.currentModalIndex===this.index},detailComment(){let t="";return this.workDetail.commentArray.forEach(e=>{t+="<p>",t+=e,t+="</p>"}),t}},watch:{isModalVisible(){this.isModalVisible&&this.setModalPosition()}},methods:{setModalPosition(){this.$nextTick(()=>{let t=window.innerWidth,e=window.innerHeight,a=document.getElementById(this.modalId),i=a.offsetHeight,o=a.offsetWidth;a.style.top=(e-i)/2+"px",a.style.left=(t-o)/2+"px"})},close(){this.isModalVisible&&this.$emit("modalClose")}}},p=m,l=(a("490b"),a("2877")),u=Object(l["a"])(p,n,c,!1,null,"5305685e",null),d=u.exports,g={data(){return{worksSummary:s,worksDetail:r,currentModalIndex:-1}},components:{worksDetailModal:d},methods:{clickWork(t){this.currentModalIndex=t},closeModal(){this.currentModalIndex=-1}}},_=g,v=(a("5b96"),Object(l["a"])(_,i,o,!1,null,"26810d20",null));e["default"]=v.exports},"490b":function(t,e,a){"use strict";var i=a("fb5d"),o=a.n(i);o.a},"5b96":function(t,e,a){"use strict";var i=a("9aeb"),o=a.n(i);o.a},"64e1":function(t){t.exports=[{id:0,appName:"ポートフォリオサイト",appImageSource:"./app_capture/portfolio-vue.png",gitHubLink:"https://github.com/a-pompom/vue-markdown-editor",appIconList:[{tagId:0,imgSource:"./external/javascript.svg",tagName:"JavaScript"},{tagId:1,imgSource:"./external/vue-dot-js.svg",tagName:"Vue.js"}]},{id:1,appName:"Twitterクローンアプリ",appImageSource:"./app_capture/tweet_app.png",gitHubLink:"https://github.com/a-pompom/spring-boot-twitter_clone_practice",appIconList:[{tagId:0,imgSource:"",tagName:"Spring"},{tagId:1,imgSource:"./external/java.svg",tagName:"Java"},{tagId:2,imgSource:"./external/javascript.svg",tagName:"JavaScript"},{tagId:3,imgSource:"./external/vue-dot-js.svg",tagName:"Vue.js"}]},{id:2,appName:"Markdownエディタっぽいやつ",appImageSource:"./app_capture/markdown_app.png",gitHubLink:"https://github.com/a-pompom/vue-markdown-editor",appIconList:[{tagId:0,imgSource:"./external/javascript.svg",tagName:"JavaScript"},{tagId:1,imgSource:"./external/vue-dot-js.svg",tagName:"Vue.js"}]},{id:3,appName:"kintoneを利用して日報っぽい文章を作成するエディタ",appImageSource:"./app_capture/kintone_report_app.png",gitHubLink:"https://github.com/a-pompom/wg/tree/master/kintone_report",appIconList:[{tagId:0,imgSource:"",tagName:"Kintone"},{tagId:1,imgSource:"./external/javascript.svg",tagName:"JavaScript"},{tagId:2,imgSource:"./external/vue-dot-js.svg",tagName:"Vue.js"}]},{id:4,appName:"SpringBoot + SpringSecurityでログイン機能の作成",appImageSource:"./app_capture/springboot-security.png",gitHubLink:"https://github.com/a-pompom/spring-boot-login_app_demo",appIconList:[{tagId:0,imgSource:"",tagName:"Spring"},{tagId:1,imgSource:"./external/java.svg",tagName:"Java"}]}]},"9aeb":function(t,e,a){},f688:function(t){t.exports=[{id:0,gitHubLink:"https://github.com/a-pompom/portfolio_Vue",commentArray:["ポートフォリオサイト(仮)。","VueとGitの練習がてらさくっと作ってみました。モーダルとかはけっこう頑張りました。","VueもGitも理解が浅すぎることを痛感したので、もっと頑張りたいです。"]},{id:1,gitHubLink:"https://github.com/a-pompom/spring-boot-twitter_clone_practice",commentArray:["Spring Bootのお勉強がてらTwitterを色々再現しようと割と頑張ったもの。","Vue-CLIとうまい感じに連携できなくて若干中途半端な感じになってしまいましたが、いい経験にはなりました。","めっちゃバグで詰まりまくりましたが、なんやかんや作っていて楽しかったです。"]},{id:2,gitHubLink:"https://github.com/a-pompom/vue-markdown-editor",commentArray:["10連休を半分ぐらい捧げて作りました。","テキスト処理は割と本業というか好きな分野なので、すごく面白かったです。","もうちょっと手を加えてブログ記事エディタとして使えるようにしたい。"]},{id:3,gitHubLink:"https://github.com/a-pompom/wg/tree/master/kintone_report",commentArray:["kintoneさんの波が来ているとか来ていないとかで、お試しで作りました。","Promiseとかオブジェクトの整形とか新しい発見も色々あって楽しかったので、これからも触っていきたいです。"]},{id:4,gitHubLink:"https://github.com/a-pompom/spring-boot-login_app_demo",commentArray:["ログイン機能を作ったシンプルなものですが、Qiitaで評価して頂いています。","Spring Bootの資料は英語ばかりで書籍も少なめでつらいから、日本語資料増やしていきたいですね。"]}]},fb5d:function(t,e,a){}}]);
//# sourceMappingURL=works.5695c247.js.map