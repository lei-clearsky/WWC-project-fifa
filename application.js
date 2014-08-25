/*
 * application.js
*/

var fifa = (function ($){

	// Begin module scope variables

	var configMap = {
		main_html : String()
		+ '<div class="container">'
		+	'<div class="sixteen columns">'
		+		'<h1 class="remove-bottom fifa-home">FIFA Matches</h1>'
		+	'</div>'
		+	'<div class="sixteen columns">'
		+		'<div class="matches-container">'
		+		'<!--2nd Column-->'
		+		'<div class="match-container">'
		+			'<div class="round-16-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/bra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/chi.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/col.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/uru.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/fra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/nga.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ger.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/alg.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+		'</div>'
		+		'<!--2nd Column-->'
		+		'<div class="match-container">'
		+			'<div class="quarter-finals-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/bra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/col.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="quarter-finals-space">'
		+			'</div>'
		+			'<div class="quarter-finals-container-left">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/fra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/ger.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+		'</div>'
		+		'<!--3rd Column-->'
		+		'<div class="match-container">'
		+			'<div class="semi-finals-container-left">'	
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/bra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/ger.png" /></div>'
		+				'<div class="bottom"></div>'				
		+			'</div>'
		+		'</div>'
		+		'<!--4th Column-->'
		+		'<div class="match-container">'
		+			'<div class="final-space">'
		+				'<h4>WINNER</h4>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ger.png" /></div>'
		+			'</div>'
		+			'<div class="final-container">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ger.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/arg.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="final-container">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/bra.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/ned.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+		'</div>'
		+		'<!--5th Column-->'
		+		'<div class="match-container">'
		+			'<div class="semi-finals-container-right">'	
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ned.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/arg.png" /></div>'
		+				'<div class="bottom"></div>'			
		+			'</div>'
		+		'</div>'
		+		'<!--6th Column-->'
		+		'<div class="match-container">'
		+			'<div class="quarter-finals-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ned.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/crc.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="quarter-finals-space">'
		+			'</div>'
		+			'<div class="quarter-finals-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/arg.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/bel.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+		'</div>'
		+		'<!--7th Column-->'
		+		'<div class="match-container">'
		+			'<div class="round-16-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/ned.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/mex.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/crc.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/gre.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/arg.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/sui.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+			'<div class="round-16-container-right">'
		+				'<div class="top"></div>'
		+				'<div id="draggable1"><img src="http://img.fifa.com/images/flags/4/bel.png" /></div>'
		+				'<div id="draggable2"><img src="http://img.fifa.com/images/flags/4/usa.png" /></div>'
		+				'<div class="bottom"></div>'
		+			'</div>'
		+		'</div>'
		+		'</div>'
		+ 	'</div>'
		+ '</div><!-- container -->'
	},
	stateMap = {$container : null},
	jqueryMap = {},
	setJqueryMap, initModule;

	// Begin DOM method /setJqueryMap/
	setJqueryMap = function (){
		var $container = stateMap.$container;
		jqueryMap = {$container : $container};
	};

	// Begin public method /initModule/
	initModule = function ( $container ){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
	};
	return { initModule: initModule };

})(jQuery);


