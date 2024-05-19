import  {  useState } from 'react';
import Logo from '../../../assets/anthstone img 2 1.svg';
import { auth } from '../../../firebase';
import { confirmPasswordReset } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loaders from '../../../component/Loaders';

interface Errors {
    password?: string;
    confirm?: string;
}

const PasswordReset: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get("oobCode");
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');     
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (!password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (password !== confirm) {
      errors.confirm = 'Passwords do not match';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      if (oobCode) {
        await confirmPasswordReset(auth, oobCode, password);
        alert('Success! Your password has been changed successfully.');
        navigate('/login');
      } else {
        alert('Invalid or missing oobCode.');
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert('An error occurred while resetting the password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[--text-extra]'>
      {loading ? (
        <div className='flex justify-center items-center'>
          <Loaders />
        </div>
      ) : (
        <>
          <div className='p-10 bg-[--text-extra] grid justify-start'>
            <a href='/'>
              <img src={Logo} alt='Logo' className='w-[10rem]' />
            </a>
          </div>

          <div className="w-screen grid items-center justify-center bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full bg-[--text-extra]">
              <div>
                <h2 className="mt-6 text-start text-3xl font-extrabold text-gray-900">Password Recovery</h2>
                <p className='max-w-[16rem] py-2'>Fill up the form to help you recover your account.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="password">Password *</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="New Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className='text-[#f30000] text-sm'>{errors.password}</span>}
                  </div>

                  <div>
                    <label htmlFor="confirm">Confirm Password *</label>
                    <input
                      id="confirm"
                      name="confirm"
                      type="password"
                      className="block w-[20rem] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      required
                      placeholder="Confirm Password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)} 
                    />
                    {errors.confirm && <span className='text-[#f30000] text-sm'>{errors.confirm}</span>}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full text-[--text-extra] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[--button-color]">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PasswordReset;
