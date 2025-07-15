/**
 * Test fixtures for sample data
 */

// Sample character data
export const sampleCharacters = [
  {
    id: 1009610,
    name: "Spider-Man (Peter Parker)",
    description: "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
    modified: "2020-07-21T10:30:10-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      extension: "jpg"
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1009610",
    comics: {
      available: 4227,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1009610/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/62304",
          name: "Spider-Man: Homecoming (2017) #1"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/60151",
          name: "The Amazing Spider-Man (2017) #789"
        }
      ],
      returned: 2
    },
    series: {
      available: 1067,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1009610/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/22845",
          name: "Spider-Man: Homecoming (2017)"
        }
      ],
      returned: 1
    },
    stories: {
      available: 5844,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1009610/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/1018",
          name: "Amazing Spider-Man (1999) #500",
          type: "cover"
        }
      ],
      returned: 1
    },
    events: {
      available: 38,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1009610/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/116",
          name: "Acts of Vengeance!"
        }
      ],
      returned: 1
    },
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=e632a7169a7a6780de47440d6e2c31cc"
      },
      {
        type: "wiki",
        url: "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=e632a7169a7a6780de47440d6e2c31cc"
      }
    ]
  },
  {
    id: 1016181,
    name: "Spider-Man (Miles Morales)",
    description: "Teenager Miles Morales grew up in Brooklyn, New York. Recently, Miles took on the identity of Spider-Man after being bitten by a genetically modified spider. Realizing he had powers similar to those of the original Spider-Man, Peter Parker, Miles took up the mantle after Peter's death.",
    modified: "2016-02-11T10:01:11-0500",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/f/50/537bcfa1eed73",
      extension: "jpg"
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1016181",
    comics: {
      available: 327,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1016181/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/93112",
          name: "Miles Morales: Spider-Man (2018) #25"
        }
      ],
      returned: 1
    },
    series: {
      available: 57,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1016181/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26022",
          name: "Miles Morales: Spider-Man (2018 - Present)"
        }
      ],
      returned: 1
    },
    stories: {
      available: 332,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1016181/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/92342",
          name: "Cover #92342",
          type: "cover"
        }
      ],
      returned: 1
    },
    events: {
      available: 2,
      collectionURI: "http://gateway.marvel.com/v1/public/characters/1016181/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/336",
          name: "Secret Empire"
        }
      ],
      returned: 1
    },
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=e632a7169a7a6780de47440d6e2c31cc"
      }
    ]
  }
];

// Sample comics data
export const sampleComics = [
  {
    id: 82967,
    digitalId: 56725,
    title: "The Amazing Spider-Man (2018) #75",
    issueNumber: 75,
    variantDescription: "",
    description: "What did Spider-Man do to incur the wrath of Kindred?! And who is this mysterious villain that has been plaguing Peter Parker for so long?",
    modified: "2021-10-06T09:05:45-0400",
    isbn: "",
    upc: "75960608936907511",
    diamondCode: "AUG210683",
    ean: "",
    issn: "",
    format: "Comic",
    pageCount: 40,
    textObjects: [],
    resourceURI: "http://gateway.marvel.com/v1/public/comics/82967",
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/comics/issue/82967/the_amazing_spider-man_2018_75?utm_campaign=apiRef&utm_source=e632a7169a7a6780de47440d6e2c31cc"
      }
    ],
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/24396",
      name: "The Amazing Spider-Man (2018 - Present)"
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: "onsaleDate",
        date: "2021-10-06T00:00:00-0400"
      },
      {
        type: "focDate",
        date: "2021-09-13T00:00:00-0400"
      }
    ],
    prices: [
      {
        type: "printPrice",
        price: 4.99
      }
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/f/90/615c6cc6e6bfa",
      extension: "jpg"
    },
    images: [
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/90/615c6cc6e6bfa",
        extension: "jpg"
      }
    ],
    creators: {
      available: 7,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/13215",
          name: "Rain Beredo",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/12581",
          name: "Zeb Wells",
          role: "writer"
        }
      ],
      returned: 2
    },
    characters: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/82967/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009610",
          name: "Spider-Man (Peter Parker)"
        }
      ],
      returned: 1
    }
  },
  {
    id: 95719,
    digitalId: 57685,
    title: "Spider-Man: No Way Home Prelude (2022) #1",
    issueNumber: 1,
    variantDescription: "",
    description: "SPIDER-MAN SWINGS INTO THE MCU! Re-live the amazing cinematic introduction of SPIDER-MAN into the MARVEL CINEMATIC UNIVERSE in this adaptation of SPIDER-MAN: HOMECOMING... and get ready for the upcoming film SPIDER-MAN: NO WAY HOME, exclusively in movie theaters in December!",
    modified: "2021-11-17T09:03:28-0500",
    isbn: "",
    upc: "75960620190700111",
    diamondCode: "SEP210984",
    ean: "",
    issn: "",
    format: "Comic",
    pageCount: 32,
    textObjects: [],
    resourceURI: "http://gateway.marvel.com/v1/public/comics/95719",
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/comics/issue/95719/spider-man_no_way_home_prelude_2022_1?utm_campaign=apiRef&utm_source=e632a7169a7a6780de47440d6e2c31cc"
      }
    ],
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/32689",
      name: "Spider-Man: No Way Home Prelude (2022)"
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [
      {
        type: "onsaleDate",
        date: "2021-11-24T00:00:00-0500"
      },
      {
        type: "focDate",
        date: "2021-10-25T00:00:00-0400"
      }
    ],
    prices: [
      {
        type: "printPrice",
        price: 3.99
      }
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/30/619536bea9c06",
      extension: "jpg"
    },
    images: [
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/30/619536bea9c06",
        extension: "jpg"
      }
    ],
    creators: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/95719/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/13027",
          name: "Will Robson",
          role: "penciller (cover)"
        }
      ],
      returned: 1
    },
    characters: {
      available: 1,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/95719/characters",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/characters/1009610",
          name: "Spider-Man (Peter Parker)"
        }
      ],
      returned: 1
    }
  }
];

// Sample API responses
export const sampleApiResponses = {
  characters: {
    code: 200,
    status: "Ok",
    copyright: "© 2023 MARVEL",
    attributionText: "Data provided by Marvel. © 2023 MARVEL",
    attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2023 MARVEL</a>",
    etag: "65a0db16937110b31f5a37e943b0d72cd78a5c0c",
    data: {
      offset: 0,
      limit: 20,
      total: 2,
      count: 2,
      results: sampleCharacters
    }
  },
  comics: {
    code: 200,
    status: "Ok",
    copyright: "© 2023 MARVEL",
    attributionText: "Data provided by Marvel. © 2023 MARVEL",
    attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2023 MARVEL</a>",
    etag: "65a0db16937110b31f5a37e943b0d72cd78a5c0c",
    data: {
      offset: 0,
      limit: 20,
      total: 2,
      count: 2,
      results: sampleComics
    }
  }
};

export default {
  sampleCharacters,
  sampleComics,
  sampleApiResponses
};
