import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import { loginUser } from "./authService";
import { setUser } from "./authSlice";

export default function AuthScreen({ navigation }) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const user = await loginUser(email, password);

    if (user) {
      dispatch(setUser(user));
      navigation.navigate("Products");
    }

  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  }

});