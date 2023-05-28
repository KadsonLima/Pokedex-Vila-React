// styles.js

 const pokemonSize:any = {
    width: "200px",
    height: "200px",
    fontSizeId: "14px",
    sizePokemonImage: "120px",
    fontSizeName: "16px",
  };
  
 const pokemonStyles:any = {
    boxShadow:
      "0px 2px 2px 1px rgba(0, 0, 0, 0.2), inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)",
    border: "2px solid #615e5e59",
    borderRadius: "10px",
    padding: "3px 8px",
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    _hover: {
      boxShadow:
        "0px 4px 4px 2px rgba(0, 0, 0, 0.61), inset 0px 2px 6px 2px rgba(0, 0, 0, 0.25)",
      cursor: "pointer",
    },
  };
  
  const pokemonImageStyles:any = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
  

  export const styles = {pokemonImageStyles, pokemonSize, pokemonStyles}