import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
  }

  body {
    background: primary;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  
`;

const theme = {
  fonts: {
    title: "Space Grotesk, sans-serif",
    main: "Space Grotesk, sans-serif"
  },
  colors: {
    primary1: "#3F4F59",
    secondary1: "#FFA48E",
    background1: "#14141b",
    text: "#A8B6BF",
    button: "hsl(205.1,100%,36.1%)",
    background2: "#2F3940",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
