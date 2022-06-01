import { useEffect, useState } from "react";
import * as Font from "expo-font";

//custom Hook
export const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplate] = useState(false);

  useEffect(() => {
    //function implemintation
    async function LoadResourceAndDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplate(true);
      }
    }

    //call the function
    LoadResourceAndDataAsync();
  }, []);

  return isLoadingComplete;
};
