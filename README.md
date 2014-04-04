# Website Template - Static

This is a template to kick-start a statically generated website utilizing Foundation 5, Grunt and Jekyll.

## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [Ruby 2.1.1](https://www.ruby-lang.org/en/):
  	* Mac OS X: Install Ruby 2.1.1 as described [here](http://dean.io/setting-up-a-ruby-on-rails-development-environment-on-mavericks/)
  * [Jekyll](http://jekyllrb.com): Run `[sudo] gem install jekyll`

## Quickstart

```bash
gem install jekyll
git clone git@github.com/colincwilliams/websitetemplate-static.git
npm install && bower install
```

While you're working on your project, run:

`grunt`

to build it into _dev. To publish:

`grunt publish`

to publish to _public (minified JavaScript and compressed CSS).

## Directory Strucutre

  * `_src`: Where all of the source files for your site come from.
    * `scss/_settings.scss`: Foundation configuration settings go in here
    * `scss/app.scss`: Application styles go here
  * `_dev`: Where the output of the site build occurs during development, *without* minified JS or compressed CSS for debugging.
  * `_public`: Where the output of the site build occurs for final publishing.

## Grunt Plugins Used

  * [grunt-jekyll](https://github.com/dannygarcia/grunt-jekyll)
  * [grunt-sass](https://github.com/sindresorhus/grunt-sass)
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [grunt-contrib-qunit](https://github.com/gruntjs/grunt-contrib-qunit)
  * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

## Todo

These things are still a work in progress and will be completed as time allows.

  * Add copy task through grunt-contrib-copy
  * Copy jquery and foundation CSS and JS files for use, rather than using them directly
  * Make it so that grunt watch works correctly with Jekyll's serve for live development
