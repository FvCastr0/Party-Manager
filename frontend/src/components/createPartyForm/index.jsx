import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import httpGetClient from '../../http/httpGetClient';
import InputForm from '../InputForm';

const StyledCreatePartyForm = styled.form`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 1.6rem;
    text-align: center;
    font-family: 'Lato';
    font-weight: bold;
    margin: 1rem;
  }

`;

const StyledBackground = styled.div`
  @media (max-width: 500px) {
    padding: 1.5rem;
  }

  @media (max-width: 350px) {
    padding: 1.5rem 0;
  }

  width: 800px;
  background-color: #FFF;
  padding: 2rem 5rem;
  border: 1px solid #ccc;
  border-radius: .5rem;

`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1.5px solid #5E17EB;
  border-radius: .3rem;
  padding: .5rem 1rem;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 1.1rem;
  transition: all .3s ease-out;
  &:hover {
    background-color: #5E17EB;
    color: #FFF;
  }
`;

const ServiceForm = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
`;

const ServiceFormCard = styled.article`
  margin-bottom: 1.75rem;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'Lato';
    margin-top: .35rem;
  }

  legend {
    margin-top: .2rem;
    font-size: 1.15rem;
    font-weight: bold;
    font-family: 'Lato';
  }

  div {
    margin-top: .3rem;
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 600;
  }

  input, label {
    cursor: pointer;
  }

  img {
      width: 100%;
      max-width: 300px;
      max-height: 200px;
      height: 100%;
      border-radius: .3rem;
      box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.342);
    }
`;

export default function CreatePartyForm() {
  const [serviceData, setServiceData] = useState([]);
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    description: '',
    budget: '',
    image: '',
    services: [],
  });

  const [APIService, setAPIService] = useState([]);
  const [serviceCheckbox, setServiceCheckbox] = useState([]);

  useEffect(() => {
    httpGetClient('/service')
      .then((res) => {
        setAPIService(res.data.services);

        const updatedServiceCheckbox = {};

        res.data.services.forEach((service) => {
          if (serviceCheckbox[service._id]) {
            updatedServiceCheckbox[service._id] = true;
          } else {
            updatedServiceCheckbox[service._id] = '';
          }
        });

        if (res.data.services._id) {
          setServiceCheckbox(updatedServiceCheckbox);
        }
      });
  }, []);

  function handleCheckboxChange(e) {
    const { name, checked, id } = e.target;
    const findService = APIService.find((service) => service._id === id);
    setServiceCheckbox({ ...serviceCheckbox, [id]: checked });
    if (checked) setServiceData({ ...serviceData, [name]: findService });
    if (!checked) {
      const updatedserviceData = { ...serviceData };
      delete updatedserviceData[name];
      setServiceData(updatedserviceData);
    }
  }

  function addFormValues() {
    const servicesCheked = [];
    APIService.filter((service) => {
      const findService = serviceData[service.name];
      if (findService !== undefined) return servicesCheked.push(findService);
    });
    return formValues.services = servicesCheked;
  }

  function postFormValues() {
    axios.post('http://localhost:3001/party/create', formValues);
  }

  function handleSubmitData(e) {
    e.preventDefault();
    addFormValues();
    postFormValues();
    alert('Festa criada!');
    window.location.href = 'http://localhost:5173';
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <StyledCreatePartyForm onSubmit={handleSubmitData}>
      <StyledBackground>

        <InputForm
          title="Nome"
          type="text"
          placeholder="Qual é o nome da festa?"
          name="title"
          value={formValues.title}
          oc={handleInputChange}
        />

        <InputForm
          title="Anfitrião"
          type="text"
          placeholder="Quem está organizando?"
          name="author"
          value={formValues.author}
          oc={handleInputChange}
        />

        <InputForm
          title="Descrição"
          type="text"
          placeholder="Coloque uma descrição"
          name="description"
          value={formValues.description}
          oc={handleInputChange}
        />

        <InputForm
          title="Orçamento"
          type="number"
          placeholder="Qual será o orçamento?"
          name="budget"
          value={formValues.budget}
          oc={handleInputChange}
        />

        <InputForm
          title="Imagem"
          type="text"
          placeholder="Coloque a URL da imagem"
          name="image"
          value={formValues.image}
          oc={handleInputChange}
        />

        <h2>Escolha os serviços</h2>
        <ServiceForm>
          {APIService.map((service) => (
            <ServiceFormCard key={service._id}>
              <img src={service.image} alt="Imagem serviço" />
              <p>{service.name}</p>
              <legend>
                Preço: R$
                {service.price}
              </legend>
              <div>
                <input
                  type="checkbox"
                  id={service._id}
                  placeholder="Coloque a URL da imagem"
                  name={service.name.toString()}
                  checked={!!serviceCheckbox[service._id]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={service._id}>Marque para solicitar</label>
              </div>
            </ServiceFormCard>
          ))}
        </ServiceForm>
        <StyledButton type="submit">Criar festa</StyledButton>
      </StyledBackground>
    </StyledCreatePartyForm>
  );
}
