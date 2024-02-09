import {
  View,
  Box,
  Center,
  NativeBaseProvider,
  Image,
  Text,
  Pressable,
} from "native-base";

export default function PrivacyScreen() {
  return (
    <NativeBaseProvider>
      <Center>
        <Box>
          <Image
            marginTop={"20%"}
            source={{
              uri: "https://cdn.discordapp.com/attachments/1186512641712197663/1205250672984072222/whatsApp1.png?ex=65d7b028&is=65c53b28&hm=5519581c2b13a332ccaebc7583ff6486f4ca6f85343ab4238371d3eb79176a85&",
            }}
            alt="whatsapp image"
            height="323"
            width="315"
          />
          <Text
            textAlign={"center"}
            fontSize={25}
            fontWeight={"600"}
            marginTop={10}
          >
            Bem-vindo(a) ao WhatsApp
          </Text>

          <Text
            textAlign={"center"}
            fontSize={15}
            fontWeight={"500"}
            marginTop={15}
          >
            Leia nossa{" "}
            <Text color="primary.400" fontSize={15} fontWeight={"500"}>
              Politica de Privacidade.
            </Text>
          </Text>
          <Text textAlign={"center"} fontSize={15} fontWeight={"500"}>
            Toque em CONCORDAR E CONTINUAR {"\n"}para aceitar os{" "}
            <Text color="primary.400" fontSize={15} fontWeight={"500"}>
              Termos de Serviço
            </Text>
          </Text>

          <Pressable bg={"amber.200"}>
            <Text
              textAlign={"center"}
              color={"#48DA7E"}
              fontSize={18}
              fontWeight={"600"}
            >
              Português (Brasil)
            </Text>
          </Pressable>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
