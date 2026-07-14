var OFFERS = [
  {
    shopLogo: 'img/logos/logo-alza.png', shopAlt: 'alza.de',
    thumb: 'img/product/product-1.png',
    title: 'Philips Series 5000 CX5535/11',
    price: '109,90', shipping: 'zzgl. 5,49 € Versand',
    truckIcon: 'img/icons/icon-truck-green.svg', delivery: '1-3 Werktage',
    desc: 'Großer Luftstrom für eine angenehme KühlungDer Luftauslass unseres Geräts ist breit und hoch, bietet maximale Abdeckung und kühlt den gesamten Raum in kurzer Zeit. Mit einer 60°-Oszillationsfunktion erreicht der Ventilator alle gewünschten Bereiche und sorgt so für kühle und angenehme Bedingungen im ganzen Raum. Ein Modus für jede StimmungMit seinen drei Geschwindigkeitsstufen kannst du die Leistung des Ventilators ganz an deine Bedürfnisse anpassen – egal, ob du eine sanfte Brise oder einen kräftigeren Luftstrom bevorzugst. Mit drei vielseitigen Modi (Normal, Natürliche Brise, Leiser Schlafmodus) kannst du den perfekten Modus nach deinen Vorstellungen auswählen und personalisierten Komfort erleben. Extrem leise Kühlung, nur 28 dBMit 28 dB ist der Ventilator auf der niedrigsten Geschwindigkeitsstufe leiser als ein Flüstern. Genieße eine ruhige Umgebung zum Arbeiten, Lesen und Schlafen ohne Ablenkung.'
  },
  {
    shopLogo: 'img/logos/logo-ebay.png', shopAlt: 'eBay',
    thumb: 'img/product/product-1.png',
    title: 'Philips Turmventilator Serie 5000, selbstdrehend, 105 cm, Fernbedienung',
    price: '118,64', shipping: 'zzgl. 20,00 € Versand',
    truckIcon: 'img/icons/icon-truck-green.svg', delivery: 'Auf Lager',
    desc: 'Großer Luftstrom für eine angenehme KühlungDer Luftauslass unseres Geräts ist breit und hoch, bietet maximale Abdeckung und kühlt den gesamten Raum in kurzer Zeit. Mit einer 60°-Oszillationsfunktion erreicht der Ventilator alle gewünschten Bereiche und sorgt so für kühle und angenehme Bedingungen im ganzen Raum. Ein Modus für jede StimmungMit seinen drei Geschwindigkeitsstufen kannst du die Leistung des Ventilators ganz an deine Bedürfnisse anpassen – egal, ob du eine sanfte Brise oder einen kräftigeren Luftstrom bevorzugst. Mit drei vielseitigen Modi (Normal, Natürliche Brise, Leiser Schlafmodus) kannst du den perfekten Modus nach deinen Vorstellungen auswählen und personalisierten Komfort erleben. Extrem leise Kühlung, nur 28 dBMit 28 dB ist der Ventilator auf der niedrigsten Geschwindigkeitsstufe leiser als ein Flüstern. Genieße eine ruhige Umgebung zum Arbeiten, Lesen und Schlafen ohne Ablenkung. '
  },
  {
    shopLogo: 'img/logos/logo-amazon.png', shopAlt: 'Amazon.de',
    thumb: 'img/product/product-1.png',
    title: 'PHILIPS Oszillierender Turmventilator 5000 Serie, 105 cm, Fernbedienung, Timer, 3 Geschwindigkeiten, 3 Modi, 40W, leistungsstarker leiser Luftstrom, geeignet als Aroma-Diffuser, grau (CX5535/11)',
    price: '119,95', shipping: 'zzgl. 0,00 € Versand',
    truckIcon: 'img/icons/icon-truck-green.svg', delivery: '2-3 Werktage',
    desc: 'Dunkelgrau Großer Luftstrom für eine angenehme KühlungDer Luftauslass unseres Geräts ist breit und hoch, bietet maximale Abdeckung und kühlt den gesamten Raum in kurzer Zeit. Mit einer 60°-Oszillationsfunktion erreicht der Ventilator alle gewünschten Bereiche und sorgt so für kühle und angenehme Bedingungen im ganzen Raum. Aromatherapie-Zusatzoption für frischen Wind zu HauseIndividualisiere das Kühlerlebnis, indem du die Brise mit deinen bevorzugten ätherischen Ölen versetzt und so eine beruhigende und die Sinne belebende Atmosphäre erzeugst.'
  },
  {
    shopLogo: 'img/logos/logo-kaufland.png', shopAlt: 'Kaufland.de',
    thumb: 'img/product/product-1.png',
    title: 'Philips Ventilator der 5000er Serie, 3 Modi (CX5535/11)',
    price: '129,00', shipping: 'zzgl. 0,00 € Versand',
    truckIcon: 'img/icons/icon-truck-green.svg', delivery: 'Lieferung: 2 Werktage',
    desc: 'Dunkelgrau Großer Luftstrom für eine angenehme KühlungDer Luftauslass unseres Geräts ist breit und hoch, bietet maximale Abdeckung und kühlt den gesamten Raum in kurzer Zeit. Mit einer 60°-Oszillationsfunktion erreicht der Ventilator alle gewünschten Bereiche und sorgt so für kühle und angenehme Bedingungen im ganzen Raum. Aromatherapie-Zusatzoption für frischen Wind zu HauseIndividualisiere das Kühlerlebnis, indem du die Brise mit deinen bevorzugten ätherischen Ölen versetzt und so eine beruhigende und die Sinne belebende Atmosphäre erzeugst.'
  }
];

