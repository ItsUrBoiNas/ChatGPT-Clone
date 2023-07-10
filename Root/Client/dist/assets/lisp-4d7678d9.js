import{g as k}from"./index-de992bb0.js";function x(s,i){for(var r=0;r<i.length;r++){const a=i[r];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in s)){const e=Object.getOwnPropertyDescriptor(a,n);e&&Object.defineProperty(s,n,e.get?e:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var g,m;function E(){if(m)return g;m=1,g=s,s.displayName="lisp",s.aliases=[];function s(i){(function(r){function a(c){return RegExp(/(\()/.source+"(?:"+c+")"+/(?=[\s\)])/.source)}function n(c){return RegExp(/([\s([])/.source+"(?:"+c+")"+/(?=[\s)])/.source)}var e=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,y="&"+e,o="(\\()",v="(?=\\))",b="(?=\\s)",l=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,t={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp(o+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+b),lookbehind:!0},{pattern:RegExp(o+"(?:append|by|collect|concat|do|finally|for|in|return)"+b),lookbehind:!0}],declare:{pattern:a(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:a(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:n(/nil|t/.source),lookbehind:!0},number:{pattern:n(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(o+"def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp(o+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+e+/\s+\(/.source+l+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(o+"lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(o+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},u={"lisp-marker":RegExp(y),varform:{pattern:RegExp(/\(/.source+e+/\s+(?=\S)/.source+l+/\)/.source),inside:t},argument:{pattern:RegExp(/(^|[\s(])/.source+e),lookbehind:!0,alias:"variable"},rest:t},p="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(o+l+v),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+p),inside:u},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+p),inside:u},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:u},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};t.lambda.inside.arguments=d,t.defun.inside.arguments=r.util.clone(d),t.defun.inside.arguments.inside.sublist=d,r.languages.lisp=t,r.languages.elisp=t,r.languages.emacs=t,r.languages["emacs-lisp"]=t})(i)}return g}var f=E();const R=k(f),w=x({__proto__:null,default:R},[f]);export{w as l};