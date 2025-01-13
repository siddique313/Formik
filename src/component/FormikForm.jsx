import { useFormik } from "formik";
import { SignUpSchema } from "./sechema/index";

export default function FormikForm() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start gap-3 shadow-2xl w-96 px-8 py-7 "
      >
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="name">
            Name
          </label>
          {errors.name && touched.name ? (
            <p className="text-red-600 text-xs">{errors.name}</p>
          ) : null}

          {errors.name && touched.name ? (
            <input
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              type="name"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          {errors.email && touched.email ? (
            <p className="text-red-600 text-xs">{errors.email}</p>
          ) : null}
          {errors.email && touched.email ? (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="password">
            Password
          </label>
          {errors.password && touched.password ? (
            <p className="text-red-600 text-xs">{errors.password}</p>
          ) : null}
          {errors.password && touched.password ? (
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              autoComplete="off"
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              autoComplete="off"
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <div className="w-full flex flex-col items-start">
          <label className="mb-2" htmlFor="confirm-password">
            confirm-password
          </label>
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-red-600 text-xs">{errors.confirm_password}</p>
          ) : null}
          {errors.confirm_password && touched.confirm_password ? (
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="confirm_password"
              autoComplete="off"
              className="border-2 border-red-600 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="confirm_password"
              autoComplete="off"
              className="border-2 border-slate-300 outline-none rounded-2xl pl-2 py-1 w-full"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          )}
        </div>
        <button className="w-full bg-black text-white py-1 rounded-2xl text-xl">
          submit
        </button>
      </form>
    </div>
  );
}
