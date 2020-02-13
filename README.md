# D3 in React

---

#### What is D3?

## D3 <ins>is not</ins> a Data Visualization Library

> "Much of D3 has little to do with graphics and many of the parts that do aren’t necessary to learn to create effective data visualization"

https://medium.com/@Elijah_Meeks/d3-is-not-a-data-visualization-library-67ba549e8520

---

## Researching D3

- Not the best examples
- Can look intimidating
- API is huge, but documented well and modularized
- Almost all graph libraries (recharts, react-vis, ...) are depending on d3

---

## Why not use react libraries?

- You definitely can
- Do your research
- API's might not be
  - easily customizable
  - easy to understand
  - not typed?
- Might not have full control of your visualizations and/or data

---

[<img src="https://miro.medium.com/max/4988/1*Jg78azZPohv5JrI3cyIvfw.png" />
](https://github.com/d3/d3/blob/master/API.md)

---

## Modular import

`npm install` ~~d3~~ &nbsp; `d3-shape d3-scale d3-axis d3-selection ...`

---

## Today's Agenda

- Create pie chart component
- Use d3 to generate svg plot data
  - `d3-shape` - [pie()](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#pie) & [arc()](https://github.com/d3/d3-shape/blob/v1.3.7/README.md#arc)
- Type custom data for d3 input
- Style & customize svg pie chart
