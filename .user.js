// ==UserScript==
// @name         AutoTrimps-NT-Sliverz
// @version      1.0-NT
// @namespace    https://Stimy1737.io/AutoTrimps
// @updateURL    https://Stimy1737.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Meowchan
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *Stimy1737.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-NT-SliverzPatch';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://Stimy1737.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
