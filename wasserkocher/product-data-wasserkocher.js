var PRODUCT = {

  // ── Identity ────────────────────────────────────────────────────────────────
  name:       'Philips HD9350/90',
  attributes: 'Hersteller: Philips • Material: Edelstahl',
  variant:    'HD9350/90',
  heroImage:  'img/wasserkocher/product-1.jpg',

  // ── Pricing ─────────────────────────────────────────────────────────────────
  // Référence 38 € → -15% → prix actuel 32,30 €
  bestPrice:  '32,30',
  bestPriceShop: { logo: 'img/logo-amazon.gif', alt: 'Amazon', shipping: 'Versand: 0,00€' },
  offerListCount:  7,
  totalOfferCount: 7,
  priceRange: '7 Angebote ab 32,30 € bis 36,90 €',
  discount:   '-15%',
  savings:    { percent: 15, amount: '5,70' },

  // ── Rating & review ─────────────────────────────────────────────────────────
  rating: 4.5,
  reviewSummary: 'Eleganter Edelstahl-Wasserkocher für den täglichen Einsatz. Starke 2.200 Watt und 1,7 Liter Fassungsvermögen machen ihn zum verlässlichen Küchenbegleiter – punktet mit großer Befüllöffnung und herausnehmbarem Kalkfilter, zeigt sich aber bei Bedienkomfort und Reinigung noch verbesserungswürdig.',
  pros: [
    '2.200 Watt',
    'große Einfüllöffnung mit federbelastetem Deckel',
    'herausnehmbarer Kalkfilter ',
    'BPA-freie Kunststoffteile'
  ],
  cons: [
    'Wasserstandsanzeige nur in Tassen und recht versteckt',
    'Reinigung durch innenliegenden Heizwendel erschwert',
    'Kondenswasser tropft vom Deckel auf den Griff',
    'Außenhülle erhitzt sich'
  ],

  // ── Product images (index 0 = default main image) ───────────────────────────
  images: [
    { src: 'img/wasserkocher/product-1.jpg', thumb: 'img/wasserkocher/product-1.jpg' },
    { src: 'img/wasserkocher/product-2.jpg', thumb: 'img/wasserkocher/product-2.jpg' },
    { src: 'img/wasserkocher/product-3.jpg', thumb: 'img/wasserkocher/product-3.jpg' },
    { src: 'img/wasserkocher/product-4.jpg', thumb: 'img/wasserkocher/product-4.jpg' },
    { src: 'img/wasserkocher/product-5.jpg', thumb: 'img/wasserkocher/product-5.jpg' }
  ],

  // ── Source logos (small circles in summary) ──────────────────────────────────
  sourceLogos: [
    'img/wasserkocher/quellen-oekotest.png',
    'img/wasserkocher/quellen-etm.png',
    'img/wasserkocher/quellen-derkocher.png'
  ],

  // ── Auswertung scores ────────────────────────────────────────────────────────
  scores: [
    { label: 'Preis-Leistung',              value: '4,3', color: '#40cc9e' },
    { label: 'Verarbeitungsqualität',        value: '4,5', color: '#40cc9e' },
    { label: 'Kochleistung & Geschwindigkeit', value: '4,2', color: '#40cc9e' },
    { label: 'Benutzerfreundlichkeit',       value: '3,4', color: '#fed9a4', altLink: true },
    { label: 'Reinigung und Wartung',        value: '4,1', color: '#40cc9e' },
    { label: 'Sicherheitsfunktionen',        value: '4,6', color: '#40cc9e' }
  ],

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: [
    {
      q: 'Wie lange dauert es, 1 Liter Wasser zum Kochen zu bringen?',
      a: 'Mit seiner Heizleistung von 2.200 Watt bringt der HD9350/90 einen Liter Wasser in ca. 2,5 Minuten zum Kochen – deutlich schneller als jeder Herd. Bei voller Befüllung mit 1,7 Litern benötigt er rund 4 Minuten. Die genaue Zeit kann je nach Ausgangstemperatur des Wassers leicht variieren.'
    },
    {
      q: 'Lässt sich der Kalkfilter einfach reinigen?',
      a: 'Ja, der Kalkfilter ist herausnehmbar und lässt sich unkompliziert unter fließendem Wasser ausspülen. Eine Reinigung alle 4–6 Wochen wird empfohlen – je nach lokaler Wasserhärte auch öfter. Für eine gründlichere Entkalkung genügt es, den Kocher mit einer Lösung aus Zitronensäure und Wasser zu befüllen, einmal aufzukochen und danach auszuspülen.'
    },
    {
      q: 'Wird das Gehäuse des Wasserkochers im Betrieb sehr heiß?',
      a: 'Das ist ein bekannter Schwachpunkt des HD9350/90: Das Edelstahlgehäuse nimmt während des Kochvorgangs merklich Wärme auf und kann direkt nach dem Kochen heiß sein. Es empfiehlt sich, den Kocher stets nur am Griff anzufassen und ihn nicht sofort auf empfindliche Oberflächen zu stellen. Für Haushalte mit Kleinkindern wäre ein Modell mit Doppelwandgehäuse die sicherere Wahl.'
    }
  ],

  // ── Quellen (review sources) ─────────────────────────────────────────────────
  sources: [
    {
      name:  'ÖKO-TEST',
      date:  '21.11.2019',
      logo:  'img/figma/quellen-okotest.png',
      score: 'gut',
      text:  'Dieser preiswerte Wasserkocher von Philips kocht laut Testern „sehr gut“, auch wenn er einen Liter Wasser etwas langsamer erhitzt als die meisten Testgeräte. Da das Edelstahl-Gehäuse sehr heiß wird, erhält das Gerät die Note „gut“ für den Testbereich Handhabung und Sicherheit.'
    },
    {
      name:  'Der Wasserkocher',
      date:  '15.6.2021',
      logo:  'img/figma/quellen-derkocher.png',
      score: 'ohne Endnote',
      text:  'Stärken: guter Preis für gute Leistung; sehr sicher; angenehmes Betriebsgeräusch; einfach einhändig bedienbar; große Öffnung; kann über den Ausgießer befüllt werden; gut sichtbare Wasserstandsanzeige; unkomplizierte Entnahme des Kalkfilters; schlichtes Design, Teil einer Serie.<br>Schwächen: anfänglicher Geruch; Innenraum nicht frei von Bauteilen; Wasserstandsanzeige am Griff von der Hand verdeckt; laut; Abschaltautomatik funktioniert nur bei geschlossenem Deckel; Funktionsprobleme bei Kalkablagerungen.'
    },
    {
      name:  'ETM TESTMAGAZIN',
      date:  '26.3.2021',
      logo:  'img/figma/quellen-etm.png',
      score: '92,2%',
      text:  '„Das Modell bietet eine exzellente Material- bzw. Materialverarbeitungsqualität, eine größtenteils leichtgängige Bedienung und ein präzises Gießverhalten. Auch der Modellaußenkörper erwärmt sich nicht allzu stark ...“'
    }
  ],

  // ── Datenblatt specs ─────────────────────────────────────────────────────────
  specs: [
    { group: 'Kapazität', rows: [
      { label: 'Fassungsvermögen', value: '1,7 l' }
    ]},
    { group: 'Leistungsmerkmale', rows: [
      { label: 'Leistungsaufnahme', value: '2.200 W' }
    ]},
    { group: 'Material', rows: [
      { label: 'Gehäusematerial', value: 'Edelstahl' },
      { label: 'Innenmaterial',   value: 'Edelstahl' }
    ]},
    { group: 'Ausstattung', rows: [
      { label: 'Kalkfilter',         value: 'ja, herausnehmbar' },
      { label: 'Wasserstandsanzeige', value: 'ja (in Tassen)' },
      { label: 'Kontrollleuchte',    value: 'ja' },
      { label: 'Abschaltautomatik',  value: 'ja' },
      { label: 'Trockengehschutz',   value: 'ja' }
    ]},
    { group: 'Funktionen', rows: [
      { label: 'Schnellkochfunktion', value: 'nein' },
      { label: 'Temperaturvorwahl',   value: 'nein' },
      { label: 'Temperaturanzeige',   value: 'nein' },
      { label: 'Warmhaltefunktion',   value: 'nein' },
      { label: 'Kindersicherung',     value: 'nein' },
      { label: 'Smart-Home-Funktion', value: 'nein' },
      { label: 'Doppelwandgehäuse',   value: 'nein' }
    ]},
    { group: 'Allgemein', rows: [
      { label: 'Hersteller',    value: 'Philips (Versuni)' },
      { label: 'Modell',        value: 'HD9350/90' },
      { label: 'Produktreihe',  value: 'Daily Collection' },
      { label: 'BPA-frei',      value: 'ja' }
    ]}
  ],

  // ── Offers (price list + offer-details overlay) ──────────────────────────────
  offers: [
    {
      shopLogo: 'img/logo-amazon.gif', shopAlt: 'Amazon',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips HD9350/90 Daily Collection Wasserkocher Edelstahl',
      desc:  'Der Philips HD9350/90 Daily Collection Wasserkocher aus gebürstetem Edelstahl erhitzt 1,7 Liter Wasser mit 2.200 Watt schnell und effizient. Der herausnehmbare Kalkfilter hält Kalkrückstände fern, die federbelastete Deckelöffnung erleichtert das Befüllen. Dank Trockengehschutz und automatischer Abschaltung ist er sicher im Alltag.',
      price: '32,30', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: 'Auf Lager'
    },
    {
      shopLogo: 'img/logo-otto.png', shopAlt: 'OTTO',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips HD9350/90 Wasserkocher Daily Collection',
      desc:  'Der Philips HD9350/90 vereint klassisches Edelstahl-Design mit praktischen Alltagsfunktionen. Mit 2.200 Watt Leistung und 1,7 Liter Fassungsvermögen ist er ideal für Haushalte bis 4 Personen. Der abnehmbare Kalkfilter lässt sich einfach unter fließendem Wasser reinigen.',
      price: '32,99', shipping: 'zzgl. 4,95 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '1–2 Werktage'
    },
    {
      shopLogo: 'img/logo-computer-universe.png', shopAlt: 'computeruniverse',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips Daily Collection HD9350/90 – Edelstahl 1,7 l',
      desc:  'Mit dem Philips HD9350/90 lässt sich Wasser in kürzester Zeit aufheizen. Das 360°-Basisstationssystem ermöglicht das Abnehmen des Kochers von allen Seiten. Der herausnehmbare Kalkfilter und die automatische Abschaltung machen ihn zu einem zuverlässigen täglichen Begleiter.',
      price: '33,75', shipping: 'zzgl. 3,99 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '1–3 Werktage'
    },
    {
      shopLogo: 'img/logo-cyberport.png', shopAlt: 'Cyberport',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips HD9350/90 Daily Collection Wasserkocher',
      desc:  'Der Philips HD9350/90 überzeugt durch sein robustes Edelstahlgehäuse und die hohe Kochleistung von 2.200 Watt. Das große Fassungsvermögen von 1,7 Litern reicht für bis zu 7 Tassen Tee oder Kaffee auf einmal. Die Kontrollleuchte zeigt den Betriebszustand klar und deutlich an.',
      price: '33,75', shipping: 'zzgl. 3,99 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '1–3 Werktage'
    },
    {
      shopLogo: 'img/logo-kaufland.png', shopAlt: 'Kaufland',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips Wasserkocher Daily Collection HD9350/90 Edelstahl',
      desc:  'Der Philips HD9350/90 aus der Daily Collection-Serie ist ein verlässlicher Küchen-Allrounder. Sein zeitloses Edelstahl-Design fügt sich harmonisch in jede Kücheneinrichtung ein. Der integrierte Trockengehschutz sorgt für zusätzliche Sicherheit, wenn der Kocher versehentlich ohne Wasser eingeschaltet wird.',
      price: '35,29', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: '3–4 Werktage'
    },
    {
      shopLogo: 'img/logo-proshop.png', shopAlt: 'Proshop',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips HD9350/90 – Wasserkocher 1,7 l 2200 W',
      desc:  'Erlebe mit dem Philips HD9350/90 täglichen Komfort in der Küche. Die 2.200 Watt starke Heizplatte bringt Wasser effizient und schnell auf Temperatur. Das BPA-freie Design sorgt für unbedenklichen Kontakt mit Lebensmitteln, der herausnehmbare Kalkfilter hält das Wasser langfristig sauber.',
      price: '36,43', shipping: 'zzgl. 2,99 € Versand',
      truckIcon: 'img/icons/icon-truck-orange.svg', delivery: '1–3 Werktage'
    },
    {
      shopLogo: 'img/logo-coolblue.png', shopAlt: 'Coolblue',
      thumb: 'img/wasserkocher/product-1.jpg',
      title: 'Philips Daily Collection HD9350/90 Wasserkocher',
      desc:  'Der Philips Daily Collection HD9350/90 ist ein Edelstahl-Wasserkocher für den täglichen Einsatz. Mit 1,7 Litern Fassungsvermögen und 2.200 Watt Leistung erhitzt er Wasser zuverlässig und schnell. Der abnehmbare Kalkfilter und die automatische Abschaltung runden das Sicherheitspaket ab.',
      price: '36,90', shipping: 'zzgl. 0,00 € Versand',
      truckIcon: 'img/icons/icon-truck-green.svg', delivery: '1 Werktag'
    }
  ],

  // ── Price chart ──────────────────────────────────────────────────────────────
  // Référence : 38 € → -15% → prix actuel 32,30 €
  // Série de 39 points : fluctuation autour de 38–40 € puis chute à ~32 €
  priceData: [40,39,40,38,39,40,38,39,40,39,38,40,39,38,39,40,38,37,38,39,38,39,38,37,38,36,35,34,33,33,33,32,32,32,32,32,32,32,32],
  priceChartMin: 28,
  priceChartMax: 44,
  priceChartYLabels: ['44 €','42 €','40 €','38 €','36 €','34 €','32 €','30 €','28 €'],
  priceChartXLabels: ['15.02', '01.04', '2026'],

  // ── Alt overlay ──────────────────────────────────────────────────────────────
  altCurrentProduct: {
    image:           'img/wasserkocher/product-1.jpg',
    name:            'Philips HD9350/90 Daily Collection',
    rating:          4.5,
    price:           '32,30',
    totalOfferCount: 7,
    discount:        '-15%'
  },
  alternatives: [
    { name: 'Bosch TWK7403 ComfortLine',          image: 'img/wasserkocher/product-2.jpg', rating: 4.3, reviewCount: 1240, price: '34,99', offerCount: 18 },
    { name: 'WMF Küchenminis Vario Wasserkocher',  image: 'img/wasserkocher/product-3.jpg', rating: 4.1, reviewCount: 380,  price: '44,99', offerCount: 12 },
    { name: 'Russell Hobbs 21150-70 Glas',         image: 'img/wasserkocher/product-4.jpg', rating: 3.9, reviewCount: 672,  price: '39,99', offerCount: 15 },
    { name: 'Tefal KO850 ProFilter',               image: 'img/wasserkocher/product-5.jpg', rating: 4.0, reviewCount: 218,  price: '37,90', offerCount: 9  }
  ]

};
