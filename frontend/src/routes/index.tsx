import { createFileRoute } from '@tanstack/react-router';
import { useLogin } from '../../hooks/queries/useAuth';
import type { LoginUserType } from '../../types/User';
import { formOptions, useForm } from "@tanstack/react-form";
import { IconX } from "@tabler/icons-react"

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
      console.log(value);
    }
  })

  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="flex bg-[#EBE5C2] flex-col w-100 h-100 p-3 rounded-xl shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]"
      >
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
            <div className='flex flex-col relative'>
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
              <IconX onClick={() => field.handleChange('')} size={23} className='absolute right-2 top-2 cursor-pointer' />
            </div>
          )}
        />
          <form.Field
            name='password'
            validators={{
              onBlurAsyncDebounceMs: 500,
              onBlurAsync: ({ value }) =>
                !value ? "Password is required" : undefined
            }}
            children={(field) => (
              <div className='flex flex-col relative'>
                <input
                  className='border rounded-md p-2 mt-3 bg-[#F8F3D9]'
                  type="text"
                  name="password"
                  value={field.state.value}
                  placeholder="Password"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors ? (
                  <em className='text-red-500 text-xs'>{field.state.meta.errors.join(', ')}</em>
                ) : null}
                <IconX onClick={() => field.handleChange('')} size={23} className='absolute right-2 top-5 cursor-pointer' />
              </div>
            )}
          />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit} className='border p-2 rounded-md mt-auto bg-[#B9B28A]'>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  );
}
