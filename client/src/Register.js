import { useRef, useState, useEffect  } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//validates username and password
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{5,15}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{6,12}$/;


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setvalidPwd] = useState(false);
    const [pwdfocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    
  return 
  <div>
    Register

  </div>;
};

export default Register;

