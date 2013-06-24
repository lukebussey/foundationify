Foundationify — A [Foundation](http://foundation.zurb.com/) 4 based theme for Shopify
========================================================

Foundationify is a theme for Shopify based on the responsive Zurb [Foundation](http://foundation.zurb.com/) 4 framework.

Foundationify makes it easy to get started on building your own [Foundation](http://foundation.zurb.com/) based Shopify Theme.

Foundationify is brought to you by [Tools for Living](http://www.toolsforliving.com/)

Requires Bower and Grunt.

Run `grunt` to build. The dist directory will contain the built theme.

Curent Status
-------------
This project provides a working Shopify theme with all [Foundation](http://foundation.zurb.com/) 4 CSS and JavaScript available, ready for you start adding your own templates and building your own Shopify theme.

Preview: http://foundationify.myshopify.com/

Roadmap
-------
I'm currently working on building all of the necessary templates to provide a basic Shopify theme that can be used without 
any modifications. Once complete this will be consided version 1.0.0.

To Do – 5/12/13
-----
1. Customer pages
2. Product gallery images

Getting Started
---------------
1. Checkout project.
2. Run `npm install && bower install`.
3. Run `grunt`.
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

MIT Open Source License
=======================
Copyright (c) 2013 Luke Bussey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
