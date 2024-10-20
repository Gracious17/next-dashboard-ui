"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be at least 3 chararcters long!" })
    .max(20, { message: "username must be at most  20 chararcters long!" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 charaters long!" }),
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
  phone: z.string().min(1, { message: "phone  is required" }),
  address: z.string().min(1, { message: "address  is required" }),
  bloodType: z.string().min(1, { message: "blood Type  is required" }),

  birthday: z.date({ message: "birthday is required" }),
  sex: z.enum(["male", "female"], { message: "sex is required" }),
  img: z.instanceof(File, { message: "image is required" }),
});
type inputs = z.infer<typeof schema>;
const TeacherForm = ({
  type,
  data,
  name,
}: {
  type: "create" | "update";
  data?: any;
  name: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <h1 className="text-xl font-semibold">Create a new {name}?</h1>
        <span className="text-xs text-gray-400 font-medium ">
          Authentication Information
        </span>
        <div className="flex justify-between flex-wrap gap-4 ">
          <InputField
            label="username"
            name="username"
            defaultValue={data?.username}
            register={register}
            error={errors.username}
          />
          <InputField
            label="email"
            name="email"
            type="email"
            defaultValue={data?.email}
            register={register}
            error={errors.email}
          />
          <InputField
            label="password"
            name="password"
            type="password"
            defaultValue={data?.password}
            register={register}
            error={errors.password}
          />
        </div>

        <span className="text-xs text-gray-400 font-medium ">
          Personal Information
        </span>
        <div className="flex justify-between flex-wrap gap-4  ">
          <InputField
            label="last Name"
            name="lastName"
            defaultValue={data?.lastName}
            register={register}
            error={errors.lastName}
          />
          <InputField
            label="First Name"
            name="firstName"
            defaultValue={data?.firstName}
            register={register}
            error={errors.firstName}
          />
          <InputField
            label="phone"
            name="phone"
            defaultValue={data?.phone}
            register={register}
            error={errors.phone}
          />
          <InputField
            label="address"
            name="address"
            defaultValue={data?.address}
            register={register}
            error={errors.address}
          />
          <InputField
            label="Blood Type"
            name="bloodType"
            type="bloodType"
            defaultValue={data?.bloodType}
            register={register}
            error={errors.bloodType}
          />
          <InputField
            label="Birtday"
            name="birthday"
            defaultValue={data?.birthday}
            register={register}
            error={errors.birthday}
            type="date"
          />
          <div className="flex flex-col gap-2 w-full md:w-1/4 ">
            <label className="text-xs text-gray-600">Sex</label>
            <select
              className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {errors.sex?.message && (
              <p className="text-xs text-red-600">
                {errors.sex.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center ">
            <label
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer "
              htmlFor="img"
            >
              <Image src="/upload.png" alt="" width={28} height={28} />
              <span>Upload a photo</span>
            </label>
            <input
              type="file"
              id="img"
              {...register("img")}
              className="hidden"
            />
            {errors.img?.message && (
              <p className="text-xs text-red-600">
                {errors.img.message.toString()}
              </p>
            )}
          </div>
        </div>
        <button className="bg-blue-400 text-white p-2 rounded-md ">
          {type === "create" ? "create" : "update"}
        </button>
      </form>
    </div>
  );
};

export default TeacherForm;
{
  /* <form onSubmit={handleSubmit((d) => console.log(d))}>
<input {...register('name')} />
{errors.name?.message && <p>{errors.name?.message}</p>}
<input type="number" {...register('age', { valueAsNumber: true })} />
{errors.age?.message && <p>{errors.age?.message}</p>}
<input type="submit" />
</form> */
}
