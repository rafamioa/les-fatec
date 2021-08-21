import React from "react";
import { mask, unMask } from "remask";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  nome: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]+$/,
    message: "Informe um nome válido",
  },
  cpf: {
    regex: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
    message: "CPF inválido",
    mask: ["999.999.999-99"],
  },
  dataDeNascimento: {
    regex: /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
    message: "Data inválida",
    mask: "99/99/9999",
  },
  telefone: {
    regex: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
    message: "Telefone inválido",
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
  },
  senha: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message: "Senha inválida",
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
    mask: ["99999-999"],
  },
  logradouro: {
    regex: /^[a-zA-Z0-9\u00C0-\u00FF-. ]+$/,
    message: "Logradouro inválido",
  },
  bairro: {
    regex: /^[a-zA-Z\u00C0-\u00FF-. ]+$/,
    message: "Bairro inválido",
  },
  cidade: {
    regex: /^[a-zA-Z\u00C0-\u00FF-. ]+$/,
    message: "Cidade inválida",
  },
  numero: {
    regex: /^[0-9]+$/,
    message: "Número inválido",
  },
  descricao: {
    regex: /^[A-z0-9\W]+$/,
    message: "Descrição inválida",
  },
  nomeDoCartao: {
    regex: /^[a-zA-Z\u00C0-\u00FF ]+$/,
    message: "Nome impresso inválido",
  },
  numeroDoCartao: {
    regex: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/,
    message: "Número do cartao inválido",
    mask: ["9999 9999 9999 9999"],
  },
  codigoDoCartao: {
    regex: /\d{3}$/,
    message: "Código de segurança inválido",
    mask: ["999"],
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (document.getElementById(type)?.hasAttribute("campo")) {
      const campo = document.getElementById(type).getAttribute("campo");
      if (types[type].mask) {
        const campoSemMascara = unMask(campo);
        setValue(unMask(campoSemMascara));
        console.log(campoSemMascara);
      }
      setValue(campo);
      console.log(value);
    }
  }, []);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    const existe = types[type].mask;
    if (existe) {
      const valorOriginal = unMask(target.value);
      const valorComMascara = mask(valorOriginal, types[type].mask);
      setValue(valorComMascara);
    } else setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
