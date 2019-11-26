// ==UserScript==
// @name         AutoTrimps-Sliverz
// @namespace    https://github.com/Stimy1737/AutoTrimps
// @version      2.2-Sliverz
// @updateURL    https://github.com/Stimy1737/AutoTrimps/install.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Sliverz
// @include        *trimps.github.io*
// @include        *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-script';
//This can be edited to be your own Github Repository URL.
script.src = 'https://Stimy1737.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
