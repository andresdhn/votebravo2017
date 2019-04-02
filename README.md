# votebravo
---
Bravo Awards 2017 vote website  https://andresdhn.github.io/votebravo2017/


## Introduction

Microsite to capture votes for Bravo awards 2017 finalists. Relies on https://formspree.io/ API for sending the votes to a preconfigured email account. 


## Dependencies: 
```
$ npm install
```

## Preprocess HTML partials, Sass and bundle JS for debugging: 
```
$ gulp
```

localhost test server: 
```
$ nm start
```

Distribution build (minimized code): 
```
$ gulp --env prod
```

# Author
[Andres Hernandez](andres.hernandez@ward6.com.au)