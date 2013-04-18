Foundationify — A [Foundation](http://foundation.zurb.com/) 4 based theme for Shopify
========================================================

Foundationify is a theme for Shopify based on the responsive Zurb [Foundation](http://foundation.zurb.com/) 4 framework.

Foundationify makes it easy to get started on building your own [Foundation](http://foundation.zurb.com/) based Shopify Theme.

Requires Bower and Grunt.

Run 'grunt' to build. Dist directory will contain built theme.

Get Started
-----------
1. Checkout project.
2. Run 'npm install && bower install'.
3. Run 'grunt'.
4. Theme will be built into the /dist folder.

To Do
-----
1. Most page layouts
2. Customer pages

Working with the Shopify Theme Manager (live updateing)
-------------------------------------------------------

1. Download the zip file of this blank theme: https://github.com/lukebussey/shopify-blank-theme/archive/master.zip
2. Install the blank theme within Shopfy.
3. Optionally rename the theme within Shopify.
3. Using the Shopify Theme Manager, connect to your store and download the theme.
4. Delete the downloaded folder, and recreate it as a symlink to your foundationify/dist folder.
5. Run 'grunt live' which will build the dist folder for Foundationify.
6. In the Shopify Theme Manager, force a deployment to upload the theme.
7. Start making your changes and see them uploaded immediately to your store.

MIT Open Source License
=======================
Copyright (c) 2013 Luke Bussey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
