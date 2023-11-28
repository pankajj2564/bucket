"use server"

import {z, ZodError} from "zod";

const schema = z.object({
    name: z
        .string({
            required_error: "Bucket Name is required",
            invalid_type_error: "Bucket Name must be a string",
        })
        .min(2, {message: 'Bucket Name must be 2 or more characters long'})
        .max(10, {message: 'Bucket Name must be 10 or fewer characters long'})
        .trim(),
    volume: z
        .number({
            required_error: "Volume is required",
            invalid_type_error: "Volume must be a number",
        })
        .min(0, {message: 'Volume must be 0 or more characters long'})
        .max(10000, {message: 'Volume must be 10000 or fewer characters long'})
        .positive({message: 'Volume must be a positive number'})
})

const updateBucketForm = async (prevState: any, formData: FormData) => {
    try {
        schema.parse({
            name: formData.get('name'),
            volume: Number(formData.get('volume')),
        })
        return {
            success: true,
            message: 'Success'
        }
    } catch (e: ZodError | any) {
        return {
            success: false,
            message: e?.errors || e
        }
    }
}

export default updateBucketForm;