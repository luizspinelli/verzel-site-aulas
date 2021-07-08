import { Container, FormContainer } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import Header from '../../components/Header';
import { useCallback, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';
import { api } from '../../services/api';

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const history = useHistory();

  const handleSubmit = useCallback( async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', {
        username: username,
        email: email,
        password: password
      })

      await signIn({
        email,
        password
      })
      
      history.push('/');
      
    } catch (error) {
      alert(error.message)
    }
  }, [signIn, email, password, history, username])

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <form action="">
            <div>
              <FiUser />
              <input type="email" placeholder="Nome" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div>
              <FiMail />
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
              <FiLock />
              <input type="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Cadastrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default SignUp;