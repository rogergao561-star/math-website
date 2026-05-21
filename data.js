/**
 * Mathematicians in chronological order (by birth year).
 * Coordinates are approximate birthplaces; ancient figures often have uncertain locations.
 */
const MATHEMATICIANS = [
  {
    id: "thales",
    name: "Thales of Miletus",
    birthYear: -624,
    deathYear: -546,
    birthplace: "Miletus, Ionia (modern Turkey)",
    lat: 37.53,
    lng: 27.28,
    era: "ancient",
    summary: "Often called the first Western mathematician. He introduced deductive reasoning into geometry and is credited with several theorems, including that a circle is bisected by its diameter.",
    contributions: [
      "Five theorems in elementary geometry (including the inscribed angle theorem)",
      "Used geometry to solve practical problems (e.g. measuring pyramid height)",
      "Founded the Milesian school of natural philosophy"
    ]
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    birthYear: -570,
    deathYear: -495,
    birthplace: "Samos, Greece",
    lat: 37.75,
    lng: 26.98,
    era: "ancient",
    summary: "Founder of the Pythagorean school. His name is forever tied to the theorem relating the sides of a right triangle, though the relationship was known earlier in Babylon and India.",
    contributions: [
      "Pythagorean theorem and number theory (even/odd, figurate numbers)",
      "Discovery (or proof) that √2 is irrational",
      "Harmonics and the idea that number underlies nature"
    ]
  },
  {
    id: "euclid",
    name: "Euclid",
    birthYear: -325,
    deathYear: -265,
    birthplace: "Alexandria, Egypt",
    lat: 31.20,
    lng: 29.92,
    era: "ancient",
    summary: "Author of the Elements, the most influential mathematics textbook ever written. His axiomatic approach shaped mathematics for over two millennia.",
    contributions: [
      "Elements: 13 books on geometry and number theory",
      "Euclidean algorithm for greatest common divisor",
      "Axiomatic-deductive method that became the model for rigorous proof"
    ]
  },
  {
    id: "archimedes",
    name: "Archimedes",
    birthYear: -287,
    deathYear: -212,
    birthplace: "Syracuse, Sicily",
    lat: 37.07,
    lng: 15.29,
    era: "ancient",
    summary: "The greatest mathematician of antiquity. He blended geometry with physics and invented methods that foreshadowed integral calculus.",
    contributions: [
      "π approximation and area/volume formulas (sphere, cylinder, parabola)",
      "Principle of buoyancy and levers (“Give me a place to stand…”)",
      "Method of exhaustion — precursor to limits and integration"
    ]
  },
  {
    id: "hypatia",
    name: "Hypatia",
    birthYear: 360,
    deathYear: 415,
    birthplace: "Alexandria, Egypt",
    lat: 31.20,
    lng: 29.92,
    era: "ancient",
    summary: "A leading Neoplatonist philosopher and one of the first recorded female mathematicians. She taught and wrote commentaries on Diophantus and Apollonius.",
    contributions: [
      "Commentaries on Diophantus’s Arithmetica and Apollonius’s conics",
      "Edited and preserved works of Ptolemy and Euclid",
      "Ran the Platonic school in Alexandria"
    ]
  },
  {
    id: "brahmagupta",
    name: "Brahmagupta",
    birthYear: 598,
    deathYear: 668,
    birthplace: "Bhinmal, India",
    lat: 24.99,
    lng: 72.27,
    era: "medieval",
    summary: "Indian mathematician and astronomer who gave rules for arithmetic with zero and negative numbers, centuries before they were accepted in Europe.",
    contributions: [
      "Rules for zero, negatives, and the four operations",
      "Brahmagupta’s formula for cyclic quadrilaterals",
      "Solutions to linear and quadratic indeterminate equations"
    ]
  },
  {
    id: "alkhwarizmi",
    name: "Muhammad ibn Musa al-Khwarizmi",
    birthYear: 780,
    deathYear: 850,
    birthplace: "Khwarezm (modern Uzbekistan)",
    lat: 41.55,
    lng: 60.63,
    era: "medieval",
    summary: "Persian polymath whose works introduced Hindu-Arabic numerals and algebra to the Islamic world and, later, Europe. The word “algorithm” comes from his Latinized name.",
    contributions: [
      "Al-Jabr — systematic treatment of linear and quadratic equations",
      "Popularized Hindu-Arabic numeral system in the West",
      "Geography, astronomy, and trigonometric tables"
    ]
  },
  {
    id: "fibonacci",
    name: "Leonardo Fibonacci",
    birthYear: 1170,
    deathYear: 1250,
    birthplace: "Pisa, Italy",
    lat: 43.72,
    lng: 10.40,
    era: "medieval",
    summary: "Introduced the Hindu-Arabic numeral system to Europe through Liber Abaci. The Fibonacci sequence appears in a rabbit-breeding puzzle in that book.",
    contributions: [
      "Liber Abaci and spread of decimal notation in Europe",
      "Fibonacci sequence and its link to the golden ratio",
      "Practical problems in commerce and geometry"
    ]
  },
  {
    id: "cardano",
    name: "Gerolamo Cardano",
    birthYear: 1501,
    deathYear: 1576,
    birthplace: "Pavia, Italy",
    lat: 45.18,
    lng: 9.16,
    era: "renaissance",
    summary: "Renaissance physician and mathematician who published solutions to cubic equations and early work on probability.",
    contributions: [
      "Ars Magna: cubic and quartic equation solutions",
      "Early treatment of imaginary and complex numbers",
      "Pioneering work on games of chance and probability"
    ]
  },
  {
    id: "descartes",
    name: "René Descartes",
    birthYear: 1596,
    deathYear: 1650,
    birthplace: "La Haye en Touraine, France",
    lat: 47.16,
    lng: 0.57,
    era: "renaissance",
    summary: "Philosopher and mathematician who united algebra and geometry with coordinate systems — every “Cartesian plane” bears his name.",
    contributions: [
      "Analytic geometry: coordinates link algebra and curves",
      "Method for tangents and early calculus ideas",
      "Cartesian rule of signs for polynomial roots"
    ]
  },
  {
    id: "fermat",
    name: "Pierre de Fermat",
    birthYear: 1607,
    deathYear: 1665,
    birthplace: "Beaumont-de-Lomagne, France",
    lat: 43.88,
    lng: 0.99,
    era: "renaissance",
    summary: "French lawyer and amateur mathematician whose marginal notes posed problems that drove number theory for centuries, including Fermat’s Last Theorem.",
    contributions: [
      "Fermat’s Last Theorem (proved by Wiles, 1995)",
      "Little theorem and foundations of analytic number theory",
      "Early ideas in calculus (maxima, minima, tangents)"
    ]
  },
  {
    id: "pascal",
    name: "Blaise Pascal",
    birthYear: 1623,
    deathYear: 1662,
    birthplace: "Clermont-Ferrand, France",
    lat: 45.78,
    lng: 3.09,
    era: "renaissance",
    summary: "Child prodigy who built a mechanical calculator, laid foundations of probability with Fermat, and gave his name to Pascal’s triangle.",
    contributions: [
      "Pascal’s triangle and binomial coefficients",
      "Theory of probability with Fermat",
      "Pascal’s wager and work on conic sections (hexagrammum mysticum)"
    ]
  },
  {
    id: "newton",
    name: "Isaac Newton",
    birthYear: 1643,
    deathYear: 1727,
    birthplace: "Woolsthorpe, England",
    lat: 52.81,
    lng: -0.61,
    era: "enlightenment",
    summary: "Co-inventor of calculus and author of the Principia, which explained planetary motion with universal gravitation and became the foundation of classical physics.",
    contributions: [
      "Calculus (fluxions) and the fundamental theorem",
      "Principia: laws of motion and universal gravitation",
      "Generalized binomial theorem and infinite series"
    ]
  },
  {
    id: "leibniz",
    name: "Gottfried Wilhelm Leibniz",
    birthYear: 1646,
    deathYear: 1716,
    birthplace: "Leipzig, Germany",
    lat: 51.34,
    lng: 12.37,
    era: "enlightenment",
    summary: "Universal genius who developed calculus independently with clearer notation ( ∫ and d ) that is still used today, and dreamed of a logical calculus for all reasoning.",
    contributions: [
      "Calculus notation and formal rules of differentiation/integration",
      "Binary arithmetic — inspiration for modern computing",
      "Leibniz formula for π and determinants"
    ]
  },
  {
    id: "euler",
    name: "Leonhard Euler",
    birthYear: 1707,
    deathYear: 1783,
    birthplace: "Basel, Switzerland",
    lat: 47.56,
    lng: 7.59,
    era: "enlightenment",
    summary: "The most prolific mathematician in history. Euler’s work touched every branch of mathematics and his notation (e, i, f(x)) is still standard.",
    contributions: [
      "e^(iπ) + 1 = 0 and graph theory (Königsberg bridges)",
      "Euler’s identity, φ function, and hundreds of theorems",
      "Mechanics, optics, astronomy, and ship design"
    ]
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    birthYear: 1777,
    deathYear: 1855,
    birthplace: "Brunswick, Germany",
    lat: 52.27,
    lng: 10.52,
    era: "modern",
    summary: "The “Prince of Mathematicians.” At 19 he proved the constructibility of the regular 17-gon and later dominated number theory, statistics, and geodesy.",
    contributions: [
      "Disquisitiones Arithmeticae — modern number theory",
      "Least squares, normal distribution, and surveying",
      "Gaussian curvature and early non-Euclidean geometry"
    ]
  },
  {
    id: "lovelace",
    name: "Ada Lovelace",
    birthYear: 1815,
    deathYear: 1852,
    birthplace: "London, England",
    lat: 51.51,
    lng: -0.13,
    era: "modern",
    summary: "Wrote the first algorithm intended for a machine — Charles Babbage’s Analytical Engine — and envisioned computers going beyond mere calculation.",
    contributions: [
      "Notes on the Analytical Engine: first published computer program",
      "Saw potential for machines to compose music and create graphics",
      "Bernoulli numbers algorithm for Babbage’s engine"
    ]
  },
  {
    id: "riemann",
    name: "Bernhard Riemann",
    birthYear: 1826,
    deathYear: 1866,
    birthplace: "Breselenz, Germany",
    lat: 52.54,
    lng: 10.23,
    era: "modern",
    summary: "Revolutionized geometry with curved spaces (Riemannian geometry), essential for Einstein’s general relativity, and formulated the famous Riemann hypothesis.",
    contributions: [
      "Riemann hypothesis — deepest open problem in number theory",
      "Riemannian geometry and manifolds",
      "Complex analysis: Riemann surfaces and mapping theorem"
    ]
  },
  {
    id: "cantor",
    name: "Georg Cantor",
    birthYear: 1845,
    deathYear: 1918,
    birthplace: "Saint Petersburg, Russia",
    lat: 59.93,
    lng: 30.32,
    era: "modern",
    summary: "Created set theory and proved that infinities come in different sizes, overturning the intuitive notion of a single “infinity.”",
    contributions: [
      "Different sizes of infinity (countable vs uncountable)",
      "Cantor’s diagonal argument and continuum hypothesis",
      "Founded modern set theory despite fierce opposition"
    ]
  },
  {
    id: "noether",
    name: "Emmy Noether",
    birthYear: 1882,
    deathYear: 1935,
    birthplace: "Erlangen, Germany",
    lat: 49.59,
    lng: 11.00,
    era: "modern",
    summary: "Revolutionized abstract algebra and proved that every symmetry of a physical system corresponds to a conservation law — a cornerstone of modern physics.",
    contributions: [
      "Noether’s theorem linking symmetry and conservation",
      "Abstract algebra: rings, ideals, and module theory",
      "Mentored a generation of mathematicians at Göttingen"
    ]
  },
  {
    id: "ramanujan",
    name: "Srinivasa Ramanujan",
    birthYear: 1887,
    deathYear: 1920,
    birthplace: "Erode, India",
    lat: 11.34,
    lng: 77.72,
    era: "modern",
    summary: "Self-taught genius who produced thousands of extraordinary formulas and identities, many proved only decades after his death.",
    contributions: [
      "Partition function asymptotics with Hardy",
      "Mock theta functions and highly unconventional formulas",
      "Notebooks filled with results that still inspire research"
    ]
  },
  {
    id: "godel",
    name: "Kurt Gödel",
    birthYear: 1906,
    deathYear: 1978,
    birthplace: "Brno, Austria-Hungary (modern Czechia)",
    lat: 49.20,
    lng: 16.61,
    era: "contemporary",
    summary: "Proved that any consistent formal system strong enough for arithmetic contains true statements that cannot be proved — shattering Hilbert’s program.",
    contributions: [
      "Incompleteness theorems (1931)",
      "Gödel’s completeness theorem for first-order logic",
      "Work on continuum hypothesis and general relativity"
    ]
  },
  {
    id: "turing",
    name: "Alan Turing",
    birthYear: 1912,
    deathYear: 1954,
    birthplace: "London, England",
    lat: 51.51,
    lng: -0.13,
    era: "contemporary",
    summary: "Father of computer science and artificial intelligence. His Turing machine model defines what “computable” means; he broke Enigma in WWII.",
    contributions: [
      "Turing machine — foundation of computability theory",
      "Halting problem and universal computation",
      "Codebreaking at Bletchley Park; early AI (Turing test)"
    ]
  },
  {
    id: "grothendieck",
    name: "Alexander Grothendieck",
    birthYear: 1928,
    deathYear: 2014,
    birthplace: "Berlin, Germany",
    lat: 52.52,
    lng: 13.40,
    era: "contemporary",
    summary: "Rebuilt algebraic geometry using abstractions so general they became the language of modern mathematics. Fields Medalist who later withdrew from academia.",
    contributions: [
      "Schemes and topos theory — new foundations for geometry",
      "Proof of Weil conjectures (with Deligne)",
      "Influenced number theory, topology, and mathematical physics"
    ]
  },
  {
    id: "tao",
    name: "Terence Tao",
    birthYear: 1975,
    deathYear: null,
    birthplace: "Adelaide, Australia",
    lat: -34.93,
    lng: 138.60,
    era: "contemporary",
    summary: "Often called the “Mozart of mathematics.” Youngest IMO gold medalist, Fields Medalist at 31, working across harmonic analysis, PDEs, and number theory.",
    contributions: [
      "Green–Tao theorem: primes contain arbitrarily long arithmetic progressions",
      "Harmonic analysis, compressed sensing, and ergodic theory",
      "Over 300 research papers spanning pure and applied math"
    ]
  }
];

const ERA_LABELS = {
  ancient: "Ancient (before 500 CE)",
  medieval: "Medieval (500–1400)",
  renaissance: "Renaissance (1400–1650)",
  enlightenment: "Enlightenment (1650–1800)",
  modern: "19th Century",
  contemporary: "20th Century & Beyond"
};

const ERA_COLORS = {
  ancient: "#c4a35a",
  medieval: "#8b6914",
  renaissance: "#6b8cae",
  enlightenment: "#4a7c59",
  modern: "#7c4a6b",
  contemporary: "#5c4a9e"
};
