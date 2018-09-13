import colors from "./colors" 

const theme = {
  navTheme: `
  a{
   text-decoration: none
   color: ${colors.sideColorLight1};    
   
   a:active{         
     text-decoration: none
     color: ${colors.sideColorDark2};
   }  
  }
  a:hover {
    color: ${colors.sideColorDark2};
    text-decoration: none
  } 

  background: ${colors.mainColor};
  
  h1{
    color:${colors.sideColorDark1};
    font-size: 32px;
  }

  border-bottom: 2px solid ${colors.sideColorDark2};
  `,
  colors: {
    mainColor: colors.mainColor,
    sideColorLight1: colors.sideColorLight1,
    sideColorLight2: colors.sideColorLight2,
    sideColorDark1: colors.sideColorDark1,
    sideColorDark2: colors.sideColorDark2
  },
  maxWidth:'100px'
} 
  export default theme;