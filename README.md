# Algorand Anywhere

> (Eventually) A light Algorand SDK for JavaScript, TypeScript and Deno applications.

### What?

An Algorand/AVM SDK you can use... "anywhere" there's JavaScript/TypeScript.

### Why?

The official `js-algorand-sdk` has yet to fully support React Native (although [there is an active/on-going effort to land support for React Native in v3](https://github.com/algorand/js-algorand-sdk/issues/779)).

As were building a mobile wallet using Expo EAS, we figured we could:

- [x] Hack together an API with Swagger
- [ ] Create a light, Expo/React Native friendly SDK (15%)
- [ ] Learn more about the AVM (30%)

## When?

### Install

- `yarn add @localhost-international/algorand-anywhere`

### Usage

```typescript
import * as AlgorandAnywhere from "@localhost-international/algorand-anywhere";
const algorandAnywhere = new AlgorandAnywhere(
  "your-api-token",
  "your-algod-url",
  "your-indexer-url"
);
const accountInfo = await algorandAnywhere.accountInformation(
  "some-account-id"
).then((data));
```

### Codegen

- Algod: `yarn api:codegen:algod`
- Indexer: `yarn api:codegen:indexer`

## Where?

[https://github.com/localhost-international/algorand-anywhere](https://github.com/localhost-international/algorand-anywhere)

## Who?

[localhost %](https://localhost.international/)
