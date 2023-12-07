import { FetchedUser, SuggestionsResponse } from "../../src/context/types";

type MockedSuggestions = Omit<SuggestionsResponse, 'items'> & {
  items: Array<Pick<FetchedUser, 'id' | 'login'>>
}

export const MOCKED_SUGGESTIONS: MockedSuggestions = {
  "total_count": 39971,
  "incomplete_results": false,
  "items": [
    {
      "login": "rica",
      "id": 38668,
    },
    {
      "login": "ricardoas",
      "id": 311029,
    },
    {
      "login": "ricardoquesada",
      "id": 232330,
    },
    {
      "login": "ricardobeat",
      "id": 97396,
    },
    {
      "login": "ricardoalcocer",
      "id": 1271259,
    },
    {
      "login": "ricardozv",
      "id": 44045430,
    },
    {
      "login": "ricalanis",
      "id": 3820751,
    },
    {
      "login": "ricarthlima",
      "id": 8612149,
    },
    {
      "login": "RicardoToledoB",
      "id": 1168968,
    },
    {
      "login": "ricaun",
      "id": 12437519,
    },
    {
      "login": "ricardozanini",
      "id": 1538000,
    },
    {
      "login": "ricardocanelas",
      "id": 663151,
    },
    {
      "login": "ricardokovalski",
      "id": 13839909,
    },
    {
      "login": "ricardomiron",
      "id": 18178248,
    },
    {
      "login": "Rican7",
      "id": 742384,
    },
    {
      "login": "ricardojoserf",
      "id": 11477353,
    },
    {
      "login": "ricardomerces",
      "id": 19780654,
    },
    {
      "login": "ricardoogliari",
      "id": 710617,
    },
    {
      "login": "ricardojmendez",
      "id": 31263,
    },
    {
      "login": "ricardoandre97",
      "id": 34402209,
    },
    {
      "login": "RicardoBaltazar",
      "id": 56805229,
    },
    {
      "login": "ricardodeazambuja",
      "id": 6606382,
    },
    {
      "login": "ricardclau",
      "id": 613725,
    },
    {
      "login": "ricardovicentini",
      "id": 18422677,
    },
    {
      "login": "ricardoprins",
      "id": 54654484,
    },
    {
      "login": "ricardocasares",
      "id": 84963,
    },
    {
      "login": "ricardoamaro",
      "id": 384962,
    },
    {
      "login": "RicardoJiang",
      "id": 18047645,
    },
    {
      "login": "ricardolonga",
      "id": 1022655,
    },
    {
      "login": "ricardotulio",
      "id": 5113666,
    }
  ]
}
