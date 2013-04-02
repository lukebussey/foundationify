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
