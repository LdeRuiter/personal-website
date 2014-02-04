$(document).ready( function(){
	alert("Jeej js werkt!");    
var inhoudHeader = project1header;
	$("#achtergrondtabjes #tab").on("click", function(){
		$("#achtergrondtabjes .tijdelijk").removeClass("tijdelijk");
    		$("#tabjes").find(".highlight").removeClass("highlight");
		$("#projecten").find("header").removeClass("mouseenterhead");
		$("#projecten").find("#projectheaderextra").text("");
		$(this).addClass("highlight");
  		 });
	$("#achtergrondtabjes #tab").mouseleave( function(){
		if ($(this).hasClass("speciaal")){
			$(this).removeClass("speciaal").addClass("highlight");
			$("#projecten").find("header").removeClass("mouseenterhead");
			$("#projecten").find("#projectheader").text(inhoudHeader);
			$("#projecten").find("#projectheaderextra").text("");
			$("#achtergrondtabjes .mouseenter").removeClass("mouseenter");
			}
		else{
			$("#achtergrondtabjes .tijdelijk").removeClass("tijdelijk").addClass("highlight");
			$("#projecten").find("header").removeClass("mouseenterhead");
			$("#projecten").find("#projectheader").text(inhoudHeader);
			$("#projecten").find("#projectheaderextra").text("");
			$("#achtergrondtabjes .mouseenter").removeClass("mouseenter");
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
	$("#projectaside").html(project1aside);
	inhoudHeader =  project1header;
};
function Project2Click(){
	$("#projecten").find("#projectheader").text(project2header);
	$("#projectinhoud").html(project2inhoud);
	$("#projectaside").html(project2aside);
	inhoudHeader = project2header;
};
function Project3Click(){
	$("#projecten").find("#projectheader").text(project3header);
	$("#projectinhoud").html(project3inhoud);
	$("#projectaside").html(project3aside);
	inhoudHeader = project3header;
	
};
});



function Project1Mouse(){
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project1").removeClass("tijdelijk");
		$("#achtergrondtabjes .project1").addClass("mouseenter").addClass("speciaal");
		$("#projecten").find("#projectheaderextra").text(project1uitleg);
		$("#projecten").find("#projectheader").text(project1header);
		}
	else{
		$("#projecten").find("#projectheaderextra").text(project1uitleg);
		$("#projecten").find("#projectheader").text(project1header);
		$("#achtergrondtabjes .project1").addClass("mouseenter");
	}
};
function Project2Mouse(){
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project2").removeClass("tijdelijk");
		$("#achtergrondtabjes .project2").addClass("mouseenter").addClass("speciaal");
		$("#projecten").find("#projectheaderextra").text(project2uitleg);
		$("#projecten").find("#projectheader").text(project2header);
		}
	else{
		$("#projecten").find("#projectheaderextra").text(project2uitleg);
		$("#achtergrondtabjes .project2").addClass("mouseenter");
		$("#projecten").find("#projectheader").text(project2header);
	}
};
function Project3Mouse(){
	if ($(this).hasClass("tijdelijk")){
		$("#achtergrondtabjes .project3").removeClass("tijdelijk");
		$("#achtergrondtabjes .project3").addClass("mouseenter").addClass("speciaal");
		$("#projecten").find("#projectheaderextra").text(project3uitleg);
		$("#projecten").find("#projectheader").text(project3header);
		}
	else{
		$("#projecten").find("#projectheaderextra").text(project3uitleg);
		$("#achtergrondtabjes .project3").addClass("mouseenter");
		$("#projecten").find("#projectheader").text(project3header);
	}
};




var project1header = "Doel Website";
var project2header = "Over Mij";
var project3header = "De Code";

var project1uitleg = "Een handgemaakte website om meer te laten zien over wie ik ben naast mijn CV.";
var project2uitleg = "Een kleine uitleg over mezelf en mijn wensen";
var project3uitleg = "";

var project1aside = "<h1 id=\"asidetitel\"></h1><img id=\"foto\" src=\"foto2.JPG\" alt=\"Picture of me\" height=100 weight=100><p id=\"asideinhoud\"> <br><br>Link LinkedIn</p>";
var project2aside = "<h1 id=\"asidetitel\"></h1><img id=\"foto\" src=\"foto2.JPG\" alt=\"Picture of me\" height=100 weight=100><p id=\"asideinhoud\">LinkedIn link<br><br>CV Link</p>";
var project3aside = "<h1 id=\"asidetitel\"></h1><img id=\"foto\" src=\"foto2.JPG\" alt=\"Picture of me\" height=100 weight=100><p id=\"asideinhoud\">Github link<br><br>Codeschool link</p>";

