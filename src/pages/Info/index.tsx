import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import {
  FiArrowLeft,
  FiEdit2,
  FiEdit3,
  FiHeadphones,
  FiPlusCircle,
} from 'react-icons/fi';

import { produce } from 'immer';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Button from '../../components/Button';
import getValidationError from '../../utils/getValidationErrors';

import { Container, Content, AnimationContainer, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface InfoFormData {
  firstName: string;
  lastName: string;
  description: string;
  podcasts: string[];
}

interface PodcastProps {
  id: number;
  name?: string;
}

const Info: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const [podcasts, setPodcasts] = useState<PodcastProps[]>([{ id: 1 }]);

  const handleSubmit = useCallback(
    async (data: InfoFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          firstName: Yup.string().required('Necessário inserir nome'),
          lastName: Yup.string().required('Necessário inserir nome'),
          description: Yup.string().required(
            'Conte-nos um pouquinho de você, vai!',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log(data);

        // await api.post('/info', data);

        // history.push('/');

        addToast({
          type: 'success',
          title: 'Atualização feita com sucesso!',
          description: 'Busque outros podcaster.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro nas informações!',
          description: 'Hey, tente colocar informações válidas.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Podcastering" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Atualizar suas informações</h1>
            <Input
              name="firstName"
              icon={FiEdit2}
              type="text"
              placeholder="Primeiro Nome"
            />
            <Input
              name="lastName"
              icon={FiEdit2}
              type="text"
              placeholder="Último Nome"
            />
            <Text
              name="description"
              icon={FiEdit3}
              placeholder="Conte sobre você, para que outros podcasters te achem!"
            />
            {podcasts.map((p, index) => {
              return (
                <Input
                  onChange={(e) => {
                    const name = e.target.value;
                    setPodcasts((currentPod) =>
                      produce(currentPod, (v) => {
                        v[index].name = name;
                      }),
                    );
                  }}
                  key={p.id}
                  name="podins"
                  icon={FiHeadphones}
                  type="text"
                  placeholder="Um podcast que você ama"
                />
              );
            })}
            <FiPlusCircle
              className="plus"
              onClick={(): void => {
                setPodcasts([...podcasts, { id: podcasts.length + 1 }]);
              }}
            />
            <Button type="submit">Atualizar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para início
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Info;
