!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@mui/material/TextField"),require("react")):"function"==typeof define&&define.amd?define("MaterialUiPhoneNumber",["@mui/material/TextField","react"],r):"object"==typeof exports?exports.MaterialUiPhoneNumber=r(require("@mui/material/TextField"),require("react")):e.MaterialUiPhoneNumber=r(e["@mui/material/TextField"],e.React)}("undefined"!=typeof self?self:this,((e,r)=>(()=>{var a={530:e=>{var r;function a(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,t,o=[],i=!0,u=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,t=e}finally{try{i||null==a.return||a.return()}finally{if(u)throw t}}return o}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){if(e){if("string"==typeof e)return u(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,n=new Array(r);a<r;a++)n[a]=e[a];return n}var c={};function l(e,r,a){r in c||(c[r]=[]);var n=a||0;c[r][n]=e}var s,f=(r=[]).concat.apply(r,function(e){if(Array.isArray(e))return u(e)}(s=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["American Samoa",["oceania"],"as","1684"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Anguilla",["america","carribean"],"ai","1264"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","+.. (..) ........"],["Armenia",["asia","ex-ussr"],"am","374"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","+.. ... ... ..."],["Austria",["europe","european-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994"],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","+... (..) ... .. .."],["Belgium",["europe","european-union"],"be","32","+.. ... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229","+... .... ...."],["Bermuda",["america","north-america"],"bm","1441"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","+.. (..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","european-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226","+... .. .. .. .."],["Burundi",["africa"],"bi","257","+... .. .. .. .."],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238","+... ... .. .."],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Cayman Islands",["america","carribean"],"ky","1345"],["Central African Republic",["africa"],"cf","236","+... .... ...."],["Chad",["africa"],"td","235","+... .. .. .. .."],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","+.. ..-........."],["Colombia",["america","south-america"],"co","57"],["Comoros",["africa"],"km","269","+... ... ...."],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242","+... .. .. ....."],["Cook Islands",["oceania"],"ck","682"],["Costa Rica",["america","central-america"],"cr","506","+... ....-...."],["Côte d’Ivoire",["africa"],"ci","225","+... .. .. .. .."],["Croatia",["europe","european-union"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","european-union"],"cy","357","+... .. ......"],["Czech Republic",["europe","european-union"],"cz","420"],["Denmark",["europe","european-union"],"dk","45","+.. .. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","+... ....-...."],["Equatorial Guinea",["africa"],"gq","240","+... .. ... ...."],["Eritrea",["africa"],"er","291"],["Estonia",["europe","european-union","ex-ussr"],"ee","372","+... .... ......"],["Ethiopia",["africa"],"et","251"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","european-union"],"fi","358","+... .. ... .. .."],["France",["europe","european-union"],"fr","33","+.. . .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241","+... .. .. .. .."],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","european-union"],"de","49","+.. .... ........"],["Ghana",["africa"],"gh","233"],["Gibraltar",["europe"],"gi","350"],["Greece",["europe","european-union"],"gr","30"],["Greenland",["america"],"gl","299"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","+... ....-...."],["Guinea",["africa"],"gn","224","+... . ... ...."],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","+... ....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852","+... .... ...."],["Hungary",["europe","european-union"],"hu","36"],["Iceland",["europe"],"is","354","+... ... ...."],["India",["asia"],"in","91","+.. .....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98"],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","european-union"],"ie","353","+... .. ......."],["Israel",["middle-east"],"il","972","+... ... ... ...."],["Italy",["europe","european-union"],"it","39","+.. ... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81","+.. .. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","+. ... ...-..-..",1,["313","327","7172","312","73622","321","324","336","318","315","325","311","326","310"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe"],"ks","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996"],["Laos",["asia"],"la","856"],["Latvia",["europe","european-union","ex-ussr"],"lv","371"],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","european-union","ex-ussr"],"lt","370"],["Luxembourg",["europe","european-union"],"lu","352","+.. . ... ... ..."],["Macau",["asia"],"mo","853"],["Macedonia",["europe"],"mk","389"],["Madagascar",["africa"],"mg","261","+... .. . ......"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","+.. ..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223","+... .... ...."],["Malta",["europe","european-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222","+... .... ...."],["Mauritius",["africa"],"mu","230","+... . ... ...."],["Mexico",["america","central-america"],"mx","52"],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","+... (..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe"],"me","382"],["Montserrat",["america","carribean"],"ms","1664"],["Morocco",["africa","north-africa"],"ma","212","+212-........."],["Mozambique",["africa"],"mz","258","+... ... ......"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","european-union"],"nl","31","+.. .. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","+.. ...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227","+... .. .. .. .."],["Nigeria",["africa"],"ng","234"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["North Korea",["asia"],"kp","850"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Norway",["europe"],"no","47","+.. ... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","+.. ...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63","+.. .... ......."],["Poland",["europe","european-union"],"pl","48","+.. ...-...-..."],["Portugal",["europe","european-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262","+.. . .. .. .. .."],["Romania",["europe","european-union"],"ro","40"],["Russia",["europe","asia","ex-ussr"],"ru","7","+. (...) ...-..-..",0],["Rwanda",["africa"],"rw","250","+... ... ... ..."],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239","+... ... ...."],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221","+... .. ... .. .."],["Serbia",["europe"],"rs","381"],["Seychelles",["africa"],"sc","248","+... ... ...."],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","+.. ....-...."],["Sint Maarten",["america","carribean"],"sx","1721"],["Slovakia",["europe","european-union"],"sk","421"],["Slovenia",["europe","european-union"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27","+.. .. ... ...."],["South Korea",["asia"],"kr","82","+.. ... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","european-union"],"es","34","+.. ... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","european-union"],"se","46","+.. (..) ...-..-.."],["Switzerland",["europe"],"ch","41","+.. .. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228","+... ... ....."],["Tokelau",["oceania"],"tk","690"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216","+... .. ... ..."],["Turkey",["europe"],"tr","90","+.. ... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["Tuvalu",["asia"],"tv","688"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","+... (..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","european-union"],"gb","44","+.. .... ......"],["United States",["america","north-america"],"us","1","+. (...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998"],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39","+.. .. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Wallis and Futuna",["oceania"],"wf","681"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]].map((function(e){var r=o(e,7),a=r[0],t=r[1],i=r[2],u=r[3],c=r[4],s=r[5],f=r[6],d={name:a,regions:t,iso2:i,dialCode:u,priority:s,format:c||void 0,hasAreaCodes:f},p=[];return d.hasAreaCodes&&f.forEach((function(e){var r=n(n({},d),{},{regions:t,dialCode:"".concat(u).concat(e),isAreaCode:!0});p.push(r),l(i,r.dialCode)})),l(d.iso2,d.dialCode,d.hasAreaCodes),p.length>0?[d].concat(p):[d]})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||i(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());e.exports={allCountries:f,allCountryCodes:c}},703:(e,r,a)=>{"use strict";var n=a(414);function t(){}function o(){}o.resetWarningCache=t,e.exports=function(){function e(e,r,a,t,o,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:t};return a.PropTypes=a,a}},697:(e,r,a)=>{e.exports=a(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},290:r=>{"use strict";r.exports=e},787:e=>{"use strict";e.exports=r}},n={};function t(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return a[e](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";t.r(o),t.d(o,{default:()=>B});var e=t(787),r=t.n(e),a=t(697),n=t.n(a),i=t(290),u=t.n(i);function c(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return l(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,r)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,n=new Array(r);a<r;a++)n[a]=e[a];return n}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var f=window||globalThis,d=function(e,r,a){var n,t,o,i,u,c,l=0,d=!1,p=!1,m=!0,y=!r&&0!==r&&"function"==typeof f.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var a=n,o=t;return n=t=void 0,l=r,i=e.apply(o,a)}function h(e,r){return y?(f.cancelAnimationFrame(u),f.requestAnimationFrame(e)):setTimeout(e,r)}function g(e){var a=e-c;return void 0===c||a>=r||a<0||p&&e-l>=o}function C(){var e=Date.now();if(g(e))return v(e);u=h(C,function(e){var a=e-l,n=r-(e-c);return p?Math.min(n,o-a):n}(e))}function v(e){return u=void 0,m&&n?b(e):(n=t=void 0,i)}function S(){for(var e=Date.now(),a=g(e),o=arguments.length,s=new Array(o),f=0;f<o;f++)s[f]=arguments[f];if(n=s,t=this,c=e,a){if(void 0===u)return function(e){return l=e,u=h(C,r),d?b(e):i}(c);if(p)return u=h(C,r),b(c)}return void 0===u&&(u=h(C,r)),i}return r=+r||0,!a||"function"!=typeof a&&"object"!=s(a)||(d=!!a.leading,o=(p="maxWait"in a)?Math.max(+a.maxWait||0,r):o,m="trailing"in a?!!a.trailing:m),S.cancel=function(){var e;void 0!==u&&(e=u,y?f.cancelAnimationFrame(e):clearTimeout(e)),l=0,n=c=t=u=void 0},S.flush=function(){return void 0===u?i:v(Date.now())},S.pending=function(){return void 0!==u},S},p=function e(r,a){if("function"!=typeof r||null!=a&&"function"!=typeof a)throw new TypeError("Expected a function");var n=function e(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i=a?a.apply(this,t):t[0],u=e.cache;if(u.has(i))return u.get(i);var c=r.apply(this,t);return e.cache=u.set(i,c)||u,c};return n.cache=new(e.Cache||Map),n};p.Cache=Map;var m=function(e){return null!=e&&e.length?c(e).slice(1):[]},y=function(e,r,a){return Array.isArray(e)?e.reduce(r,a):"string"==typeof e?e.split("").reduce(r,a):e},b=function(e,r){return Array.isArray(e)?e.filter(r):[]},h=function(e,r){return Array.isArray(e)?e.findIndex((function(e){return e==r})):-1},g=function(e,r){return Array.isArray(e)?e.find("function"==typeof r?r:function(e){return e==r}):void 0},C=function(e,r){return!!Array.isArray(e)&&e.some(r)},v=function(e,r){return null==e?void 0:e.startsWith(r)},S=t(530),w=t.n(S);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}var x=["native","defaultCountry","excludeCountries","onlyCountries","preferredCountries","dropdownClass","autoFormat","disableAreaCodes","isValid","disableCountryCode","disableDropdown","enableLongNumbers","countryCodeEditable","onEnterKeyPress","isModernBrowser","classes","keys","localization","placeholder","regions","onChange","value","inputClass","error","InputProps"];function T(){return T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},T.apply(this,arguments)}function j(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?j(Object(a),!0).forEach((function(r){R(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function A(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function k(e,r){for(var a=0;a<r.length;a++){var n=r[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,r){return E=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},E(e,r)}function I(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=N(e);if(r){var t=N(this).constructor;a=Reflect.construct(n,arguments,t)}else a=n.apply(this,arguments);return function(e,r){if(r&&("object"===O(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}(this,a)}}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function R(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var M=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&E(e,r)}(i,e);var a,n,t,o=I(i);function i(e){var a,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,i),R(D(n=o.call(this,e)),"guessSelectedCountry",p((function(e,r,a){var t=g(r,(function(e){return e.iso2==a}))||{};if(""===String(e).trim())return t;var o=y(r,(function(r,a){if(v(e,a.dialCode)){if(a.dialCode.length>r.dialCode.length)return a;if(a.dialCode.length===r.dialCode.length&&a.priority<r.priority)return a}return r}),{dialCode:"",priority:10001},D(n));return o.name?o:t}))),R(D(n),"getProbableCandidate",p((function(e){if(!e||0===e.length)return null;var r=n.state.onlyCountries;return b(r,(function(r){return v(r.name.toLowerCase(),e.toLowerCase())}),D(n))[0]}))),R(D(n),"getOnlyCountries",(function(e,r){return 0===e.length?r:r.filter((function(r){return e.some((function(e){return e===r.iso2}))}))})),R(D(n),"excludeCountries",(function(e,r){return 0===r.length?e:b(e,(function(e){return a=r,n=e.iso2,!(Array.isArray(a)&&a.findIndex((function(e){return e==n}))>0);var a,n}))})),R(D(n),"filterRegions",(function(e,r){if("string"==typeof e){var a=e;return r.filter((function(e){return e.regions.some((function(e){return e===a}))}))}return r.filter((function(r){var a=e.map((function(e){return r.regions.some((function(r){return r===e}))}));return a.some((function(e){return e}))}))})),R(D(n),"deleteAreaCodes",(function(e){return e.filter((function(e){return!0!==e.isAreaCode}))})),R(D(n),"updateDefaultCountry",(function(e){var r=n.state.onlyCountries,a=n.props.disableCountryCode,t=g(r,(function(r){return r.iso2==e}));n.setState({defaultCountry:e,selectedCountry:t,formattedNumber:a?"":"+".concat(t.dialCode)})})),R(D(n),"scrollTo",(function(e){if(e){var r=n.dropdownContainerRef;r&&document.body&&(r.scrollTop=e.offsetTop)}})),R(D(n),"formatNumber",(function(e,r){var a,t,o,i=n.props,u=i.disableCountryCode,c=i.enableLongNumbers,l=i.autoFormat;if(u&&r?((o=r.split(" ")).shift(),o=o.join(" ")):o=r,!e||0===e.length)return u?"":"+";if(e&&e.length<2||!o||!l)return u?e:"+".concat(e);var s,f=y(o,(function(e,r){return 0===e.remainingText.length?e:"."!==r?{formattedText:e.formattedText+r,remainingText:e.remainingText}:{formattedText:e.formattedText+(a=e.remainingText,null!=a&&a.length?a[0]:void 0),remainingText:m(e.remainingText)};var a}),{formattedText:"",remainingText:e.split("")});return null===(a=s=c?f.formattedText+f.remainingText.join(""):f.formattedText)||void 0===a||!a.includes("(")||null!==(t=s)&&void 0!==t&&t.includes(")")||(s+=")"),s})),R(D(n),"cursorToEnd",(function(){var e=n.props.isModernBrowser,r=n.inputRef&&n.inputRef.current;if(r&&(r.focus(),e)){var a=r.value.length;r.setSelectionRange(a,a)}})),R(D(n),"getCountryData",(function(){var e=n.state.selectedCountry;return e?{name:e.name||"",dialCode:e.dialCode||"",countryCode:(null==e?void 0:e.iso2)||""}:{}})),R(D(n),"handleInput",(function(e){var r,a=n.state,t=a.selectedCountry,o=a.freezeSelection,i=n.state,u=i.selectedCountry,c=i.formattedNumber,l=i.onlyCountries,s=i.defaultCountry,f=n.props,d=f.disableCountryCode,p=f.countryCodeEditable,m=f.isModernBrowser,y=f.onChange,b=d?"":"+";if(!p){var h="+".concat(t.dialCode);if(e.target.value.length<h.length)return}if(!(e.target.value.replace(/\D/g,"").length>15)&&e.target.value!==c){if(e.preventDefault?e.preventDefault():e.returnValue=!1,e.target.value.length>0){var g=e.target.value.replace(/\D/g,"");(!o||u.dialCode.length>g.length)&&(t=n.guessSelectedCountry(g.substring(0,6),l,s),o=!1),b=n.formatNumber(g,t.format)}var C=e.target.selectionStart,v=(null===(r=b)||void 0===r?void 0:r.length)-(null==c?void 0:c.length);n.setState({formattedNumber:b,freezeSelection:o,selectedCountry:t.dialCode?t:u},(function(){var e,r,a,t,o;m&&n.inputRef&&n.inputRef.current&&(v>0&&(C-=v),")"===(null===(e=b)||void 0===e?void 0:e.charAt((null===(r=b)||void 0===r?void 0:r.length)-1))?n.inputRef.current.setSelectionRange((null===(t=b)||void 0===t?void 0:t.length)-1,(null===(o=b)||void 0===o?void 0:o.length)-1):C>0&&(null==c?void 0:c.length)>=(null===(a=b)||void 0===a?void 0:a.length)&&n.inputRef.current.setSelectionRange(C,C));y&&y(b,n.getCountryData())}))}})),R(D(n),"handleInputClick",(function(e){var r=n.props.onClick;r&&r(e,n.getCountryData())})),R(D(n),"handleInputFocus",(function(e){var r=n.state.selectedCountry,a=n.props,t=a.disableCountryCode,o=a.onFocus;n.inputRef&&n.inputRef.current&&"+"===n.inputRef.current.value&&r&&!t&&n.setState({formattedNumber:"+".concat(r.dialCode)},(function(){return setTimeout(n.cursorToEnd,10)})),n.setState({placeholder:""}),o&&o(e,n.getCountryData()),setTimeout(n.cursorToEnd,10)})),R(D(n),"handleInputBlur",(function(e){var r=n.props,a=r.placeholder,t=r.onBlur;e.target.value||n.setState({placeholder:a}),t&&t(e,n.getCountryData())})),R(D(n),"getHighlightCountryIndex",(function(e){var r=n.state,a=r.highlightCountryIndex,t=r.onlyCountries,o=r.preferredCountries,i=a+e;return i<0||i>=t.length+o.length?i-e:i})),R(D(n),"searchCountry",(function(){var e=n.state,r=e.queryString,a=e.onlyCountries,t=e.preferredCountries,o=n.getProbableCandidate(r)||a[0],i=h(a,o)+t.length;n.scrollTo(n.getElement(i),!0),n.setState({queryString:"",highlightCountryIndex:i})})),R(D(n),"handleKeydown",(function(e){var r=n.state,a=r.anchorEl,t=r.highlightCountryIndex,o=r.preferredCountries,i=(r.onlyCountries,r.queryString),u=r.debouncedQueryStingSearcher,c=n.props,l=c.keys,s=c.disabled;if(a&&!s){e.preventDefault?e.preventDefault():e.returnValue=!1;var f=function(e){n.setState({highlightCountryIndex:n.getHighlightCountryIndex(e)},(function(){n.scrollTo(n.getElement(t+o.length),!0)}))};switch(e.which){case l.DOWN:f(1);break;case l.UP:f(-1);break;case l.ESC:n.setState({anchorEl:null},n.cursorToEnd);break;default:(e.which>=l.A&&e.which<=l.Z||e.which===l.SPACE)&&n.setState({queryString:i+String.fromCharCode(e.which)},u)}}})),R(D(n),"handleInputKeyDown",(function(e){var r=n.props,a=r.keys,t=r.onEnterKeyPress,o=r.onKeyDown;e.which===a.ENTER&&t&&t(e),o&&o(e)})),R(D(n),"checkIfValid",(function(){var e=n.state.formattedNumber;return(0,n.props.isValid)(null==e?void 0:e.replace(/\D/g,""),n.props,n.state)})),R(D(n),"updateFormattedNumber",(function(e){var r,a=n.state,t=a.onlyCountries,o=a.defaultCountry,i=n.props.disableCountryCode,u=e,c=e;if(u.startsWith("+"))u=u.replace(/\D/g,""),r=n.guessSelectedCountry(u.substring(0,6),t,o),c=n.formatNumber(u,r.format);else{var l=(r=g(t,(function(e){return e.iso2==o})))&&!v(u.replace(/\D/g,""),r.dialCode)?r.dialCode:"";c=n.formatNumber((i?"":l)+u.replace(/\D/g,""),r?r.format:void 0)}n.setState({selectedCountry:r,formattedNumber:c})}));var t=w().allCountries;e.disableAreaCodes&&(t=n.deleteAreaCodes(t)),e.regions&&(t=n.filterRegions(e.regions,t));var u,c=n.excludeCountries(n.getOnlyCountries(e.onlyCountries,t),e.excludeCountries),l=b(t,(function(r){return C(e.preferredCountries,(function(e){return e===r.iso2}))})),s=e.value||"";u=s.length>1?n.guessSelectedCountry(s.replace(/\D/g,"").substring(0,6),c,e.defaultCountry)||0:e.defaultCountry&&g(c,(function(r){return r.iso2==e.defaultCountry}))||0;var f=h(n.allCountries,u),S=s.length<2&&u&&!v(s.replace(/\D/g,""),u.dialCode)?u.dialCode:"",O=""===s&&0===u?"":n.formatNumber((e.disableCountryCode?"":S)+s.replace(/\D/g,""),u.name?u.format:void 0);n.state={formattedNumber:O,placeholder:e.placeholder,onlyCountries:c,preferredCountries:l,defaultCountry:e.defaultCountry,selectedCountry:u,highlightCountryIndex:f,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:d(n.searchCountry,100),anchorEl:null};var x=e.inputRef||(null===(a=e.inputProps)||void 0===a?void 0:a.ref);return x?"function"==typeof x?x(n.inputRef=r().createRef()):n.inputRef=x:n.inputRef=r().createRef(),n}return a=i,(n=[{key:"componentDidMount",value:function(){document.addEventListener&&document.addEventListener("keydown",this.handleKeydown)}},{key:"componentDidUpdate",value:function(e){var r=e.value,a=this.state,n=a.defaultCountry,t=a.formattedNumber,o=this.props,i=o.defaultCountry,u=o.value;i&&i!==n&&this.updateDefaultCountry(i),"string"==typeof u&&u!==r&&u!==t&&this.updateFormattedNumber(u)}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.state,a=e.formattedNumber,n=e.placeholder,t=this.props,o=(t.native,t.defaultCountry,t.excludeCountries,t.onlyCountries,t.preferredCountries,t.dropdownClass,t.autoFormat,t.disableAreaCodes,t.isValid,t.disableCountryCode,t.disableDropdown,t.enableLongNumbers,t.countryCodeEditable,t.onEnterKeyPress,t.isModernBrowser,t.classes,t.keys,t.localization,t.placeholder,t.regions,t.onChange,t.value,t.inputClass),i=t.error,c=t.InputProps,l=A(t,x);return r().createElement(u(),T({placeholder:n,value:a,className:o,inputRef:this.inputRef,error:i||!this.checkIfValid(),onChange:this.handleInput,onClick:this.handleInputClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyDown:this.handleInputKeyDown,type:"tel",InputProps:P({},c)},l))}}])&&k(a.prototype,n),t&&k(a,t),i}(r().Component);M.propTypes={classes:n().object,excludeCountries:n().arrayOf(n().string),onlyCountries:n().arrayOf(n().string),preferredCountries:n().arrayOf(n().string),defaultCountry:n().string,value:n().string,placeholder:n().string,disabled:n().bool,error:n().bool,variant:n().string,native:n().bool,inputClass:n().string,dropdownClass:n().string,InputProps:n().object,inputProps:n().object,inputRef:n().oneOfType([n().func,n().shape({current:n().object})]),autoFormat:n().bool,disableAreaCodes:n().bool,disableCountryCode:n().bool,disableDropdown:n().bool,enableLongNumbers:n().bool,countryCodeEditable:n().bool,regions:n().oneOfType([n().string,n().arrayOf(n().string)]),localization:n().object,onChange:n().func,onFocus:n().func,onBlur:n().func,onClick:n().func,onKeyDown:n().func,isValid:n().func,isModernBrowser:n().func,onEnterKeyPress:n().func,keys:n().object},M.defaultProps={excludeCountries:[],onlyCountries:[],preferredCountries:[],defaultCountry:"",placeholder:"+1 (702) 123-4567",disabled:!1,error:!1,variant:"standard",native:!1,inputClass:"",dropdownClass:"",autoFormat:!0,disableAreaCodes:!1,isValid:function(e,r,a){if(!e||!e.length)return!0;if(!r.disableCountryCode){if(!C(a.onlyCountries,(function(r){return!(!v(e,r.dialCode)&&!v(r.dialCode,e))})))return!1;if(a.selectedCountry&&e===a.selectedCountry.dialCode)return!0}return!a.selectedCountry||!a.selectedCountry.format||String(e).length+(r.disableCountryCode?a.selectedCountry.dialCode.length:0)>=(a.selectedCountry.format.match(/\./g)||[]).length},disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,regions:"",localization:{},onEnterKeyPress:function(){},onChange:function(){},isModernBrowser:function(){return!!document.createElement&&Boolean(document.createElement("input").setSelectionRange)},keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32}},M.displayName="MuiPhoneNumber";const B=M})(),o})()));