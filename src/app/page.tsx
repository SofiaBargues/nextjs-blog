import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">
        Welcome to my blog !
      </h1>
      <p className="text-[16px]">This is a next.js blog.</p>
      <div className="mt-8">
        <LoginLink className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Sign in
        </LoginLink>

        <RegisterLink className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Sign up
        </RegisterLink>
      </div>
    </div>
  );
}
