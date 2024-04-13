// WelcomeMessagesList.jsx
import { WelcomeMessage } from "./WelcomeMessage";
import { users } from "./users";

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