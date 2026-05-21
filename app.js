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

  let map;
  let markers = {};
  let seaLabelLayer;
  let activeId = null;

  /** Major seas/oceans — English only, shown at wider zoom levels. */
  const SEA_LABELS = [
    { name: "Arctic Ocean", lat: 75, lng: -45 },
    { name: "Atlantic Ocean", lat: 10, lng: -35 },
    { name: "Pacific Ocean", lat: 5, lng: -155 },
    { name: "Indian Ocean", lat: -15, lng: 75 },
    { name: "Mediterranean Sea", lat: 36, lng: 18 },
    { name: "North Sea", lat: 56.5, lng: 3.5 },
    { name: "Baltic Sea", lat: 58, lng: 19 },
    { name: "Black Sea", lat: 43, lng: 34 },
    { name: "Red Sea", lat: 20, lng: 38 },
    { name: "Arabian Sea", lat: 14, lng: 64 },
    { name: "Bay of Bengal", lat: 14, lng: 88 },
    { name: "Adriatic Sea", lat: 42.5, lng: 16 },
    { name: "Caspian Sea", lat: 42, lng: 51 },
  ];

  function activeIndex() {
    return MATHEMATICIANS.findIndex((m) => m.id === activeId);
  }

  function updateNavControls() {
    const i = activeIndex();
    const total = MATHEMATICIANS.length;
    navPrev.disabled = i <= 0;
    navNext.disabled = i < 0 || i >= total - 1;
    navPosition.textContent = i >= 0 ? `${i + 1} of ${total}` : "—";
  }

  function navigate(delta) {
    const i = activeIndex();
    if (i < 0) return;
    const next = i + delta;
    if (next < 0 || next >= MATHEMATICIANS.length) return;
    selectMathematician(MATHEMATICIANS[next].id, { pan: true, openPopup: false });
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
    const eras = [...new Set(MATHEMATICIANS.map((m) => m.era))];
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
      <span class="era-badge" style="background:${color}33;color:${color}">${ERA_LABELS[m.era]}</span>
      <h2>${m.name}</h2>
      <div class="detail-meta">
        <span>${formatLifespan(m)}</span>
        <span>📍 ${m.birthplace}</span>
      </div>
      <p class="summary">${m.summary}</p>
      <h3>Key contributions</h3>
      <ul>
        ${m.contributions.map((c) => `<li>${c}</li>`).join("")}
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

    if (mapInfoCard) {
      mapInfoCard.classList.remove("hidden");
      mapInfoCard.innerHTML = `
        <h2>${m.name}</h2>
        <p class="map-info-meta">${formatLifespan(m)} · ${m.birthplace}</p>
        <p class="map-info-summary">${m.summary}</p>
      `;
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

  function updateMarkers(activeId) {
    MATHEMATICIANS.forEach((mat) => {
      const marker = markers[mat.id];
      if (marker) marker.setIcon(markerIcon(mat, mat.id === activeId));
    });
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

    const esriAttribution =
      'Tiles &copy; <a href="https://www.esri.com/">Esri</a>';

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 16, attribution: esriAttribution }
    ).addTo(map);

    seaLabelLayer = L.layerGroup().addTo(map);
    SEA_LABELS.forEach(({ name, lat, lng }) => {
      L.marker([lat, lng], {
        icon: L.divIcon({
          className: "sea-label",
          html: `<span>${name}</span>`,
          iconSize: [1, 1],
          iconAnchor: [0, 0],
        }),
        interactive: false,
      }).addTo(seaLabelLayer);
    });

    function updateSeaLabelVisibility() {
      if (!seaLabelLayer) return;
      const show = map.getZoom() < 7;
      if (show) {
        if (!map.hasLayer(seaLabelLayer)) seaLabelLayer.addTo(map);
      } else {
        map.removeLayer(seaLabelLayer);
      }
    }

    map.on("zoomend", updateSeaLabelVisibility);
    updateSeaLabelVisibility();

    MATHEMATICIANS.forEach((m) => {
      const marker = L.marker([m.lat, m.lng], { icon: markerIcon(m, false) })
        .addTo(map)
        .bindPopup(
          `<strong>${m.name}</strong><br>
           ${formatYear(m.birthYear)}<br>
           ${m.birthplace}`
        );

      marker.on("click", () => selectMathematician(m.id, { pan: true }));
      markers[m.id] = marker;
    });

    setTimeout(() => map.invalidateSize(), 100);
  }

  function renderTimeline() {
    timelineEl.innerHTML = MATHEMATICIANS.map(
      (m) => `
      <article class="timeline-item" data-id="${m.id}" style="--item-color:${ERA_COLORS[m.era]}">
        <div class="timeline-year">${formatYear(m.birthYear)}</div>
        <h3>${m.name}</h3>
        <div class="place">${m.birthplace}</div>
      </article>
    `
    ).join("");

    timelineEl.querySelectorAll(".timeline-item").forEach((el) => {
      el.addEventListener("click", () => {
        selectMathematician(el.dataset.id, { pan: true, scrollTimeline: true });
      });
    });
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

    updateMarkers(id);

    if (options.pan && map) {
      map.flyTo([m.lat, m.lng], 7, { duration: 0.8 });
      if (options.openPopup === true && markers[id]) {
        markers[id].openPopup();
      } else {
        map.closePopup();
      }
    }

    updateNavControls();
  }

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
  selectMathematician(MATHEMATICIANS[0].id, { pan: !!map });
})();
