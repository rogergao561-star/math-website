(function () {
  const mapEl = document.getElementById("map");
  const detailPanel = document.getElementById("detail-panel");
  const mapInfoCard = document.getElementById("map-info-card");
  const timelineEl = document.getElementById("timeline");
  const timelineScroll = document.querySelector(".timeline-scroll");
  const legendEl = document.getElementById("map-legend");
  const navPrev = document.getElementById("nav-prev");
  const navNext = document.getElementById("nav-next");
  const navPosition = document.getElementById("nav-position");
  const catButtons = document.querySelectorAll(".cat-btn");

  let map;
  let markers = {};
  let activeId = null;
  let activeEra = "ancient";

  const WIKI_API_HEADERS = {
    "User-Agent": "MathHistoriansWebsite/1.0 (educational; local)",
  };

  function filteredList() {
    return MATHEMATICIANS.filter((m) => m.era === activeEra);
  }

  function activeIndex() {
    return filteredList().findIndex((m) => m.id === activeId);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function portraitUrl(m) {
    return PORTRAIT_URLS[m.id] || null;
  }

  function portraitMarkup(m, alt, extraClass) {
    const cls = extraClass ? `portrait ${extraClass}` : "portrait";
    const url = portraitUrl(m);
    const src = url ? ` src="${escapeHtml(url)}"` : "";
    const state = url ? " portrait-loaded" : " portrait-loading";
    return `<div class="${cls}${state}" data-portrait-id="${escapeHtml(m.id)}">
      <img${src} alt="${escapeHtml(alt)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
    </div>`;
  }

  function applyPortraitToWrap(wrap, url) {
    const img = wrap.querySelector("img");
    if (!img) return;
    if (url) {
      img.src = url;
      wrap.classList.remove("portrait-loading", "portrait-missing");
      wrap.classList.add("portrait-loaded");
    } else {
      wrap.classList.remove("portrait-loading");
      wrap.classList.add("portrait-missing");
      img.removeAttribute("src");
    }
  }

  async function fetchPortraitFromWiki(m) {
    const wiki = WIKI_TITLES[m.id];
    if (!wiki) return null;
    try {
      const api = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(wiki)}&prop=pageimages&format=json&pithumbsize=400&redirects=1&origin=*`;
      const res = await fetch(api, { headers: WIKI_API_HEADERS });
      if (!res.ok) return null;
      const data = await res.json();
      const page = Object.values(data.query?.pages || {})[0];
      return page?.thumbnail?.source || null;
    } catch {
      return null;
    }
  }

  function hydratePortraits(root) {
    if (!root) return;
    root.querySelectorAll("[data-portrait-id]").forEach((wrap) => {
      const id = wrap.dataset.portraitId;
      const m = MATHEMATICIANS.find((x) => x.id === id);
      if (!m) return;

      const img = wrap.querySelector("img");
      if (!img) return;

      const primary = portraitUrl(m);
      if (primary) {
        applyPortraitToWrap(wrap, primary);
        img.onerror = () => {
          img.onerror = null;
          fetchPortraitFromWiki(m).then((fallback) => {
            if (!document.body.contains(wrap)) return;
            applyPortraitToWrap(wrap, fallback);
          });
        };
        return;
      }

      wrap.classList.add("portrait-loading");
      fetchPortraitFromWiki(m).then((url) => {
        if (!document.body.contains(wrap)) return;
        applyPortraitToWrap(wrap, url);
      });
    });
  }

  function updateNavControls() {
    const list = filteredList();
    const i = activeIndex();
    const total = list.length;
    navPrev.disabled = i <= 0;
    navNext.disabled = i < 0 || i >= total - 1;
    navPosition.textContent = i >= 0 ? `${i + 1} of ${total}` : "—";
  }

  function navigate(delta) {
    const list = filteredList();
    const i = activeIndex();
    if (i < 0) return;
    const next = i + delta;
    if (next < 0 || next >= list.length) return;
    selectMathematician(list[next].id, { pan: true, openPopup: false });
  }

  function formatYear(year) {
    if (year < 0) return `${Math.abs(year)} BCE`;
    if (year === null || year === undefined) return "—";
    return `${year} CE`;
  }

  function formatLifespan(m) {
    const birth = formatYear(m.birthYear);
    const death = m.deathYear ? formatYear(m.deathYear) : "present";
    return `${birth} — ${death}`;
  }

  function renderLegend() {
    const eras = Object.keys(ERA_LABELS);
    legendEl.innerHTML =
      "<h3>Era</h3>" +
      eras
        .map(
          (era) =>
            `<div class="legend-item">
          <span class="legend-dot" style="background:${ERA_COLORS[era]}"></span>
          <span>${ERA_LABELS[era].split(" (")[0]}</span>
        </div>`
        )
        .join("");
  }

  function detailHtml(m) {
    const color = ERA_COLORS[m.era];
    return `
      <div class="detail-header">
        ${portraitMarkup(m, `Portrait of ${m.name}`, "detail-portrait")}
        <div class="detail-header-text">
          <span class="era-badge" style="background:${color}33;color:${color}">${ERA_LABELS[m.era]}</span>
          <h2>${escapeHtml(m.name)}</h2>
          <div class="detail-meta">
            <span>${formatLifespan(m)}</span>
            <span>📍 ${escapeHtml(m.birthplace)}</span>
          </div>
        </div>
      </div>
      <p class="summary">${escapeHtml(m.summary)}</p>
      <h3>Key contributions</h3>
      <ul>
        ${m.contributions.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}
      </ul>
    `;
  }

  function renderDetail(m) {
    if (!m) {
      detailPanel.className = "detail-panel empty";
      detailPanel.innerHTML =
        "<p>Select a mathematician from the timeline or click a pin on the map.</p>";
      if (mapInfoCard) {
        mapInfoCard.classList.add("hidden");
        mapInfoCard.innerHTML = "";
      }
      return;
    }

    detailPanel.className = "detail-panel";
    detailPanel.innerHTML = detailHtml(m);
    hydratePortraits(detailPanel);

    if (mapInfoCard) {
      mapInfoCard.classList.remove("hidden");
      mapInfoCard.innerHTML = `
        <div class="map-info-inner">
          ${portraitMarkup(m, m.name, "map-info-portrait")}
          <div class="map-info-text">
            <h2>${escapeHtml(m.name)}</h2>
            <p class="map-info-meta">${formatLifespan(m)} · ${escapeHtml(m.birthplace)}</p>
            <p class="map-info-summary">${escapeHtml(m.summary)}</p>
          </div>
        </div>
      `;
      hydratePortraits(mapInfoCard);
    }
  }

  function scrollTimelineTo(id) {
    const activeEl = timelineEl.querySelector(`[data-id="${id}"]`);
    if (!activeEl || !timelineScroll) return;
    const top =
      activeEl.offsetTop -
      timelineScroll.offsetTop -
      (timelineScroll.clientHeight - activeEl.offsetHeight) / 2;
    timelineScroll.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }

  function markerIcon(m, isActive) {
    const color = ERA_COLORS[m.era];
    const size = isActive ? 18 : 14;
    return L.divIcon({
      className: "custom-marker",
      html: `<div class="marker-pin" style="background:${color};width:${size}px;height:${size}px;margin-left:${-size / 2}px;margin-top:${-size}px${isActive ? `;box-shadow:0 0 12px ${color}` : ""}"></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
    });
  }

  function popupHtml(m) {
    return `
      <div class="map-popup">
        ${portraitMarkup(m, m.name, "popup-portrait")}
        <div class="map-popup-text">
          <strong>${escapeHtml(m.name)}</strong><br>
          ${formatYear(m.birthYear)}<br>
          ${escapeHtml(m.birthplace)}
        </div>
      </div>
    `;
  }

  function syncMarkersToEra() {
    if (!map) return;
    MATHEMATICIANS.forEach((m) => {
      const marker = markers[m.id];
      if (!marker) return;
      if (m.era === activeEra) {
        if (!map.hasLayer(marker)) map.addLayer(marker);
        marker.setIcon(markerIcon(m, m.id === activeId));
      } else if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    });
  }

  function initMap() {
    if (typeof L === "undefined") {
      mapEl.innerHTML =
        '<p class="map-fallback">Map could not load. Check your internet connection and refresh.</p>';
      return;
    }

    map = L.map(mapEl, {
      worldCopyJump: true,
      minZoom: 2,
      maxZoom: 8,
    }).setView([30, 20], 3);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 19,
    }).addTo(map);

    MATHEMATICIANS.forEach((m) => {
      const marker = L.marker([m.lat, m.lng], { icon: markerIcon(m, false) })
        .addTo(map)
        .bindPopup(popupHtml(m), { minWidth: 220, maxWidth: 280 });

      marker.on("popupopen", (e) => {
        const el = e.popup.getElement();
        if (el) hydratePortraits(el);
      });

      marker.on("click", () => selectMathematician(m.id, { pan: true }));
      markers[m.id] = marker;
    });

    syncMarkersToEra();
    setTimeout(() => map.invalidateSize(), 100);
  }

  function renderTimeline() {
    const list = filteredList();
    timelineEl.innerHTML = list
      .map(
        (m) => `
      <article class="timeline-item" data-id="${m.id}" style="--item-color:${ERA_COLORS[m.era]}">
        ${portraitMarkup(m, m.name, "timeline-portrait")}
        <div class="timeline-body">
          <div class="timeline-year">${formatYear(m.birthYear)}</div>
          <h3>${escapeHtml(m.name)}</h3>
          <div class="place">${escapeHtml(m.birthplace)}</div>
        </div>
      </article>
    `
      )
      .join("");

    timelineEl.querySelectorAll(".timeline-item").forEach((el) => {
      el.addEventListener("click", () => {
        selectMathematician(el.dataset.id, { pan: true, scrollTimeline: true });
      });
    });

    hydratePortraits(timelineEl);
  }

  function selectMathematician(id, options = {}) {
    activeId = id;
    const m = MATHEMATICIANS.find((x) => x.id === id);
    if (!m) return;

    renderDetail(m);

    timelineEl.querySelectorAll(".timeline-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.id === id);
    });

    if (options.scrollTimeline) {
      scrollTimelineTo(id);
    }

    syncMarkersToEra();

    if (options.pan && map) {
      map.flyTo([m.lat, m.lng], 5, { duration: 0.8 });
      if (options.openPopup === true && markers[id]) {
        markers[id].openPopup();
      } else {
        map.closePopup();
      }
    }

    updateNavControls();
  }

  function switchEra(era) {
    activeEra = era;

    catButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.era === era);
    });

    renderTimeline();
    syncMarkersToEra();

    const list = filteredList();
    if (list.length > 0) {
      selectMathematician(list[0].id, { pan: false, scrollTimeline: false });

      if (map) {
        const group = L.featureGroup(list.map((m) => markers[m.id]).filter(Boolean));
        map.flyToBounds(group.getBounds().pad(0.3), { duration: 0.8, maxZoom: 5 });
      }
    }

    updateNavControls();
  }

  catButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchEra(btn.dataset.era));
  });

  navPrev.addEventListener("click", () => navigate(-1));
  navNext.addEventListener("click", () => navigate(1));

  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea, [contenteditable]")) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigate(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigate(1);
    }
  });

  renderLegend();
  renderTimeline();
  initMap();
  selectMathematician(filteredList()[0].id, { pan: !!map });
})();
