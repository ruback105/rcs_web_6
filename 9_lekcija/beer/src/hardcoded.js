export const beerData = [
  {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 64, unit: "celsius" }, duration: 75 }],
      fermentation: { temp: { value: 19, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: { value: 3.3, unit: "kilograms" },
        },
        { name: "Caramalt", amount: { value: 0.2, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.4, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "First Gold",
          amount: { value: 25, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Fuggles",
          amount: { value: 37.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: { value: 37.5, unit: "grams" },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Cascade",
          amount: { value: 37.5, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy chicken tikka masala",
      "Grilled chicken quesadilla",
      "Caramel toffee cake",
    ],
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
  {
    id: 2,
    name: "Trashy Blonde",
    tagline: "You Know You Shouldn't",
    first_brewed: "04/2008",
    description:
      "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
    image_url: "https://images.punkapi.com/v2/2.png",
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    attenuation_level: 76,
    volume: { value: 20, unit: "litres" },
    boil_volume: { value: 25, unit: "litres" },
    method: {
      mash_temp: [{ temp: { value: 69, unit: "celsius" }, duration: null }],
      fermentation: { temp: { value: 18, unit: "celsius" } },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: { value: 3.25, unit: "kilograms" },
        },
        { name: "Caramalt", amount: { value: 0.2, unit: "kilograms" } },
        { name: "Munich", amount: { value: 0.4, unit: "kilograms" } },
      ],
      hops: [
        {
          name: "Amarillo",
          amount: { value: 13.8, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Simcoe",
          amount: { value: 13.8, unit: "grams" },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Amarillo",
          amount: { value: 26.3, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
        {
          name: "Motueka",
          amount: { value: 18.8, unit: "grams" },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Fresh crab with lemon",
      "Garlic butter dipping sauce",
      "Goats cheese salad",
      "Creamy lemon bar doused in powdered sugar",
    ],
    brewers_tips:
      "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];
