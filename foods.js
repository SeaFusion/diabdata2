// Base de données nutritionnelle — glucides pour 100g
// Format : ['nom', glucides_par_100g]
const FOODS_DB = [

  // --- Pains ---
  ['pain blanc',50],['pain complet',45],['pain de seigle',40],['pain aux cereales',43],
  ['pain de mie',48],['baguette',55],['baguette tradition',54],['pain de campagne',48],
  ['brioche',48],['croissant',46],['pain au chocolat',47],['pain aux raisins',45],
  ['chausson aux pommes',42],['biscottes',70],['cracotte',72],['wasa',63],
  ['pain azyme',77],['pain grille',65],['pita',52],['naan',50],
  ['tortilla ble',52],['tortilla mais',50],['pain burger',48],['pain hotdog',47],

  // --- Riz ---
  ['riz blanc cuit',28],['riz blanc cru',79],['riz complet cuit',23],['riz complet cru',76],
  ['riz basmati cuit',25],['riz jasmin cuit',28],['riz rond cuit',27],
  ['riz sauvage cuit',21],['risotto',26],['riz cantonais',32],

  // --- Pates ---
  ['pates cuites',25],['pates crues',75],['spaghetti cuit',25],['spaghetti cru',74],
  ['tagliatelle cuites',24],['penne cuites',25],['fusilli cuits',25],
  ['macaroni cuit',26],['pates completes cuites',22],['gnocchi',24],
  ['ravioli',26],['tortellini',28],['lasagne crue',72],

  // --- Feculents ---
  ['pomme de terre',17],['frites',35],['pommes de terre sautees',26],
  ['puree',15],['gratin dauphinois',12],['patate douce',20],['patate douce cuite',17],
  ['quinoa cuit',22],['quinoa cru',64],['semoule cuite',23],['semoule crue',72],
  ['boulgour cuit',23],['boulgour cru',68],['polenta cuite',17],['polenta crue',72],
  ['millet cuit',23],['sarrasin cuit',19],['epeautre cuit',25],['orge cuite',28],
  ['tapioca',87],['igname',28],['taro',26],['topinambour',17],['panais',18],

  // --- Cereales petit-dejeuner ---
  ['flocons avoine',62],['porridge',10],['muesli',60],['muesli sans sucre',58],
  ['corn flakes',84],['granola',65],['all-bran',46],['special k',74],
  ['frosties',86],['weetabix',69],['petales de mais',84],

  // --- Legumineuses ---
  ['lentilles vertes cuites',20],['lentilles corail cuites',21],['lentilles beluga cuites',18],
  ['haricots blancs cuits',19],['haricots rouges cuits',21],['haricots noirs cuits',20],
  ['flageolets cuits',17],['pois chiches cuits',27],['pois casses cuits',21],
  ['feves cuites',15],['edamame',8],['soja grain cuit',9],

  // --- Tofu et proteines vegetales ---
  ['tofu',2],['tempeh',9],['seitan',14],['tofu fume',2],['tofu soyeux',2],

  // --- Lait et produits laitiers ---
  ['lait entier',5],['lait demi-ecreme',5],['lait ecreme',5],['lait de brebis',5],
  ['yaourt nature',6],['yaourt grec',4],['yaourt fruits',14],['yaourt aux cereales',17],
  ['fromage blanc 0%',4],['fromage blanc 20%',4],['skyr',4],['petit suisse',4],
  ['creme fraiche',3],['creme fraiche legere',4],
  ['lait concentre sucre',54],['lait concentre non sucre',10],

  // --- Fromages ---
  ['camembert',0],['brie',0],['emmental',0],['gruyere',0],['comte',0],
  ['beaufort',0],['roquefort',0],['parmesan',3],['mozzarella',1],['feta',1],
  ['cheddar',0],['gouda',0],['edam',0],['tome',0],['raclette',0],
  ['reblochon',0],['munster',0],['ricotta',3],['mascarpone',4],['gorgonzola',1],

  // --- Oeufs ---
  ['oeuf entier',1],['blanc oeuf',1],['jaune oeuf',1],['omelette',1],['oeuf dur',1],

  // --- Viandes ---
  ['boeuf hache',0],['steak',0],['rosbif',0],['cote boeuf',0],['bavette',0],
  ['poulet roti',0],['blanc poulet',0],['cuisse poulet',0],['dinde',0],['canard',0],
  ['porc',0],['cote porc',0],['filet mignon',0],['jambon blanc',1],['jambon fume',1],
  ['jambon cru',1],['lardons',0],['bacon',0],['saucisse',2],['merguez',2],
  ['chipolata',3],['boudin noir',4],['foie veau',4],['foie volaille',1],
  ['agneau',0],['veau',0],['lapin',0],['cheval',0],

  // --- Poissons ---
  ['saumon frais',0],['saumon fume',0],['thon naturel',0],['thon huile',0],
  ['cabillaud',0],['sole',0],['bar',0],['dorade',0],['daurade',0],
  ['sardine',0],['maquereau',0],['truite',0],['colin',0],['lieu noir',0],
  ['tilapia',0],['hareng',0],['anchois',0],['espadon',0],['fleury',0],

  // --- Fruits de mer ---
  ['crevette',1],['crevette rose',1],['langoustine',1],['homard',1],['crabe',0],
  ['moule',4],['huitre',4],['palourde',3],['noix saint-jacques',3],
  ['calmar',3],['poulpe',1],['seiche',1],

  // --- Matieres grasses ---
  ['huile olive',0],['huile tournesol',0],['huile colza',0],['huile coco',0],
  ['beurre',1],['beurre demi-sel',1],['margarine',1],['saindoux',0],
  ['mayonnaise',3],['vinaigrette',3],

  // --- Legumes ---
  ['carotte',10],['carotte rapee',9],['tomate',4],['tomate cerise',5],
  ['courgette',3],['courgette cuite',3],['brocoli',7],['brocoli cuit',4],
  ['epinard',4],['epinard cuit',3],['salade verte',2],['laitue',2],
  ['roquette',4],['mache',3],['concombre',3],
  ['poivron rouge',6],['poivron vert',4],['poivron jaune',6],
  ['oignon',9],['oignon rouge',9],['oignon cuit',8],['echalote',14],
  ['champignon de paris',4],['cepe',3],['chanterelle',2],['shiitake',7],['pleurote',6],
  ['celeri branche',3],['celeri rave',9],['navet',6],['betterave',10],
  ['mais',19],['mais en boite',17],['petits pois',14],['petits pois surgeles',13],
  ['haricots verts',7],['haricots verts cuits',5],['avocat',2],
  ['artichaut',11],['artichaut cuit',9],['fenouil',7],['radis',3],
  ['poireau',5],['poireau cuit',4],['chou vert',6],['chou rouge',7],
  ['chou blanc',6],['chou-fleur',5],['chou-fleur cuit',4],['chou de bruxelles',7],
  ['brocoli romanesco',6],['asperge',4],['asperge blanche',3],
  ['aubergine',6],['aubergine cuite',5],['potiron',8],['potimarron',11],
  ['courge butternut',12],['citrouille',7],['endive',4],['blette',4],
  ['cresson',4],['piment',9],['ail',33],['ciboulette',4],['persil',8],
  ['basilic',7],['gingembre',18],['patisson',4],['rutabaga',9],['salsifis',14],

  // --- Fruits frais ---
  ['banane',23],['banane mure',25],['pomme',14],['pomme golden',14],['pomme granny',13],
  ['orange',12],['orange sanguine',11],['raisin blanc',18],['raisin noir',18],
  ['fraise',8],['mangue',17],['kiwi',15],['poire',12],['peche',10],
  ['peche blanche',11],['abricot',11],['cerise',16],['bigarreau',17],
  ['melon',9],['melon charentais',9],['pasteque',8],['ananas',13],
  ['myrtille',14],['framboise',12],['figue fraiche',19],['citron',9],
  ['citron vert',11],['pamplemousse',9],['mandarine',13],['clementine',13],
  ['kumquat',16],['litchi',17],['goyave',14],['papaye',12],
  ['fruit de la passion',14],['grenade',19],['physalis',16],
  ['nectarine',11],['brugnon',10],['prune',12],['mirabelle',14],
  ['reine-claude',13],['quetsche',14],['coing',14],['mure',10],
  ['cassis',14],['groseille',12],['airelle',12],

  // --- Fruits secs ---
  ['figue seche',58],['datte',75],['pruneau',64],['raisin sec',79],
  ['abricot sec',63],['cranberry seche',72],['mangue sechee',65],
  ['cerise sechee',70],

  // --- Noix et graines ---
  ['amande',22],['amande grilee',20],['noix',14],['noix cajou',30],
  ['noix macadamia',14],['noix bresil',12],['noisette',17],['pistache',28],
  ['cacahuete',16],['noix de coco rapee',10],['noix de coco fraiche',15],
  ['graine tournesol',20],['graine courge',15],['graine lin',29],
  ['graine sesame',26],['graine chia',42],['pignons pin',19],['noix pecan',14],
  ['beurre amande',22],['beurre cajou',28],['beurre cacahuete',20],

  // --- Sucres et sirops ---
  ['sucre blanc',100],['sucre roux',97],['sucre glace',100],['cassonade',96],
  ['miel',82],['miel acacia',80],['miel fleurs',82],['sirop erable',67],
  ['sirop agave',75],['melasse',75],['stevia',0],

  // --- Confiseries ---
  ['caramel',78],['bonbon',85],['reglisse',73],['guimauve',80],
  ['nougat',68],['praline',52],['touron',52],['halva',60],['loukoum',75],

  // --- Chocolat ---
  ['chocolat noir 70%',46],['chocolat noir 85%',33],['chocolat noir 90%',25],
  ['chocolat au lait',57],['chocolat blanc',59],['chocolat praline',52],
  ['nutella',57],['pate de cacao',8],['cacao poudre',28],['cacao sucre',72],

  // --- Confitures ---
  ['confiture',65],['confiture allee',42],['marmelade',62],['gelee de fruits',68],
  ['compote pommes',20],['compote poire',18],['compote abricot',16],['compote allee',10],

  // --- Biscuits et gateaux ---
  ['biscuit sec',70],['petit beurre',72],['sable',67],['speculoos',72],
  ['oreo',70],['madeleine',55],['financier',50],['quatre-quarts',48],
  ['gateau yaourt',50],['gateau chocolat',50],['fondant chocolat',43],
  ['brownie',48],['kouglof',52],['brioche perdue',35],['pain perdu',38],
  ['clafoutis',22],['far breton',28],['kouign-amann',42],['galette bretonne',52],
  ['baklava',50],

  // --- Patisseries ---
  ['tarte pommes',38],['tarte fraises',35],['tarte citron',42],['tarte chocolat',45],
  ['eclair',35],['chou creme',30],['millefeuille',42],['tiramisu',26],
  ['cheesecake',28],['mousse chocolat',22],['creme brulee',18],
  ['panna cotta',15],['flan',18],['riz au lait',20],['semoule au lait',19],

  // --- Glaces ---
  ['glace vanille',24],['glace chocolat',26],['glace fraise',22],
  ['sorbet citron',25],['sorbet fraise',26],['sorbet mangue',27],['yaourt glace',20],

  // --- Crepes et viennoiseries ---
  ['crepe nature',40],['crepe sucree',48],['galette sarrasin',32],
  ['gaufre',45],['gaufre liegeoise',52],['pancake',40],['waffle',46],

  // --- Fast food ---
  ['pizza margherita',28],['pizza 4 fromages',26],['pizza pepperoni',27],
  ['pizza surgelee',29],['sandwich jambon beurre',32],['sandwich club',30],
  ['burger',25],['burger vegetarien',28],['hot dog',26],['kebab',30],
  ['tacos',32],['burrito',30],['wrap',35],['quiche lorraine',20],
  ['pita kebab',32],['falafel',28],['spring roll',26],['nem',24],

  // --- Snacks ---
  ['chips nature',52],['chips paprika',51],['chips allee',55],
  ['popcorn nature',63],['popcorn sucre',70],['crackers',65],
  ['gressins',68],['nachos',62],['bretzel',67],['galette riz',80],
  ['barre cereales',65],['barre muesli',60],['barre chocolat',58],

  // --- Sauces et condiments ---
  ['ketchup',26],['moutarde',6],['moutarde ancienne',8],['sauce soja',8],
  ['sauce teriyaki',24],['sauce barbecue',28],['pesto',5],['tapenade',4],
  ['guacamole',6],['tzatziki',4],['houmous',14],['caviar aubergine',5],
  ['sauce bechamel',8],['sauce tomate',8],['concentre tomate',14],
  ['coulis tomate',7],['vinaigre balsamique',17],

  // --- Boissons sucrees ---
  ['coca-cola',11],['coca light',0],['coca zero',0],['pepsi',11],
  ['sprite',10],['fanta orange',11],['orangina',10],['limonade',10],
  ['schweppes tonic',8],['jus orange',10],['jus pomme',12],['jus raisin',16],
  ['jus mangue',13],['jus tomate',4],['jus carotte',9],['jus citron',9],
  ['nectar peche',14],['smoothie fruits rouges',14],['smoothie mangue',16],

  // --- Boissons chaudes ---
  ['cafe',0],['the',0],['the sucre',8],['infusion',0],
  ['cafe latte',5],['cappuccino',7],['chocolat chaud',10],['lait chaud',5],

  // --- Alcool ---
  ['biere',4],['biere sans alcool',5],['vin rouge',3],['vin blanc',3],
  ['champagne',3],['cidre',5],['mojito',14],['sangria',12],
  ['whisky',0],['vodka',0],['cognac',0],['rhum',0],

  // --- Laits vegetaux ---
  ['lait soja',3],['lait amande',3],['lait avoine',7],['lait riz',10],
  ['lait coco',6],['lait noisette',5],['lait chanvre',3],

  // --- Cuisine du monde ---
  ['sushi',30],['maki',32],['california roll',28],['sashimi',0],
  ['couscous',23],['tabloule',18],['samossa',22],['pakora',25],
  ['curry lentilles',18],['dhal',18],['chapati',48],['papadum',60],
  ['pad thai',28],['wok legumes',10],['soupe pho',14],['ramen',26],
  ['udon',22],['soba',20],['gyoza',22],['tempura legumes',28],
  ['kimchi',3],['bibimbap',25],['bulgogi',6],['paella',22],
  ['gazpacho',5],['tortilla espagnole',12],

  // --- Conserves et soupes ---
  ['soupe legumes',8],['soupe tomate',10],['soupe potiron',9],
  ['bouillon',1],['sardines huile',0],['thon boite',0],

  // --- Eau ---
  ['eau',0],['eau petillante',0],

];