var project1inhoud = "Deze website is handgemaakt en fungeert als showcase voor mijn affiniteit met de ict. Ik heb hiervoor gebruik gemaakt van HTML, CSS en Javascript. Mijn kennis van HTML stamde nog van de middelbare school (ik volgde toen het vak informatica) en CSS en Javascript waren nieuw voor mij. Doormiddel van zelfstudie heb ik me dit eigen gemaakt.<br>Mijn doel is een baan in de ICT, het liefst beginnende op een 'algemene' plek als software tester of sys-admin. De ICT is voor mij heel aantrekkelijk omdat het een werkveld is waar ik de rest van mijn leven door kan blijven leren en kan blijven verdiepen. Daarnaast is het ontwikkelen van software teamwork!<br>Voor de duidelijkheid: ik ben geen talent in het design van websites. Maar wil met deze website mijn vermogen in het aanleren van talen aantonen. En het is daarnaast ook gewoon heerlijk om te experimenteren met verschillende talen en daadwerkelijk een resultaat te hebben.<br>Deze website gaat uitgebreid worden met kleine functionaliteiten al naar gelang de vaardigheden die ik leer. MySQL en Python zijn nu onder mijn aandacht. <br><br>Zowel de informatie over de code die ik heb geschreven en persoonlijke informatie zijn hier te vinden.";
var project2inhoud = "Vergis je niet als je mijn opleiding en en werkervaring ziet, ik ben een beta persoon in hart en nieren. Heel sociaal ook en mede daardoor heb ik helaas een opleiding gekozen waar ik mijn draai niet kon vinden. Tussen de lijntjes door zie je mijn analytische en onderzoekende blik in mijn CV terug. <br>Uiteraard een natuur en techniek profiel op de middelbare school, waarbij ik tijdens de pauzes en na school meterologische metingen uitvoerde voor het Globe project. Informatica was toendertijd één van mijn lievelingsvakken, hier deed ik schoolexamen in.<br><br>Tijdens een stage bij een jongeren centrum met podium ben ik betrokken geraakt met licht en geluidstechniek (als nieuwsgierig aagje was al die apparatuur met verschillende knopjes en lampjes erg aantrekkelijk). In mijn vrije tijd ben ik daarnaast ook steeds meer gebruik gaan maken van opensoure software, sinds 4 jaar gebruik ik nu Ubuntu. <br>In mijn verschillende stages, examenopdrachten en meerdere minors kan je mijn zoektocht naar analytische uitdagingen zien.<br><br>Wat is de beste werkplek voor een nieuwsgierig analytisch persoon die graag samenwerkt en behoefte heeft aan een stroom van problemen om aan te puzzelen en veel uitdagende mogelijkheden tot verdiepen? Waar zit het constant leren van nieuwe kennis en vaardigheden ingebakken in het werk? <br>Uiteindelijk ben ik tot de conclusie gekomen dat ik het geheel in de verkeerde hoek zocht en dat de ict het enige echte antwoord is. <br><br><br>Dus: ik ben opzoek naar een werkgever die mijn potentieel inziet en mij (intern) wil opleiden. Ik zoek een algemene functie als Software tester of System administrator, omdat ik nog niet goed kan kiezen waar/of ik me (later) wil specialiseren (een programmeertaal of een bepaalde functie?). En dit plekken zijn waar ik met verschillende programmeertalen in aanraking kan komen. Ik heb veel ervaring met samenwerken (ook in complexe situaties) en kan prima raporten schrijven. En heb behoefte aan een zekere werkdruk zoals je dat tijdens projecten of tijdens het werken voor klanten voelt. <br>Een heel leergierige, sociale, gedreven IT-er, wat wil je nog meer?<br><br>Via LinkedIn kan je contact met me opnemen om een afspraak te maken.";
var project3inhoud = "Alle code die ik heb geschreven voor deze website is te vinden op Github. Het studeren voor de benodigde kennis om het maken van deze website mogelijk te maken heb ik gedaan via Codeschool. De webserver waar de website op staat was al aanwezig 'in' mijn huishouden en ook voor alle benodigde beveiliging heb ik niet zelf gezorgd. Voor de keuze in programmeertalen en studiemiddelen heb ik advies gevraagd. <br>Met mijn code mocht niemand zich echter bemoeien, het is mijn project en ik heb het zelf bedacht, er zelf voor geleerd en het zelf geschreven. Al is de code misschien niet optimaal, het doet wat ik wil en ik ben trots op het resultaat.<br><br>De website wordt nog uitgebreid en verbeterd, momenteel ben ik bezig een kleine applicatie te schrijven die gebruikt maakt van informatie die in een simpele database staat. Hierbij maak ik gebruik van de talen Python en MySQL. Ook ben ik van plan alle informatie op mijn website ook in het Engels aan te bieden.";
