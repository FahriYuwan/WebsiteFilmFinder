import InputField from '../../components/InputField';
import SubmitButton from '../../components/Button';
import Divider from '../../components/Divider';
import SocialButton from '../../components/SocialButton';
import googleLogo from '../../assets/images/google-login.png';
import RememberMe from '../../components/RememberMe';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  return (
    <form className="mt-8 space-y-4" onSubmit={props.handleSubmit}>
      <div className="space-y-4">
        <InputField
          id="username"
          name="Username"
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={(e) => props.setUsername(e.target.value)}
        />
        <InputField
          id="password"
          name="Password"
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={(e) => props.setPassword(e.target.value)}
        />
        <RememberMe />
        <SubmitButton
          className="w-full flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-dark-accent hover:bg-dark-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          text="Login"
        />
      </div>
      <Divider />
        <SocialButton iconUrl={googleLogo} altText="Sign in with Google" />
    </form>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default LoginForm;