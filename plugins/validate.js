import { extend } from "vee-validate";
import { required,  email, confirmed } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Esse campo é obrigatório"
});

extend("email", {
  ...email,
  message: "Preencha com um e-mail válido"
});

extend("confirmed", {
  ...confirmed,
  message: "As senhas devem coincidir"
})
