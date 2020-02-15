# 🛍Secrets Abeilles

> Collectif Secrets Abeilles - Sensa Pascal Palé

![screenshot of site](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/ecommerce-screenshot.jpg "E-Commerce Netlify Site")

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm dev

# build for production and launch server
$ npm build
$ npm start

# generate static project
$ npm generate
```

## Configure the Backend and 

Create a FaunaDB database and adjust the .env file following  

```bash
cp .env.example .env.development
ln -s .env.development .env
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

There are two articles explaining how this site is set up:
* Explanation of Netlify Functions and Stripe: [Let's Build a JAMstack E-Commerce Store with Netlify Functions](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)
* Explanation of dynamic routing in Nuxt for the individual product pages: [Creating Dynamic Routes in Nuxt Application](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)


Hosting
-------

Site is hosted on Netlify - https://www.netlify.com

Copyright
---------

Fabien Udriot
[Twitter](https://twitter.com/fudriot)
[Github](https://github.com/fabarea)

Based on the work of Sarah Drasner 
[Twitter](https://twitter.com/sarah_edo)
[Github](https://github.com/sdras)
        
TODO
----

* Content: improve Sansa Pascal images
* Content: add more text about how the shop works.
* Configurer CORS for Netlify
* lancer en une commande les lambdas functions + l'application Nuxt
* Mettre à jour le schema pour gérer des commandes
* Créer un formulaire pour créer un nouveau TODO / Order
