$(document).ready( function(){
	//alert("Jeej javascript werkt!");    
var inhoudHeader = project1header; 

	$("#achtergrondtabjes #tab").on("click", function(){
		$("#achtergrondtabjes .tijdelijk").removeClass("tijdelijk");
    		$("#tabjes").find(".highlight").removeClass("highlight");
		$("#projecten").find("header").removeClass("mouseenterhead");
		$("#projecten").find("#projectheaderextra").text("");
		$(this).addClass("highlight");
  	});

	$("#achtergrondtabjes #tab").mouseleave( function(){
		$("#projecten").find("header").removeClass("mouseenterhead");
		$("#projecten").find("#projectheader").text(inhoudHeader);
		$("#projecten").find("#projectheaderextra").text("");
		$("#achtergrondtabjes .mouseenter").removeClass("mouseenter");

		if ($(this).hasClass("speciaal")){
			$(this).removeClass("speciaal").addClass("highlight");
		}
		else{
			$("#achtergrondtabjes .tijdelijk").removeClass("tijdelijk").addClass("highlight");
		}
	});

	$("#achtergrondtabjes #tab").mouseenter( function(){
		$("#achtergrondtabjes .highlight").removeClass("highlight").addClass("tijdelijk");
		$("#projecten").find("header").addClass("mouseenterhead");
		
	});

	$("#achtergrondtabjes .project1").mouseenter(Project1Mouse);
	$("#achtergrondtabjes .project2").mouseenter(Project2Mouse);
	$("#achtergrondtabjes .project3").mouseenter(Project3Mouse);

	$("#achtergrondtabjes .project1").on("click", Project1Click);
	$("#achtergrondtabjes .project2").on("click", Project2Click);
	$("#achtergrondtabjes .project3").on("click", Project3Click);

function Project1Click(){
	$("#projecten").find("#projectheader").text(project1header);
	$("#projectinhoud").html(project1inhoud);
	$("#projecten").find("aside").html(project1aside);
	inhoudHeader =  project1header;
	$("#projecten").find("#groter").attr("id", "projectaside");
};
function Project2Click(){
	$("#projecten").find("#projectheader").text(project2header);
	$("#projectinhoud").html(project2inhoud);
	$("#projecten").find("aside").html(project2aside);
	inhoudHeader = project2header;
	$("#projecten").find("#projectaside").attr("id", "groter");
};
function Project3Click(){
	$("#projecten").find("#projectheader").text(project3header);
	$("#projectinhoud").html(project3inhoud);
	$("#projecten").find("aside").html(project3aside);
	inhoudHeader = project3header;
	$("#projecten").find("#projectaside").attr("id", "groter");
	
};
});



function Project1Mouse(){
	$("#projecten").find("#projectheaderextra").text(project1uitleg);
	$("#projecten").find("#projectheader").text(project1header);
	$("#achtergrondtabjes .project1").addClass("mouseenter");
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project1").removeClass("tijdelijk");
		$("#achtergrondtabjes .project1").addClass("speciaal");
	}
};

function Project2Mouse(){
	$("#projecten").find("#projectheader").text(project2header);
	$("#achtergrondtabjes .project2").addClass("mouseenter");
	$("#projecten").find("#projectheaderextra").text(project2uitleg);
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project2").removeClass("tijdelijk");
		$("#achtergrondtabjes .project2").addClass("speciaal");
	}
};

function Project3Mouse(){
	$("#projecten").find("#projectheader").text(project3header);
	$("#achtergrondtabjes .project3").addClass("mouseenter");
	$("#projecten").find("#projectheaderextra").text(project3uitleg);
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project3").removeClass("tijdelijk");
		$("#achtergrondtabjes .project3").addClass("speciaal");
	}
};




var project1header = "Doel Website";
var project2header = "Over Mij";
var project3header = "De Code";

var project1uitleg = "Een handgemaakte website om meer te laten zien over wie ik ben naast mijn CV.";
var project2uitleg = "Een kleine uitleg over mezelf en mijn wensen";
var project3uitleg = "";

var project1aside = "<h1 id=\"asidetitel\"></h1><img id=\"foto\" src=\"foto2.JPG\" alt=\"Picture of me\" height=100 weight=100><p id=\"asideinhoud\"><br>Contact graag via <a href=\"https://www.linkedin.com/pub/laura-de-ruiter/8b/150/872\">LinkedIn</a></p>";
var project2aside = "<h1 id=\"asidetitel\"></h1><img id=\"foto\" src=\"foto2.JPG\" alt=\"Picture of me\" height=100 weight=100><p id=\"asideinhoud\"><br><br>Op zoek naar een potentieel IT talent dat sociaal, analytisch, leergierig en gedreven is?<br><br> Contact graag via mijn LinkedIn profiel.<br><br><br><a href=\"https://www.linkedin.com/pub/laura-de-ruiter/8b/150/872\">LinkedIn</a><br><br><br><a href=\"documenten/cv.pdf\">Mijn CV</a></p>";
var project3aside = "<h1 id=\"asidetitel\">Zelfstudie:</h1><p id=\"asideinhoud\">Een overzicht van een deel van de zelfstudie die ik heb gedaan is te vinden op <a href=\"http://www.codeschool.com/users/lderuiter\">Codeschool</a><br><br>Boeken die ik momenteel aan het bestuderen ben:<br><br><a href=\"http://shop.oreilly.com/product/9780596008642.do\">Learning MySQL</a><br> van S.M.M. Tahaghoghi en H.E. Williams<br><br><a href=\"http://pragprog.com/book/gwpy2/practical-programming\">Practical Programming</a>, an introduction to computer science using Python 3<br>van P. Gries, J. Campbell en J. Montojo<br><br>Al mijn code is te vinden op <a href=\"http://github.com/lderuiter\">Github</a></p>";

