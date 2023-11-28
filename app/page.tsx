import AppProvider from "@/app/AppProvider";
import BucketForm from "@/app/BucketForm";
import BallForm from "@/app/BallForm";
import BucketSuggestion from "@/app/BucketSuggestion";
import Result from "@/app/Result";

export default function Home() {
    return (
        <main>
            <AppProvider>
                <div className="d-flex">
                    <div className="d-flex-col">
                        <BucketForm/>
                    </div>
                    <div className="d-flex-col">
                        <BallForm/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="d-flex-col">
                        <BucketSuggestion/>
                    </div>
                    <div className="d-flex-col">
                        <Result/>
                    </div>
                </div>
            </AppProvider>
        </main>
    )
}
