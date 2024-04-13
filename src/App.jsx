// App.jsx
import { WelcomeMessagesList } from "./WelcomeMessagesList"
import { WelcomeMessagesTitle } from "./WelcomeMessagesTitle"

function WelcomeMessagesSection() {
  return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
  </div>
}

function App() {
  return <div>
      <WelcomeMessagesSection />
  </div>
}

export default App