var project1inhoud = "Deze website is handgemaakt en fungeert als showcase voor mijn affiniteit met de ICT. Ik heb hiervoor gebruik gemaakt van HTML, CSS en Javascript. Mijn kennis van HTML stamde nog van de middelbare school (ik volgde toen het vak informatica) en CSS en Javascript waren nieuw voor mij. Door middel van zelfstudie heb ik mij dit eigen gemaakt.<br>Mijn doel is een baan in de ICT, het liefst beginnende op een 'algemene' plek als software tester of sys-admin. De ICT is voor mij heel aantrekkelijk, omdat het een werkveld is waar ik de rest van mijn leven in door kan blijven leren en kan blijven verdiepen. <br>Daarnaast is het ontwikkelen van software teamwork!<br>Voor de duidelijkheid: ik ben geen talent in het design van websites. Ik wil wel met deze website mijn vermogen in het aanleren van talen aantonen. En ik vind het daarnaast ook gewoon heerlijk om te experimenteren met verschillende talen waar daadwerkelijk resultaat uit voort komt.<br>Deze website gaat uitgebreid worden met kleine functionaliteiten al naar gelang de vaardigheden die ik leer. MySQL en Python zijn nu onder mijn aandacht. <br><br>Zowel de informatie over de code die ik heb geschreven en persoonlijke informatie zijn hier te vinden.";
var project2inhoud = "Vergis je niet als je mijn opleiding en werkervaring ziet; ik ben een beta persoon in hart en nieren. Heel sociaal ook en mede daardoor heb ik helaas een opleiding gekozen waar ik mijn draai niet kon vinden. Tussen de lijntjes door zie je mijn analytische en onderzoekende blik in mijn CV terug. <br>Uiteraard had ik een natuur en techniek profiel op de middelbare school, waarbij ik tijdens de pauzes en na school meteorologische metingen uitvoerde voor het <a href=\"http://www.globe.gov\">Globe project</a>. Informatica was toendertijd één van mijn lievelingsvakken en daar heb ik ook schoolexamen in gedaan.<br><br>Tijdens een stage bij een jongerencentrum met podium ben ik betrokken geraakt met licht en geluidstechniek (als nieuwsgierig aagje was al die apparatuur erg aantrekkelijk). In mijn vrije tijd ben ik daarnaast ook steeds meer gebruik gaan maken van opensource software, sinds 4 jaar gebruik ik nu Ubuntu Linux. <br>In mijn verschillende stages, examenopdrachten en meerdere minors kan je mijn zoektocht naar analytische uitdagingen zien.<br><br>Wat is de beste werkplek voor een nieuwsgierig analytisch persoon die graag samenwerkt en behoefte heeft aan een stroom van problemen om aan te puzzelen en veel uitdagende mogelijkheden tot verdiepen? Waar zit het constant leren van nieuwe kennis en vaardigheden ingebakken in het werk? <br>Uiteindelijk ben ik tot de conclusie gekomen dat ik het geheel in de verkeerde hoek zocht en dat de IT het enige echte antwoord is. <br><br><br>Dus: ik ben op zoek naar een werkgever die mijn potentieel inziet en mij (intern) wil opleiden. Ik zoek een algemene functie als Software tester of System administrator, omdat ik nog niet goed kan kiezen waarin ik me (later) wil specialiseren (een programmeertaal of een bepaalde functie?). Dit zijn functies waar ik met verschillende programmeertalen in aanraking kan komen. Ik heb veel ervaring met samenwerken (ook in complexe situaties) en kan prima rapporten schrijven. Ook heb ik behoefte aan een zekere werkdruk zoals je dat tijdens projecten of tijdens het werken voor klanten voelt. <br>Een heel leergierige, sociale, gedreven IT-er, wat wil je nog meer?<br><br>Via <a href=\"https://www.linkedin.com/pub/laura-de-ruiter/8b/150/872\">LinkedIn</a> kan je contact met me opnemen om een afspraak te maken.";
var project3inhoud = "Alle code die ik heb geschreven voor deze website is te vinden op <a href=\"http://github.com/lderuiter\">Github</a>. Het studeren voor de benodigde kennis om het maken van deze website mogelijk te maken heb ik gedaan via <a href=\"http://www.codeschool.com/\">Codeschool</a>. De webserver waar de website op staat was al aanwezig 'in' mijn huishouden en ook voor alle benodigde beveiliging heb ik niet zelf gezorgd. De communicatie met de server doe ik via de command line. Ik ken namelijk enige simpele unix commando's. Voor de keuze in programmeertalen en studiemiddelen heb ik advies gevraagd. <br>Met mijn code mocht niemand zich echter bemoeien, het is mijn project en ik heb het zelf bedacht, er zelf voor geleerd en het zelf geschreven. Al is de code misschien niet optimaal, het doet wat ik wil en ik ben trots op het resultaat.<br><br>De website wordt nog uitgebreid en verbeterd. Momenteel ben ik bezig een kleine applicatie te schrijven die gebruik maakt van informatie die in een simpele database staat. Hierbij maak ik gebruik van Python en MySQL. Ook ben ik van plan alle informatie op mijn website in het Engels aan te bieden.";
