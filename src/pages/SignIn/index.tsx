import { Container, FormContainer } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'
import Header from '../../components/Header';
import { useCallback, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  const history = useHistory();

  const handleSubmit = useCallback( async (e) => {
    e.preventDefault();
    try {
      await signIn({
        email,
        password
      })
      
      history.push('/');
      
    } catch (error) {
      alert(error.message)
    }
  }, [signIn, email, password, history])

  return (
    <>
      <Header />
      <Container>
        <FormContainer>
          <form action="">
            <div>
              <FiMail />
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div>
              <FiLock />
              <input type="password" placeholder="Senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Entrar</button>
          </form>
        </FormContainer>
      </Container>
    </>
  )
}

export default SignIn;