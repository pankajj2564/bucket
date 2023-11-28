"use client"
import {useContext} from "react";
import {AppContext} from "@/app/AppProvider";

const Result = () => {

    const {state}: any = useContext(AppContext)

    console.log('state',state)

    return (
        <>
            <h4></h4>
            <p>&nbsp;</p>
            <form action="">
                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}>
                            <h4>RESULT</h4>
                            <p>Following are the suggested buckets:</p>
                        </td>
                    </tr>
                    <tr className={'border'}>
                        <th>Bucket A:</th>
                        <td>50 Green Balls, 40 Orange Balls and 20 Blue Balls</td>
                    </tr>
                    <tr className={'border'}>
                        <th>Bucket B:</th>
                        <td>10 Pink Balls, 20 Red Balls and 10 Blue Balls</td>
                    </tr>
                    <tr>
                        <td colSpan={2} align={'right'}>*(Numbers of balls are just for reference)</td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Result