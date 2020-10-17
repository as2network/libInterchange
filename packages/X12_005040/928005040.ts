syntax = {
  version: "00504",
  functionalgroup: "AI",
}

structure = [
  {
    ID: "ST",
    MIN: 1,
    MAX: 1,
    LEVEL: [
      { ID: "BIX", MIN: 1, MAX: 1 },
      { ID: "TI", MIN: 0, MAX: 1 },
      { ID: "VC", MIN: 1, MAX: 36, LEVEL: [{ ID: "ID", MIN: 0, MAX: 99 }] },
      { ID: "SE", MIN: 1, MAX: 1 },
    ],
  },
]
