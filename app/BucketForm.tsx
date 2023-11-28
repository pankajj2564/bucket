"use client";
import updateBucketForm from "@/app/actions/updateBucketForm";
import SubmitButton from "@/app/SubmitButton";
import {useFormState} from 'react-dom'
import Errors from "@/app/Errors";
import {useContext, useEffect} from "react";
import {AppContext} from "@/app/AppProvider";

const initialState = {
    success: false,
    message: '',
    name: '',
    volume: ''
}

const BucketForm = () => {

    const {dispatch}: any = useContext(AppContext)
    const [formState, formAction] = useFormState(updateBucketForm, initialState)

    useEffect(() => {
        if(!formState.success) return;
        dispatch({bucketForm: formState.message})
    }, [dispatch, formState.message, formState.success]);

    return (
        <>
            <h4>Bucket Form</h4>
            <form action={formAction} autoComplete={'off'}>
                <table>
                    <tbody>
                    <tr>
                        <th>Bucket Name:</th>
                        <td><input type="text" name={'name'}/></td>
                    </tr>
                    <tr>
                        <th>Volume (in inches):</th>
                        <td><input type="number" name={'volume'} step={0.01}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className={'center'}>
                            <SubmitButton>Save</SubmitButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Errors data={formState?.message}/>
            </form>
        </>
    )
}

export default BucketForm