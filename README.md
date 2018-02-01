#Bravo Awards 2017 vote website
------
Microsite to capture votes for Bravo awards 2017 finalists. Relies on https://formspree.io/ API for sending the votes to a preconfigured email account. 

#Links
------
##Live: 
http://votebravo.com.au/

##Staging: 
http://w6digital.com.au/clients/bravo/votebravo/


#Get ready
------
Latest version of Node.js is required to edit this code: 

https://nodejs.org/en/

Clone repository:
```
$ git clone git@bitbucket.org:andresh83/votebravo.git
```

Install dependencies: 
```
$ npm install
```

Preprocess HTML partials, Sass and bundle JS for debugging: 
```
$ gulp
```

localhost test server: 
```
$ nm start
```

Distribution build minimized code: 
```
$ gulp --env prod
```