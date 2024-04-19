import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

type props ={
  text:string
}
export const SizeTruck:FC<props>=({text})=>{
  return(
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}
