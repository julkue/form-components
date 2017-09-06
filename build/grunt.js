// Why Grunt at all? Because grunt webfont isn't available as plain Node.js
// module. To have one straight way, other build tasks are implemented with
// Grunt too
const jitGrunt = require('jit-grunt');
module.exports = grunt => {

  // load grunt tasks
  jitGrunt(grunt, {});

  // grunt configuration
  const iconName = 'drupal-message-icons';
  let iconFontFace = '';
  grunt.initConfig({
    // generate web icon font
    webfont: {
      icons: {
        src: './src/icons/*.svg',
        dest: './src/fonts/icons',
        destCss: './src/components/_common/',
        options: {
          font: iconName,
          syntax: 'bootstrap',
          engine: 'fontforge',
          stylesheets: ['scss'],
          htmlDemo: false,
          relativeFontPath: '../../fonts/icons/',
          types: ['woff'],
          order: ['woff'],
          template: './build/icon-template.css.tpl',
          normalize: true
        }
      }
    },
    // replace font-face declaration in generated icon file and paste
    // it into _fonts.scss, because _fonts.scss is included once
    replace: {
      icons: {
        options: {
          patterns: [
            {
              match: /@font-face[\s]*{[^}]*}/gmi,
              replacement: match => {
                iconFontFace = match;
                return '';
              }
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: [`src/components/_common/_${iconName}.scss`],
            dest: 'src/components/_common/'
          }
        ]
      },
      fonts: {
        options: {
          patterns: [
            {
              match: new RegExp(
                `(@font-face[\\s]*{[^}]*font-family:[\\s]*"${iconName}"[^}]*})`,
                'gmi'
              ),
              replacement: match => {
                if (iconFontFace) {
                  return iconFontFace;
                } else {
                  return match;
                }
              }
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/components/_common/_fonts.scss'],
            dest: 'src/components/_common/'
          }
        ]
      }
    },
    // compile SCSS
    sass: {
      dist: {
        options: {
          style: 'expanded',
          includePaths: ['src/components/__common/']
        },
        files: [{
          expand: true,
          cwd: 'src/components',
          src: ['**/*.scss', '!_common/**/*'],
          dest: 'dist/',
          ext: '.css'
        }]
      }
    },
    // copy JS
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/components',
          src: ['**/*.js', '!_common/**/*'],
          dest: 'dist/',
          ext: '.js'
        }]
      }
    }
  });

  grunt.registerTask('default', ['webfont', 'replace', 'sass', 'copy']);
};
