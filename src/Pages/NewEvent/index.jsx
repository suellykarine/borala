import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { EventContext } from "../../Providers/event";

import LogoImg from "../../assets/boralalogo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Cover,
  DivForm,
  ErrorSpan,
  Form,
  FormContainer,
  Header,
  ImgEvent,
  Logo,
  Select,
  SpanNovoEvento,
} from "./style";

const NewEvent = ({ isEditting }) => {
  const { eventRegister, eventUpdate } = useContext(EventContext);

  const history = useHistory();

  const actualEvent = isEditting && history.location.state;

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    date: yup.string().required("Informe a data do evento"),
    city: yup.string().required("Nome é obrigatório"),
    imgUrl: yup.string().required("Insira a url da imagem do evento"),
    eventPage: yup.string().required("Informe o link para o evento"),
    state: yup.string().required("Selecione um estado"),
    category: yup.string().required("Selecione uma categoria"),
    price: yup.string().required("Informe um valor"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: isEditting && {
      name: actualEvent.name,
      date: actualEvent.date,
      city: actualEvent.city,
      imgUrl: actualEvent.imgUrl,
      eventPage: actualEvent.eventPage,
      state: actualEvent.state,
      category: actualEvent.category,
      price: actualEvent.price,
    },
  });

  const onSubmitFunction = (data) => {
    isEditting && (data.id = actualEvent.id);
    isEditting ? eventUpdate(data, history) : eventRegister(data, history);
  };

  if (!localStorage.getItem("@borala:token")) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={LogoImg} alt="logo borala" />
        </Link>
        <SpanNovoEvento>
          <Link to="/myEvents">MEUS EVENTOS</Link>
        </SpanNovoEvento>
        <SpanNovoEvento>
          {isEditting ? "EDITAR EVENTO" : "NOVO EVENTO"}
        </SpanNovoEvento>
      </Header>
      {isEditting ? <ImgEvent src={actualEvent.imgUrl} /> : <Cover />}

      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <FormContainer>
          <DivForm>
            <Input
              placeholder={"NOME"}
              register={register("name")}
              errorMsg={errors.name?.message}
            />
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
            <Input
              placeholder={"DATA"}
              type={"date"}
              register={register("date")}
              errorMsg={errors.date?.message}
            />
            {errors.date && <ErrorSpan>{errors.date.message}</ErrorSpan>}
          </DivForm>
          <DivForm>
            <Input
              placeholder={"CIDADE"}
              register={register("city")}
              errorMsg={errors.city?.message}
            />
            {errors.city && <ErrorSpan>{errors.city.message}</ErrorSpan>}
            <Input
              placeholder={"URL DA IMAGEM"}
              register={register("imgUrl")}
              errorMsg={errors.imgUrl?.message}
            />
            {errors.imgUrl && <ErrorSpan>{errors.imgUrl.message}</ErrorSpan>}
          </DivForm>
          <DivForm>
            <Input
              placeholder={"SITE DO EVENTO"}
              register={register("eventPage")}
              errorMsg={errors.eventPage?.message}
            />
            {errors.eventPage && (
              <ErrorSpan>{errors.eventPage.message}</ErrorSpan>
            )}
            <Input
              placeholder={"VALOR"}
              register={register("price")}
              errorMsg={errors.price?.message}
            />
            {errors.price && <ErrorSpan>{errors.price.message}</ErrorSpan>}
          </DivForm>
          <DivForm>
            <Select
              {...register("category")}
              defaultValue=""
              errorMsg={errors.category?.message}
            >
              <option value="" disabled>
                CATEGORIA
              </option>
              <option value="Show">Show</option>
              <option value="Teatro">Peça Teatral</option>
              <option value="HH">Happy Hour</option>
              <option value="Feira">Feira</option>
              <option value="Festa">Festa</option>
              <option value="Tour">Tour</option>
              <option value="Rodízio">Rodízio</option>
              <option value="Exposição">Exposição</option>
            </Select>
            <Select
              {...register("state")}
              defaultValue=""
              errorMsg={errors.state?.message}
            >
              <option value="" disabled>
                ESTADO
              </option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </Select>
          </DivForm>
        </FormContainer>
        <Button type="submit">
          {isEditting ? "SALVAR" : "CADASTRAR EVENTO"}
        </Button>
      </Form>
    </>
  );
};

export default NewEvent;
