!function(){"use strict";var n=self;n.addEventListener("message",(function(t){var e=t.data.imageData.map((function(n){var t=n.data;return t.map((function(n,t){return t})).filter((function(n,t){return!(t%4)})).map((function(n){return[t[n],t[n+1],t[n+2]].reduce((function(n,t){return n+t}))/3/2.55})).reduce((function(n,t){return n+t}))/(t.length/4)<55?"white":"black"}));n.postMessage(e)}))}(),_N_E={};