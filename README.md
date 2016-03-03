# Foundationify

[![devDependency Status](https://david-dm.org/lukebussey/foundationify/dev-status.svg)](https://david-dm.org/lukebussey/foundationify#info=devDependencies)

Foundationify is a theme for Shopify based on the responsive Zurb [Foundation](http://foundation.zurb.com/) 5 framework.

Foundationify makes it easy to get started on building your own [Foundation](http://foundation.zurb.com/) based Shopify Theme.

Foundationify is brought to you by [Tools for Living](http://www.toolsforliving.com/)

Requires Bower and Grunt.

Run `grunt build` to build. The dist directory will contain the built theme.

Curent Status
-------------
This project provides a working Shopify theme with all [Foundation](http://foundation.zurb.com/) 5 CSS and JavaScript available, ready for you start adding your own templates and building your own Shopify theme.

Preview: http://foundationify.myshopify.com/

Roadmap
-------
I'm currently working on building all of the necessary templates to provide a basic Shopify theme that can be used without 
any modifications. Once complete this will be consided version 1.0.0.

To Do – 12/2/13
-----
1. Customer pages

Getting Started
---------------
1. Checkout project.
2. Run `npm install && bower install`.
3. Run `grunt build`.
4. Theme will be built into the /dist folder.

Working with the Shopify Theme Manager (live updating)
-------------------------------------------------------
1. Download and install this blank theme: https://github.com/lukebussey/shopify-blank-theme/archive/master.zip
2. Optionally rename the theme within Shopify.
3. Using the Shopify Theme Manager, connect to your store and download the theme.
4. Delete the downloaded folder, and recreate it as a symlink to your foundationify/dist folder.
5. Run `grunt live` which will build the dist folder for Foundationify.
6. In the Shopify Theme Manager, force a deployment to upload the theme.
7. Start making your changes and see them uploaded immediately to your store.