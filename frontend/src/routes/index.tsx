import { createFileRoute } from '@tanstack/react-router';
import { useLogin } from '../../hooks/queries/useAuth';
import type { LoginUserType } from '../../types/User';
import { formOptions, useForm } from "@tanstack/react-form";

export const Route = createFileRoute('/')({
  component: App,
});

const formOpts = formOptions({
  defaultValues: {
    email: '',
    password: '',
  } as LoginUserType,
})

function App() {
  const mutation = useLogin();
  const form = useForm({
    ...formOpts,
    onSubmit: ({ value }) => {

    }
  })

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <div className="flex bg-[#EBE5C2] flex-col w-100 h-100 p-3 rounded-xl shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='text-2xl font-bold mt-3'>Login</h1>
          <hr className='my-5 w-80' />
        </div>
        <form.Field
          name='email'
          validators={{
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: ({ value }) =>
              !value ? "Email is required" : undefined
          }}
          children={(field) => (
            <>
              <input
                className='border rounded-md p-2 bg-[#F8F3D9]'
                type="text"
                name="email"
                value={field.state.value}
                placeholder="Email"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors ? (
                <em className='text-red-500 text-xs mt-1'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </>

          )}
        />
        <form.Field
          name='password'
          validators={{
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: ({ value }) =>
              !value ? "Password is required" : undefined
          }}
          children={(field) => (
            <>
              <input
                className='border rounded-md p-2 mt-3 bg-[#F8F3D9]'
                type="text"
                name="password"
                value={field.state.value}
                placeholder="Password"
                onChange={(e) => field.handleChange(e.target.value)}
              />
              {field.state.meta.errors ? (
                <em className='text-red-500 text-xs'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </>
          )}
        />
        <button className='border p-2 rounded-md mt-auto bg-[#B9B28A]' onClick={form.handleSubmit}>Login</button>
      </div>
    </div>
  );
}
