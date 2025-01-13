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
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start border-4 border-slate-500 rounded-xl gap-3 shadow-2xl w-96 px-8 py-7 "
      >
        <label htmlFor="name">Name</label>
        {errors.name && touched.name ? (
          <p className="text-red-600 text-xs">{errors.name}</p>
        ) : null}
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
        <label htmlFor="email">Email</label>
        {errors.email && touched.email ? (
          <p className="text-red-600 text-xs">{errors.email}</p>
        ) : null}
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
        <label htmlFor="password">Password</label>
        {errors.password && touched.password ? (
          <p className="text-red-600 text-xs">{errors.password}</p>
        ) : null}
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
        <label htmlFor="confirm-password">confirm-password</label>
        {errors.confirm_password && touched.confirm_password ? (
          <p className="text-red-600 text-xs">{errors.confirm_password}</p>
        ) : null}
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
        <button className="w-full bg-black text-white py-1 rounded-2xl text-xl">
          submit
        </button>
      </form>
    </div>
  );
}
