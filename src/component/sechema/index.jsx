import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(4).max(20).required("Pleas filled a required name"),
  email: Yup.string().email().required("Pleas filled a required email"),
  password: Yup.string().required("Pleas filled a required password").min(8),
  confirm_password: Yup.string()
    .required("Pleas filled a required confirm_password")
    .min(8)
    .oneOf([Yup.ref("password"), null, "password must match"]),
});
