# Deno Utilities Monorepo

[![Test Tools](https://github.com/mskian/deno-utilities-monorepo/actions/workflows/test.yml/badge.svg)](https://github.com/mskian/deno-utilities-monorepo/actions/workflows/test.yml)
![Deno](https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white)

A Deno Module with Multiple utility tools

## Prerequisites

- Deno on your System <https://deno.land/#installation>

## Utilities

- Slugify a string
- Kilometer Conversion - From Meter to Kilometer
- Convert Speed from Meter Per Seconds to Kilometer Per Hour
- Convert Bike or Cycle Moving time to Human Readable format
- Convert date to Human Readable format

## Usage

```js
import { utilitytools } from "https://deno.land/x/utilitiesmonorepo/mod.ts";

console.log(utilitytools.kmConversion(205957));
console.log(utilitytools.speedConversion(7.252));
console.log(utilitytools.HashTag("santhoshveer helloword demo.land lume.land"));
console.log(utilitytools.slugify("santhoshveer helloword demo.land lume.land"));
console.log(utilitytools.movingTime(16952));
console.log(utilitytools.humanDate("2021-10-28T01:02:20Z"));
```

## Testing

```sh
deno run --allow-net --allow-read test.ts

or

deno task test
```

Feel free to add your useful utility tools via PR 😊

- inspiration - <https://github.com/michael-spengler/utilities>

## LICENSE

MIT
