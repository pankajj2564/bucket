"use client";
import updateBallForm from "@/app/actions/updateBallForm";
import SubmitButton from "@/app/SubmitButton";
import {useFormState} from "react-dom";
import Errors from "@/app/Errors";

const initialState = {
    success: false,
    message: '',
    name: '',
    volume: ''
}

const BallForm = () => {

    const [state, formAction] = useFormState(updateBallForm, initialState)

    return (
        <>
            <h4>Ball Form</h4>
            <form action={formAction} autoComplete={'off'}>
                <table>
                    <tbody>
                    <tr>
                        <th>Ball Name:</th>
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
                <Errors data={state?.message}/>
            </form>
        </>
    )
}

export default BallForm