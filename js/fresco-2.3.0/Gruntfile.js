module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    dirs: {
      dest: "dist"
    },

    vars: {},

    concat: {
      options: { process: true },
      dist: {
        src: [
          "srcjs/umd-head.js",
          "srcjs/setup.js",
          "srcjs/skins.js",

          // helpers
          "srcjs/helpers/bounds.js",
          "srcjs/helpers/browser.js",
          "srcjs/helpers/helpers.js",
          "srcjs/helpers/support.js",
          "srcjs/helpers/imageready.js",
          "srcjs/helpers/timers.js",
          "srcjs/helpers/url.js",
          "srcjs/helpers/vimeothumbnail.js",
          "srcjs/helpers/vimeoready.js",

          "srcjs/options.js",
          "srcjs/loading.js",
          "srcjs/overlay.js",
          "srcjs/window.js",
          "srcjs/keyboard.js",
          "srcjs/page.js",
          "srcjs/pages.js",
          "srcjs/view.js",
          "srcjs/spinner.js",

          "srcjs/api.js",

          "srcjs/thumbnails.js",
          "srcjs/thumbnail.js",
          "srcjs/ui.js",
          "srcjs/ui-fullclick.js",
          "srcjs/ui-inside.js",
          "srcjs/ui-outside.js",

          "srcjs/umd-tail.js"
        ],
        dest: "<%= dirs.dest %>js/fresco.js"
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "src/css/",
            src: ["**"],
            dest: "<%= dirs.dest %>/css/"
          }
        ]
      }
    },

    uglify: {
      dist: {
        options: {
          output: {
            comments: "some"
          }
        },
        src: ["<%= dirs.dest %>js/fresco.js"],
        dest: "<%= dirs.dest %>js/fresco.min.js"
      }
    },

    clean: {
      dist: "dist/"
    },

    watch: {
      scripts: {
        files: ["src/**/*.js", "src/**/*.css"],
        tasks: ["default"],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", [
    "clean:dist",
    "concat:dist",
    "copy:dist",
    "uglify:dist"
  ]);
};
