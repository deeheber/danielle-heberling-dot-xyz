import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    body: {
      fontSize: '1.2rem'
    },
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    },
    a: {
      color: '#2E86C1'
    },
    ul: {
      paddingLeft: '2rem'
    },
    ol: {
      paddingLeft: '2rem'
    },
    blockquote: {
      color: '#707B7C',
      borderLeftColor: '#707B7C'
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
