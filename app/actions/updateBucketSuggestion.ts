"use server"

import {z, ZodError} from "zod";

const schema = z.object({
    pink: z
        .string({
            required_error: "PINK is required",
            invalid_type_error: "PINK must be a string",
        })
        .min(2, {message: 'PINK must be 2 or more characters long'})
        .max(10, {message: 'PINK must be 10 or fewer characters long'})
        .trim(),
    red: z
        .string({
            required_error: "RED is required",
            invalid_type_error: "RED must be a string",
        })
        .min(2, {message: 'RED must be 2 or more characters long'})
        .max(10, {message: 'RED must be 10 or fewer characters long'})
        .trim(),
    blue: z
        .string({
            required_error: "BLUE is required",
            invalid_type_error: "BLUE must be a string",
        })
        .min(2, {message: 'BLUE must be 2 or more characters long'})
        .max(10, {message: 'BLUE must be 10 or fewer characters long'})
        .trim(),
    orange: z
        .string({
            required_error: "ORANGE is required",
            invalid_type_error: "ORANGE must be a string",
        })
        .min(2, {message: 'ORANGE must be 2 or more characters long'})
        .max(10, {message: 'ORANGE must be 10 or fewer characters long'})
        .trim(),
    green: z
        .string({
            required_error: "GREEN is required",
            invalid_type_error: "GREEN must be a string",
        })
        .min(2, {message: 'GREEN must be 2 or more characters long'})
        .max(10, {message: 'GREEN must be 10 or fewer characters long'})
        .trim(),
})

const updateBucketSuggestion = (prevState: any, formData: FormData) => {
    try {
        schema.parse({
            pink: formData.get('pink'),
            red: formData.get('red'),
            blue: formData.get('blue'),
            orange: formData.get('orange'),
            green: formData.get('green'),
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

export default updateBucketSuggestion;