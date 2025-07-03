# Temperature Conversion (C ↔ F)

## Task Description

You are given the following variables:

```js
const temperature = 50;
const scale = "c"; // Can be either 'c' for Celsius or 'f' for Fahrenheit
```

- If the temperature is given in **Celsius** (`'c'`), convert it to **Fahrenheit**.
- If the temperature is given in **Fahrenheit** (`'f'`), convert it to **Celsius**.

Store the converted result in the following variable:

```js
let converted;
```

## Conversion Formulas

- Celsius → Fahrenheit:  
  `F = C × 1.8 + 32`

- Fahrenheit → Celsius:  
  `C = (F - 32) ÷ 1.8`

## Example

Given:

```js
const temperature = 50;
const scale = "c";
```

This is Celsius, so convert to Fahrenheit:

```js
let converted = 50 * 1.8 + 32; // Result: 122
```

So:

```js
let converted = 122;
```
