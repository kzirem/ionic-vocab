//angular.module('starter.controllers', [])
angular.module( 'starter.controllers', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
 
// les autres fonctions

})

.controller('AlphaCtrl', function($scope, $ionicModal, $timeout) {
 
$scope.alphabets = 
    [
    {
    "latin":"A",
    "image":"A",
    "Prononciation":"Prononciation entre le 'a' et le 'e' français comme 2 'a' qui se suivent",
    "exemple":"azger (boeuf)"

     },
     {
    "latin":"B",
    "image":"B",
    "Prononciation":"Se prononce 'b' ou 'v'",
    "exemple":"bibb (porter sur le dos)"
     },
     {
    "latin":"C",
    "Prononciation":" Se prononce 'ch'",
    "exemple":"claḍa (salade)"
     },
     {
    "latin":"č",
    "image":"C2",
    "Prononciation":" Se prononce 'tch'",
    "exemple":"ččar (remplir)"
     },
     {
    "latin":"D",
    "image":"D",
    "Prononciation":" Se prononce 'd' ou 'th' comme l'anglais 'this'",
    "exemple":"dexxan (fumée), dagi (ici)"
     },
     

  ];
})

/////// alphabet 


//// Dictionnaire 

.controller('DicoCtrl', function($scope) {
  
$scope.ShowA = function() {
     
    $scope.words = 
    [
    {
    "Fr":"À (lieu)",
    "Kb":"Di"
  },
  {
    "Fr":"Â(temps)",
    "Kb":"Ar"
  },
  {
    "Fr":"A bientôt",
    "Kb":"Ar ticki"
  },
  {
    "Fr":"Abaissement",
    "Kb":"Asider"
  },
  {
    "Fr":"Abaisser",
    "Kb":"Sider"
  },
  {
    "Fr":"Abandon",
    "Kb":"Tafuli"
  },
  {
    "Fr":"Abandonner",
    "Kb":"Eddj"
  },
  {
    "Fr":"Abaque",
    "Kb":"Tafelwit"
  },
  {
    "Fr":"Abasourdir",
    "Kb":"Suusszegw"
  },
  {
    "Fr":"Abattre (tuer)",
    "Kb":"Engh"
  },
  {
    "Fr":"Abcès",
    "Kb":"Timmist"
  },
  {
    "Fr":"Abeille",
    "Kb":"Tizizwit (Tizizwa )"
  },
  {
    "Fr":"Aboiement",
    "Kb":"Aseglef"
  },
  {
    "Fr":"Abolition",
    "Kb":"Isir"
  },
  {
    "Fr":"Abondant",
    "Kb":"Tugwta"
  },
  {
    "Fr":"Abonder",
    "Kb":"Yugwet"
  },
  {
    "Fr":"Abord (d’)",
    "Kb":"S tizar"
  },
  {
    "Fr":"Aboutir",
    "Kb":"Imighen"
  },
  {
    "Fr":"Aboyer",
    "Kb":"Seglef"
  },
  {
    "Fr":"Abreuver",
    "Kb":"Sessu"
  },
  {
    "Fr":"Abréviation",
    "Kb":"Tazegzilt"
  },
  {
    "Fr":"Abri",
    "Kb":"Asqif"
  },
  {
    "Fr":"Abriter",
    "Kb":"Effer"
  },
  {
    "Fr":"Abriter (s’)",
    "Kb":"Effer"
  },
  {
    "Fr":"Abscisse",
    "Kb":"Tanezgumt"
  },
  {
    "Fr":"Absence",
    "Kb":"Iba (ibaten)"
  },
  {
    "Fr":"Absent",
    "Kb":"Anabay"
  },
  {
    "Fr":"Absenter (s’)",
    "Kb":"Igwdhel"
  },
  {
    "Fr":"Absinthe",
    "Kb":"Ccih"
  },
  {
    "Fr":"Absolu",
    "Kb":"Amagaz"
  },
  {
    "Fr":"Absorbant",
    "Kb":"Amsum"
  },
  {
    "Fr":"Absorber",
    "Kb":"Issum"
  },
  {
    "Fr":"Abstenir (s’)",
    "Kb":"Ugel"
  },
  {
    "Fr":"Abstention",
    "Kb":"Aggal (iggalen)"
  },
  {
    "Fr":"Abstraction",
    "Kb":"Tadwant"
  },
  {
    "Fr":"Abstrait",
    "Kb":"Amadwan"
  },
  {
    "Fr":"Absurde",
    "Kb":"Azulal"
  },
  {
    "Fr":"Accélérateur",
    "Kb":"Acekkad"
  },
  {
    "Fr":"Accélération",
    "Kb":"Tacekkatt"
  },
  {
    "Fr":"Accélérer",
    "Kb":"Cekked"
  },
  {
    "Fr":"Accent",
    "Kb":"Aghdebbu"
  },
  {
    "Fr":"Accentuer",
    "Kb":"Ghdebbu"
  },
  {
    "Fr":"Acceptation",
    "Kb":"Taszayet"
  },
  {
    "Fr":"Accepter",
    "Kb":"Szayet"
  },
  {
    "Fr":"Accès",
    "Kb":"Uduf"
  },
  {
    "Fr":"Accident",
    "Kb":"Asehwa"
  },
  {
    "Fr":"Accommodation",
    "Kb":"Ameckiked"
  },
  {
    "Fr":"Accommoder",
    "Kb":"Meckiked"
  },
  {
    "Fr":"Accompagnateur",
    "Kb":"Amsegli"
  },
  {
    "Fr":"Accompagnement (mus.)",
    "Kb":"Azday"
  },
  {
    "Fr":"Accord",
    "Kb":"Amtawi"
  },
  {
    "Fr":"Accoucher",
    "Kb":"Arew"
  },
  {
    "Fr":"Accoupler",
    "Kb":"Zdi"
  },
  {
    "Fr":"Accrocher",
    "Kb":"Sili"
  },
  {
    "Fr":"Accrocher (s’)",
    "Kb":"Sgenttedh"
  },
  {
    "Fr":"Accroupir (s’)",
    "Kb":"Skuttem"
  },
  {
    "Fr":"Accueil",
    "Kb":"Asnubbeg"
  },
  {
    "Fr":"Accueillir",
    "Kb":"Snubbeg"
  },
  {
    "Fr":"Acculturation",
    "Kb":"Tasemnennayt"
  },
  {
    "Fr":"Accumulation",
    "Kb":"Acellif"
  },
  {
    "Fr":"Accumuler",
    "Kb":"Cellef"
  },
  {
    "Fr":"Accusation",
    "Kb":"Tardayt"
  },
  {
    "Fr":"Accuser",
    "Kb":"Rdu"
  },
  {
    "Fr":"Achat",
    "Kb":"Timesghiwt"
  },
  {
    "Fr":"Acheter",
    "Kb":"Segh"
  },
  {
    "Fr":"Acheteur",
    "Kb":"Amsagh"
  },
  {
    "Fr":"Achever",
    "Kb":"Semdu"
  },
  {
    "Fr":"Acide (adj. N.)",
    "Kb":"Amaghus"
  },
  {
    "Fr":"Acidité",
    "Kb":"Tamaghus"
  },
  {
    "Fr":"Acier",
    "Kb":"Anfed"
  },
  {
    "Fr":"Acoustique(adj.)",
    "Kb":"Asfeldan"
  },
  {
    "Fr":"Acoustique(n.)",
    "Kb":"Tasensflett"
  },
  {
    "Fr":"Acquérir",
    "Kb":"Lummesz"
  },
  {
    "Fr":"Acquittement",
    "Kb":"Asenfu"
  },
  {
    "Fr":"Acquitter",
    "Kb":"Sunfu"
  },
  {
    "Fr":"Acte",
    "Kb":"Tigi"
  },
  {
    "Fr":"Acte notarié",
    "Kb":"Arra (arraten)"
  },
  {
    "Fr":"Acte théÃ¢tre",
    "Kb":"Asekkir"
  },
  {
    "Fr":"Actif",
    "Kb":"Urmid"
  },
  {
    "Fr":"Action",
    "Kb":"Igi (igiten)"
  },
  {
    "Fr":"Actionnaire",
    "Kb":"Anaful (inufal)"
  },
  {
    "Fr":"Activation",
    "Kb":"Asermed"
  },
  {
    "Fr":"Activité",
    "Kb":"Armud (irmad)"
  },
  {
    "Fr":"Actualité",
    "Kb":"Tamirt"
  },
  {
    "Fr":"Actuel",
    "Kb":"Amiran"
  },
  {
    "Fr":"Actuellement",
    "Kb":"Imira"
  },
  {
    "Fr":"Adaptation",
    "Kb":"Amsasa"
  },
  {
    "Fr":"Adapter (s’)",
    "Kb":"Msasa"
  },
  {
    "Fr":"Addition",
    "Kb":"Anerni"
  },
  {
    "Fr":"Additionner",
    "Kb":"Smerni"
  },
  {
    "Fr":"Adepte",
    "Kb":"Anedhfar"
  },
  {
    "Fr":"Adéquat",
    "Kb":"Ameddizi"
  },
  {
    "Fr":"Adhérent",
    "Kb":"Ameltagh"
  },
  {
    "Fr":"Adhérer",
    "Kb":"Ltegh"
  },
  {
    "Fr":"Adhésion",
    "Kb":"Altagh"
  },
  {
    "Fr":"Adieu",
    "Kb":"Asifedh"
  },
  {
    "Fr":"Adjectif",
    "Kb":"Arbib"
  },
  {
    "Fr":"Adjoint",
    "Kb":"Ammazul (immuzal)"
  },
  {
    "Fr":"Admettre",
    "Kb":"Sidemr"
  },
  {
    "Fr":"Administrateur",
    "Kb":"Anedbal"
  },
  {
    "Fr":"Administratif",
    "Kb":"Adeblan"
  },
  {
    "Fr":"Administration",
    "Kb":"Tadbelt"
  },
  {
    "Fr":"Administrer",
    "Kb":"Dbel"
  },
  {
    "Fr":"Admirable",
    "Kb":"Anegraz"
  },
  {
    "Fr":"Admiration",
    "Kb":"Agaraz"
  },
  {
    "Fr":"Admirer",
    "Kb":"Grez"
  },
  {
    "Fr":"Admissible",
    "Kb":"Amsidmer"
  },
  {
    "Fr":"Admission",
    "Kb":"Asidmer"
  },
  {
    "Fr":"Adolescence",
    "Kb":"Tanubi"
  },
  {
    "Fr":"Adolescent",
    "Kb":"Anubi(inuba)"
  },
  {
    "Fr":"Adolescente",
    "Kb":"Tanubi"
  },
  {
    "Fr":"Adopter",
    "Kb":"Zdel"
  },
  {
    "Fr":"Adoption",
    "Kb":"Azdal"
  },
  {
    "Fr":"Adressage",
    "Kb":"Tuzna"
  },
  {
    "Fr":"Adresse",
    "Kb":"Tansa (tansini)"
  },
  {
    "Fr":"Adulte",
    "Kb":"Amengadh"
  },
  {
    "Fr":"Adversaire",
    "Kb":"Afna (ifnayen)"
  },
  {
    "Fr":"Aérer",
    "Kb":"Sbuhru"
  },
  {
    "Fr":"Aéroport",
    "Kb":"Anafag (inufag)"
  },
  {
    "Fr":"Affaiblir",
    "Kb":"Ssumen"
  },
  {
    "Fr":"Affaiblissement",
    "Kb":"Anzaf"
  },
  {
    "Fr":"Affaire",
    "Kb":"Aweszlu (iweszla)"
  },
  {
    "Fr":"Affamé",
    "Kb":"Imellisz"
  },
  {
    "Fr":"Affectif",
    "Kb":"Amurnan"
  },
  {
    "Fr":"Affection",
    "Kb":"Tawernant"
  },
  {
    "Fr":"Affichage",
    "Kb":"Tanezla"
  },
  {
    "Fr":"Affiche",
    "Kb":"Anazul (inuzal)"
  },
  {
    "Fr":"Afficher",
    "Kb":"Snazel"
  },
  {
    "Fr":"Affirmatif",
    "Kb":"Ilaw"
  },
  {
    "Fr":"Affirmation",
    "Kb":"Tilawt"
  },
  {
    "Fr":"Affirmer",
    "Kb":"Ssentem"
  },
  {
    "Fr":"Affixe",
    "Kb":"Awsil"
  },
  {
    "Fr":"Affranchi",
    "Kb":"Aderfi (iderfan)"
  },
  {
    "Fr":"Affranchir",
    "Kb":"Sedref"
  },
  {
    "Fr":"Affronter",
    "Kb":"Sidmer"
  },
  {
    "Fr":"Afin que",
    "Kb":"As"
  },
  {
    "Fr":"Agacer",
    "Kb":"Cettet"
  },
  {
    "Fr":"Ã‚ge",
    "Kb":"Awetay"
  },
  {
    "Fr":"Agenda",
    "Kb":"Tagebburt"
  },
  {
    "Fr":"Agent",
    "Kb":"Ameggi (imegga)"
  },
  {
    "Fr":"Aggravation",
    "Kb":"Asenfuffed"
  },
  {
    "Fr":"Aggraver",
    "Kb":"Senfuffed"
  },
  {
    "Fr":"Agir",
    "Kb":"Eg"
  },
  {
    "Fr":"Agitateur",
    "Kb":"Asmessay"
  },
  {
    "Fr":"Agitation",
    "Kb":"Tasmessit"
  },
  {
    "Fr":"Agiter",
    "Kb":"Smessay"
  },
  {
    "Fr":"Agneau",
    "Kb":"Izimer (izamaren)"
  },
  {
    "Fr":"Agonie",
    "Kb":"Aselqef"
  },
  {
    "Fr":"Agoniser",
    "Kb":"Selqef"
  },
  {
    "Fr":"Agréable",
    "Kb":"Amagraz"
  },
  {
    "Fr":"Agrégation",
    "Kb":"Tasideft"
  },
  {
    "Fr":"Agrégé",
    "Kb":"Amsaduf"
  },
  {
    "Fr":"Agresser",
    "Kb":"Zzernen"
  },
  {
    "Fr":"Agresseur",
    "Kb":"Azernan"
  },
  {
    "Fr":"Agressif",
    "Kb":"Amzernen"
  },
  {
    "Fr":"Agression",
    "Kb":"Tazermant"
  },
  {
    "Fr":"Aide",
    "Kb":"Tallat (tallalin)"
  },
  {
    "Fr":"Aide-mémoire",
    "Kb":"Tallalt n umekti"
  },
  {
    "Fr":"Aider",
    "Kb":"Ellil"
  },
  {
    "Fr":"Aigle",
    "Kb":"Igider"
  },
  {
    "Fr":"Aigu",
    "Kb":"Anamsad"
  },
  {
    "Fr":"Aiguillage",
    "Kb":"Asedhren"
  },
  {
    "Fr":"Aiguille",
    "Kb":"Tisegnit"
  },
  {
    "Fr":"Aiguiser",
    "Kb":"Semsed"
  },
  {
    "Fr":"Ail",
    "Kb":"Tiskert"
  },
  {
    "Fr":"Aile",
    "Kb":"Tiferrets"
  },
  {
    "Fr":"Aimer",
    "Kb":"Ri"
  },
  {
    "Fr":"Aîné",
    "Kb":"Amenzu"
  },
  {
    "Fr":"Air",
    "Kb":"Azwu (izwuten)"
  },
  {
    "Fr":"Air (prendre)",
    "Kb":"Bbuhru"
  },
  {
    "Fr":"Aire",
    "Kb":"Annar (inurar)"
  },
  {
    "Fr":"Ajournement",
    "Kb":"Asmerger"
  },
  {
    "Fr":"Ajourner",
    "Kb":"Smerger"
  },
  {
    "Fr":"Ajouter",
    "Kb":"Sit"
  },
  {
    "Fr":"Ajustement",
    "Kb":"Asgadda"
  },
  {
    "Fr":"Ajuster",
    "Kb":"Sgaddi"
  },
  {
    "Fr":"Album",
    "Kb":"Takalast"
  },
  {
    "Fr":"Alcool",
    "Kb":"Ighisem"
  },
  {
    "Fr":"Alcoolique",
    "Kb":"Aghasam"
  },
  {
    "Fr":"Aléatoire",
    "Kb":"Usamma"
  },
  {
    "Fr":"Alentours",
    "Kb":"Aszi (asziyen)"
  },
  {
    "Fr":"Algorithme",
    "Kb":"Awarzim"
  },
  {
    "Fr":"Algorithmique",
    "Kb":"Tasnurzimt"
  },
  {
    "Fr":"Aliénation",
    "Kb":"Takufda"
  },
  {
    "Fr":"Aliéné (être)",
    "Kb":"Kuffed"
  },
  {
    "Fr":"Aliéner",
    "Kb":"Skuffed"
  },
  {
    "Fr":"Aliment",
    "Kb":"Utctci"
  },
  {
    "Fr":"Allaitement",
    "Kb":"Asuttedh"
  },
  {
    "Fr":"Allaiter",
    "Kb":"Suttedh"
  },
  {
    "Fr":"Alléger",
    "Kb":"Sifsus"
  },
  {
    "Fr":"Aller",
    "Kb":"Ruh"
  },
  {
    "Fr":"Alliance",
    "Kb":"Tamsisit"
  },
  {
    "Fr":"Allié",
    "Kb":"Amsisa (imsisan)"
  },
  {
    "Fr":"Allonger",
    "Kb":"Seghwsef"
  },
  {
    "Fr":"Allumage",
    "Kb":"Asaghay"
  },
  {
    "Fr":"Allumer",
    "Kb":"Ssagh"
  },
  {
    "Fr":"Allumette",
    "Kb":"Luqid"
  },
  {
    "Fr":"Allure",
    "Kb":"Sszarif"
  },
  {
    "Fr":"Alors",
    "Kb":"Ihi"
  },
  {
    "Fr":"Alors (ensuite)",
    "Kb":"Didin"
  },
  {
    "Fr":"Alors (Dans ce cas)",
    "Kb":"Adi"
  },
  {
    "Fr":"Alphabet",
    "Kb":"Agemmay"
  },
  {
    "Fr":"Alphabétisation",
    "Kb":"Asgemmay"
  },
  {
    "Fr":"Altération",
    "Kb":"Arjan"
  },
  {
    "Fr":"Altérer",
    "Kb":"Rjen"
  },
  {
    "Fr":"Alternance",
    "Kb":"Tamellilt"
  },
  {
    "Fr":"Alternant",
    "Kb":"Amlellay"
  },
  {
    "Fr":"Alternatif",
    "Kb":"Ameslellay"
  },
  {
    "Fr":"Alternative",
    "Kb":"Tameslellayt"
  },
  {
    "Fr":"Alterner",
    "Kb":"Mlelli"
  },
  {
    "Fr":"Amant",
    "Kb":"Amesri (imesra)"
  },
  {
    "Fr":"Amateur",
    "Kb":"Amaswadh"
  },
  {
    "Fr":"Ambassade",
    "Kb":"Tamahelt (Timuhal)"
  },
  {
    "Fr":"Ambassadeur",
    "Kb":"Anmahal"
  },
  {
    "Fr":"Ambiance",
    "Kb":"Iswagh"
  },
  {
    "Fr":"Ambigu",
    "Kb":"Amsulles"
  },
  {
    "Fr":"Ambitieux",
    "Kb":"Azidal"
  },
  {
    "Fr":"Ambition",
    "Kb":"Tazilta"
  },
  {
    "Fr":"Ambivalence",
    "Kb":"Tanat"
  },
  {
    "Fr":"Ambre",
    "Kb":"Leembar"
  },
  {
    "Fr":"Ã‚me",
    "Kb":"Iman"
  },
  {
    "Fr":"Amélioration",
    "Kb":"Asilegh"
  },
  {
    "Fr":"Améliorer",
    "Kb":"Silegh"
  },
  {
    "Fr":"Amende",
    "Kb":"Tafgurt"
  },
  {
    "Fr":"Amendement",
    "Kb":"Tinwit"
  },
  {
    "Fr":"Amener",
    "Kb":"Elwi"
  },
  {
    "Fr":"Amer (être)",
    "Kb":"Merzeg"
  },
  {
    "Fr":"Amertume",
    "Kb":"Tarzeg"
  },
  {
    "Fr":"Ami",
    "Kb":"Ameddakwel"
  },
  {
    "Fr":"Amitié",
    "Kb":"Tiddukla"
  },
  {
    "Fr":"Amnésie",
    "Kb":"Taremmaktut"
  },
  {
    "Fr":"Amorce",
    "Kb":"Asenker"
  },
  {
    "Fr":"Amortir",
    "Kb":"Senfesz"
  },
  {
    "Fr":"Amour",
    "Kb":"Tayri"
  },
  {
    "Fr":"Amoureux",
    "Kb":"Amaray"
  },
  {
    "Fr":"Amplificateur",
    "Kb":"Asetfal"
  },
  {
    "Fr":"Amplification",
    "Kb":"Asetfel"
  },
  {
    "Fr":"Amplifier",
    "Kb":"Setfel"
  },
  {
    "Fr":"Ampoule",
    "Kb":"Acelleqluq"
  },
  {
    "Fr":"Amulette",
    "Kb":"Timga"
  },
  {
    "Fr":"Amusant",
    "Kb":"Ametturs"
  },
  {
    "Fr":"Amuser",
    "Kb":"Hell"
  },
  {
    "Fr":"Amuser (s’)",
    "Kb":"Ezhu"
  },
  {
    "Fr":"An",
    "Kb":"Aseggwas"
  },
  {
    "Fr":"Analyse",
    "Kb":"Asebrurez"
  },
  {
    "Fr":"Analyser",
    "Kb":"Sebrurez"
  },
  {
    "Fr":"Anarchie",
    "Kb":"Tawernatt"
  },
  {
    "Fr":"Anarchiste",
    "Kb":"Awernadh"
  },
  {
    "Fr":"Ancêtres",
    "Kb":"Imraw"
  },
  {
    "Fr":"Ancien",
    "Kb":"Aqbur"
  },
  {
    "Fr":"Ane",
    "Kb":"Aghul (ighwyal)"
  },
  {
    "Fr":"Anesthésie",
    "Kb":"Aduyyet"
  },
  {
    "Fr":"Anesthésier",
    "Kb":"Sduyyet"
  },
  {
    "Fr":"Angle",
    "Kb":"Tighmert"
  },
  {
    "Fr":"Angoisse",
    "Kb":"Amnughjef"
  },
  {
    "Fr":"Animal",
    "Kb":"Aywal"
  },
  {
    "Fr":"Animateur",
    "Kb":"Amekfadhu"
  },
  {
    "Fr":"Animation",
    "Kb":"Tamekfadhut"
  },
  {
    "Fr":"Animer",
    "Kb":"Kfedh"
  },
  {
    "Fr":"Annales",
    "Kb":"Imsegwasen"
  },
  {
    "Fr":"Anneau",
    "Kb":"Tawinest"
  },
  {
    "Fr":"Année",
    "Kb":"Aseggwas"
  },
  {
    "Fr":"Annexe",
    "Kb":"Amaruz"
  },
  {
    "Fr":"Annexer",
    "Kb":"Smurez"
  },
  {
    "Fr":"Annonce",
    "Kb":"Tulgha"
  },
  {
    "Fr":"Annoncer",
    "Kb":"Ellegh"
  },
  {
    "Fr":"Annulation",
    "Kb":"Asemmet"
  },
  {
    "Fr":"Annuler",
    "Kb":"Semmet"
  },
  {
    "Fr":"Anomalie",
    "Kb":"Aszalay"
  },
  {
    "Fr":"Anonyme",
    "Kb":"Udrig"
  },
  {
    "Fr":"Antécédent",
    "Kb":"Azeggwar"
  },
  {
    "Fr":"Antenne",
    "Kb":"Taska (tisekwa)"
  },
  {
    "Fr":"Anthropologie",
    "Kb":"Talsasnet"
  },
  {
    "Fr":"Anticorps",
    "Kb":"Tafekkamgelt"
  },
  {
    "Fr":"Antimoine",
    "Kb":"Tazult"
  },
  {
    "Fr":"Antique",
    "Kb":"Agles"
  },
  {
    "Fr":"Antiquité",
    "Kb":"Taglest"
  },
  {
    "Fr":"Antithèse",
    "Kb":"Tameglamnatt"
  },
  {
    "Fr":"Antre",
    "Kb":"Ifri"
  },
  {
    "Fr":"Anus",
    "Kb":"Axuna"
  },
  {
    "Fr":"Août",
    "Kb":"Ghuct"
  },
  {
    "Fr":"Apercevoir",
    "Kb":"Wali"
  },
  {
    "Fr":"Aphasie",
    "Kb":"Assignu"
  },
  {
    "Fr":"Aplatir",
    "Kb":"Sgellel"
  },
  {
    "Fr":"Apogée",
    "Kb":"Aggi (aggiten)"
  },
  {
    "Fr":"Apparaître",
    "Kb":"Wemm"
  },
  {
    "Fr":"Appareil",
    "Kb":"Acermadh"
  },
  {
    "Fr":"Apparence",
    "Kb":"Tagamett"
  },
  {
    "Fr":"Appartenance",
    "Kb":"Amyili"
  },
  {
    "Fr":"Appartenir",
    "Kb":"Ili"
  },
  {
    "Fr":"Appel",
    "Kb":"Tighri"
  },
  {
    "Fr":"Appel (justice)",
    "Kb":"Allas (allasen)"
  },
  {
    "Fr":"Appeler",
    "Kb":"Siwel"
  },
  {
    "Fr":"Appétit",
    "Kb":"Aburdu"
  },
  {
    "Fr":"Applaudir",
    "Kb":"Suqqes"
  },
  {
    "Fr":"Applaudissement",
    "Kb":"Tasuqqest"
  },
  {
    "Fr":"Application",
    "Kb":"Asnas"
  },
  {
    "Fr":"Appliquer",
    "Kb":"Snes"
  },
  {
    "Fr":"Apporter",
    "Kb":"Awi"
  },
  {
    "Fr":"Apposé",
    "Kb":"Azedday"
  },
  {
    "Fr":"Appréciation",
    "Kb":"Adakadh"
  },
  {
    "Fr":"Apprécier",
    "Kb":"Dkedh"
  },
  {
    "Fr":"Apprentissage",
    "Kb":"Almad"
  },
  {
    "Fr":"Approche",
    "Kb":"Anekmar"
  },
  {
    "Fr":"Approcher",
    "Kb":"Kumer"
  },
  {
    "Fr":"Approfondir",
    "Kb":"Sderru"
  },
  {
    "Fr":"Approvisionner",
    "Kb":"Zigesz"
  },
  {
    "Fr":"Appuyer",
    "Kb":"Senned"
  },
  {
    "Fr":"Apre",
    "Kb":"Asemmam"
  },
  {
    "Fr":"Après-demain",
    "Kb":"Sel-azekka"
  },
  {
    "Fr":"Apte",
    "Kb":"Imnezgi"
  },
  {
    "Fr":"Aptitude",
    "Kb":"Tinnezgit"
  },
  {
    "Fr":"Araignée",
    "Kb":"Tissist"
  },
  {
    "Fr":"Arbitrage",
    "Kb":"Tanefrut"
  },
  {
    "Fr":"Arbitraire",
    "Kb":"Iwri"
  },
  {
    "Fr":"Arbitre",
    "Kb":"Anefray"
  },
  {
    "Fr":"Arbitrer",
    "Kb":"Snefru"
  },
  {
    "Fr":"Arbre",
    "Kb":"Addag"
  },
  {
    "Fr":"Arc-en-ciel",
    "Kb":"Tislit n-wenszar"
  },
  {
    "Fr":"Archéologie",
    "Kb":"Tirekkisent"
  },
  {
    "Fr":"Architecte",
    "Kb":"Amasdag"
  },
  {
    "Fr":"Architecture",
    "Kb":"Tasegda (tisegdiwin)"
  },
  {
    "Fr":"Archivage",
    "Kb":"Aghbar"
  },
  {
    "Fr":"Archiver",
    "Kb":"Ghber"
  },
  {
    "Fr":"Ardoise",
    "Kb":"Takifaft"
  },
  {
    "Fr":"Arête",
    "Kb":"Amder"
  },
  {
    "Fr":"Argent",
    "Kb":"Akarid (ikariden)"
  },
  {
    "Fr":"Argument",
    "Kb":"Afakul (ifukal)"
  },
  {
    "Fr":"Argumenter",
    "Kb":"Sfukel"
  },
  {
    "Fr":"Arithmétique",
    "Kb":"Tasnamdhant"
  },
  {
    "Fr":"Arme",
    "Kb":"Amrig"
  },
  {
    "Fr":"Armé (être)",
    "Kb":"Rbeb"
  },
  {
    "Fr":"Armée",
    "Kb":"Igen (ignan)"
  },
  {
    "Fr":"Armement",
    "Kb":"Taszulli"
  },
  {
    "Fr":"Armer",
    "Kb":"Serbeb"
  },
  {
    "Fr":"Arôme",
    "Kb":"Tinbi"
  },
  {
    "Fr":"Arracher",
    "Kb":"Sukef"
  },
  {
    "Fr":"Arrangement",
    "Kb":"Akafas"
  },
  {
    "Fr":"Arranger (mettre de l’ordre)",
    "Kb":"Seggem"
  },
  {
    "Fr":"Arranger (s’)",
    "Kb":"Nemken"
  },
  {
    "Fr":"Arrestation",
    "Kb":"Abbaz (abbazen)"
  },
  {
    "Fr":"Arrêter",
    "Kb":"Sebded"
  },
  {
    "Fr":"Arriéré",
    "Kb":"Ameqqal"
  },
  {
    "Fr":"Arrière",
    "Kb":"Deffir"
  },
  {
    "Fr":"Arrière-garde",
    "Kb":"Aberdud (iberdad)"
  },
  {
    "Fr":"Arrivée",
    "Kb":"Aggwadh"
  },
  {
    "Fr":"Arriver",
    "Kb":"Awedh"
  },
  {
    "Fr":"Arrogance",
    "Kb":"Zzux"
  },
  {
    "Fr":"Arrondissement",
    "Kb":"Asun"
  },
  {
    "Fr":"Arroser",
    "Kb":"Ssew"
  },
  {
    "Fr":"Arrosoir",
    "Kb":"Assuxan"
  },
  {
    "Fr":"Art",
    "Kb":"Taszuri"
  },
  {
    "Fr":"Artichauts",
    "Kb":"Tifeghwa"
  },
  {
    "Fr":"Article",
    "Kb":"Amagrad"
  },
  {
    "Fr":"Articulation",
    "Kb":"Asusan"
  },
  {
    "Fr":"Articulation (os)",
    "Kb":"Tawremt"
  },
  {
    "Fr":"Artilleur",
    "Kb":"Amerday"
  },
  {
    "Fr":"Artisan",
    "Kb":"Inedh"
  },
  {
    "Fr":"Artisanat",
    "Kb":"Taszuri"
  },
  {
    "Fr":"Ascenseur",
    "Kb":"Amessawen"
  },
  {
    "Fr":"Asile",
    "Kb":"Tamhara"
  },
  {
    "Fr":"Aspect",
    "Kb":"Timeszrit"
  },
  {
    "Fr":"Aspiration",
    "Kb":"Aslum"
  },
  {
    "Fr":"Assassin",
    "Kb":"Anedhlib"
  },
  {
    "Fr":"Assassinat",
    "Kb":"Adhlib"
  },
  {
    "Fr":"Assemblage",
    "Kb":"Asegrew"
  },
  {
    "Fr":"Assemblée",
    "Kb":"Agraw"
  },
  {
    "Fr":"Assembler",
    "Kb":"Segrrew"
  },
  {
    "Fr":"Asseoir",
    "Kb":"Sghim"
  },
  {
    "Fr":"Assermenté",
    "Kb":"Imgilli (imgillan)"
  },
  {
    "Fr":"Assez",
    "Kb":"Ddeqs"
  },
  {
    "Fr":"Assidu",
    "Kb":"Amsegli"
  },
  {
    "Fr":"Assiduité",
    "Kb":"Tisegli"
  },
  {
    "Fr":"Assiéger",
    "Kb":"Sutel"
  },
  {
    "Fr":"Assiette",
    "Kb":"Tadhebsits (tidhebsiyin)"
  },
  {
    "Fr":"Assimilation",
    "Kb":"Tamsertit"
  },
  {
    "Fr":"Assimilé",
    "Kb":"Artay"
  },
  {
    "Fr":"Assimiler",
    "Kb":"Sserti"
  },
  {
    "Fr":"Assistance",
    "Kb":"Tirgit"
  },
  {
    "Fr":"Assistant",
    "Kb":"Amarag (imurag)"
  },
  {
    "Fr":"Assister",
    "Kb":"Areg"
  },
  {
    "Fr":"Association",
    "Kb":"Tiddukla"
  },
  {
    "Fr":"Associé",
    "Kb":"Amdukel"
  },
  {
    "Fr":"Associer",
    "Kb":"Sdukkel"
  },
  {
    "Fr":"Assoiffé",
    "Kb":"Effad"
  },
  {
    "Fr":"Assoupir (s’)",
    "Kb":"Nuddem"
  },
  {
    "Fr":"Assouplir",
    "Kb":"Selwegh"
  },
  {
    "Fr":"Assumer",
    "Kb":"Bib"
  },
  {
    "Fr":"Assurance",
    "Kb":"Asenkid"
  },
  {
    "Fr":"Assurer",
    "Kb":"Senked"
  },
  {
    "Fr":"Asthme",
    "Kb":"Buneggaf"
  },
  {
    "Fr":"Astre",
    "Kb":"Itri (itran)"
  },
  {
    "Fr":"Astronomie",
    "Kb":"Tasnaggurt"
  },
  {
    "Fr":"Astuce",
    "Kb":"Tixidest (tixidas)"
  },
  {
    "Fr":"Asymétrie",
    "Kb":"Tirsit"
  },
  {
    "Fr":"Atelier",
    "Kb":"Asakwen"
  },
  {
    "Fr":"Atmosphère",
    "Kb":"Tignewt"
  },
  {
    "Fr":"Atome",
    "Kb":"Abelkam"
  },
  {
    "Fr":"Atomique",
    "Kb":"Abelkim"
  },
  {
    "Fr":"Atroce",
    "Kb":"Anessaruf"
  },
  {
    "Fr":"Attacher",
    "Kb":"Eqqen"
  },
  {
    "Fr":"Attaquer",
    "Kb":"Nteg"
  },
  {
    "Fr":"Atteindre",
    "Kb":"Ssiwedh"
  },
  {
    "Fr":"Atteinte",
    "Kb":"Tusgha"
  },
  {
    "Fr":"Attendre",
    "Kb":"Rdju"
  },
  {
    "Fr":"Attente",
    "Kb":"Aradju"
  },
  {
    "Fr":"Attentif",
    "Kb":"Amegraw"
  },
  {
    "Fr":"Attention",
    "Kb":"Tagerrawt"
  },
  {
    "Fr":"Attention !",
    "Kb":"Ghur (-ek –em –wen)"
  },
  {
    "Fr":"Attitude",
    "Kb":"Addud"
  },
  {
    "Fr":"Attraction",
    "Kb":"Tiaasszyt"
  },
  {
    "Fr":"Attraper",
    "Kb":"Ettef"
  },
  {
    "Fr":"Attribut",
    "Kb":"Ayla"
  },
  {
    "Fr":"Aubépine",
    "Kb":"Idmim"
  },
  {
    "Fr":"Auberge",
    "Kb":"Azebriz (izebraz)"
  },
  {
    "Fr":"Audience",
    "Kb":"Tibeddi (tibeddiyin)"
  },
  {
    "Fr":"Audio-visuel",
    "Kb":"Asliqqel"
  },
  {
    "Fr":"Auditeur",
    "Kb":"Amesseflid"
  },
  {
    "Fr":"Augmentation",
    "Kb":"Timeriwt"
  },
  {
    "Fr":"Augmenter",
    "Kb":"Rnu"
  },
  {
    "Fr":"Aumône",
    "Kb":"Takuuti"
  },
  {
    "Fr":"Aurore",
    "Kb":"Tafrara"
  },
  {
    "Fr":"Aussi",
    "Kb":"Ula"
  },
  {
    "Fr":"Aussitôt",
    "Kb":"Bihfih"
  },
  {
    "Fr":"Auteur",
    "Kb":"Ameskar"
  },
  {
    "Fr":"Authenticité",
    "Kb":"Asala"
  },
  {
    "Fr":"Authentique",
    "Kb":"Asnemdan"
  },
  {
    "Fr":"Auto (préfixe)",
    "Kb":"…Man"
  },
  {
    "Fr":"Autobiographie",
    "Kb":"Tameddurmant"
  },
  {
    "Fr":"Autochtone",
    "Kb":"Asrew"
  },
  {
    "Fr":"Autocrate",
    "Kb":"Aneddabu"
  },
  {
    "Fr":"Autocratie",
    "Kb":"Taneddabut"
  },
  {
    "Fr":"Autodidacte",
    "Kb":"Amnesselmad"
  },
  {
    "Fr":"Automate",
    "Kb":"Awurman"
  },
  {
    "Fr":"Automatique",
    "Kb":"Aymani"
  },
  {
    "Fr":"Automatisme",
    "Kb":"Amenwer"
  },
  {
    "Fr":"Automne",
    "Kb":"Afulman"
  },
  {
    "Fr":"Automobile",
    "Kb":"Amenziraz (imemzuraz)"
  },
  {
    "Fr":"Autonme",
    "Kb":"Amwan"
  },
  {
    "Fr":"Autonomie",
    "Kb":"Tafulmanit"
  },
  {
    "Fr":"Autorisation",
    "Kb":"Turagt"
  },
  {
    "Fr":"Autoriser",
    "Kb":"Sireg"
  },
  {
    "Fr":"Autoritaire",
    "Kb":"Amdenkay"
  },
  {
    "Fr":"Autorité",
    "Kb":"Anesdabu (inesduba)"
  },
  {
    "Fr":"Autre",
    "Kb":"Nnidhen"
  },
  {
    "Fr":"Autre chose",
    "Kb":"Ayen nnidhen"
  },
  {
    "Fr":"Autrefois",
    "Kb":"Zik"
  },
  {
    "Fr":"Autruche",
    "Kb":"Ibelliredj"
  },
  {
    "Fr":"Avaler",
    "Kb":"Elmesz"
  },
  {
    "Fr":"Avance (d’)",
    "Kb":"S tizar"
  },
  {
    "Fr":"Avancer",
    "Kb":"Asz"
  },
  {
    "Fr":"Avantage",
    "Kb":"Abaghur (ibughar)"
  },
  {
    "Fr":"Avare",
    "Kb":"Amechah (itscuhhu)"
  },
  {
    "Fr":"Avec",
    "Kb":"Akwed"
  },
  {
    "Fr":"Avenir",
    "Kb":"Imal"
  },
  {
    "Fr":"Avenue",
    "Kb":"Tasukt (tisuka)"
  },
  {
    "Fr":"Avertir",
    "Kb":"Ghtel"
  },
  {
    "Fr":"Avertissement",
    "Kb":"Aghtal"
  },
  {
    "Fr":"Aveu",
    "Kb":"Timelkit"
  },
  {
    "Fr":"Aveugle",
    "Kb":"Wariszri"
  },
  {
    "Fr":"Aviateur",
    "Kb":"Amsafeg."
  },
  {
    "Fr":"Aviation",
    "Kb":"Tamsafga"
  },
  {
    "Fr":"Avis",
    "Kb":"Amnad"
  },
  {
    "Fr":"Avortement",
    "Kb":"Aghray"
  },
  {
    "Fr":"Avouer",
    "Kb":"Iku"
  },
  {
    "Fr":"Avril",
    "Kb":"Ibrir"
  },
  {
    "Fr":"Axe",
    "Kb":"Agellus (igellas)"
  },
  {
    "Fr":"Axial",
    "Kb":"Aglusan"
  }
];}
$scope.ShowB = function() {
  
  $scope.words = 
  [
  {
    "Fr":"Babouche",
    "Kb":"Idukan"
  },
  {
    "Fr":"Bâcler",
    "Kb":"xermez"
  },
  {
    "Fr":"Bagage",
    "Kb":"Afecku"
  },
  {
    "Fr":"Bagarre",
    "Kb":"Tcaqlala"
  },
  {
    "Fr":"Bagarrer (se)",
    "Kb":"Tceqlel"
  },
  {
    "Fr":"Bagatelle",
    "Kb":"Aqejqul"
  },
  {
    "Fr":"Bague",
    "Kb":"Taxatemt"
  },
  {
    "Fr":"Baigner (se)",
    "Kb":"Ccef"
  },
  {
    "Fr":"Bain",
    "Kb":"Acucef"
  },
  {
    "Fr":"Baisse",
    "Kb":"Asider"
  },
  {
    "Fr":"Baisser",
    "Kb":"Seneghs"
  },
  {
    "Fr":"Baisser (se)",
    "Kb":"Knu"
  },
  {
    "Fr":"Balade",
    "Kb":"Asara"
  },
  {
    "Fr":"Baladeur (walkman)",
    "Kb":"Asefledan"
  },
  {
    "Fr":"Balafrer",
    "Kb":"Crem"
  },
  {
    "Fr":"Balai",
    "Kb":"Tasfatt"
  },
  {
    "Fr":"Balance",
    "Kb":"Amsewliwel"
  },
  {
    "Fr":"Balancer",
    "Kb":"Wliwel"
  },
  {
    "Fr":"Balançoire",
    "Kb":"Tajgagalt"
  },
  {
    "Fr":"Balayage",
    "Kb":"Adhummu"
  },
  {
    "Fr":"Balayer",
    "Kb":"Dhum"
  },
  {
    "Fr":"Ballet",
    "Kb":"Asummur"
  },
  {
    "Fr":"Ballon",
    "Kb":"Ticcirt"
  },
  {
    "Fr":"Bande",
    "Kb":"Axawag"
  },
  {
    "Fr":"Bande dessinée",
    "Kb":"Asaru yunigh"
  },
  {
    "Fr":"Banquet",
    "Kb":"Adraw"
  },
  {
    "Fr":"Barboter",
    "Kb":"Ferkedh"
  },
  {
    "Fr":"Barque",
    "Kb":"Tireft (tiraf)"
  },
  {
    "Fr":"Barrage",
    "Kb":"Uggug"
  },
  {
    "Fr":"Barrière",
    "Kb":"Tisseghlit"
  },
  {
    "Fr":"Bas",
    "Kb":"Adda"
  },
  {
    "Fr":"Bas (en)",
    "Kb":"Ddaw"
  },
  {
    "Fr":"Base",
    "Kb":"Azadur"
  },
  {
    "Fr":"Bassin",
    "Kb":"Amdun"
  },
  {
    "Fr":"Bât",
    "Kb":"Tsberdha"
  },
  {
    "Fr":"Bataillon",
    "Kb":"Agalfu"
  },
  {
    "Fr":"Bâtard",
    "Kb":"Acenti"
  },
  {
    "Fr":"Bateau",
    "Kb":"Agherrabu"
  },
  {
    "Fr":"Bâtir(eriger)",
    "Kb":"Ssali"
  },
  {
    "Fr":"Bâton",
    "Kb":"Akuray"
  },
  {
    "Fr":"Battre",
    "Kb":"Ewwet"
  },
  {
    "Fr":"Battre (le beurre)",
    "Kb":"Sendu"
  },
  {
    "Fr":"Bavard",
    "Kb":"Stut"
  },
  {
    "Fr":"Bavarder",
    "Kb":"Mmeslay"
  },
  {
    "Fr":"Bave",
    "Kb":"Ilezzazen (tslur)"
  },
  {
    "Fr":"Beau",
    "Kb":"Ahuskay"
  },
  {
    "Fr":"Beaucoup",
    "Kb":"Attas"
  },
  {
    "Fr":"Beau-frère",
    "Kb":"Adheggwal"
  },
  {
    "Fr":"Beauté",
    "Kb":"Tahuski"
  },
  {
    "Fr":"Bébé",
    "Kb":"Ilufan"
  },
  {
    "Fr":"Bec",
    "Kb":"Akenkuub"
  },
  {
    "Fr":"Béer",
    "Kb":"Bbehbi"
  },
  {
    "Fr":"Bégayer",
    "Kb":"Sqewqew"
  },
  {
    "Fr":"Beignet",
    "Kb":"Idernan (tslur)"
  },
  {
    "Fr":"Bêler",
    "Kb":"Sbaabaa"
  },
  {
    "Fr":"Bélier",
    "Kb":"Ikerri"
  },
  {
    "Fr":"Bénédiction",
    "Kb":"Talemmiht"
  },
  {
    "Fr":"Bénéfice",
    "Kb":"Arraz"
  },
  {
    "Fr":"Bénéficier",
    "Kb":"Rez (irez-itsruz)"
  },
  {
    "Fr":"Berbère",
    "Kb":"Amazigh"
  },
  {
    "Fr":"Berceau",
    "Kb":"Dduh"
  },
  {
    "Fr":"Bercer",
    "Kb":"Zzuzen"
  },
  {
    "Fr":"Berger",
    "Kb":"Ameksa"
  },
  {
    "Fr":"Bergeronnette",
    "Kb":"Tabuzegrayezt"
  },
  {
    "Fr":"Besoin",
    "Kb":"Assar"
  },
  {
    "Fr":"Besoin (avoir)",
    "Kb":"User"
  },
  {
    "Fr":"Bestiole",
    "Kb":"Abaauc"
  },
  {
    "Fr":"Beurre",
    "Kb":"Udi"
  },
  {
    "Fr":"Bibliographie",
    "Kb":"Adlesumugh"
  },
  {
    "Fr":"Bibliothèque",
    "Kb":"Timkardhit"
  },
  {
    "Fr":"Bidon",
    "Kb":"Abelyun"
  },
  {
    "Fr":"Bienfaisance",
    "Kb":"Tullught"
  },
  {
    "Fr":"Bienvenue",
    "Kb":"Ansuf"
  },
  {
    "Fr":"Bijou",
    "Kb":"Asghun"
  },
  {
    "Fr":"Bilan",
    "Kb":"Tamaghant"
  },
  {
    "Fr":"Bilingue",
    "Kb":"Amesnawal"
  },
  {
    "Fr":"Binaire",
    "Kb":"Imisin"
  },
  {
    "Fr":"Binôme",
    "Kb":"Asenful"
  },
  {
    "Fr":"Biographie",
    "Kb":"Tameddurt"
  },
  {
    "Fr":"Biologie",
    "Kb":"Tudersent"
  },
  {
    "Fr":"Blâme",
    "Kb":"Azawar"
  },
  {
    "Fr":"Blâmer",
    "Kb":"Zawer"
  },
  {
    "Fr":"Blanc",
    "Kb":"Amellal"
  },
  {
    "Fr":"Blé",
    "Kb":"Irden"
  },
  {
    "Fr":"Blessé",
    "Kb":"Amagus (imugas)"
  },
  {
    "Fr":"Blessure",
    "Kb":"Aggas (aggasen)"
  },
  {
    "Fr":"Bleu",
    "Kb":"Aszerwal"
  },
  {
    "Fr":"Blocage",
    "Kb":"Taqqamt"
  },
  {
    "Fr":"Bluffer",
    "Kb":"Kellex"
  },
  {
    "Fr":"Bœuf",
    "Kb":"Akentuur"
  },
  {
    "Fr":"Boire",
    "Kb":"Su"
  },
  {
    "Fr":"Bois",
    "Kb":"Asghar"
  },
  {
    "Fr":"Boisson",
    "Kb":"Timeswit"
  },
  {
    "Fr":"Boite",
    "Kb":"Tankult"
  },
  {
    "Fr":"Boiter",
    "Kb":"Suuszel"
  },
  {
    "Fr":"Boiteux",
    "Kb":"Arejdal"
  },
  {
    "Fr":"Bol",
    "Kb":"Aqedduh"
  },
  {
    "Fr":"Bombardement",
    "Kb":"Taberrawt"
  },
  {
    "Fr":"Bombarder",
    "Kb":"Sbirrew"
  },
  {
    "Fr":"Bon",
    "Kb":"Dhelfen"
  },
  {
    "Fr":"Bon (être)",
    "Kb":"Yulegh"
  },
  {
    "Fr":"Bondir",
    "Kb":"Ntteg"
  },
  {
    "Fr":"Bonheur",
    "Kb":"Tumert"
  },
  {
    "Fr":"Bonjour",
    "Kb":"Azul"
  },
  {
    "Fr":"Bonté",
    "Kb":"Tamella"
  },
  {
    "Fr":"Bord",
    "Kb":"Ttarf"
  },
  {
    "Fr":"Borgne",
    "Kb":"Azaawal"
  },
  {
    "Fr":"Borne",
    "Kb":"Agmir"
  },
  {
    "Fr":"Bosse",
    "Kb":"Taarurt"
  },
  {
    "Fr":"Bossu",
    "Kb":"Bu-tayyut"
  },
  {
    "Fr":"Bouc",
    "Kb":"Abuukir"
  },
  {
    "Fr":"Bouche",
    "Kb":"Akemmu"
  },
  {
    "Fr":"Bouché",
    "Kb":"Yergel"
  },
  {
    "Fr":"Bouchée",
    "Kb":"Talqimt"
  },
  {
    "Fr":"Boucher (n)",
    "Kb":"Agher"
  },
  {
    "Fr":"Boucher (v)",
    "Kb":"Rgel"
  },
  {
    "Fr":"Bouchon",
    "Kb":"Tadimt"
  },
  {
    "Fr":"Bouderie",
    "Kb":"Tutctcha"
  },
  {
    "Fr":"Boue",
    "Kb":"Alud"
  },
  {
    "Fr":"Bougie",
    "Kb":"Tacemmaat"
  },
  {
    "Fr":"Bouillir",
    "Kb":"Rkem"
  },
  {
    "Fr":"Bouillon",
    "Kb":"Imerghan"
  },
  {
    "Fr":"Boule",
    "Kb":"Takurt"
  },
  {
    "Fr":"Bouleverser",
    "Kb":"Serkes"
  },
  {
    "Fr":"Bourbier",
    "Kb":"Ixmir"
  },
  {
    "Fr":"Bourse",
    "Kb":"Taggazt"
  },
  {
    "Fr":"Bouton",
    "Kb":"Taqeffalt"
  },
  {
    "Fr":"Boxe",
    "Kb":"Ukkim"
  },
  {
    "Fr":"Boyau",
    "Kb":"Adan (idanen)"
  },
  {
    "Fr":"Boycotter",
    "Kb":"Grefdh"
  },
  {
    "Fr":"Braire",
    "Kb":"Juu"
  },
  {
    "Fr":"Braise",
    "Kb":"Tirgets"
  },
  {
    "Fr":"Branche",
    "Kb":"Tasetta"
  },
  {
    "Fr":"Branler",
    "Kb":"Mil (immal-itsmal)"
  },
  {
    "Fr":"Bras",
    "Kb":"Ighil"
  },
  {
    "Fr":"Brasier",
    "Kb":"Irig"
  },
  {
    "Fr":"Brave(mas)",
    "Kb":"D argaz"
  },
  {
    "Fr":"Bravoure",
    "Kb":"Tirugza"
  },
  {
    "Fr":"Brebis",
    "Kb":"Tixsi"
  },
  {
    "Fr":"Bricolage",
    "Kb":"Adaqar"
  },
  {
    "Fr":"Bricoler",
    "Kb":"Dqar"
  },
  {
    "Fr":"Bride",
    "Kb":"Algamu"
  },
  {
    "Fr":"Briller",
    "Kb":"Reqq"
  },
  {
    "Fr":"Briquet",
    "Kb":"Infed"
  },
  {
    "Fr":"Briser",
    "Kb":"Ersz"
  },
  {
    "Fr":"Broche",
    "Kb":"Abzim"
  },
  {
    "Fr":"Brochette",
    "Kb":"Tutelt"
  },
  {
    "Fr":"Brouillard",
    "Kb":"Agu"
  },
  {
    "Fr":"Broussaille",
    "Kb":"Amadagh"
  },
  {
    "Fr":"Bru",
    "Kb":"Tislit"
  },
  {
    "Fr":"Bruit",
    "Kb":"Szdih"
  },
  {
    "Fr":"Brûler",
    "Kb":"Ergh (ireqq)"
  },
  {
    "Fr":"Brut",
    "Kb":"Afusszagh"
  },
  {
    "Fr":"Bûche",
    "Kb":"Tifersit"
  },
  {
    "Fr":"Budget",
    "Kb":"Tighusar"
  },
  {
    "Fr":"Bulletin",
    "Kb":"Tanfult"
  },
  {
    "Fr":"Bureau",
    "Kb":"Asirra (iserrawen)"
  },
  {
    "Fr":"Burnous",
    "Kb":"Ahaddam"
  },
  {
    "Fr":"But",
    "Kb":"Iswi"
  },
  {
    "Fr":"Butte",
    "Kb":"Tighilt"
  }
]
;
}

$scope.ShowC = function() {
  
  $scope.words = 
[
  {
    "Fr":"Câble",
    "Kb":"Agatu (iguta)"
  },
  {
    "Fr":"Cacher",
    "Kb":"Effer"
  },
  {
    "Fr":"Cachet",
    "Kb":"Aferas"
  },
  {
    "Fr":"Cadeau",
    "Kb":"Asefk"
  },
  {
    "Fr":"Cadence",
    "Kb":"Awlellegh"
  },
  {
    "Fr":"Cadencé",
    "Kb":"Awlellagh"
  },
  {
    "Fr":"Cadet",
    "Kb":"Amatul"
  },
  {
    "Fr":"Cadre",
    "Kb":"Akatar"
  },
  {
    "Fr":"Cafetière",
    "Kb":"Abaqraj"
  },
  {
    "Fr":"Cafouiller",
    "Kb":"Ferkedh"
  },
  {
    "Fr":"Cage (de férule)",
    "Kb":"Akentu"
  },
  {
    "Fr":"Cahier",
    "Kb":"Alug (ilaggwen)"
  },
  {
    "Fr":"Caisse",
    "Kb":"Asenduq"
  },
  {
    "Fr":"Cajoler",
    "Kb":"Hesszer"
  },
  {
    "Fr":"Calcul",
    "Kb":"Asidhan"
  },
  {
    "Fr":"Calculateur",
    "Kb":"Amessidhen"
  },
  {
    "Fr":"Calculer",
    "Kb":"Ssidhen"
  },
  {
    "Fr":"Calendrier",
    "Kb":"Tafada"
  },
  {
    "Fr":"Caler",
    "Kb":"Sikel"
  },
  {
    "Fr":"Calligraphie",
    "Kb":"Izriri"
  },
  {
    "Fr":"Calotte",
    "Kb":"Tacacit"
  },
  {
    "Fr":"Camarade",
    "Kb":"Asmun"
  },
  {
    "Fr":"Caméléon",
    "Kb":"Tata"
  },
  {
    "Fr":"Camp",
    "Kb":"Agrur"
  },
  {
    "Fr":"Campement",
    "Kb":"Amazir"
  },
  {
    "Fr":"Camper",
    "Kb":"Sder"
  },
  {
    "Fr":"Camping",
    "Kb":"Asdar"
  },
  {
    "Fr":"Candidat",
    "Kb":"Amzazwar"
  },
  {
    "Fr":"Candidature",
    "Kb":"Tanekda"
  },
  {
    "Fr":"Canicule",
    "Kb":"Smayem"
  },
  {
    "Fr":"Canon",
    "Kb":"Amrud"
  },
  {
    "Fr":"Cantine",
    "Kb":"Tasmetctca"
  },
  {
    "Fr":"Capacité",
    "Kb":"Tazmart"
  },
  {
    "Fr":"Capital",
    "Kb":"Ihri"
  },
  {
    "Fr":"Capitale (ville)",
    "Kb":"Tamaneght"
  },
  {
    "Fr":"Capitalisme",
    "Kb":"Asihri"
  },
  {
    "Fr":"Capitaliste",
    "Kb":"Asihrem"
  },
  {
    "Fr":"Caprice",
    "Kb":"Antaw (intawen)"
  },
  {
    "Fr":"Captage",
    "Kb":"Attaf"
  },
  {
    "Fr":"Capter",
    "Kb":"Ttef"
  },
  {
    "Fr":"Captif",
    "Kb":"Amettaf"
  },
  {
    "Fr":"Capuchon",
    "Kb":"Aqelmun"
  },
  {
    "Fr":"Caractère (écriture)",
    "Kb":"Asekkil"
  },
  {
    "Fr":"Caractéristique (adj)",
    "Kb":"Amsekni"
  },
  {
    "Fr":"Caractéristique (sbst)",
    "Kb":"Taskant"
  },
  {
    "Fr":"Caravane",
    "Kb":"Tasghert"
  },
  {
    "Fr":"Carder",
    "Kb":"Qerdec"
  },
  {
    "Fr":"Carence",
    "Kb":"Anuref"
  },
  {
    "Fr":"Caresser",
    "Kb":"Slef"
  },
  {
    "Fr":"Caricature",
    "Kb":"Afghul (ifghal)"
  },
  {
    "Fr":"Carotte",
    "Kb":"Zrudya"
  },
  {
    "Fr":"Cartable",
    "Kb":"Tacekkart"
  },
  {
    "Fr":"Carte",
    "Kb":"Takardhi"
  },
  {
    "Fr":"Cas",
    "Kb":"Tajrut (tijra)"
  },
  {
    "Fr":"Cascade",
    "Kb":"Acercur"
  },
  {
    "Fr":"Case",
    "Kb":"Taxdhert"
  },
  {
    "Fr":"Casse-croûte",
    "Kb":"Tazedwit"
  },
  {
    "Fr":"Cassette",
    "Kb":"Tasfift"
  },
  {
    "Fr":"Castrer",
    "Kb":"Ddez"
  },
  {
    "Fr":"Catalogue",
    "Kb":"Agherryeb"
  },
  {
    "Fr":"Catastrophe",
    "Kb":"Tawaghit"
  },
  {
    "Fr":"Catastrophique",
    "Kb":"Amsekrar"
  },
  {
    "Fr":"Catégorie",
    "Kb":"Taggayt (taggayin)"
  },
  {
    "Fr":"Causalité",
    "Kb":"Tamentelt"
  },
  {
    "Fr":"Cause",
    "Kb":"Amentil (imentilen)"
  },
  {
    "Fr":"Causer",
    "Kb":"Smentel"
  },
  {
    "Fr":"Cavalier",
    "Kb":"Amnay"
  },
  {
    "Fr":"Cécité",
    "Kb":"Tidderghelt"
  },
  {
    "Fr":"Ceindre (se)",
    "Kb":"Bges"
  },
  {
    "Fr":"Ceinture",
    "Kb":"Tabgest"
  },
  {
    "Fr":"Célébrer",
    "Kb":"Sfugel"
  },
  {
    "Fr":"Célébrité",
    "Kb":"Cciaa"
  },
  {
    "Fr":"Célibataire",
    "Kb":"Ambur"
  },
  {
    "Fr":"Cendre",
    "Kb":"Ighed (ighighden)"
  },
  {
    "Fr":"Censure",
    "Kb":"Tadrest"
  },
  {
    "Fr":"Censuré (être)",
    "Kb":"Ttswadres"
  },
  {
    "Fr":"Censurer",
    "Kb":"Dres"
  },
  {
    "Fr":"Central",
    "Kb":"Alemmas"
  },
  {
    "Fr":"Centralisation",
    "Kb":"Asnammas"
  },
  {
    "Fr":"Centre",
    "Kb":"Talemmast"
  },
  {
    "Fr":"Cercle",
    "Kb":"Tawinest"
  },
  {
    "Fr":"Céréale",
    "Kb":"Imendi"
  },
  {
    "Fr":"Cérémonie",
    "Kb":"Tafugla"
  },
  {
    "Fr":"Cerner",
    "Kb":"Berrem"
  },
  {
    "Fr":"Certificat",
    "Kb":"Aselkim"
  },
  {
    "Fr":"Certifier",
    "Kb":"Selkem"
  },
  {
    "Fr":"Certitude",
    "Kb":"Talkint"
  },
  {
    "Fr":"Cerveau",
    "Kb":"Illexf"
  },
  {
    "Fr":"Cervelle",
    "Kb":"Annli"
  },
  {
    "Fr":"Cesser",
    "Kb":"Ghettem"
  },
  {
    "Fr":"Chacal",
    "Kb":"Uccen"
  },
  {
    "Fr":"Chahut",
    "Kb":"Akerkec"
  },
  {
    "Fr":"Chaîne",
    "Kb":"Tazrart"
  },
  {
    "Fr":"Chair",
    "Kb":"Aksum"
  },
  {
    "Fr":"Chaleur",
    "Kb":"Aszghal"
  },
  {
    "Fr":"Chambre",
    "Kb":"Taxxamt"
  },
  {
    "Fr":"Chameau",
    "Kb":"Alghwem (ileghwman)"
  },
  {
    "Fr":"Champ",
    "Kb":"Iger"
  },
  {
    "Fr":"Champion",
    "Kb":"Alghugh"
  },
  {
    "Fr":"Championnat",
    "Kb":"Talghugha"
  },
  {
    "Fr":"Chance",
    "Kb":"Amellil"
  },
  {
    "Fr":"Changement",
    "Kb":"Asnifel"
  },
  {
    "Fr":"Changer",
    "Kb":"Senfel"
  },
  {
    "Fr":"Chanson",
    "Kb":"Taghwect"
  },
  {
    "Fr":"Chant",
    "Kb":"Ccna (ccnawi)"
  },
  {
    "Fr":"Chantage",
    "Kb":"Tadabart"
  },
  {
    "Fr":"Chanter",
    "Kb":"Ccnu"
  },
  {
    "Fr":"Chanteur",
    "Kb":"Acennay"
  },
  {
    "Fr":"Chapeau",
    "Kb":"Arazal"
  },
  {
    "Fr":"Chapitre",
    "Kb":"Ixf (ixfawen)"
  },
  {
    "Fr":"Charançons",
    "Kb":"Cluc"
  },
  {
    "Fr":"Chardon",
    "Kb":"Abuneqqar"
  },
  {
    "Fr":"Charge",
    "Kb":"Aggwa"
  },
  {
    "Fr":"Charger",
    "Kb":"Ssisi"
  },
  {
    "Fr":"Charger (qqn de qqc)",
    "Kb":"Smigel"
  },
  {
    "Fr":"Charlatan",
    "Kb":"Ahwadh"
  },
  {
    "Fr":"Charpente",
    "Kb":"Sser"
  },
  {
    "Fr":"Charrue",
    "Kb":"Imaaun"
  },
  {
    "Fr":"Charte",
    "Kb":"Akrawal"
  },
  {
    "Fr":"Chasse",
    "Kb":"Agmer"
  },
  {
    "Fr":"Chasser",
    "Kb":"Gmer"
  },
  {
    "Fr":"Chasseur",
    "Kb":"Anegmar"
  },
  {
    "Fr":"Chat",
    "Kb":"Amcic"
  },
  {
    "Fr":"Château",
    "Kb":"Tighremt"
  },
  {
    "Fr":"Châtier",
    "Kb":"Fger"
  },
  {
    "Fr":"Châtiment",
    "Kb":"Tafgert"
  },
  {
    "Fr":"Chatouiller",
    "Kb":"Skikedh"
  },
  {
    "Fr":"Chaud",
    "Kb":"Ihma"
  },
  {
    "Fr":"Chaudière",
    "Kb":"Tafedna"
  },
  {
    "Fr":"Chauffer",
    "Kb":"Ssehmu"
  },
  {
    "Fr":"Chaussure",
    "Kb":"Arkas"
  },
  {
    "Fr":"Chauve",
    "Kb":"Aferdhas"
  },
  {
    "Fr":"Chef",
    "Kb":"Aghella (ighellaten)"
  },
  {
    "Fr":"Chemin",
    "Kb":"Abrid (iberdan)"
  },
  {
    "Fr":"Cheminer",
    "Kb":"Ddu"
  },
  {
    "Fr":"Chenapan",
    "Kb":"Cmata"
  },
  {
    "Fr":"Chêne",
    "Kb":"Akerruc"
  },
  {
    "Fr":"Chercher",
    "Kb":"Nadi"
  },
  {
    "Fr":"Chercheur",
    "Kb":"Anagmay"
  },
  {
    "Fr":"Chéri",
    "Kb":"Aneglus"
  },
  {
    "Fr":"Cheval",
    "Kb":"Ayyes"
  },
  {
    "Fr":"Chevelure",
    "Kb":"Ackuk"
  },
  {
    "Fr":"Cheveu",
    "Kb":"Anszadh (inszadhen)"
  },
  {
    "Fr":"Cheveux",
    "Kb":"Acekkuh"
  },
  {
    "Fr":"Chèvre",
    "Kb":"Taghatt"
  },
  {
    "Fr":"Chevron",
    "Kb":"Akafu"
  },
  {
    "Fr":"Chevrotine",
    "Kb":"Ahlalas"
  },
  {
    "Fr":"Chez",
    "Kb":"Ghar"
  },
  {
    "Fr":"Chien",
    "Kb":"Aqjun"
  },
  {
    "Fr":"Chiffon",
    "Kb":"Abehnuq"
  },
  {
    "Fr":"Chiffre",
    "Kb":"Azwil"
  },
  {
    "Fr":"Chignon",
    "Kb":"Adlal"
  },
  {
    "Fr":"Chimie",
    "Kb":"Takrura"
  },
  {
    "Fr":"Chimiste",
    "Kb":"Ameskran"
  },
  {
    "Fr":"Chirurgie",
    "Kb":"Agzam"
  },
  {
    "Fr":"Choc",
    "Kb":"Anegges"
  },
  {
    "Fr":"Choisir",
    "Kb":"Fren"
  },
  {
    "Fr":"Choix",
    "Kb":"Adghar"
  },
  {
    "Fr":"Choquer",
    "Kb":"Negges"
  },
  {
    "Fr":"Chorale",
    "Kb":"Talilt"
  },
  {
    "Fr":"Chose",
    "Kb":"Taghawsa"
  },
  {
    "Fr":"Chronique",
    "Kb":"Akucam"
  },
  {
    "Fr":"Chronologie",
    "Kb":"Tasimirt"
  },
  {
    "Fr":"Chronologique",
    "Kb":"Asnimiran"
  },
  {
    "Fr":"Chuchotement",
    "Kb":"Ameckuken"
  },
  {
    "Fr":"Chuchoter",
    "Kb":"Htiti"
  },
  {
    "Fr":"Chut !",
    "Kb":"Susem"
  },
  {
    "Fr":"Chute",
    "Kb":"Aghelluy"
  },
  {
    "Fr":"Ciel",
    "Kb":"Igenni"
  },
  {
    "Fr":"Cigogne",
    "Kb":"Ibelliredj"
  },
  {
    "Fr":"Cimetière",
    "Kb":"Andher"
  },
  {
    "Fr":"Cinq",
    "Kb":"Semmus"
  },
  {
    "Fr":"Circoncire",
    "Kb":"Ssedhhar"
  },
  {
    "Fr":"Circoncision",
    "Kb":"Tthara"
  },
  {
    "Fr":"Circonstance",
    "Kb":"Amaghlay"
  },
  {
    "Fr":"Circuit",
    "Kb":"Tawerrayt"
  },
  {
    "Fr":"Circulaire",
    "Kb":"Awerray"
  },
  {
    "Fr":"Circulation",
    "Kb":"Asikel"
  },
  {
    "Fr":"Circuler",
    "Kb":"Sikel"
  },
  {
    "Fr":"Cisaille",
    "Kb":"Lemqes"
  },
  {
    "Fr":"Ciseaux",
    "Kb":"Timqestin"
  },
  {
    "Fr":"Citadin",
    "Kb":"Ughrim"
  },
  {
    "Fr":"Citation",
    "Kb":"Assimel"
  },
  {
    "Fr":"Cité",
    "Kb":"Agharam"
  },
  {
    "Fr":"Citerne",
    "Kb":"Tanuttfi"
  },
  {
    "Fr":"Citoyen",
    "Kb":"Agherfan"
  },
  {
    "Fr":"Citoyenneté",
    "Kb":"Tiqqermi"
  },
  {
    "Fr":"Civil",
    "Kb":"Agharim"
  },
  {
    "Fr":"Civilisation",
    "Kb":"Tagherma"
  },
  {
    "Fr":"Civilisé",
    "Kb":"Aneghrum"
  },
  {
    "Fr":"Civiliser",
    "Kb":"Seghrem"
  },
  {
    "Fr":"Clair de lune",
    "Kb":"Tiziri"
  },
  {
    "Fr":"Clan",
    "Kb":"Tamadla"
  },
  {
    "Fr":"Clandestin",
    "Kb":"Unttil"
  },
  {
    "Fr":"Clandestinité",
    "Kb":"Tanettla"
  },
  {
    "Fr":"Clarification",
    "Kb":"Asfaw"
  },
  {
    "Fr":"Clarifier",
    "Kb":"Sfu"
  },
  {
    "Fr":"Classe",
    "Kb":"Tadala"
  },
  {
    "Fr":"Classe (catégorie)",
    "Kb":"Asmil"
  },
  {
    "Fr":"Classe (école)",
    "Kb":"Taneghrit (tineghra)"
  },
  {
    "Fr":"Classe (sociale)",
    "Kb":"Taserkemt (tiserkam)"
  },
  {
    "Fr":"Classement",
    "Kb":"Abellez"
  },
  {
    "Fr":"Clé",
    "Kb":"Tasaruts"
  },
  {
    "Fr":"Cligner",
    "Kb":"Remmec"
  },
  {
    "Fr":"Clignotant",
    "Kb":"Asablaw"
  },
  {
    "Fr":"Clignotement",
    "Kb":"Asablew"
  },
  {
    "Fr":"Clique",
    "Kb":"Tirkeft"
  },
  {
    "Fr":"Cloche",
    "Kb":"Anagna"
  },
  {
    "Fr":"Cloisonnement",
    "Kb":"Taghrabt"
  },
  {
    "Fr":"Cloisonner",
    "Kb":"Gherbet"
  },
  {
    "Fr":"Cloque (de brûlure)",
    "Kb":"Tacelbutt"
  },
  {
    "Fr":"Clos",
    "Kb":"Ufrig"
  },
  {
    "Fr":"Clôture",
    "Kb":"Afrag"
  },
  {
    "Fr":"Clou",
    "Kb":"Amesmar"
  },
  {
    "Fr":"Clown",
    "Kb":"Agwennactal"
  },
  {
    "Fr":"Club",
    "Kb":"Asrir"
  },
  {
    "Fr":"Cochon",
    "Kb":"Ilef"
  },
  {
    "Fr":"Codage",
    "Kb":"Tangalt"
  },
  {
    "Fr":"Code",
    "Kb":"Angal"
  },
  {
    "Fr":"Coefficient",
    "Kb":"Amuskir"
  },
  {
    "Fr":"Cœur",
    "Kb":"Ul (ulawen)"
  },
  {
    "Fr":"Cogner",
    "Kb":"Berrez"
  },
  {
    "Fr":"Cognitif",
    "Kb":"Awessun"
  },
  {
    "Fr":"Cognition",
    "Kb":"Tawessunt"
  },
  {
    "Fr":"Cohérence",
    "Kb":"Tanmeszla"
  },
  {
    "Fr":"Cohésion",
    "Kb":"Akerresz"
  },
  {
    "Fr":"Coiffeur",
    "Kb":"Anersam"
  },
  {
    "Fr":"Coin",
    "Kb":"Tighwmert"
  },
  {
    "Fr":"Coin (maison)",
    "Kb":"Tasga"
  },
  {
    "Fr":"Col",
    "Kb":"Iri"
  },
  {
    "Fr":"Colère",
    "Kb":"Zaaff"
  },
  {
    "Fr":"Colique",
    "Kb":"Azebar"
  },
  {
    "Fr":"Collecter",
    "Kb":"Nbez"
  },
  {
    "Fr":"Collecteur",
    "Kb":"Asembaz"
  },
  {
    "Fr":"Collectif (adj)",
    "Kb":"N ujmu"
  },
  {
    "Fr":"Collectif (n)",
    "Kb":"Amazday"
  },
  {
    "Fr":"Collection",
    "Kb":"Talkensit"
  },
  {
    "Fr":"Collectionner",
    "Kb":"Ikensi"
  },
  {
    "Fr":"Collectionneur",
    "Kb":"Alkensay"
  },
  {
    "Fr":"Collectivisme",
    "Kb":"Tanesbazit"
  },
  {
    "Fr":"Collectiviste",
    "Kb":"Ansbazi"
  },
  {
    "Fr":"Collectivité",
    "Kb":"Tamazdayt"
  },
  {
    "Fr":"Collégial",
    "Kb":"Uwizi"
  },
  {
    "Fr":"Collègue",
    "Kb":"Amidaw"
  },
  {
    "Fr":"Collier",
    "Kb":"Azrar"
  },
  {
    "Fr":"Colloque",
    "Kb":"Anamal (inamalem)"
  },
  {
    "Fr":"Colon",
    "Kb":"Amhares"
  },
  {
    "Fr":"Colonialiste",
    "Kb":"Amhersan"
  },
  {
    "Fr":"Colonie",
    "Kb":"Tahrest"
  },
  {
    "Fr":"Colonisation",
    "Kb":"Tasehrest (tisehras)"
  },
  {
    "Fr":"Colonne",
    "Kb":"Ajgu"
  },
  {
    "Fr":"Combat",
    "Kb":"Imenghi"
  },
  {
    "Fr":"Combatif",
    "Kb":"Ameggat (imeggaten)"
  },
  {
    "Fr":"Combativité",
    "Kb":"Tameggatt"
  },
  {
    "Fr":"Combattant",
    "Kb":"Amnegh"
  },
  {
    "Fr":"Combinaison",
    "Kb":"Tuddsa (tuddsiwin)"
  },
  {
    "Fr":"Combinatoire",
    "Kb":"Tasennuyt"
  },
  {
    "Fr":"Combine",
    "Kb":"Tiddest (tiddas)"
  },
  {
    "Fr":"Combiner",
    "Kb":"Senney"
  },
  {
    "Fr":"Combler",
    "Kb":"Unsz"
  },
  {
    "Fr":"Comédie",
    "Kb":"Tamellaght"
  },
  {
    "Fr":"Comédien",
    "Kb":"Azeffan"
  },
  {
    "Fr":"Comète",
    "Kb":"Asmil"
  },
  {
    "Fr":"Comité",
    "Kb":"Tarbaat (tirebbaa)"
  },
  {
    "Fr":"Commandant",
    "Kb":"Amenzadh"
  },
  {
    "Fr":"Commande",
    "Kb":"Anezdhay"
  },
  {
    "Fr":"Commandement",
    "Kb":"Aladen"
  },
  {
    "Fr":"Commander",
    "Kb":"Nzedh"
  },
  {
    "Fr":"Commando",
    "Kb":"Azlu (izla)"
  },
  {
    "Fr":"Comme",
    "Kb":"Am"
  },
  {
    "Fr":"Comment",
    "Kb":"Amek"
  },
  {
    "Fr":"Commentaire",
    "Kb":"Awennit"
  },
  {
    "Fr":"Commentateur",
    "Kb":"Awennat"
  },
  {
    "Fr":"Commenter",
    "Kb":"Wennet"
  },
  {
    "Fr":"Commerçant",
    "Kb":"Amzenzu"
  },
  {
    "Fr":"Commercial",
    "Kb":"Amzenzi"
  },
  {
    "Fr":"Commérer",
    "Kb":"Sbejbej"
  },
  {
    "Fr":"Commission",
    "Kb":"Tasmilt"
  },
  {
    "Fr":"Commun",
    "Kb":"Amsihar (imsihar)"
  },
  {
    "Fr":"Commune",
    "Kb":"Taghiwant"
  },
  {
    "Fr":"Communication",
    "Kb":"Taghwalt"
  },
  {
    "Fr":"Communiquer",
    "Kb":"Selghu"
  },
  {
    "Fr":"Communisme",
    "Kb":"Tazdukla"
  },
  {
    "Fr":"Communiste",
    "Kb":"Azduklan"
  },
  {
    "Fr":"Commutateur",
    "Kb":"Amsenfal"
  },
  {
    "Fr":"Commutation",
    "Kb":"Asenfel"
  },
  {
    "Fr":"Commuter",
    "Kb":"Senfel"
  },
  {
    "Fr":"Compagnie",
    "Kb":"Tamunt"
  },
  {
    "Fr":"Comparaison",
    "Kb":"Asidmer"
  },
  {
    "Fr":"Comparer",
    "Kb":"Snemhel"
  },
  {
    "Fr":"Compas",
    "Kb":"Azulagh(izulagh)"
  },
  {
    "Fr":"Compassion",
    "Kb":"Tamella"
  },
  {
    "Fr":"Compensation",
    "Kb":"Aghram"
  },
  {
    "Fr":"Compenser",
    "Kb":"Mhes"
  },
  {
    "Fr":"Compétence",
    "Kb":"Tawzut (tiwzutin)"
  },
  {
    "Fr":"Compétition",
    "Kb":"Tamelgha"
  },
  {
    "Fr":"Complément",
    "Kb":"Asemmad"
  },
  {
    "Fr":"Complémentaire",
    "Kb":"Anemmadu"
  },
  {
    "Fr":"Complémentarité",
    "Kb":"Tanemmadut"
  },
  {
    "Fr":"Complet",
    "Kb":"Anguz"
  },
  {
    "Fr":"Compléter",
    "Kb":"Summed"
  },
  {
    "Fr":"Complexe",
    "Kb":"Asemlal (isemlal)"
  },
  {
    "Fr":"Complexé (être)",
    "Kb":"Nbuttel"
  },
  {
    "Fr":"Complication",
    "Kb":"Aghennej"
  },
  {
    "Fr":"Compliment",
    "Kb":"Tinzi (tinza)"
  },
  {
    "Fr":"Compliquer",
    "Kb":"Ghennej"
  },
  {
    "Fr":"Complot",
    "Kb":"Anguz (inguzen)"
  },
  {
    "Fr":"Comploter",
    "Kb":"Ngez"
  },
  {
    "Fr":"Comportement",
    "Kb":"Tikli"
  },
  {
    "Fr":"Composante",
    "Kb":"Tisgert"
  },
  {
    "Fr":"Compose",
    "Kb":"Uddis"
  },
  {
    "Fr":"Composer",
    "Kb":"Eddes"
  },
  {
    "Fr":"Composition",
    "Kb":"Tasudest"
  },
  {
    "Fr":"Compréhension",
    "Kb":"Tigzi"
  },
  {
    "Fr":"Comprendre",
    "Kb":"Gzu"
  },
  {
    "Fr":"Compromettre",
    "Kb":"Surdu"
  },
  {
    "Fr":"Compromis",
    "Kb":"Anmekni"
  },
  {
    "Fr":"Comptage",
    "Kb":"Asdhen"
  },
  {
    "Fr":"Compte",
    "Kb":"Amidhan"
  },
  {
    "Fr":"Compter",
    "Kb":"Sidhen"
  },
  {
    "Fr":"Compteur",
    "Kb":"Amsidhen"
  },
  {
    "Fr":"Concasser",
    "Kb":"Brec"
  },
  {
    "Fr":"Concave",
    "Kb":"Ughnij"
  },
  {
    "Fr":"Concentration",
    "Kb":"Asersigh"
  },
  {
    "Fr":"Concentrer",
    "Kb":"Sersiy"
  },
  {
    "Fr":"Concept",
    "Kb":"Tamidhrant (timidhranin)"
  },
  {
    "Fr":"Conceptualisation",
    "Kb":"Asmidhren"
  },
  {
    "Fr":"Concert",
    "Kb":"Abandu"
  },
  {
    "Fr":"Concilier",
    "Kb":"Sszenszel"
  },
  {
    "Fr":"Conclusion",
    "Kb":"Tarayt"
  },
  {
    "Fr":"Concours",
    "Kb":"Timzizwert"
  },
  {
    "Fr":"Concret",
    "Kb":"Akman"
  },
  {
    "Fr":"Concrétiser",
    "Kb":"Sekmen"
  },
  {
    "Fr":"Concurrence",
    "Kb":"Tamenzight"
  },
  {
    "Fr":"Condamnation",
    "Kb":"Taszirt"
  },
  {
    "Fr":"Condamné",
    "Kb":"Amuszir"
  },
  {
    "Fr":"Condamner",
    "Kb":"Ssziszer"
  },
  {
    "Fr":"Condition",
    "Kb":"Tawtilt"
  },
  {
    "Fr":"Conditionnel",
    "Kb":"Awtilan"
  },
  {
    "Fr":"Condoléances",
    "Kb":"Aaezzi"
  },
  {
    "Fr":"Conducteur",
    "Kb":"Amesnay"
  },
  {
    "Fr":"Conduire",
    "Kb":"Snu"
  },
  {
    "Fr":"Conduire (se)",
    "Kb":"Her"
  },
  {
    "Fr":"Cône",
    "Kb":"Akaswar"
  },
  {
    "Fr":"Confédération",
    "Kb":"Amqun"
  },
  {
    "Fr":"Conférence",
    "Kb":"Tinawt"
  },
  {
    "Fr":"Confiance",
    "Kb":"Taflest"
  },
  {
    "Fr":"Confier",
    "Kb":"Msagaz"
  },
  {
    "Fr":"Confirmation",
    "Kb":"Asentem"
  },
  {
    "Fr":"Confirmer",
    "Kb":"Sentem"
  },
  {
    "Fr":"Conflit",
    "Kb":"Amlasay"
  },
  {
    "Fr":"Confondre",
    "Kb":"Sserkes"
  },
  {
    "Fr":"Conforme",
    "Kb":"Arawas"
  },
  {
    "Fr":"Confronter",
    "Kb":"Mnala"
  },
  {
    "Fr":"Congé",
    "Kb":"Anurszem"
  },
  {
    "Fr":"Congrès",
    "Kb":"Aswir"
  },
  {
    "Fr":"Congressiste",
    "Kb":"Amaswar"
  },
  {
    "Fr":"Conjonction",
    "Kb":"Tazghunt"
  },
  {
    "Fr":"Conjugaison",
    "Kb":"Asefti"
  },
  {
    "Fr":"Conjuguer",
    "Kb":"Sefti"
  },
  {
    "Fr":"Connecter",
    "Kb":"Qqen"
  },
  {
    "Fr":"Connecteur",
    "Kb":"Amaqqen"
  },
  {
    "Fr":"Connexion",
    "Kb":"Tuqqna"
  },
  {
    "Fr":"Conquérir",
    "Kb":"Slek"
  },
  {
    "Fr":"Conquête",
    "Kb":"Taslekt"
  },
  {
    "Fr":"Conscience",
    "Kb":"Tafrit"
  },
  {
    "Fr":"Conseil (assemblée)",
    "Kb":"Aseqqamu"
  },
  {
    "Fr":"Conséquence",
    "Kb":"Alkam"
  },
  {
    "Fr":"Consommateur",
    "Kb":"Amsider"
  },
  {
    "Fr":"Consommation",
    "Kb":"Asuder"
  },
  {
    "Fr":"Consommer",
    "Kb":"Suder"
  },
  {
    "Fr":"Constant",
    "Kb":"Aghlan"
  },
  {
    "Fr":"Constitution",
    "Kb":"Tamendhawt"
  },
  {
    "Fr":"Constitutionnel",
    "Kb":"Amendhaw"
  },
  {
    "Fr":"Construire",
    "Kb":"Bnu"
  },
  {
    "Fr":"Contact",
    "Kb":"Anermis"
  },
  {
    "Fr":"Conte",
    "Kb":"Tanfust"
  },
  {
    "Fr":"Contemplation",
    "Kb":"Assilem"
  },
  {
    "Fr":"Contempler",
    "Kb":"Ssilem"
  },
  {
    "Fr":"Contemporain",
    "Kb":"Azi (aziten)"
  },
  {
    "Fr":"Contenant",
    "Kb":"Anagbas"
  },
  {
    "Fr":"Contenir",
    "Kb":"Gber"
  },
  {
    "Fr":"Contenu",
    "Kb":"Agbur"
  },
  {
    "Fr":"Conter",
    "Kb":"Hku"
  },
  {
    "Fr":"Contestation",
    "Kb":"Aseghrebbet"
  },
  {
    "Fr":"Contester",
    "Kb":"Seghrebbet"
  },
  {
    "Fr":"Contexte",
    "Kb":"Asatal"
  },
  {
    "Fr":"Continent",
    "Kb":"Amenszaw"
  },
  {
    "Fr":"Continu",
    "Kb":"Amaghlal"
  },
  {
    "Fr":"Continuer",
    "Kb":"Ghlel"
  },
  {
    "Fr":"Contracter",
    "Kb":"Sedres"
  },
  {
    "Fr":"Contraction",
    "Kb":"Tasedrest"
  },
  {
    "Fr":"Contradiction",
    "Kb":"Annerzi"
  },
  {
    "Fr":"Contrainte",
    "Kb":"Tuggda"
  },
  {
    "Fr":"Contraire",
    "Kb":"Anemgal"
  },
  {
    "Fr":"Contrat",
    "Kb":"Agatu"
  },
  {
    "Fr":"Contre",
    "Kb":"Mgal"
  },
  {
    "Fr":"Contribuable",
    "Kb":"Amawas"
  },
  {
    "Fr":"Contribution",
    "Kb":"Tumutt"
  },
  {
    "Fr":"Contrôle",
    "Kb":"Anghad"
  },
  {
    "Fr":"Contrôler",
    "Kb":"Senghed"
  },
  {
    "Fr":"Convaincu",
    "Kb":"Unendil"
  },
  {
    "Fr":"Convalescent",
    "Kb":"Amgur"
  },
  {
    "Fr":"Convenir",
    "Kb":"Msisi"
  },
  {
    "Fr":"Convention",
    "Kb":"Amsisi"
  },
  {
    "Fr":"Conversation",
    "Kb":"Amsawal"
  },
  {
    "Fr":"Convexe",
    "Kb":"Afensu (ifensa)"
  },
  {
    "Fr":"Convexité",
    "Kb":"Tiffensur (tiffensa)"
  },
  {
    "Fr":"Conviction",
    "Kb":"Tamedlit"
  },
  {
    "Fr":"Convive",
    "Kb":"Amedraw"
  },
  {
    "Fr":"Convoi",
    "Kb":"Taghsert"
  },
  {
    "Fr":"Coopérant",
    "Kb":"Amadhal"
  },
  {
    "Fr":"Coopérateur",
    "Kb":"Anamang"
  },
  {
    "Fr":"Coopération",
    "Kb":"Amedhal"
  },
  {
    "Fr":"Coopérer",
    "Kb":"Nmireg"
  },
  {
    "Fr":"Copie",
    "Kb":"Alsaru"
  },
  {
    "Fr":"Corail",
    "Kb":"Tmezjan"
  },
  {
    "Fr":"Corde",
    "Kb":"Amrar"
  },
  {
    "Fr":"Cordon ombilical",
    "Kb":"Timitt"
  },
  {
    "Fr":"Cordonnier",
    "Kb":"Axerraz"
  },
  {
    "Fr":"Corne",
    "Kb":"Iccew"
  },
  {
    "Fr":"Corps",
    "Kb":"Tafekka"
  },
  {
    "Fr":"Correcteur",
    "Kb":"Aseghtay"
  },
  {
    "Fr":"Correction",
    "Kb":"Aseghti"
  },
  {
    "Fr":"Corrélation",
    "Kb":"Tamaqqant"
  },
  {
    "Fr":"Correspondant",
    "Kb":"Anmeghray"
  },
  {
    "Fr":"Corriger",
    "Kb":"Seghtu"
  },
  {
    "Fr":"Corruption",
    "Kb":"Agufsu"
  },
  {
    "Fr":"Corsage",
    "Kb":"Iciwi"
  },
  {
    "Fr":"Côte",
    "Kb":"Aghezdis"
  },
  {
    "Fr":"Côté",
    "Kb":"Idis"
  },
  {
    "Fr":"Côté (à)",
    "Kb":"Tama"
  },
  {
    "Fr":"Cotisation",
    "Kb":"Tabzert"
  },
  {
    "Fr":"Cotiser",
    "Kb":"Bzer"
  },
  {
    "Fr":"Cou",
    "Kb":"Tamgartt"
  },
  {
    "Fr":"Coudre",
    "Kb":"Gnu"
  },
  {
    "Fr":"Couffin",
    "Kb":"Adhellaa"
  },
  {
    "Fr":"Couler",
    "Kb":"Azzel"
  },
  {
    "Fr":"Couleur",
    "Kb":"Ini (initen)"
  },
  {
    "Fr":"Couleuvre",
    "Kb":"Ifighar"
  },
  {
    "Fr":"Coulisse",
    "Kb":"Tahara"
  },
  {
    "Fr":"Coup",
    "Kb":"Tiyita"
  },
  {
    "Fr":"Coupe (de cheveux)",
    "Kb":"Taqunatt"
  },
  {
    "Fr":"Couper",
    "Kb":"Gzem"
  },
  {
    "Fr":"Couple",
    "Kb":"Tayuga"
  },
  {
    "Fr":"Couplet",
    "Kb":"Tamejrut"
  },
  {
    "Fr":"Coupure",
    "Kb":"Anegzum"
  },
  {
    "Fr":"Cour",
    "Kb":"Tasenbert"
  },
  {
    "Fr":"Cour (maison)",
    "Kb":"Ihara"
  },
  {
    "Fr":"Courage",
    "Kb":"Tabghest"
  },
  {
    "Fr":"Courageux",
    "Kb":"Abghas"
  },
  {
    "Fr":"Courant",
    "Kb":"Angi"
  },
  {
    "Fr":"Courant (air)",
    "Kb":"Tadhrut"
  },
  {
    "Fr":"Courant (eau-gaz)",
    "Kb":"Adhru"
  },
  {
    "Fr":"Courge",
    "Kb":"Taxsayt"
  },
  {
    "Fr":"Courir",
    "Kb":"Azzel"
  },
  {
    "Fr":"Cours",
    "Kb":"Timeghri"
  },
  {
    "Fr":"Course",
    "Kb":"Tazla"
  },
  {
    "Fr":"Courtisan",
    "Kb":"Afdawa"
  },
  {
    "Fr":"Couscous",
    "Kb":"Seksu"
  },
  {
    "Fr":"Couscoussier",
    "Kb":"Ikineksu"
  },
  {
    "Fr":"Couteau",
    "Kb":"Imus"
  },
  {
    "Fr":"Couver",
    "Kb":"Brek"
  },
  {
    "Fr":"Couvercle",
    "Kb":"Tadimt"
  },
  {
    "Fr":"Couverture",
    "Kb":"Taduli"
  },
  {
    "Fr":"Couvrir",
    "Kb":"Del"
  },
  {
    "Fr":"Crachat",
    "Kb":"Imetman"
  },
  {
    "Fr":"Cracher",
    "Kb":"Susef"
  },
  {
    "Fr":"Craie",
    "Kb":"Anegmirs"
  },
  {
    "Fr":"Crainte",
    "Kb":"Tigwdi"
  },
  {
    "Fr":"Cramponner (se)",
    "Kb":"Ckenttedh"
  },
  {
    "Fr":"Créance",
    "Kb":"Taserwast"
  },
  {
    "Fr":"Créancier",
    "Kb":"Aserwas"
  },
  {
    "Fr":"Création",
    "Kb":"Asnulfu"
  },
  {
    "Fr":"Crèche",
    "Kb":"Abughlu"
  },
  {
    "Fr":"Crédit",
    "Kb":"Asmad"
  },
  {
    "Fr":"Créer",
    "Kb":"Smentel"
  },
  {
    "Fr":"Crépuscule",
    "Kb":"Tameddit"
  },
  {
    "Fr":"Crime",
    "Kb":"Angha"
  },
  {
    "Fr":"Criminalité",
    "Kb":"Tinnghi"
  },
  {
    "Fr":"Crise",
    "Kb":"Tazghent"
  },
  {
    "Fr":"Crisper",
    "Kb":"Krurem"
  },
  {
    "Fr":"Critère",
    "Kb":"Asfern"
  },
  {
    "Fr":"Critique ( adj.)",
    "Kb":"Uzghin (uzghinen)"
  },
  {
    "Fr":"Critique ( nf)",
    "Kb":"Azfan"
  },
  {
    "Fr":"Critique ( nm)",
    "Kb":"Azghan"
  },
  {
    "Fr":"Critiquer",
    "Kb":"Zghen"
  },
  {
    "Fr":"Crochet",
    "Kb":"Amextaf"
  },
  {
    "Fr":"Croire",
    "Kb":"Fels"
  },
  {
    "Fr":"Croisé",
    "Kb":"Anmidag"
  },
  {
    "Fr":"Croissance",
    "Kb":"Titit"
  },
  {
    "Fr":"Croissant",
    "Kb":"Tazzirt"
  },
  {
    "Fr":"Croix",
    "Kb":"Amidag"
  },
  {
    "Fr":"Crotte",
    "Kb":"Tabururt (tibururin)"
  },
  {
    "Fr":"Croûte",
    "Kb":"Tanalt"
  },
  {
    "Fr":"Croyance",
    "Kb":"Taflest"
  },
  {
    "Fr":"Cruche",
    "Kb":"Agdur"
  },
  {
    "Fr":"Cube",
    "Kb":"Agasas"
  },
  {
    "Fr":"Cuiller",
    "Kb":"Tiflewt"
  },
  {
    "Fr":"Cuir",
    "Kb":"Taserki"
  },
  {
    "Fr":"Cuire",
    "Kb":"Sebbw"
  },
  {
    "Fr":"Cuisse",
    "Kb":"Taghma"
  },
  {
    "Fr":"Cuit (adj.)",
    "Kb":"Ibbwa"
  },
  {
    "Fr":"Cuivre",
    "Kb":"Nhas"
  },
  {
    "Fr":"Culture",
    "Kb":"Takerza"
  },
  {
    "Fr":"Culture",
    "Kb":"Idles"
  },
  {
    "Fr":"Culturel",
    "Kb":"Adelsan"
  },
  {
    "Fr":"Cupidité",
    "Kb":"Ttmaa"
  },
  {
    "Fr":"Curieux",
    "Kb":"Awnaf"
  },
  {
    "Fr":"Curiosité",
    "Kb":"Tawnafit"
  },
  {
    "Fr":"Cycle",
    "Kb":"Tasufeght"
  },
  {
    "Fr":"Cylindre",
    "Kb":"Awlellu"
  }
];}

$scope.ShowD = function() {
  $scope.words = [
    {
        "Fr": "Dalle",
        "Kb": "Tablatt"
    },
    {
        "Fr": "Danger",
        "Kb": "Amizi"
    },
    {
        "Fr": "Dangereux",
        "Kb": "Amihaw"
    },
    {
        "Fr": "Danser",
        "Kb": "Cdhah"
    },
    {
        "Fr": "Date",
        "Kb": "Azemz"
    },
    {
        "Fr": "Débarrasser",
        "Kb": "Bellez"
    },
    {
        "Fr": "Débat",
        "Kb": "Askasi"
    },
    {
        "Fr": "Débattre",
        "Kb": "Seksi"
    },
    {
        "Fr": "Débilité",
        "Kb": "Talkalt"
    },
    {
        "Fr": "Débit",
        "Kb": "Aktum"
    },
    {
        "Fr": "Débiteur",
        "Kb": "Anektam"
    },
    {
        "Fr": "Déborder",
        "Kb": "Sefl"
    },
    {
        "Fr": "Déboucher",
        "Kb": "Anafar (inufar)"
    },
    {
        "Fr": "Décembre",
        "Kb": "Dujanbir"
    },
    {
        "Fr": "Décevoir",
        "Kb": "Beytel"
    },
    {
        "Fr": "Décharger",
        "Kb": "Zugez"
    },
    {
        "Fr": "Déchet",
        "Kb": "Alammu"
    },
    {
        "Fr": "Déchiffrer",
        "Kb": "Zmek"
    },
    {
        "Fr": "Déchirer",
        "Kb": "Cerreg"
    },
    {
        "Fr": "Déchirure",
        "Kb": "Acerreg"
    },
    {
        "Fr": "Décider",
        "Kb": "Ghets"
    },
    {
        "Fr": "Décision",
        "Kb": "Taghtast"
    },
    {
        "Fr": "Déclarer",
        "Kb": "Berreh"
    },
    {
        "Fr": "Décolorer",
        "Kb": "Ncel"
    },
    {
        "Fr": "Décor",
        "Kb": "Adlag"
    },
    {
        "Fr": "Décorateur",
        "Kb": "Amedlag"
    },
    {
        "Fr": "Décoration (médaille)",
        "Kb": "Abreqqes"
    },
    {
        "Fr": "Décoration (ornement)",
        "Kb": "Adlag"
    },
    {
        "Fr": "Décorer",
        "Kb": "Dleg"
    },
    {
        "Fr": "Décourager",
        "Kb": "Sefcel"
    },
    {
        "Fr": "Découverte",
        "Kb": "Tuzuft"
    },
    {
        "Fr": "Découvrir",
        "Kb": "Zef"
    },
    {
        "Fr": "Décret",
        "Kb": "Tanatt"
    },
    {
        "Fr": "Décrire",
        "Kb": "Glem"
    },
    {
        "Fr": "Défaut",
        "Kb": "Amalad"
    },
    {
        "Fr": "Défendre",
        "Kb": "Sten"
    },
    {
        "Fr": "Défense",
        "Kb": "Ahuddu"
    },
    {
        "Fr": "Défi",
        "Kb": "Acqirrew"
    },
    {
        "Fr": "Déficience",
        "Kb": "Tiggit"
    },
    {
        "Fr": "Défier",
        "Kb": "Cqirrew"
    },
    {
        "Fr": "Défilé",
        "Kb": "Amsudegh"
    },
    {
        "Fr": "Définir",
        "Kb": "Sbadu"
    },
    {
        "Fr": "Définition",
        "Kb": "Tabadut"
    },
    {
        "Fr": "Dégager",
        "Kb": "Eldi"
    },
    {
        "Fr": "Dégoût",
        "Kb": "Amuklu"
    },
    {
        "Fr": "Dégradation",
        "Kb": "Alakay"
    },
    {
        "Fr": "Degré",
        "Kb": "Tafesna"
    },
    {
        "Fr": "Dehors",
        "Kb": "Berra"
    },
    {
        "Fr": "Délai",
        "Kb": "Amendhar"
    },
    {
        "Fr": "Délégué",
        "Kb": "Anesmigel"
    },
    {
        "Fr": "Délinquance",
        "Kb": "Afuggu"
    },
    {
        "Fr": "Délinquant",
        "Kb": "Amfaggu"
    },
    {
        "Fr": "Délire",
        "Kb": "Ahetref"
    },
    {
        "Fr": "Délivrer",
        "Kb": "Jenjem"
    },
    {
        "Fr": "Déluge",
        "Kb": "Azillidh"
    },
    {
        "Fr": "Demain",
        "Kb": "Azekka"
    },
    {
        "Fr": "Demande",
        "Kb": "Tuttsra"
    },
    {
        "Fr": "Demander",
        "Kb": "Suter"
    },
    {
        "Fr": "Demeurer",
        "Kb": "Zdegh"
    },
    {
        "Fr": "Démocrate",
        "Kb": "Amagdu"
    },
    {
        "Fr": "Démocratie",
        "Kb": "Tugdut"
    },
    {
        "Fr": "Démocratisation",
        "Kb": "Asgdud"
    },
    {
        "Fr": "Démolir",
        "Kb": "Hudd"
    },
    {
        "Fr": "Démon",
        "Kb": "Ccittan"
    },
    {
        "Fr": "Démonstratif",
        "Kb": "Ameskan"
    },
    {
        "Fr": "Démonstration",
        "Kb": "Tamsenszayt"
    },
    {
        "Fr": "Démontrer",
        "Kb": "Senszi"
    },
    {
        "Fr": "Dénonciateur",
        "Kb": "Asummal"
    },
    {
        "Fr": "Dense",
        "Kb": "Anesszaw"
    },
    {
        "Fr": "Densité",
        "Kb": "Tanesszi"
    },
    {
        "Fr": "Dent",
        "Kb": "Tughmest"
    },
    {
        "Fr": "Départ",
        "Kb": "Akunser"
    },
    {
        "Fr": "Département",
        "Kb": "Agezdir"
    },
    {
        "Fr": "Dépassement",
        "Kb": "Azerruy"
    },
    {
        "Fr": "Dépendance",
        "Kb": "Tagelt"
    },
    {
        "Fr": "Dépendre",
        "Kb": "Ugel"
    },
    {
        "Fr": "Dépit",
        "Kb": "Tutcha"
    },
    {
        "Fr": "Déplacement",
        "Kb": "Arigez"
    },
    {
        "Fr": "Déplacer",
        "Kb": "Rigez"
    },
    {
        "Fr": "Déposer",
        "Kb": "Sgel"
    },
    {
        "Fr": "Dépôt",
        "Kb": "Aselghes"
    },
    {
        "Fr": "Dépression",
        "Kb": "Aberrazu"
    },
    {
        "Fr": "Député",
        "Kb": "Amazan"
    },
    {
        "Fr": "Déraciné",
        "Kb": "Amakuf"
    },
    {
        "Fr": "Déraciner",
        "Kb": "Sskuf"
    },
    {
        "Fr": "Dérivation",
        "Kb": "Tasuddemt"
    },
    {
        "Fr": "Dérive",
        "Kb": "Asuddim"
    },
    {
        "Fr": "Dérivée (forme)",
        "Kb": "Azellum"
    },
    {
        "Fr": "Dériver",
        "Kb": "Suddem"
    },
    {
        "Fr": "Dernier",
        "Kb": "Aneggaru"
    },
    {
        "Fr": "Descendre",
        "Kb": "Subb"
    },
    {
        "Fr": "Descente",
        "Kb": "Takwessart"
    },
    {
        "Fr": "Description",
        "Kb": "Aglam"
    },
    {
        "Fr": "Déséquilibre",
        "Kb": "Annezruy"
    },
    {
        "Fr": "Déséquilibré (être)",
        "Kb": "Annezri"
    },
    {
        "Fr": "Désert",
        "Kb": "Aneszruf"
    },
    {
        "Fr": "Déshonorer",
        "Kb": "Bbehdel"
    },
    {
        "Fr": "Désir",
        "Kb": "Aseddirem"
    },
    {
        "Fr": "Désordre",
        "Kb": "Tametruyt"
    },
    {
        "Fr": "Dessin",
        "Kb": "Tinnight"
    },
    {
        "Fr": "Dessiner",
        "Kb": "Sunegh"
    },
    {
        "Fr": "Dessous",
        "Kb": "Ddaw"
    },
    {
        "Fr": "Dessus",
        "Kb": "Nnig"
    },
    {
        "Fr": "Détacher",
        "Kb": "Bru"
    },
    {
        "Fr": "Détailler",
        "Kb": "Sulledh"
    },
    {
        "Fr": "Détendre",
        "Kb": "Sillew"
    },
    {
        "Fr": "Détenu",
        "Kb": "Anekruf"
    },
    {
        "Fr": "Détermination",
        "Kb": "Aguccel"
    },
    {
        "Fr": "Détester",
        "Kb": "Ksen"
    },
    {
        "Fr": "Détruire",
        "Kb": "Ssedrem"
    },
    {
        "Fr": "Dette",
        "Kb": "Amerwas"
    },
    {
        "Fr": "Deuxième",
        "Kb": "Wissin"
    },
    {
        "Fr": "Devancer",
        "Kb": "Zwir"
    },
    {
        "Fr": "Devant",
        "Kb": "Zdat"
    },
    {
        "Fr": "Développement",
        "Kb": "Taneflit"
    },
    {
        "Fr": "Développer",
        "Kb": "Ssendel"
    },
    {
        "Fr": "Devenir (n)",
        "Kb": "Tughult"
    },
    {
        "Fr": "Devenir (v)",
        "Kb": "Ughal"
    },
    {
        "Fr": "Devin",
        "Kb": "Ineqqiqi"
    },
    {
        "Fr": "Deviner",
        "Kb": "Cellek"
    },
    {
        "Fr": "Devoir (n)",
        "Kb": "Aghan"
    },
    {
        "Fr": "Dévoué",
        "Kb": "Amidhwel"
    },
    {
        "Fr": "Diagonal",
        "Kb": "Ubdis"
    },
    {
        "Fr": "Dialectique",
        "Kb": "Tamestala"
    },
    {
        "Fr": "Dialogue",
        "Kb": "Adiwenni"
    },
    {
        "Fr": "Dialoguer",
        "Kb": "Sdiwen"
    },
    {
        "Fr": "Diamètre",
        "Kb": "Akdu"
    },
    {
        "Fr": "Diaphragme",
        "Kb": "Ileft"
    },
    {
        "Fr": "Diarrhée",
        "Kb": "Bezzeeka"
    },
    {
        "Fr": "Dichotomie",
        "Kb": "Tasnatit"
    },
    {
        "Fr": "Dictateur",
        "Kb": "Asnaraf"
    },
    {
        "Fr": "Dictée",
        "Kb": "Tazabut"
    },
    {
        "Fr": "Dicter",
        "Kb": "Zubet"
    },
    {
        "Fr": "Dictionnaire",
        "Kb": "Amawal"
    },
    {
        "Fr": "Différence",
        "Kb": "Tameszla"
    },
    {
        "Fr": "Différencier",
        "Kb": "Smeszli"
    },
    {
        "Fr": "Différent",
        "Kb": "Imeszli"
    },
    {
        "Fr": "Différentiel",
        "Kb": "Aneszlay"
    },
    {
        "Fr": "Différer",
        "Kb": "Ssemti"
    },
    {
        "Fr": "Difficile",
        "Kb": "Agermam"
    },
    {
        "Fr": "Difficulté",
        "Kb": "Tiggermemt"
    },
    {
        "Fr": "Diffuser",
        "Kb": "Zenzew"
    },
    {
        "Fr": "Dignité",
        "Kb": "Agemmir"
    },
    {
        "Fr": "Dimanche",
        "Kb": "Atcer"
    },
    {
        "Fr": "Dimension",
        "Kb": "Aseggiw"
    },
    {
        "Fr": "Diminuer",
        "Kb": "Ktem"
    },
    {
        "Fr": "Diminution",
        "Kb": "Aktam"
    },
    {
        "Fr": "Dîner",
        "Kb": "Imensi"
    },
    {
        "Fr": "Diplôme",
        "Kb": "Agerdas"
    },
    {
        "Fr": "Dire",
        "Kb": "Ini"
    },
    {
        "Fr": "Direct",
        "Kb": "Usrid"
    },
    {
        "Fr": "Direct (en)",
        "Kb": "Srid"
    },
    {
        "Fr": "Directeur",
        "Kb": "Anemhal"
    },
    {
        "Fr": "Direction",
        "Kb": "Tamehla"
    },
    {
        "Fr": "Direction (sens)",
        "Kb": "Tanila"
    },
    {
        "Fr": "Diriger",
        "Kb": "Nil"
    },
    {
        "Fr": "Discipline",
        "Kb": "Aghyud"
    },
    {
        "Fr": "Discipliné",
        "Kb": "Amaghyad"
    },
    {
        "Fr": "Discipline (savoir)",
        "Kb": "Agemmun"
    },
    {
        "Fr": "Discours",
        "Kb": "Taneqqist"
    },
    {
        "Fr": "Discret",
        "Kb": "Afrari"
    },
    {
        "Fr": "Discrimination",
        "Kb": "Asnuhyu"
    },
    {
        "Fr": "Discussion",
        "Kb": "Amyannan"
    },
    {
        "Fr": "Discuter",
        "Kb": "Myini"
    },
    {
        "Fr": "Dispenser",
        "Kb": "Zzemzi"
    },
    {
        "Fr": "Disperser",
        "Kb": "Sewziwez"
    },
    {
        "Fr": "Dispersion",
        "Kb": "Awziwez"
    },
    {
        "Fr": "Disponibilité",
        "Kb": "Tanamalt"
    },
    {
        "Fr": "Disponible",
        "Kb": "Anamal"
    },
    {
        "Fr": "Dispute",
        "Kb": "Tcaqlala"
    },
    {
        "Fr": "Disque",
        "Kb": "Adhebsi"
    },
    {
        "Fr": "Dissertation",
        "Kb": "Tamestalt"
    },
    {
        "Fr": "Dissimulation",
        "Kb": "Aserkes"
    },
    {
        "Fr": "Dissolution",
        "Kb": "Aselyem"
    },
    {
        "Fr": "Dissoudre",
        "Kb": "Selyem"
    },
    {
        "Fr": "Distance",
        "Kb": "Asettum"
    },
    {
        "Fr": "Distant",
        "Kb": "Amestam"
    },
    {
        "Fr": "Distinguer",
        "Kb": "Zlem"
    },
    {
        "Fr": "Distraction",
        "Kb": "Tamazlalt"
    },
    {
        "Fr": "Distrait",
        "Kb": "Amazlal"
    },
    {
        "Fr": "Distribuer",
        "Kb": "Sedger"
    },
    {
        "Fr": "Distribution",
        "Kb": "Asedger"
    },
    {
        "Fr": "Divergence",
        "Kb": "Ankas"
    },
    {
        "Fr": "Divergent",
        "Kb": "Unkis"
    },
    {
        "Fr": "Diversifier",
        "Kb": "Sebrer"
    },
    {
        "Fr": "Diversité",
        "Kb": "Abrar"
    },
    {
        "Fr": "Diviser",
        "Kb": "Szun"
    },
    {
        "Fr": "Division",
        "Kb": "Taszunt"
    },
    {
        "Fr": "Divorce",
        "Kb": "Uluf"
    },
    {
        "Fr": "Doctrine",
        "Kb": "Asekkud"
    },
    {
        "Fr": "Document",
        "Kb": "Tateggart"
    },
    {
        "Fr": "Dogmatique",
        "Kb": "Adaslan"
    },
    {
        "Fr": "Dogmatisme",
        "Kb": "Adaslaszri"
    },
    {
        "Fr": "Dogme",
        "Kb": "Adasil"
    },
    {
        "Fr": "Doigt",
        "Kb": "Adhad"
    },
    {
        "Fr": "Domaine",
        "Kb": "Taghult"
    },
    {
        "Fr": "Domestiquer",
        "Kb": "Sgerd"
    },
    {
        "Fr": "Domicile",
        "Kb": "Azeddugh"
    },
    {
        "Fr": "Domination",
        "Kb": "Aghmar"
    },
    {
        "Fr": "Dominer",
        "Kb": "Ghmer"
    },
    {
        "Fr": "Don",
        "Kb": "Tamecfit"
    },
    {
        "Fr": "Donc",
        "Kb": "Dagh"
    },
    {
        "Fr": "Donnée",
        "Kb": "Agwettil"
    },
    {
        "Fr": "Donner",
        "Kb": "Efk"
    },
    {
        "Fr": "Dormir",
        "Kb": "Ettes"
    },
    {
        "Fr": "Dossier",
        "Kb": "Akaram"
    },
    {
        "Fr": "Double",
        "Kb": "Uslig"
    },
    {
        "Fr": "Douceur",
        "Kb": "Tadhfi"
    },
    {
        "Fr": "Doué",
        "Kb": "Afakkas"
    },
    {
        "Fr": "Douleur",
        "Kb": "Tikma"
    },
    {
        "Fr": "Doute",
        "Kb": "Asurdu"
    },
    {
        "Fr": "Douter",
        "Kb": "Sured"
    },
    {
        "Fr": "Doux (adj.)",
        "Kb": "Adhfi"
    },
    {
        "Fr": "Doux (être)",
        "Kb": "Imim"
    },
    {
        "Fr": "Doyen",
        "Kb": "Amghar"
    },
    {
        "Fr": "Drame",
        "Kb": "Tamuggit"
    },
    {
        "Fr": "Dressage",
        "Kb": "Asaghad"
    },
    {
        "Fr": "Dresser",
        "Kb": "Sughed"
    },
    {
        "Fr": "Dribbling",
        "Kb": "Aghussu"
    },
    {
        "Fr": "Droit",
        "Kb": "Azref"
    },
    {
        "Fr": "Dur",
        "Kb": "Aquran"
    },
    {
        "Fr": "Durée",
        "Kb": "Tanzagt"
    },
    {
        "Fr": "Durer",
        "Kb": "Nzeg"
    },
    {
        "Fr": "Dureté",
        "Kb": "Taghert"
    },
    {
        "Fr": "Dynamique",
        "Kb": "Tilhi"
    },
    {
        "Fr": "Dyslexie",
        "Kb": "Tarewrawt"
    }
];

  }
$scope.ShowE = function() {
  $scope.words = [
    {
        "Fr": "Eau",
        "Kb": "Aman"
    },
    {
        "Fr": "Ebauche",
        "Kb": "Abgez"
    },
    {
        "Fr": "Ebloui (tre)",
        "Kb": "Klulu"
    },
    {
        "Fr": "Eblouissement",
        "Kb": "Calwaw"
    },
    {
        "Fr": "Ecale",
        "Kb": "Iclem"
    },
    {
        "Fr": "Ecart",
        "Kb": "Ankaz"
    },
    {
        "Fr": "Ecarter",
        "Kb": "Senkez"
    },
    {
        "Fr": "Echange",
        "Kb": "Asmeske"
    },
    {
        "Fr": "Echantillon",
        "Kb": "Talemt"
    },
    {
        "Fr": "Echapper",
        "Kb": "Fertel"
    },
    {
        "Fr": "Echarde",
        "Kb": "Aghtir"
    },
    {
        "Fr": "Echec",
        "Kb": "Abrir"
    },
    {
        "Fr": "Echelle",
        "Kb": "Taskala"
    },
    {
        "Fr": "Echelon",
        "Kb": "Tafesna"
    },
    {
        "Fr": "Echo",
        "Kb": "Anza"
    },
    {
        "Fr": "Echouer",
        "Kb": "Udh"
    },
    {
        "Fr": "Eclair",
        "Kb": "Usem"
    },
    {
        "Fr": "Eclairage",
        "Kb": "Asfaw"
    },
    {
        "Fr": "Eclairer",
        "Kb": "Sfiw"
    },
    {
        "Fr": "Eclaireur",
        "Kb": "Afadhadh"
    },
    {
        "Fr": "Eclat dŽbris",
        "Kb": "Asettigh"
    },
    {
        "Fr": "Eclat lumineux",
        "Kb": "Ticci"
    },
    {
        "Fr": "Eclat son",
        "Kb": "Aleffugh"
    },
    {
        "Fr": "Eclatant",
        "Kb": "Aseflalay"
    },
    {
        "Fr": "Eclater",
        "Kb": "Nefruzzi"
    },
    {
        "Fr": "Eclipse",
        "Kb": "Afsax"
    },
    {
        "Fr": "Ecole",
        "Kb": "Agherbaz"
    },
    {
        "Fr": "Ecolier",
        "Kb": "Abalmud"
    },
    {
        "Fr": "Ecologie",
        "Kb": "Tanessawnest"
    },
    {
        "Fr": "Economat",
        "Kb": "Adamus"
    },
    {
        "Fr": "Econome",
        "Kb": "Ademmas"
    },
    {
        "Fr": "Economie",
        "Kb": "Tadamsa"
    },
    {
        "Fr": "Economique",
        "Kb": "Udmis"
    },
    {
        "Fr": "Economiste",
        "Kb": "Adamsan"
    },
    {
        "Fr": "Ecorce",
        "Kb": "Tagbett"
    },
    {
        "Fr": "Ecorcher",
        "Kb": "Azu"
    },
    {
        "Fr": "EcornŽ",
        "Kb": "Agenfadh"
    },
    {
        "Fr": "Ecosser",
        "Kb": "Sefriri"
    },
    {
        "Fr": "Ecoulement",
        "Kb": "Arag"
    },
    {
        "Fr": "Ecouler",
        "Kb": "Areg"
    },
    {
        "Fr": "Ecoute",
        "Kb": "Asmuzget"
    },
    {
        "Fr": "Ecouter",
        "Kb": "Semhess"
    },
    {
        "Fr": "Ecouteurs",
        "Kb": "Imsefliden"
    },
    {
        "Fr": "Ecran",
        "Kb": "Agdil"
    },
    {
        "Fr": "Ecrire",
        "Kb": "Aru"
    },
    {
        "Fr": "Ecriture",
        "Kb": "Tira"
    },
    {
        "Fr": "Ecrivain",
        "Kb": "Amaru"
    },
    {
        "Fr": "Ecueil",
        "Kb": "Azig (izaggen)"
    },
    {
        "Fr": "Ecume",
        "Kb": "Arghut"
    },
    {
        "Fr": "Edification",
        "Kb": "Tameskiwt"
    },
    {
        "Fr": "Edifice",
        "Kb": "Asuk"
    },
    {
        "Fr": "Edifier",
        "Kb": "Esk"
    },
    {
        "Fr": "Editeur",
        "Kb": "Amaszrag"
    },
    {
        "Fr": "Edition",
        "Kb": "Taszrigt"
    },
    {
        "Fr": "Editorial",
        "Kb": "Tagejdit"
    },
    {
        "Fr": "Editorialiste",
        "Kb": "Agejdan"
    },
    {
        "Fr": "Educateur",
        "Kb": "Asegman"
    },
    {
        "Fr": "Education",
        "Kb": "Asegmi"
    },
    {
        "Fr": "Eduquer",
        "Kb": "Ssegmi"
    },
    {
        "Fr": "Effacer",
        "Kb": "Sfedh"
    },
    {
        "Fr": "Effectif (adj.)",
        "Kb": "Asemday"
    },
    {
        "Fr": "Effet",
        "Kb": "Asemdu"
    },
    {
        "Fr": "Effeuiller",
        "Kb": "Crew"
    },
    {
        "Fr": "Efficace",
        "Kb": "Amellil"
    },
    {
        "Fr": "EfficacitŽ",
        "Kb": "Tamellit"
    },
    {
        "Fr": "Effleurer",
        "Kb": "Celledh"
    },
    {
        "Fr": "Effondrer (sÕ)",
        "Kb": "Gel"
    },
    {
        "Fr": "Effort",
        "Kb": "Tamessumant"
    },
    {
        "Fr": "Effrayer",
        "Kb": "Saggwed"
    },
    {
        "Fr": "Egal",
        "Kb": "Ugdu"
    },
    {
        "Fr": "Egalisation",
        "Kb": "Asegdu"
    },
    {
        "Fr": "Egaliser",
        "Kb": "Segdu"
    },
    {
        "Fr": "EgalitŽ",
        "Kb": "Tagadda"
    },
    {
        "Fr": "Egocentrisme",
        "Kb": "Tumasezrit"
    },
    {
        "Fr": "Egoisme",
        "Kb": "Timirixeft"
    },
    {
        "Fr": "Ego•ste",
        "Kb": "Imirixf"
    },
    {
        "Fr": "Egorger",
        "Kb": "Zlu"
    },
    {
        "Fr": "Egout",
        "Kb": "Tazulixt"
    },
    {
        "Fr": "Elaboration",
        "Kb": "Asuteb"
    },
    {
        "Fr": "Elaborer",
        "Kb": "Suteb"
    },
    {
        "Fr": "Elaguer",
        "Kb": "Zber"
    },
    {
        "Fr": "Elan",
        "Kb": "Antag"
    },
    {
        "Fr": "Elargir",
        "Kb": "Sbirew"
    },
    {
        "Fr": "ElasticitŽ",
        "Kb": "Alwiwedh"
    },
    {
        "Fr": "Elastique",
        "Kb": "Alwawadh"
    },
    {
        "Fr": "Elastique (tre)",
        "Kb": "Lwiwedh"
    },
    {
        "Fr": "Electeur",
        "Kb": "Aferran"
    },
    {
        "Fr": "Election",
        "Kb": "Tafrant"
    },
    {
        "Fr": "ElectricitŽ",
        "Kb": "Trisiti"
    },
    {
        "Fr": "ElŽgance",
        "Kb": "Tasrifa"
    },
    {
        "Fr": "ElŽgant",
        "Kb": "Asrif"
    },
    {
        "Fr": "ElŽgiaque",
        "Kb": "Azneffa"
    },
    {
        "Fr": "ElŽgie",
        "Kb": "Azneffu"
    },
    {
        "Fr": "ElŽment",
        "Kb": "Aferdis"
    },
    {
        "Fr": "ElŽmentaire",
        "Kb": "Aferdas"
    },
    {
        "Fr": "Elevage",
        "Kb": "Takessi"
    },
    {
        "Fr": "ElŽvation",
        "Kb": "Anaqel"
    },
    {
        "Fr": "Elve",
        "Kb": "Anelmad"
    },
    {
        "Fr": "Elever",
        "Kb": "Naqel"
    },
    {
        "Fr": "Elimination",
        "Kb": "Asfal"
    },
    {
        "Fr": "Eliminer",
        "Kb": "Asef"
    },
    {
        "Fr": "Elire",
        "Kb": "Fren"
    },
    {
        "Fr": "Elite",
        "Kb": "Tufut"
    },
    {
        "Fr": "Elle",
        "Kb": "Nettsat"
    },
    {
        "Fr": "Elles",
        "Kb": "Nitenti"
    },
    {
        "Fr": "Ellipse",
        "Kb": "Taglayt"
    },
    {
        "Fr": "Eloge",
        "Kb": "Asulgh"
    },
    {
        "Fr": "Eloignement",
        "Kb": "Agugu"
    },
    {
        "Fr": "Eloquence",
        "Kb": "Tasraqqayt"
    },
    {
        "Fr": "Eloquent",
        "Kb": "Asraqqa"
    },
    {
        "Fr": "Elu",
        "Kb": "Ufrin"
    },
    {
        "Fr": "Emanation",
        "Kb": "Asadaw"
    },
    {
        "Fr": "Emancipation",
        "Kb": "Tasderfit"
    },
    {
        "Fr": "Emanciper",
        "Kb": "Sderfi"
    },
    {
        "Fr": "Emaner",
        "Kb": "Sdew"
    },
    {
        "Fr": "Embrasser",
        "Kb": "Ssuden"
    },
    {
        "Fr": "Embuscade",
        "Kb": "Akmin"
    },
    {
        "Fr": "Emergence",
        "Kb": "Agwmadh"
    },
    {
        "Fr": "Emetteur",
        "Kb": "Amesgal"
    },
    {
        "Fr": "Emettre",
        "Kb": "Sgel"
    },
    {
        "Fr": "Emeute",
        "Kb": "Taghewwaght"
    },
    {
        "Fr": "Emigration",
        "Kb": "Innig"
    },
    {
        "Fr": "Emigre",
        "Kb": "Iminig"
    },
    {
        "Fr": "Emigrer",
        "Kb": "Inig"
    },
    {
        "Fr": "Emission",
        "Kb": "Tasglit"
    },
    {
        "Fr": "Emmagasiner",
        "Kb": "Selghes"
    },
    {
        "Fr": "Emmener",
        "Kb": "Awi"
    },
    {
        "Fr": "Emotion",
        "Kb": "Tadhist"
    },
    {
        "Fr": "Empereur",
        "Kb": "Amenkad"
    },
    {
        "Fr": "Emphase",
        "Kb": "Ufay"
    },
    {
        "Fr": "Empire",
        "Kb": "Amenkud"
    },
    {
        "Fr": "Empirique",
        "Kb": "Asarmi"
    },
    {
        "Fr": "Emploi",
        "Kb": "Tamrest"
    },
    {
        "Fr": "EmployŽ",
        "Kb": "Amaris"
    },
    {
        "Fr": "EmployŽ (tre)",
        "Kb": "Mres"
    },
    {
        "Fr": "Employer",
        "Kb": "Semres"
    },
    {
        "Fr": "Employeur",
        "Kb": "Asermas"
    },
    {
        "Fr": "Emprunt",
        "Kb": "Arettal"
    },
    {
        "Fr": "Emprunteur",
        "Kb": "Amerdhal"
    },
    {
        "Fr": "Emulation",
        "Kb": "Amszaszal"
    },
    {
        "Fr": "En gŽnŽral",
        "Kb": "S umata"
    },
    {
        "Fr": "Encadrement",
        "Kb": "Asegrer"
    },
    {
        "Fr": "Encadrer",
        "Kb": "Segrer"
    },
    {
        "Fr": "Enceinte (tre)",
        "Kb": "S tadist"
    },
    {
        "Fr": "Encens",
        "Kb": "Idjawi"
    },
    {
        "Fr": "Enchevtrement",
        "Kb": "Annerbaz"
    },
    {
        "Fr": "Enclos",
        "Kb": "Zzerb"
    },
    {
        "Fr": "Enclume",
        "Kb": "Tuggunt"
    },
    {
        "Fr": "Encore",
        "Kb": "Dagh"
    },
    {
        "Fr": "Encre",
        "Kb": "Aselmegh"
    },
    {
        "Fr": "Encrier",
        "Kb": "Takebbatt"
    },
    {
        "Fr": "EncyclopŽdie",
        "Kb": "Tasanayt"
    },
    {
        "Fr": "EndŽmique",
        "Kb": "Amughel"
    },
    {
        "Fr": "Enduire",
        "Kb": "Dhlu"
    },
    {
        "Fr": "Energie",
        "Kb": "Azuren"
    },
    {
        "Fr": "Enfant",
        "Kb": "Agrud"
    },
    {
        "Fr": "Enfanter",
        "Kb": "Arew"
    },
    {
        "Fr": "Enfer",
        "Kb": "Timess"
    },
    {
        "Fr": "Enfiler",
        "Kb": "Qqen"
    },
    {
        "Fr": "Enfler",
        "Kb": "Bzeg"
    },
    {
        "Fr": "Enflure",
        "Kb": "Acelbudh"
    },
    {
        "Fr": "Enfuir (s Õ)",
        "Kb": "Rwel"
    },
    {
        "Fr": "Engagement",
        "Kb": "Akfawel"
    },
    {
        "Fr": "Engager (s Õ)",
        "Kb": "Kfiwel"
    },
    {
        "Fr": "Engraisser",
        "Kb": "Aalef"
    },
    {
        "Fr": "Enigme",
        "Kb": "Tunszart"
    },
    {
        "Fr": "Enjeu",
        "Kb": "Asurs"
    },
    {
        "Fr": "Ennemi",
        "Kb": "Acengu"
    },
    {
        "Fr": "Ennui",
        "Kb": "Taremmight"
    },
    {
        "Fr": "Ennuyer",
        "Kb": "xiq"
    },
    {
        "Fr": "EnoncŽ",
        "Kb": "Tinawt"
    },
    {
        "Fr": "Enqute",
        "Kb": "Tasestant"
    },
    {
        "Fr": "Enquter",
        "Kb": "Sesten"
    },
    {
        "Fr": "Enquteur",
        "Kb": "Amestan"
    },
    {
        "Fr": "Enregistrement",
        "Kb": "Aklas"
    },
    {
        "Fr": "Enregistreur",
        "Kb": "Kles"
    },
    {
        "Fr": "EnrouŽ (tre)",
        "Kb": "Ameklas"
    },
    {
        "Fr": "Enroulement",
        "Kb": "Tunndha"
    },
    {
        "Fr": "Enrouler",
        "Kb": "Nnedh"
    },
    {
        "Fr": "Enrouler (sÕ)",
        "Kb": "Zgen"
    },
    {
        "Fr": "Enseignant",
        "Kb": "Aselmad"
    },
    {
        "Fr": "Enseignement",
        "Kb": "Aselmed"
    },
    {
        "Fr": "Enseigner",
        "Kb": "Selmed"
    },
    {
        "Fr": "Ensemble",
        "Kb": "Tagrumma"
    },
    {
        "Fr": "Ensevelir",
        "Kb": "Cfen"
    },
    {
        "Fr": "Entasser",
        "Kb": "Kerker"
    },
    {
        "Fr": "Entente",
        "Kb": "Amtawa"
    },
    {
        "Fr": "EnterrŽ",
        "Kb": "Yetswamdhel"
    },
    {
        "Fr": "Enterrement",
        "Kb": "Tamdhelt"
    },
    {
        "Fr": "Enterrer",
        "Kb": "Mdhel"
    },
    {
        "Fr": "Enttement",
        "Kb": "Agharam"
    },
    {
        "Fr": "Entier",
        "Kb": "Ummid"
    },
    {
        "Fr": "Entracte",
        "Kb": "Aferdi"
    },
    {
        "Fr": "Entraide",
        "Kb": "Tamilalt"
    },
    {
        "Fr": "Entraider (sÕ)",
        "Kb": "Msetlel"
    },
    {
        "Fr": "Entra”nement",
        "Kb": "Aslughmu"
    },
    {
        "Fr": "Entra”neur",
        "Kb": "Asleghmay"
    },
    {
        "Fr": "Entrave",
        "Kb": "Abran"
    },
    {
        "Fr": "Entre",
        "Kb": "Gar"
    },
    {
        "Fr": "EntrŽe",
        "Kb": "Aneckum"
    },
    {
        "Fr": "Entreprendre",
        "Kb": "Rmes"
    },
    {
        "Fr": "Entrepreneur",
        "Kb": "Aremmas"
    },
    {
        "Fr": "Entreprise",
        "Kb": "Tarmist"
    },
    {
        "Fr": "Entrer",
        "Kb": "Kcem"
    },
    {
        "Fr": "Entretien",
        "Kb": "Adiwenni"
    },
    {
        "Fr": "EnumŽration",
        "Kb": "Asmiwer"
    },
    {
        "Fr": "EnumŽrer",
        "Kb": "Smiwer"
    },
    {
        "Fr": "Envahir",
        "Kb": "Nbez"
    },
    {
        "Fr": "Envahissement",
        "Kb": "Anbaz"
    },
    {
        "Fr": "Envahisseur",
        "Kb": "Anebbaz"
    },
    {
        "Fr": "Enveloppe",
        "Kb": "Alessi"
    },
    {
        "Fr": "Envelopper",
        "Kb": "Ttsel"
    },
    {
        "Fr": "Envier",
        "Kb": "Seddern"
    },
    {
        "Fr": "Envies",
        "Kb": "Tinitin"
    },
    {
        "Fr": "Environ (approx.)",
        "Kb": "Tasmekta n É."
    },
    {
        "Fr": "Environnement",
        "Kb": "Tawennatt"
    },
    {
        "Fr": "Environs (nm pl.)",
        "Kb": "Aszi"
    },
    {
        "Fr": "Envoyer",
        "Kb": "Ceggaa"
    },
    {
        "Fr": "Epais",
        "Kb": "Zur"
    },
    {
        "Fr": "Epaisseur",
        "Kb": "Tuzart"
    },
    {
        "Fr": "Epanouir",
        "Kb": "Rzuzzegh"
    },
    {
        "Fr": "Epanouissement",
        "Kb": "Arzuzzegh"
    },
    {
        "Fr": "Epargne",
        "Kb": "Asegfer"
    },
    {
        "Fr": "Epargner",
        "Kb": "Segfer"
    },
    {
        "Fr": "Eparpiller",
        "Kb": "Wzzaa"
    },
    {
        "Fr": "Epaule",
        "Kb": "Tayets"
    },
    {
        "Fr": "EpŽe",
        "Kb": "Isekki"
    },
    {
        "Fr": "Epeler",
        "Kb": "Ennen"
    },
    {
        "Fr": "Epicerie",
        "Kb": "Tabeqqalt"
    },
    {
        "Fr": "Epicier",
        "Kb": "Abeqqal"
    },
    {
        "Fr": "Epine",
        "Kb": "Asennan"
    },
    {
        "Fr": "Epingle",
        "Kb": "Amessak"
    },
    {
        "Fr": "Episcope",
        "Kb": "Aserszar"
    },
    {
        "Fr": "Eponge",
        "Kb": "Tajettutt"
    },
    {
        "Fr": "Epoque",
        "Kb": "Tallit"
    },
    {
        "Fr": "Epreuve",
        "Kb": "Tirmit"
    },
    {
        "Fr": "Equateur",
        "Kb": "Asebges"
    },
    {
        "Fr": "Equation",
        "Kb": "Tamesmatt"
    },
    {
        "Fr": "Equilibrage",
        "Kb": "Amnekna"
    },
    {
        "Fr": "Equilibre",
        "Kb": "Amnekni"
    },
    {
        "Fr": "EquilibrŽ",
        "Kb": "Imnekni"
    },
    {
        "Fr": "Equilibrer",
        "Kb": "Mneki"
    },
    {
        "Fr": "Equipe",
        "Kb": "Taghlamt"
    },
    {
        "Fr": "Equipement",
        "Kb": "Asgalef"
    },
    {
        "Fr": "Equiper",
        "Kb": "Sgilef"
    },
    {
        "Fr": "Equipier",
        "Kb": "Aneghlam"
    },
    {
        "Fr": "Equitation",
        "Kb": "Tanaka"
    },
    {
        "Fr": "Equivalence",
        "Kb": "Tagdazelt"
    },
    {
        "Fr": "Equivalent",
        "Kb": "Agdazal"
    },
    {
        "Fr": "Ere",
        "Kb": "Tallit"
    },
    {
        "Fr": "Erotisme",
        "Kb": "Anatas"
    },
    {
        "Fr": "Errer",
        "Kb": "Menttar"
    },
    {
        "Fr": "Erreur",
        "Kb": "Taniwit"
    },
    {
        "Fr": "Escadre",
        "Kb": "Tagaluft"
    },
    {
        "Fr": "Escadrille",
        "Kb": "Adefrir"
    },
    {
        "Fr": "Escadron",
        "Kb": "Agaluf"
    },
    {
        "Fr": "Escaliers",
        "Kb": "Asanen"
    },
    {
        "Fr": "Escargot",
        "Kb": "Aarus"
    },
    {
        "Fr": "Esclave",
        "Kb": "Akli"
    },
    {
        "Fr": "Escorte",
        "Kb": "Tangift"
    },
    {
        "Fr": "Escorter",
        "Kb": "Ngef"
    },
    {
        "Fr": "Espace",
        "Kb": "Tallunt"
    },
    {
        "Fr": "Espce",
        "Kb": "Talmest"
    },
    {
        "Fr": "EspŽrance",
        "Kb": "Asirem"
    },
    {
        "Fr": "EspŽrer",
        "Kb": "Ssirem"
    },
    {
        "Fr": "Espion",
        "Kb": "Aghalli"
    },
    {
        "Fr": "Espoir",
        "Kb": "Anaruz"
    },
    {
        "Fr": "Esprit",
        "Kb": "Anelli"
    },
    {
        "Fr": "Esquisse",
        "Kb": "Abeckil"
    },
    {
        "Fr": "Essai",
        "Kb": "Aaradh"
    },
    {
        "Fr": "Essayer",
        "Kb": "Aaredh"
    },
    {
        "Fr": "Essence",
        "Kb": "Tumast"
    },
    {
        "Fr": "Essoufflement",
        "Kb": "Buneggaf"
    },
    {
        "Fr": "Essuyer",
        "Kb": "Sfedh"
    },
    {
        "Fr": "Est",
        "Kb": "Agmudh"
    },
    {
        "Fr": "Estime",
        "Kb": "Adakad"
    },
    {
        "Fr": "Estimer",
        "Kb": "Dked"
    },
    {
        "Fr": "Estomac",
        "Kb": "Aaebbudh"
    },
    {
        "Fr": "Estrade",
        "Kb": "Alektu"
    },
    {
        "Fr": "Et",
        "Kb": "D"
    },
    {
        "Fr": "Etablir",
        "Kb": "Seghser"
    },
    {
        "Fr": "Etablir (sÕ)",
        "Kb": "Ghser"
    },
    {
        "Fr": "Etablissement",
        "Kb": "Aghsu"
    },
    {
        "Fr": "Etage",
        "Kb": "Annag"
    },
    {
        "Fr": "Etagre",
        "Kb": "Ayir"
    },
    {
        "Fr": "Etaler",
        "Kb": "Sefletgh"
    },
    {
        "Fr": "Etalon (bte)",
        "Kb": "Amal"
    },
    {
        "Fr": "Etalon (mesure)",
        "Kb": "Tizeght"
    },
    {
        "Fr": "Etang",
        "Kb": "Tamda"
    },
    {
        "Fr": "Etape",
        "Kb": "Amecwar"
    },
    {
        "Fr": "Etat",
        "Kb": "Addad"
    },
    {
        "Fr": "Etat (nation)",
        "Kb": "Awanek"
    },
    {
        "Fr": "Etc.",
        "Kb": "Atg (ar tigra)"
    },
    {
        "Fr": "EtŽ",
        "Kb": "Anebdu"
    },
    {
        "Fr": "Eteindre",
        "Kb": "Sexsi"
    },
    {
        "Fr": "Etendre",
        "Kb": "Fser"
    },
    {
        "Fr": "Etendre (sÕ)",
        "Kb": "Sszel"
    },
    {
        "Fr": "Eternel",
        "Kb": "Amaghlal"
    },
    {
        "Fr": "EternitŽ",
        "Kb": "Aghlul"
    },
    {
        "Fr": "Eternuer",
        "Kb": "Aadhes"
    },
    {
        "Fr": "Ethique",
        "Kb": "Tihdi"
    },
    {
        "Fr": "Etincelle",
        "Kb": "Ifettiwej"
    },
    {
        "Fr": "Etoile",
        "Kb": "Itri"
    },
    {
        "Fr": "Etonnement",
        "Kb": "Abhadh"
    },
    {
        "Fr": "Etonner",
        "Kb": "Sebhedh"
    },
    {
        "Fr": "Etonner (sÕ)",
        "Kb": "Bhedh"
    },
    {
        "Fr": "Etranger",
        "Kb": "Aberrani"
    },
    {
        "Fr": "Etre",
        "Kb": "Ili"
    },
    {
        "Fr": "Etre (lÕ)",
        "Kb": "Tagmest"
    },
    {
        "Fr": "Etude",
        "Kb": "Tazrawt"
    },
    {
        "Fr": "Etudiant",
        "Kb": "Anelmad"
    },
    {
        "Fr": "Etudier",
        "Kb": "Zrew"
    },
    {
        "Fr": "Evader (sÕ)",
        "Kb": "Rwel"
    },
    {
        "Fr": "Evaluation",
        "Kb": "Tamaduzt"
    },
    {
        "Fr": "Evaluer",
        "Kb": "Udez"
    },
    {
        "Fr": "Evasion",
        "Kb": "Tarewla"
    },
    {
        "Fr": "Eveil",
        "Kb": "Tanekra"
    },
    {
        "Fr": "Eveiller",
        "Kb": "Ssakwi"
    },
    {
        "Fr": "Evnement",
        "Kb": "Tadyant"
    },
    {
        "Fr": "Eventer",
        "Kb": "Sbuhru"
    },
    {
        "Fr": "Evidence",
        "Kb": "Tammunt"
    },
    {
        "Fr": "Evident",
        "Kb": "Amunu"
    },
    {
        "Fr": "Eviter",
        "Kb": "Sunef"
    },
    {
        "Fr": "Evocation",
        "Kb": "Abdar"
    },
    {
        "Fr": "Evoluer",
        "Kb": "Mhez"
    },
    {
        "Fr": "Evolution",
        "Kb": "Tamhazt"
    },
    {
        "Fr": "Evoquer",
        "Kb": "Bdar"
    },
    {
        "Fr": "Exact",
        "Kb": "Nnit"
    },
    {
        "Fr": "Exactitude",
        "Kb": "Anefren"
    },
    {
        "Fr": "ExagŽration",
        "Kb": "Tamayumt"
    },
    {
        "Fr": "ExagŽrer",
        "Kb": "Ayem"
    },
    {
        "Fr": "Examen",
        "Kb": "Akayad"
    },
    {
        "Fr": "Examinateur",
        "Kb": "Amakyad"
    },
    {
        "Fr": "Examiner",
        "Kb": "Sekyed"
    },
    {
        "Fr": "ExcŽdent",
        "Kb": "Acayadh"
    },
    {
        "Fr": "ExceptŽ",
        "Kb": "Slid"
    },
    {
        "Fr": "Excepter",
        "Kb": "Slid"
    },
    {
        "Fr": "Exception",
        "Kb": "Tasureft"
    },
    {
        "Fr": "Excs",
        "Kb": "Azerray"
    },
    {
        "Fr": "Excitation",
        "Kb": "Asduy"
    },
    {
        "Fr": "Excursion",
        "Kb": "Amurri"
    },
    {
        "Fr": "Excuse",
        "Kb": "Asnuruf"
    },
    {
        "Fr": "Excuser",
        "Kb": "Suref"
    },
    {
        "Fr": "ExŽcuter",
        "Kb": "Selkem"
    },
    {
        "Fr": "ExŽcution",
        "Kb": "Aselkem"
    },
    {
        "Fr": "Exemple",
        "Kb": "Amedya"
    },
    {
        "Fr": "Exempter",
        "Kb": "Slid"
    },
    {
        "Fr": "Exercer (sÕ)",
        "Kb": "Lghem"
    },
    {
        "Fr": "Exercice",
        "Kb": "Alaghmu"
    },
    {
        "Fr": "Exhaustif",
        "Kb": "Anguz"
    },
    {
        "Fr": "Exil",
        "Kb": "Azwayeg"
    },
    {
        "Fr": "Exiler",
        "Kb": "Zewweg"
    },
    {
        "Fr": "Existence",
        "Kb": "Tilawt"
    },
    {
        "Fr": "Existentiel",
        "Kb": "Amilaw"
    },
    {
        "Fr": "ExpŽrience",
        "Kb": "Tarmit"
    },
    {
        "Fr": "Expert",
        "Kb": "Amuzay"
    },
    {
        "Fr": "Explicite",
        "Kb": "Aflalay"
    },
    {
        "Fr": "Expliquer",
        "Kb": "Zzegzi"
    },
    {
        "Fr": "Exploit",
        "Kb": "Tanfust"
    },
    {
        "Fr": "Exploitation",
        "Kb": "Ammud"
    },
    {
        "Fr": "Exploiter",
        "Kb": "Amed"
    },
    {
        "Fr": "Exploiteur",
        "Kb": "Anammud"
    },
    {
        "Fr": "Exploration",
        "Kb": "Asnirem"
    },
    {
        "Fr": "Explorer",
        "Kb": "Snirem"
    },
    {
        "Fr": "Explosif",
        "Kb": "Afexsay"
    },
    {
        "Fr": "Exportation",
        "Kb": "Asifedh"
    },
    {
        "Fr": "ExposŽ",
        "Kb": "Aneskin"
    },
    {
        "Fr": "Exposer",
        "Kb": "Fser"
    },
    {
        "Fr": "Exposition",
        "Kb": "Tafsirt"
    },
    {
        "Fr": "Expression",
        "Kb": "Tanfalit"
    },
    {
        "Fr": "Exprimer",
        "Kb": "Senfali"
    },
    {
        "Fr": "Extension",
        "Kb": "Taseggiwit"
    },
    {
        "Fr": "ExtŽrieur",
        "Kb": "Berra"
    },
    {
        "Fr": "Externe",
        "Kb": "Amniri"
    },
    {
        "Fr": "Extinction",
        "Kb": "Alubbed"
    },
    {
        "Fr": "Extraction",
        "Kb": "Tussfa"
    },
    {
        "Fr": "Extraire",
        "Kb": "Ssef"
    },
    {
        "Fr": "Extrait",
        "Kb": "Tassuft"
    },
    {
        "Fr": "Extrapolation",
        "Kb": "Asmedhren"
    },
    {
        "Fr": "Extrapoler",
        "Kb": "Smedhren"
    },
    {
        "Fr": "Extrme",
        "Kb": "Asbbagh"
    },
    {
        "Fr": "ExtrŽmitŽ",
        "Kb": "Tabbaght"
    }
]
  ;

  }
$scope.ShowF = function() {

  }
$scope.ShowG = function() {

  }
$scope.ShowH = function() {

  }
$scope.ShowI = function() {

  }  
$scope.ShowJ = function() {

  } 
$scope.ShowK = function() {

  } 
$scope.ShowL = function() {

  }
$scope.ShowM = function() {

  }
$scope.ShowN = function() {

  }
$scope.ShowO = function() {

  }
$scope.ShowP = function() {

  }
$scope.ShowQ = function() {

  }  
$scope.ShowR = function() {

  } 
$scope.ShowS = function() {

  } 
$scope.ShowT = function() {

  } 
$scope.ShowU = function() {

  }  
$scope.ShowV = function() {

  }
$scope.ShowW = function() {

  }  
$scope.ShowX = function() {

  } 
$scope.ShowY = function() {

  } 
$scope.ShowZ = function() {

  }                                     
});

