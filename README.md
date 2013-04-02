Foundationify
==================

A theme for Shopify based on the responsive Zurb Foundation 4 framework.

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
1. Setup 'grunt watch' task to copy changed files into the dist folder for testing with the Shopify Theme Manager.
2. Most page layouts
3. Customer pages


Working with the Shopify Theme Manager
--------------------------------------

1. Install a blank theme:
https://github.com/lukebussey/shopify-blank-theme/archive/master.zip
2. Optional: Rename Theme in Shopify to "Foundationify"
3. Add your store and theme using the Shopify Theme Manager.
4. Run "grunt" which will build the dist folder for Foundationify.
5. Remove the downloaded folder and create a symlink to foundationify/dist
6. In the Shopify Theme Manager, force a deployment to upload the theme.
7. TODO: Run "grunt watch" to automatically update theme.

MIT Open Source License
=======================
Copyright (c) 2013 Luke Bussey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.