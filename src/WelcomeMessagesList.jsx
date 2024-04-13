// WelcomeMessagesList.jsx
import { WelcomeMessage } from "./WelcomeMessage.jsx";
import { users } from "./users.js";

export function WelcomeMessagesList() {
    return <ul>
        {
            users.map(user => (
	            <>
	                {user.country === 'Singapore' && <li>Majulah Singapura, {user.name}</li>}
	                <WelcomeMessage key={user.name} name={user.name} country={user.country}/>
	            </>
            ))
        }
    </ul>
  }