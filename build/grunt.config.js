// Why Grunt at all? Because grunt-webfont isn't available as plain Node.js
// module
const jitGrunt = require('jit-grunt');
module.exports = grunt => {

  // load grunt tasks
  jitGrunt(grunt, {});

  // grunt configuration
  const iconName = 'form-components-icons';
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
    }
  });

  grunt.registerTask('generate-icon-font', ['webfont', 'replace']);
};
