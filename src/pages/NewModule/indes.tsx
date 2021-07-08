import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/api';
import { Container, FormContainer } from './styles';

const NewModule: React.FC = () => {
  const [name, setName] = useState('')

  const history = useHistory();

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await api.post(`/modules`, { name })
      history.push('/');

    } catch (error) {
      alert(error.message)
    }
  }, [history, name])

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <form action="">
            <h1>Cadastrar Módulo</h1>
            <div>
              <input type="text" placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Cadastrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default NewModule;