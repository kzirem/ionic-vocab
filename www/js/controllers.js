angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  window.onload = function() { playStream(); };
    // Code from http://www.joeldare.com/wiki/play_an_mp3_audio_stream_in_phonegap
    function playStream() {
      try {
        var myaudio = new Audio('http://icecast.ksl.com:8000/');
        myaudio.id = 'playerMyAdio';
        myaudio.play();
      } catch (e) {
        alert('no audio support!');
      }
    };
  /// alphaber accordion

  $scope.words = [
{"kb":"a","fr":"dag"},
{"kb":"à","fr":"ar"},
{"kb":"a-tantôt","fr":"ar-ticki"},
{"kb":"abaissement","fr":"asider"},
{"kb":"abaisser","fr":"sider"},
{"kb":"abandon","fr":"tafuli"},
{"kb":"abandonner","fr":"eddj"},
{"kb":"abaque","fr":"tafelwit"},
{"kb":"abasourdir","fr":"suusszegw"},
{"kb":"abattre","fr":"engh"},
{"kb":"abcès","fr":"timmist"},
{"kb":"abeille","fr":"tizizwit"},
{"kb":"aboiement","fr":"aseglef"},
{"kb":"abolition","fr":"isir"},
{"kb":"abondant","fr":"tugwta"},
{"kb":"abonder","fr":"yugwet"},
{"kb":"d'abord","fr":"tizar"},
{"kb":"aboutir","fr":"imighen"},
{"kb":"aboyer","fr":"seglef"},
{"kb":"abreuver","fr":"sessu"},
{"kb":"abréviation","fr":"tazegzilt"},
{"kb":"abri","fr":"asqif"},
{"kb":"abriter","fr":"effer"},
{"kb":"abriter","fr":"effer"},
{"kb":"abscisse","fr":"tanezgumt"},
{"kb":"absence","fr":"iba"},
{"kb":"absent","fr":"anabay"},
{"kb":"absenter","fr":"igwdhel"},
{"kb":"absinthe","fr":"ccih"},
{"kb":"absolu","fr":"amagaz"},
{"kb":"absorbant","fr":"amsum"},
{"kb":"absorber","fr":"issum"},
{"kb":"abstenir","fr":"ugel"},
{"kb":"abstention","fr":"aggal"},
{"kb":"abstraction","fr":"tadwant"},
{"kb":"abstrait","fr":"amadwan"},
{"kb":"absurde","fr":"azulal"},
{"kb":"accélérateur","fr":"acekkad"},
{"kb":"accélération","fr":"tacekkatt"},
{"kb":"accélérer","fr":"cekked"},
{"kb":"accent","fr":"aghdebbu"},
{"kb":"accentuer","fr":"ghdebbu"},
{"kb":"acceptation","fr":"taszayet"},
{"kb":"accepter","fr":"szayet"},
{"kb":"accès","fr":"uduf"},
{"kb":"accident","fr":"asehwa"},
{"kb":"accommodation","fr":"ameckiked"},
{"kb":"accommoder","fr":"meckiked"},
{"kb":"accompagnateur","fr":"amsegli"},
{"kb":"accompagnement","fr":"azday"},
{"kb":"accord","fr":"amtawi"},
{"kb":"accoucher","fr":"arew"},
{"kb":"accoupler","fr":"zdi"},
{"kb":"accrocher","fr":"sili"},
{"kb":"s'accrocher","fr":"sgenttedh"},
{"kb":"accroupir","fr":"skuttem"},
{"kb":"accueil","fr":"asnubbeg"},
{"kb":"accueillir","fr":"snubbeg"},
{"kb":"acculturation","fr":"tasemnennayt"},
{"kb":"accumulation","fr":"acellif"},
{"kb":"accumuler","fr":"cellef"},
{"kb":"accusation","fr":"tardayt"},
{"kb":"accuser","fr":"rdu"},
{"kb":"achat","fr":"timesghiwt"},
{"kb":"acheter","fr":"segh"},
{"kb":"acheteur","fr":"amsagh"},
{"kb":"achever","fr":"semdu"},
{"kb":"acide","fr":"amaghus"},
{"kb":"acidité","fr":"tamaghus"},
{"kb":"acier","fr":"anfed"},
{"kb":"acoustique","fr":"asfeldan"},
{"kb":"acoustique","fr":"tasensflett"},
{"kb":"acquérir","fr":"lummesz"},
{"kb":"acquittement","fr":"asenfu"},
{"kb":"acquitter","fr":"sunfu"},
{"kb":"acte","fr":"tigi"},
{"kb":"acte-notarié","fr":"arra"},
{"kb":"acte-théâtre","fr":"asekkir"},
{"kb":"actif","fr":"urmid"},
{"kb":"action","fr":"igi"},
{"kb":"actionnaire","fr":"anaful"},
{"kb":"activation","fr":"asermed"},
{"kb":"activité","fr":"armud"},
{"kb":"actualité","fr":"tamirt"},
{"kb":"actuel","fr":"amiran"},
{"kb":"actuellement","fr":"imira"},
{"kb":"adaptation","fr":"amsasa"},
{"kb":"adapter","fr":"msasa"},
{"kb":"Addition","fr":"anerni"},
{"kb":"Additionner","fr":"smerni"},
{"kb":"adepte","fr":"anedhfar"},
{"kb":"adéquat","fr":"ameddizi"},
{"kb":"adhérent","fr":"ameltagh"},
{"kb":"adhérer","fr":"ltegh"},
{"kb":"adhésion","fr":"altagh"},
{"kb":"adieu","fr":"asifedh"},
{"kb":"adjectif","fr":"arbib"},
{"kb":"adjoint","fr":"ammazul"},
{"kb":"admettre","fr":"sidemr"},
{"kb":"administrateur","fr":"anebdal"},
{"kb":"administratif","fr":"adeblan"},
{"kb":"administration","fr":"tabdelt"},
{"kb":"administrer","fr":"dbel"},
{"kb":"admirable","fr":"anegraz"},
{"kb":"admiration","fr":"agaraz"},
{"kb":"admirer","fr":"grez"},
{"kb":"admissible","fr":"amsidmer"},
{"kb":"admission","fr":"asidmer"},
{"kb":"adolescence","fr":"tanubi"},
{"kb":"adolescent","fr":"anubi"},
{"kb":"adolescente","fr":"tanubi"},
{"kb":"adopter","fr":"zdel"},
{"kb":"adoption","fr":"azdal"},
{"kb":"adressage","fr":"tuzna"},
{"kb":"adresse","fr":"tansa"},
{"kb":"adulte","fr":"amengadh"},
{"kb":"adversaire","fr":"afna"},
{"kb":"aérer","fr":"sbuhru"},
{"kb":"aéroport","fr":"anafag"},
{"kb":"affaiblir","fr":"ssumen"},
{"kb":"affaiblissement","fr":"anzaf"},
{"kb":"affaire","fr":"aweszlu"},
{"kb":"affamé","fr":"imellisz"},
{"kb":"affectif","fr":"amurnan"},
{"kb":"affection","fr":"tawernant"},
{"kb":"affichage","fr":"tanezla"},
{"kb":"affiche","fr":"anazul"},
{"kb":"afficher","fr":"snazel"},
{"kb":"affirmatif","fr":"ilaw"},
{"kb":"affirmation","fr":"tilawt"},
{"kb":"affirmer","fr":"ssentem"},
{"kb":"affixe","fr":"awsil"},
{"kb":"affranchi","fr":"aderfi"},
{"kb":"affranchir","fr":"sedref"},
{"kb":"affronter","fr":"sidmer"},
{"kb":"afin-que","fr":"as"},
{"kb":"agacer","fr":"cettet"},
{"kb":"Âge","fr":"awetay"},
{"kb":"agenda","fr":"tagebburt"},
{"kb":"agent","fr":"ameggi"},
{"kb":"aggravation","fr":"asenfuffed"},
{"kb":"aggraver","fr":"senfuffed"},
{"kb":"agile","fr":"twey"},
{"kb":"agir","fr":"eg"},
{"kb":"agitateur","fr":"asmessay"},
{"kb":"agitation","fr":"tasmessit"},
{"kb":"agiter","fr":"smessay"},
{"kb":"agneau","fr":"izimer"},
{"kb":"agonie","fr":"aselqef"},
{"kb":"agoniser","fr":"selqef"},
{"kb":"agréable","fr":"amagraz"},
{"kb":"agrégation","fr":"tasideft"},
{"kb":"agrégé","fr":"amsaduf"},
{"kb":"agresser","fr":"zzernen"},
{"kb":"agresseur","fr":"azernan"},
{"kb":"agressif","fr":"amzernen"},
{"kb":"agression","fr":"tazermant"},
{"kb":"aide","fr":"tallat"},
{"kb":"aide-mémoire","fr":"tallalt-n-umekti"},
{"kb":"aider","fr":"ellil"},
{"kb":"aigle","fr":"igider"},
{"kb":"aigu","fr":"anamsad"},
{"kb":"aiguillage","fr":"asedhren"},
{"kb":"aiguille","fr":"tisegnit"},
{"kb":"aiguiser","fr":"semsed"},
{"kb":"ail","fr":"tiskert"},
{"kb":"aile","fr":"tiferrets"},
{"kb":"aimer","fr":"ri"},
{"kb":"aîné","fr":"amenzu"},
{"kb":"air","fr":"azwu"},
{"kb":"aire","fr":"annar"},
{"kb":"ajournement","fr":"asmerger"},
{"kb":"ajourner","fr":"smerger"},
{"kb":"ajouter","fr":"sit"},
{"kb":"ajustement","fr":"asgAdda"},
{"kb":"ajuster","fr":"sgAddi"},
{"kb":"album","fr":"takalast"},
{"kb":"alcool","fr":"ighisem"},
{"kb":"alcoolique","fr":"aghasam"},
{"kb":"aléatoire","fr":"usamma"},
{"kb":"alentours","fr":"aszi"},
{"kb":"algorithme","fr":"awarzim"},
{"kb":"algorithmique","fr":"tasnurzimt"},
{"kb":"aliénation","fr":"takufda"},
{"kb":"aliéné","fr":"kuffed"},
{"kb":"aliéner","fr":"skuffed"},
{"kb":"aliment","fr":"utctci"},
{"kb":"allaitement","fr":"asuttedh"},
{"kb":"allaiter","fr":"suttedh"},
{"kb":"alléger","fr":"afsus"},
{"kb":"aller","fr":"ruh"},
{"kb":"alliance","fr":"tamsisit"},
{"kb":"allié","fr":"amsisa"},
{"kb":"allonger","fr":"seghwsef"},
{"kb":"allumage","fr":"asaghay"},
{"kb":"allumer","fr":"ssagh"},
{"kb":"allumette","fr":"luqid"},
{"kb":"allure","fr":"sszarif"},
{"kb":"alors","fr":"ihi"},
{"kb":"alphabet","fr":"agemmay"},
{"kb":"alphabétisation","fr":"asgemmay"},
{"kb":"altération","fr":"arjan"},
{"kb":"altérer","fr":"rjen"},
{"kb":"alternance","fr":"tamellilt"},
{"kb":"alternant","fr":"amlellay"},
{"kb":"alternatif","fr":"ameslellay"},
{"kb":"alternative","fr":"tameslellayt"},
{"kb":"alterner","fr":"mlelli"},
{"kb":"amant","fr":"amesri"},
{"kb":"amateur","fr":"amaswadh"},
{"kb":"ambassade","fr":"tamahelt"},
{"kb":"ambassadeur","fr":"anmahal"},
{"kb":"ambiance","fr":"iswagh"},
{"kb":"ambigu","fr":"amsulles"},
{"kb":"ambitieux","fr":"azidal"},
{"kb":"ambition","fr":"tazilta"},
{"kb":"ambivalence","fr":"tanat"},
{"kb":"ambre","fr":"leembar"},
{"kb":"Âme","fr":"iman"},
{"kb":"amélioration","fr":"asilegh"},
{"kb":"améliorer","fr":"silegh"},
{"kb":"amende","fr":"tafgurt"},
{"kb":"amendement","fr":"tinwit"},
{"kb":"amener","fr":"elwi"},
{"kb":"amer","fr":"merzeg"},
{"kb":"amertume","fr":"tarzeg"},
{"kb":"ami","fr":"ameddakwel"},
{"kb":"amitié","fr":"tiddukla"},
{"kb":"amnésie","fr":"taremmaktut"},
{"kb":"amorce","fr":"asenker"},
{"kb":"amortir","fr":"senfesz"},
{"kb":"amour","fr":"tayri"},
{"kb":"amoureux","fr":"amaray"},
{"kb":"amplificateur","fr":"asetfal"},
{"kb":"amplification","fr":"asetfel"},
{"kb":"amplifier","fr":"setfel"},
{"kb":"ampoule","fr":"acelleqluq"},
{"kb":"amulette","fr":"timga"},
{"kb":"amusant","fr":"ametturs"},
{"kb":"amuser","fr":"ezhu"},
{"kb":"an","fr":"aseggwas"},
{"kb":"analyse","fr":"asebrurez "},
{"kb":"analyser","fr":"sebrurez "},
{"kb":"anarchie","fr":"tawernatt"},
{"kb":"anarchiste","fr":"awernadh"},
{"kb":"ancêtres","fr":"imraw"},
{"kb":"ancien","fr":"aqbur"},
{"kb":"ane","fr":"aghul"},
{"kb":"anesthésie","fr":"aduyyet"},
{"kb":"anesthésier","fr":"sduyyet"},
{"kb":"angle","fr":"tighmert"},
{"kb":"angoisse","fr":"amnughjef"},
{"kb":"animal","fr":"aywal"},
{"kb":"animateur","fr":"amekfadhu"},
{"kb":"animation","fr":"tamekfadhut"},
{"kb":"animer","fr":"kfedh"},
{"kb":"annales","fr":"imsegwasen"},
{"kb":"anneau","fr":"tawinest"},
{"kb":"année","fr":"aseggwas"},
{"kb":"annexe","fr":"amaruz"},
{"kb":"annexer","fr":"smurez"},
{"kb":"annonce","fr":"tulgha"},
{"kb":"annoncer","fr":"ellegh"},
{"kb":"annulation","fr":"asemmet"},
{"kb":"annuler","fr":"semmet"},
{"kb":"anomalie","fr":"aszalay"},
{"kb":"anonyme","fr":"udrig"},
{"kb":"antécédent","fr":"azeggwar"},
{"kb":"antenne","fr":"taska (tisekwa)"},
{"kb":"anthropologie","fr":"talsasnet"},
{"kb":"anticorps","fr":"tafekkamgelt"},
{"kb":"antimoine","fr":"tazult"},
{"kb":"antique","fr":"agles"},
{"kb":"antiquité","fr":"taglest"},
{"kb":"antithèse","fr":"tameglamnatt"},
{"kb":"antre","fr":"ifri"},
{"kb":"anus","fr":"akhuna"},
{"kb":"août","fr":"ghuct"},
{"kb":"apercevoir","fr":"wali"},
{"kb":"aphasie","fr":"assignu"},
{"kb":"aplatir","fr":"sgellel"},
{"kb":"apogée ","fr":"aggi"},
{"kb":"apparaître","fr":"wemm"},
{"kb":"appareil","fr":"acermadh"},
{"kb":"apparence","fr":"tagamett"},
{"kb":"appartenance","fr":"amyili"},
{"kb":"appartenir","fr":"ili"},
{"kb":"appel","fr":"tighri"},
{"kb":"appeler","fr":"siwel"},
{"kb":"appétit","fr":"aburdu"},
{"kb":"applaudir","fr":"suqqes"},
{"kb":"applaudissement","fr":"tasuqqest"},
{"kb":"application","fr":"asnas"},
{"kb":"appliquer","fr":"snes"},
{"kb":"apporter","fr":"awi"},
{"kb":"apposé","fr":"azedday"},
{"kb":"appréciation","fr":"adakadh"},
{"kb":"apprécier","fr":"dkedh"},
{"kb":"apprentissage","fr":"almad"},
{"kb":"approche","fr":"anekmar"},
{"kb":"approcher","fr":"kumer"},
{"kb":"approfondir","fr":"sderru"},
{"kb":"approvisionner","fr":"zigesz"},
{"kb":"appuyer","fr":"senned"},
{"kb":"apre","fr":"asemmam"},
{"kb":"après-demain","fr":"sel-azekka"},
{"kb":"apte","fr":"imnezgi"},
{"kb":"aptitude","fr":"tinnezgit"},
{"kb":"araignée","fr":"tissist"},
{"kb":"arbitrage","fr":"tanefrut"},
{"kb":"arbitraire","fr":"iwri"},
{"kb":"arbitre","fr":"anefray"},
{"kb":"arbitrer","fr":"snefru"},
{"kb":"arbre","fr":"Addag"},
{"kb":"arc-en-ciel","fr":"tislit-n-wenszar"},
{"kb":"archéologie","fr":"tirekkisent"},
{"kb":"architecte","fr":"amasdag"},
{"kb":"architecture","fr":"tasegda"},
{"kb":"archivage","fr":"aghbar"},
{"kb":"archiver","fr":"ghber"},
{"kb":"ardoise","fr":"takifaft"},
{"kb":"arête","fr":"amder"},
{"kb":"argent","fr":"akarid"},
{"kb":"argument","fr":"afakul"},
{"kb":"argumenter","fr":"sfukel"},
{"kb":"arithmétique","fr":"tasnamdhant"},
{"kb":"arme","fr":"amrig"},
{"kb":"armé","fr":"rbeb"},
{"kb":"armée","fr":"igen"},
{"kb":"armement","fr":"taszulli"},
{"kb":"armer","fr":"serbeb"},
{"kb":"arôme","fr":"tinbi"},
{"kb":"arracher","fr":"sukef"},
{"kb":"arrangement","fr":"akafas"},
{"kb":"arranger","fr":"seggem"},
{"kb":"arrestation","fr":"abbaz"},
{"kb":"arrêter","fr":"sebded"},
{"kb":"arriéré","fr":"ameqqal"},
{"kb":"arrière","fr":"deffir"},
{"kb":"arrière-garde","fr":"aberdud"},
{"kb":"arrivée","fr":"aggwadh"},
{"kb":"arriver","fr":"awedh"},
{"kb":"arrogance","fr":"zzukh"},
{"kb":"arrondissement","fr":"asun"},
{"kb":"arroser","fr":"ssew"},
{"kb":"arrosoir","fr":"assukhan"},
{"kb":"art","fr":"taszuri"},
{"kb":"artichauts","fr":"tifeghwa"},
{"kb":"article","fr":"amagrad"},
{"kb":"articulation","fr":"asusan"},
{"kb":"artilleur","fr":"amerday"},
{"kb":"artisan","fr":"inedh"},
{"kb":"artisanat","fr":"taszuri"},
{"kb":"ascenseur","fr":"amessawen"},
{"kb":"asile","fr":"tamhara"},
{"kb":"aspect","fr":"timeszrit"},
{"kb":"aspiration","fr":"aslum"},
{"kb":"assassin","fr":"anedhlib"},
{"kb":"assassinat","fr":"adhlib"},
{"kb":"assemblage","fr":"asegrew"},
{"kb":"assemblée","fr":"agraw"},
{"kb":"assembler","fr":"segrrew"},
{"kb":"asseoir","fr":"sghim"},
{"kb":"assermenté","fr":"imgilli"},
{"kb":"assez","fr":"ddeqs"},
{"kb":"assidu","fr":"amsegli"},
{"kb":"assiduité ","fr":"tisegli"},
{"kb":"assiéger","fr":"sutel"},
{"kb":"assiette","fr":"tadhebsits"},
{"kb":"assimilation","fr":"tamsertit"},
{"kb":"assimilé","fr":"artay"},
{"kb":"assimiler","fr":"sserti"},
{"kb":"assistance","fr":"tirgit"},
{"kb":"assistant","fr":"amarag"},
{"kb":"assister","fr":"areg"},
{"kb":"association","fr":"tiddukla"},
{"kb":"associé","fr":"amdukel"},
{"kb":"associer","fr":"sdukkel"},
{"kb":"assoiffé","fr":"effad"},
{"kb":"assoupir","fr":"nuddem"},
{"kb":"assouplir","fr":"selwegh "},
{"kb":"assumer","fr":"bib"},
{"kb":"assurance","fr":"asenkid"},
{"kb":"assurer","fr":"senked"},
{"kb":"asthme","fr":"buneggaf"},
{"kb":"astre","fr":"itri"},
{"kb":"astronomie","fr":"tasnaggurt"},
{"kb":"astuce","fr":"tikhidest"},
{"kb":"asymétrie","fr":"tirsit"},
{"kb":"atelier","fr":"asakwen"},
{"kb":"atmosphère ","fr":"tignewt"},
{"kb":"atome","fr":"abelkam"},
{"kb":"atomique","fr":"abelkim"},
{"kb":"atroce","fr":"anessaruf"},
{"kb":"attacher","fr":"eqqen"},
{"kb":"attaquer","fr":"nteg"},
{"kb":"atteindre","fr":"ssiwedh"},
{"kb":"atteinte","fr":"tusgha"},
{"kb":"attendre","fr":"rdju"},
{"kb":"attente","fr":"aradju"},
{"kb":"attentif","fr":"amegraw"},
{"kb":"attention","fr":"ghur"},
{"kb":"attitude","fr":"Addud"},
{"kb":"attraction","fr":"tiaasszyt"},
{"kb":"attraper","fr":"ettef"},
{"kb":"attribut","fr":"ayla"},
{"kb":"aubépine","fr":"idmim"},
{"kb":"auberge","fr":"azebriz"},
{"kb":"audience","fr":"tibeddi"},
{"kb":"audio-visuel","fr":"asliqqel"},
{"kb":"auditeur","fr":"amesseflid"},
{"kb":"augmentation","fr":"timeriwt"},
{"kb":"augmenter","fr":"rnu"},
{"kb":"aumône","fr":"takuuti"},
{"kb":"aurore","fr":"tafrara"},
{"kb":"aussi","fr":"ula"},
{"kb":"aussitôt","fr":"bihfih"},
{"kb":"auteur","fr":"ameskar"},
{"kb":"authenticité","fr":"asala"},
{"kb":"authentique","fr":"asnemdan"},
{"kb":"auto","fr":"man"},
{"kb":"autobiographie","fr":"tameddurmant"},
{"kb":"autochtone","fr":"asrew"},
{"kb":"autocrate","fr":"aneddabu"},
{"kb":"autocratie","fr":"taneddabut"},
{"kb":"autodidacte","fr":"amnesselmad"},
{"kb":"automate","fr":"awurman"},
{"kb":"automatique","fr":"aymani"},
{"kb":"automatisme","fr":"amenwer"},
{"kb":"automne","fr":"afulman"},
{"kb":"automobile","fr":"amenziraz"},
{"kb":"autonme","fr":"amwan"},
{"kb":"autonomie","fr":"tafulmanit"},
{"kb":"autorisation","fr":"turagt"},
{"kb":"autoriser","fr":"sireg"},
{"kb":"autoritaire","fr":"amdenkay"},
{"kb":"autorité","fr":"anesdabu"},
{"kb":"autre ","fr":"nnidhen"},
{"kb":"autre-chose ","fr":"ayen-nnidhen"},
{"kb":"autrefois ","fr":"zik"},
{"kb":"autruche","fr":"ibelliredj"},
{"kb":"avaler","fr":"elmesz"},
{"kb":"avance","fr":"tizar"},
{"kb":"avancer","fr":"asz"},
{"kb":"avantage","fr":"abaghur"},
{"kb":"avare","fr":"amechah"},
{"kb":"avec","fr":"akwed"},
{"kb":"avenir","fr":"imal"},
{"kb":"avenue","fr":"tasukt"},
{"kb":"avertir","fr":"ghtel"},
{"kb":"avertissement","fr":"aghtal"},
{"kb":"aveu","fr":"timelkit"},
{"kb":"aveugle","fr":"wariszri"},
{"kb":"aviateur","fr":"amsafeg."},
{"kb":"aviation","fr":"tamsafga"},
{"kb":"avis","fr":"amnad"},
{"kb":"avortement","fr":"aghray"},
{"kb":"avouer","fr":"iku"},
{"kb":"avril","fr":"ibrir"},
{"kb":"axe","fr":"agellus"},
{"kb":"axial","fr":"aglusan"},
{"kb":"babouche","fr":"idukan"},
{"kb":"bâcler","fr":"khermez"},
{"kb":"bagage","fr":"afecku"},
{"kb":"bagarre","fr":"tcaqlala"},
{"kb":"bagarrer","fr":"tceqlel"},
{"kb":"bagatelle","fr":"aqejqul"},
{"kb":"bague","fr":"takhatemt"},
{"kb":"baigner","fr":"ccef"},
{"kb":"bain","fr":"acucef "},
{"kb":"baisse","fr":"asider"},
{"kb":"baisser","fr":"seneghs"},
{"kb":"balade","fr":"asara"},
{"kb":"baladeur","fr":"asefledan"},
{"kb":"balafrer","fr":"crem"},
{"kb":"balai","fr":"tasfatt"},
{"kb":"balance","fr":"amsewliwel"},
{"kb":"balancer","fr":"wliwel"},
{"kb":"balançoire","fr":"tajgagalt"},
{"kb":"balayage","fr":"adhummu"},
{"kb":"balayer","fr":"dhum"},
{"kb":"ballet","fr":"asummur"},
{"kb":"ballon","fr":"ticcirt"},
{"kb":"bande","fr":"akhawag"},
{"kb":"bande-dessinée","fr":"asaru-yunigh"},
{"kb":"banquet","fr":"adraw"},
{"kb":"barboter","fr":"ferkedh"},
{"kb":"barque","fr":"tireft"},
{"kb":"barrage","fr":"uggug"},
{"kb":"barrière","fr":"tisseghlit"},
{"kb":"bas","fr":"Adda"},
{"kb":"base","fr":"azadur"},
{"kb":"bassin","fr":"amdun"},
{"kb":"bât","fr":"tsberdha"},
{"kb":"bataillon","fr":"agalfu"},
{"kb":"bâtard","fr":"acenti"},
{"kb":"bateau","fr":"agherrabu"},
{"kb":"bâtir","fr":"ssali"},
{"kb":"bâton","fr":"akuray"},
{"kb":"battre","fr":"ewwet"},
{"kb":"bavard","fr":"stut"},
{"kb":"bavarder","fr":"mmeslay"},
{"kb":"bave","fr":"ilezzazen"},
{"kb":"beau","fr":"ahuskay"},
{"kb":"beaucoup","fr":"attas"},
{"kb":"beau-frère","fr":"adheggwal"},
{"kb":"beauté","fr":"tahuski"},
{"kb":"bébé","fr":"ilufan"},
{"kb":"bec","fr":"akenkuub"},
{"kb":"béer","fr":"bbehbi"},
{"kb":"bégayer","fr":"sqewqew"},
{"kb":"beignet","fr":"idernan"},
{"kb":"bêler","fr":"sbaabaa"},
{"kb":"bélier","fr":"ikerri"},
{"kb":"bénédiction","fr":"talemmiht"},
{"kb":"bénéfice","fr":"arraz"},
{"kb":"bénéficier","fr":"rez"},
{"kb":"berbère","fr":"amazigh"},
{"kb":"berceau","fr":"dduh"},
{"kb":"bercer","fr":"zzuzen"},
{"kb":"berger","fr":"ameksa"},
{"kb":"bergeronnette","fr":"tabuzegrayezt"},
{"kb":"besoin","fr":"assar"},
{"kb":"bestiole","fr":"abaauc"},
{"kb":"beurre","fr":"udi"},
{"kb":"bibliographie","fr":"adlesumugh"},
{"kb":"bibliothèque","fr":"timkardhit"},
{"kb":"bidon","fr":"abelyun"},
{"kb":"bienfaisance","fr":"tullught"},
{"kb":"bienvenue","fr":"ansuf"},
{"kb":"bijou","fr":"asghun "},
{"kb":"bilan","fr":"tamaghant "},
{"kb":"bilingue","fr":"amesnawal"},
{"kb":"binaire","fr":"imisin"},
{"kb":"binôme","fr":"asenful"},
{"kb":"biographie","fr":"tameddurt"},
{"kb":"biologie","fr":"tudersent"},
{"kb":"blâme","fr":"azawar"},
{"kb":"blâmer","fr":"zawer"},
{"kb":"blanc","fr":"amellal"},
{"kb":"blé","fr":"irden"},
{"kb":"blessé","fr":"amagus"},
{"kb":"blessure","fr":"aggas"},
{"kb":"bleu","fr":"aszerwal"},
{"kb":"blocage","fr":"taqqamt"},
{"kb":"bluffer","fr":"kellekh"},
{"kb":"boeuf","fr":"akentuur "},
{"kb":"boire","fr":"su"},
{"kb":"bois","fr":"asghar "},
{"kb":"boisson","fr":"timeswit"},
{"kb":"boite","fr":"tankult"},
{"kb":"boiter","fr":"suuszel"},
{"kb":"boiteux","fr":"arejdal"},
{"kb":"bol","fr":"aqedduh"},
{"kb":"bombardement","fr":"taberrawt"},
{"kb":"bombarder","fr":"sbirrew"},
{"kb":"bon","fr":"dhelfen"},
{"kb":"bondir","fr":"ntteg"},
{"kb":"bonheur","fr":"tumert"},
{"kb":"bonjour","fr":"azul"},
{"kb":"bonté","fr":"tamella"},
{"kb":"bord","fr":"ttarf"},
{"kb":"borgne","fr":"azaawal"},
{"kb":"borne","fr":"agmir"},
{"kb":"bosse","fr":"taarurt"},
{"kb":"bossu","fr":"bu-tayyut "},
{"kb":"bouc","fr":"abuukir"},
{"kb":"bouche","fr":"akemmu"},
{"kb":"bouché","fr":"yergel "},
{"kb":"bouchée","fr":"talqimt"},
{"kb":"boucher","fr":"agher"},
{"kb":"bouchon ","fr":"tadimt"},
{"kb":"bouderie ","fr":"tutctcha"},
{"kb":"boue","fr":"alud"},
{"kb":"bougie","fr":"tacemmaat"},
{"kb":"bouillir","fr":"rkem"},
{"kb":"bouillon","fr":"imerghan "},
{"kb":"boule","fr":"takurt "},
{"kb":"bouleverser","fr":"serkes"},
{"kb":"bourbier","fr":"ikhmir"},
{"kb":"bourse","fr":"taggazt"},
{"kb":"bouton","fr":"taqeffalt"},
{"kb":"boxe","fr":"ukkim"},
{"kb":"boyau","fr":"adan"},
{"kb":"boycotter","fr":"grefdh"},
{"kb":"braire","fr":"juu"},
{"kb":"braise","fr":"tirgets"},
{"kb":"branche","fr":"tasetta"},
{"kb":"branler","fr":"mil"},
{"kb":"bras","fr":"ighil"},
{"kb":"brasier","fr":"irig"},
{"kb":"brave","fr":"argaz"},
{"kb":"bravoure","fr":"tirugza"},
{"kb":"brebis","fr":"tikhsi"},
{"kb":"bricolage","fr":"adaqar"},
{"kb":"bricoler","fr":"dqar"},
{"kb":"bride","fr":"algamu"},
{"kb":"briller","fr":"reqq"},
{"kb":"briquet","fr":"infed"},
{"kb":"briser","fr":"ersz"},
{"kb":"broche","fr":"abzim"},
{"kb":"brochette","fr":"tutelt"},
{"kb":"brouillard","fr":"agu"},
{"kb":"broussaille","fr":"amadagh"},
{"kb":"bru","fr":"tislit"},
{"kb":"bruit","fr":"szdih"},
{"kb":"brûler","fr":"ergh"},
{"kb":"brut","fr":"afusszagh"},
{"kb":"bûche","fr":"tifersit"},
{"kb":"budget","fr":"tighusar"},
{"kb":"bulletin","fr":"tanfult"},
{"kb":"bureau","fr":"asirra"},
{"kb":"burnous","fr":"ahAddam"},
{"kb":"but","fr":"iswi"},
{"kb":"butte","fr":"tighilt"},
{"kb":"câble","fr":"agatu"},
{"kb":"cacher","fr":"effer"},
{"kb":"cachet","fr":"aferas"},
{"kb":"cadeau","fr":"asefk"},
{"kb":"cadence","fr":"awlellegh"},
{"kb":"cadencé","fr":"awlellagh"},
{"kb":"cadet","fr":"amatul"},
{"kb":"cadre","fr":"akatar"},
{"kb":"cafetière","fr":"abaqraj"},
{"kb":"cafouiller","fr":"ferkedh"},
{"kb":"cage","fr":"akentu"},
{"kb":"cahier","fr":"alug (ilaggwen)"},
{"kb":"caisse","fr":"asenduq"},
{"kb":"cajoler","fr":"hesszer"},
{"kb":"calcul","fr":"asidhan"},
{"kb":"calculateur","fr":"amessidhen"},
{"kb":"calculer","fr":"ssidhen"},
{"kb":"calendrier","fr":"tafada"},
{"kb":"caler","fr":"sikel"},
{"kb":"calligraphie","fr":"izriri"},
{"kb":"calotte","fr":"tacacit"},
{"kb":"camarade","fr":"asmun"},
{"kb":"caméléon","fr":"tata"},
{"kb":"camp","fr":"agrur "},
{"kb":"campement","fr":"amazir"},
{"kb":"camper","fr":"sder"},
{"kb":"camping","fr":"asdar"},
{"kb":"candidat","fr":"amzazwar"},
{"kb":"candidature","fr":"tanekda"},
{"kb":"canicule","fr":"smayem"},
{"kb":"canon","fr":"amrud"},
{"kb":"cantine","fr":"tasmetctca"},
{"kb":"capacité","fr":"tazmart"},
{"kb":"capital","fr":"ihri"},
{"kb":"capitale","fr":"tamaneght"},
{"kb":"capitalisme","fr":"asihri"},
{"kb":"capitaliste","fr":"asihrem"},
{"kb":"caprice","fr":"antaw"},
{"kb":"captage","fr":"attaf"},
{"kb":"capter","fr":"ttef"},
{"kb":"captif","fr":"amettaf"},
{"kb":"capuchon","fr":"aqelmun"},
{"kb":"caractère","fr":"asekkil"},
{"kb":"caractéristique","fr":"amsekni"},
{"kb":"caravane","fr":"tasghert"},
{"kb":"carder","fr":"qerdec"},
{"kb":"carence","fr":"anuref"},
{"kb":"caresser","fr":"slef"},
{"kb":"caricature","fr":"afghul"},
{"kb":"carotte","fr":"zrudya"},
{"kb":"cartable","fr":"tacekkart"},
{"kb":"carte","fr":"takardhi"},
{"kb":"cas","fr":"tajrut"},
{"kb":"cascade","fr":"acercur"},
{"kb":"case","fr":"takhdhert"},
{"kb":"casse-croûte","fr":"tazedwit"},
{"kb":"cassette","fr":"tasfift "},
{"kb":"castrer","fr":"ddez"},
{"kb":"catalogue","fr":"agherryeb"},
{"kb":"catastrophe","fr":"tawaghit"},
{"kb":"catastrophique","fr":"amsekrar"},
{"kb":"catégorie","fr":"taggayt"},
{"kb":"causalité","fr":"tamentelt"},
{"kb":"cause","fr":"amentil"},
{"kb":"causer","fr":"smentel"},
{"kb":"cavalier","fr":"amnay"},
{"kb":"cécité","fr":"tidderghelt"},
{"kb":"ceindre","fr":"bges"},
{"kb":"ceinture","fr":"tabgest"},
{"kb":"célébrer","fr":"sfugel"},
{"kb":"célébrité","fr":"cciaa"},
{"kb":"célibataire","fr":"ambur"},
{"kb":"celui","fr":"win"},
{"kb":"cendre","fr":"ighed"},
{"kb":"censure","fr":"tadrest"},
{"kb":"censuré","fr":"ttswadres"},
{"kb":"censurer","fr":"dres"},
{"kb":"central","fr":"alemmas"},
{"kb":"centralisation","fr":"asnammas"},
{"kb":"centre","fr":"talemmast"},
{"kb":"cercle","fr":"tawinest"},
{"kb":"céréale","fr":"imendi"},
{"kb":"cérémonie","fr":"tafugla"},
{"kb":"cerner","fr":"berrem"},
{"kb":"certificat","fr":"aselkim"},
{"kb":"certifier","fr":"selkem"},
{"kb":"certitude","fr":"talkint"},
{"kb":"cerveau","fr":"illekhf"},
{"kb":"cervelle","fr":"annli"},
{"kb":"cesser","fr":"ghettem"},
{"kb":"chacal","fr":"uccen"},
{"kb":"chahut","fr":"akerkec"},
{"kb":"chaîne","fr":"tazrart"},
{"kb":"chair","fr":"aksum"},
{"kb":"chaleur","fr":"aszghal"},
{"kb":"chambre","fr":"takkhamt"},
{"kb":"chameau","fr":"alghwem"},
{"kb":"champ","fr":"iger"},
{"kb":"champion","fr":"alghugh"},
{"kb":"championnat","fr":"talghugha"},
{"kb":"chance","fr":"amellil"},
{"kb":"changement","fr":"asnifel"},
{"kb":"changer","fr":"senfel"},
{"kb":"chanson","fr":"taghwect"},
{"kb":"chant","fr":"ccna"},
{"kb":"chantage","fr":"tadabart"},
{"kb":"chanter","fr":"ccnu"},
{"kb":"chanteur","fr":"acennay"},
{"kb":"chapeau","fr":"arazal"},
{"kb":"chapitre","fr":"ikhf"},
{"kb":"charançons ","fr":"cluc"},
{"kb":"chardon","fr":"abuneqqar"},
{"kb":"charge","fr":"aggwa"},
{"kb":"charger","fr":"ssisi"},
{"kb":"charlatan","fr":"ahwadh"},
{"kb":"charpente","fr":"sser"},
{"kb":"charrue","fr":"imaaun"},
{"kb":"charte","fr":"akrawal"},
{"kb":"chasse","fr":"agmer"},
{"kb":"chasser","fr":"gmer"},
{"kb":"chasseur","fr":"anegmar"},
{"kb":"chat","fr":"amcic"},
{"kb":"château","fr":"tighremt"},
{"kb":"châtier","fr":"fger"},
{"kb":"châtiment","fr":"tafgert"},
{"kb":"chatouiller","fr":"skikedh"},
{"kb":"chaud","fr":"ihma"},
{"kb":"chaudière ","fr":"tafedna"},
{"kb":"chauffer","fr":"ssehmu"},
{"kb":"chaussure","fr":"arkas"},
{"kb":"chauve","fr":"aferdhas"},
{"kb":"chef","fr":"aghella"},
{"kb":"chemin","fr":"avrid"},
{"kb":"cheminer","fr":"ddu"},
{"kb":"chenapan","fr":"cmata"},
{"kb":"chêne","fr":"akerruc"},
{"kb":"chercher","fr":"nadi"},
{"kb":"chercheur","fr":"anagmay"},
{"kb":"chéri","fr":"aneglus"},
{"kb":"châtaigne","fr":"avelodh"},
{"kb":"châtaignier","fr":"tavelote"},
{"kb":"cheval","fr":"assardhun"},
{"kb":"chevelure","fr":"ackuk"},
{"kb":"cheveu","fr":"anszadh"},
{"kb":"cheveux","fr":"achetchouy"},
{"kb":"chèvre","fr":"taghatt"},
{"kb":"chevron","fr":"akafu"},
{"kb":"chevrotine","fr":"ahlalas"},
{"kb":"chez","fr":"ghar"},
{"kb":"chien","fr":"aqjun"},
{"kb":"chiffon","fr":"abehnuq"},
{"kb":"chiffre","fr":"azwil"},
{"kb":"chignon","fr":"adlal"},
{"kb":"chimie","fr":"takrura"},
{"kb":"chimiste","fr":"ameskran"},
{"kb":"chirurgie","fr":"agzam"},
{"kb":"choc","fr":"anegges"},
{"kb":"choisir","fr":"fren"},
{"kb":"choix","fr":"adghar"},
{"kb":"choquer","fr":"negges"},
{"kb":"chorale ","fr":"talilt"},
{"kb":"chose","fr":"taghawsa"},
{"kb":"chronique ","fr":"akucam"},
{"kb":"chronologie","fr":"tasimirt"},
{"kb":"chronologique ","fr":"asnimiran"},
{"kb":"chuchotement","fr":"ameckuken"},
{"kb":"chuchoter","fr":"htiti"},
{"kb":"chut","fr":"susem"},
{"kb":"chute","fr":"aghelluy"},
{"kb":"ciel","fr":"igenni"},
{"kb":"cigogne","fr":"ibelliredj"},
{"kb":"cimetière","fr":"andher"},
{"kb":"cinq","fr":"semmus"},
{"kb":"circoncire","fr":"ssedhhar"},
{"kb":"circoncision","fr":"tthara"},
{"kb":"circonstance","fr":"amaghlay"},
{"kb":"circuit","fr":"tawerrayt"},
{"kb":"circulaire","fr":"awerray"},
{"kb":"circulation","fr":"asikel"},
{"kb":"circuler","fr":"sikel"},
{"kb":"cisaille","fr":"lemqes"},
{"kb":"ciseaux","fr":"timqestin"},
{"kb":"citadin","fr":"ughrim"},
{"kb":"citation","fr":"assimel"},
{"kb":"cité","fr":"agharam"},
{"kb":"citerne","fr":"tanuttfi"},
{"kb":"citoyen","fr":"agherfan"},
{"kb":"citoyenneté","fr":"tiqqermi"},
{"kb":"civil","fr":"agharim"},
{"kb":"civilisation","fr":"tagherma"},
{"kb":"civilisé","fr":"aneghrum"},
{"kb":"civiliser","fr":"seghrem"},
{"kb":"clair-de-lune","fr":"tiziri"},
{"kb":"clan","fr":"tamadla"},
{"kb":"clandestin","fr":"unttil"},
{"kb":"clandestinité","fr":"tanettla"},
{"kb":"clarification","fr":"asfaw"},
{"kb":"clarifier","fr":"sfu"},
{"kb":"classe","fr":"tadala"},
{"kb":"classement","fr":"abellez"},
{"kb":"clé","fr":"tasaruts"},
{"kb":"cligner","fr":"remmec"},
{"kb":"clignotant","fr":"asablaw "},
{"kb":"clignotement","fr":"asablew"},
{"kb":"clique","fr":"tirkeft"},
{"kb":"cloche","fr":"anagna"},
{"kb":"cloisonnement","fr":"taghrabt"},
{"kb":"cloisonner","fr":"gherbet"},
{"kb":"cloque","fr":"tacelbutt"},
{"kb":"clos","fr":"ufrig"},
{"kb":"clôture","fr":"afrag"},
{"kb":"clou","fr":"amesmar"},
{"kb":"clown","fr":"agwennactal"},
{"kb":"club","fr":"asrir"},
{"kb":"cochon","fr":"ilef"},

{"kb":"codage","fr":"tangalt"},

{"kb":"code","fr":"angal"},

{"kb":"coefficient","fr":"amuskir"},

{"kb":"coeur","fr":"ul"},

{"kb":"cogner","fr":"berrez"},

{"kb":"cognitif","fr":"awessun"},

{"kb":"cognition","fr":"tawessunt"},

{"kb":"cohérence","fr":"tanmeszla"},

{"kb":"cohésion","fr":"akerresz"},

{"kb":"coiffeur","fr":"anersam"},

{"kb":"coin","fr":"tasga"},

{"kb":"col","fr":"iri"},

{"kb":"colère","fr":"zaaff"},

{"kb":"colique","fr":"azebar"},

{"kb":"collecter","fr":"nbez"},

{"kb":"collecteur","fr":"asembaz"},

{"kb":"collectif","fr":"ujmu"},

{"kb":"collection","fr":"talkensit"},

{"kb":"collectionner","fr":"ikensi"},

{"kb":"collectionneur","fr":"alkensay"},

{"kb":"collectivisme","fr":"tanesbazit"},

{"kb":"collectiviste","fr":"ansbazi "},

{"kb":"collectivité","fr":"tamazdayt"},

{"kb":"collégial","fr":"uwizi"},

{"kb":"collègue","fr":"amidaw"},

{"kb":"collier","fr":"azrar"},

{"kb":"colloque","fr":"anamal"},

{"kb":"colon","fr":"amhares"},

{"kb":"colonialiste","fr":"amhersan"},

{"kb":"colonie","fr":"tahrest"},

{"kb":"colonisation","fr":"tasehrest"},

{"kb":"colonne","fr":"ajgu"},

{"kb":"combat","fr":"imenghi"},

{"kb":"combatif","fr":"ameggat"},

{"kb":"combativité","fr":"tameggatt"},

{"kb":"combattant","fr":"amnegh"},

{"kb":"combinaison","fr":"tuddsa"},

{"kb":"combinatoire","fr":"tasennuyt"},

{"kb":"combine","fr":"tiddest"},

{"kb":"combiner","fr":"senney"},

{"kb":"combler","fr":"unsz"},

{"kb":"comédie","fr":"tamellaght"},

{"kb":"comédien","fr":"azeffan"},

{"kb":"comète","fr":"asmil"},

{"kb":"comité","fr":"tarbaat"},

{"kb":"commandant","fr":"amenzadh"},

{"kb":"commande","fr":"anezdhay"},

{"kb":"commandement","fr":"aladen"},

{"kb":"commander","fr":"nzedh"},

{"kb":"commando","fr":"azlu"},

{"kb":"comme","fr":"am"},

{"kb":"comment","fr":"amek"},

{"kb":"commentaire","fr":"awennit"},

{"kb":"commentateur","fr":"awennat"},

{"kb":"commenter","fr":"wennet"},

{"kb":"commerçant","fr":"amzenzu"},

{"kb":"commercial","fr":"amzenzi"},

{"kb":"commérer","fr":"sbejbej"},

{"kb":"commission","fr":"tasmilt"},

{"kb":"commun","fr":"amsihar"},

{"kb":"commune","fr":"taghiwant"},

{"kb":"communication","fr":"taghwalt"},

{"kb":"communiquer","fr":"selghu"},

{"kb":"communisme","fr":"tazdukla"},

{"kb":"communiste","fr":"azduklan"},

{"kb":"commutateur","fr":"amsenfal"},

{"kb":"commutation ","fr":"asenfel"},

{"kb":"commuter","fr":"senfel"},

{"kb":"compagnie","fr":"tamunt"},

{"kb":"comparaison","fr":"asidmer"},

{"kb":"comparer","fr":"snemhel"},

{"kb":"compas","fr":"azulagh"},

{"kb":"compassion","fr":"tamella"},

{"kb":"compensation","fr":"aghram"},

{"kb":"compenser","fr":"mhes"},

{"kb":"compétence","fr":"tawzut"},

{"kb":"compétition","fr":"tamelgha"},

{"kb":"complément","fr":"asemmad"},

{"kb":"complémentaire","fr":"anemmadu"},

{"kb":"complémentarité","fr":"tanemmadut"},

{"kb":"complet","fr":"anguz"},

{"kb":"compléter","fr":"summed"},

{"kb":"complexe","fr":"asemlal"},

{"kb":"complexé","fr":"nbuttel"},

{"kb":"complication","fr":"aghennej"},

{"kb":"compliment","fr":"tinzi"},

{"kb":"compliquer","fr":"ghennej"},

{"kb":"complot","fr":"anguz"},

{"kb":"comploter","fr":"ngez"},

{"kb":"comportement","fr":"tikli"},

{"kb":"composante","fr":"tisgert"},

{"kb":"compose","fr":"uddis"},

{"kb":"composer","fr":"eddes"},

{"kb":"composition","fr":"tasudest"},

{"kb":"compréhension","fr":"tigzi"},

{"kb":"comprendre","fr":"gzu"},

{"kb":"compromettre","fr":"surdu"},

{"kb":"compromis","fr":"anmekni"},

{"kb":"comptage","fr":"asdhen"},

{"kb":"compte","fr":"amidhan"},

{"kb":"compter","fr":"sidhen"},

{"kb":"compteur","fr":"amsidhen"},

{"kb":"concasser","fr":"brec"},

{"kb":"concave","fr":"ughnij"},

{"kb":"concentration","fr":"asersigh"},

{"kb":"concentrer","fr":"sersiy"},

{"kb":"concept","fr":"tamidhrant"},

{"kb":"conceptualisation","fr":"asmidhren"},

{"kb":"concert","fr":"abandu"},

{"kb":"concilier","fr":"sszenszel"},

{"kb":"conclusion","fr":"tarayt"},

{"kb":"concours","fr":"timzizwert"},

{"kb":"concret","fr":"akman"},

{"kb":"concrétiser","fr":"sekmen"},

{"kb":"concurrence","fr":"tamenzight"},

{"kb":"condamnation","fr":"taszirt"},

{"kb":"condamné","fr":"amuszir"},

{"kb":"condamner","fr":"ssziszer"},

{"kb":"condition","fr":"tawtilt"},

{"kb":"conditionnel","fr":"awtilan"},

{"kb":"condoléances","fr":"aaezzi"},

{"kb":"conducteur","fr":"amesnay"},

{"kb":"conduire","fr":"snu; her(se)"},

{"kb":"cône","fr":"akaswar"},

{"kb":"confédération","fr":"amqun"},

{"kb":"conférence","fr":"tinawt"},

{"kb":"confiance","fr":"taflest"},

{"kb":"confier","fr":"msagaz"},

{"kb":"confirmation","fr":"asentem"},

{"kb":"confirmer","fr":"sentem"},

{"kb":"conflit","fr":"amlasay"},

{"kb":"confondre","fr":"sserkes"},

{"kb":"conforme","fr":"arawas"},

{"kb":"confronter","fr":"mnala"},

{"kb":"congé","fr":"anurszem"},

{"kb":"congrès","fr":"aswir"},

{"kb":"congressiste","fr":"amaswar"},

{"kb":"conjonction","fr":"tazghunt"},

{"kb":"conjugaison","fr":"asefti"},

{"kb":"conjuguer","fr":"sefti"},

{"kb":"connecter","fr":"qqen"},

{"kb":"connecteur","fr":"amaqqen"},

{"kb":"connexion","fr":"tuqqna"},

{"kb":"conquérir","fr":"slek"},

{"kb":"conquête","fr":"taslekt"},

{"kb":"conscience","fr":"tafrit"},

{"kb":"conseil","fr":"aseqqamu"},

{"kb":"conséquence","fr":"alkam"},

{"kb":"consommateur","fr":"amsider"},

{"kb":"consommation","fr":"asuder"},

{"kb":"consommer","fr":"suder"},

{"kb":"constant","fr":"aghlan"},

{"kb":"constitution","fr":"tamendhawt"},

{"kb":"constitutionnel","fr":"amendhaw "},

{"kb":"construire","fr":"bnu"},

{"kb":"contact","fr":"anermis"},

{"kb":"conte","fr":"tanfust"},

{"kb":"contemplation","fr":"assilem"},

{"kb":"contempler","fr":"ssilem"},

{"kb":"contemporain","fr":"azi"},

{"kb":"contenant","fr":"anagbas"},

{"kb":"contenir","fr":"gber"},

{"kb":"contenu","fr":"agbur"},

{"kb":"conter","fr":"hku"},

{"kb":"contestation","fr":"aseghrebbet"},

{"kb":"contester","fr":"seghrebbet"},

{"kb":"contexte","fr":"asatal"},

{"kb":"continent","fr":"amenszaw"},

{"kb":"continu","fr":"amaghlal"},

{"kb":"continuer","fr":"ghlel"},

{"kb":"contracter","fr":"sedres"},

{"kb":"contraction","fr":"tasedrest"},

{"kb":"contradiction","fr":"annerzi"},

{"kb":"contrainte","fr":"tuggda"},

{"kb":"contraire","fr":"anemgal"},

{"kb":"contrat","fr":"agatu"},

{"kb":"contre","fr":"mgal"},

{"kb":"contribuable","fr":"amawas"},

{"kb":"contribution","fr":"tumutt"},

{"kb":"contrôle","fr":"anghad"},

{"kb":"contrôler","fr":"senghed"},

{"kb":"convaincu","fr":"unendil"},

{"kb":"convalescent","fr":"amgur"},

{"kb":"convenir","fr":"msisi"},

{"kb":"convention","fr":"amsisi"},

{"kb":"conversation","fr":"amsawal"},

{"kb":"convexe","fr":"afensu"},

{"kb":"convexité","fr":"tiffensur"},

{"kb":"conviction","fr":"tamedlit"},

{"kb":"convive","fr":"amedraw"},

{"kb":"convoi","fr":"taghsert"},

{"kb":"coopérant","fr":"amadhal"},

{"kb":"coopérateur","fr":"anamang"},

{"kb":"coopération","fr":"amedhal"},

{"kb":"coopérer","fr":"nmireg"},

{"kb":"copie","fr":"alsaru"},

{"kb":"corail","fr":"tmezjan"},

{"kb":"corde","fr":"amrar"},

{"kb":"cordon-ombilical","fr":"timitt"},

{"kb":"cordonnier","fr":"akherraz"},

{"kb":"corne","fr":"iccew"},

{"kb":"corps","fr":"tafekka"},

{"kb":"correcteur","fr":"aseghtay"},

{"kb":"correction","fr":"aseghti"},

{"kb":"corrélation","fr":"tamaqqant"},

{"kb":"correspondant","fr":"anmeghray"},

{"kb":"corriger","fr":"seghtu"},

{"kb":"corruption","fr":"agufsu"},

{"kb":"corsage","fr":"iciwi"},

{"kb":"côte","fr":"aghezdis"},

{"kb":"côté","fr":"idis"},

{"kb":"cotisation","fr":"tabzert"},

{"kb":"cotiser","fr":"bzer"},

{"kb":"cou","fr":"tamgartt"},

{"kb":"coudre","fr":"gnu"},

{"kb":"couffin","fr":"adhellaa"},

{"kb":"couler","fr":"azzel"},

{"kb":"couleur","fr":"ini"},

{"kb":"couleuvre","fr":"ifighar"},

{"kb":"coulisse","fr":"tahara"},

{"kb":"coup","fr":"tiyita"},

{"kb":"couper","fr":"gzem"},

{"kb":"couple","fr":"tayuga"},

{"kb":"couplet","fr":"tamejrut"},

{"kb":"coupure","fr":"anegzum"},

{"kb":"cour","fr":"tasenbert"},

{"kb":"courage","fr":"tabghest"},

{"kb":"courageux","fr":"abghas"},

{"kb":"courant","fr":"angi"},

{"kb":"courge","fr":"takhsayt"},

{"kb":"courir","fr":"azzel"},

{"kb":"cours","fr":"timeghri"},

{"kb":"course","fr":"tazla"},

{"kb":"courtisan","fr":"afdawa"},

{"kb":"couscous","fr":"seksu"},

{"kb":"couscoussier","fr":"ikineksu"},

{"kb":"couteau","fr":"imus"},

{"kb":"couver","fr":"brek"},

{"kb":"couvercle","fr":"tadimt"},

{"kb":"couverture","fr":"taduli"},

{"kb":"couvrir","fr":"del"},

{"kb":"crachat","fr":"imetman"},

{"kb":"cracher","fr":"susef"},

{"kb":"craie","fr":"anegmirs"},

{"kb":"crainte","fr":"tigwdi"},

{"kb":"cramponner","fr":"ckenttedh"},

{"kb":"créance","fr":"taserwast"},

{"kb":"créancier","fr":"aserwas"},

{"kb":"création","fr":"asnulfu"},

{"kb":"crèche","fr":"abughlu"},

{"kb":"crédit","fr":"asmad"},

{"kb":"créer","fr":"smentel"},

{"kb":"crépuscule","fr":"tameddit"},

{"kb":"crime","fr":"angha"},

{"kb":"criminalité","fr":"tinnghi"},

{"kb":"crise","fr":"tazghent"},

{"kb":"crisper","fr":"krurem"},

{"kb":"critère","fr":"asfern"},

{"kb":"critique","fr":"azfan"},

{"kb":"critiquer","fr":"zghen"},

{"kb":"crochet","fr":"amekhtaf"},

{"kb":"croire","fr":"fels"},

{"kb":"croisé","fr":"anmidag"},

{"kb":"croissance","fr":"titit"},

{"kb":"croissant","fr":"tazzirt"},

{"kb":"croix","fr":"amidag"},

{"kb":"crotte","fr":"tabururt"},

{"kb":"croûte","fr":"tanalt"},

{"kb":"croyance","fr":"taflest"},

{"kb":"cruche","fr":"agdur"},

{"kb":"cube","fr":"agasas"},

{"kb":"cuiller","fr":"tiflewt"},

{"kb":"cuir","fr":"taserki"},

{"kb":"cuire","fr":"sebbw"},

{"kb":"cuisse","fr":"taghma"},

{"kb":"cuit","fr":"ibbwa"},

{"kb":"cuivre","fr":"nhas"},

{"kb":"culture","fr":"takerza"},

{"kb":"culturel","fr":"adelsan"},

{"kb":"cupidité","fr":"ttmaa"},

{"kb":"curieux","fr":"awnaf"},

{"kb":"curiosité ","fr":"tawnafit"},

{"kb":"cycle","fr":"tasufeght"},

{"kb":"cylindre","fr":"awlellu "},

{"kb":"dalle","fr":"tablatt"},

{"kb":"danger","fr":"amizi"},

{"kb":"dangereux","fr":"amihaw"},

{"kb":"danse","fr":"ecdhah"},

{"kb":"danser","fr":"cdhah"},

{"kb":"danseur","fr":"acdhah"},

{"kb":"danseuse","fr":"tacdhahth"},

{"kb":"date","fr":"azemz"},

{"kb":"débarrasser","fr":"bellez"},

{"kb":"débat","fr":"askasi"},

{"kb":"débattre","fr":"seksi"},

{"kb":"débilité","fr":"talkalt"},

{"kb":"débit","fr":"aktum"},

{"kb":"débiteur","fr":"anektam"},

{"kb":"déborder","fr":"sefl"},

{"kb":"déboucher","fr":"anafar"},

{"kb":"décembre","fr":"dujanbir"},

{"kb":"décevoir","fr":"beytel"},

{"kb":"décharger","fr":"zugez"},

{"kb":"déchet","fr":"alammu"},

{"kb":"déchiffrer","fr":"zmek "},

{"kb":"déchirer","fr":"cerreg "},

{"kb":"déchirure","fr":"acerreg"},

{"kb":"décider","fr":"ghets"},

{"kb":"décision","fr":"taghtast"},

{"kb":"déclarer","fr":"berreh"},

{"kb":"décolorer","fr":"ncel"},

{"kb":"décor","fr":"adlag"},

{"kb":"décorateur","fr":"amedlag"},

{"kb":"décoration","fr":"abreqqes"},

{"kb":"décorer","fr":"dleg"},

{"kb":"décourager","fr":"sefcel"},

{"kb":"découverte","fr":"tuzuft"},

{"kb":"découvrir","fr":"zef"},

{"kb":"décret","fr":"tanatt"},

{"kb":"décrire","fr":"glem"},

{"kb":"défaut","fr":"amalad"},

{"kb":"défendre","fr":"sten"},

{"kb":"défense","fr":"ahuddu"},

{"kb":"défi","fr":"acqirrew"},

{"kb":"déficience","fr":"tiggit"},

{"kb":"défier","fr":"cqirrew"},

{"kb":"défilé","fr":"amsudegh"},

{"kb":"définir","fr":"sbadu"},

{"kb":"définition","fr":"tabadut"},

{"kb":"dégager","fr":"eldi"},

{"kb":"dégoût","fr":"amuklu"},

{"kb":"dégradation","fr":"alakay"},

{"kb":"degré","fr":"tafesna"},

{"kb":"dehors","fr":"berra"},

{"kb":"délai","fr":"amendhar"},

{"kb":"délégué","fr":"anesmigel"},

{"kb":"délinquance","fr":"afuggu"},

{"kb":"délinquant","fr":"amfaggu"},

{"kb":"délire","fr":"ahetref"},

{"kb":"délivrer","fr":"jenjem"},

{"kb":"déluge","fr":"azillidh"},

{"kb":"demain","fr":"azekka"},

{"kb":"demande","fr":"tuttsra"},

{"kb":"demander","fr":"suter"},

{"kb":"demeurer ","fr":"zdegh"},

{"kb":"démocrate","fr":"amagdu"},

{"kb":"démocratie","fr":"tugdut"},

{"kb":"démocratisation","fr":"asgdud"},

{"kb":"démolir","fr":"hudd"},

{"kb":"démon","fr":"ccittan"},

{"kb":"démonstratif","fr":"ameskan"},

{"kb":"démonstration","fr":"tamsenszayt"},

{"kb":"démontrer","fr":"senszi"},

{"kb":"dénonciateur","fr":"asummal"},

{"kb":"dense","fr":"anesszaw"},

{"kb":"densité","fr":"tanesszi"},

{"kb":"dent","fr":"tughmest"},

{"kb":"départ","fr":"akunser"},

{"kb":"département","fr":"agezdir"},

{"kb":"dépassement","fr":"azerruy"},

{"kb":"dépendance","fr":"tagelt"},

{"kb":"dépendre","fr":"ugel"},

{"kb":"dépit","fr":"tutcha"},

{"kb":"déplacement","fr":"arigez"},

{"kb":"déplacer","fr":"rigez"},

{"kb":"déposer","fr":"sgel"},

{"kb":"dépôt","fr":"aselghes"},

{"kb":"dépression","fr":"aberrazu"},

{"kb":"député","fr":"amazan"},

{"kb":"déraciné","fr":"amakuf"},

{"kb":"déraciner","fr":"sskuf"},

{"kb":"dérivation","fr":"tasuddemt"},

{"kb":"dérive","fr":"asuddim"},

{"kb":"dérivée (forme)","fr":"azellum"},

{"kb":"dériver","fr":"suddem"},

{"kb":"dernier","fr":"aneggaru"},

{"kb":"descendre","fr":"subb"},

{"kb":"descente","fr":"takwessart"},

{"kb":"description","fr":"aglam"},

{"kb":"déséquilibre","fr":"annezruy"},

{"kb":"déséquilibré (être)","fr":"annezri"},

{"kb":"désert","fr":"aneszruf "},

{"kb":"déshonorer","fr":"bbehdel"},

{"kb":"désir","fr":"aseddirem"},

{"kb":"désordre","fr":"tametruyt"},

{"kb":"dessin","fr":"tinnight"},

{"kb":"dessiner","fr":"sunegh"},

{"kb":"dessous","fr":"ddaw"},

{"kb":"dessus","fr":"nnig"},

{"kb":"détacher","fr":"bru"},

{"kb":"détailler","fr":"sulledh "},

{"kb":"détendre","fr":"sillew"},

{"kb":"détenu","fr":"anekruf"},

{"kb":"détermination","fr":"aguccel"},

{"kb":"détester","fr":"ksen"},

{"kb":"détruire","fr":"ssedrem"},

{"kb":"dette","fr":"amerwas"},

{"kb":"deux","fr":"sin"},

{"kb":"deuxième","fr":"wissin"},

{"kb":"devancer","fr":"zwir"},

{"kb":"devant","fr":"zdat"},

{"kb":"développement","fr":"taneflit"},

{"kb":"développer","fr":"ssendel"},

{"kb":"devenir","fr":"ughal"},

{"kb":"devin","fr":"ineqqiqi"},

{"kb":"deviner","fr":"cellek"},

{"kb":"devoir","fr":"aghan "},

{"kb":"dévoué","fr":"amidhwel "},

{"kb":"diagonal","fr":"ubdis"},

{"kb":"dialectique","fr":"tamestala"},

{"kb":"dialogue","fr":"adiwenni"},

{"kb":"dialoguer","fr":"sdiwen"},

{"kb":"diamètre","fr":"akdu"},

{"kb":"diaphragme","fr":"ileft"},

{"kb":"diarrhée","fr":"bezzeeka"},

{"kb":"dichotomie","fr":"tasnatit"},

{"kb":"dictateur","fr":"asnaraf"},

{"kb":"dictée","fr":"tazabut"},

{"kb":"dicter","fr":"zubet"},

{"kb":"dictionnaire","fr":"amawal"},

{"kb":"dieu","fr":"rebi"},

{"kb":"différence","fr":"tameszla"},

{"kb":"différencier","fr":"smeszli"},

{"kb":"différent","fr":"imeszli"},

{"kb":"différentiel","fr":"aneszlay"},

{"kb":"différer","fr":"ssemti"},

{"kb":"difficile","fr":"agermam"},

{"kb":"difficulté","fr":"tiggermemt"},

{"kb":"diffuser","fr":"zenzew"},

{"kb":"dignité","fr":"agemmir"},

{"kb":"dimanche","fr":"atcer"},

{"kb":"dimension","fr":"aseggiw"},

{"kb":"diminuer","fr":"ktem"},

{"kb":"diminution","fr":"aktam"},

{"kb":"diner","fr":"imensi"},

{"kb":"diplôme","fr":"agerdas"},

{"kb":"dire","fr":"ini"},

{"kb":"direct","fr":"usrid"},

{"kb":"directeur","fr":"anemhal"},

{"kb":"direction","fr":"tamehla"},

{"kb":"direction","fr":"tanila"},

{"kb":"diriger","fr":"nil"},

{"kb":"discipline","fr":"aghyud"},

{"kb":"discipliné","fr":"amaghyad"},

{"kb":"discipline","fr":"agemmun"},

{"kb":"discours","fr":"taneqqist"},

{"kb":"discret","fr":"afrari"},

{"kb":"discrimination","fr":"asnuhyu"},

{"kb":"discussion","fr":"amyannan"},

{"kb":"discuter","fr":"myini"},

{"kb":"dispenser","fr":"zzemzi"},

{"kb":"disperser","fr":"sewziwez"},

{"kb":"dispersion","fr":"awziwez"},

{"kb":"disponibilité","fr":"tanamalt"},

{"kb":"disponible","fr":"anamal"},

{"kb":"dispute","fr":"tcaqlala"},

{"kb":"disque","fr":"adhebsi"},

{"kb":"dissertation","fr":"tamestalt"},

{"kb":"dissimulation","fr":"aserkes"},

{"kb":"dissolution","fr":"aselyem"},

{"kb":"dissoudre","fr":"selyem"},

{"kb":"distance","fr":"asettum"},

{"kb":"distant","fr":"amestam"},

{"kb":"distinguer","fr":"zlem"},

{"kb":"distraction","fr":"tamazlalt"},

{"kb":"distrait","fr":"amazlal"},

{"kb":"distribuer","fr":"sedger"},

{"kb":"distribution","fr":"asedger"},

{"kb":"divergence","fr":"ankas"},

{"kb":"divergent","fr":"unkis"},

{"kb":"diversifier","fr":"sebrer"},

{"kb":"diversité","fr":"abrar"},

{"kb":"diviser","fr":"szun"},

{"kb":"division","fr":"taszunt"},

{"kb":"divorce","fr":"uluf"},

{"kb":"dix","fr":"aâchra"},

{"kb":"doctrine","fr":"asekkud"},

{"kb":"document","fr":"tateggart"},

{"kb":"dogmatique","fr":"adaslan"},

{"kb":"dogmatisme","fr":"adaslaszri"},

{"kb":"dogme","fr":"adasil"},

{"kb":"doigt","fr":"adhad"},

{"kb":"domaine","fr":"taghult"},

{"kb":"domestiquer","fr":"sgerd"},

{"kb":"domicile","fr":"azeddugh"},

{"kb":"domination","fr":"aghmar"},

{"kb":"dominer","fr":"ghmer"},

{"kb":"don","fr":"tamecfit"},

{"kb":"donc","fr":"dagh"},

{"kb":"donnée","fr":"agwettil"},

{"kb":"donner","fr":"efk"},

{"kb":"dormir","fr":"ettes"},

{"kb":"dossier","fr":"akaram"},

{"kb":"double","fr":"uslig"},
{"kb":"doucement","fr":"slaakel"},
{"kb":"douceur","fr":"tadhfi"},
{"kb":"doué","fr":"afakkas"},

{"kb":"douleur","fr":"tikma"},

{"kb":"doute","fr":"asurdu"},

{"kb":"douter","fr":"sured"},

{"kb":"doux","fr":"adhfi"},

{"kb":"doyen","fr":"amghar"},

{"kb":"drame","fr":"tamuggit"},

{"kb":"dressage","fr":"asaghad"},

{"kb":"dresser","fr":"sughed"},

{"kb":"dribbling","fr":"aghussu"},

{"kb":"droit","fr":"azref"},

{"kb":"dur","fr":"aquran"},

{"kb":"durée","fr":"tanzagt"},

{"kb":"durer","fr":"nzeg"},

{"kb":"dureté","fr":"taghert"},

{"kb":"dynamique","fr":"tilhi"},

{"kb":"dyslexie","fr":"tarewrawt"},

{"kb":"eau","fr":"aman"},

{"kb":"ebauche","fr":"abgez"},

{"kb":"ebloui","fr":"klulu"},

{"kb":"eblouissement","fr":"calwaw"},

{"kb":"ecale","fr":"iclem"},

{"kb":"ecart","fr":"ankaz"},

{"kb":"ecarter","fr":"senkez"},

{"kb":"echange","fr":"asmeske"},

{"kb":"echantillon","fr":"talemt"},

{"kb":"echapper","fr":"fertel"},

{"kb":"echarde","fr":"aghtir"},

{"kb":"echec","fr":"abrir"},

{"kb":"echelle","fr":"taskala"},

{"kb":"echelon","fr":"tafesna"},

{"kb":"echo","fr":"anza"},

{"kb":"echouer","fr":"udh"},

{"kb":"eclair","fr":"usem"},

{"kb":"eclairage","fr":"asfaw"},

{"kb":"eclairer","fr":"sfiw"},

{"kb":"eclaireur","fr":"afadhadh"},

{"kb":"eclat-débris","fr":"asettigh"},

{"kb":"eclat-lumineux","fr":"ticci"},

{"kb":"eclat","fr":"aleffugh"},

{"kb":"eclatant","fr":"aseflalay"},

{"kb":"eclater","fr":"nefruzzi"},

{"kb":"eclipse","fr":"afsakh"},

{"kb":"ecole","fr":"agherbaz"},

{"kb":"ecolier","fr":"abalmud"},

{"kb":"ecologie","fr":"tanessawnest"},

{"kb":"economat","fr":"adamus "},

{"kb":"econome","fr":"ademmas"},

{"kb":"economie","fr":"tadamsa"},

{"kb":"economique","fr":"udmis"},

{"kb":"economiste","fr":"adamsan"},

{"kb":"ecorce","fr":"tagbett"},

{"kb":"ecorcher","fr":"azu"},

{"kb":"ecorné","fr":"agenfadh"},

{"kb":"ecosser","fr":"sefriri"},

{"kb":"ecoulement","fr":"arag"},

{"kb":"ecouler","fr":"areg"},

{"kb":"ecoute","fr":"asmuzget"},

{"kb":"ecouter","fr":"semhess"},

{"kb":"ecouteurs","fr":"imsefliden"},

{"kb":"ecran","fr":"agdil"},

{"kb":"ecrire","fr":"aru"},

{"kb":"ecriture","fr":"tira"},

{"kb":"ecrivain","fr":"amaru"},

{"kb":"ecueil","fr":"azig"},

{"kb":"ecume","fr":"arghut"},

{"kb":"edification","fr":"tameskiwt"},

{"kb":"edifice","fr":"asuk"},

{"kb":"edifier","fr":"esk"},

{"kb":"editeur","fr":"amaszrag "},

{"kb":"edition","fr":"taszrigt"},

{"kb":"editorial","fr":"tagejdit"},

{"kb":"editorialiste","fr":"agejdan"},

{"kb":"educateur","fr":"asegman"},

{"kb":"education","fr":"asegmi"},

{"kb":"eduquer","fr":"ssegmi"},

{"kb":"effacer","fr":"sfedh"},

{"kb":"effectif","fr":"asemday"},

{"kb":"effet","fr":"asemdu"},

{"kb":"effeuiller","fr":"crew"},

{"kb":"efficace","fr":"amellil"},

{"kb":"efficacité","fr":"tamellit"},

{"kb":"effleurer","fr":"celledh"},

{"kb":"effort","fr":"tamessumant"},

{"kb":"effrayer","fr":"saggwed"},

{"kb":"egal","fr":"ugdu"},

{"kb":"egalisation","fr":"asegdu"},

{"kb":"egaliser","fr":"segdu"},

{"kb":"egalité","fr":"tagAdda"},

{"kb":"egocentrisme","fr":"tumasezrit"},

{"kb":"egoisme","fr":"timirikheft"},

{"kb":"egoïste","fr":"imirikhf"},

{"kb":"egorger","fr":"zlu"},

{"kb":"egout","fr":"tazulikht"},

{"kb":"elaboration","fr":"asuteb"},

{"kb":"elaborer","fr":"suteb"},

{"kb":"elaguer","fr":"zber"},

{"kb":"elan","fr":"antag"},

{"kb":"elargir","fr":"sbirew"},

{"kb":"elasticité","fr":"alwiwedh"},

{"kb":"elastique","fr":"alwawadh"},

{"kb":"elastique","fr":"lwiwedh"},

{"kb":"electeur","fr":"aferran"},

{"kb":"election","fr":"tafrant"},

{"kb":"electricité","fr":"trisiti"},

{"kb":"elégance","fr":"tasrifa"},

{"kb":"elégant","fr":"asrif"},

{"kb":"elégiaque","fr":"azneffa"},

{"kb":"elégie","fr":"azneffu"},

{"kb":"elément","fr":"aferdis"},

{"kb":"elémentaire","fr":"aferdas"},

{"kb":"elevage","fr":"takessi"},

{"kb":"elévation","fr":"anaqel"},

{"kb":"elève","fr":"anelmad"},

{"kb":"elever","fr":"naqel"},

{"kb":"elimination","fr":"asfal"},

{"kb":"eliminer","fr":"asef"},

{"kb":"elire","fr":"fren"},

{"kb":"elite","fr":"tufut"},

{"kb":"elle","fr":"nettsat "},

{"kb":"elles","fr":"nitenti"},

{"kb":"ellipse","fr":"taglayt"},

{"kb":"eloge","fr":"asulgh"},

{"kb":"eloignement","fr":"agugu"},

{"kb":"eloquence","fr":"tasraqqayt"},

{"kb":"eloquent","fr":"asraqqa"},

{"kb":"elu","fr":"ufrin"},

{"kb":"emanation","fr":"asadaw"},

{"kb":"emancipation","fr":"tasderfit"},

{"kb":"emanciper","fr":"sderfi"},

{"kb":"emaner","fr":"sdew"},

{"kb":"embrasser","fr":"ssuden"},

{"kb":"embuscade","fr":"akmin"},

{"kb":"emergence","fr":"agwmadh"},

{"kb":"emetteur","fr":"amesgal"},

{"kb":"emettre","fr":"sgel"},

{"kb":"emeute","fr":"taghewwaght"},

{"kb":"emigration","fr":"innig"},

{"kb":"emigre","fr":"iminig"},

{"kb":"emigrer","fr":"inig"},

{"kb":"emission","fr":"tasglit"},

{"kb":"emmagasiner","fr":"selghes"},

{"kb":"emmener","fr":"awi"},

{"kb":"emotion","fr":"tadhist"},

{"kb":"empereur","fr":"amenkad"},

{"kb":"emphase","fr":"ufay"},

{"kb":"empire","fr":"amenkud"},

{"kb":"empirique","fr":"asarmi"},

{"kb":"emploi","fr":"tamrest"},

{"kb":"employé","fr":"amaris"},

{"kb":"employer","fr":"semres"},

{"kb":"employeur","fr":"asermas"},

{"kb":"emprunt","fr":"arettal"},

{"kb":"emprunteur","fr":"amerdhal"},

{"kb":"emulation","fr":"amszaszal"},

{"kb":"en-général","fr":"umata"},

{"kb":"encadrement","fr":"asegrer"},

{"kb":"encadrer","fr":"segrer"},

{"kb":"enceinte","fr":"s tadist"},

{"kb":"encens","fr":"idjawi"},

{"kb":"enchevêtrement","fr":"annerbaz "},

{"kb":"enclos","fr":"zzerb"},

{"kb":"enclume","fr":"tuggunt"},

{"kb":"encore","fr":"dagh"},

{"kb":"encre","fr":"aselmegh"},

{"kb":"encrier","fr":"takebbatt"},

{"kb":"encyclopédie","fr":"tasanayt"},

{"kb":"endémique","fr":"amughel "},

{"kb":"enduire","fr":"dhlu"},

{"kb":"energie","fr":"azuren"},

{"kb":"enfant","fr":"agrud"},

{"kb":"enfanter","fr":"arew"},

{"kb":"enfer","fr":"timess"},

{"kb":"enfiler","fr":"qqen"},

{"kb":"enfler","fr":"bzeg"},

{"kb":"enflure","fr":"acelbudh"},

{"kb":"enfuir","fr":"rwel"},

{"kb":"engagement","fr":"akfawel"},

{"kb":"engager","fr":"kfiwel"},

{"kb":"engraisser","fr":"aalef"},

{"kb":"enigme","fr":"takknouzth"},

{"kb":"enjamber","fr":"suref"},

{"kb":"enjeu","fr":"asurs"},

{"kb":"ennemi","fr":"aâdhaw"},

{"kb":"ennui","fr":"taremmight"},

{"kb":"ennuyer","fr":"khiq"},

{"kb":"enoncé","fr":"tinawt"},

{"kb":"enquête","fr":"tasestant"},

{"kb":"enquêter","fr":"sesten"},

{"kb":"enquêteur","fr":"amestan"},

{"kb":"enregistrement","fr":"aklas"},

{"kb":"enregistreur","fr":"kles"},

{"kb":"enroué","fr":"ameklas"},

{"kb":"enroulement","fr":"tunndha"},

{"kb":"enrouler","fr":"nnedh; zgen(s')"},

{"kb":"enseignant","fr":"aselmad"},

{"kb":"enseignement","fr":"aselmed"},

{"kb":"enseigner","fr":"selmed "},

{"kb":"ensemble","fr":"tagrumma"},

{"kb":"ensevelir","fr":"cfen"},

{"kb":"entasser","fr":"kerker"},

{"kb":"entente","fr":"amtawa"},

{"kb":"enterré","fr":"yetswamdhel"},

{"kb":"enterrement","fr":"tamdhelt"},

{"kb":"enterrer","fr":"mdhel"},

{"kb":"entêtement","fr":"agharam"},

{"kb":"entier","fr":"ummid"},

{"kb":"entracte","fr":"aferdi"},

{"kb":"entraide","fr":"tamilalt"},

{"kb":"entraider","fr":"msetlel"},

{"kb":"entraînement","fr":"aslughmu"},

{"kb":"entraîneur","fr":"asleghmay"},

{"kb":"entrave","fr":"abran"},

{"kb":"entre","fr":"gar"},

{"kb":"entrée","fr":"aneckum"},

{"kb":"entreprendre","fr":"rmes"},

{"kb":"entrepreneur ","fr":"aremmas"},

{"kb":"entreprise","fr":"tarmist"},

{"kb":"entrer","fr":"kcem"},

{"kb":"entretien","fr":"adiwenni"},

{"kb":"enumération","fr":"asmiwer"},

{"kb":"enumérer","fr":"smiwer"},

{"kb":"envahir","fr":"nbez"},

{"kb":"envahissement","fr":"anbaz"},

{"kb":"envahisseur","fr":"anebbaz"},

{"kb":"enveloppe","fr":"alessi"},

{"kb":"envelopper","fr":"ttsel"},

{"kb":"envier","fr":"seddern"},

{"kb":"envies","fr":"tinitin"},

{"kb":"environ","fr":"tasmekta n ."},

{"kb":"environnement","fr":"tawennatt"},

{"kb":"environs","fr":"aszi"},

{"kb":"envoyer","fr":"ceggaa"},

{"kb":"epais","fr":"zur"},

{"kb":"epaisseur","fr":"tuzart"},

{"kb":"epanouir","fr":"rzuzzegh"},

{"kb":"epanouissement","fr":"arzuzzegh"},

{"kb":"epargne","fr":"asegfer"},

{"kb":"epargner","fr":"segfer"},

{"kb":"eparpiller","fr":"wzzaa"},

{"kb":"epaule","fr":"tayets"},

{"kb":"epée","fr":"isekki"},

{"kb":"epeler","fr":"ennen"},

{"kb":"epicerie","fr":"tabeqqalt"},

{"kb":"epicier","fr":"abeqqal"},

{"kb":"epine","fr":"asennan"},

{"kb":"epingle","fr":"amessak"},

{"kb":"episcope","fr":"aserszar"},

{"kb":"eponge","fr":"tajettutt"},

{"kb":"epoque","fr":"tallit"},

{"kb":"epreuve","fr":"tirmit"},

{"kb":"equateur","fr":"asebges"},

{"kb":"equation","fr":"tamesmatt"},

{"kb":"equilibrage","fr":"amnekna"},

{"kb":"equilibre","fr":"amnekni"},

{"kb":"equilibré","fr":"imnekni"},

{"kb":"equilibrer","fr":"mneki"},

{"kb":"equipe","fr":"taghlamt"},

{"kb":"equipement","fr":"asgalef"},

{"kb":"equiper","fr":"sgilef"},

{"kb":"equipier","fr":"aneghlam"},

{"kb":"equitation","fr":"tanaka"},

{"kb":"equivalence","fr":"tagdazelt"},

{"kb":"equivalent","fr":"agdazal"},

{"kb":"ere","fr":"tallit"},

{"kb":"erotisme","fr":"anatas"},

{"kb":"errer","fr":"menttar"},

{"kb":"erreur","fr":"taniwit"},

{"kb":"escadre","fr":"tagaluft"},

{"kb":"escadrille","fr":"adefrir"},

{"kb":"escadron","fr":"agaluf"},

{"kb":"escaliers","fr":"asanen"},

{"kb":"escargot","fr":"aarus"},

{"kb":"esclave","fr":"akli"},

{"kb":"escorte","fr":"tangift"},

{"kb":"escorter","fr":"ngef"},

{"kb":"espace","fr":"tallunt"},

{"kb":"espèce","fr":"talmest"},

{"kb":"espérance","fr":"asirem"},

{"kb":"espérer","fr":"ssirem"},

{"kb":"espion","fr":"aghalli"},

{"kb":"espoir","fr":"anaruz"},

{"kb":"esprit","fr":"anelli"},

{"kb":"esquisse","fr":"abeckil"},

{"kb":"essai","fr":"aaradh"},

{"kb":"essayer","fr":"aaredh"},

{"kb":"essence","fr":"tumast"},

{"kb":"essoufflement","fr":"buneggaf"},

{"kb":"essuyer","fr":"sfedh"},

{"kb":"est","fr":"agmudh"},

{"kb":"estime","fr":"adakad"},

{"kb":"estimer","fr":"dked"},

{"kb":"estomac","fr":"aaebbudh"},

{"kb":"estrade","fr":"alektu"},

{"kb":"et","fr":"d"},

{"kb":"etablir","fr":"seghser"},

{"kb":"etablissement","fr":"aghsu"},

{"kb":"etage","fr":"annag"},

{"kb":"etagère","fr":"ayir"},

{"kb":"etaler","fr":"sefletgh"},

{"kb":"etalon","fr":"amal"},

{"kb":"etang","fr":"tamda"},

{"kb":"etape","fr":"amecwar"},

{"kb":"etat","fr":"Addad"},

{"kb":"etc","fr":"atg"},

{"kb":"eté","fr":"anebdu"},

{"kb":"eteindre","fr":"sekhsi"},

{"kb":"etendre","fr":"fser; sszel(s')"},

{"kb":"eternel","fr":"amaghlal"},

{"kb":"eternité","fr":"aghlul"},

{"kb":"eternuer","fr":"aadhes"},

{"kb":"ethique","fr":"tihdi"},

{"kb":"etincelle","fr":"ifettiwej"},

{"kb":"etoile","fr":"itri"},

{"kb":"etonnement","fr":"abhadh"},

{"kb":"etonner","fr":"sebhedh"},

{"kb":"etranger","fr":"aberrani"},

{"kb":"etre","fr":"ili"},

{"kb":"etude","fr":"tazrawt"},

{"kb":"etudiant","fr":"anelmad"},

{"kb":"etudier","fr":"zrew"},

{"kb":"evader","fr":"rwel"},

{"kb":"evaluation","fr":"tamaduzt"},

{"kb":"evaluer","fr":"udez"},

{"kb":"evasion","fr":"tarewla"},

{"kb":"eveil","fr":"tanekra"},

{"kb":"eveiller","fr":"ssakwi"},

{"kb":"evènement","fr":"tadyant"},

{"kb":"eventer","fr":"sbuhru"},

{"kb":"evidence","fr":"tammunt"},

{"kb":"evident","fr":"amunu"},

{"kb":"eviter","fr":"sunef"},

{"kb":"evocation","fr":"abdar"},

{"kb":"evoluer","fr":"mhez"},

{"kb":"evolution","fr":"tamhazt"},

{"kb":"evoquer","fr":"bdar"},

{"kb":"exact","fr":"nnit"},

{"kb":"exactitude","fr":"anefren"},

{"kb":"exagération","fr":"tamayumt"},

{"kb":"exagérer","fr":"ayem"},

{"kb":"examen","fr":"akayad"},

{"kb":"examinateur","fr":"amakyad"},

{"kb":"examiner","fr":"sekyed"},

{"kb":"excédent","fr":"acayadh"},

{"kb":"excepté","fr":"slid"},

{"kb":"excepter","fr":"slid"},

{"kb":"exception","fr":"tasureft"},

{"kb":"excès","fr":"azerray"},

{"kb":"excitation","fr":"asduy"},

{"kb":"excursion","fr":"amurri"},

{"kb":"excuse","fr":"asnuruf"},

{"kb":"excuser","fr":"suref"},

{"kb":"exécuter","fr":"selkem"},

{"kb":"exécution","fr":"aselkem"},

{"kb":"exemple","fr":"amedya"},

{"kb":"exempter","fr":"slid"},

{"kb":"exercer","fr":"lghem"},

{"kb":"exercice","fr":"alaghmu"},

{"kb":"exhaustif","fr":"anguz"},

{"kb":"exil","fr":"azwayeg"},

{"kb":"exiler","fr":"zewweg"},

{"kb":"existence","fr":"tilawt"},

{"kb":"existentiel","fr":"amilaw"},

{"kb":"expérience","fr":"tarmit"},

{"kb":"expert","fr":"amuzay"},

{"kb":"explicite","fr":"aflalay"},

{"kb":"expliquer","fr":"zzegzi"},

{"kb":"exploit","fr":"tanfust"},

{"kb":"exploitation","fr":"ammud"},

{"kb":"exploiter","fr":"amed"},

{"kb":"exploiteur","fr":"anammud"},

{"kb":"exploration","fr":"asnirem"},

{"kb":"explorer","fr":"snirem"},

{"kb":"explosif","fr":"afekhsay"},

{"kb":"exportation","fr":"asifedh"},

{"kb":"exposé","fr":"aneskin"},

{"kb":"exposer","fr":"fser"},

{"kb":"exposition","fr":"tafsirt"},

{"kb":"expression","fr":"tanfalit"},

{"kb":"exprimer","fr":"senfali"},

{"kb":"extension","fr":"taseggiwit"},

{"kb":"extérieur","fr":"berra"},

{"kb":"externe","fr":"amniri"},

{"kb":"extinction","fr":"alubbed"},

{"kb":"extraction","fr":"tussfa"},

{"kb":"extraire","fr":"ssef"},

{"kb":"extrait","fr":"tassuft"},

{"kb":"extrapolation","fr":"asmedhren"},

{"kb":"extrapoler","fr":"smedhren"},

{"kb":"extrême","fr":"asbbagh"},

{"kb":"extrémité","fr":"tabbaght"},

{"kb":"fable","fr":"tanfust"},

{"kb":"fabulation","fr":"asfukti"},

{"kb":"face","fr":"udem"},

{"kb":"facher","fr":"tctceh"},

{"kb":"facile","fr":"ishel"},

{"kb":"facilitateur","fr":"alsmadh"},

{"kb":"faciliter","fr":"selmedh"},

{"kb":"facteur","fr":"ameskar"},

{"kb":"faction","fr":"taghasalt"},

{"kb":"factoriel","fr":"umezzarwi"},

{"kb":"faculté","fr":"aghiwen"},

{"kb":"fade","fr":"absil"},

{"kb":"fagot","fr":"tazdemt"},

{"kb":"faible","fr":"anammum"},

{"kb":"faiblesse","fr":"tammunt"},

{"kb":"faim","fr":"lasz"},

{"kb":"fainéant","fr":"tikrut"},

{"kb":"bouillir","fr":"serkem"},

{"kb":"faisceau","fr":"tadla"},

{"kb":"fait","fr":"amsir"},

{"kb":"familial","fr":"akati"},

{"kb":"familier","fr":"unnin"},

{"kb":"famille","fr":"tawacult"},

{"kb":"fantaisie","fr":"taghzut"},

{"kb":"fantassin","fr":"aterras"},

{"kb":"fatalisme","fr":"tisszegszent"},

{"kb":"fataliste","fr":"amesszigzen"},

{"kb":"fatigue","fr":"aagu"},

{"kb":"fatiguer","fr":"saayu"},

{"kb":"faucher","fr":"mjar"},

{"kb":"faucille","fr":"amgar"},

{"kb":"faucon","fr":"ibaz"},

{"kb":"faute","fr":"azgal"},

{"kb":"fauteuil","fr":"attag"},

{"kb":"fauve","fr":"aweqqas"},

{"kb":"faux","fr":"imkerku"},

{"kb":"faveur","fr":"tanureft"},

{"kb":"favorable","fr":"anaraf"},

{"kb":"favoriser","fr":"sniref"},

{"kb":"fécondation","fr":"talekmast"},

{"kb":"fêlé","fr":"stegh"},

{"kb":"femelle","fr":"tawtemt"},

{"kb":"féminin","fr":"unti"},

{"kb":"femme","fr":"tamettut"},

{"kb":"vieille-femme","fr":"tamghart"},

{"kb":"fenêtre","fr":"asfaylu"},

{"kb":"fente","fr":"acerrig"},

{"kb":"fer","fr":"uzzal"},

{"kb":"ferme","fr":"amammay"},

{"kb":"fermer","fr":"mdel"},

{"kb":"fermeté","fr":"amummi"},

{"kb":"festival","fr":"tafaska"},

{"kb":"fête","fr":"tameghra"},

{"kb":"feu","fr":"timess"},

{"kb":"feuillage","fr":"affriwen"},

{"kb":"feuille","fr":"iffar"},

{"kb":"fèves","fr":"ivaouen"},

{"kb":"février","fr":"furar"},

{"kb":"fiabilité","fr":"tanegfult"},

{"kb":"fiable","fr":"anegful"},

{"kb":"fiche","fr":"tifert"},

{"kb":"fichier","fr":"afaylu"},

{"kb":"fictif","fr":"asugnan"},

{"kb":"fiction","fr":"aneghlan"},

{"kb":"fidèle","fr":"amekdi"},

{"kb":"fidélité","fr":"takdit"},

{"kb":"fier","fr":"burez"},

{"kb":"fierté","fr":"aburez"},

{"kb":"figue","fr":"tabekhsist"},

{"kb":"figue-sèche","fr":"inighem"},

{"kb":"figuier","fr":"taneqwlets"},

{"kb":"figure","fr":"tawila"},

{"kb":"fil","fr":"ikhidh"},

{"kb":"filière","fr":"asaka"},

{"kb":"fille","fr":"takkchichth"},

{"kb":"filles","fr":"tihdhayin"},

{"kb":"film","fr":"asaru"},

{"kb":"filtrage","fr":"astay"},

{"kb":"filtre","fr":"tastayt"},

{"kb":"filtrer","fr":"sti"},

{"kb":"fin","fr":"taggara"},

{"kb":"finalité","fr":"aguttu"},

{"kb":"financer","fr":"siszref"},

{"kb":"finances","fr":"tiszraf"},

{"kb":"financier","fr":"anaszraf"},

{"kb":"fixation","fr":"asmezgi"},

{"kb":"fixe","fr":"yersa"},

{"kb":"fixer","fr":"smegi"},

{"kb":"flambeau","fr":"tasafut"},

{"kb":"flamme","fr":"ajajih"},

{"kb":"fleur","fr":"tajeddjigt"},

{"kb":"fleuve","fr":"asif"},

{"kb":"flexible (être)","fr":"imedh"},

{"kb":"flexion","fr":"talmadhi"},

{"kb":"flotte","fr":"tanawt"},

{"kb":"fluctuation","fr":"aleggwen"},

{"kb":"fluctuer","fr":"leggwen"},

{"kb":"fluide","fr":"amengi"},

{"kb":"fluidité","fr":"angi"},

{"kb":"flûte","fr":"tajewwaqt"},

{"kb":"flux","fr":"asuddem"},

{"kb":"focal","fr":"adikan"},

{"kb":"focalisation","fr":"asdikan"},

{"kb":"foi","fr":"taflest"},

{"kb":"foie","fr":"tasa"},

{"kb":"foin","fr":"asaghur"},

{"kb":"foire","fr":"almuggar"},

{"kb":"fois","fr":"tikkelt"},

{"kb":"folie","fr":"tidderwct"},

{"kb":"foncer","fr":"berrez"},

{"kb":"fonction","fr":"tawuri"},

{"kb":"fonctionnaire","fr":"anawur"},

{"kb":"fonctionnel","fr":"amesghan"},

{"kb":"fond","fr":"ider"},

{"kb":"fondamental","fr":"amedru"},

{"kb":"fondement","fr":"tarselt"},

{"kb":"fonder","fr":"sersel"},

{"kb":"fonder","fr":"fsi"},

{"kb":"fontaine","fr":"tala"},

{"kb":"force","fr":"afud"},

{"kb":"foret","fr":"tiszgi"},

{"kb":"forgeron","fr":"amzil"},

{"kb":"formaliser","fr":"selghu"},

{"kb":"formateur","fr":"amsalghu"},

{"kb":"formation","fr":"asilegh"},

{"kb":"forme","fr":"talgha"},

{"kb":"formel","fr":"alghawi"},

{"kb":"former","fr":"alegh"},

{"kb":"formule","fr":"tasemselt"},

{"kb":"formuler","fr":"semsel"},

{"kb":"fortune","fr":"ayedda"},

{"kb":"fosse","fr":"tamdhelt"},

{"kb":"fou","fr":"abuhal"},

{"kb":"fouet","fr":"azelf"},

{"kb":"fouille (inquisition)","fr":"agawes"},

{"kb":"fouiller","fr":"gawes"},

{"kb":"four","fr":"aferran"},

{"kb":"fourche","fr":"tazzert"},

{"kb":"fourmi","fr":"tawettuft (tiwedhfin)"},

{"kb":"fourmilière","fr":"tabulga"},

{"kb":"fournir","fr":"jajju"},

{"kb":"fourrer","fr":"ger"},

{"kb":"foyer","fr":"almessi"},

{"kb":"fraction","fr":"taszunt"},

{"kb":"fragment","fr":"ticlekht"},

{"kb":"fragmentation","fr":"acellekh"},

{"kb":"fragmenter","fr":"cellekh"},

{"kb":"frais","fr":"asemmadh"},

{"kb":"framboises","fr":"tizwal"},

{"kb":"franc","fr":"afenszay"},

{"kb":"franchement","fr":"s ufenszay"},

{"kb":"franchise","fr":"tafenszayt"},

{"kb":"frapper","fr":"ewwet"},

{"kb":"fraternité","fr":"tagmats"},

{"kb":"frayeur","fr":"tigwdi"},

{"kb":"frein","fr":"amawagh"},

{"kb":"freiner","fr":"awegh"},

{"kb":"fréquence","fr":"asnigar"},

{"kb":"fréquent","fr":"sniger"},

{"kb":"frère","fr":"tagmats ou pour mon frère OUGMA"},

{"kb":"froid","fr":"asemmidh"},

{"kb":"froissé","fr":"imunnedh"},

{"kb":"fromage","fr":"takemmart"},

{"kb":"fromage-blanc","fr":"aguglu"},

{"kb":"front","fr":"anyir"},

{"kb":"frontière","fr":"talast"},

{"kb":"frotter","fr":"hukk"},

{"kb":"fruit","fr":"agummu"},

{"kb":"frustration","fr":"afdham"},

{"kb":"frustrer","fr":"fdhem"},

{"kb":"fugue","fr":"tarewla seg akkham"},

{"kb":"fuir","fr":"rwel"},

{"kb":"fuite","fr":"tarewla"},

{"kb":"fumée","fr":"abbu"},

{"kb":"fumer","fr":"sguggu"},

{"kb":"fumier","fr":"agudu"},

{"kb":"funérailles","fr":"abehlus"},

{"kb":"fuseau","fr":"iszdhi"},

{"kb":"fusée","fr":"timeszdit"},

{"kb":"fusil","fr":"abeckidh"},

{"kb":"fusion","fr":"asegdhem"},

{"kb":"fusionner","fr":"ssegdhem"},

{"kb":"futur","fr":"imal"},

{"kb":"gâcher","fr":"semcucu"},

{"kb":"gagner","fr":"berghec"},

{"kb":"galant","fr":"asenbar"},

{"kb":"galanterie","fr":"asenber"},

{"kb":"galaxie","fr":"amazellaw"},

{"kb":"gallosité","fr":"tiderrit"},

{"kb":"galon","fr":"tidli"},

{"kb":"gang","fr":"akurmis"},

{"kb":"ganse","fr":"tidli"},

{"kb":"garantir","fr":"segger"},

{"kb":"garçon","fr":"aqcic"},

{"kb":"garde","fr":"tidhat"},

{"kb":"garderie","fr":"tasdhaft"},

{"kb":"gardien","fr":"amdhif"},

{"kb":"gare","fr":"tamersiwet"},

{"kb":"gaspiller","fr":"zemzer"},

{"kb":"gâté","fr":"ccuq"},

{"kb":"gâteau","fr":"angul"},

{"kb":"gauche","fr":"azelmadh"},

{"kb":"gazelle","fr":"taghzalt"},

{"kb":"gendarme","fr":"amestul"},

{"kb":"gendarmerie","fr":"tamsetla"},

{"kb":"gendre","fr":"adheggwal"},

{"kb":"gêne","fr":"ameccatul"},

{"kb":"gêner","fr":"snukmu"},

{"kb":"général","fr":"amatu"},

{"kb":"généralisation","fr":"asmatu"},

{"kb":"généralité","fr":"amata"},

{"kb":"générateur","fr":"asutay"},

{"kb":"génération","fr":"asatu"},

{"kb":"généreux","fr":"anakkaf"},

{"kb":"genêt","fr":"azzu"},

{"kb":"génétique","fr":"amehhaz"},

{"kb":"génial","fr":"asemdan"},

{"kb":"génie","fr":"tasmedna"},

{"kb":"genre","fr":"tawsit"},

{"kb":"géographie","fr":"tarakalt"},

{"kb":"géomètre","fr":"amenzag"},

{"kb":"géométrie","fr":"tanzeggit"},

{"kb":"gérer","fr":"sefrek"},

{"kb":"gésier","fr":"azerg"},

{"kb":"geste","fr":"asillef"},

{"kb":"gestion","fr":"asefrek"},

{"kb":"gifle","fr":"abeqqa"},

{"kb":"gland","fr":"abelludh"},

{"kb":"glissant","fr":"iteccedh"},

{"kb":"glissement","fr":"tuccdha"},

{"kb":"global","fr":"ablulagh"},

{"kb":"globe","fr":"tabluleght"},

{"kb":"gloire","fr":"tamanegt"},

{"kb":"goître","fr":"agaszusz"},

{"kb":"gorgée","fr":"tagummit"},

{"kb":"gosier","fr":"agerjum"},

{"kb":"gouffre","fr":"adghiwegh"},

{"kb":"gourde","fr":"tablawt"},

{"kb":"goût","fr":"aram"},

{"kb":"goûter","fr":"mdhu"},

{"kb":"goutte","fr":"timeqqit"},

{"kb":"gouvernement","fr":"anabadh"},

{"kb":"grade","fr":"asellun"},

{"kb":"grain","fr":"aaeqqa"},

{"kb":"graisse","fr":"tassemt"},

{"kb":"grammaire","fr":"tajerrumt"},

{"kb":"grand","fr":"amuqran"},

{"kb":"grandeur","fr":"temgher"},

{"kb":"grand-mère","fr":"jida ou setsi"},

{"kb":"grand-père","fr":"jeddi"},

{"kb":"graphique","fr":"tudlift"},

{"kb":"grappe","fr":"agazu"},

{"kb":"gratuit","fr":"battel"},

{"kb":"gravitation","fr":"aslemlem"},

{"kb":"gravité (centre de)","fr":"aszimmas"},

{"kb":"graviter","fr":"lemlem"},

{"kb":"grêle","fr":"abruri"},

{"kb":"grenade","fr":"taremmant"},

{"kb":"grenier","fr":"aghzan"},

{"kb":"grenouille","fr":"imqwerqar"},

{"kb":"grève","fr":"asunded"},

{"kb":"gréviste","fr":"imessinded"},

{"kb":"grillage","fr":"zzarb"},

{"kb":"grille","fr":"taratsa"},

{"kb":"griller","fr":"aseknef"},

{"kb":"grimace","fr":"tafennect"},

{"kb":"grimacer","fr":"fennec"},

{"kb":"grimper","fr":"cfullet"},

{"kb":"grisonner","fr":"ssenghed"},

{"kb":"gros","fr":"afuyan"},

{"kb":"grossesse","fr":"tadist"},

{"kb":"grossier","fr":"asefsawi"},

{"kb":"grotte","fr":"ifri"},

{"kb":"groupe","fr":"aggay"},

{"kb":"grouper","fr":"segrew"},

{"kb":"guépard","fr":"amayas"},

{"kb":"guérir","fr":"ejji"},

{"kb":"guérison","fr":"hellu"},

{"kb":"guerre","fr":"amgaru"},

{"kb":"guerrier","fr":"amgara"},

{"kb":"guetter","fr":"sfuru"},

{"kb":"guide","fr":"amnir"},

{"kb":"guider","fr":"ner"},

{"kb":"guitare","fr":"adinan"},

{"kb":"gymnastique","fr":"ahareg"},

{"kb":"habile","fr":"Addinkay"},

{"kb":"habileté","fr":"tiddinkyet"},

{"kb":"habiller","fr":"els"},

{"kb":"habitation","fr":"tanezdught"},

{"kb":"habiter","fr":"zdegh"},

{"kb":"habitude","fr":"tamyart"},

{"kb":"habituer","fr":"myer"},

{"kb":"hache","fr":"tacaqurt"},

{"kb":"haie","fr":"afrag"},

{"kb":"haine","fr":"akasan"},

{"kb":"haïr","fr":"ksen"},

{"kb":"hallucination","fr":"azghugh"},

{"kb":"hameçon","fr":"tasennart"},

{"kb":"handicapé","fr":"amakdaw"},

{"kb":"harceler","fr":"ssersen"},

{"kb":"harmonie","fr":"tanmila"},

{"kb":"hasard","fr":"asamma; s usamma(par)"},

{"kb":"hauteur","fr":"tattayt"},

{"kb":"hébergement","fr":"assemguru"},

{"kb":"héberger","fr":"sens"},

{"kb":"herbe","fr":"tuga"},

{"kb":"hérédité","fr":"acettul"},

{"kb":"hérisson","fr":"inisi"},

{"kb":"héritage","fr":"tukkest"},

{"kb":"hériter","fr":"kassu"},

{"kb":"héritier","fr":"amekkasu"},

{"kb":"héroïsme","fr":"tasdha"},

{"kb":"héros","fr":"asadh"},

{"kb":"hétérogène","fr":"ayedhszar"},

{"kb":"heure","fr":"asrag"},

{"kb":"heureux","fr":"anammar; nnecrah(être)"},

{"kb":"heuristique","fr":"amsuffi"},

{"kb":"hibou","fr":"bururu"},

{"kb":"hier","fr":"idhelli"},

{"kb":"hiérarchie","fr":"amyellel"},

{"kb":"hirondelle","fr":"tifirellest"},

{"kb":"histoire","fr":"amezruy"},

{"kb":"historien","fr":"anmezray"},

{"kb":"historique","fr":"amazray"},

{"kb":"hiver","fr":"tagrest"},

{"kb":"hivernage","fr":"asigers"},

{"kb":"hiverner","fr":"sigres"},

{"kb":"hommage","fr":"tamayt"},

{"kb":"homme","fr":"argaz; ales(espèce)"},

{"kb":"homogène","fr":"amsari"},

{"kb":"homogénéité","fr":"tamsarit"},

{"kb":"honneur","fr":"asehru"},

{"kb":"honte","fr":"akacaf"},

{"kb":"horde","fr":"asra"},

{"kb":"horizon","fr":"igli"},

{"kb":"horizontal","fr":"aglawi"},

{"kb":"horrifier","fr":"zzuszed"},

{"kb":"hospitalité","fr":"tasennubegt"},

{"kb":"hôtel","fr":"asensu"},

{"kb":"huit","fr":"tam"},

{"kb":"humain","fr":"alsi"},

{"kb":"humanisme","fr":"talsawit"},

{"kb":"humaniste","fr":"alsan"},

{"kb":"humanité","fr":"talsa"},

{"kb":"humeur","fr":"anecrah"},

{"kb":"humiliation","fr":"aseklel"},

{"kb":"humour","fr":"asaran"},

{"kb":"hurler","fr":"sugh"},

{"kb":"hybride","fr":"aregna"},

{"kb":"hydraulique","fr":"timeswi"},

{"kb":"hyène","fr":"iffis"},

{"kb":"hygiène","fr":"ughus"},

{"kb":"hymne","fr":"imseghret"},

{"kb":"hypocrite","fr":"ajaawan"},

{"kb":"hypothèse","fr":"turda"},

{"kb":"ici","fr":"da"},

{"kb":"idéal","fr":"uktu"},

{"kb":"idéaliste","fr":"aktawi"},

{"kb":"idée","fr":"takti"},

{"kb":"identification","fr":"tasmagit"},

{"kb":"identifié","fr":"tamagit"},

{"kb":"identifier","fr":"ukz"},

{"kb":"idéologie","fr":"tasnakta"},

{"kb":"idéologique","fr":"asnaktan"},

{"kb":"idiot","fr":"anjuf"},

{"kb":"idole","fr":"amsemmud"},

{"kb":"ignoble","fr":"anebrur"},

{"kb":"ignorance","fr":"tinnuzgha"},

{"kb":"ignorer","fr":"nzegh"},

{"kb":"ile","fr":"tigzirt"},

{"kb":"illettré","fr":"argemmay"},

{"kb":"illogique","fr":"armezzul"},

{"kb":"illusion","fr":"ineghlan"},

{"kb":"illustration","fr":"asumen"},

{"kb":"illustrer","fr":"ssumen"},

{"kb":"image","fr":"tugna"},

{"kb":"imaginaire","fr":"asugnan"},

{"kb":"imaginer","fr":"ssugen"},

{"kb":"imitation","fr":"arwas"},

{"kb":"imiter","fr":"rwes"},

{"kb":"immédiat","fr":"udwal"},

{"kb":"immeuble","fr":"azadagh"},

{"kb":"immobile","fr":"areggag"},

{"kb":"immobilité","fr":"tareggagt"},

{"kb":"impact","fr":"tammerwayt"},

{"kb":"impair","fr":"aryugan"},

{"kb":"impasse","fr":"akmim"},

{"kb":"impératif","fr":"anadh"},

{"kb":"impérialisme","fr":"tamnukda"},

{"kb":"imperméable","fr":"araman"},

{"kb":"impie","fr":"ammezray"},

{"kb":"impiété","fr":"tinmezri"},

{"kb":"implication","fr":"aselkem"},

{"kb":"implicite","fr":"udrig"},

{"kb":"impopulaire","fr":"anbayu"},

{"kb":"importance","fr":"tikhutra"},

{"kb":"important","fr":"akhatar"},

{"kb":"importateur","fr":"amaktar"},

{"kb":"importation","fr":"taktert"},

{"kb":"importé","fr":"imejber"},

{"kb":"importer","fr":"jber"},

{"kb":"importuner","fr":"cettet"},

{"kb":"imposer","fr":"seddenkiy"},

{"kb":"impossible","fr":"awezghi"},

{"kb":"impôt","fr":"tiwsi"},

{"kb":"improvisateur","fr":"aneflalay"},

{"kb":"improvisation","fr":"timenkadh"},

{"kb":"improviser","fr":"nnufluli"},

{"kb":"improviste","fr":"s usehwu"},

{"kb":"imprudent","fr":"behnes"},

{"kb":"impulsif","fr":"amnettaw"},

{"kb":"impulsivité","fr":"tanettawt"},

{"kb":"in vitro","fr":"g usnidi"},

{"kb":"in vivo","fr":"g tudert"},

{"kb":"inaccessible","fr":"agecraradh"},

{"kb":"inauguration","fr":"taszunszut"},

{"kb":"inaugurer","fr":"sszunszu"},

{"kb":"incapable","fr":"gammi"},

{"kb":"incapacité","fr":"akrad"},

{"kb":"incertitude","fr":"taglagilt"},

{"kb":"inclinaison","fr":"annuz"},

{"kb":"inclination","fr":"tameknanut"},

{"kb":"incline","fr":"ameknanu"},

{"kb":"incliner","fr":"knu"},

{"kb":"incognito","fr":"abnabak"},

{"kb":"incomplet","fr":"amennurf"},

{"kb":"inconnu","fr":"abnabak"},

{"kb":"inconscience","fr":"tarefrit"},

{"kb":"inconscient","fr":"arefray"},

{"kb":"inculquer","fr":"kkukel"},

{"kb":"indéfini","fr":"arbadu"},

{"kb":"indépendance","fr":"azarug"},

{"kb":"indépendant","fr":"imzireg"},

{"kb":"index","fr":"amatar"},

{"kb":"indication","fr":"asmal"},

{"kb":"indice","fr":"amatar"},

{"kb":"indigner","fr":"sekruret"},

{"kb":"indiquer","fr":"summel"},

{"kb":"indirect","fr":"arusrid"},

{"kb":"indiscrétion","fr":"afatal"},

{"kb":"individu","fr":"amdan"},

{"kb":"individualisation","fr":"asemdan"},

{"kb":"individualiser","fr":"semden"},

{"kb":"inducteur","fr":"amelway"},

{"kb":"inductif","fr":"amalway"},

{"kb":"induction","fr":"aseghszen"},

{"kb":"indulgence","fr":"amuzzu"},

{"kb":"industrie","fr":"tamguri"},

{"kb":"industriel","fr":"amguran"},

{"kb":"inégalité","fr":"tanmeglit"},

{"kb":"inexpérimenté","fr":"abujad"},

{"kb":"inférence","fr":"ismalen"},

{"kb":"inférieur","fr":"amazdar"},

{"kb":"infériorité","fr":"tamazdart"},

{"kb":"infinie","fr":"ifedh"},

{"kb":"infirme","fr":"akucam"},

{"kb":"influence","fr":"tazrirt"},

{"kb":"influer","fr":"zrir"},

{"kb":"informateur","fr":"amelleght"},

{"kb":"information","fr":"talghut"},

{"kb":"informer","fr":"sselghu"},

{"kb":"infrastructure","fr":"tAddaweskiwt"},

{"kb":"ingrat","fr":"anabal"},

{"kb":"inhibition","fr":"aserken"},

{"kb":"initiation","fr":"actel"},

{"kb":"initiative","fr":"tamezwarut"},

{"kb":"initier","fr":"ctel"},

{"kb":"inné","fr":"agwneslul"},

{"kb":"innocence","fr":"tamelsa"},

{"kb":"innocent","fr":"amelsi"},

{"kb":"innovation","fr":"assegni"},

{"kb":"inquiet","fr":"nnughjef"},

{"kb":"inscription","fr":"tiggezt"},

{"kb":"inscrire","fr":"siggez"},

{"kb":"insecte","fr":"abeaauc"},

{"kb":"insinuer","fr":"dmu"},

{"kb":"inspecter","fr":"swedh"},

{"kb":"inspecteur","fr":"amaswadh"},

{"kb":"inspection","fr":"taswett"},

{"kb":"inspiration","fr":"tahregt"},

{"kb":"inspiré","fr":"amehrug"},

{"kb":"inspirer","fr":"hreg"},

{"kb":"instabilité","fr":"tarkukitt"},

{"kb":"instable","fr":"arkukid "},

{"kb":"instinct","fr":"agnug"},

{"kb":"instituer","fr":"sud"},

{"kb":"institution","fr":"tasudut"},

{"kb":"instruction","fr":"taknut"},

{"kb":"instrument","fr":"allal"},

{"kb":"intégral","fr":"ughrid"},

{"kb":"intégration","fr":"aseghred"},

{"kb":"intégrer","fr":"seghred"},

{"kb":"intégrité","fr":"timmad"},

{"kb":"intellect","fr":"tayetti"},

{"kb":"intellectuel","fr":"aggag"},

{"kb":"intelligence","fr":"tigzi"},

{"kb":"intelligent","fr":"amegzu"},

{"kb":"intelligentsia","fr":"timegzi"},

{"kb":"intensif","fr":"adewwas"},

{"kb":"intensité","fr":"tadwast"},

{"kb":"intention","fr":"tidmi"},

{"kb":"interaction","fr":"tanezzarirt"},

{"kb":"interdiction","fr":"tagdelt"},

{"kb":"interdire","fr":"gdel"},

{"kb":"interdisciplinarité","fr":"tingergemmunt"},

{"kb":"intérêt","fr":"taghedhweft"},

{"kb":"interférence","fr":"amsekcam"},

{"kb":"intérieur","fr":"agensu"},

{"kb":"intériorisation","fr":"asudef"},

{"kb":"intermédiaire","fr":"abusari"},

{"kb":"internat","fr":"taghzamt"},

{"kb":"international","fr":"agraghlan"},

{"kb":"interne","fr":"agwensan"},

{"kb":"interpersonnel","fr":"agrewrik"},

{"kb":"interpoler","fr":"ssenttedh"},

{"kb":"interprétation","fr":"asughel"},

{"kb":"interrogation","fr":"aseqsi"},

{"kb":"interrompre","fr":"sneghtem"},

{"kb":"intervalle","fr":"azilal"},

{"kb":"intervenant","fr":"ankeccam"},

{"kb":"intervention","fr":"tanekcimt"},

{"kb":"interview","fr":"tadiwennit"},

{"kb":"intrigue","fr":"tAddist (tiddas)"},

{"kb":"intriguer","fr":"sudes"},

{"kb":"intrinsèque","fr":"umasan"},

{"kb":"introduction","fr":"tazwart"},

{"kb":"introspection","fr":"tamayust"},

{"kb":"intuition","fr":"taleffut"},

{"kb":"invariable","fr":"amezgi"},

{"kb":"invasion","fr":"anbaz"},

{"kb":"inventaire","fr":"asudden"},

{"kb":"inventer","fr":"sseghni"},

{"kb":"invention","fr":"taseghnawt"},

{"kb":"inverse","fr":"imitti"},

{"kb":"investir","fr":"ssirew"},

{"kb":"investissement","fr":"amessirw"},

{"kb":"invitation","fr":"tinubga"},

{"kb":"ironie","fr":"amuyed"},

{"kb":"irrationnel","fr":"armeghzan"},

{"kb":"irrégulier","fr":"arlugan"},

{"kb":"irrigation","fr":"aseswi"},

{"kb":"irriter","fr":"sduy"},

{"kb":"isme","fr":"szrif"},

{"kb":"isolation","fr":"anaazul"},

{"kb":"isole","fr":"awlalwal"},

{"kb":"isoler","fr":"wliwel"},

{"kb":"item","fr":"amagrad"},

{"kb":"ivoire","fr":"uszer"},

{"kb":"jadis","fr":"zik"},

{"kb":"jalousie","fr":"anasam"},

{"kb":"jaloux","fr":"amansam"},

{"kb":"jamais","fr":"urdjin"},

{"kb":"jambe","fr":"adhar"},

{"kb":"janvier","fr":"yennayer"},

{"kb":"jardin","fr":"taghult"},

{"kb":"jarre","fr":"acbali"},

{"kb":"jaune","fr":"awragh"},

{"kb":"jeter","fr":"dheggar"},

{"kb":"jeton","fr":"tiddest"},

{"kb":"jeu","fr":"urar"},

{"kb":"jeudi","fr":"amhad"},

{"kb":"jeune","fr":"ilemszi(homme},tilemszit(fille)"},

{"kb":"jeune-fille","fr":"tilemszit"},

{"kb":"jeûner","fr":"uszum"},

{"kb":"jeunesse","fr":"timedhrit"},

{"kb":"joie","fr":"tamendit"},

{"kb":"joli","fr":"ahusi"},

{"kb":"jonction","fr":"asemlili"},

{"kb":"joue","fr":"ihenk (lehnak)"},

{"kb":"jouer","fr":"urar"},

{"kb":"jouet","fr":"iwrar"},

{"kb":"joueur","fr":"amarir"},

{"kb":"joug","fr":"azaglu"},

{"kb":"jour","fr":"asef"},

{"kb":"journal","fr":"aghmis"},

{"kb":"journaliste","fr":"aneymas"},

{"kb":"joyeux","fr":"dwet"},

{"kb":"juge","fr":"anezzarfu"},

{"kb":"jugement","fr":"azaraf"},

{"kb":"juger","fr":"zref"},

{"kb":"juillet","fr":"yulyu"},

{"kb":"juin","fr":"yunyu"},

{"kb":"jumeaux","fr":"akniwen"},

{"kb":"jumeler","fr":"seknew"},

{"kb":"jurer","fr":"ggal"},

{"kb":"jus","fr":"iszem"},

{"kb":"jusqu'à","fr":"armi "},

{"kb":"juste","fr":"ughdim"},

{"kb":"justice","fr":"taghdemt"},

{"kb":"justification","fr":"aseffukel"},

{"kb":"justifier","fr":"seffukel"},

{"kb":"juvénile","fr":"amszusszey"},

{"kb":"juxtaposer","fr":"sertem"},

{"kb":"juxtaposition","fr":"asertem"},

{"kb":"kabyle","fr":"aqbayli"},

{"kb":"khôl","fr":"taszult"},

{"kb":"kidnapping","fr":"akafal"},

{"kb":"kif-kif","fr":"iidel"},

{"kb":"kilogramme","fr":"igmim"},

{"kb":"kiosque","fr":"tahanuts"},

{"kb":"klaxon","fr":"nnaqus"},

{"kb":"krach","fr":"asggakh"},

{"kb":"kyste","fr":"awles"},

{"kb":"là","fr":"dihin"},

{"kb":"laboratoire","fr":"isnidi"},

{"kb":"labyrinthe","fr":"aslellay"},

{"kb":"lac","fr":"tamda"},

{"kb":"lâche","fr":"amazdal"},

{"kb":"lâcher","fr":"sarreh"},

{"kb":"laïcité","fr":"tameddanit"},

{"kb":"laid","fr":"ucmit"},

{"kb":"laine","fr":"tadutt"},

{"kb":"laisser","fr":"eddj"},

{"kb":"lait","fr":"ayefki"},

{"kb":"lait-fermanté","fr":"ikil"},

{"kb":"lamper","fr":"sgwergwer"},

{"kb":"langage","fr":"tutlayt"},

{"kb":"langue","fr":"tutlayt; iles(organe)"},

{"kb":"lapsus","fr":"amcidh"},

{"kb":"large","fr":"abaraw"},

{"kb":"largeur","fr":"turrut"},

{"kb":"larme","fr":"imetti (imettawen)"},

{"kb":"lasser","fr":"saayu"},

{"kb":"lassitude","fr":"eeggu"},

{"kb":"latence","fr":"attam"},

{"kb":"latent","fr":"anettam"},

{"kb":"latéral","fr":"imidis"},

{"kb":"laurier-rose","fr":"ilili"},

{"kb":"lavage","fr":"tarda"},

{"kb":"laver","fr":"ssired"},

{"kb":"leader","fr":"amalway"},

{"kb":"leadership","fr":"timelwi"},

{"kb":"lécher","fr":"ellegh"},

{"kb":"leçon","fr":"tamsirt"},

{"kb":"lecteur","fr":"ameghri"},

{"kb":"lecture","fr":"taghuri"},

{"kb":"léger","fr":"afessas"},

{"kb":"légèreté","fr":"tefses"},

{"kb":"législation","fr":"assenti"},

{"kb":"lendemain","fr":"azekka"},

{"kb":"lentisque","fr":"tidekt"},

{"kb":"lésiner","fr":"cih"},

{"kb":"lettre","fr":"asekkil"},

{"kb":"lettres","fr":"tisekwla"},

{"kb":"leur","fr":"nsen"},

{"kb":"levain","fr":"takaya"},

{"kb":"lever","fr":"sbedd"},

{"kb":"levier","fr":"aghudid"},

{"kb":"lèvre","fr":"acenfir (tacenfirt)"},

{"kb":"lexique","fr":"amawal"},

{"kb":"lézard","fr":"taballehlahtt"},

{"kb":"liaison","fr":"tamghunt"},

{"kb":"libéral","fr":"alellam"},

{"kb":"libéralisation","fr":"tasellulit"},

{"kb":"liberté","fr":"tilelli"},

{"kb":"librairie","fr":"tasedlist"},

{"kb":"libre","fr":"ilelli"},

{"kb":"licence","fr":"turagt"},

{"kb":"lié","fr":"amaruz"},

{"kb":"lien","fr":"aseghwen"},

{"kb":"lier","fr":"eqqen"},

{"kb":"lieu","fr":"amdhiq"},

{"kb":"lièvre","fr":"awtul"},

{"kb":"ligne","fr":"ajerrid"},

{"kb":"lime","fr":"imebred"},

{"kb":"limite","fr":"abadu"},

{"kb":"limiter","fr":"sebded"},

{"kb":"linceul","fr":"lekwfen"},

{"kb":"linguistique","fr":"tasnawalt"},

{"kb":"lion","fr":"ayrad"},

{"kb":"lire","fr":"gher"},

{"kb":"lisse","fr":"aslufan"},

{"kb":"liste","fr":"umugh"},

{"kb":"lit","fr":"usu"},

{"kb":"littérature","fr":"tasekla"},

{"kb":"livre","fr":"adlis"},

{"kb":"local","fr":"adigan"},

{"kb":"localiser","fr":"sideg"},

{"kb":"loger","fr":"zdegh"},

{"kb":"logique","fr":"tameszla"},

{"kb":"loi","fr":"asadhuf"},

{"kb":"loisir","fr":"amzel"},

{"kb":"longitude","fr":"tazegrart"},

{"kb":"longueur","fr":"teghwzi"},

{"kb":"loques","fr":"acluh"},

{"kb":"louche","fr":"iflew"},

{"kb":"louer","fr":"ulk"},

{"kb":"lourd","fr":"sszay"},

{"kb":"lourdeur","fr":"taszayt"},

{"kb":"ludique","fr":"awurar"},

{"kb":"lui","fr":"nettsa"},

{"kb":"lumière","fr":"tafat"},

{"kb":"lundi","fr":"arim"},

{"kb":"lune","fr":"aggur"},

{"kb":"lutte","fr":"abellen"},

{"kb":"lutter","fr":"bellen"},

{"kb":"luxe","fr":"alamegh"},

{"kb":"mâcher","fr":"fesz"},

{"kb":"machine","fr":"asemmaru"},

{"kb":"mâchoire","fr":"amadel"},

{"kb":"madame","fr":"massa"},

{"kb":"mademoiselle","fr":"tamsiwt"},

{"kb":"magicien","fr":"imhergi"},

{"kb":"magie","fr":"ihergin"},

{"kb":"magistrat","fr":"aneflus"},

{"kb":"magistrature","fr":"tinneflest"},

{"kb":"magnétophone","fr":"tamesfift"},

{"kb":"magnétoscope","fr":"amesfiri"},

{"kb":"mai","fr":"maggu"},

{"kb":"maigre","fr":"analmaz"},

{"kb":"maigrir","fr":"imez"},

{"kb":"main","fr":"afus"},

{"kb":"maintenance","fr":"tamettuft"},

{"kb":"maintenant","fr":"tura"},

{"kb":"mais","fr":"maca"},

{"kb":"maïs","fr":"akwbal"},

{"kb":"maison","fr":"akham"},

{"kb":"maître","fr":"akerwa"},

{"kb":"maîtrise","fr":"adhdhaf"},

{"kb":"majoration","fr":"tasnigt"},

{"kb":"majorer","fr":"snig"},

{"kb":"majorité","fr":"tigwti"},

{"kb":"mal","fr":"aganed"},

{"kb":"mal (faire du)","fr":"gned"},

{"kb":"malade","fr":"amudhin"},

{"kb":"maladie","fr":"attan"},

{"kb":"maladroit","fr":"abujad"},

{"kb":"malchance","fr":"armusszel"},

{"kb":"malchanceux","fr":"agarmusszel"},

{"kb":"male","fr":"awtem"},

{"kb":"malédiction","fr":"daawessu"},

{"kb":"malfaisant","fr":"amcum"},

{"kb":"malgré","fr":"ccil n"},

{"kb":"malhabile","fr":"abujad"},

{"kb":"malheur","fr":"tawaghit"},

{"kb":"malice","fr":"lehraca"},

{"kb":"malin","fr":"uhric; hrec"},

{"kb":"maman","fr":"yema"},

{"kb":"mamelle","fr":"iff"},

{"kb":"mamelon","fr":"agemmun"},

{"kb":"manche","fr":"afus"},

{"kb":"manger","fr":"etctc"},

{"kb":"manière","fr":"taghara"},

{"kb":"manifestation","fr":"tameskant"},

{"kb":"manifeste","fr":"ameskan"},

{"kb":"manipulation","fr":"asenduddi"},

{"kb":"manipuler","fr":"senduddu"},

{"kb":"mannequin","fr":"aknar"},

{"kb":"manoeuvrer","fr":"muddu"},

{"kb":"manteau","fr":"azennar"},

{"kb":"manuel","fr":"awfus"},

{"kb":"maquillage","fr":"azrir"},

{"kb":"maquilleur","fr":"amezrir"},

{"kb":"marchand","fr":"amzenzi"},

{"kb":"marchandise","fr":"alzaz"},

{"kb":"marche","fr":"tikli"},

{"kb":"marché","fr":"alzuz"},

{"kb":"marcher","fr":"ihu"},

{"kb":"mardi","fr":"aram"},

{"kb":"mare","fr":"agulmim"},

{"kb":"marge","fr":"tama"},

{"kb":"marginal","fr":"amawan"},

{"kb":"mariage","fr":"iwel"},

{"kb":"marié","fr":"isli (islan)"},

{"kb":"marier","fr":"uwel"},

{"kb":"marin","fr":"awlal"},

{"kb":"marine","fr":"tagriwa"},

{"kb":"marionnette","fr":"amsillel"},

{"kb":"mars","fr":"maghres"},

{"kb":"marteau","fr":"amayeg"},

{"kb":"martyr","fr":"amaghras"},

{"kb":"masculin","fr":"amalay"},

{"kb":"masse","fr":"agdud"},

{"kb":"massue","fr":"azduz"},

{"kb":"matériel","fr":"angawi"},

{"kb":"mathématique","fr":"tusnakt"},

{"kb":"matière","fr":"tanga"},

{"kb":"matin","fr":"tufat"},

{"kb":"matrice","fr":"asirew"},

{"kb":"maturité","fr":"anszasz"},

{"kb":"mausolée","fr":"taqubbetts"},

{"kb":"mauvais","fr":"icmet"},

{"kb":"mauve","fr":"tibi"},

{"kb":"maximum","fr":"afellay"},

{"kb":"méchant","fr":"amcum"},

{"kb":"méconnaissance","fr":"akuddel"},

{"kb":"méconnaître","fr":"kuddel"},

{"kb":"médaille","fr":"tazalghi"},

{"kb":"médiateur","fr":"abdammas"},

{"kb":"méditer","fr":"krebbu"},

{"kb":"méfiance","fr":"ahareb"},

{"kb":"méfier","fr":"hareb"},

{"kb":"mélange","fr":"aruggay"},

{"kb":"mélanger","fr":"arwi"},

{"kb":"membre","fr":"amasladh"},

{"kb":"mémoire","fr":"timektit"},

{"kb":"mémoriser","fr":"hsu"},

{"kb":"menace","fr":"aggaz"},

{"kb":"menacer","fr":"ggez"},

{"kb":"mendiant","fr":"aaettar"},

{"kb":"mendier","fr":"mter"},

{"kb":"mensonge","fr":"tihillal "},

{"kb":"mentale","fr":"anellay"},

{"kb":"mentalité","fr":"tanellayt"},

{"kb":"menton","fr":"tamart"},

{"kb":"mépris","fr":"talekkwamt"},

{"kb":"mépriser","fr":"iku"},

{"kb":"mer","fr":"illel"},

{"kb":"mercenaire","fr":"ajuji"},

{"kb":"merci","fr":"tanemmirt"},

{"kb":"mercredi","fr":"ahad"},

{"kb":"mère","fr":"tayemmats"},

{"kb":"mère","fr":"yemma"},

{"kb":"mérite","fr":"arur"},

{"kb":"mériter","fr":"rur"},

{"kb":"mésange","fr":"abuheddad"},

{"kb":"message","fr":"izen"},

{"kb":"messager","fr":"amahat"},

{"kb":"mesurer","fr":"sghel"},

{"kb":"métaphysique","fr":"tadfergama"},

{"kb":"méthode","fr":"tarrayt"},

{"kb":"méthodique","fr":"anarray"},

{"kb":"meuble","fr":"aruku"},

{"kb":"meule","fr":"ighuraf"},

{"kb":"miel","fr":"tamment"},

{"kb":"miette","fr":"abruy (ibruyen)"},

{"kb":"mieux","fr":"yif"},

{"kb":"militaire","fr":"aserdas"},

{"kb":"militant","fr":"amaghnas"},

{"kb":"militer","fr":"ghnes"},

{"kb":"mille","fr":"agim"},

{"kb":"mine","fr":"amghiz"},

{"kb":"minerai","fr":"azara"},

{"kb":"minimum","fr":"Adday"},

{"kb":"ministère","fr":"aghlif"},

{"kb":"ministériel","fr":"aghelfan"},

{"kb":"ministre","fr":"aneghlaf"},

{"kb":"minorité","fr":"tadersi"},

{"kb":"miracle","fr":"tamkerra"},

{"kb":"miroir","fr":"lemri"},

{"kb":"misérable","fr":"agacur"},

{"kb":"miséricorde","fr":"tamella"},

{"kb":"mission","fr":"tughdatt"},

{"kb":"missionnaire","fr":"ameghdadh"},

{"kb":"mobilier","fr":"taraka"},

{"kb":"moderne","fr":"atrar"},

{"kb":"moelle","fr":"adif"},

{"kb":"moi","fr":"nekk"},

{"kb":"moins","fr":"udun n"},

{"kb":"mois","fr":"aggur"},

{"kb":"moisson","fr":"ajradh"},

{"kb":"moissonner","fr":"jredh"},

{"kb":"moitié","fr":"azgen"},

{"kb":"monarchie","fr":"tagelda"},

{"kb":"monde","fr":"amdhal"},

{"kb":"monnaie","fr":"aqarid"},

{"kb":"monsieur","fr":"mass"},

{"kb":"monstre","fr":"amsziw"},

{"kb":"montagnard","fr":"amessedrar (imesdurar)"},

{"kb":"montagne","fr":"adra"},

{"kb":"montée","fr":"tasawent"},

{"kb":"monter","fr":"ali"},

{"kb":"montrer","fr":"sken"},

{"kb":"moquer","fr":"tmeskhar"},

{"kb":"morceau","fr":"tikkest"},

{"kb":"mordre","fr":"kerrec"},

{"kb":"mort","fr":"tamattsant"},

{"kb":"mot","fr":"awal"},

{"kb":"mouche","fr":"izi"},

{"kb":"moucher","fr":"nsar"},

{"kb":"moudre","fr":"ezdh"},

{"kb":"mouflon","fr":"awdad"},

{"kb":"mouiller","fr":"sebzeg"},

{"kb":"moulin","fr":"tissirt"},

{"kb":"mourir","fr":"mmet"},

{"kb":"mousse","fr":"akuffet"},

{"kb":"moustaches","fr":"claghem"},

{"kb":"moustique","fr":"nnamus"},

{"kb":"mouton","fr":"ikerri"},

{"kb":"mouvement","fr":"amussu"},

{"kb":"moyen","fr":"allal"},

{"kb":"moyenne","fr":"talemmast"},

{"kb":"muet","fr":"agugam; ggugem"},

{"kb":"mulet","fr":"aserdun"},

{"kb":"multiplication","fr":"akfud"},

{"kb":"multiplier","fr":"kfed"},

{"kb":"mur","fr":"aghrab"},

{"kb":"mûr","fr":"unszisz; nszesz"},

{"kb":"musée","fr":"asalay"},

{"kb":"museler","fr":"bekkem"},

{"kb":"muselière","fr":"taghamut"},

{"kb":"musique","fr":"aszawan"},

{"kb":"mutation","fr":"tadhermist"},

{"kb":"muter","fr":"sdhermes"},

{"kb":"mutuel","fr":"amsemmeksal"},

{"kb":"mutuelle","fr":"tamilalt"},

{"kb":"mystère","fr":"adrug"},

{"kb":"mystérieux","fr":"imedreg"},

{"kb":"mystification","fr":"asghafes"},

{"kb":"mystifier","fr":"ghafes"},

{"kb":"mythe","fr":"umyi"},

{"kb":"mythologie","fr":"tumgisent"},

{"kb":"nager","fr":"uum"},

{"kb":"naguère","fr":"zik"},

{"kb":"naïf","fr":"neyya"},

{"kb":"naissance","fr":"talalit"},

{"kb":"naître","fr":"lul"},

{"kb":"narine","fr":"tinzart"},

{"kb":"natation","fr":"accaf"},

{"kb":"nation","fr":"aghlan"},

{"kb":"national","fr":"aghelnaw"},

{"kb":"nationalisation","fr":"aseghlen"},

{"kb":"nationaliser","fr":"seghlen"},

{"kb":"nationalisme","fr":"taghelnaszri"},

{"kb":"nationaliste","fr":"aghelnaszri"},

{"kb":"natte","fr":"tagarlilt"},

{"kb":"nature","fr":"agama"},

{"kb":"naturel","fr":"tamagant "},

{"kb":"naturel","fr":"agmawi "},

{"kb":"navire","fr":"agherrabu"},

{"kb":"nécessaire","fr":"adhulli"},

{"kb":"nécessité","fr":"tadhullit"},

{"kb":"néfaste","fr":"abumezleg"},

{"kb":"négatif","fr":"ibaw"},

{"kb":"négation","fr":"tibawt"},

{"kb":"négativisme","fr":"tibaweszret"},

{"kb":"négligeable","fr":"awziz"},

{"kb":"négliger","fr":"sewzez"},

{"kb":"négoce","fr":"astug"},

{"kb":"négocier","fr":"steg"},

{"kb":"neige","fr":"adfel"},

{"kb":"nerf","fr":"asur"},

{"kb":"nerveux","fr":"ansur"},

{"kb":"nettoyage","fr":"arras"},

{"kb":"nettoyer","fr":"urs"},

{"kb":"neuf","fr":"amaynut; tsza(chiffre)"},

{"kb":"neutralité","fr":"tarawsa"},

{"kb":"neutre","fr":"arawsan"},

{"kb":"nez","fr":"anzaren"},

{"kb":"nid","fr":"isekki"},

{"kb":"nier","fr":"szel"},

{"kb":"niveau","fr":"aswir"},

{"kb":"noble","fr":"ahaggar"},

{"kb":"noblesse","fr":"tihhugra"},

{"kb":"noeud","fr":"tikerrist"},

{"kb":"noir","fr":"aberkan"},

{"kb":"noircir","fr":"sibrek"},

{"kb":"nom","fr":"isem"},

{"kb":"nombre","fr":"amdhan"},

{"kb":"nombril","fr":"timitt"},

{"kb":"nommer","fr":"gisem"},

{"kb":"non","fr":"mdah"},

{"kb":"nord","fr":"agafa"},

{"kb":"normal","fr":"amagnu"},

{"kb":"normalisation","fr":"asmagnu"},

{"kb":"norme","fr":"tagnut"},

{"kb":"nostalgie","fr":"tamdanit"},

{"kb":"nostalgique","fr":"amdanay"},

{"kb":"notation","fr":"tira"},

{"kb":"note","fr":"tazmilt"},

{"kb":"notion","fr":"tamidhrant"},

{"kb":"nourrir","fr":"aalef"},

{"kb":"nourrisson","fr":"unki"},

{"kb":"nourriture","fr":"utctci"},

{"kb":"nous","fr":"nekkwenti(fem},nekwni(masc.) "},

{"kb":"nouveau","fr":"amaynut"},

{"kb":"nouveau-né","fr":"azzaz"},

{"kb":"nouvelle","fr":"isali; tullizt"},

{"kb":"noyau","fr":"aghurmi"},

{"kb":"noyer","fr":"lghi"},

{"kb":"nu","fr":"amazuf"},

{"kb":"nue","fr":"zzuzef"},

{"kb":"nuage","fr":"asigna"},

{"kb":"nuire","fr":"ssertey"},

{"kb":"nuisible","fr":"asartay"},

{"kb":"nuit","fr":"idh"},

{"kb":"numérique","fr":"anettun"},

{"kb":"numéro","fr":"uttun"},

{"kb":"numéroter","fr":"sudhen"},

{"kb":"oasis","fr":"amda"},

{"kb":"obéir","fr":"ilel"},

{"kb":"obéissance","fr":"asegd"},

{"kb":"objecter","fr":"sentel"},

{"kb":"objectif","fr":"amesgharu"},

{"kb":"objection","fr":"tasentilt"},

{"kb":"objectivité","fr":"tamesghara"},

{"kb":"objet","fr":"taghawsa"},

{"kb":"obligation","fr":"azuccel"},

{"kb":"obliger","fr":"zuccel"},

{"kb":"obscurantisme","fr":"aserdel"},

{"kb":"observation","fr":"annay"},

{"kb":"observatoire","fr":"asannay"},

{"kb":"observer","fr":"ani"},

{"kb":"obstacle","fr":"unjug"},

{"kb":"obstination","fr":"agharam"},

{"kb":"obtenir","fr":"lummesz"},

{"kb":"occasion","fr":"talemmiszt"},

{"kb":"occident","fr":"ataram"},

{"kb":"occidental","fr":"utrim"},

{"kb":"occupation","fr":"aweszlu"},

{"kb":"océan","fr":"agaraw"},

{"kb":"oeil","fr":"titt (allen)"},

{"kb":"oeuf","fr":"tamellalt"},

{"kb":"offensif","fr":"amderrem"},

{"kb":"officiel","fr":"unsib"},

{"kb":"oisiveté","fr":"tifenyent"},

{"kb":"ombre","fr":"tili"},

{"kb":"omettre","fr":"ettsu"},

{"kb":"omission","fr":"tatut"},

{"kb":"onagre","fr":"ahulil"},

{"kb":"oncle","fr":"anat"},

{"kb":"onde","fr":"tamdeswelt"},

{"kb":"ondulant","fr":"amdeswal"},

{"kb":"onduler","fr":"mdeswel"},

{"kb":"ongle","fr":"iccer (accaren)"},

{"kb":"opérateur","fr":"amahal"},

{"kb":"opération","fr":"tamhelt"},

{"kb":"opérer","fr":"mhel"},

{"kb":"opinion","fr":"turda"},

{"kb":"opposer","fr":"segmedh"},

{"kb":"opposition","fr":"tanmegla"},

{"kb":"oppresseur","fr":"asemsan"},

{"kb":"oppression","fr":"takritt"},

{"kb":"opprimer","fr":"kredh"},

{"kb":"opprobre","fr":"laar"},

{"kb":"optimal","fr":"akkay"},

{"kb":"optimiste","fr":"amesnayfu"},

{"kb":"option","fr":"adhaghar"},

{"kb":"optionnel","fr":"umadhghir"},

{"kb":"opulence","fr":"tiggenfit"},

{"kb":"or","fr":"uregh"},

{"kb":"orage","fr":"azayedh"},

{"kb":"oraison","fr":"asmiles"},

{"kb":"oral","fr":"atlay "},

{"kb":"orateur","fr":"amennay"},

{"kb":"orbite","fr":"ahbu"},

{"kb":"ordinaire","fr":"amagnu"},

{"kb":"ordinateur","fr":"aselkim"},

{"kb":"ordonner","fr":"ssunedh"},

{"kb":"ordre","fr":"tasundha"},

{"kb":"oreille","fr":"tamesszught"},

{"kb":"oreiller","fr":"tasumta"},

{"kb":"organe","fr":"agman"},

{"kb":"organisation","fr":"tuddsa"},

{"kb":"organiser","fr":"ddes"},

{"kb":"organisme","fr":"udus"},

{"kb":"orge","fr":"timszin"},

{"kb":"orgueil","fr":"tazengart"},

{"kb":"orgueilleux","fr":"amzenger"},

{"kb":"orientation","fr":"taghda"},

{"kb":"orienter","fr":"aghed"},

{"kb":"original","fr":"ameszwer"},

{"kb":"originalité","fr":"tameszwert"},

{"kb":"origine","fr":"tadra"},

{"kb":"orphelin","fr":"agujil"},

{"kb":"orphelinat","fr":"tasgujla"},

{"kb":"orteil","fr":"tifdent"},

{"kb":"os","fr":"ighes (ighsan)"},

{"kb":"oser","fr":"ffuhri"},

{"kb":"otage","fr":"akifel"},

{"kb":"ou","fr":"negh"},

{"kb":"où","fr":"anda"},

{"kb":"oubli","fr":"tamettawet"},

{"kb":"ourdir","fr":"zizzel"},

{"kb":"ouest","fr":"ataram"},

{"kb":"oui","fr":"ih"},

{"kb":"ouïe","fr":"timesli"},

{"kb":"outil","fr":"afecku"},

{"kb":"outre","fr":"acullidh (tacullitt)"},

{"kb":"ouverture","fr":"taneldit"},

{"kb":"ouvrier","fr":"akheddam"},

{"kb":"ouvrir","fr":"elli"},

{"kb":"ovaire","fr":"agad"},

{"kb":"ovale","fr":"aglayan"},

{"kb":"ovule","fr":"abalal"},

{"kb":"oxyde","fr":"tanigt"},

{"kb":"pacifier","fr":"semket"},

{"kb":"pacte","fr":"arkawel"},

{"kb":"page","fr":"asebtar"},

{"kb":"pain","fr":"aghrum"},

{"kb":"paire","fr":"abalag"},

{"kb":"paix","fr":"asrad"},

{"kb":"palier","fr":"asebded"},

{"kb":"palmier","fr":"tazdayt"},

{"kb":"panier","fr":"adhellaa"},

{"kb":"panneau","fr":"agalis"},

{"kb":"papa","fr":"vava"},

{"kb":"parabole","fr":"takenzirart"},

{"kb":"paradigme","fr":"tamudemt"},

{"kb":"paragraphe","fr":"taseddart"},

{"kb":"parallèle","fr":"amesdagh"},

{"kb":"paralyse","fr":"anerzam"},

{"kb":"paramètre","fr":"amsektay"},

{"kb":"parasite","fr":"aretta"},

{"kb":"parce-que","fr":"acku"},

{"kb":"parchemin","fr":"tidsi"},

{"kb":"pardon","fr":"asaruf"},

{"kb":"pardonner","fr":"suref"},

{"kb":"parent","fr":"amaraw"},

{"kb":"parente","fr":"timitt"},

{"kb":"parenthèse","fr":"ticcewt"},

{"kb":"parenthèse","fr":"ticcewt"},

{"kb":"paresse","fr":"asunded"},

{"kb":"paresseux","fr":"amessinded"},

{"kb":"parfaite","fr":"aneblal"},

{"kb":"parfait","fr":"blel"},

{"kb":"parfum","fr":"tafenda"},

{"kb":"pari","fr":"amecqerri"},

{"kb":"parlement","fr":"amni"},

{"kb":"parlementaire","fr":"awamni"},

{"kb":"parler","fr":"meslay"},

{"kb":"parodie","fr":"amkadan"},

{"kb":"parole","fr":"awal"},

{"kb":"part","fr":"aful"},

{"kb":"partager","fr":"bdhu"},

{"kb":"partenaire","fr":"imessumu"},

{"kb":"partenariat","fr":"amessumu"},

{"kb":"parti-politique","fr":"akabar"},

{"kb":"participation","fr":"tadrawt"},

{"kb":"participer","fr":"dru"},

{"kb":"particule","fr":"tazelgha"},

{"kb":"particulier","fr":"unfil"},

{"kb":"partie","fr":"taferfant"},

{"kb":"partiel","fr":"abruyan"},

{"kb":"partiellement","fr":"subruyan"},

{"kb":"partout","fr":"akkwmani"},

{"kb":"passage","fr":"azrug"},

{"kb":"passé","fr":"izri"},

{"kb":"passer","fr":"eeddi"},

{"kb":"passerelle","fr":"tasegdhemt"},

{"kb":"passif","fr":"atwegh"},

{"kb":"passion","fr":"aramsu"},

{"kb":"passivité","fr":"titwaght"},

{"kb":"patience","fr":"taszidhert"},

{"kb":"patient","fr":"amesszidhir"},

{"kb":"patienter","fr":"sszidher"},

{"kb":"patrie","fr":"taferfant"},

{"kb":"patrimoine","fr":"tigemmi"},

{"kb":"patron","fr":"akerwa"},

{"kb":"paume-de-la-main","fr":"tidikeltufus "},

{"kb":"pauvre","fr":"igellil"},

{"kb":"pays","fr":"tamurt"},

{"kb":"peau","fr":"agwlim"},

{"kb":"péché","fr":"abekkadh"},

{"kb":"pédagogie","fr":"tasegmisent"},

{"kb":"pédagogique","fr":"usegmisen"},

{"kb":"pédiatrie","fr":"tarbasent"},

{"kb":"peindre","fr":"klu"},

{"kb":"peine","fr":"tafgurt"},

{"kb":"peintre","fr":"amekla"},

{"kb":"péjoratif","fr":"amsekkam"},

{"kb":"peloton","fr":"tamaghlayt"},

{"kb":"pelouse","fr":"tamusayt"},

{"kb":"pensée","fr":"tawengimt"},

{"kb":"penser","fr":"swingwm"},

{"kb":"pente","fr":"takwessart"},

{"kb":"perception","fr":"aramas"},

{"kb":"percer","fr":"flu"},

{"kb":"percevoir","fr":"rmes"},

{"kb":"perfection","fr":"tablalt"},

{"kb":"perfectionner","fr":"blel"},

{"kb":"performance","fr":"tarebbawt"},

{"kb":"période","fr":"tawala"},

{"kb":"permanence","fr":"tissegli"},

{"kb":"permettre","fr":"sfel"},

{"kb":"permissif","fr":"amesfel"},

{"kb":"permission","fr":"turagt"},

{"kb":"persistant","fr":"ameggaluz"},

{"kb":"persister","fr":"ggulez"},

{"kb":"personnalisation","fr":"asewrik"},

{"kb":"personnalité","fr":"tugna"},

{"kb":"personne","fr":"tawrikt"},

{"kb":"personnel","fr":"anewrik"},

{"kb":"personnellement","fr":"sunewrik"},

{"kb":"persuader","fr":"lghed"},

{"kb":"persuasif","fr":"amalghad"},

{"kb":"perturbation","fr":"aserway"},

{"kb":"perturber","fr":"serwi"},

{"kb":"pervers","fr":"amazuf"},

{"kb":"pessimiste","fr":"amezzark"},

{"kb":"peu","fr":"drus"},

{"kb":"peuple","fr":"agdud"},

{"kb":"peur","fr":"tigwdi"},

{"kb":"phalange","fr":"taduft"},

{"kb":"phénomène","fr":"tumant"},

{"kb":"philosophie","fr":"tafelsuft"},

{"kb":"photographie","fr":"awlaf"},

{"kb":"phrase","fr":"tawinest"},

{"kb":"physique","fr":"agharan "},

{"kb":"pied","fr":"adhar"},

{"kb":"piédestal","fr":"adasil"},

{"kb":"piège","fr":"tazeqqurt"},

{"kb":"piéger","fr":"zeqqer"},

{"kb":"pierre","fr":"aszru"},

{"kb":"pigeon","fr":"itbir"},

{"kb":"piler","fr":"ddez"},

{"kb":"pilote","fr":"akurat"},

{"kb":"pin","fr":"tayda"},

{"kb":"pion","fr":"agunter"},

{"kb":"piquer","fr":"eqqes"},

{"kb":"pivot","fr":"amernu"},

{"kb":"placard","fr":"aferdu"},

{"kb":"place","fr":"amkan"},

{"kb":"placement","fr":"asurs"},

{"kb":"placer","fr":"ssers"},

{"kb":"plafond","fr":"asefl"},

{"kb":"plage","fr":"taftist"},

{"kb":"plagiaire","fr":"ahinus"},

{"kb":"plagiat","fr":"ahines"},

{"kb":"plagier","fr":"hines"},

{"kb":"plaindre","fr":"sennirez"},

{"kb":"plaine","fr":"ibedhha"},

{"kb":"plainte","fr":"tanurzit"},

{"kb":"plaisanterie","fr":"tagemmurt"},

{"kb":"plaisir","fr":"tadfi"},

{"kb":"plan","fr":"aghawas"},

{"kb":"planification","fr":"asghiwes"},

{"kb":"planifier","fr":"sghiwes"},

{"kb":"plante","fr":"imghi"},

{"kb":"plantureux","fr":"bbijjew"},

{"kb":"plausible","fr":"amazray"},

{"kb":"plein","fr":"itctcur"},

{"kb":"pleurer","fr":"ru"},

{"kb":"pleuvoir","fr":"ikkat ugeffur"},

{"kb":"pli","fr":"adhfas"},

{"kb":"pluie","fr":"ageffur"},

{"kb":"pluriel","fr":"asgwet"},

{"kb":"plus-que","fr":"ugarn"},

{"kb":"poésie","fr":"tamedyazt"},

{"kb":"poète","fr":"amedyaz"},

{"kb":"poignée","fr":"taguli"},

{"kb":"poing","fr":"tukkint"},

{"kb":"pointeau","fr":"tasszelt"},

{"kb":"poisson","fr":"aslem"},

{"kb":"poitrine","fr":"idmaren"},

{"kb":"pôle","fr":"asfaylu"},

{"kb":"polémique","fr":"azernen"},

{"kb":"polémiquer","fr":"zernen"},

{"kb":"poli","fr":"asluf"},

{"kb":"police","fr":"tamsulta"},

{"kb":"policier","fr":"amsaltu"},

{"kb":"politesse","fr":"taslufi"},

{"kb":"politique","fr":"tasertit "},

{"kb":"politisation","fr":"asertey"},

{"kb":"pollution","fr":"aseldegh"},

{"kb":"pompier","fr":"asekhsay"},

{"kb":"ponctuation","fr":"asemqedh"},

{"kb":"pont","fr":"tileggwit"},

{"kb":"populaire","fr":"agherfan"},

{"kb":"popularité","fr":"tagherfant"},

{"kb":"porc","fr":"ilef"},

{"kb":"port","fr":"asagen"},

{"kb":"porte","fr":"tawwurt"},

{"kb":"porteur","fr":"amasay"},

{"kb":"poser","fr":"sers"},

{"kb":"positif","fr":"amdag"},

{"kb":"position","fr":"tadeghra"},

{"kb":"posséder","fr":"suu"},

{"kb":"possible","fr":"aszubesz"},

{"kb":"postérité","fr":"tagwri"},

{"kb":"postulat","fr":"tandagt"},

{"kb":"potentialité","fr":"tanezmart"},

{"kb":"potentiel","fr":"anezmar"},

{"kb":"poulet","fr":"ayazidh"},

{"kb":"poupée","fr":"asunar"},

{"kb":"pourcentage","fr":"afmidhi"},

{"kb":"pourquoi","fr":"ayen"},

{"kb":"poursuite","fr":"astagh"},

{"kb":"poursuivre","fr":"stegh"},

{"kb":"pouvoir","fr":"izmir"},

{"kb":"poux","fr":"tilkets"},

{"kb":"pratique","fr":"talilt"},

{"kb":"pratiquer","fr":"illil"},

{"kb":"précéder","fr":"zwer"},

{"kb":"précision","fr":"tiseddi"},

{"kb":"précoce","fr":"amenzuy"},

{"kb":"précocité","fr":"tamenzuyt"},

{"kb":"précurseur","fr":"inilbi"},

{"kb":"préface","fr":"tazwart"},

{"kb":"préférence","fr":"azullen"},

{"kb":"préférer","fr":"ssuf"},

{"kb":"préfet","fr":"anebdad"},

{"kb":"préhension","fr":"tanamuzt"},

{"kb":"préjugé","fr":"azarafyat"},

{"kb":"premier","fr":"amezwaru"},

{"kb":"prendre","fr":"ddem"},

{"kb":"préparation","fr":"aheggi"},

{"kb":"préparer","fr":"ssiteb"},

{"kb":"préposition","fr":"tanzaght"},

{"kb":"présence","fr":"ammegnet"},

{"kb":"présentation","fr":"tanekda"},

{"kb":"présenter","fr":"ssenked"},

{"kb":"présidence","fr":"taselwit"},

{"kb":"président","fr":"aselway"},

{"kb":"présider","fr":"sluy"},

{"kb":"presque","fr":"amzun"},

{"kb":"presse","fr":"tifeffaght"},

{"kb":"presser","fr":"swer"},

{"kb":"pression","fr":"aswar"},

{"kb":"prestation","fr":"tazzilt"},

{"kb":"prestige","fr":"annaz"},

{"kb":"prêt","fr":"aserdhil"},

{"kb":"prétendre","fr":"ntel"},

{"kb":"prétention","fr":"anatal"},

{"kb":"prévention","fr":"tisghilt"},

{"kb":"prévision","fr":"tagezzant"},

{"kb":"prévoir","fr":"gezzen"},

{"kb":"prévoyance","fr":"taszert"},

{"kb":"prière","fr":"tazaleth  -par Cilla-"}, 

{"kb":"primaire","fr":"amezgaru"},

{"kb":"primitif","fr":"amezzawru"},

{"kb":"prince","fr":"ageldun"},

{"kb":"principal","fr":"amenzawi"},

{"kb":"principe","fr":"amenzay"},

{"kb":"prise","fr":"afrak"},

{"kb":"prison","fr":"takurmut"},

{"kb":"privatiser","fr":"ssesleg"},

{"kb":"privé","fr":"uslig"},

{"kb":"privilège","fr":"aglam"},

{"kb":"privilégié","fr":"aneglam"},

{"kb":"privilégier","fr":"seglem"},

{"kb":"prix","fr":"azal;arraz(récompense)"},

{"kb":"probabilité","fr":"tadwala"},

{"kb":"probable","fr":"amedwal"},

{"kb":"problématique","fr":"tamukrist"},

{"kb":"problème","fr":"agnu"},

{"kb":"procès","fr":"aszmasz"},

{"kb":"processus","fr":"akala"},

{"kb":"proclamation","fr":"taseyrut"},

{"kb":"proclamer","fr":"seyru"},

{"kb":"producteur","fr":"anfaras"},

{"kb":"production","fr":"afares"},

{"kb":"produire","fr":"fares"},

{"kb":"produit","fr":"afaris"},

{"kb":"professeur","fr":"aselmad"},

{"kb":"profession","fr":"tanunnect"},

{"kb":"profondeur","fr":"tadrut"},

{"kb":"programmation","fr":"asmihel"},

{"kb":"programme","fr":"ahil"},

{"kb":"programmer","fr":"sihel"},

{"kb":"progrès","fr":"afara"},

{"kb":"progressif","fr":"afarey"},

{"kb":"progression","fr":"tafarayt"},

{"kb":"projecteur","fr":"ameggar"},

{"kb":"projection","fr":"tigri"},

{"kb":"projet","fr":"asenfar"},

{"kb":"prolétaire","fr":"amghid"},

{"kb":"prolétariat","fr":"tameghda"},

{"kb":"prolifique","fr":"akeffadh"},

{"kb":"promenade","fr":"imurruyen"},

{"kb":"promener","fr":"murrey"},

{"kb":"promotion","fr":"asmil"},

{"kb":"promouvoir","fr":"smel"},

{"kb":"pronom","fr":"amqim"},

{"kb":"prononcer","fr":"susru"},

{"kb":"prononciation","fr":"asusru"},

{"kb":"propagande","fr":"tazniwt"},

{"kb":"propagandiste","fr":"amaznaw"},

{"kb":"proportion","fr":"tazunt"},

{"kb":"proportionnel","fr":"azunan"},

{"kb":"proposer","fr":"sumer"},

{"kb":"proposition","fr":"asumer"},

{"kb":"propre","fr":"azedgan; izdig"},

{"kb":"propreté","fr":"tezdeg"},

{"kb":"propriétaire","fr":"amli"},

{"kb":"propriété","fr":"ayla"},

{"kb":"prosaïque","fr":"anesri"},

{"kb":"prose","fr":"tasrit"},

{"kb":"prospère","fr":"ankelwi"},

{"kb":"prospérité","fr":"tankelwit"},

{"kb":"protecteur","fr":"amastan"},

{"kb":"protection","fr":"tamestant"},

{"kb":"protéger","fr":"mmesten"},

{"kb":"protocole","fr":"askari"},

{"kb":"proverbe","fr":"anzi"},

{"kb":"province","fr":"tamnatt"},

{"kb":"provision","fr":"tamaguszt"},

{"kb":"provocateur","fr":"asmentas"},

{"kb":"provocation","fr":"tasmentest"},

{"kb":"provoquer","fr":"smentes"},

{"kb":"proximité","fr":"amisi"},

{"kb":"prudence","fr":"tikzi"},

{"kb":"prudent","fr":"amakaz"},

{"kb":"psaume","fr":"ahellel"},

{"kb":"pseudonyme","fr":"taselfest"},

{"kb":"psychanalyse","fr":"tiklislett"},

{"kb":"psychanalyste","fr":"amseklisedh"},

{"kb":"psychologie","fr":"tiklisent"},

{"kb":"psychologique","fr":"ulkisen"},

{"kb":"psychothérapie","fr":"tiklijjit"},

{"kb":"pubère","fr":"amawadh"},

{"kb":"puberté","fr":"taggatt"},

{"kb":"public","fr":"azayez"},

{"kb":"publicité","fr":"asusen"},

{"kb":"pudeur","fr":"akrukkedh"},

{"kb":"puer","fr":"fuh"},

{"kb":"puis","fr":"dgha"},

{"kb":"puiser","fr":"ghez"},

{"kb":"puissance","fr":"tanezmart"},

{"kb":"puissant","fr":"anezmar"},

{"kb":"pulsion","fr":"ancay"},

{"kb":"punition","fr":"tarrut"},

{"kb":"pur","fr":"azedgan"},

{"kb":"pureté","fr":"tezdeg"},

{"kb":"purger","fr":"sseghwes"},

{"kb":"pyramide","fr":"tazamugt"},

{"kb":"quai","fr":"agnenna"},

{"kb":"qualification","fr":"asmerked"},

{"kb":"qualité","fr":"amerkid"},

{"kb":"quand","fr":"mi; melmi(?)"},

{"kb":"quantification","fr":"tasmakta"},

{"kb":"quantité","fr":"tasmekta"},

{"kb":"quartier","fr":"agmam"},

{"kb":"quatre","fr":"kusz"},

{"kb":"querelle","fr":"amennugh"},

{"kb":"question","fr":"asteqsi"},

{"kb":"questionnaire","fr":"amseqsi"},

{"kb":"questionner","fr":"steqsi"},

{"kb":"queue","fr":"tamghilt"},

{"kb":"qui","fr":"anwa"},

{"kb":"quinzaine","fr":"aszdhun"},

{"kb":"quitter","fr":"eddj"},

{"kb":"quotient","fr":"anaqqas"},

{"kb":"quotient intellectuel","fr":"anaqqas anellay"},

{"kb":"race","fr":"iri"},

{"kb":"racheter","fr":"fdu"},

{"kb":"racine","fr":"aszar (iszuran)"},

{"kb":"racisme","fr":"aszghuszer"},

{"kb":"racontars","fr":"iwennan"},

{"kb":"raconter","fr":"qqis"},

{"kb":"radical","fr":"afeggag"},

{"kb":"radicaliste","fr":"afeggaygi"},

{"kb":"radio","fr":"asadrer"},

{"kb":"rage","fr":"isidh"},

{"kb":"raisin","fr":"adhil"},

{"kb":"raison","fr":"taghszint"},

{"kb":"raisonnement","fr":"aszeghszen"},

{"kb":"raisonner","fr":"szeghszen"},

{"kb":"ralentir","fr":"lukkez"},

{"kb":"ralentissement","fr":"alukkez"},

{"kb":"ramification","fr":"azruzzegh"},

{"kb":"ramifier","fr":"zruzzegh"},

{"kb":"rancune","fr":"ccehna"},

{"kb":"rancunier","fr":"amcehni"},

{"kb":"rang","fr":"adras"},

{"kb":"ranger","fr":"dres"},

{"kb":"rapide","fr":"arurad"},

{"kb":"rappel","fr":"asektu"},

{"kb":"rappeler","fr":"ssekti"},

{"kb":"rapport","fr":"assagh"},

{"kb":"rapporter","fr":"neqqes"},

{"kb":"rapporteur","fr":"aneqqas"},

{"kb":"rassasier","fr":"erwu"},

{"kb":"rassemblement","fr":"asegrew"},

{"kb":"rassembler","fr":"ssegrew"},

{"kb":"rat","fr":"agherda"},

{"kb":"rater","fr":"zgel"},

{"kb":"ration","fr":"tafult"},

{"kb":"rationalisme","fr":"taghesznaszri"},

{"kb":"rationaliste","fr":"aghenszari"},

{"kb":"rationalité","fr":"timmeghszent"},

{"kb":"rationnel","fr":"ameghszan"},

{"kb":"rationnelle","fr":"tameghzant"},

{"kb":"rattrapage","fr":"akhelledh"},

{"kb":"rature","fr":"isir"},

{"kb":"ravin","fr":"ikaf"},

{"kb":"rayer","fr":"ser"},

{"kb":"rayon","fr":"agir"},

{"kb":"rayonner","fr":"zzenszar"},

{"kb":"réaction","fr":"tasedmirt"},

{"kb":"réactionnaire","fr":"asedmar"},

{"kb":"réactionnaire","fr":"ssedmar"},

{"kb":"réalisateur","fr":"amsedhru"},

{"kb":"réalisation","fr":"asedhru"},

{"kb":"réaliser","fr":"ssedhru"},

{"kb":"réalisme","fr":"tilaweszrit"},

{"kb":"réalité","fr":"tilawt"},

{"kb":"rebelle","fr":"aghewwagh"},

{"kb":"rebeller (se)","fr":"ghewwegh"},

{"kb":"rébellion","fr":"aghewwegh"},

{"kb":"reboisement","fr":"asesseklu"},

{"kb":"reboiser","fr":"sseklu"},

{"kb":"recensement","fr":"uddun"},

{"kb":"recenser","fr":"Adden"},

{"kb":"réception","fr":"tarmest"},

{"kb":"recevoir","fr":"rmes"},

{"kb":"recherche","fr":"tagmi"},

{"kb":"rechercher","fr":"qelleb"},

{"kb":"réciprocité","fr":"asenfel"},

{"kb":"réciproque","fr":"amyagh"},

{"kb":"récitation","fr":"taszuggi"},

{"kb":"réciter","fr":"szug"},

{"kb":"récolte","fr":"ammad"},

{"kb":"récolter","fr":"amed"},

{"kb":"récompense","fr":"tarrazt"},

{"kb":"récompenser","fr":"arrez"},

{"kb":"reconnaissance","fr":"akaz"},

{"kb":"reconnaître","fr":"kez"},

{"kb":"recordman","fr":"aghlal"},

{"kb":"récréation","fr":"tanafa"},

{"kb":"rectifier","fr":"ssughed"},

{"kb":"recueil","fr":"ammud"},

{"kb":"reculer","fr":"ddirez"},

{"kb":"recyclage","fr":"aselghaltu"},

{"kb":"réduction","fr":"aseqsef"},

{"kb":"réduire","fr":"seqsef"},

{"kb":"rééducation","fr":"asegmiltu"},

{"kb":"référence","fr":"tamselyut"},

{"kb":"référentiel","fr":"amselghu"},

{"kb":"réfléchir","fr":"snezgem"},

{"kb":"reflet","fr":"ticci"},

{"kb":"réflexe","fr":"ammal"},

{"kb":"réflexion","fr":"tasnezgimt"},

{"kb":"réforme","fr":"tasemmeskelt"},

{"kb":"reformer","fr":"sekwen"},

{"kb":"refoulement","fr":"asserken"},

{"kb":"refrain","fr":"tasetna"},

{"kb":"réfrigérateur","fr":"imsismedh"},

{"kb":"refuge","fr":"arazugh"},

{"kb":"réfugié","fr":"azrazagh"},

{"kb":"réfugier","fr":"zrizegh"},

{"kb":"refus","fr":"tuggut"},

{"kb":"refuser","fr":"aggwi"},

{"kb":"réfutation","fr":"tararit"},

{"kb":"réfuter","fr":"err"},

{"kb":"régime","fr":"agal"},

{"kb":"régiment","fr":"aswag"},

{"kb":"région","fr":"tamnatt"},

{"kb":"règle","fr":"alugen (ilugan)"},

{"kb":"règlement","fr":"aslagan"},

{"kb":"régresser","fr":"iki"},

{"kb":"régression","fr":"alakay"},

{"kb":"regret","fr":"ndama"},

{"kb":"regretter","fr":"ndem"},

{"kb":"régularité","fr":"tillugna"},

{"kb":"régulateur","fr":"asder"},

{"kb":"régulier","fr":"amluggen"},

{"kb":"régulier","fr":"ilugen"},

{"kb":"rejet","fr":"adegger"},

{"kb":"rejeter","fr":"degger"},

{"kb":"relatif","fr":"amassagh"},

{"kb":"relation","fr":"tamaqqant"},

{"kb":"relationnel","fr":"uneqqin"},

{"kb":"relativité","fr":"timmaseght"},

{"kb":"relaxation","fr":"amucta"},

{"kb":"relié","fr":"amudid"},

{"kb":"relier","fr":"dded"},

{"kb":"relieur","fr":"amAddad"},

{"kb":"religion","fr":"ddin"},

{"kb":"reliure","fr":"udud"},

{"kb":"remarque","fr":"tamawt"},

{"kb":"rempart","fr":"agadir"},

{"kb":"remplaçant","fr":"imeddzi"},

{"kb":"remplir","fr":"ttcar"},

{"kb":"remue-ménage","fr":"dderdih"},

{"kb":"remuer","fr":"nucceg"},

{"kb":"rencontre","fr":"timlilit"},

{"kb":"rencontrer","fr":"mlil"},

{"kb":"rendement","fr":"tiririt"},

{"kb":"rendez-vous","fr":"asihar"},

{"kb":"renforcement","fr":"asalel"},

{"kb":"renfort","fr":"tasilit"},

{"kb":"renseignement","fr":"umel"},

{"kb":"rentable","fr":"araray"},

{"kb":"repas","fr":"tanfast"},

{"kb":"repérage","fr":"asdag"},

{"kb":"repère","fr":"aseddag"},

{"kb":"repérer","fr":"sedg"},

{"kb":"répéter","fr":"ales"},

{"kb":"répétition","fr":"allus"},

{"kb":"réplique","fr":"asegdel"},

{"kb":"répliquer","fr":"ssegdel"},

{"kb":"répondeur","fr":"amrawal"},

{"kb":"réponse","fr":"tamrarut"},

{"kb":"repos","fr":"asgunfu"},

{"kb":"reposer","fr":"sgunfu"},

{"kb":"reprendre","fr":"sseghnu"},

{"kb":"représentant","fr":"agensas"},

{"kb":"représentatif","fr":"ggenses"},

{"kb":"représentation","fr":"tagensest"},

{"kb":"représenter","fr":"imgenses"},

{"kb":"répressif","fr":"amastagh"},

{"kb":"répression","fr":"asatagh"},

{"kb":"réprimer","fr":"stegh"},

{"kb":"reproche","fr":"asugnet"},

{"kb":"reproduction","fr":"altufras"},

{"kb":"républicain","fr":"amsegdud"},

{"kb":"républicain","fr":"agdudan"},

{"kb":"république","fr":"tagduda"},

{"kb":"répudier","fr":"bru"},

{"kb":"réseau","fr":"aszetta"},

{"kb":"résidu","fr":"iwerman (tslur.)"},

{"kb":"résigner","fr":"szuder"},

{"kb":"résistance","fr":"azbu"},

{"kb":"résistant","fr":"anazbay"},

{"kb":"résister","fr":"zbu"},

{"kb":"résolution","fr":"taragit"},

{"kb":"résonner","fr":"tcentcen"},

{"kb":"résonner","fr":"stcentcen"},

{"kb":"résoudre","fr":"reg"},

{"kb":"respect","fr":"azrekki"},

{"kb":"respecter","fr":"zrekket"},

{"kb":"respiration","fr":"asnuffes"},

{"kb":"respirer","fr":"snuffes"},

{"kb":"responsabilité","fr":"tamasit"},

{"kb":"responsable","fr":"anabdad"},

{"kb":"ressemblance","fr":"arwis"},

{"kb":"ressembler","fr":"rwes"},

{"kb":"ressort","fr":"taghbalut"},

{"kb":"reste","fr":"agaluz"},

{"kb":"rester","fr":"qim"},

{"kb":"résultat","fr":"agmudh"},

{"kb":"résumé","fr":"agzul"},

{"kb":"résumer","fr":"zegwzel"},

{"kb":"retard","fr":"agellel"},

{"kb":"retard","fr":"gellel"},

{"kb":"retardataire","fr":"amaglal"},

{"kb":"réticence","fr":"tarekkekt"},

{"kb":"retour","fr":"tughalin"},

{"kb":"retourner","fr":"ughal"},

{"kb":"retraite","fr":"tastaght"},

{"kb":"rétrograde","fr":"amahray"},

{"kb":"rétrospectif","fr":"amaqqal"},

{"kb":"réussir","fr":"smures"},

{"kb":"réussite","fr":"asmures"},

{"kb":"rêve","fr":"targit"},

{"kb":"réveil","fr":"amsakwi"},

{"kb":"réveiller","fr":"akwi"},

{"kb":"revendication","fr":"tanegmit"},

{"kb":"revendiquer","fr":"nnegmi"},

{"kb":"revenir","fr":"ughaled"},

{"kb":"rêver","fr":"argu"},

{"kb":"révision","fr":"allas"},

{"kb":"révolte","fr":"tanekra"},

{"kb":"révolté","fr":"amenkir"},

{"kb":"révolter","fr":"nker"},

{"kb":"révolution","fr":"tagrawla"},

{"kb":"révolutionnaire","fr":"agrawal"},

{"kb":"révolutionner","fr":"segriwel"},

{"kb":"revue","fr":"amsudegh; tasghunt"},

{"kb":"journal","fr":"tasghunt"},

{"kb":"rez-de-chaussée","fr":"azdir"},

{"kb":"rhume","fr":"adhu"},

{"kb":"riche","fr":"anesbaghur"},

{"kb":"richesse","fr":"tabaghurt"},

{"kb":"rideau","fr":"asaber"},

{"kb":"rien","fr":"acemma"},

{"kb":"rigide","fr":"almam "},

{"kb":"rigidité","fr":"talmamt "},

{"kb":"rigueur","fr":"anghud "},

{"kb":"rime","fr":"tameghrut "},

{"kb":"rimer","fr":"mmeghru"},

{"kb":"rire","fr":"tadhsa; edhs"},

{"kb":"rite","fr":"asekkir"},

{"kb":"rituel","fr":"usekkir"},

{"kb":"rival","fr":"amenzagh"},

{"kb":"rivaliser","fr":"mmenzegh"},

{"kb":"rive","fr":"agwemmadh"},

{"kb":"rixe","fr":"amennugh"},

{"kb":"roi","fr":"agellid"},

{"kb":"rôle","fr":"tamlilt"},

{"kb":"roman","fr":"ungal"},

{"kb":"romancier","fr":"aneggal"},

{"kb":"romanesque","fr":"aneglan"},

{"kb":"ronfler","fr":"jekkhwer"},

{"kb":"ronger","fr":"ghessz"},

{"kb":"rotation","fr":"tamerrawt"},

{"kb":"rouge","fr":"azeggwagh"},

{"kb":"rougeole","fr":"tabuzeggwaght"},

{"kb":"rouleau","fr":"amteltel"},

{"kb":"royauté","fr":"tagelda"},

{"kb":"rue","fr":"aghlad"},

{"kb":"ruine","fr":"akreffu"},

{"kb":"ruiner","fr":"sekreffet "},

{"kb":"rural","fr":"amagam"},

{"kb":"rythme","fr":"anya"},

{"kb":"s'asseoir","fr":"qim"},

{"kb":"saboter","fr":"sfata"},

{"kb":"saboteur","fr":"anesfala"},

{"kb":"sac","fr":"aghellab"},

{"kb":"sacré","fr":"ughris; ghuded"},

{"kb":"sacrifice","fr":"tagherwast"},

{"kb":"sage","fr":"amusnaw"},

{"kb":"sage-femme","fr":"tamessirut"},

{"kb":"sagesse","fr":"tamusni"},

{"kb":"sain","fr":"amalzay"},

{"kb":"saisir","fr":"ettef"},

{"kb":"saison","fr":"tasemhuyt"},

{"kb":"salaire","fr":"aghrud"},

{"kb":"salarié","fr":"ameghrad"},

{"kb":"sale","fr":"amerku"},

{"kb":"sale","fr":"rku"},

{"kb":"saleté","fr":"ammus"},

{"kb":"salir","fr":"sserku"},

{"kb":"salive","fr":"tisusaf"},

{"kb":"salle","fr":"tazeqqa"},

{"kb":"salon","fr":"tamesrit"},

{"kb":"saluer","fr":"zul"},

{"kb":"salut","fr":"azul"},

{"kb":"samedi","fr":"sed"},

{"kb":"sanction","fr":"tafgurt"},

{"kb":"sanctionner","fr":"sufger"},

{"kb":"sang","fr":"idim"},

{"kb":"sanglier","fr":"ilef"},

{"kb":"sanglot","fr":"ameddjed"},

{"kb":"sangloter","fr":"meddjed"},

{"kb":"sanitaire","fr":"adawsan"},

{"kb":"sans","fr":"war"},

{"kb":"sans issue","fr":"aghalad"},

{"kb":"santé","fr":"tazmart"},

{"kb":"satellite","fr":"agensa"},

{"kb":"satisfaction","fr":"asgiwen"},

{"kb":"satisfaire","fr":"sgiwen"},

{"kb":"saturation","fr":"assudhedh"},

{"kb":"saturer","fr":"ssudhedh"},

{"kb":"saut","fr":"andar"},

{"kb":"sauter","fr":"nder"},

{"kb":"sauterelle","fr":"abszisz"},

{"kb":"savant","fr":"amassan"},

{"kb":"savoir","fr":"tamusni"},

{"kb":"savoir","fr":"issin"},

{"kb":"sceau","fr":"azwil"},

{"kb":"scène","fr":"asayes"},

{"kb":"scène","fr":"ansa"},

{"kb":"schéma","fr":"azenzigh"},

{"kb":"schème","fr":"askim"},

{"kb":"science","fr":"tussna"},

{"kb":"scientifique","fr":"ussnan"},

{"kb":"scintillement","fr":"acrureq"},

{"kb":"scintiller","fr":"crureq"},

{"kb":"scolaire","fr":"aghurbiz"},

{"kb":"scolarisation","fr":"asghurbez"},

{"kb":"scolariser","fr":"sghurbez"},

{"kb":"scorpion","fr":"tighirdemt"},

{"kb":"scout","fr":"amnir"},

{"kb":"scoutisme","fr":"tamennirt"},

{"kb":"sculpter","fr":"srem"},

{"kb":"sculpteur","fr":"asreqqat"},

{"kb":"sculpture","fr":"tasreghta"},

{"kb":"séance","fr":"taneqqimut"},

{"kb":"sec","fr":"aquran"},

{"kb":"sécession","fr":"taszlit"},

{"kb":"sécessionniste","fr":"imszel"},

{"kb":"sécher","fr":"qqar"},

{"kb":"secondaire","fr":"ussin"},

{"kb":"seconde","fr":"tisint"},

{"kb":"secouer","fr":"slummec"},

{"kb":"secourir","fr":"ellel"},

{"kb":"secours","fr":"talilt"},

{"kb":"secousse","fr":"angiggi"},

{"kb":"secret","fr":"ufur"},

{"kb":"secrétaire","fr":"amaray"},

{"kb":"secrétariat","fr":"tamarit"},

{"kb":"secteur","fr":"agzum"},

{"kb":"section","fr":"tigezmi"},

{"kb":"sécurité","fr":"taghellist"},

{"kb":"sédiment","fr":"abaligh"},

{"kb":"séducteur","fr":"amalghad"},

{"kb":"séduction","fr":"alghad"},

{"kb":"séduire","fr":"lghed"},

{"kb":"segment","fr":"ighil"},

{"kb":"segmentaire","fr":"amessaghil"},

{"kb":"segmenter","fr":"ssighel"},

{"kb":"ségrégation","fr":"asnuhyu"},

{"kb":"sein","fr":"tabbuct"},

{"kb":"sel","fr":"tisent"},

{"kb":"sélection","fr":"tafrant"},

{"kb":"self","fr":"tumast"},

{"kb":"selle","fr":"tabarda"},

{"kb":"semaine","fr":"imalas"},

{"kb":"sembler","fr":"rwes"},

{"kb":"semelle","fr":"timsilt"},

{"kb":"semestre","fr":"amesdhis"},

{"kb":"séminaire","fr":"tamedrut"},

{"kb":"sémiologie","fr":"tasendugemt"},

{"kb":"sens","fr":"anamek"},

{"kb":"sensation","fr":"aferra"},

{"kb":"sensible","fr":"anferray"},

{"kb":"sentier","fr":"tagharast"},

{"kb":"sentiment","fr":"afra"},

{"kb":"sentimental","fr":"anafray"},

{"kb":"sentinelle","fr":"amdhaf"},

{"kb":"sentir","fr":"fruy"},

{"kb":"séparation","fr":"asengara"},

{"kb":"séparer","fr":"sengari"},

{"kb":"sept","fr":"sa"},

{"kb":"septembre","fr":"cutenbir"},

{"kb":"séquelle","fr":"azemmul"},

{"kb":"séquence","fr":"tagzumt"},

{"kb":"série","fr":"amazrar"},

{"kb":"sérieux","fr":"amaglay"},

{"kb":"sérieux","fr":"gli"},

{"kb":"sérieux","fr":"agella"},

{"kb":"serment","fr":"tagallit"},

{"kb":"serpe","fr":"amger"},

{"kb":"serrage","fr":"assas"},

{"kb":"serrer","fr":"uss"},

{"kb":"service","fr":"tawalt"},

{"kb":"service","fr":"ameszlu"},

{"kb":"servir","fr":"ssulet"},

{"kb":"serviteur","fr":"asekkiw"},

{"kb":"session","fr":"taglellit"},

{"kb":"seuil","fr":"tamdert"},

{"kb":"sevrage","fr":"ajummey"},

{"kb":"sexe","fr":"tazaka"},

{"kb":"sexualité","fr":"tuzzuft"},

{"kb":"sexuel","fr":"azfi"},

{"kb":"si","fr":"lammer"},

{"kb":"siège","fr":"asutel"},

{"kb":"sieste","fr":"aqeggel"},

{"kb":"sieste","fr":"qeggel"},

{"kb":"sigle","fr":"tanselfast"},

{"kb":"signal","fr":"tamuli"},

{"kb":"signature","fr":"takbabt"},

{"kb":"signe","fr":"tadugamt"},

{"kb":"signer","fr":"zmel"},

{"kb":"signifier","fr":"namek"},

{"kb":"silence","fr":"tasusmi"},

{"kb":"silencieux","fr":"asusam"},

{"kb":"silencieux","fr":"bbekbek"},

{"kb":"silhouette","fr":"aszulg"},

{"kb":"sillon","fr":"adherf"},

{"kb":"simple","fr":"afrari"},

{"kb":"simplicité","fr":"tanefrart"},

{"kb":"simulation","fr":"assulu"},

{"kb":"sincère","fr":"amaglay"},

{"kb":"sincérité","fr":"agella"},

{"kb":"singe","fr":"ibki"},

{"kb":"singulier","fr":"asuf"},

{"kb":"sinon","fr":"mulac"},

{"kb":"sirop","fr":"iszem"},

{"kb":"situation","fr":"asurs"},

{"kb":"six","fr":"seddis"},

{"kb":"sketch","fr":"tafghult"},

{"kb":"sociabilité","fr":"timettiwt"},

{"kb":"sociable","fr":"amtiw"},

{"kb":"social","fr":"ametti"},

{"kb":"socialisation","fr":"asemtiw"},

{"kb":"socialisme","fr":"tanemla"},

{"kb":"socialiste","fr":"anemlay"},

{"kb":"société","fr":"timetti"},

{"kb":"sociologie","fr":"timettisent"},

{"kb":"soeur","fr":"weltma"},

{"kb":"soif","fr":"fad"},

{"kb":"soif","fr":"effad"},

{"kb":"soigner","fr":"dawi"},

{"kb":"soir","fr":"tameddit"},

{"kb":"soldat","fr":"aserdas"},

{"kb":"soleil","fr":"ittij"},

{"kb":"solidaire","fr":"amsetla"},

{"kb":"solidaire","fr":"msetlel"},

{"kb":"solidarité","fr":"tamsetla"},

{"kb":"solitude","fr":"tansuft"},

{"kb":"solution","fr":"tifrat"},

{"kb":"somme","fr":"timernit"},

{"kb":"sommeil","fr":"idhes"},

{"kb":"sommeiller","fr":"nuddem"},

{"kb":"sommet","fr":"takyut"},

{"kb":"sommier","fr":"alektu"},

{"kb":"son","fr":"imesli"},

{"kb":"sondage","fr":"asemmad"},

{"kb":"sonner","fr":"serser"},

{"kb":"sorcier","fr":"imhergi"},

{"kb":"sortie","fr":"tufgha"},

{"kb":"sortir","fr":"effegh"},

{"kb":"sot","fr":"abuhal"},

{"kb":"sou","fr":"asurdhi"},

{"kb":"souci","fr":"taremmight"},

{"kb":"soucier","fr":"rmegh"},

{"kb":"soucoupe","fr":"taghezzalt"},

{"kb":"souffler","fr":"sudh"},

{"kb":"souffrance","fr":"angaz"},

{"kb":"souffrir","fr":"ngez"},

{"kb":"souhaiter","fr":"ghzel"},

{"kb":"souiller","fr":"ssimes"},

{"kb":"soulever","fr":"rfed"},

{"kb":"souligner","fr":"derrer"},

{"kb":"soumettre","fr":"zzegszen"},

{"kb":"soumis","fr":"azzegszan"},

{"kb":"soupape","fr":"taneffigt"},

{"kb":"souper","fr":"imensi"},

{"kb":"souple","fr":"alwigh"},

{"kb":"souple","fr":"ilwigh"},

{"kb":"souplesse","fr":"talweght"},

{"kb":"source","fr":"aghbalu"},

{"kb":"sourcil","fr":"timmi"},

{"kb":"sourire","fr":"acmumeh"},

{"kb":"sourire","fr":"cmumeh"},

{"kb":"souris","fr":"agherda"},

{"kb":"sous-développé","fr":"agenszu"},

{"kb":"sous-développement","fr":"taggunszit"},

{"kb":"sous-marin","fr":"tanettabt"},

{"kb":"soutenir","fr":"kbel"},

{"kb":"soutien","fr":"akbal"},

{"kb":"souvenir","fr":"aktay"},

{"kb":"souveraineté","fr":"tanaya"},

{"kb":"speaker","fr":"anerday"},

{"kb":"spécial","fr":"uslig"},

{"kb":"spécialisation","fr":"asmuzzeg"},

{"kb":"spécialiste","fr":"amazzag"},

{"kb":"spécialité","fr":"tamazzagt"},

{"kb":"spécificité","fr":"tulmist"},

{"kb":"spécifique","fr":"ulmis"},

{"kb":"spectacle","fr":"ahanay"},

{"kb":"spectateur","fr":"ameshanay"},

{"kb":"sphère","fr":"tabluleght"},

{"kb":"spirale","fr":"tagriwelt"},

{"kb":"sport","fr":"Addal"},

{"kb":"sportif","fr":"anAddal"},

{"kb":"squelette","fr":"taghessa"},

{"kb":"stabilité","fr":"Addeki"},

{"kb":"stable","fr":"imedki"},

{"kb":"stade","fr":"tirmelt"},

{"kb":"stage","fr":"tannant"},

{"kb":"stagiaire","fr":"amanun"},

{"kb":"stagnant","fr":"glugel"},

{"kb":"stagnation","fr":"aglugel"},

{"kb":"standard","fr":"ameslugen"},

{"kb":"standardisation","fr":"aslugen"},

{"kb":"station","fr":"taghsert"},

{"kb":"statique","fr":"imezgi"},

{"kb":"statistique","fr":"tAddadant"},

{"kb":"statistique","fr":"Addadan"},

{"kb":"statue","fr":"asebdad"},

{"kb":"statut","fr":"aszayer"},

{"kb":"steppe","fr":"azawegh"},

{"kb":"stérile","fr":"takubit"},

{"kb":"stimulus","fr":"amesday"},

{"kb":"stockage","fr":"aselghes"},

{"kb":"stocker","fr":"sguder"},

{"kb":"stratégie","fr":"tasudest"},

{"kb":"strophe","fr":"taseddart"},

{"kb":"structuration","fr":"asekkiw"},

{"kb":"structure","fr":"tiskiwet"},

{"kb":"stupide","fr":"abuhlal"},

{"kb":"stupidité","fr":"tiiugent"},

{"kb":"style","fr":"aghanib"},

{"kb":"subjectif","fr":"unmas"},

{"kb":"subjectivité","fr":"tunmasit"},

{"kb":"sublimation","fr":"asuyella"},

{"kb":"submerger","fr":"sder"},

{"kb":"suborner","fr":"sellemlem"},

{"kb":"substance","fr":"asentel"},

{"kb":"substituer","fr":"smelsi"},

{"kb":"substitution","fr":"asmelsi"},

{"kb":"subvention","fr":"asekbel"},

{"kb":"succéder","fr":"semmezri"},

{"kb":"succès","fr":"tarennawet"},

{"kb":"succession","fr":"amsedfar"},

{"kb":"sucer","fr":"summ"},

{"kb":"sud","fr":"anszul"},

{"kb":"sueur","fr":"tidi"},

{"kb":"suffire","fr":"gdez"},

{"kb":"suffisamment","fr":"ddeqs"},

{"kb":"suffisance","fr":"agdaz"},

{"kb":"suffisant","fr":"amegdaz"},

{"kb":"suggérer","fr":"wszedh"},

{"kb":"suggestion","fr":"tiszutt"},

{"kb":"suicide","fr":"tunghiman"},

{"kb":"suie","fr":"abukh"},

{"kb":"suif","fr":"tadunt"},

{"kb":"suinter","fr":"sti"},

{"kb":"suite","fr":"a sartu"},

{"kb":"suivi","fr":"adhfar"},

{"kb":"suivre","fr":"dhfar"},

{"kb":"sujet","fr":"ameggay"},

{"kb":"sujet","fr":"afdes"},

{"kb":"sujet","fr":"asentel"},

{"kb":"sultan","fr":"agellid"},

{"kb":"superficie","fr":"tajumma"},

{"kb":"superficiel","fr":"ajumman"},

{"kb":"supérieur","fr":"imineg"},

{"kb":"supériorité","fr":"timinegt"},

{"kb":"supplément","fr":"tasitit"},

{"kb":"supplémentaire","fr":"imsiti"},

{"kb":"supplier","fr":"ggeymen"},

{"kb":"support","fr":"asegur"},

{"kb":"supporter","fr":"bib"},

{"kb":"supposer","fr":"urdu"},

{"kb":"supposition","fr":"turdut"},

{"kb":"sur","fr":"s ufella"},

{"kb":"surcharge","fr":"alebben"},

{"kb":"surcharger","fr":"lebben"},

{"kb":"surdoué","fr":"asemdan"},

{"kb":"surface","fr":"tasna"},

{"kb":"surtout","fr":"abaada"},

{"kb":"surveillance","fr":"taassast"},

{"kb":"surveillant","fr":"aassas"},

{"kb":"surveiller","fr":"aass"},

{"kb":"syllabe","fr":"tunttiqt"},

{"kb":"symbole","fr":"azamul"},

{"kb":"symbolique","fr":"azamal"},

{"kb":"symétrie","fr":"tisit"},

{"kb":"symétrique","fr":"amisi"},

{"kb":"sympathie","fr":"arakab"},

{"kb":"symposium","fr":"amedru"},

{"kb":"synchronique","fr":"agdakud"},

{"kb":"syndical","fr":"anmali"},

{"kb":"syndicaliste","fr":"anmalay"},

{"kb":"syndicat","fr":"anmalu"},

{"kb":"syntaxe","fr":"taseddast"},

{"kb":"synthèse","fr":"tasemlilt"},

{"kb":"synthétique","fr":"asemlal"},

{"kb":"système","fr":"anagraw"},

{"kb":"systémique","fr":"unegriw"},

{"kb":"table","fr":"tatabelt; agbur"},

{"kb":"tableau","fr":"tafelwit"},

{"kb":"tablier","fr":"tabanka"},

{"kb":"tache","fr":"ccama"},

{"kb":"tâche","fr":"tizziwet"},

{"kb":"tactique","fr":"tillit"},

{"kb":"taille","fr":"tiddi"},

{"kb":"tailleur","fr":"agennay"},

{"kb":"tambour","fr":"agwal"},

{"kb":"tambourin","fr":"allun"},

{"kb":"tamisage","fr":"ifif"},

{"kb":"tamiser","fr":"seff"},

{"kb":"tante","fr":"khalti"},

{"kb":"tas","fr":"smidegh"},

{"kb":"tâtonnement","fr":"aferfed"},

{"kb":"tâtonner","fr":"ferfed"},

{"kb":"taudis","fr":"agwerbi"},

{"kb":"taureau","fr":"aajmi"},

{"kb":"tautologie","fr":"tagdawalt"},

{"kb":"tautologique","fr":"agdawal"},

{"kb":"taverne","fr":"tsbarna"},

{"kb":"taxe","fr":"taszettatt"},

{"kb":"taxonomie","fr":"tamessartut"},

{"kb":"tel","fr":"am"},

{"kb":"télécommande","fr":"tilinzedh"},

{"kb":"télécopieur","fr":"tilizen"},

{"kb":"téléphone","fr":"tilighri"},

{"kb":"télévision","fr":"tiliszri"},

{"kb":"témoignage","fr":"taggwa"},

{"kb":"témoin","fr":"anagi"},

{"kb":"température","fr":"taszghelt"},

{"kb":"temple","fr":"afakan"},

{"kb":"temps","fr":"akud"},

{"kb":"tendance","fr":"anezzugh"},

{"kb":"tendre","fr":"nzegh"},

{"kb":"tendresse","fr":"amesmullu"},

{"kb":"ténèbres","fr":"tillas"},

{"kb":"tension","fr":"aftagh"},

{"kb":"terme","fr":"awttu"},

{"kb":"terminer","fr":"ssemdu"},

{"kb":"terrasse","fr":"azugh"},

{"kb":"terre","fr":"akal"},

{"kb":"terreur","fr":"aramagh"},

{"kb":"terrible","fr":"amsiwef"},

{"kb":"terroriser","fr":"sermegh"},

{"kb":"terrorisme","fr":"taremgha"},

{"kb":"terroriste","fr":"aremmagh"},

{"kb":"tesson","fr":"aceqquf"},

{"kb":"test","fr":"asadez"},

{"kb":"tester","fr":"udez"},

{"kb":"tête","fr":"aqerru"},

{"kb":"tétée","fr":"iziri"},

{"kb":"téter","fr":"ttedh"},

{"kb":"texte","fr":"adhris"},

{"kb":"théâtre","fr":"amezgun"},

{"kb":"théière","fr":"abaqraj"},

{"kb":"thème","fr":"asentel"},

{"kb":"théoricien","fr":"ameszray"},

{"kb":"théorie","fr":"tiszri"},

{"kb":"théorique","fr":"aszrayan"},

{"kb":"thèse","fr":"agemmir"},

{"kb":"tige","fr":"agheddu"},

{"kb":"timide","fr":"ameddaray"},

{"kb":"timidité","fr":"tiddurit"},

{"kb":"tintamarre","fr":"dderdih"},

{"kb":"tinter","fr":"tctcentcen"},

{"kb":"tinter","fr":"stcentcen"},

{"kb":"tique","fr":"aselluf"},

{"kb":"tirage","fr":"alday"},

{"kb":"tirage-au-sort","fr":"taseqqart"},

{"kb":"tiroir","fr":"akafu"},

{"kb":"tissage","fr":"aszetta"},

{"kb":"tisser","fr":"eszdh"},

{"kb":"tissu","fr":"ccac"},

{"kb":"titre","fr":"azwel"},

{"kb":"toi","fr":"kem"},

{"kb":"toi","fr":"ketctc "},

{"kb":"toilettes","fr":"adbuz"},

{"kb":"tolérance","fr":"amazzu"},

{"kb":"tolérant","fr":"anmazzu"},

{"kb":"tomber","fr":"ghli"},

{"kb":"tomber","fr":"sderbez"},

{"kb":"tome","fr":"asunedh"},

{"kb":"topologie","fr":"tasnidegt"},

{"kb":"topologique","fr":"asnidgan"},

{"kb":"tortue","fr":"afkrun"},

{"kb":"torture","fr":"adagasz"},

{"kb":"torturer","fr":"dgesz"},

{"kb":"total","fr":"aghrud"},

{"kb":"totaliser","fr":"seghred"},

{"kb":"totalité","fr":"teghred"},

{"kb":"touche","fr":"tanalit"},

{"kb":"toucher","fr":"nnal"},

{"kb":"toujours","fr":"lebda"},

{"kb":"tour-de-rôle","fr":"tawala"},

{"kb":"tourisme","fr":"tamerrit"},

{"kb":"touriste","fr":"amerray"},

{"kb":"tourner","fr":"dewwar"},

{"kb":"tous","fr":"akw"},

{"kb":"tout","fr":"akw"},

{"kb":"trace","fr":"tamrirt"},

{"kb":"tradition","fr":"ansay"},

{"kb":"traditionaliste","fr":"asemmensay"},

{"kb":"traditionnel","fr":"amensay"},

{"kb":"traducteur","fr":"anemmegrud"},

{"kb":"traduction","fr":"tasuqelt"},

{"kb":"traduire","fr":"ssuqel"},

{"kb":"trafic","fr":"asetti"},

{"kb":"trafiquer","fr":"setti"},

{"kb":"tragédie","fr":"takesna"},

{"kb":"trahir","fr":"kerres"},

{"kb":"trahison","fr":"tikerras"},

{"kb":"traîneau","fr":"tabuskerkart"},

{"kb":"trait","fr":"asenzegh"},

{"kb":"trait","fr":"ajerrid"},

{"kb":"traite","fr":"aghan"},

{"kb":"traiter","fr":"sniret"},

{"kb":"trame","fr":"tilmi"},

{"kb":"tranche","fr":"tafrast"},

{"kb":"tranquilles","fr":"amlummet"},

{"kb":"transcendance","fr":"tamyurt"},

{"kb":"transcendant","fr":"amyuran"},

{"kb":"transcender","fr":"myur"},

{"kb":"transfert","fr":"asmutti"},

{"kb":"transformation","fr":"asseghwel"},

{"kb":"transformer","fr":"sseghwel"},

{"kb":"transitif","fr":"asendhan"},

{"kb":"transition","fr":"andhan"},

{"kb":"transitivité","fr":"asendhen"},

{"kb":"transmettre","fr":"ssiwedh"},

{"kb":"transmission","fr":"asiwedh"},

{"kb":"transparence","fr":"tafrawent"},

{"kb":"transparent","fr":"amessewsagh"},

{"kb":"transport","fr":"amesni"},

{"kb":"transporter","fr":"mesni"},

{"kb":"transporteur","fr":"amesnay"},

{"kb":"transposer","fr":"sgelt"},

{"kb":"transversal","fr":"alwegdis"},

{"kb":"travail","fr":"amahil"},

{"kb":"travailler","fr":"mahel"},

{"kb":"travailleur","fr":"anmahal"},

{"kb":"travaux publics","fr":"imuhal izuyaz"},

{"kb":"travers","fr":"bellegdis"},

{"kb":"traverser","fr":"zger"},

{"kb":"trébucher","fr":"hdiddi "},

{"kb":"trépigner","fr":"sdikki"},

{"kb":"agé","fr":"acaraf"},

{"kb":"trésor","fr":"agerruj"},

{"kb":"trésorier","fr":"aneszraf"},

{"kb":"tri","fr":"afran"},

{"kb":"triade","fr":"tamekratt"},

{"kb":"tricher","fr":"knedh"},

{"kb":"tricherie","fr":"takennatt"},

{"kb":"trier","fr":"fren"},

{"kb":"triomphateur","fr":"analak"},

{"kb":"triompher","fr":"alek"},

{"kb":"triste","fr":"afughal"},

{"kb":"triste","fr":"fughel"},

{"kb":"tristesse","fr":"tafughalt"},

{"kb":"trois","fr":"kradh"},

{"kb":"tronc","fr":"tidri"},

{"kb":"trottiner","fr":"buhef"},

{"kb":"trouble","fr":"cwal"},

{"kb":"troubler","fr":"cebbwel"},

{"kb":"troupe","fr":"takrut"},

{"kb":"troupeau","fr":"taguzdit"},

{"kb":"turbulence","fr":"agadh"},

{"kb":"tutelle","fr":"tamadhirt"},

{"kb":"type","fr":"anaw"},

{"kb":"typologie","fr":"tanawsent"},

{"kb":"tyran","fr":"aseddanku"},

{"kb":"tyrannie","fr":"tadankit"},

{"kb":"unanime","fr":"anemzal"},

{"kb":"unanimité","fr":"s unemzel"},

{"kb":"uniforme","fr":"asurad"},

{"kb":"uniforme","fr":"sured"},

{"kb":"union","fr":"tadukli"},

{"kb":"unique","fr":"asuf"},

{"kb":"unité","fr":"aferdis"},

{"kb":"univers","fr":"ameghrad"},

{"kb":"universitaire","fr":"asdawan"},

{"kb":"université","fr":"tasdawit"},

{"kb":"univoque","fr":"aynazal"},

{"kb":"urbanisation","fr":"asgezdu"},

{"kb":"usage","fr":"asemdu"},

{"kb":"user","fr":"semdu"},

{"kb":"ustensile","fr":"afecku"},

{"kb":"utilisation","fr":"aseqdec"},

{"kb":"utiliser","fr":"seqdec"},

{"kb":"utopie","fr":"amlalad"},

{"kb":"vacances","fr":"amaris"},

{"kb":"vacances","fr":"smires"},

{"kb":"vacancier","fr":"asemmares"},

{"kb":"vacarme","fr":"tcaqlala"},

{"kb":"vacarme","fr":"tctceqle"},

{"kb":"vaccin","fr":"tagezzayt"},

{"kb":"vacciner","fr":"gzi"},

{"kb":"vagabondage","fr":"timeckit"},

{"kb":"vague","fr":"tamdeswelt"},

{"kb":"vain","fr":"abennan; bennen"},

{"kb":"vaincu","fr":"amerni"},

{"kb":"vainqueur","fr":"amernay"},

{"kb":"vaisselle","fr":"iceqduren"},

{"kb":"valable","fr":"ameddafu; ddufet"},

{"kb":"valeur","fr":"azal"},

{"kb":"validation","fr":"aseghbel"},

{"kb":"valide","fr":"aghbal"},

{"kb":"validité","fr":"taneghbalt"},

{"kb":"valorisation","fr":"azzewzel"},

{"kb":"valoriser","fr":"zzewzel"},

{"kb":"vantard","fr":"afeccac"},

{"kb":"vanter","fr":"tszukkhu"},

{"kb":"variable","fr":"amutti"},

{"kb":"varié","fr":"andi"},

{"kb":"variété","fr":"tanda; irzi"},

{"kb":"végétal","fr":"ticekt"},

{"kb":"vendeur","fr":"imzenzi"},

{"kb":"vendredi","fr":"sem"},

{"kb":"vengeance","fr":"ttsar"},

{"kb":"vent","fr":"adhu"},

{"kb":"verbe","fr":"amyag"},

{"kb":"vérification","fr":"adAddet"},

{"kb":"vérifier","fr":"dAddet"},

{"kb":"vérité","fr":"tidets"},

{"kb":"vers","fr":"afir; ar"},

{"kb":"vertèbre","fr":"tigzit"},

{"kb":"vertical","fr":"aratak"},

{"kb":"vertu","fr":"taszult"},

{"kb":"vertueux","fr":"amaszul"},

{"kb":"vessie","fr":"tambult"},

{"kb":"vestige","fr":"agaluz"},

{"kb":"vétérinaire","fr":"abidhar"},

{"kb":"vibration","fr":"tasmamayt"},

{"kb":"vibrer","fr":"smami"},

{"kb":"vice","fr":"aner"},

{"kb":"vice","fr":"anamzul n"},

{"kb":"vicieux","fr":"amunner"},

{"kb":"victime","fr":"taghtest"},

{"kb":"victoire","fr":"tarennawt"},

{"kb":"vide","fr":"ilem"},

{"kb":"vider","fr":"seyru"},

{"kb":"vie","fr":"tudert"},

{"kb":"vieux","fr":"acaraf"},

{"kb":"vieux","fr":"ccuref"},

{"kb":"vilain","fr":"ucmit"},

{"kb":"villa","fr":"tadwarit"},

{"kb":"village","fr":"tAddart"},

{"kb":"violence","fr":"takritt"},

{"kb":"violent","fr":"amekridh"},

{"kb":"violer","fr":"crem"},

{"kb":"virage","fr":"aghayan"},

{"kb":"virgule","fr":"ticcert"},

{"kb":"vis","fr":"tafetlit"},

{"kb":"vision","fr":"asekkud"},

{"kb":"visite","fr":"tirzi"},

{"kb":"visiter","fr":"rzef"},

{"kb":"visiteur","fr":"anerzuf"},

{"kb":"vite","fr":"rured"},

{"kb":"vite","fr":"ghiwel"},

{"kb":"vitesse","fr":"arured"},

{"kb":"vivant","fr":"amuddir"},

{"kb":"karim","fr":"karim danoun"},

{"kb":"vivre","fr":"idir"},

{"kb":"vocal","fr":"taghwect"},

{"kb":"vocation","fr":"tamghit"},

{"kb":"voeu","fr":"arid"},

{"kb":"voiler","fr":"sberber"},

{"kb":"voisin","fr":"anarag"},

{"kb":"voler","fr":"akwer"},

{"kb":"voleur","fr":"amakwar"},

{"kb":"volontaire","fr":"amaghzal"},

{"kb":"volontariat","fr":"tamaghzelt"},

{"kb":"volonté","fr":"aqqas"},

{"kb":"volontiers","fr":"wellen"},

{"kb":"volume","fr":"ablegh"},

{"kb":"volume","fr":"asunedh"},

{"kb":"votant","fr":"adeqqar"},

{"kb":"vote","fr":"adghar"},

{"kb":"voter","fr":"dghar"},

{"kb":"vous","fr":"kunwi "},

{"kb":"voyage","fr":"asikel"},

{"kb":"voyager","fr":"sikel"},

{"kb":"voyageur","fr":"amesikkel"},

{"kb":"voyelle","fr":"tighri"},

{"kb":"vraisemblable","fr":"amzun"},

{"kb":"vraisemblance","fr":"tamzunit"},

{"kb":"vulgaire","fr":"anafsas"},

{"kb":"vulgarisation","fr":"assefsus"},

{"kb":"vulgariser","fr":"ssifsus"},

{"kb":"wc","fr":"abduz"},

{"kb":"week-end","fr":"taggara n ddurt"},

{"kb":"xénophobie","fr":"tawefmugazt"},

{"kb":"zèbre","fr":"aghyul llekhla"},

{"kb":"zéro","fr":"ilem"},

{"kb":"zest","fr":"tammut"},

{"kb":"zézaiement","fr":"azertel"},

{"kb":"zone","fr":"azun"}

  ] ;

});

