import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'body': {
      background: '#333',
      color: 'white',
      fontSize: '1.2rem'
    },
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    },
    'a': {
      color: '#FFC20E'
    },
    'ul': {
      paddingLeft: '2rem'
    },
    'blockquote': {
      color: '#B2BABF',
      borderLeftColor: '#B2BABF'
    },
    'pre': {
      background: 'white',
      padding: '1rem',
      color: '#333'
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
