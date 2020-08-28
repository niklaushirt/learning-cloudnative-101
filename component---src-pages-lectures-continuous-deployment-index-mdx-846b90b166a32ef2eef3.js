(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{KLHY:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return l})),a.d(e,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),c=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}},s=c("AnchorLinks"),b=c("AnchorLink"),p=c("CardGroup"),u=c("MiniCard"),O={_frontmatter:l},d=o.a;function m(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.b)(d,Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)(s,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Continuous Deployment"),Object(i.b)(b,{mdxType:"AnchorLink"},"Resources"),Object(i.b)(b,{mdxType:"AnchorLink"},"Activities")),Object(i.b)("h2",null,"Continuous Deployment"),Object(i.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Continuous Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(i.b)("h3",null,"What is GitOps?"),Object(i.b)("p",null,"GitOps in short is a set of practices to use Git pull requests to manage infrastructure and application configurations. Git repository in GitOps is considered the only source of truth and contains the entire state of the system so that the trail of changes to the system state are visible and auditable."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Traceability of changes in GitOps is no novelty in itself as this approach is almost universally employed for the application source code. However GitOps advocates applying the same principles (reviews, pull requests, tagging, etc) to infrastructure and application\nconfiguration so that teams can benefit from the same assurance as they do for the application source code."),Object(i.b)("li",{parentName:"ul"},"Although there is no precise definition or agreed upon set of rules, the following principles are an approximation of what constitutes a GitOps practice:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Declarative description of the system is stored in Git (configs, monitoring, etc)"),Object(i.b)("li",{parentName:"ul"},"Changes to the state are made via pull requests"),Object(i.b)("li",{parentName:"ul"},"Git push reconciled with the state of the running system with the state in the Git repository")))),Object(i.b)("h2",null,"Resources"),Object(i.b)(p,{mdxType:"CardGroup"},Object(i.b)(u,{title:"Understanding GitOps",href:"/slides/05-Understanding-GitOps.pdf",mdxType:"MiniCard"})),Object(i.b)("h2",null,"Activities"),Object(i.b)("p",null,"These activites give you a chance to walkthrough building CD pipelines using ArgoCD."),Object(i.b)("p",null,"These tasks assume that you have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reviewed the Continuous Deployment concept page.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GitOps"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Introduction to GitOps with OpenShift"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-introduction/"}),"Learn OpenShift")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GitOps Multi-cluster"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Multi-cluster GitOps with OpenShift"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/gitops-multicluster/"}),"Learn OpenShift")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 min")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},Object(i.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArgoCD Lab"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Learn how to setup ArgoCD and Deploy Application"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../continuous-deployment/activities/"}),"ArgoCD")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")))),Object(i.b)("p",null,"Once you have completed these tasks, you will have created an ArgoCD deployment and have an understanding of Continuous Deployment."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-continuous-deployment-index-mdx-846b90b166a32ef2eef3.js.map