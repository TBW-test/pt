var PRODUCT = {

  // ── Identity ────────────────────────────────────────────────────────────────
  name:       'PHILIPS EP2331/10 LatteGo',
  attributes: 'Hersteller: Philips • Farbe: schwarz',
  variant:    'EP2334/10 Schwarz',
  heroImage:  'img/product-hero.png',

  // ── Pricing ─────────────────────────────────────────────────────────────────
  bestPrice:  '285,60',
  bestPriceShop: { logo: 'img/logo-otto.png', alt: 'OTTO', shipping: 'Versand: 5,99€' },
  offerListCount:  6,
  totalOfferCount: 12,
  priceRange: 'ab 285,60 € bis 373,55 €',
  discount:   '-15%',
  savings:    { percent: 15, amount: '50,4' },

  // ── Rating & review ─────────────────────────────────────────────────────────
  rating: 4.5,
  reviewSummary: 'Vielseitiger Kaffeezauber. Breite Getränkeauswahl, individuelle Einstellungen, intuitive Bedienung und hoher Komfort – dieses Modell punktet in allen Bereichen und erreicht im Test einen beeindruckenden zweiten Platz.',
  pros: [
    'einfach zu säuberndes Milchsystem',
    'großer Bohnenbehälter',
    'übersichtliches Touchdisplay'
  ],
  cons: [
    'Entkalken dauert sehr lange',
    'lange Aufheizphase'
  ],

  // ── Product images (index 0 = default main image) ───────────────────────────
  images: [
    { src: 'img/figma/product-1.png',       thumb: 'img/figma/product-1-thumb.png' },
    { src: 'img/figma/product-2.png',       thumb: 'img/figma/product-2.png' },
    { src: 'img/figma/product-3.png',       thumb: 'img/figma/product-3.png' },
    { src: 'img/figma/product-4.png',       thumb: 'img/figma/product-4.png' },
    { src: 'img/figma/product-5.png',       thumb: 'img/figma/product-5.png' }
  ],

  // ── Source logos (small circles in summary) ──────────────────────────────────
  sourceLogos: [
    'img/figma/source-logo-1.png',
    'img/figma/source-logo-2.png',
    'img/figma/source-logo-3.png'
  ],

  // ── Auswertung scores ────────────────────────────────────────────────────────
  scores: [
    { label: 'Preis-Leistung',                    value: '4,5', color: '#40cc9e' },
    { label: 'Wartung und Haltbarkeit',            value: '4,8', color: '#40cc9e' },
    { label: 'Typ und Qualität des Zerkleinerers', value: '4,4', color: '#40cc9e' },
    { label: 'Integriertes Milchsystem',           value: '4,1', color: '#40cc9e' },
    { label: 'Pumpendruck und Heizsystem',         value: '3,8', color: '#fed9a4', altLink: true },
    { label: 'Anpassung und Programmierung',       value: '4,2', color: '#40cc9e' }
  ],

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: [
    {
      q: 'Ist das LatteGo-System leicht zu reinigen?',
      a: 'Ja, das LatteGo-System gehört zu den am einfachsten zu reinigenden Milchsystemen auf dem Markt. Es besteht aus nur zwei Teilen – ohne Schläuche oder versteckte Kanäle – und lässt sich in wenigen Sekunden auseinandernehmen. Beide Teile sind spülmaschinenfest. Nach jedem Milchgetränk empfiehlt sich eine kurze Spülung unter fließendem Wasser, um Milchrückstände zu vermeiden.'
    },
    {
      q: 'Wie viele Tassen kann man mit einem vollen Tank zubereiten?',
      a: 'Der 1,8-Liter-Wassertank reicht für ca. 10–15 Tassen Kaffee, je nach Getränkegröße. Für Milchgetränke wird mehr Wasser benötigt. Der Tank lässt sich einfach entnehmen und befüllen.'
    },
    {
      q: 'Ist der Zerkleinerer einstellbar?',
      a: 'Ja, der EP2331/10 verfügt über ein Keramikmahlwerk mit 12 einstellbaren Mahlgradstufen – von fein für intensiven Espresso bis grob für milden Kaffee.'
    },
    {
      q: 'Was ist die Herstellergarantie?',
      a: 'Philips gewährt 2 Jahre Herstellergarantie. Bei Registrierung kann sie auf bis zu 3 Jahre verlängert werden. Die Garantie deckt Material- und Verarbeitungsfehler ab.'
    }
  ],

  // ── Quellen (review sources) ─────────────────────────────────────────────────
  sources: [
    {
      name:  'Stiftung Warentest',
      date:  '20.1.2025',
      logo:  'img/figma/quellen-stiftung.png',
      score: '„befriedigend" (2,8)',
      text:  'Langsamer Aufheiz- und Bezugsprozess. Mäßiger Espresso und enttäuschender Cappuccino, Temperatur kaum variierbar. Nur vier Getränkeoptionen, kein separater Milchschaum.'
    },
    {
      name:  'Computer Bild',
      date:  '2.11.2024',
      logo:  'img/figma/quellen-computerbild.png',
      score: 'Dieser Kaffeevollautomat ist seinen Preis wert',
      text:  'Beim Einstiegs-Kaffeevollautomaten von Philips gibt es wenig zu meckern. Dafür lässt sich der 2300 Series LatteGo einfach bedienen und reinigen, liefert guten Kaffee und verfügt über das bewährte Becher-Milchsystem ohne Schlauch.'
    },
    {
      name:  'Testventure',
      date:  '03.9.2025',
      logo:  'img/figma/quellen-testventure.png',
      score: '„sehr gut" (4,3 von 5 Sternen)',
      text:  'Plus: Hohe Qualität der Spezialitäten; Milchschaum wird erfreulich cremig; simpel zu reinigen und zu bedienen; üppiger Konfigurationsumfang; Verarbeitung auf wertigem Niveau.<br>Minus: Recht hohe Anschaffungskosten.'
    }
  ],

  // ── Datenblatt specs ─────────────────────────────────────────────────────────
  specs: [
    { group: 'Farbe', rows: [
      { label: 'Gehäusefarbe',    value: 'schwarz' },
      { label: 'Herstellerfarbe', value: 'schwarz' }
    ]},
    { group: 'Ausstattung', rows: [
      { label: 'Anzahl Mahlwerke', value: '1' },
      { label: 'Ausstattung',      value: 'Display, Milchaufschäumer, Milchbehälter, Wasserfilter, verstellbarer Kaffeeauslauf' }
    ]},
    { group: 'Bauform', rows: [
      { label: 'Bauart',   value: 'freistehend'   },
      { label: 'Mahlwerk', value: 'Keramikmahlwerk' }
    ]},
    { group: 'Abmessungen', rows: [
      { label: 'Breite',      value: '25 cm'  },
      { label: 'Höhe',        value: '43 cm'  },
      { label: 'Tiefe',       value: '37 cm'  },
      { label: 'Kabellänge',  value: '1,00 m' }
    ]},
    { group: 'Kapazität', rows: [
      { label: 'Bohnenbehältervolumen', value: '275 g'  },
      { label: 'Milchbehältervolumen',  value: '260 ml' },
      { label: 'Wasserbehältervolumen', value: '1,8 l'  }
    ]},
    { group: 'Eignung', rows: [
      { label: 'Geeignete Kaffeeart', value: 'Kaffeebohnen' }
    ]},
    { group: 'Allgemein', rows: [
      { label: 'Modelljahr',   value: '2023'                  },
      { label: 'Produktlinie', value: 'Philips 3300 Series'    },
      { label: 'Varianten',    value: 'mit LatteGo Milchsystem' }
    ]},
    { group: 'Material', rows: [
      { label: 'Gehäusematerial', value: 'Kunststoff' }
    ]},
    { group: 'Leistungsmerkmale', rows: [
      { label: 'Pumpendruck', value: '15 bar' }
    ]},
    { group: 'Lieferumfang', rows: [
      { label: 'Mitgeliefertes Zubehör', value: 'Kaffeemesslöffel, Teststreifen, Wasserfilter' }
    ]},
    { group: 'Gewicht', rows: [
      { label: 'Gesamtgewicht', value: '8,0 kg' }
    ]},
    { group: 'Funktionalitäten', rows: [
      { label: 'Funktionen',          value: 'Abschaltautomatik, Aromafunktion, Entkalkungsfunktion, Heißwasserfunktion, Mahlgradeinstellung, Temperatureinstellung' },
      { label: 'Kaffeespezialitäten', value: 'Cappuccino, Cold Brew, Espresso, Heißwasser, Latte Macchiato, Milchkaffee' }
    ]},
    { group: 'Energiemerkmale', rows: [
      { label: 'Leistungsaufnahme', value: '1 500 W' }
    ]}
  ],

  // ── Offers (price list + offer-details overlay) ──────────────────────────────
  offers: [
    {
      shopLogo: 'img/logo-otto-offer.png', shopAlt: 'OTTO',
      thumb: 'img/offer-thumb-1.png',
      title: 'Philips Series 2300 EP2336/40 – black/chrome',
      desc:  'Der Philips Series 2300 EP2336/40 LatteGo überzeugt mit seinem innovativen LatteGo-Milchsystem, das sich in nur drei Schritten reinigt. Bereite auf Knopfdruck 5 verschiedene Kaffeespezialitäten zu – von Espresso über Cappuccino bis hin zu Latte Macchiato. Der intuitive Farb-Touchscreen macht die Zubereitung kinderleicht. Dank der AquaClean-Filterfunktion kannst du bis zu 5.000 Tassen Kaffee ohne Entkalken genießen. Der verstellbare Mahlgrad und die anpassbare Kaffeestärke sorgen für dein perfektes Geschmackserlebnis.',
      price: '285,60', shipping: 'zzgl. 5,99 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '6–8 Werktage'
    },
    {
      shopLogo: 'img/logo-galaxus.png', shopAlt: 'Galaxus',
      thumb: 'img/offer-thumb-2.png',
      title: 'Philips EP2336/40 (EP2336/40)',
      desc:  'Mit dem Philips EP2336/40 genießt du täglich frisch gemahlenen Kaffee auf Knopfdruck. Das LatteGo-System erzeugt cremigen Milchschaum ohne Schlauch und lässt sich unter fließendem Wasser reinigen. Die Kaffeemaschine mahlt die Bohnen frisch vor jeder Tasse und passt sich mit 12 Mahlgradstufen deinem Geschmack an. Bis zu 2 Tassen gleichzeitig zubereiten – ideal für Haushalte mit mehreren Kaffeeliebhabern.',
      price: '300,06', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '4–6 Werktage'
    },
    {
      shopLogo: 'img/logo-coolblue.png', shopAlt: 'coolblue',
      thumb: 'img/offer-thumb-2.png',
      title: 'Philips 2300 EP2336/40 LatteGo',
      desc:  'Der Philips 2300 Series EP2336/40 LatteGo bietet dir das Beste aus zwei Welten: die Bequemlichkeit eines Vollautomaten und die Flexibilität einer Siebträgermaschine. Mit dem LatteGo-Milchsystem bereitest du cremigen Schaum für Cappuccino und Latte Macchiato zu. Die Maschine merkt sich deine bevorzugten Einstellungen. Das leise Keramikmahlwerk mahlt die Bohnen frisch und schonend für volles Aroma.',
      price: '329,90', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: '1 Werktag'
    },
    {
      shopLogo: 'img/logo-kaufland.png', shopAlt: 'Kaufland',
      thumb: 'img/offer-thumb-3.png',
      title: 'Philips Kaffeevollautomat Series 2300 – Schwarz',
      desc:  'Der Philips Kaffeevollautomat aus der Series 2300 ist dein treuer Begleiter für perfekten Kaffeegenuss. Mit dem integrierten Keramikmahlwerk und 12 Mahlgradstufen holst du das volle Aroma aus deinen Kaffeebohnen. Das LatteGo-System sorgt für einfache Milchschaumzubereitung und leichte Reinigung. In elegantem Schwarz fügt er sich harmonisch in jede Kücheneinrichtung ein.',
      price: '339,90', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: '1–3 Werktage'
    },
    {
      shopLogo: 'img/logo-ejoker.png', shopAlt: 'eJoker',
      thumb: 'img/offer-thumb-4.png',
      title: 'Philips Series 2300 EP2336/40 Kaffeevollautomat',
      desc:  'Erlebe mit dem Philips Series 2300 EP2336/40 erstklassigen Kaffeegenuss zu Hause. Das patentierte LatteGo-System erzeugt feinen, gleichmäßigen Milchschaum ohne Reinigungsaufwand. Dank der intuitiven Bedienung und voreingestellter Kaffeespezialitäten ist dein Lieblingsgetränk in Sekunden fertig. Das leise Keramikmahlwerk mahlt die Bohnen frisch und schonend.',
      price: '352,28', shipping: 'zzgl. 3,99 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: '4–5 Werktage'
    },
    {
      shopLogo: 'img/logo-ebay.png', shopAlt: 'eBay',
      thumb: 'img/offer-thumb-5.png',
      title: 'Kaffeemaschine Philips Versuni Serie 2300',
      desc:  'Die Kaffeemaschine Philips Versuni aus der Serie 2300 vereint modernes Design mit ausgezeichneter Technik. Mit dem LatteGo-System genießt du frischen Milchschaum auf Knopfdruck – leise, schnell und einfach zu reinigen. Das Keramikmahlwerk mit 12 Einstellungen garantiert optimales Aroma. Perfekt für Kaffeeenthusiasten, die Qualität und Komfort in einem Gerät suchen.',
      price: '373,55', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: 'Auf Lager'
    }
  ],

  // ── Price chart ──────────────────────────────────────────────────────────────
  priceData: [345,348,352,321,312,321,321,321,322,317,317,317,317,312,312,312,312,312,315,324,317,319,331,324,329,308,301,314,324,331,336,331,341,323,328,334,296,289,285],
  priceChartMin: 270,
  priceChartMax: 360,
  priceChartYLabels: ['350 €','330 €','310 €','290 €','270 €','250 €','230 €','210 €'],
  priceChartXLabels: ['01.03', '01.04', '01.05'],

  // ── Alt overlay ──────────────────────────────────────────────────────────────
  altCurrentProduct: {
    image:          'img/figma/alt-current.png',
    name:           'PHILIPS EP2331/10 LatteGo',
    rating:         4.5,
    price:          '285,60',
    totalOfferCount: 12,
    discount:       '-15%'
  },
  alternatives: [
    { name: 'De Longhi Eletta Explore ECAM450.55',      image: 'img/figma/alt-1.png', rating: 3.5, reviewCount: null, price: '699,00', offerCount: 12 },
    { name: 'De Longhi Rivelia EXAM 440.55.BG',         image: 'img/figma/alt-2.png', rating: 5.0, reviewCount: 2,    price: '649,00', offerCount: 21 },
    { name: 'Philips Café Aromis Series 8000 EP8757/20',image: 'img/figma/alt-3.png', rating: 4.3, reviewCount: 787,  price: '979,00', offerCount: 11 },
    { name: 'Philips Series 5500 EP5547/90',            image: 'img/figma/alt-4.png', rating: 3.9, reviewCount: 15,   price: '559,00', offerCount: 41 }
  ]

};
