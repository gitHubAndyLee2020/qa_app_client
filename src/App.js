import './styles/style.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'
import QuestionForm from './components/home/questions/QuestionForm'
import Account from './components/account/Account'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from './actions/questionActions'
import QuestionRoute from './components/home/questions/QuestionRoute'
import AccountUser from './components/account/AccountUser'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuestions())
  }, [])

  const questions = useSelector((state) => state.questions)

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/auth" exact render={() => <Auth />} />
        <Route path="/questionForm" exact render={() => <QuestionForm />} />
        <Route path="/account" exact render={() => <Account />} />
        <Route path="/accountUser" exact render={() => <AccountUser />} />
        {questions.map((question) => (
          <Route path={`/${question._id}`} exact render={() => <QuestionRoute question={question} />} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
