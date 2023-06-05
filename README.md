# The initialization code
```html
<div id="chartID"></div>
<link href="https://spike4848.github.io/mindlode_question_pro/static/css/main.3b0a02ab.css" rel="stylesheet" /><script>
  const data = [
    { type: "EvB", score: 20.125 },
    { type: "FvP", score: .625 },
    { type: "PvE", score: 6 },
    { type: "VvS", score: .5 },
    { type: "RvD", score: -5.125 },
    { type: "SvT", score: .375 },
    { type: "CvD", score: -2.6 }
  ];
  window.SatisfactionChartScriptOnLoad = (function () { InitSatisfactionChart("chartID", data) });
</script><script defer="defer" src="https://spike4848.github.io/mindlode_question_pro/static/js/main.3589df44.js"></script>
```

## The default settings

```
const defaultSettings = {
  EvB: {
    topText: 'EXCITED',
    bottomText: 'BORED',
    color: '#b83f3a',
    benchmark: 0.4,
    topEmoji: 'excited',
    bottomEmoji: 'bored',
    minValue: -50,
    maxValue: 50,
  },
  FvP: {
    topText: 'FULFILLED',
    bottomText: 'POINTLESS',
    color: '#e69846',
    benchmark: 0.4,
    topEmoji: 'fulfilled',
    bottomEmoji: 'pointless',
    minValue: -50,
    maxValue: 50,
  },
  PvE: {
    topText: 'PROUD',
    bottomText: 'EMBARRASSED',
    color: '#f0ca00',
    benchmark: 0.4,
    topEmoji: 'proud',
    bottomEmoji: 'embarrassed',
    minValue: -50,
    maxValue: 50,
  },
  PvS: {
    topText: 'VALUABLE',
    bottomText: 'STUCK',
    color: '#9acea8',
    benchmark: 0.4,
    topEmoji: 'valuable',
    bottomEmoji: 'stuck',
    minValue: -50,
    maxValue: 50,
  },
  RvD: {
    topText: 'REWARDED',
    bottomText: 'DISDAINED',
    color: '#a6c6e4',
    benchmark: 0.4,
    topEmoji: 'rewarded',
    bottomEmoji: 'disdained',
    minValue: -50,
    maxValue: 50,
  },
  SvT: {
    topText: 'SAFE',
    bottomText: 'THREATENED',
    color: '#975ba1',
    benchmark: 0.4,
    topEmoji: 'safe',
    bottomEmoji: 'threatened',
    minValue: -50,
    maxValue: 50,
  },
  CvD: {
    topText: 'CONTENTED',
    bottomText: 'DESPONDENT',
    color: '#bd619a',
    benchmark: 0.4,
    topEmoji: 'contented',
    bottomEmoji: 'despondent',
    minValue: -50,
    maxValue: 50,
  },
};

"excitement" is the type of scale;
"topText" is the description of the highest value title;
"bottomText" is the description of the lowest value title;
"color" is the RGB value of the color;
"benchmark" is the benchmark value;
"topEmoji" is the emoji associated with the highest value;
"bottomEmoji" is the emoji associated with the lowest value;
"minValue" is the minimum value of the scale;
"maxValue" is the maximum value of the scale.
```

## Change the default settings

The default settings can be overridden by passing an object with the desired changes as the third parameter to the InitSatisfactionChart function.
```
const settingsOverrides = {
  EvB: {
    benchmark: 4,
  },
};

InitSatisfactionChart("chartID", data, settingsOverrides) 

```