document.addEventListener('DOMContentLoaded', function () {
  function parseEuro(str) {
    return parseFloat(str.replace(',', '.'));
  }

  function parseShippingCost(str) {
    var m = str.match(/(\d+),(\d+)/);
    return m ? parseFloat(m[1] + '.' + m[2]) : 0;
  }

  function formatEuro(num) {
    return num.toFixed(2).replace('.', ',');
  }

  function renderOffers(mode) {
    var list = document.getElementById('offer-list');
    if (!list) return;

    var items = OFFERS.map(function (o, i) {
      var basePrice = parseEuro(o.price);
      var shippingCost = parseShippingCost(o.shipping);
      return { o: o, origIdx: i, basePrice: basePrice, total: basePrice + shippingCost };
    });

    items.sort(function (a, b) {
      return mode === 'Gesamtpreis' ? a.total - b.total : a.basePrice - b.basePrice;
    });

    var html = '';
    items.forEach(function (item, i) {
      var o = item.o;
      var isFirst = i === 0;
      var displayPrice = mode === 'Gesamtpreis' ? formatEuro(item.total) : o.price;
      var displayShip = mode === 'Gesamtpreis' ? o.shipping.replace('zzgl.', 'inkl.') : o.shipping;

      html += '<div class="p-2 border-t border-stroke first:border-t-0' + (isFirst ? ' relative' : '') + '">' +
        (isFirst ? '<span class="absolute top-0 right-0 bg-link text-white text-sm font-medium px-2 py-0.5 rounded-bl-[4px]">Bestes Angebot</span>' : '') +
        '<div class="flex gap-[10px] items-start">' +
          '<div class="flex flex-col gap-1.5 flex-1 min-w-0">' +
            '<div class="h-9 w-[88px]"><img src="' + o.shopLogo + '" class="w-full max-h-[25px] object-contain object-left" alt="' + o.shopAlt + '"></div>' +
            '<div class="flex gap-2 items-start">' +
              '<div class="w-[40px] shrink-0 flex items-center justify-center"><img src="' + o.thumb + '" class="max-w-full max-h-[40px] object-contain" alt=""></div>' +
              '<div class="flex flex-col gap-2 justify-between self-stretch flex-1 min-w-0">' +
                '<p class="text-[12px] font-semibold text-link leading-[1.3] line-clamp-2">' + o.title + '</p>' +
                '<div class="flex items-center gap-1 cursor-pointer" data-offer="' + item.origIdx + '">' +
                  '<img src="img/icons/icon-info-link.svg" width="16" height="16" alt="">' +
                  '<span class="text-[12px] text-link underline">Details</span>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="flex flex-col items-end w-[100px] shrink-0 self-stretch text-right' + (isFirst ? ' pt-[22px]' : '') + '">' +
            '<span class="text-[20px] font-semibold text-ink leading-[1.2] whitespace-nowrap">' + displayPrice + ' €</span>' +
            '<span class="text-[11px] font-medium text-ink-weak leading-[1.4] whitespace-nowrap">' + displayShip + '</span>' +
            '<div class="mt-auto flex items-start gap-1 text-[12px] text-ink">' +
              '<img src="' + o.truckIcon + '" width="16" height="16" class="shrink-0 mt-px" alt="">' +
              '<span class="text-left leading-[1.3]">' + o.delivery + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    list.innerHTML = html;
  }

  renderOffers('Preis');

  var btn = document.getElementById('price-sort-toggle');
  var icon = document.getElementById('price-sort-icon');
  var on = false;
  if (btn && icon) {
    btn.addEventListener('click', function () {
      on = !on;
      icon.innerHTML = on
        ? '<rect width="28" height="16" rx="8" fill="#0066CC"/><circle cx="20" cy="8" r="6" fill="white"/>'
        : '<rect width="28" height="16" rx="8" fill="#4D6C89"/><circle cx="8" cy="8" r="6" fill="white"/>';
      renderOffers(on ? 'Gesamtpreis' : 'Preis');
    });
  }

  // ── Offer details overlay (bottom sheet) ──────────────────────────────────
  var backdrop = document.getElementById('offer-details-backdrop');
  var panel = document.getElementById('offer-details-panel');

  function openOfferDetails(index) {
    var o = OFFERS[index];
    if (!o || !backdrop || !panel) return;

    document.getElementById('od-title').textContent = o.title;
    document.getElementById('od-desc').textContent = o.desc;
    document.getElementById('od-thumb').src = o.thumb;
    document.getElementById('od-logo').src = o.shopLogo;
    document.getElementById('od-logo').alt = o.shopAlt;
    document.getElementById('od-price').textContent = o.price + ' €';
    document.getElementById('od-shipping').textContent = o.shipping;
    document.getElementById('od-truck').src = o.truckIcon;
    document.getElementById('od-delivery').textContent = o.delivery;

    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    panel.classList.remove('translate-y-full');
    panel.classList.add('translate-y-0');
    document.body.style.overflow = 'hidden';
  }

  function closeOfferDetails() {
    if (!backdrop || !panel) return;
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    panel.classList.add('translate-y-full');
    panel.classList.remove('translate-y-0');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-offer]');
    if (trigger) openOfferDetails(parseInt(trigger.getAttribute('data-offer'), 10));
  });

  var offerDetailsClose = document.getElementById('offer-details-close');
  if (offerDetailsClose) offerDetailsClose.addEventListener('click', closeOfferDetails);

  var offerDetailsShop = document.getElementById('od-shop-cta');
  if (offerDetailsShop) offerDetailsShop.addEventListener('click', closeOfferDetails);

  if (backdrop) {
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeOfferDetails();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('opacity-100')) closeOfferDetails();
  });
});
