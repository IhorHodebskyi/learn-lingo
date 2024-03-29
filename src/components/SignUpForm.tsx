import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

interface MyFormValues {
	name: string;
	email: string;
	password: string;
}
const initialValues: MyFormValues = {
	name: "",
	email: "",
	password: "",
};

const schema = yup.object().shape({
	name: yup.string().min(3).max(10).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).max(16).required(),
});

interface SignUpFormProps {}

export default function SignUpForm({}: SignUpFormProps) {
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div>
			<h1 className="font-medium text-5xl mb-5">
				Registration
			</h1>
			<p className="font-normal text-base mb-10">
				Thank you for your interest in our platform! In
				order to register, we need some information. Please
				provide us with the following information
			</p>

			<Formik
				initialValues={initialValues}
				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
				}}
				validationSchema={schema}
			>
				{() => (
					<Form
						autoComplete="off"
						className="flex flex-col"
					>
						<div className="relative">
							<Field
								className="peer px-4 py-3 w-full rounded-xl mb-4 border-2 br-[#121417]"
								type="name"
								name="name"
								id="name"
								placeholder=""
							/>

							<label className="absolute bottom-14 left-5 peer-hover:bottom-14  peer-focus:bottom-14 peer-placeholder-shown:bottom-8 peer-focus:left-5  text-[#121417] duration-300 ease-in-out">
								<span className="font-normal text-base bg-[#FFFFFF]">
									Name
								</span>
							</label>
						</div>
						<div className="relative">
							<Field
								className="peer px-4 py-3 w-full rounded-xl mb-4 border-2 br-[#121417]"
								type="email"
								name="email"
								id="email"
								placeholder=""
							/>

							<label className="absolute bottom-14 left-5 peer-hover:bottom-14  peer-focus:bottom-14 peer-placeholder-shown:bottom-8 peer-focus:left-5  text-[#121417] duration-300 ease-in-out">
								<span className="font-normal text-base bg-[#FFFFFF]">
									Email
								</span>
							</label>
						</div>
						<div className="relative">
							<Field
								className="peer px-4 py-3 w-full rounded-xl mb-10 border-2 br-[#121417] "
								type="password"
								name="password"
								placeholder=""
							/>
							<label className="absolute bottom-20 left-5 peer-hover:bottom-20  peer-focus:bottom-20 peer-placeholder-shown:bottom-14 peer-focus:left-5  text-[#121417] duration-300 ease-in-out">
								<span className="font-normal text-base bg-[#FFFFFF]">
									Password
								</span>
							</label>
							<img
								className="absolute top-4 right-6 w-5 h-5"
								src={
									showPassword
										? "/icon/Vector-2.svg"
										: "/icon/eye-off.svg"
								}
								onClick={togglePassword}
							/>
						</div>

						<button
							className="px-46 py-4 bg-amber-400 hover:bg-amber-300 rounded-xl duration-300 ease-in-out"
							type="submit"
						>
							Sign Up
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
