import { useMoralis } from 'react-moralis'
import { useEffect } from './compBox'
import Spinner from './spinnerLogo'


export default function LoggedIn(props) {
  props;

  const { logout, isAuthenticating, user } = useMoralis();

  let userAddress = user.get('ethAddress');
  let firstHalfAddress = userAddress.slice(0, 5);
  let secondHalfAddress = userAddress.slice(userAddress.length - 4);
  let shortenedAddress = firstHalfAddress + '...' + secondHalfAddress;

  return (
    <div>
      <h1 id="address">{shortenedAddress}</h1>
      <button id="logout-button" className="btn" onClick={() => logout()} disabled={isAuthenticating}>Logout</button>
      <button id="mint-button" className="btn flex gap-4 items-center" onClick={props.exportJson} >
        Mint with Rarible
        {props.minting && (
          <Spinner height={2} width={2} />
        )}
      </button>
    </div>
  );
}