export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "black",
    primary: "#8080FE",
    text: "#fff"
  },
  sizes: {
    default: "100vw",
    max: "540px"
  },
  styles: {
    Layout: {
      backgroundColor: "black",
      color: "gray.0",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body",
      a: {
        textDecoration: "none",
        color: "white",
        padding: "2",
        "&:focus-within,&:hover": {
          color: "primary"
        }
      },
      h1: {
        color: "primary",
        fontSize: 5,
        fontWeight: "bold",
        lineHeight: "heading",
        margin: "1rem 0 0"
      },
      h2: {
        color: "primary"
      },
      ul: {
        borderTop: "1px solid",
        borderColor: "gray.0",
        listStyle: "none",
        padding: 0
      },
      li: {
        borderBottom: "1px solid",
        borderColor: "gray.1",
        padding: 2,
      },
    },
    Header: {
      display: "grid",
      gridTemplateColumn: "1fr 1fr auto",
      color: "primary",
      fontWeight: "bold",
      maxWidth: "100%",
      width: "100vw",
      a: {
        float: "right",
      },
      h1: {
        fontFamily: "Sego UI",
        fontSize: 5,
        padding: "2rem 0",
        margin: "0 0 0 8rem",
        position: "relative",
      },
      nav: {
        float: "right",
        fontSize: 0,
        margin: "0 8rem 0 0",
      }
    },
    // Main: {
    //   margin: "0 auto",
    //   maxWidth: "max",
    //   width: "default"
    // },
    Main: {
      margin: "0 auto",
      maxWidth: "100%",
      width: "default"
    },
    Container: {
      padding: 3
    },
  }

}
