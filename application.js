/*
 * application.js
*/

var fifa = (function ($){

	// Begin module scope variables

	var configMap = {
		main_html : String()
		+ "<div class='container'>"
		+	"<div class='sixteen columns'>"
		+		"<div class='matches-container'>"
		+		"<!--2nd Column-->"
		+		"<div class='match-container'>"
		+			"<div class='round-16-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+		"</div>"
		+		"<!--2nd Column-->"
		+		"<div class='match-container'>"
		+			"<div class='quarter-finals-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='quarter-finals-space'>"
		+			"</div>"
		+			"<div class='quarter-finals-container-left match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+		"</div>"
		+		"<!--3rd Column-->"
		+		"<div class='match-container'>"
		+			"<div class='semi-finals-container-left match'>"	
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"				
		+			"</div>"
		+		"</div>"
		+		"<!--4th Column-->"
		+		"<div class='match-container'>"
		+			"<div class='final-space match'>"
		+				"<h4>WINNER</h4>"
		+				"<div class='drop-to'></div>"
		+			"</div>"
		+			"<div class='final-container match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='final-container match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+		"</div>"
		+		"<!--5th Column-->"
		+		"<div class='match-container'>"
		+			"<div class='semi-finals-container-right match'>"	
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"			
		+			"</div>"
		+		"</div>"
		+		"<!--6th Column-->"
		+		"<div class='match-container'>"
		+			"<div class='quarter-finals-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='quarter-finals-space'>"
		+			"</div>"
		+			"<div class='quarter-finals-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+		"</div>"
		+		"<!--7th Column-->"
		+		"<div class='match-container'>"
		+			"<div class='round-16-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+			"<div class='round-16-container-right match'>"
		+				"<div class='top'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='drop-to'></div>"
		+				"<div class='bottom'></div>"
		+			"</div>"
		+		"</div>"
		+		"</div>"
		+ 	"</div>"
		+ "</div><!-- container -->"
	},
	stateMap = {$container : null},
	jqueryMap = {},
	countriesArray = [],
	setJqueryMap, setCountry, setCountryContainer, 
	dragDrop, updateCountryName, initModule;

	// Begin DOM method /setJqueryMap/
	setJqueryMap = function (){
		var $container = stateMap.$container;
		jqueryMap = {$container : $container};
	};

	// Define protytype object
	var proto = {
		count: 5,
		score: 0
	};

	// Define the object constructor
	var Country = function(abbreviation, fullname, imgurl){
		this.abbreviation = abbreviation;
		this.fullname = fullname;
		this.imgurl = imgurl;
	};

	// Link constructor to protytype
	Country.prototype = proto;

	// Use setCountry function to instantiate country objects
	setCountry = function(){
		var brazil = new Country('bra', 'brazil', 'http://img.fifa.com/images/flags/4/bra.png');
		var chile = new Country('chi', 'chile', 'http://img.fifa.com/images/flags/4/chi.png');
		var colombia = new Country('col', 'colombia', 'http://img.fifa.com/images/flags/4/col.png');
		var uruguay = new Country('uru', 'uruguay', 'http://img.fifa.com/images/flags/4/uru.png');
		var france = new Country('fra', 'france', 'http://img.fifa.com/images/flags/4/fra.png');
		var nigeria = new Country('nga', 'nigeria', 'http://img.fifa.com/images/flags/4/nga.png');
		var germany = new Country('ger', 'germany', 'http://img.fifa.com/images/flags/4/ger.png');
		var algeria = new Country('alg', 'algeria', 'http://img.fifa.com/images/flags/4/alg.png');
		var belgium = new Country('bel', 'belgium', 'http://img.fifa.com/images/flags/4/bel.png');
		var usa = new Country('usa', 'usa', 'http://img.fifa.com/images/flags/4/usa.png');
		var argentina = new Country('arg', 'argentina', 'http://img.fifa.com/images/flags/4/arg.png');
		var switzerland = new Country('sui', 'switzerland', 'http://img.fifa.com/images/flags/4/sui.png');
		var greece = new Country('gre', 'greece', 'http://img.fifa.com/images/flags/4/gre.png');
		var costarica = new Country('crc', 'costarica', 'http://img.fifa.com/images/flags/4/crc.png');
		var mexico = new Country('mex', 'mexico', 'http://img.fifa.com/images/flags/4/mex.png');
		var netherlands = new Country('ned', 'netherland', 'http://img.fifa.com/images/flags/4/ned.png');

		countriesArray.push(brazil, chile, colombia, uruguay, france, nigeria, germany, algeria, belgium, usa, argentina, switzerland, greece, costarica, mexico, netherlands);
	};

	// Add country objects to countries container
	setCountryContainer = function(){
		setCountry();
		for (var i = 0; i < countriesArray.length; i++){
			var countryContainer = $("<div class='country'></div>");
			// Add country data to country container
			countryContainer.data('country', countriesArray[i]);
			countryContainer.html("<img src = '" + countriesArray[i].imgurl + "' />" + ' ' + countriesArray[i].abbreviation);
			$('.countries-container').append(countryContainer);
		}
	}

	// Drag and Drop functions
	dragDrop = function(){
		$( ".country" ).draggable({ containment: 'document', revert: true,
			start: function(){
				//contents = $(this).html();
				contents = $(this).clone(true);
				//alert(contents.data('country').fullname);

			}
		});

		$(".drop-to").droppable({accept: ".country",
			drop: function(){
					//$(this).append('<div class="country">' + contents + '</div>');
					//$(this).append(contents);
					$(this).html(contents);

					var thisContainer = $(this);
	
					// Update country fullname after new item is dropped to the individual match container
					if(thisContainer.index() % 2 !== 0){
						thisContainer.parent().children('.top').html((thisContainer.children('.country').data('country').fullname).toUpperCase());
					}else{
						thisContainer.parent().children('.bottom').html((thisContainer.children('.country').data('country').fullname).toUpperCase());
					}
			}
		});
	}

	// Convert to JSON
	var session = {
		'screens':[],
		'state':true
	};
	var convertToJSON = function(){
		var screenhtml = $('.matches-container').html();
		alert(screenhtml);
		session.screens.push({'screenhtml': screenhtml }); //$('.matches-container').html()
		localStorage.setItem('session', JSON.stringify(session));
		var restoredSession = JSON.parse(localStorage.getItem('session'));
		return restoredSession.screens[0]['screenhtml'];

	}
	var retrieveSession = function(){
		$('#retrieve-session').on('click', function(e){
			e.stopPropagation();
			e.preventDefault();
			//$('.matches-container').empty();
			//var retrievedsession = convertToJSON();
			//alert(retrievedsession);
			$('.matches-container').empty();
			$('.matches-container').html(convertToJSON());
			
		});
	}
	// Begin public method /initModule/
	initModule = function ( $container ){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setCountryContainer();
		dragDrop();
		setJqueryMap();
		retrieveSession();
	};
	return { initModule: initModule };

})(jQuery);


