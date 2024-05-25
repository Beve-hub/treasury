import { useEffect, useState } from "react";
import Loaders from "../../../../../component/Loaders";
import ReactFlagsSelect from "react-flags-select";
import Modal from "./LoanModal";
import { useNavigate } from "react-router-dom";

interface Errors {
  amount?: string;
  income?: string;
  used?: string;
  fullName?: string;
  birth?: string;
  phoneNum?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  coun?: string;
  title?: string;
  employer?: string;
  code?: string;
}

const LoanForm = () => {
  const [amount, setAmount] = useState("");
  const [income, setIncome] = useState("");
  const [used, setUsed] = useState("");
  const [fullName, setFullName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [coun, setCoun] = useState("");
  const [title, setTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const url =
    "https://anthstone-default-rtdb.firebaseio.com/LoanData.json";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const validate = (): boolean => {
    const errors: Errors = {};
    let isValid = true;

    if (!amount.trim()) {
      errors.amount = "Amount is required";
      isValid = false;
    }

    if (!income.trim()) {
      errors.income = "Income is required";
      isValid = false;
    }

    if (!used.trim()) {
      errors.used = "Loan purpose is required";
      isValid = false;
    }

    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!birth.trim()) {
      errors.birth = "Date of Birth is required";
      isValid = false;
    }

    if (!phoneNum.trim()) {
      errors.phoneNum = "Phone Number is required";
      isValid = false;
    }

    if (!city.trim()) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!state.trim()) {
      errors.state = "State is required";
      isValid = false;
    }

    if (!coun.trim()) {
      errors.coun = "Country is required";
      isValid = false;
    }

    if (!title.trim()) {
      errors.title = "Job title is required";
      isValid = false;
    }

    if (!employer.trim()) {
      errors.employer = "Employer Name is required";
      isValid = false;
    }

    if (!code.trim()) {
      errors.code = "Zip code is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (validate()) {
      try {
        const resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            income,
            used,
            fullName,
            birth,
            phoneNum,
            email,
            title,
            employer,
            address,
            city,
            state,
            coun,
            code,
          }),
        });

        if (resp.ok) {
          setAmount("");
          setIncome("");
          setUsed("");
          setFullName("");
          setBirth("");
          setPhoneNum("");
          setEmail("");
          setAddress("");
          setCity("");
          setState("");
          setCoun("");
          setTitle("");
          setEmployer("");
          setCode("");
          setIsModalOpen(true);
        } else {
          alert("Error storing details. Please try again.");
        }
      } catch (error) {
        console.error("Error adding loan:", error);
        alert("Error storing details. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loaders />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-screen justify-center items-center space-y-4"
        >
          <p className="font-bold text-2xl py-6">Loan Application Form</p>
          <div className="max-w-[40rem] gap-2 grid md:grid-cols-2 items-center justify-center">
            <div className="grid">
              <label htmlFor="amount">Desired Loan Amount *</label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {errors.amount && (
                <span className="text-[#f30000] text-sm">{errors.amount}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="income">Annual Income *</label>
              <input
                id="income"
                name="income"
                type="number"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Annual Income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              {errors.income && (
                <span className="text-[#f30000] text-sm">{errors.income}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="used">What is the Loan used for? *</label>
              <select
                id="used"
                name="used"
                value={used}
                onChange={(e) => setUsed(e.target.value)}
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select purpose</option>
                <option value="Business purpose">Business purpose</option>
                <option value="Personal use">Personal use</option>
              </select>
              {errors.used && (
                <span className="text-[#f30000] text-sm">{errors.used}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <span className="text-[#f30000] text-sm">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="birth">Date of Birth *</label>
              <input
                id="birth"
                name="birth"
                type="date"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
              />
              {errors.birth && (
                <span className="text-[#f30000] text-sm">{errors.birth}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="phoneNum">Phone Number *</label>
              <input
                id="phoneNum"
                name="phoneNum"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
              />
              {errors.phoneNum && (
                <span className="text-[#f30000] text-sm">
                  {errors.phoneNum}
                </span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="text-[#f30000] text-sm">{errors.email}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="address">Address *</label>
              <input
                id="address"
                name="address"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address && (
                <span className="text-[#f30000] text-sm">{errors.address}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="city">City *</label>
              <input
                id="city"
                name="city"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {errors.city && (
                <span className="text-[#f30000] text-sm">{errors.city}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="code">Zip Code *</label>
              <input
                id="code"
                name="code"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter zip code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              {errors.code && (
                <span className="text-[#f30000] text-sm">{errors.code}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="state">State *</label>
              <input
                id="state"
                name="state"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              {errors.state && (
                <span className="text-[#f30000] text-sm">{errors.state}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="coun">Country *</label>
              <ReactFlagsSelect
                id="coun"
                selected={coun}
                onSelect={(code) => setCoun(code)}
                placeholder="Select Country"
                searchable
                searchPlaceholder="Search countries"
              />
              {errors.coun && (
                <span className="text-[#f30000] text-sm">{errors.coun}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="title">Job title *</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.title && (
                <span className="text-[#f30000] text-sm">{errors.title}</span>
              )}
            </div>

            <div className="grid">
              <label htmlFor="employer">Employer Name *</label>
              <input
                id="employer"
                name="employer"
                type="text"
                className="border-l-4 border-l-[--bg-color] shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Employer Name"
                value={employer}
                onChange={(e) => setEmployer(e.target.value)}
              />
              {errors.employer && (
                <span className="text-[#f30000] text-sm">
                  {errors.employer}
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[--bg-color] hover:bg-[var(--button-color)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              Apply For Loan
            </button>
            <p>
              Note: loan can only be considered if applicant is an account owner
              with{" "}
              <span className="font-medium text-[var(--button-color)]">
                anthstone bank
              </span>{" "}
              and has minimum of 10% of the desired loan amount.
            </p>
          </div>
        </form>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}  onClick={() => navigate('/overview')} >
          <p className="font-bold text-xl">Loan application submitted successfully!</p>
          <p>An Email will be sent to you shortly if your application is approved</p>        
        </Modal>
      )}
    </div>
  );
};

export default LoanForm;
