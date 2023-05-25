// import { useAxios } from "../hooks/useApi";

// export async function getPokemonColor(pokemonName: string | number) {
//   const { response, error } = await useAxios({
//     method: "GET",
//     url: `/pokemon/${pokemonName}`,
//   });

//   if (error) {
//     console.log(error);
//     return null;
//   }

//   const types = response?.data.types;
//   try {
    
//   } catch (error) {
//     if (types.length > 0) {
//         const typeId = types[0].type.url.split("/").slice(-2, -1)[0];
//         const { response: colorResponse, error: colorError } = useAxios({
//             method: "GET",
//             url:`/type/${typeId}`
//         }
//         );
    
//         if (colorError) {
//           console.log(colorError);
//           return null;
//         }
    
//         const color = colorResponse?.data.color.name;
//         return color;
//       }
    
//   }
  

//   return null;
// }
