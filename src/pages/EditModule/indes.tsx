import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, FormContainer } from './styles';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

interface Params {
  id: string;
}

const EditModule: React.FC = () => {
  const [name, setName] = useState('')
  const { id } = useParams<Params>();

  const history = useHistory();

  useEffect(() => {
    api.get(`modules/${id}`).then(response => {
      setName(response.data.name);
    })
  }, [id])

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await api.put(`/modules/${id}`, { name })
      history.push('/');

    } catch (error) {
      alert(error.message)
    }
  }, [history, id, name])

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <form action="">
            <h1>Alterar Módulo</h1>
            <div>
              <input type="text" placeholder="Nome" value={name} defaultValue={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Alterar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default EditModule;