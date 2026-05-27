const MATHEMATICIANS = [
  // ──────────────────────────────────────────────────────
  //  ANCIENT WORLD  (before 500 CE)
  // ──────────────────────────────────────────────────────
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
      "Principle of buoyancy and levers ('Give me a place to stand…')",
      "Method of exhaustion — precursor to limits and integration"
    ]
  },
  {
    id: "eratosthenes",
    name: "Eratosthenes",
    birthYear: -276,
    deathYear: -194,
    birthplace: "Cyrene, Libya",
    lat: 32.82,
    lng: 21.86,
    era: "ancient",
    summary: "Polymath who calculated the Earth's circumference with remarkable accuracy using shadow angles. He also devised the first systematic method for finding prime numbers.",
    contributions: [
      "Sieve of Eratosthenes for finding primes",
      "First accurate measurement of Earth's circumference",
      "Systematic geography and calendar reform"
    ]
  },
  {
    id: "apollonius",
    name: "Apollonius of Perga",
    birthYear: -262,
    deathYear: -190,
    birthplace: "Perga, Pamphylia (modern Turkey)",
    lat: 36.96,
    lng: 30.85,
    era: "ancient",
    summary: "Known as 'The Great Geometer,' he wrote the definitive ancient treatise on conic sections — ellipses, parabolas, and hyperbolas — whose ideas underpin planetary orbits and optics.",
    contributions: [
      "Conics: eight-book treatise defining ellipse, parabola, and hyperbola",
      "Introduced the terms ellipse, parabola, and hyperbola still used today",
      "Advanced the theory of epicycles in astronomy"
    ]
  },
  {
    id: "hipparchus",
    name: "Hipparchus",
    birthYear: -190,
    deathYear: -120,
    birthplace: "Nicaea, Bithynia (modern Turkey)",
    lat: 40.43,
    lng: 29.72,
    era: "ancient",
    summary: "Father of trigonometry who compiled the first known trigonometric table. His star catalogue and discovery of the precession of equinoxes made him the greatest astronomer of antiquity.",
    contributions: [
      "First trigonometric table (chord function)",
      "Discovery of the precession of the equinoxes",
      "Star catalogue with over 850 stars classified by brightness"
    ]
  },
  {
    id: "diophantus",
    name: "Diophantus",
    birthYear: 200,
    deathYear: 284,
    birthplace: "Alexandria, Egypt",
    lat: 31.22,
    lng: 29.95,
    era: "ancient",
    summary: "Father of algebra whose Arithmetica introduced symbolic methods for solving equations. Fermat's famous 'Last Theorem' was scribbled in the margin of a copy of this work.",
    contributions: [
      "Arithmetica: pioneering work on algebraic equations",
      "First systematic use of algebraic notation",
      "Diophantine equations — integer solutions still studied today"
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
      "Commentaries on Diophantus's Arithmetica and Apollonius's conics",
      "Edited and preserved works of Ptolemy and Euclid",
      "Ran the Platonic school in Alexandria"
    ]
  },
  {
    id: "aryabhata",
    name: "Aryabhata",
    birthYear: 476,
    deathYear: 550,
    birthplace: "Kusumapura, India (modern Patna)",
    lat: 25.61,
    lng: 85.14,
    era: "ancient",
    summary: "Indian mathematician-astronomer who gave an accurate value of π, worked with place-value notation, and described the Earth's rotation — centuries before Copernicus.",
    contributions: [
      "Approximated π as 3.1416 and recognized it as irrational",
      "Trigonometric tables and sine difference formula",
      "Solved linear Diophantine equations using kuttaka method"
    ]
  },

  // ──────────────────────────────────────────────────────
  //  MEDIEVAL & RENAISSANCE  (500–1599)
  // ──────────────────────────────────────────────────────
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
      "Brahmagupta's formula for cyclic quadrilaterals",
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
    summary: "Persian polymath whose works introduced Hindu-Arabic numerals and algebra to the Islamic world and, later, Europe. The word 'algorithm' comes from his Latinized name.",
    contributions: [
      "Al-Jabr — systematic treatment of linear and quadratic equations",
      "Popularized Hindu-Arabic numeral system in the West",
      "Geography, astronomy, and trigonometric tables"
    ]
  },
  {
    id: "khayyam",
    name: "Omar Khayyam",
    birthYear: 1048,
    deathYear: 1131,
    birthplace: "Nishapur, Persia (modern Iran)",
    lat: 36.21,
    lng: 58.80,
    era: "medieval",
    summary: "Persian polymath who classified and solved cubic equations geometrically, reformed the Persian calendar to be more accurate than the Gregorian, and wrote the celebrated Rubaiyat.",
    contributions: [
      "Geometric solutions to all types of cubic equations",
      "Jalali calendar — accurate to within one day in 5,000 years",
      "Binomial theorem and work on the parallel postulate"
    ]
  },
  {
    id: "bhaskara",
    name: "Bhaskara II",
    birthYear: 1114,
    deathYear: 1185,
    birthplace: "Bijapur, India",
    lat: 16.83,
    lng: 75.71,
    era: "medieval",
    summary: "The leading Indian mathematician of the 12th century, whose works on algebra and calculus anticipated European developments by five centuries.",
    contributions: [
      "Lilavati and Bijaganita — comprehensive algebra and arithmetic texts",
      "Early concepts of derivatives and the notion of infinity",
      "Solutions to Pell's equation before Pell"
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
    id: "madhava",
    name: "Madhava of Sangamagrama",
    birthYear: 1350,
    deathYear: 1425,
    birthplace: "Sangamagrama, India (modern Irinjalakuda)",
    lat: 10.35,
    lng: 76.21,
    era: "medieval",
    summary: "Founder of the Kerala school of mathematics who discovered infinite series for trigonometric functions roughly 250 years before Newton and Leibniz.",
    contributions: [
      "Power series for sine, cosine, and arctangent",
      "Madhava–Leibniz series for π/4",
      "Foundations for calculus concepts in the Kerala school"
    ]
  },
  {
    id: "tartaglia",
    name: "Niccolò Tartaglia",
    birthYear: 1499,
    deathYear: 1557,
    birthplace: "Brescia, Italy",
    lat: 45.54,
    lng: 10.21,
    era: "medieval",
    summary: "Self-taught mathematician who discovered a general solution to cubic equations, sparking one of the most dramatic priority disputes in the history of mathematics.",
    contributions: [
      "General solution of the depressed cubic equation",
      "Translated Euclid's Elements into Italian",
      "Ballistics: first science of projectile trajectories"
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
    era: "medieval",
    summary: "Renaissance physician and mathematician who published solutions to cubic equations and early work on probability.",
    contributions: [
      "Ars Magna: cubic and quartic equation solutions",
      "Early treatment of imaginary and complex numbers",
      "Pioneering work on games of chance and probability"
    ]
  },
  {
    id: "viete",
    name: "François Viète",
    birthYear: 1540,
    deathYear: 1603,
    birthplace: "Fontenay-le-Comte, France",
    lat: 46.47,
    lng: -0.81,
    era: "medieval",
    summary: "Father of modern algebra who introduced the systematic use of letters for unknowns and parameters, bridging classical geometry and symbolic algebra.",
    contributions: [
      "Systematic literal notation for algebra (vowels for unknowns)",
      "Vieta's formulas relating polynomial roots and coefficients",
      "Broke the Spanish cipher for Henry IV of France"
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
    era: "medieval",
    summary: "Philosopher and mathematician who united algebra and geometry with coordinate systems — every 'Cartesian plane' bears his name.",
    contributions: [
      "Analytic geometry: coordinates link algebra and curves",
      "Method for tangents and early calculus ideas",
      "Cartesian rule of signs for polynomial roots"
    ]
  },

  // ──────────────────────────────────────────────────────
  //  AGE OF REASON  (1600–1799)
  // ──────────────────────────────────────────────────────
  {
    id: "fermat",
    name: "Pierre de Fermat",
    birthYear: 1607,
    deathYear: 1665,
    birthplace: "Beaumont-de-Lomagne, France",
    lat: 43.88,
    lng: 0.99,
    era: "reason",
    summary: "French lawyer and amateur mathematician whose marginal notes posed problems that drove number theory for centuries, including Fermat's Last Theorem.",
    contributions: [
      "Fermat's Last Theorem (proved by Wiles, 1995)",
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
    era: "reason",
    summary: "Child prodigy who built a mechanical calculator, laid foundations of probability with Fermat, and gave his name to Pascal's triangle.",
    contributions: [
      "Pascal's triangle and binomial coefficients",
      "Theory of probability with Fermat",
      "Pascal's wager and work on conic sections (hexagrammum mysticum)"
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
    era: "reason",
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
    era: "reason",
    summary: "Universal genius who developed calculus independently with clearer notation ( ∫ and d ) that is still used today, and dreamed of a logical calculus for all reasoning.",
    contributions: [
      "Calculus notation and formal rules of differentiation/integration",
      "Binary arithmetic — inspiration for modern computing",
      "Leibniz formula for π and determinants"
    ]
  },
  {
    id: "bernoulli",
    name: "Jakob Bernoulli",
    birthYear: 1655,
    deathYear: 1705,
    birthplace: "Basel, Switzerland",
    lat: 47.56,
    lng: 7.59,
    era: "reason",
    summary: "Eldest of the Bernoulli dynasty, he pioneered probability theory and discovered the constant e through compound interest. His Ars Conjectandi was published posthumously.",
    contributions: [
      "Law of large numbers — first fundamental theorem of probability",
      "Bernoulli numbers and their link to sums of powers",
      "Elastica curve and the calculus of variations"
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
    era: "reason",
    summary: "The most prolific mathematician in history. Euler's work touched every branch of mathematics and his notation (e, i, f(x)) is still standard.",
    contributions: [
      "e^(iπ) + 1 = 0 and graph theory (Königsberg bridges)",
      "Euler's identity, φ function, and hundreds of theorems",
      "Mechanics, optics, astronomy, and ship design"
    ]
  },
  {
    id: "lagrange",
    name: "Joseph-Louis Lagrange",
    birthYear: 1736,
    deathYear: 1813,
    birthplace: "Turin, Italy",
    lat: 45.07,
    lng: 7.69,
    era: "reason",
    summary: "Italian-French mathematician who reformulated mechanics without geometry, founded analytical mechanics, and made deep contributions to number theory and algebra.",
    contributions: [
      "Mécanique analytique — mechanics from pure analysis",
      "Lagrange's theorem in group theory",
      "Calculus of variations and Lagrangian mechanics"
    ]
  },
  {
    id: "laplace",
    name: "Pierre-Simon Laplace",
    birthYear: 1749,
    deathYear: 1827,
    birthplace: "Beaumont-en-Auge, France",
    lat: 49.23,
    lng: 0.07,
    era: "reason",
    summary: "The 'Newton of France' who developed celestial mechanics, Bayesian probability, and the Laplace transform — a tool still essential in engineering and physics.",
    contributions: [
      "Mécanique céleste: stability of the solar system",
      "Laplace transform and potential theory",
      "Bayesian probability and the central limit theorem"
    ]
  },
  {
    id: "legendre",
    name: "Adrien-Marie Legendre",
    birthYear: 1752,
    deathYear: 1833,
    birthplace: "Paris, France",
    lat: 48.86,
    lng: 2.35,
    era: "reason",
    summary: "Made foundational contributions to number theory, elliptic integrals, and geodesy. His textbook on geometry was the standard for a century.",
    contributions: [
      "Legendre polynomials and elliptic integrals",
      "Quadratic reciprocity conjecture (proved by Gauss)",
      "Method of least squares (independently of Gauss)"
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
    era: "reason",
    summary: "The 'Prince of Mathematicians.' At 19 he proved the constructibility of the regular 17-gon and later dominated number theory, statistics, and geodesy.",
    contributions: [
      "Disquisitiones Arithmeticae — modern number theory",
      "Least squares, normal distribution, and surveying",
      "Gaussian curvature and early non-Euclidean geometry"
    ]
  },

  // ──────────────────────────────────────────────────────
  //  19TH CENTURY  (1800–1899)
  // ──────────────────────────────────────────────────────
  {
    id: "abel",
    name: "Niels Henrik Abel",
    birthYear: 1802,
    deathYear: 1829,
    birthplace: "Finnøy, Norway",
    lat: 59.15,
    lng: 5.85,
    era: "nineteenth",
    summary: "Norwegian prodigy who proved that the general quintic equation has no algebraic solution, opening the door to group theory and abstract algebra. He died of tuberculosis at 26.",
    contributions: [
      "Impossibility of solving the general quintic by radicals",
      "Abelian integrals and elliptic functions",
      "Abel's theorem and Abelian groups"
    ]
  },
  {
    id: "galois",
    name: "Évariste Galois",
    birthYear: 1811,
    deathYear: 1832,
    birthplace: "Bourg-la-Reine, France",
    lat: 48.78,
    lng: 2.32,
    era: "nineteenth",
    summary: "Died in a duel at 20 but left behind work that created group theory and Galois theory — the definitive framework for understanding when polynomial equations can be solved.",
    contributions: [
      "Galois theory linking field extensions and group theory",
      "Necessary and sufficient conditions for solvability by radicals",
      "Foundations of abstract algebra written the night before his death"
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
    era: "nineteenth",
    summary: "Wrote the first algorithm intended for a machine — Charles Babbage's Analytical Engine — and envisioned computers going beyond mere calculation.",
    contributions: [
      "Notes on the Analytical Engine: first published computer program",
      "Saw potential for machines to compose music and create graphics",
      "Bernoulli numbers algorithm for Babbage's engine"
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
    era: "nineteenth",
    summary: "Revolutionized geometry with curved spaces (Riemannian geometry), essential for Einstein's general relativity, and formulated the famous Riemann hypothesis.",
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
    era: "nineteenth",
    summary: "Created set theory and proved that infinities come in different sizes, overturning the intuitive notion of a single 'infinity.'",
    contributions: [
      "Different sizes of infinity (countable vs uncountable)",
      "Cantor's diagonal argument and continuum hypothesis",
      "Founded modern set theory despite fierce opposition"
    ]
  },
  {
    id: "kovalevskaya",
    name: "Sofia Kovalevskaya",
    birthYear: 1850,
    deathYear: 1891,
    birthplace: "Moscow, Russia",
    lat: 55.76,
    lng: 37.62,
    era: "nineteenth",
    summary: "First woman to earn a doctorate in mathematics and first to hold a full professorship in Europe. She solved the problem of rotating rigid bodies that had stumped Euler and Lagrange.",
    contributions: [
      "Kovalevskaya top — third integrable case of rigid body rotation",
      "Cauchy–Kovalevskaya theorem for partial differential equations",
      "Pioneered women's access to advanced mathematical education"
    ]
  },
  {
    id: "poincare",
    name: "Henri Poincaré",
    birthYear: 1854,
    deathYear: 1912,
    birthplace: "Nancy, France",
    lat: 48.69,
    lng: 6.18,
    era: "nineteenth",
    summary: "The last mathematician to master all branches of mathematics in his day. He founded algebraic topology, chaos theory, and posed the Poincaré conjecture (proved in 2003).",
    contributions: [
      "Poincaré conjecture (proved by Perelman, 2003)",
      "Founded algebraic topology and qualitative dynamics",
      "Three-body problem and the discovery of chaos"
    ]
  },
  {
    id: "hilbert",
    name: "David Hilbert",
    birthYear: 1862,
    deathYear: 1943,
    birthplace: "Königsberg, Prussia (modern Kaliningrad)",
    lat: 54.71,
    lng: 20.51,
    era: "nineteenth",
    summary: "Shaped 20th-century mathematics with his 23 unsolved problems. He formalized geometry, founded functional analysis, and championed the axiomatic method.",
    contributions: [
      "Hilbert's 23 problems — roadmap for 20th-century math",
      "Hilbert spaces — foundation of quantum mechanics",
      "Invariant theory and proof of the finite basis theorem"
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
    era: "nineteenth",
    summary: "Revolutionized abstract algebra and proved that every symmetry of a physical system corresponds to a conservation law — a cornerstone of modern physics.",
    contributions: [
      "Noether's theorem linking symmetry and conservation",
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
    era: "nineteenth",
    summary: "Self-taught genius who produced thousands of extraordinary formulas and identities, many proved only decades after his death.",
    contributions: [
      "Partition function asymptotics with Hardy",
      "Mock theta functions and highly unconventional formulas",
      "Notebooks filled with results that still inspire research"
    ]
  },

  // ──────────────────────────────────────────────────────
  //  MODERN ERA  (1900–present)
  // ──────────────────────────────────────────────────────
  {
    id: "vonneumann",
    name: "John von Neumann",
    birthYear: 1903,
    deathYear: 1957,
    birthplace: "Budapest, Hungary",
    lat: 47.50,
    lng: 19.04,
    era: "modern",
    summary: "Perhaps the broadest mathematical mind of the 20th century. He founded game theory, formalized quantum mechanics, and designed the architecture behind every modern computer.",
    contributions: [
      "Von Neumann architecture for stored-program computers",
      "Game theory — minimax theorem and equilibrium concepts",
      "Rigorous axioms for quantum mechanics and set theory"
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
    era: "modern",
    summary: "Proved that any consistent formal system strong enough for arithmetic contains true statements that cannot be proved — shattering Hilbert's program.",
    contributions: [
      "Incompleteness theorems (1931)",
      "Gödel's completeness theorem for first-order logic",
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
    era: "modern",
    summary: "Father of computer science and artificial intelligence. His Turing machine model defines what 'computable' means; he broke Enigma in WWII.",
    contributions: [
      "Turing machine — foundation of computability theory",
      "Halting problem and universal computation",
      "Codebreaking at Bletchley Park; early AI (Turing test)"
    ]
  },
  {
    id: "erdos",
    name: "Paul Erdős",
    birthYear: 1913,
    deathYear: 1996,
    birthplace: "Budapest, Hungary",
    lat: 47.50,
    lng: 19.08,
    era: "modern",
    summary: "The most prolific mathematician of the 20th century with over 1,500 papers. He lived as a nomad, collaborating so widely that 'Erdős numbers' measure distance from him in co-authorship.",
    contributions: [
      "Probabilistic method in combinatorics and graph theory",
      "Erdős–Kac theorem and elementary proof of prime number theorem",
      "Over 1,500 papers with more than 500 co-authors"
    ]
  },
  {
    id: "shannon",
    name: "Claude Shannon",
    birthYear: 1916,
    deathYear: 2001,
    birthplace: "Petoskey, Michigan, USA",
    lat: 45.37,
    lng: -84.96,
    era: "modern",
    summary: "Founded information theory with a single landmark paper, defining bits, entropy, and channel capacity — the mathematical backbone of the digital age.",
    contributions: [
      "Information theory: entropy, bits, and channel capacity",
      "Proved Boolean algebra can implement any logical operation in circuits",
      "Sampling theorem and foundations of digital communication"
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
    era: "modern",
    summary: "Rebuilt algebraic geometry using abstractions so general they became the language of modern mathematics. Fields Medalist who later withdrew from academia.",
    contributions: [
      "Schemes and topos theory — new foundations for geometry",
      "Proof of Weil conjectures (with Deligne)",
      "Influenced number theory, topology, and mathematical physics"
    ]
  },
  {
    id: "uhlenbeck",
    name: "Karen Uhlenbeck",
    birthYear: 1942,
    deathYear: null,
    birthplace: "Cleveland, Ohio, USA",
    lat: 41.50,
    lng: -81.69,
    era: "modern",
    summary: "First woman to win the Abel Prize (2019). Her work on geometric analysis and gauge theory provided the mathematical foundations for modern theoretical physics.",
    contributions: [
      "Foundational results in geometric analysis and gauge theory",
      "Uhlenbeck compactness theorem in Yang–Mills theory",
      "Pioneering work on minimal surfaces and harmonic maps"
    ]
  },
  {
    id: "wiles",
    name: "Andrew Wiles",
    birthYear: 1953,
    deathYear: null,
    birthplace: "Cambridge, England",
    lat: 52.21,
    lng: 0.12,
    era: "modern",
    summary: "Achieved one of mathematics' greatest triumphs by proving Fermat's Last Theorem in 1995, a problem that had remained unsolved for 358 years.",
    contributions: [
      "Proof of Fermat's Last Theorem via modularity of elliptic curves",
      "Modularity theorem (Taniyama–Shimura conjecture, special case)",
      "Abel Prize 2016 for his stunning proof"
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
    era: "modern",
    summary: "Often called the 'Mozart of mathematics.' Youngest IMO gold medalist, Fields Medalist at 31, working across harmonic analysis, PDEs, and number theory.",
    contributions: [
      "Green–Tao theorem: primes contain arbitrarily long arithmetic progressions",
      "Harmonic analysis, compressed sensing, and ergodic theory",
      "Over 300 research papers spanning pure and applied math"
    ]
  },
  {
    id: "mirzakhani",
    name: "Maryam Mirzakhani",
    birthYear: 1977,
    deathYear: 2017,
    birthplace: "Tehran, Iran",
    lat: 35.69,
    lng: 51.39,
    era: "modern",
    summary: "First woman and first Iranian to win the Fields Medal (2014). Her work on the dynamics and geometry of Riemann surfaces was described as 'stunning.'",
    contributions: [
      "Counting simple closed geodesics on hyperbolic surfaces",
      "Dynamics of moduli spaces of Riemann surfaces",
      "Fields Medal 2014 — first awarded to a woman"
    ]
  }
];

const ERA_LABELS = {
  ancient: "Ancient World (before 500 CE)",
  medieval: "Medieval & Renaissance (500–1599)",
  reason: "Age of Reason (1600–1799)",
  nineteenth: "19th Century (1800–1899)",
  modern: "Modern Era (1900–present)"
};

const ERA_COLORS = {
  ancient: "#c4a35a",
  medieval: "#6b8cae",
  reason: "#4a7c59",
  nineteenth: "#c45a7c",
  modern: "#5c4a9e"
};

/** English Wikipedia article titles for portrait lookups (Wikimedia Commons). */
const WIKI_TITLES = {
  thales: "Thales of Miletus",
  pythagoras: "Pythagoras",
  euclid: "Euclid",
  archimedes: "Archimedes",
  eratosthenes: "Eratosthenes",
  apollonius: "Apollonius of Perga",
  hipparchus: "Hipparchus",
  diophantus: "Diophantus",
  hypatia: "Hypatia",
  aryabhata: "Aryabhata",
  brahmagupta: "Brahmagupta",
  alkhwarizmi: "Muhammad ibn Musa al-Khwarizmi",
  khayyam: "Omar Khayyam",
  bhaskara: "Bhāskara II",
  fibonacci: "Fibonacci",
  madhava: "Madhava of Sangamagrama",
  tartaglia: "Niccolò Fontana Tartaglia",
  cardano: "Gerolamo Cardano",
  viete: "François Viète",
  descartes: "René Descartes",
  fermat: "Pierre de Fermat",
  pascal: "Blaise Pascal",
  newton: "Isaac Newton",
  leibniz: "Gottfried Wilhelm Leibniz",
  bernoulli: "Jacob Bernoulli",
  euler: "Leonhard Euler",
  lagrange: "Joseph-Louis Lagrange",
  laplace: "Pierre-Simon Laplace",
  legendre: "Adrien-Marie Legendre",
  gauss: "Carl Friedrich Gauss",
  abel: "Niels Henrik Abel",
  galois: "Évariste Galois",
  lovelace: "Ada Lovelace",
  riemann: "Bernhard Riemann",
  cantor: "Georg Cantor",
  kovalevskaya: "Sofia Kovalevskaya",
  poincare: "Henri Poincaré",
  hilbert: "David Hilbert",
  noether: "Emmy Noether",
  ramanujan: "Srinivasa Ramanujan",
  vonneumann: "John von Neumann",
  godel: "Kurt Gödel",
  turing: "Alan Turing",
  erdos: "Paul Erdős",
  shannon: "Claude Shannon",
  grothendieck: "Alexander Grothendieck",
  uhlenbeck: "Karen Uhlenbeck",
  wiles: "Andrew Wiles",
  tao: "Terence Tao",
  mirzakhani: "Maryam Mirzakhani"
};

/** Direct Wikimedia Commons image URLs (500px thumbnails where available). */
const PORTRAIT_URLS = {
  thales: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Illustrerad_Verldshistoria_band_I_Ill_107.jpg/500px-Illustrerad_Verldshistoria_band_I_Ill_107.jpg",
  pythagoras: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/500px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg",
  euclid: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg/500px-Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
  archimedes: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/500px-Domenico-Fetti_Archimedes_1620.jpg",
  eratosthenes: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Portrait_of_Eratosthenes.png",
  apollonius: "https://upload.wikimedia.org/wikipedia/commons/6/63/Apollonii_Pergei_Opera_1537_detail.jpg",
  hipparchus: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Head_of_Hipparchus_%28cropped%29.jpg",
  diophantus: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Diophantus-II-8-Fermat.jpg/500px-Diophantus-II-8-Fermat.jpg",
  hypatia: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hypatia_portrait.png/500px-Hypatia_portrait.png",
  aryabhata: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aryabhatta_of_Bihar.jpg/500px-Aryabhatta_of_Bihar.jpg",
  brahmagupta: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bas-relief_of_Brahmagupta.jpg/500px-Bas-relief_of_Brahmagupta.jpg",
  alkhwarizmi: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Madrid_-_Ciudad_Universitaria%2C_Monumento_a_Muhammad_al-Juarismi_%28cropped%29.jpg/500px-Madrid_-_Ciudad_Universitaria%2C_Monumento_a_Muhammad_al-Juarismi_%28cropped%29.jpg",
  khayyam: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hakim_Omar_Khayam_-_panoramio.jpg/500px-Hakim_Omar_Khayam_-_panoramio.jpg",
  bhaskara: "https://upload.wikimedia.org/wikipedia/commons/7/7b/%E0%A4%AD%E0%A4%BE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%9A%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AF.jpg",
  fibonacci: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Leonardo_Fibonacci.JPG/500px-Leonardo_Fibonacci.JPG",
  madhava: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sangamagrama-Madhava-c1340-c1425-This-is-a-digital-image-of-Madhava-drawn-up-with.ppm.png/500px-Sangamagrama-Madhava-c1340-c1425-This-is-a-digital-image-of-Madhava-drawn-up-with.ppm.png",
  tartaglia: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Portret_van_Niccolo_Tartaglia_Nicolavs_Tartaglia_Brixianvs_%28titel_op_object%29_Portretten_van_beroemde_Europese_geleerden_%28serietitel%29_Virorum_doctorum_de_Disciplinis_benemerentium_effigies_%28serietitel%29%2C_RP-P-1909-4459.jpg/500px-Portret_van_Niccolo_Tartaglia_Nicolavs_Tartaglia_Brixianvs_%28titel_op_object%29_Portretten_van_beroemde_Europese_geleerden_%28serietitel%29_Virorum_doctorum_de_Disciplinis_benemerentium_effigies_%28serietitel%29%2C_RP-P-1909-4459.jpg",
  cardano: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Girolamo_Cardano._Stipple_engraving_by_R._Cooper._Wellcome_V0001004.jpg/500px-Girolamo_Cardano._Stipple_engraving_by_R._Cooper._Wellcome_V0001004.jpg",
  viete: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Francois_Viete.jpg/500px-Francois_Viete.jpg",
  descartes: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/500px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
  fermat: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Pierre_de_Fermat.jpg",
  pascal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blaise_Pascal_Versailles.JPG/500px-Blaise_Pascal_Versailles.JPG",
  newton: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/500px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
  leibniz: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg/500px-Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_%28ca._1695%29.jpg",
  bernoulli: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Jakob_Bernoulli.jpg/500px-Jakob_Bernoulli.jpg",
  euler: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Leonhard_Euler_-_Jakob_Emanuel_Handmann_%28Kunstmuseum_Basel%29.jpg/500px-Leonhard_Euler_-_Jakob_Emanuel_Handmann_%28Kunstmuseum_Basel%29.jpg",
  lagrange: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lagrange_crop.jpg/500px-Lagrange_crop.jpg",
  laplace: "https://upload.wikimedia.org/wikipedia/commons/3/39/Laplace%2C_Pierre-Simon%2C_marquis_de.jpg",
  legendre: "https://upload.wikimedia.org/wikipedia/commons/0/03/Legendre.jpg",
  gauss: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Carl_Friedrich_Gauss_1840_by_Jensen.jpg/500px-Carl_Friedrich_Gauss_1840_by_Jensen.jpg",
  abel: "https://upload.wikimedia.org/wikipedia/commons/8/80/Niels_Henrik_Abel.jpg",
  galois: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Evariste_galois.jpg/500px-Evariste_galois.jpg",
  lovelace: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png/500px-Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png",
  riemann: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Friedrich_Bernhard_Riemann.jpeg/500px-Georg_Friedrich_Bernhard_Riemann.jpeg",
  cantor: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Georg_Cantor_%28Portr%C3%A4t%29.jpg/500px-Georg_Cantor_%28Portr%C3%A4t%29.jpg",
  kovalevskaya: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg",
  poincare: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/PSM_V82_D416_Henri_Poincare.png/500px-PSM_V82_D416_Henri_Poincare.png",
  hilbert: "https://upload.wikimedia.org/wikipedia/commons/7/79/Hilbert.jpg",
  noether: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Emmy_Noether_%283x4_cropped%29.jpg/500px-Emmy_Noether_%283x4_cropped%29.jpg",
  ramanujan: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Srinivasa_Ramanujan-Add._MS_a94_version2_%28cropped%29.jpg/500px-Srinivasa_Ramanujan-Add._MS_a94_version2_%28cropped%29.jpg",
  vonneumann: "https://upload.wikimedia.org/wikipedia/commons/5/5e/JohnvonNeumann-LosAlamos.gif",
  godel: "https://upload.wikimedia.org/wikipedia/commons/4/42/Kurt_g%C3%B6del.jpg",
  turing: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/500px-Alan_turing_header.jpg",
  erdos: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Erdos_budapest_fall_1992_%28cropped%29.jpg",
  shannon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/C.E._Shannon._Tekniska_museet_43069_%282x3_crop%29.jpg/500px-C.E._Shannon._Tekniska_museet_43069_%282x3_crop%29.jpg",
  grothendieck: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Alexander_Grothendieck_-_face.jpg",
  uhlenbeck: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Karen_Uhlenbeck_%28cropped%29.jpg",
  wiles: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Andrew_wiles1-3.jpg/500px-Andrew_wiles1-3.jpg",
  tao: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Terence_Tao.jpg/500px-Terence_Tao.jpg",
  mirzakhani: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Remise_de_la_m%C3%A9daille_Fields_%C3%A0_Maryam_Mirzakhani.jpg/500px-Remise_de_la_m%C3%A9daille_Fields_%C3%A0_Maryam_Mirzakhani.jpg"
};
