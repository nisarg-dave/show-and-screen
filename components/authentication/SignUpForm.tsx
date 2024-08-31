import { GoogleAuthButton } from "./AuthButtons";
import AuthenticationForm from "./AuthenticationForm";

interface SignUpFormProps {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
  signup: boolean;
}

function SignUpForm({ setSignup, signup }: SignUpFormProps) {
  return (
    <div className="border-border border-2 p-4 bg-primary w-[35rem] h-[43rem] rounded-md">
      <h1 className="text-2xl font-semibold tracking-tight mb-2 text-center">
        Create an account
      </h1>
      <AuthenticationForm signup={signup} />
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>
      <GoogleAuthButton />
      <div className="flex justify-end mt-9">
        <span
          className=" cursor-pointer hover:underline text-sm"
          onClick={() => setSignup((prevState) => !prevState)}
        >
          Already have an account?
        </span>
      </div>
    </div>
  );
}

export default SignUpForm;
