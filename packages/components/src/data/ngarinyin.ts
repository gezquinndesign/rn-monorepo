const data = {
  fieldguide: {
    collections: [
      {
        name: 'Animals',
        collections: [
          {
            name: 'Mammals',
            // images: [{path: require('../assets/images/mammals.png'), credit: 'Unknown'}],
            members: [],
            collections: [
              {
                name: 'Monotremes - egg laying mammals',
                collections: [],
                members: [
                  {
                    name: {
                      ngarinyin: 'Gunanji nyindi',
                      syllables: 'gu-nan-ji nyin-di',
                    },
                    gender: null,
                    alternatives: [
                      {
                        ngarinyin: 'Mirimiringarri nyindi',
                        syllables: 'mi-ri-mi-ri-ngarr-i nyin-di',
                      },
                    ],
                    english: 'Echidna',
                    english_alts: null,
                    scientific: 'Tachyglossus aculeatus',
                  },
                ],
              },
              {
                name: 'Marsupials - mammals with pouches',
                collections: [
                  {
                    name: 'Kangaroos and Wallabies - Yaali',
                    // images: [{path: require('../assets/images/kangaroos_and_wallabies_-_yaali.png'), credit: 'Unknown'}],
                    description:
                      'All male kangaroos / wallabies are <b>jirri</b> (masculine) and female kangaroos are <b>nyindi</b> (feminine).',
                    members: [
                      {
                        name: {
                          ngarinyin: 'Walamba jirri',
                          syllables: 'wa-lam-ba jirr-i',
                          gender: 'male',
                        },
                        alternatives: [
                          {
                            ngarinyin: 'Gorroni nyindi',
                            syllables: 'gorr-o-ni nyin-di',
                            gender: 'female',
                          },
                          {
                            ngarinyin: 'Bongoni nyindi',
                            syllables: 'bong-o-ni nyin-di',
                            gender: '',
                          },
                          {
                            ngarinyin: 'Gawurrngani nyindi',
                            syllables: 'gaw-urr-nga-ni nyin-di',
                            gender: '',
                          },
                        ],
                        english: 'Plains Kangaroo',
                        english_alts: ['Antilopine Wallaroo'],
                        scientific: 'Macropus antilopinus',
                      },
                      {
                        name: {
                          ngarinyin: 'Jurlwun jirri',
                          syllables: 'jurl-wun jirr-i',
                          gender: 'male',
                        },
                        alternatives: [
                          {
                            ngarinyin: 'Yaara jirri',
                            syllables: 'yaar-a jirr-i',
                            gender: 'male',
                          },
                          {
                            ngarinyin: 'Barawul nyindi',
                            syllables: 'ba-ra-wul nyin-di',
                            gender: 'female',
                          },
                          {
                            ngarinyin: 'Gadunggu nyindi',
                            syllables: 'gad-ung-gu  nyin-di',
                            gender: 'female',
                          },
                        ],
                        english: 'Euro',
                        english_alts: ['Hill Kangaroo'],
                        scientific: 'Macropus robustus',
                      },
                      {
                        name: {
                          ngarinyin: 'Julya nyindi',
                          syllables: 'ju-lya nyin-di',
                          gender: 'female',
                        },
                        description:
                          '<b>Julya</b> is a small rock-wallaby that lives in caves and is easily scared. When they hear a noise, they lift their tails and go inside the cave. They listen until there is no sound, then come out again. To hunt them, people would sneak up behind them with spears, or light fires in caves to smoke them out so they could kill them. The meat is sweet and tastes like bandicoot.',
                        alternatives: [],
                        english: 'Monjon',
                        english_alts: null,
                        scientific: 'Petrogale burbidgei',
                      },
                      {
                        name: {
                          ngarinyin: 'Julya nyindi',
                          syllables: 'ju-lya nyin-di',
                          gender: 'female',
                        },
                        description:
                          '<b>Julya</b> is a small rock-wallaby that lives in caves and is easily scared. When they hear a noise, they lift their tails and go inside the cave. They listen until there is no sound, then come out again. To hunt them, people would sneak up behind them with spears, or light fires in caves to smoke them out so they could kill them. The meat is sweet and tastes like bandicoot.',
                        alternatives: [],
                        english: 'Nabarlek',
                        english_alts: null,
                        scientific: 'Petrogale concinna',
                      },
                      {
                        name: {
                          ngarinyin: 'Gurnduli jirri',
                          syllables: 'gurn-du-li jirr-i',
                          gender: 'male',
                        },
                        alternatives: [
                          {
                            ngarinyin: 'Wudma nyindi',
                            syllables: 'wud-ma nyin-di',
                            gender: 'female',
                          },
                        ],
                        english: 'Agile Wallaby',
                        english_alts: null,
                        scientific: 'Macropus agilis',
                      },
                      {
                        name: {
                          ngarinyin: 'Baagi jirri',
                          syllables: 'baa-gi jirr-i',
                          gender: 'male',
                        },
                        alternatives: [
                          {
                            ngarinyin: 'Marrguli jirri',
                            syllables: 'marr-gu-li jirr-i',
                            gender: '',
                          },
                          {
                            ngarinyin: 'Juwidiya nyindi',
                            syllables: 'ju-wi-di-ya nyin-di',
                            gender: 'female',
                          },
                        ],
                        english: 'Short-eared Rock-wallaby',
                        english_alts: null,
                        scientific: 'Petrogale brachyotis',
                      },
                      {
                        name: {
                          ngarinyin: 'Mangarra jirri',
                          syllables: 'mang-a-rra jirr-i',
                          gender: 'male',
                        },
                        alternatives: [
                          {
                            ngarinyin: 'Jiyba nyindi',
                            syllables: 'jiy-ba nyin-di',
                            gender: 'female',
                          },
                        ],
                        english: 'Northern Nailtail Wallaby',
                        english_alts: null,
                        scientific: 'Onychogalea unguifera',
                      },
                    ],
                  },
                  {
                    name: 'Possums and Gliders',
                    // images: [{path: require('../assets/images/possums_and_gliders.png'), credit: 'Unknown'}],
                    members: [
                      {
                        name: {
                          ngarinyin: 'Miyol jirri',
                          syllables: 'mi-yol jirr-i',
                          gender: '',
                        },
                        description:
                          'There is a Dreamtime story about the Scaly- tailed Possum (<b>miyol jirri</b>) and the Echidna (<b>gunanji</b>). The Scaly-tailed Possum was hunted by Ngarinyin people for meat, but boys don’t eat the tail because it is sacred.',
                        alternatives: [
                          {
                            ngarinyin: 'Yilangal jirri',
                            syllables: 'yi-la-ngal jirr-i',
                            gender: '',
                          },
                        ],
                        english: 'Scaly-tailed Possum',
                        english_alts: null,
                        scientific: 'Wyulda squamicaudata',
                      },
                      {
                        name: {
                          ngarinyin: 'Warrmuna jirri',
                          syllables: 'warr-mu-na jirr-i',
                          gender: '',
                        },
                        description:
                          'Women used to hunt <b>warrmuna</b> in Woollybutt (Eucalyptus miniata) trees. They used to examine the trees for fresh scratch marks (<b>barradal</b>). This would indicate that the possum had climbed up the tree at night to shelter in a hollow (<b>garradawal</b>) high in the tree during the day. Possum tastes different from kangaroo, the meat is lighter. Possums are fat in the cool season (<b>mawinggi</b>).',
                        alternatives: [],
                        english: 'Common Brushtail Possum',
                        english_alts: null,
                        scientific: 'Trichosurus vulpecula',
                      },
                      {
                        name: {
                          ngarinyin: 'Langgumarn nyindi',
                          syllables: 'lang-gu-marn nyin-di',
                          gender: '',
                        },
                        description: '',
                        alternatives: [],
                        english: 'Sugar Glider',
                        english_alts: null,
                        scientific: 'Petaurus breviceps',
                      },
                    ],
                  },
                  {
                    name: 'Other',
                    // images: [{path: require('../assets/images/other.png'), credit: 'Unknown'}],
                    members: [
                      {
                        name: {
                          ngarinyin: 'Garimbu jirri',
                          syllables: 'ga-rim-bu jirr-i',
                          gender: '',
                        },
                        description:
                          '<b>Garimbu jirri</b> hides in grass and bushes. He makes a humpy house (<b>wula</b>) out of grass. People used to look at the grass to find them. They would hit the bandicoot on the neck (<b>dug idmarni erru</b>) with a club (<b>barnamarr</b>) to kill it.',
                        alternatives: [],
                        english: 'Northern Brown Bandicoot',
                        english_alts: null,
                        scientific: 'Isoodon macrourus',
                      },
                      {
                        name: {
                          ngarinyin: 'Wijingarri jirri',
                          syllables: 'wi-ji-ngarr-i jirr-i',
                          gender: '',
                        },
                        description:
                          'The Northern Quoll (<b>wijingarri jirri</b>) was a man in the Dreamtime. He was the husband of the Black-headed Python (<b>damalarrngarri nyindi</b>). The story of the Quoll and the Black-headed Python is very important to Ngarinyin widow law/lore. Teenage boys aren’t allowed to eat quoll.',
                        alternatives: [],
                        english: 'Northern Quoll',
                        english_alts: null,
                        scientific: 'Dasyurus hallucatus',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Placental mammals - without pouches',
                // images: [{path: require('../assets/images/placental_mammals_-_without_pouches.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Wera wera nyindi',
                      syllables: 'we-ra we-ra nyin-di',
                      gender: '',
                    },
                    description:
                      'It is believed by Ngarinyin people that <b>wera wera</b> makes the mist that covers the hills after rain.',
                    alternatives: [
                      {
                        ngarinyin: 'Juri nyindi',
                        syllables: 'ju-ri nyin-di',
                        gender: '',
                      },
                    ],
                    english: 'Kimberley Rock-rat',
                    english_alts: null,
                    scientific: 'Zyzomys woodwardi',
                  },
                  {
                    name: {
                      ngarinyin: 'Walimarni nyindi',
                      syllables: 'wa-li-marn-i nyin-di',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: 'Black Flying-fox',
                    english_alts: null,
                    scientific: 'Pteropus alecto',
                  },
                  {
                    name: {
                      ngarinyin: 'Walimarni nyindi',
                      syllables: 'wa-li-marn-i nyin-di',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: 'Little Red Flying-fox',
                    english_alts: null,
                    scientific: 'Pteropus scapulatus',
                  },
                  {
                    name: {
                      ngarinyin: 'Balyawarra jirri',
                      syllables: 'ba-lya-wa-rra jirr-i',
                      gender: '',
                    },
                    description:
                      'The Ngarinyin word for the Golden-backed Tree- rat (<b>balyawarra jirri</b>) comes from the verb to get away / escape (<b>balya</b>). It is a fast runner.',
                    alternatives: [],
                    english: 'Golden-backed Tree-rat',
                    english_alts: null,
                    scientific: 'Mesembriomys macrurus',
                  },
                  {
                    name: {
                      ngarinyin: 'Orroli jirri',
                      syllables: 'orr-o-li jirr-i',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: 'Dingo',
                    english_alts: null,
                    scientific: 'Canis lupus dingo',
                  },
                ],
              },
            ],
          },
          {
            name: 'Birds - Jiygu',
            images: [
              {
                path: require('../assets/images/birds_-_jiygu.png'),
                credit: 'Unknown',
              },
            ],
            collections: [
              {
                name: 'Open Country - Barndarra mindi',
                // images: [{path: require('../assets/images/open_country_-_barndarra_mindi.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Jebarra nyindi',
                      syllables: 'je-barr-a nyin-di',
                      gender: 'adult',
                    },
                    description:
                      '<b>Jebarra</b> lay large eggs and are fat in the cool season (<b>mawinggi</b>). Ngarinyin people hunt Emu (<b>jebarra nyindi</b>) for meat',
                    alternatives: [
                      {
                        ngarinyin: 'Winini nyindi',
                        syllables: 'wi-ni-ni nyin-di',
                        gender: 'young',
                      },
                    ],
                    english: 'Emu',
                    english_alts: null,
                    scientific: 'Dromaius novaehollandiae',
                  },
                  {
                    name: {
                      ngarinyin: 'Jurul mindi',
                      syllables: 'ju-rul min-di',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: 'Brown Quail',
                    english_alts: null,
                    scientific: 'Coturnix ypsilophora',
                  },
                  {
                    name: {
                      ngarinyin: 'Banarr nyindi',
                      syllables: 'ba-narr nyin-di',
                      gender: '',
                    },
                    description:
                      'The Australian Bustard (banarr nyindi) lays its eggs in the wet season (jawad). It is fat in the cool season (<b>mawinggi</b>).',
                    english: 'Australian Bustard',
                    scientific: 'Ardeotis australis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Windi nyindi',
                      syllables: 'win-di nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Bush Stone-curlew',
                    scientific: 'Burhinus grallarius',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Dindiwal jirri',
                      syllables: 'din-di-wal jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Black-shouldered Kite',
                    scientific: 'Elanus axillaris',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Garnjal jirri',
                      syllables: 'garn-jal jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Black-breasted Buzzard',
                    scientific: 'Hamirostra melanosternon',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Arrgard jirri',
                      syllables: 'arr-gard jirr-i',
                      gender: '',
                    },
                    description:
                      'This bird has a distinctive call. It likes to eat grasshoppers, especially when they are running away from a grass fire.',
                    english: 'Whistling Kite',
                    scientific: 'Haliastur sphenurus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jarruwa jirri',
                      syllables: 'jarr-u-wa jirr-i',
                      gender: '',
                    },
                    description:
                      'The Brahminy Kite (<b>jarruwa jirri</b>) is considered to be the wife of the White-bellied Sea-eagle (<b>lawurn jirri</b>). It is only seen in coastal areas where it hunts for fish.',
                    english: 'Brahminy Kite',
                    scientific: 'Haliastur indus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Lawurn jirri',
                      syllables: 'law-urn jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'White-bellied Sea-eagle',
                    scientific: 'Haliaeetus leucogaster',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Warrana nyindi',
                      syllables: 'warr-a-na nyin-di',
                      gender: '',
                    },
                    description:
                      'Wedge-tailed Eagles (<b>warrana nyindi</b>) only lay eggs in the cool season (<b>mawinggi</b>). There is a powerful law and creation story about this bird and it has a corroboree (<b>junba</b>) that is for men only.',
                    english: 'Wedge-tailed Eagle',
                    images: [
                      {
                        path: require('../assets/images/wedge-tailed_eagle.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Aquila audax',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gubudaadi jirri',
                      syllables: 'gu-bu-daa-di jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Brown Falcon',
                    images: [
                      {
                        path: require('../assets/images/brown_falcon.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Falco berigora',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Diwad diwad',
                      syllables: 'di-wad di-wad',
                      gender: '',
                    },
                    description: '',
                    english: 'Peregrine Falcon',
                    scientific: 'Falco peregrinus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Arrgad jirri',
                      syllables: 'arr-gad jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Australian Hobby',
                    scientific: 'Falco longipennis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gubudadidi',
                      syllables: 'gu-bu-da-di-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Nankeen (Australian) Kestrel',
                    scientific: 'Falco cenchroides',
                    alternatives: [
                      {
                        ngarinyin: 'Wirdidi jirri',
                        syllables: 'wird-i-di jirr-i',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Gurliny gurliny nyindi',
                      syllables: 'gurl-iny-gurl-iny nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Galah',
                    scientific: 'Eolophus roseicapillus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Wodoy jirri / di',
                      syllables: 'wo-doy jirr-i / di',
                      gender: '',
                    },
                    description:
                      'One of the 2 moiety birds which made the marriage system. Associated with hunting, bone and white.',
                    english: 'Spotted Nightjar',
                    scientific: 'Eurostopodus argus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Diya diya jirri',
                      syllables: 'di-ya di-ya jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Magpie-lark, Peewee',
                    scientific: 'Grallina cyanoleuca',
                    alternatives: [
                      {
                        ngarinyin: 'Gugoridi jirri',
                        syllables: 'gu-go-ri-di jirr-i',
                        gender: '',
                      },
                      {
                        ngarinyin: 'Gurirr gurirr jirri',
                        syllables: 'gu-rirr gu-rirr jirr-i',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Wonggura nyindi',
                      syllables: 'wong-gu-ra nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Torresian Crow',
                    scientific: 'Corvus orru',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Ngarnan nyindi',
                      syllables: 'ngarn-an nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Little Corella',
                    scientific: 'Cacatua sanguinea',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Belngerr jirri',
                      syllables: 'bel-ngerr jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Sulphur-crested Cockatoo',
                    scientific: 'Cacatua galerita',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Marrirrin di',
                      syllables: 'marr-irr-in di',
                      gender: '',
                    },
                    description: '',
                    english: 'Rainbow Lorikeet',
                    scientific: 'Trichoglossus haematodus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Ililinjid nyindi',
                      syllables: 'i-li-lin-jid nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Varied Lorikeet',
                    scientific: 'Psitteuteles versicolor',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Marrurrun di',
                      syllables: 'marr-urr-un di',
                      gender: '',
                    },
                    description: '',
                    english: 'Red-winged Parrot',
                    scientific: 'Aprosmictus erythropterus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Borro mindi',
                      syllables: 'borr-o min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Tawny Frogmouth',
                    scientific: 'Podargus strigoides',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Burlonggon jirri',
                      syllables: 'burl-ong-gon jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Rainbow Bee-eater',
                    scientific: 'Merops ornatus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Din din nyindi',
                      syllables: 'din din nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Black-tailed Treecreeper',
                    scientific: 'Climacteris melanurus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jirigi nyindi',
                      syllables: 'ji-ri-gi nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Bar-breasted Honeyeater',
                    scientific: 'Ramsayornis fasciatus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jindabirri nyindi',
                      syllables: 'Jin-da-birr-i nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Willy Wagtail',
                    scientific: 'Rhipidura leucophrys',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Bilyiwilg jirri',
                      syllables: 'bi-lyi-wilg jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Olive-backed Oriole',
                    scientific: 'Oriolus sagittatus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gurrudoda jirri',
                      syllables: 'gurr-u-do-da jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Pied Butcherbird',
                    scientific: 'Cracticus nigrogularis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jiygu nyindi',
                      syllables: 'jiy-gu nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Double-barred Finch',
                    scientific: 'Taeniopygia bichenovii',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Forest - Gurndol mindi',
                // images: [{path: require('../assets/images/forest_-_gurndol_mindi.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Nangun mindi',
                      syllables: 'nang-un min-di',
                      gender: '',
                    },
                    description:
                      '<b>Nangun</b> lives in jungle areas where it builds a large mound of dirt and leaves to bury its eggs in so they will hatch. The eggs can be dug out and they are very good to eat, like a big chicken egg.',
                    english: 'Orange-footed Scrubfowl',
                    scientific: 'Megapodius reinwardt',
                    alternatives: [
                      {
                        ngarinyin: 'Nanggu mindi',
                        syllables: 'nang-gu min-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'durran mindi',
                      syllables:
                        'durr-an min-di durramarla mindi durr-a-marl-a min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Red-tailed Black Cockatoo',
                    scientific: 'Calyptorhynchus banksii',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Yawinjala mindi',
                      syllables: 'yaw-in-ja-la min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Pheasant Coucal',
                    scientific: 'Centropus phasianinus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Dumbi jirri',
                      syllables: 'dum-bi jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Rufous Owl',
                    scientific: 'Ninox rufa',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jungurn jirri / di',
                      syllables: 'jun-gurn jirr-i / di',
                      gender: '',
                    },
                    description:
                      'One of the 2 moiety birds which made the marriage system. Associated with gathering vegetables, dust and red.',
                    english: 'Australian Owlet-nightjar',
                    scientific: 'Aegotheles cristatus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Malgi nyindi',
                      syllables: 'mal-gi nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Banded Honeyeater',
                    scientific: 'Cissomela (Certhionix) pectoralis',
                    alternatives: [
                      {
                        ngarinyin: 'Giyorn nyindi',
                        syllables: 'giy-orn nyin-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Juwibarn jirri',
                      syllables: 'ju-wi-barn jirr-i',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: "Great Bowerbird", 
                    scientific: "Chlamydera Ptilonorhynchus nuchalis"
                  },
                  {
                    name: {
                      ngarinyin: 'Dabaru jirri',
                      syllables: 'da-ba-ru jirr-i',
                      gender: '',
                    },
                    description:
                      'There is an important Dreamtime story about this bird and there is law and song associated with it. <b>Dabaru</b> cannot be eaten by Ngarinyin people.',
                    english: 'Australian Pelican',
                    scientific: 'Pelecanus conspicillatus',
                    alternatives: [
                      {
                        ngarinyin: 'Mayarda jirri',
                        syllables: 'may-ard-a jirr-i',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Garrang garrang mindi',
                      syllables: 'garr-ang garr-ang min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Australasian Darter',
                    scientific: 'Anhinga novaehollandiae',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Yarngi yarngi nyindi',
                      syllables: 'yarn-gi yarn-gi nyin-di',
                      gender: '',
                    },
                    description:
                      'This bird dives under the water looking for food. The meat of this bird is good to eat after roasting but there is only a little meat on each bird.',
                    english: 'Australasian Grebe',
                    scientific: 'Tachybaptus novaehollandiae',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Narn mindi',
                      syllables: 'narn min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Magpie goose',
                    scientific: 'Anseranas semipalmata',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jibilyuwa mindi',
                      syllables: 'ji-bi-lyu-wa min-di',
                      gender: '',
                    },
                    description:
                      '<b>Jibilyuwa</b> has its own junba and is an important totem for some people.',
                    english: 'Wandering Whistling-Duck',
                    scientific: 'Dendrocygna arcuata',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Wun.garl',
                      syllables: 'wun-garl',
                      gender: '',
                    },
                    description: '',
                    english: 'Radjah Shelduck, Burdekin Duck',
                    scientific: 'Tadorna radjah',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Garawad mindi',
                      syllables: 'ga-ra-wad min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Pacific Black Duck',
                    scientific: 'Anas superciliosa',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jibilyu mindi',
                      syllables: 'ji-bi-lyu min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Grey Teal',
                    scientific: 'Anas gracilis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Garlambi burdu jirri',
                      syllables: 'garl-am-bi burd-u jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Intermediate Egret',
                    scientific: 'Ardea intermedia',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Walanun.gu',
                      syllables: 'wa-la-nun-gu',
                      gender: '',
                    },
                    description: '',
                    english: 'Nankeen Night Heron',
                    english_alts: ['Rufous Night Heron'],
                    scientific: 'Nycticorax caledonicus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Maningarri jirri',
                      syllables: 'ma-ni-ngarr-i jirr-i',
                      gender: '',
                    },
                    description: '',
                    alternatives: [],
                    english: 'Ibis - general',
                  },
                  {
                    name: {
                      ngarinyin: 'Diminjiwurru jirri',
                      syllables: 'di-min-ji-wurr-u jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Glossy Ibis',
                    images: [
                      {
                        path: require('../assets/images/glossy_ibis.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Plegadis falcinellus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Ngudi ngudi jirri',
                      syllables: 'ngu-di ngu-di jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Straw-necked Ibis',
                    scientific: 'Threskiornis spinicollis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Ngudu ngudu jirri',
                      syllables: 'Ngu-du ngu-du jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Royal Spoonbill',
                    scientific: 'Platalea regia',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Maningarri jirri',
                      syllables: 'Man-i-ngarr-i jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Black-necked Stork, Jabiru',
                    images: [
                      {
                        path: require('../assets/images/black-necked_stork_jabiru.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Ephippiorhynchus asiaticus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gurranda nyindi',
                      syllables: 'gurr-an-da nyin-di',
                      gender: '',
                    },
                    description:
                      '<b>Gurranda</b> lay their eggs in <b>jawad</b> (wet season). The meat of this bird can be eaten, but it is very stringy and hard to chew. This is an important totemic bird. It has its own law, special song and dance. <b>Gurranda</b> danced to make the ground soft in the <b>Dumbi</b> Dreamtime story.',
                    english: 'Brolga',
                    scientific: 'Grus rubicunda',
                    alternatives: [
                      {
                        ngarinyin: 'Gurronggarli nyindi',
                        syllables: 'gurr-ong-garl-i nyin-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Dolalarri jirri',
                      syllables: 'dol-a-larr-i jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Azure Kingfisher',
                    scientific: 'Ceyx azureus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Wirrirri nyindi',
                      syllables: 'wirr-irr-i nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Purple-crowned Fairy-wren',
                    scientific: 'Malurus coronatus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Jarlid jarlid jirri',
                      syllables: 'jarl-id jarl-id jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'White-breasted Woodswallow',
                    scientific: 'Artamus leucorynchus',
                    alternatives: [],
                  },
                ],
              },
            ],
          },
          {
            name: 'Reptiles',
            images: [
              {
                path: require('../assets/images/reptiles.png'),
                credit: 'Unknown',
              },
            ],
            collections: [
              {
                name: 'Crocodiles',
                // images: [{path: require('../assets/images/crocodiles.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Goyo jirri',
                      syllables: 'goy-o jirr-i',
                      gender: '',
                    },
                    description:
                      '<b>Goyo</b> is hunted by Ngarinyin people for meat. The best time for hunting is <b>merringun</b> (hot season). <b>Goyo</b> starts to lay her <b>yunurun</b> (eggs) in the sand in <b>mawinggi</b> (cool season) continuing into <b>merringun</b> (hot season) when the eggs start to hatch.',
                    english: 'Freshwater Crocodile',
                    scientific: 'Crocodylus johnstoni',
                    alternatives: [
                      {
                        ngarinyin: 'Yarndal mindi',
                        syllables: 'yarn-dal min-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Alalanggarra jirri',
                      syllables: 'a-la-lang-garr-a jirr-i',
                      gender: 'male',
                    },
                    description:
                      'Saltwater crocodiles breed and lay their eggs in the rainy season. The female is called <b>miyirri nyindi</b> and lays her eggs in a big mound nest. People used to <b>dorrg</b> (hit in the head with a rock) saltwater crocodiles.',
                    english: 'Saltwater Crocodile',
                    scientific: 'Crocodylus porosus',
                    alternatives: [
                      {
                        ngarinyin: 'Miyirri nyindi',
                        syllables: 'miy-irr-i nyin-di',
                        gender: 'female',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Freshwater Turtles',
                // images: [{path: require('../assets/images/freshwater_turtles.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Dijigudi jirri',
                      syllables: 'di-ji-gu-di jirr-i',
                      gender: '',
                    },
                    description:
                      '<b>Dijigudi</b> is hunted by Ngarinyin people for meat. <b>Dijigudi</b> lays her eggs in <b>merringun</b> (hot season).\nThe <b>Wanjina Wanalirri</b used <b>dijigudi</b> as a weapon against the 2 boys who had been cruel to <b>Dumbi</b>, the owl.',
                    english: 'North-west Red-faced Turtle',
                    english_alts: ['Short-necked Turtle'],
                    scientific: 'Emydura australis',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Wulumara nyindi',
                      syllables: 'wu-lu-ma-ra nyin-di',
                      gender: '',
                    },
                    description:
                      '<b>Wulumara</b> is hunted by Ngarinyin people for meat. <b>Wulumara</b> lays her eggs in <b>merringun</b> (hot season).\n<b>Wulumara</b> is believed to be a <b>Wanjina</b>. This turtle has a <b>Wanjina</b> pattern inside its shell.',
                    english: 'Northern Snake-necked Turtle',
                    scientific: 'Chelodina rugosa',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Skinks',
                // images: [{path: require('../assets/images/skinks.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Duma nyindi',
                      syllables: 'du-ma nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Common Blue-tongue Lizard',
                    images: [
                      {
                        path: require('../assets/images/common_blue-tongue_lizard.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Tiliqua scincoides',
                    alternatives: [
                      {
                        ngarinyin: 'Walwi nyindi',
                        syllables: 'wal-wi nyin-di',
                        gender: '',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Dragons',
                // images: [{path: require('../assets/images/dragons.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Manggarrigal mindi',
                      syllables: 'mang-garr-i-gal min-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Ta-ta Lizard',
                    scientific: 'Lophognathus gilberti',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Bemen jirri',
                      syllables: 'be-men jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Frill-necked Lizard',
                    scientific: 'Chlamydosaurus kingii',
                    alternatives: [
                      {
                        ngarinyin: 'Degulan',
                        syllables: 'deg-ul-an',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Dalwa jirri',
                      syllables: 'dal-wa jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'White-lipped Two-line Dragon',
                    scientific: 'Diporiphora albilabris',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Pythons',
                // images: [{path: require('../assets/images/pythons.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Damalarrngarri nyindi',
                      syllables: 'da-ma-larr-ngarr-i  nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Black-headed Python',
                    scientific: 'Aspidites melanocephalus',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Monitors, Goannas',
                // images: [{path: require('../assets/images/monitors_goannas.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Duwud jirri',
                      syllables: 'du-wud jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Spiny-tailed Monitor',
                    images: [
                      {
                        path: require('../assets/images/spiny-tailed_monitor.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Varanus acanthurus',
                    alternatives: [
                      {
                        ngarinyin: 'Bonda mindi',
                        syllables: 'bon-da min-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Janiwarra jirri',
                      syllables: 'ja-ni-warr-a jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Sand Goanna',
                    images: [
                      {
                        path: require('../assets/images/sand_goanna.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Varanus gouldii',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Januwany mindi',
                      syllables: 'ja-nu-wany min-di',
                      gender: '',
                    },
                    description: '',
                    english: "Mertens' Water Monitor",
                    images: [
                      {
                        path: require('../assets/images/mertens_water_monitor.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Varanus mertensi',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gariyali nyindi',
                      syllables: 'ga-ri-yali nyin-di',
                      gender: 'female',
                    },
                    description:
                      'The female is greenish in colour and spotted, while the male is long, thin and dark in colour.',
                    english: 'Yellow-spotted Monitor',
                    images: [
                      {
                        path: require('../assets/images/yellow-spotted_monitor.jpg'),
                        credit: 'Unknown',
                      },
                    ],
                    scientific: 'Varanus panoptes',
                    alternatives: [
                      {
                        ngarinyin: 'Jawuradi jirri',
                        syllables: 'jawu-rad-i jirr-i',
                        gender: 'male',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Fish and Crustaceans',
            // images: [{path: require('../assets/images/fish_and_crustaceans.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Jay jirri',
                  syllables: 'jay jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Fish - general',
                scientific: '',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Wiyarri nyindi',
                  syllables: 'wiy-arr-i nyin-di',
                  gender: '',
                },
                description: '',
                english: 'Freshwater Whipray',
                scientific: 'Urogymnus dalyensis',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yawarlngarri jirri',
                  syllables: 'yaw-arl-ngarr-i jirr-i',
                  gender: '',
                },
                description: 'Also covers catfish (Ariidae).',
                english: 'Blue Catfish',
                english_alts: ['Catfish'],
                scientific: 'Neoarius graeffei',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Ilerra jirri',
                  syllables: 'i-lerr-a jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Barramundi',
                scientific: 'Lates calcarifer',
                alternatives: [
                  {
                    ngarinyin: 'Alanggun do jirri',
                    syllables: 'a-lang-gun do jirr-i',
                    gender: '',
                  },
                  {
                    ngarinyin: 'Deyo jirri',
                    syllables: 'de-yo jirr-i',
                    gender: '',
                  },
                  {
                    ngarinyin: 'Alanggun jongarri jirri',
                    syllables: 'a-lang-gun jo-ngarr-i jirr-i',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Emana jirri',
                  syllables: 'e-ma-na jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Black Bream',
                english_alts: ['Western Sooty Grunter'],
                scientific: 'Hephaestus jenkinsi',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Narli di',
                  syllables: 'narl-i di',
                  gender: '',
                },
                description: '',
                english: 'Cherabin',
                scientific: 'Macrobrachium spinipes',
                alternatives: [
                  {
                    ngarinyin: 'Jarramban di',
                    syllables: 'jarr-am-ban di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Duwul nyindi',
                  syllables: 'du-wul nyin-di',
                  gender: '',
                },
                description: '',
                english: 'Mangrove Jack',
                scientific: 'Lutjanus argentimaculatus',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Amphibians',
            // images: [{path: require('../assets/images/amphibians.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Jedman jirri',
                  syllables: 'Jed-man jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Frog - general',
                scientific: 'Anura',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Insects',
            // images: [{path: require('../assets/images/insects.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Dirrinjinji jirri',
                  syllables: 'dirr-in-jin-ji   jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Dragonflies',
                scientific: 'Anisoptera',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mawinggi jirri',
                  syllables: 'maw-ing-gi jirr-i',
                  gender: '',
                },
                description:
                  'Praying mantises look like <b>Giyon</b> (Bradshaw) figures. They protect us from cyclone wind. <b>Mawinggi</b> is also the word for ‘cool weather season’ and ‘south east wind’.',
                english: 'Praying mantis',
                scientific: 'Mantidae',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Marangi nyindi',
                  syllables: 'ma-ra-ngi nyin-di',
                  gender: '',
                },
                description: 'Also word for ‘sun’',
                english: 'Cicada',
                scientific: 'Cicadidae',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Burrgun jirri',
                  syllables: 'burr-gun jirr-i',
                  gender: '',
                },
                description:
                  '<b>Burrgun</b> build their nests from mud during <b>mawinggi</b> (cool season). <b>Burrgun</b> is also one of the words for ‘jealous’.',
                english: 'Australian Hornet',
                scientific: 'Abispa ephippium',
                alternatives: [],
              },
            ],
            collections: [
              {
                name: 'Grasshoppers',
                // images: [{path: require('../assets/images/grasshoppers.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Gumanggi nyindi',
                      syllables: 'gu-mang-gi nyin-di',
                      gender: '',
                    },
                    description:
                      'A little green grasshopper that jumps like a frog. People cook <b>gumanggi</b> in ashes and eat them. <b>Gumanggi</b> are best eaten in <b>mawinggi</b> (cool season).',
                    english: 'Small Green Grasshopper',
                    scientific: 'Orthoptera',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Guriny jirri',
                      syllables: 'gu-riny jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Large Green Grasshopper',
                    scientific: 'Orthoptera',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Derrge nyindi',
                      syllables: 'derr-ge nyin-di',
                      gender: '',
                    },
                    description:
                      '<b>Banarr</b> (bush turkey) and goannas eat these grey grasshoppers.',
                    english: 'Grey Grasshopper',
                    scientific: 'Orthoptera',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Flies',
                // images: [{path: require('../assets/images/flies.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Wurrngarna jirri',
                      syllables: 'wurr-ngarn-a jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Bush Fly',
                    scientific: 'Mucaidae; Musca spp.',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Gaanggi nyindi',
                      syllables: 'gaang-gi nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'March Fly',
                    scientific: 'Tabanidae',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Bijili nyindi',
                      syllables: 'bi-ji-li nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Mosquito',
                    scientific: 'Culicidae',
                    alternatives: [],
                  },
                ],
              },
              {
                name: 'Ants',
                // images: [{path: require('../assets/images/ants.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Dilalanggi',
                      syllables: 'di-la-lang-gi',
                      gender: '',
                    },
                    description: '',
                    english: 'Bull Ants',
                    scientific: 'Myrmecia spp.',
                    alternatives: [
                      {
                        ngarinyin: 'Ngulamba jirri',
                        syllables: 'ngu-lam-ba jirr-i',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Mayga jirri',
                      syllables: 'may-ga jirr-i',
                      gender: '',
                    },
                    description:
                      '<b>Mayga</b> can be used to help with colds, coughs, tummy ache and headaches. They have a bitter taste. A nest is broken off from a tree and placed in a billy with water. The ants are then squeezed and mixed around before drinking. Sugarbag or boab nut is added to make the taste less bitter.',
                    english: 'Green Tree Ants',
                    scientific: 'Oecophylla smaragdina',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Mirrirri jirri',
                      syllables: 'mirr-irr-i jirr-i',
                      gender: '',
                    },
                    description: '',
                    english: 'Black Ant - general',
                    scientific: 'Formicidae',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Ngalgarr nyindi',
                      syllables: 'ngal-garr nyin-di',
                      gender: '',
                    },
                    description: '',
                    english: 'Red Ant - general',
                    scientific: 'Formicidae',
                    alternatives: [
                      {
                        ngarinyin: 'Murra nyindi',
                        syllables: 'murr-a nyin-di',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Jangi nyindi',
                      syllables: 'ja-ngi nyin-di',
                      gender: '',
                    },
                    description:
                      'Ant bed can be used to help with tummy ache or an itchy body. Soil is chipped off from dark red ant beds. This is then sucked on or eaten to help with tummy ache. It is mixed with water and rubbed on the body to relieve itching.',
                    english: 'Ant bed',
                    scientific: '',
                    alternatives: [
                      {
                        ngarinyin: 'Jarramanggi nyindi',
                        syllables: 'jarr-a-mang-gi nyin-di',
                        gender: '',
                      },
                    ],
                  },
                ],
              },
              {
                name: 'Feral Animals',
                // images: [{path: require('../assets/images/feral_animals.png'), credit: 'Unknown'}],
                members: [
                  {
                    name: {
                      ngarinyin: 'Garnanggud',
                      syllables: 'garn-ang-gud',
                      gender: '',
                    },
                    description: '',
                    english: 'Dog',
                    scientific: 'Canis lups familiaris',
                    alternatives: [
                      {
                        ngarinyin: 'Dila',
                        syllables: 'di-la',
                        gender: '',
                      },
                    ],
                  },
                  {
                    name: {
                      ngarinyin: 'Yawarda',
                      syllables: 'yaw-ard-a',
                      gender: '',
                    },
                    description: '',
                    english: 'Horse',
                    scientific: 'Equus ferus caballus',
                    alternatives: [],
                  },
                  {
                    name: {
                      ngarinyin: 'Bulumana',
                      syllables: 'bu-lu-ma-na',
                      gender: '',
                    },
                    description: '',
                    english: 'Cattle',
                    scientific: 'Bos taurus',
                    alternatives: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Ngarinyin Plants',
        // images: [{path: require('../assets/images/ngarinyin_plants.png'), credit: 'Unknown'}],
        collections: [
          {
            name: 'Aquatic Plants',
            // images: [{path: require('../assets/images/aquatic_plants.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Jalagu mindi',
                  syllables: 'ja-la-gu min-di',
                  gender: '',
                },
                description:
                  '<strong>Jalagu </strong>(Green Algae) grows on rocks in shallow water, it is very slippery. <strong>Jalagu </strong>is used to smoke babies to bless them and give them good health. The <strong>jalagu </strong>is placed on top of a rock that has been heated in the fire to create smoke. The baby is then bathed in the smoke. <strong>Jalagu </strong>is also used in cooking. It is put in an <strong>arlal </strong>(earth oven) and then <strong>yanggali mindi </strong>(water chestnut) or <strong>yarn.gun </strong>(water yam) are placed on top. Kids are made to <strong>jin </strong>(suck) <strong>jalagu </strong>so they don&rsquo;t swear.',
                english: 'green algae, green slime',
                scientific: 'Nitella spp.',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yarn.gun di',
                  syllables: 'yarn-gun di',
                  gender: '',
                },
                description: '',
                english: 'Water Yam',
                scientific: 'Triglochin dubia',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Manbarda mindi',
                  syllables: 'man-bard-a min-di',
                  gender: '',
                },
                description:
                  'The tuber, stems, fruit and seeds can be eaten. The tuber is called <strong>ungguya jirri</strong>.',
                english: 'Water Lily',
                scientific: 'Nymphaea violacea',
                alternatives: [
                  {
                    ngarinyin: 'Arnjil mindi',
                    syllables: 'arn-jil min-di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Wolalombud jirri',
                  syllables: 'wo-la-lom-bud jirr-i',
                  gender: '',
                },
                description: 'This lily has no edible tuber.',
                english: 'Marshwort',
                english_alts: ['Yellow Snowflake Lily'],
                scientific: 'Nymphoides aurantiaca',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yanggali mindi',
                  syllables: 'yang-ga-li min-di',
                  gender: '',
                },
                description:
                  '<strong>Yanggali </strong>can be found where the Hann River crosses the Gibb River Road. You can see the green shoots of <strong>yanggali </strong>sticking out of the water.',
                english: 'Water Chestnut',
                scientific: 'Eleocharis dulcis',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Bamboo',
            // images: [{path: require('../assets/images/bamboo.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Girn.gu di',
                  syllables: 'girn-gu di',
                  gender: '',
                },
                description:
                  'People used to leave cut pieces of bamboo for about a month to dry. They then straightened the bamboo in the coals of a fire and made it into a spear shaft. They smeared the finished spear with yellow ochre.',
                english: 'Bush bamboo',
                scientific: 'Species unindentified',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Climbers',
            // images: [{path: require('../assets/images/climbers.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Me birri jawadnangga',
                  syllables: 'me birr-i jaw-ad-nang-ga',
                  gender: '',
                },
                description:
                  'The shoots of these plants are called <strong>mayawarla mindi</strong>',
                english: 'Yams - general',
                english_alts: ['wet season vegetables'],
                scientific: 'Dioscorea',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Malungun jirri',
                  syllables: 'mal-u-ngun jirr-i',
                  gender: '',
                },
                description:
                  'This yam grows on the flat ground at <strong>Dorrorrima </strong>(Nannygoat Spring) at Munja. It has a thick vine. It is ripe in <strong>jawad </strong>(wet season). <strong>Malungun </strong>tastes like hot chilli. It needs to be burnt, then smashed, this process needs to be repeated a few times before you can eat it. It takes away people&rsquo;s fat when they eat it and makes them slim.',
                english: 'Long Cheeky Yam',
                scientific: 'unidentified',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jarrgun di',
                  syllables: 'jarr-gun di',
                  gender: '',
                },
                description:
                  '<strong>Jarrgun </strong>grow in <strong>Walarra </strong>(Mt Hart area) along the river. <strong>Jarrgun </strong>is a type of bush potato which is round and solid. It has bulbous protrusions with hair. <strong>Jarrgun </strong>is ripe at the end of <strong>jawad </strong>(wet season). It burns your tongue and tastes like curry. You have to cut it and rub ashes into it to take the burn out of it. You cook it in an earth oven (<strong>arlal</strong>) and leave it all night. <strong>Jarrgun </strong>and other food items were traded in the <strong>wurnan </strong>(trading system).',
                english: 'Bush Potato',
                english_alts: ['Round Yam', 'Air Potato'],
                scientific: 'Dioscorea bulbifera',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garnmanggu mindi',
                  syllables: 'garn-mang-gu min-di',
                  gender: '',
                },
                description:
                  'These yams grow along the river and on the hill side near Pantijan, at a place called <strong>Nanginda </strong>(before the river). <strong>Garnmanggu </strong>is a twisted long brown yam with hairs. They are ripe at the end of <strong>jawad </strong>(wet season). This yam is not as solid as <strong>jarrgun </strong>and is cooked in the ashes.',
                english: 'Long Yam',
                scientific: 'Dioscorea transversa',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Wingingad jirri',
                  syllables: 'wing-i-ngad jirr-i',
                  gender: '',
                },
                description:
                  'It is a climber that has a yam like a sweet potato underneath.',
                english: 'Kangaroo Yam',
                scientific: 'Ipomoea abrupta',
                alternatives: [
                  {
                    ngarinyin: 'Winingarri',
                    syllables: 'win-i-ngarr-i',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Gulebarda jirri',
                  syllables: 'gu-le-bard-a jirr-i',
                  gender: '',
                },
                description:
                  'These yams are found on islands in the creek south of Pantijan. <strong>Gulebarda </strong>grows in sand in spring country. <strong>Gulebarda </strong>is a long, thin yam which is black and hairy.',
                english: 'Long yam',
                scientific: 'unidentified',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gajin di',
                  syllables: 'ga-jin di',
                  gender: '',
                },
                description:
                  'This vine grows in hill and spring country. <strong>Gajin </strong>is the same word as &lsquo;sugarbag stick&rsquo;. You can smash up the end of the <strong>gajin </strong>to make it like a brush to get sugarbag out of a hive. The flexible stems can also be used to sew up the edges of bush baskets made of folded bark.',
                english: 'Supplejack',
                scientific: 'Flagellaria indica',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gumbiyan di',
                  syllables: 'gum-bi-yan di',
                  gender: '',
                },
                description:
                  '<strong>Gumbiyan </strong>grows on the sides of hills in Munja and Pantijan.',
                english: 'Bush Carrot',
                scientific: 'Vigna lanceolata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Ngarud nyindi',
                  syllables: 'nga-rud nyin-di',
                  gender: '',
                },
                description:
                  '<strong>Ngarud </strong>is ripe in <strong>jawad </strong>(wet season).',
                english: 'Bush Cucumber',
                scientific: 'Cucumis melo',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mangguja jirri',
                  syllables: 'mang-gu-ja jirr-i',
                  gender: '',
                },
                description:
                  'The fruit of <strong>mangguja </strong>can be eaten when black. <strong>Mangguja </strong>grows on the <strong>galigun </strong>plant. The roots are called <strong>jaburru </strong>or <strong>ngalagun </strong>and are eaten.',
                english: 'Bush Grape',
                scientific: 'Ampelocissus acetosa',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Banimbun di',
                  syllables: 'ba-nim-bun di',
                  gender: '',
                },
                description: '',
                english: 'Bush Carrot',
                scientific: 'unidentified',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Worambud jirri',
                  syllables: 'wo-ram-bud jirr-i',
                  gender: '',
                },
                description: '',
                english: 'Vine - general',
                scientific: '',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Cycads and Palms',
            // images: [{path: require('../assets/images/cycads_and_palms.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Gun.gurru mindi',
                  syllables: 'gun-gurr-u min-di',
                  gender: '',
                },
                description:
                  'The seeds of the Cycad can be eaten after extensive preparation.',
                english: 'Cycads',
                scientific: 'Cycas basaltica, C. lane-poolei',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Orrawa jirri',
                  syllables: 'orr-a-wa jirr-i',
                  gender: '',
                },
                description:
                  'Where Pandanus is standing up there is water. The Pandanus holds water inside it. Dig for the clear water beneath it.',
                english: 'Screw Palm, Spring Pandanus',
                scientific: 'Pandanus spiralis',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gurnjad',
                  syllables: 'gurn-jad',
                  gender: '',
                },
                description: '',
                english: 'River Pandanus',
                scientific: 'Pandanus aquaticus',
                alternatives: [
                  {
                    ngarinyin: 'Gunjan di',
                    syllables: 'gun-jan di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Wodawi mindi',
                  syllables: 'wo-da-wi min-di',
                  gender: '',
                },
                description: 'The inside of the nuts can be eaten.',
                english: 'Pandanus nuts',
                scientific: '',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Dangana di / mindi',
                  syllables: 'dang-a-na di / min-di',
                  gender: 'short',
                },
                description:
                  'The cabbage can be eaten from the leaf bases. It is really tasty and can be eaten raw or lightly roasted. When people cook it in a <strong>gunggun </strong>(earth oven) <strong>dangana </strong>is really sweet.',
                english: 'Livistona Palm',
                scientific:
                  'Livistona eastonii, L. kimberleyana, L. lorophylla, L. nasmophila',
                alternatives: [
                  {
                    ngarinyin: 'Yarlarra',
                    syllables: 'yarl-arr-a',
                    gender: 'tall',
                  },
                ],
              },
            ],
          },
          {
            name: 'Herbs',
            // images: [{path: require('../assets/images/herbs.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Gernen jirri',
                  syllables: 'gern-en jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Gernen </strong>are found near creeks at <strong>Walarra </strong>(Mount Hart). <strong>Gernan </strong>is similar to <strong>jarrgun </strong>(Bush Potato). It has a stinging taste. They need to be cooked correctly to get rid of the hot taste.',
                english: 'Cheeky Yam',
                english_alts: ['Sweet Snakeskin Lily'],
                scientific: 'Amorphophallus galbra',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Majal mindi',
                  syllables: 'ma-jal min-di',
                  gender: '',
                },
                description: '',
                english: 'Grass - general',
                scientific: 'Poaceae',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Walalirri jirri',
                  syllables: 'wa-la-lirr-i jirr-i',
                  gender: '',
                },
                description: 'Kerosene grass burns quickly.',
                english: 'Northern Kerosene Grass',
                scientific: 'Aristida hygrometrica',
                alternatives: [
                  {
                    ngarinyin: 'Garul jirri',
                    syllables: 'ga-rul jirr-i',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Jorlon jorlon jirri',
                  syllables: 'jorl-on jorl-on jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Jorlon jorlon jirri </strong>is crushed and used to wrap up fish or kangaroo before putting in <strong>arlal </strong>(earth oven) to provide flavour when cooking.',
                english: 'Lemon Grass',
                scientific: 'Cymbopogon procerus',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jardi jirri',
                  syllables: 'jard-i jirr-i',
                  gender: '',
                },
                description:
                  'The strong smelling leaves of <strong>jardi jirri </strong>are good medicine for coughs and colds.',
                english: 'Spinifex Grass',
                scientific: 'Triodia spp.',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mija di',
                  syllables: 'mi-ja di',
                  gender: '',
                },
                description:
                  '<strong>Mija di </strong>is known as Spinfex wax in the Kimberley. <strong>Mija </strong>is made from a big, round type of Spinifex. When it is hot it is soft, but when it cools it sets very hard. It is used to fix spear heads to shafts. <strong>Mija </strong>can be burnt and sniffed to help with colds.',
                english: 'Spinifex Resin',
                scientific: 'p',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gurimbi mindi',
                  syllables: 'gu-rim-bi min-di',
                  gender: '',
                },
                description:
                  'The <strong>gurimbi </strong>roots are bright red and can be used to paint up for ceremonies. If you soak it in water and heat it up it can be used as a rubbing medicine for sore elbows, backs, knees, and feet. You <strong>gurl </strong>(press it down) on the body part.',
                english: 'Red Root',
                anglish_alts: 'Bloodroot',
                scientific: 'Haemodoraceae',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Migarraba mindi',
                  syllables: 'mi-garr-a-ba min-di',
                  gender: '',
                },
                description: '',
                english: 'Bush Onion',
                scientific: 'Cyperus bulbosus',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jirigi jirri / nyindi',
                  syllables: 'jir-ig-i jirr-i / nyin-di',
                  gender: '',
                },
                description:
                  '<strong>Jirigi jirri </strong>is ripe in <strong>jawad </strong>(wet season) and can be eaten raw out of the ground.',
                english: 'Bush potato',
                scientific: 'Brachystelma glabriflorum',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yara jirri',
                  syllables: 'ya-ra jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Yara </strong>is a big round yam with white flowers. The yams can be eaten after cooking on hot coals for the whole night. If they are not properly cooked they have a strong taste like chillies. In the past the old people used it as food for people who were overweight and it would make them slim.',
                english: 'Chilly Yam',
                english_alts: ['Polynesian Arrowroot'],
                scientific: 'Tacca leontopetaloides',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gilan di',
                  syllables: 'gi-lan di',
                  gender: '',
                },
                description:
                  '<strong>Gilan di </strong>fruit can be eaten to help with tummy ache and colds. But you need to watch out for the spiky bits.</p>\n<p><strong>Gilan di </strong>is also the word for <em>Triumfetta bradshawii, </em>the fruit of which is eaten by emus.',
                english: 'Spiky bush tomato',
                scientific: 'Solanum echinatum, Triumfetta bradshawii',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Mistletoe',
            // images: [{path: require('../assets/images/mistletoe.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Marrun di',
                  syllables: 'marr-un di',
                  gender: '',
                },
                description:
                  '<strong>Marrun di </strong>fruit can be eaten when they are ripe and yellow to red in colour. They are sweet and sticky inside like chewing gum. The leaves can be used as medicine, they are crushed and applied to any part of the body that is painful or unwell. It is a good medicine. This mistletoe is found in river country, not in black soil. <strong>Gurin di </strong>is also the word for &lsquo;red sap&rsquo;.',
                english: 'Mangrove Mistletoe',
                scientific: 'Amyema mackayensis ?',
                alternatives: [
                  {
                    ngarinyin: 'Gurin di',
                    syllables: 'gu-rin di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Marrenbi mindi',
                  syllables: 'marr-en-bi min-di',
                  gender: '',
                },
                description:
                  'This plant grows on a wattle tree at the entrance to Mowanjum Art Centre. There are red and yellow types.',
                english: 'Mistletoe',
                scientific: 'Lysiana spathulata',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Shrubs',
            // images: [{path: require('../assets/images/shrubs.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Bunjurrul mindi',
                  syllables: 'bun-jurr-ul min-di',
                  gender: '',
                },
                description:
                  'The old wood is taken from below the tree and burnt. The wood burns all night (longer than Cypress Pine). The smoke is good for colds and for smoking new places, welcoming people to country and keeping spirits away. The fruit is edible, it is ripe in <strong>winjin </strong>(middle of wet season).',
                english: 'Conkerberry',
                scientific: 'Carissa lanceolata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garn.gu mindi',
                  syllables: 'garn-gu min-di',
                  gender: '',
                },
                description:
                  'The white fruit are eaten when they are ripe in the wet season. The dry straight stems can be used as fire sticks, if no better ones are around.',
                english: 'White Currant',
                scientific: 'Flueggea virosa',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Short Trees (2-10 metres)',
            images: [
              {
                path: require('../assets/images/short_trees_(2-10_metres).png'),
                credit: 'Unknown',
              },
            ],
            members: [
              {
                name: {
                  ngarinyin: 'Barla mindi',
                  syllables: 'barl-a min-di',
                  gender: '',
                },
                description:
                  '<strong>Barla </strong>leaves can be heated up on ashes and use as a heat pack for aching joints.',
                english: 'Wattle',
                scientific: 'Acacia neurocarpa',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Bimarr di',
                  syllables: 'bi-marr di',
                  gender: '',
                },
                description: '',
                english: 'Tropical Banksia',
                images: [
                  {
                    path: require('../assets/images/tropical_banksia.jpg'),
                    credit: 'Unknown',
                  },
                ],
                scientific: 'Banksia dentata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gundulu mindi',
                  syllables: 'gun-du-lu min-di',
                  gender: '',
                },
                description:
                  'When <strong>gundulu </strong>flowers it is a sign that <strong>merringun </strong>(hot season)&nbsp; &nbsp;is&nbsp; &nbsp;starting. <strong>Gundulu </strong>is used to heal <strong>wijin </strong>(sores) and itchiness. The soft, inside fibres of bark are soaked or boiled and the water is rubbed on the body where there are sores or itchiness. The leaves can also be chewed and spat on sores.',
                english: 'Bauhinia Tree',
                scientific: 'Bauhinia cunninghamii',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Balmangan di',
                  syllables: 'bal-ma-ngan di',
                  gender: '',
                },
                description: 'Emus eat the flowers.',
                english: 'Fern-leaved Grevillea',
                scientific: 'Grevillea pterifolia',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jugurrun di',
                  syllables: 'ju-gurr-un di',
                  gender: '',
                },
                description:
                  '<strong>Jugurrun </strong>grows in the Charnley River, Mount Barnett and Gibb River areas. The fruit is sweet and can be eaten.',
                english: 'Bush Orange',
                scientific: 'Capparis umbonata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Waraarri di',
                  syllables: 'wa-raarr-i di',
                  gender: '',
                },
                description:
                  'A tree found in hill country with yellow flowers. It is a source of <strong>anda </strong>(a type of sugarbag). The timber is heavy and hard and it is good for making clap-sticks and digging-sticks.',
                english: 'Bridal Tree',
                scientific: 'Xanthostemon paradoxus',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Dembel di',
                  syllables: 'dem-bel di',
                  gender: '',
                },
                description:
                  'This small tree is the cousin-brother of <strong>bonjoy</strong>. It has red flowers and although it is a much smaller plant it has larger fruit and seeds. When the seed pods open you can cook the seeds and eat them. The inner bark of young plants is used to make rope and string called <strong>yirrgal</strong>.',
                english: 'Red-flowered Kurrajong',
                scientific: 'Bracychiton fitzgeraldianus',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garlwa mindi',
                  syllables: 'garl-wa min-di',
                  gender: '',
                },
                description:
                  '<strong>Garlwa </strong>has yellow flowers and the fruit contains kapok (fluffy seeds). The wood and seed pods can be used to start fires. The young plants have a yam under the ground. They are dug up and cooked in hot sand before eating. Fibres of the soft, inner bark can be used as string and can be woven.',
                english: 'Yellow Kapok, Kapok Bush',
                scientific: 'Cochlospermum fraseri',
                alternatives: [
                  {
                    ngarinyin: 'Alwa',
                    syllables: 'al-wa',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Ngalirrgi mindi',
                  syllables: 'nga-lirr-gi min-di',
                  gender: '',
                },
                description:
                  '<strong>Ngalirrgi </strong>is found by a creek west of Pantijan. It has round, white fruit and is bigger than <strong>garn.gu </strong>(white currant). The fruit is ripe in <strong>jawad </strong>(wet season).',
                english: 'White Bush Apple',
                scientific: 'Syzygium sp.',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jinud di',
                  syllables: 'ji-nud di',
                  gender: '',
                },
                description:
                  'The small fruit of <strong>jinud </strong>are eaten when they turn black. The fruit is also eaten by many birds. The leaf is rough like sandpaper and can be used to make wooden implements smooth. Sometimes is used to be used as a nail file.',
                english: 'Sandpaper Fig',
                scientific: 'Ficus opposita',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Bunju mindi',
                  syllables: 'bun-ju min-di',
                  gender: '',
                },
                description:
                  '<strong>Bunju </strong>fruit are eaten when ripe (red). They are very sweet and tasty. Sometimes there is a lot on one tree, but the birds also like to eat them a lot. When they are fully ripe, they are soft to touch and the skin comes off easily.',
                english: 'Rock Fig',
                scientific: 'Ficus platypoda, F. brachypoda',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garra mindi',
                  syllables: 'garr-a min-di',
                  gender: '',
                },
                description:
                  'The fruit of <strong>garra mindi </strong>can be eaten, or boiled then drunk.',
                english: 'Dog&rsquo;s Balls, Emu Berry',
                scientific: 'Grewia pindanica',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Barnamarr mindi',
                  syllables: 'barn-a-marr  min-di',
                  gender: '',
                },
                description:
                  'The timber from this tree can be used to make a fighting stick also called <strong>barnamarr</strong>. The white gum can be eaten.',
                english: 'Winged-nut Tree',
                scientific: 'Terminalia canescens',
                alternatives: [
                  {
                    ngarinyin: 'Murrumbun mindi',
                    syllables: 'murr-um-bun  min-di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Mayawu mindi',
                  syllables: 'may-awu min-di',
                  gender: '',
                },
                description:
                  'The fruit from <strong>mayawu </strong>can be eaten when ripe (light green to yellow). The flesh turns pink and white when ripe. The fruit is bitter, but some are sweet if they have green ants on them. The dry bark makes good ashes for chewing with tobacco.',
                english: 'Billy Goat Plum',
                scientific: 'Terminalia ferdinandiana',
                alternatives: [
                  {
                    ngarinyin: 'Mamarndu mindi',
                    syllables: 'ma-marn-du  min-di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Gelgen di',
                  syllables: 'gel-gen di',
                  gender: '',
                },
                description:
                  '<strong>Gelgen </strong>fruit can be eaten when they are green but soft to touch. They have a good taste and are ready about early November. <strong>Gelgen </strong>are picked off the ground and eaten.',
                english: 'Milky Plum, Wild Pear',
                scientific: 'Persoonia falcata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Wuljen di',
                  syllables: 'wul-jen di',
                  gender: '',
                },
                description:
                  '<strong>Wuljen </strong>has fruit that looks like small oranges. People can&rsquo;t eat the fruit. Emus eat the fruit. This tree often has sugarbag in it. The wood can be used to make coals.',
                english: 'Quinine Tree',
                scientific: 'Petalostigma pubescens',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Dalmba mindi',
                  syllables: 'dalm-ba min-di',
                  gender: '',
                },
                description:
                  '<strong>Dalmba </strong>is a small tree found in hill country. The hard round fruit are eaten by black cockatoos but not by people.',
                english: 'Northern Yellow Boxwood',
                scientific: 'Planchonella arnhemica, P. pohlmaniana',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gurnan di',
                  syllables: 'gurn-an di',
                  gender: '',
                },
                description:
                  'The dry stick of this skinny tree can be made into fire sticks. A fire stick is also called <strong>gurnan</strong>.',
                english: 'Firestick tree',
                scientific: 'Premna acuminata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yirrge jirri',
                  syllables: 'yirr-ge jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Mayga jirri </strong>(green ants) and <strong>waanangga </strong>(sugarbag) are commonly found on <strong>yirrge jirri</strong>. Its stringy bark is used as string and fish poison. The fruit and seeds are edible. This tree grew near the back to country camp at Mt Hart. It was flowering in October, <strong>merringun </strong>(hot season). The tree has rough bark like an Ironbark tree and white flowers.',
                english: 'Cocky Apple',
                scientific: 'Planchonia careya',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gulay mindi',
                  syllables: 'gu-lay min-di',
                  gender: '',
                },
                description: '',
                english: 'Green Plum',
                scientific: 'Buchanania obovata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Malawa mindi',
                  syllables: 'ma-la-wa min-di',
                  gender: '',
                },
                description:
                  'People used to throw the <strong>malawa </strong>seeds into the water. The fish would then get short of breath and they would come to the surface for fresh air. People would then be able to easily catch the fish.',
                english: 'Freshwater Mangrove',
                scientific: 'Barringtonia acutangula',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jirndi mindi',
                  syllables: 'jirn-di min-di',
                  gender: '',
                },
                description: '',
                english: 'Mangroves - general',
                scientific: '',
                alternatives: [],
              },
            ],
          },
          {
            name: 'Tall Trees (over 10 metres)',
            // images: [{path: require('../assets/images/tall_trees_(over_10_metres).png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Jungulan jirri',
                  syllables: 'jung-u-lan jirr-i',
                  gender: '',
                },
                description:
                  'There are various names for the Boab tree in Ngarinyin. The bark can be made into string and rope called <strong>yirrgal </strong>or <strong>mamulanja</strong>.',
                english: 'Boab Tree',
                scientific: 'Adansonia gregorii',
                alternatives: [
                  {
                    ngarinyin: 'Larrgari jirri',
                    syllables: 'larr-ga-ri jirr-i',
                    gender: '',
                  },
                  {
                    ngarinyin: 'Malawudi jirri',
                    syllables: 'ma-la-wu-di jirr-i',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Yuwugun di',
                  syllables: 'yuwu-gun di',
                  gender: '',
                },
                description:
                  '<strong>Yuwugun di </strong>are dry, but you can soak them in water. You can use a <strong>nogun </strong>(hammer stone) to crush and grind the pith and seeds, and then eat them. The nuts can also be eaten green if they are cooked in hot ashes. <strong>Yuwugun di </strong>soaked in water with sugarbag can help with tummy ache.',
                english: 'Boab nut',
                scientific: 'Adansonia gregorii',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Bonjoy jirri',
                  syllables: 'bon-joy jirr-i',
                  gender: '',
                },
                description:
                  'This large straight tree grows in jungles and beside big rivers. The fruit has cotton wool like kapok. The trunk is used to make canoes (<strong>namandi</strong>).',
                english: 'Bombax',
                english_alts: ['Red Silk Cotton Tree', 'Kapok Tree'],
                scientific: 'Bombax ceiba',
              },
              {
                name: {
                  ngarinyin: 'Guru mindi',
                  syllables: 'gu-ru min-di',
                  gender: '',
                },
                description:
                  'The dark yellow-coloured wood from older trees with dark bark, is burned to make smoke. The smell chases away mosquitoes and sand flies. It is also good for colds and flu. It can be used to smoke spirits away. The timber is termite resistant.',
                english: 'Cypress Pine',
                scientific: 'Callitris columellaris',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Unggarrun di',
                  syllables: 'ung-garr-un di',
                  gender: '',
                },
                description:
                  '<strong>Unggarrun </strong>has very hard and heavy timber. It is used to make clap-sticks that have a strong, sharp sound. The leaves are used for smoking when coming onto country or when strangers are visiting.',
                english: 'Ironwood',
                scientific: 'Erythrophleum chlorostachys',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Burrgu burrgu mindi',
                  syllables: 'burr-gu burr-gu min-di',
                  gender: '',
                },
                description:
                  '<strong>Burrgu&nbsp;</strong><strong>burrgu&nbsp;</strong><strong>mindi&nbsp;</strong>flowers in <strong>mawinggi</strong>(cool season). It gets seeds when it is coming on to <strong>merringun </strong>(hot season). You can wind its sugarbag out like a string.',
                english: 'Long-fruited Bloodwood',
                scientific: 'Corymbia polycarpa',
                alternatives: [
                  {
                    ngarinyin: 'Bunda mindi',
                    syllables: 'bun-da min-di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Wawala nyindi',
                  syllables: 'waw-a-la nyin-di,',
                  gender: '',
                },
                description:
                  'There is a lot of this tree on the dolerite slope near Wilson Point, Koolan Island (in Worrorra country). Sugarbag can be found in this tree. The bark is good for ashes. Didgeridoos can be made from the hollow stems and branches. This tree is the main source of <strong>gurin</strong>, a red sap used in medicine. In <strong>mawinggi </strong>(cold season) native bees produce bush honey from it.',
                english: 'Swamp Bloodwood',
                scientific: 'Corymbia ptychocarpa',
                alternatives: [
                  {
                    ngarinyin: 'Dilid nyindi',
                    syllables: 'di-lid nyin-di',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Barawan di',
                  syllables: 'ba-ra-wan di',
                  gender: '',
                },
                description:
                  'The nut inside the hard fruit of <strong>barawan </strong>is eaten after cracking open the fruit and picking out the seed.',
                english: 'Nutwood, Bush Almond',
                scientific: 'Terminalia grandiflora',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Jalard jirri',
                  syllables: 'ja-lard jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Jalard </strong>seeds can be eaten after the fruit has been cooked in the fire. The fire removes the small, cheeky hairs which are dangerous and can hurt your eyes. Children are not allowed to touch the fruit. The seeds taste like popcorn when they are cooked. The inner bark of young plants is used to make rope and string (<strong>yirrgal</strong>).',
                english: 'Northern Kurrajong',
                scientific: 'Brachychiton diversifolius',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garranggan di',
                  syllables: 'garr-ang-gan di',
                  gender: '',
                },
                description:
                  'The young leaves of <strong>garranggan </strong>are boiled in water and the steam is inhaled for colds. The infused water can also be put on skin to help with sores, scabies and itchiness.',
                english: 'River Red Gum',
                scientific: 'Eucalyptus camaldulensis',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gawujan di',
                  syllables: 'gaw-u-jan di',
                  gender: '',
                },
                description:
                  'Bees feed on the nectar of the flowers in <strong>jawad&nbsp;</strong>(wet season).',
                english: 'Grey Box',
                scientific: 'Eucalyptus tectifica',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Arn.gudi di',
                  syllables: 'arn-gud-i di',
                  gender: '',
                },
                description:
                  'Many birds eat the orange flowers and black cockatoos eat the fruit. Possums also eat the flowers and often live in the hollow trunks. Sugarbag is found in this tree, especially when they are flowering in <strong>mawinggi </strong>(the cold season). Hollow stems and branches can be used for didgeridoos.',
                english: 'Woollybutt tree',
                scientific: 'Eucalyptus miniata',
                alternatives: [
                  {
                    ngarinyin: 'Manawan jirri',
                    syllables: 'ma-na-wan jirr-i',
                    gender: '',
                  },
                ],
              },
              {
                name: {
                  ngarinyin: 'Jiliwa mindi',
                  syllables: 'ji-li-wa min-di',
                  gender: '',
                },
                description:
                  '<strong>Jiliwa </strong>is a large tree that grows in jungles and the fruit occurs in clusters on the stems. The fruit can be eaten when they are red or brown. <strong>Emana</strong>, Black Bream eat <strong>jiliwa</strong>.',
                english: 'Cluster Fig',
                scientific: 'Ficus racemosa',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Ngurinyid jirri',
                  syllables: 'ngu-ri-nyid jirr-i',
                  gender: '',
                },
                description:
                  '<strong>Ngurinyid </strong>has smaller fruit than <strong>jiliwa</strong>. The tree grows near rivers. People don&rsquo;t eat the <strong>ngurinyid </strong>fig. <strong>Emana</strong>, Black Bream and water animals eat <strong>ngurinyid </strong>figs.',
                english: 'River Fig',
                english_alts: ['Long-leaf Fig'],
                scientific: 'Ficus coronulata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Bangi',
                  syllables: 'Ban-gi',
                  gender: '',
                },
                description:
                  '<strong>Bangi </strong>is a large tree that has many roots coming down from the branches. The bark is stripped off these roots and softened and then used to make general purpose string that is very strong. The small fruit can be eaten.',
                english: 'Banyan',
                scientific: 'Ficus virens',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garlmbi jirri',
                  syllables: 'garlm-bi jirr-i',
                  gender: '',
                },
                description:
                  'The sap from <strong>garlmbi </strong>is sticky and smelly. The soft light wood is good for making coolamons and shields. It is also used to make artefacts that are sold to tourists. The fruit twirl down to the ground like little helicopters and kids often play with them.',
                english: 'Coolamon Tree',
                english_alts: ['Stinkwood', 'Shitwood'],
                scientific: 'Gyrocarpus americanus',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Luwud mindi',
                  syllables: 'luwud min-di',
                  gender: '',
                },
                description:
                  '<strong>Luwud </strong>has black fruit like <strong>gulangi </strong>(Black Plum) and <strong>bunju </strong>(Rock Fig). When the seeds fall into the water they are eaten by fish such as <strong>emana </strong>(Black Bream), <strong>burnda </strong>(Spangled Perch) and <strong>jarramban </strong>(Cherabin).',
                english: 'Leichhardt Tree ?',
                scientific: 'Nauclea orientalis ?',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Malmbu di',
                  syllables: 'malm-bu di',
                  gender: '',
                },
                description:
                  'People used to make rafts (<strong>bililu</strong>) out of <strong>malmbu</strong>. Bark from <strong>malmbu </strong>is used to make <strong>ngardarri </strong>(head caps) for dancing.',
                english: 'Weeping Paperbark',
                scientific: 'Melaleuca leucadendra',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Wungen di',
                  syllables: 'wung-en di',
                  gender: '',
                },
                description:
                  'Press warm <strong>gawun mindi </strong>/ <strong>gorna mindi </strong>(ashes) made from the leaves or bark of <strong>wungen </strong>on <strong>murlgi jirri </strong>(boils). You can also use it to help squeeze <strong>jumbul jirri </strong>(pus) out of boils.',
                english: 'Silver-leaved Paperbark ?',
                scientific: 'Melaleuca argentea ?',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Lambun di',
                  syllables: 'lam-bun di',
                  gender: '',
                },
                description:
                  '<strong>Garragi jirri </strong>(bark bucket) is made from <strong>lambun</strong>. <strong>Garragi </strong>these days is also the word for &lsquo;billy can&rsquo; and &lsquo;bag&rsquo;.',
                english: 'Broad-leaved Paperbark ?',
                scientific: 'Melaleuca viridflora ?',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mamarndu mindi',
                  syllables: 'ma-marn-du  min-di',
                  gender: '',
                },
                description:
                  '<strong>Mamarndu </strong>can be found near creeks and rivers, like at <strong>Walarra </strong>(Mount Hart) and <strong>Mangurre </strong>(where the Gibb River crosses the Gibb River Road). <strong>Marndan di </strong>(clear coloured sap from the trunk and branches) is used as glue and can be eaten to clean out your guts. The fruit is also edible and is good for colds and makes blood strong.',
                english: 'Wild Plum ?',
                scientific: 'Terminalia platyphylla ?',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mamarndu mindi',
                  syllables: 'ma-marn-du  min-di',
                  gender: '',
                },
                description:
                  '<strong>Mamarndu </strong>can get quite large and it grows around coastal areas in jungles and vine thickets. The fruit is ripe in <strong>merringun </strong>(hot weather season). Ripe fruit can be eaten when they are purple in colour. The gum from the trunk and branches is called <strong>marndan di </strong>and can also be eaten.',
                english: 'Billygoat Plum',
                scientific: 'Terminalia petiolaris',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Garnba mindi',
                  syllables: 'Garn-ba min-di',
                  gender: '',
                },
                description:
                  '<strong>Garnba </strong>is found at Manning Gorge. These trees grow on the top of hills. <strong>Garnba </strong>fruit are eaten and are similar to <strong>gulangi </strong>(<em>V. glabrata</em>).',
                english: 'Black Plum',
                scientific: 'Vitex acuminata',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Mabun mindi',
                  syllables: 'ma-bun min-di',
                  gender: '',
                },
                description:
                  'The fruit can be eaten. <strong>Jebarra</strong>, the emu, stole the <strong>gulangi </strong>in the Dreamtime.',
                english: 'Black plum',
                scientific: 'Vitex glabrata',
                alternatives: [
                  {
                    ngarinyin: 'Gulangi mindi / jirri',
                    syllables: 'gu-lang-i min-di / jirr-i',
                    gender: '',
                  },
                ],
              },
            ],
          },
          {
            name: 'Plant types',
            // images: [{path: require('../assets/images/plant_types.png'), credit: 'Unknown'}],
            members: [
              {
                name: {
                  ngarinyin: 'Wuran di',
                  syllables: 'wu-ran di',
                  gender: '',
                },
                description: '',
                english: 'Tree, wood, stick',
                scientific: '',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Yirrminjal di',
                  syllables: 'yirr-min-jal di',
                  gender: '',
                },
                description: '',
                english: 'Leaf, foliage, bushes',
                scientific: '',
                alternatives: [],
              },
              {
                name: {
                  ngarinyin: 'Gurin di',
                  syllables: 'gu-rin di',
                  gender: '',
                },
                description:
                  'Mix <b>gurin</b> with water and boil to make drink or make it thicker to use it on the skin. It helps with <b>jirrimba</b> (itchiness), scabies, <b>wijin</b> (sores) as well as aches and pains.',
                english: 'Red sap',
                scientific: '',
                alternatives: [],
              },
            ],
          },
        ],
      },
    ],
  },
  phrasebook: {
    collections:[
{name:"",collections:[      { 
        name: 'Conversation Basics',
        collections: []
      },
      { 
        name: 'Everyday Questions & Answers',
        collections: []
      },
      { 
        name: 'Culture',
        collections: []
      },
      { 
        name: 'Actions',
        collections: []
      },
      { 
        name: 'Descriptive Words',
        collections: []
      }]}
    ]
  },
  reference: {
    collections:[
      {name:"",collections:[    { 
        name: 'Noun classes',
        collections: []
      },
      { 
        name: 'Orthography',
        collections: []
      }]}
    ]
  },
  about: {
    collections:[
      {name:"",collections:[    { 
        name: 'Introduction',
        collections: []
      },
      { 
        name: 'Purpose',
        collections: []
      },
      { 
        name: 'App structure',
        collections: []
      },
      { 
        name: 'Wilinggin Aboriginal Corporation',
        collections: []
      },
      { 
        name: 'Ngarinyin contributors',
        collections: []
      },
      { 
        name: 'Acknowledgements',
        collections: []
      },
      { 
        name: 'Photographers',
        collections: []
      },]}
    ]
  }
}

export default data
