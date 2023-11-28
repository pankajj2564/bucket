"use client";
import updateBucketSuggestion from "@/app/actions/updateBucketSuggestion";
import SubmitButton from "@/app/SubmitButton";
import {useFormState} from "react-dom";
import Errors from "@/app/Errors";

const initialState = {
    success: false,
    message: '',
    pink: '',
    red: '',
    blue: '',
    orange: '',
    green: '',
}

const BucketSuggestion = () => {

    const [state, formAction] = useFormState(updateBucketSuggestion, initialState)

    return (
        <>
            <h4>Bucket Suggestion</h4>
            <form action={formAction} autoComplete={'off'}>
                <table>
                    <tbody>
                    <tr>
                        <th>PINK</th>
                        <td><input type="text" name={'pink'}/></td>
                    </tr>
                    <tr>
                        <th>RED</th>
                        <td><input type="text" name={'red'}/></td>
                    </tr>
                    <tr>
                        <th>BLUE</th>
                        <td><input type="text" name={'blue'}/></td>
                    </tr>
                    <tr>
                        <th>ORANGE</th>
                        <td><input type="text" name={'orange'}/></td>
                    </tr>
                    <tr>
                        <th>GREEN</th>
                        <td><input type="text" name={'green'}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className={'center'}>
                            <SubmitButton>Place balls in bucket</SubmitButton>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <Errors data={state?.message}/>
            </form>
        </>
    )
}

export default BucketSuggestion