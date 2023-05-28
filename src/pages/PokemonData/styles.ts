const mainBoxStyle:any = {
    height: "100vh",
    maxWidth: "700px",
    width:"100%",
    padding: "10px",
    position: "relative",
  };
  
  const imageStyle:any = {
    height: "40%",
    top: "calc(60% - 227px)",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    zIndex: 1,
  };
  
  const contentContainerStyle:any = {
    bg: "#ffffff",
    height: "60%",
    borderRadius: 10,
    boxShadow: "inset 0 0 4px 4px #22222237",
    padding: "15px 10px",
    gap: 4,
    flexWrap: "wrap" as const,
    overflowY: "auto",
    position: "absolute",
    left: "10px",
    bottom: "10px",
    right: "10px",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  export const styles = {contentContainerStyle, mainBoxStyle, imageStyle}